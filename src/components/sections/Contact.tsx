'use client';

import { useState } from 'react';
import { profile } from '@/content/profile';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'fallback'>('idle');

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(profile.social.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      if (res.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
      } else {
        // Fallback gracefully to mailto
        setStatus('fallback');
        const mailtoUrl = `mailto:${profile.social.email}?subject=${encodeURIComponent(
          `Portfolio Contact from ${formState.name}`
        )}&body=${encodeURIComponent(
          `Hi Surya,\n\n${formState.message}\n\nFrom: ${formState.name} (${formState.email})`
        )}`;
        window.location.href = mailtoUrl;
      }
    } catch {
      setStatus('fallback');
      const mailtoUrl = `mailto:${profile.social.email}?subject=${encodeURIComponent(
        `Portfolio Contact from ${formState.name}`
      )}&body=${encodeURIComponent(
        `Hi Surya,\n\n${formState.message}\n\nFrom: ${formState.name} (${formState.email})`
      )}`;
      window.location.href = mailtoUrl;
    }
  };

  return (
    <section
      id="contact"
      aria-label="Contact Information"
      className="py-20 md:py-28 bg-[#F7F7F4]"
    >
      <div className="editorial-container">
        {/* Section Header */}
        <div className="pb-8 border-b border-[#E4E6E7]">
          <p className="section-label mb-2">Get in Touch</p>
          <h2 className="font-serif-display text-3xl sm:text-5xl text-[#17191D] font-normal tracking-tight">
            Let&apos;s Connect
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Direct Channels Column */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-base sm:text-lg text-[#17191D] font-medium leading-relaxed">
              I am currently open to software engineering internships, technical collaborations, and full-stack project discussions.
            </p>

            <p className="text-sm text-[#646B73] leading-relaxed">
              Whether you are evaluating my projects for an engineering role, interested in technical architecture discussions, or want to connect about hackathons, please feel free to reach out directly.
            </p>

            {/* Direct Email Card */}
            <div className="bg-white border border-[#E4E6E7] rounded-lg p-6 shadow-sm space-y-4">
              <span className="font-mono text-xs uppercase tracking-wider text-[#646B73]">
                Direct Email
              </span>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="font-mono text-sm sm:text-base font-semibold text-[#17191D] break-all select-all">
                  {profile.social.email}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={copyEmailToClipboard}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium border border-[#E4E6E7] rounded hover:border-[#2563EB] hover:text-[#2563EB] transition-colors bg-[#F7F7F4]"
                    aria-label="Copy email address to clipboard"
                  >
                    {copied ? (
                      <>
                        <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true">
                          <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                        </svg>
                        <span className="text-emerald-700">Copied</span>
                      </>
                    ) : (
                      <>
                        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
                          <rect x="5" y="5" width="8" height="8" rx="1.5" strokeWidth="1.5" />
                          <path d="M3 11V3.5A1.5 1.5 0 014.5 2H11" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${profile.social.email}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium bg-[#17191D] text-white rounded hover:bg-[#2563EB] transition-colors"
                  >
                    <span>Mail</span>
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" className="w-3 h-3" aria-hidden="true">
                      <path d="M4 12L12 4M12 4H6M12 4V10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Link Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white border border-[#E4E6E7] rounded text-center text-xs font-mono font-medium text-[#17191D] hover:border-[#2563EB] hover:text-[#2563EB] transition-colors"
              >
                GitHub Profile
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white border border-[#E4E6E7] rounded text-center text-xs font-mono font-medium text-[#17191D] hover:border-[#2563EB] hover:text-[#2563EB] transition-colors"
              >
                LinkedIn Profile
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white border border-[#E4E6E7] rounded text-center text-xs font-mono font-medium text-[#17191D] hover:border-[#2563EB] hover:text-[#2563EB] transition-colors"
              >
                Resume PDF
              </a>
            </div>
          </div>

          {/* Direct Message Form Column */}
          <div className="lg:col-span-6 bg-white border border-[#E4E6E7] rounded-lg p-6 sm:p-8 shadow-sm">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#17191D] pb-3 border-b border-[#E4E6E7]">
              Send a Direct Message
            </h3>

            {status === 'success' ? (
              <div className="mt-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded text-sm">
                Thank you for your message. I will respond to you via email shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono uppercase text-[#646B73] mb-1">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm bg-[#F7F7F4] border border-[#E4E6E7] rounded focus:bg-white focus:outline-none focus:border-[#2563EB] transition-colors"
                    placeholder="e.g. Jane Doe"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono uppercase text-[#646B73] mb-1">
                    Your Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm bg-[#F7F7F4] border border-[#E4E6E7] rounded focus:bg-white focus:outline-none focus:border-[#2563EB] transition-colors"
                    placeholder="e.g. jane@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono uppercase text-[#646B73] mb-1">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm bg-[#F7F7F4] border border-[#E4E6E7] rounded focus:bg-white focus:outline-none focus:border-[#2563EB] transition-colors resize-none"
                    placeholder="Hello Surya, I came across your portfolio..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-2.5 px-4 text-sm font-medium bg-[#17191D] text-white rounded hover:bg-[#2563EB] transition-colors disabled:opacity-50"
                >
                  {status === 'submitting' ? 'Processing...' : 'Send Message'}
                </button>

                <p className="text-[11px] text-[#646B73] text-center font-mono pt-1">
                  Connects directly to suryarathore051@gmail.com
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
