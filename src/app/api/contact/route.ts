import { NextResponse } from 'next/server';

// Rate limiting (simple in-memory, per-IP)
const WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS = 3;
const requestCounts = new Map<string, { count: number; resetAt: number }>();

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = requestCounts.get(ip);
  if (!entry || now > entry.resetAt) {
    requestCounts.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  if (entry.count >= MAX_REQUESTS) return false;
  entry.count++;
  return true;
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
      request.headers.get('x-real-ip') ??
      'unknown';

    if (!rateLimit(ip)) {
      return NextResponse.json(
        { success: false, message: 'Too many requests. Please wait a minute.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, message, honeypot } = body;

    // Honeypot - silently succeed for bots
    if (honeypot) return NextResponse.json({ success: true });

    // Basic validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { success: false, message: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL ?? 'suryarathore051@gmail.com';

    if (!apiKey) {
      console.warn('[Contact] RESEND_API_KEY not set. Message not delivered.', { name, email });
      return NextResponse.json(
        {
          success: false,
          message:
            'Email sending is not configured yet. Please contact me directly at suryarathore051@gmail.com',
        },
        { status: 503 }
      );
    }

    const { Resend } = await import('resend');
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [contactEmail],
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `<div style="font-family:sans-serif;max-width:600px;padding:24px"><h2 style="color:#F5A623">New Portfolio Message</h2><p><strong>From:</strong> ${name} &lt;${email}&gt;</p><div style="background:#111113;border-radius:12px;padding:16px;margin-top:12px"><p style="color:#F5F5F7;white-space:pre-wrap;margin:0">${message}</p></div></div>`,
    });

    if (error) {
      console.error('[Contact] Resend error:', error);
      return NextResponse.json(
        { success: false, message: 'Failed to send message. Please email me directly.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[Contact] Unexpected error:', err);
    return NextResponse.json(
      { success: false, message: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
