'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { profile } from '@/content/profile';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const socialLinks = [
  { href: profile.social.github, label: 'GitHub' },
  { href: profile.social.linkedin, label: 'LinkedIn' },
  { href: profile.social.x, label: 'X (Twitter)' },
  { href: profile.social.instagram, label: 'Instagram' },
];

const inputClass =
  'w-full border border-border rounded-lg px-4 py-3.5 text-text-primary text-sm bg-white placeholder-text-subtle focus:outline-none focus:border-accent transition-colors duration-200';

function StyledInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={inputClass} />;
}

function StyledTextarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={`${inputClass} resize-none`} />;
}

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
      honeypot: (form.elements.namedItem('honeypot') as HTMLInputElement).value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (result.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setErrorMsg(result.message ?? 'Something went wrong. Please email me directly.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please try again or email me directly.');
    }
  }

  return (
    <section id="contact" aria-label="Contact" className="py-28 lg:py-36 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <p className="eyebrow mb-5">Contact</p>
          <h2
            className="font-[family-name:var(--font-display)] text-text-primary"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 3.25rem)', letterSpacing: '-0.025em' }}
          >
            Get in touch.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <p
              className="text-text-muted leading-relaxed mb-10 max-w-md"
              style={{ fontSize: '1rem', lineHeight: 1.8 }}
            >
              Whether you have a project idea, a question, or just want to say hi — I&apos;ll do my best to get back to you promptly.
            </p>

            <div className="mb-10 pb-10 border-b border-border">
              <p className="text-xs font-medium tracking-[0.12em] uppercase text-text-subtle mb-3">
                Email
              </p>
              <a
                href={`mailto:${profile.social.email}`}
                className="text-text-primary font-medium text-lg link-underline inline-flex items-center gap-3 hover:text-accent transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="w-5 h-5 text-accent flex-shrink-0"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                {profile.social.email}
              </a>
            </div>

            <div>
              <p className="text-xs font-medium tracking-[0.12em] uppercase text-text-subtle mb-4">
                Find me on
              </p>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium px-4 py-2 rounded-full text-text-muted border border-border bg-white hover:border-accent hover:text-accent transition-all duration-200"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.08 }}
            className="lg:col-span-7"
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white border border-border rounded-xl p-10 flex flex-col items-center justify-center gap-4 text-center shadow-[var(--shadow-card)]"
                  style={{ minHeight: '380px' }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-medium bg-accent-dim text-accent"
                    aria-hidden="true"
                  >
                    ✓
                  </div>
                  <h3
                    className="font-[family-name:var(--font-display)] text-2xl text-text-primary"
                  >
                    Message sent!
                  </h3>
                  <p className="text-text-muted text-sm max-w-xs" style={{ lineHeight: 1.7 }}>
                    Thanks — I&apos;ll get back to you as soon as I can.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 text-xs font-medium text-text-subtle hover:text-accent transition-colors underline underline-offset-2"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="bg-white border border-border rounded-xl p-7 sm:p-8 space-y-5 shadow-[var(--shadow-card)]"
                  noValidate
                >
                  <input
                    type="text"
                    name="honeypot"
                    style={{ display: 'none' }}
                    aria-hidden="true"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-medium tracking-[0.1em] uppercase text-text-subtle mb-2">
                      Name <span className="text-accent" aria-hidden="true">*</span>
                    </label>
                    <StyledInput
                      type="text"
                      id="contact-name"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-medium tracking-[0.1em] uppercase text-text-subtle mb-2">
                      Email <span className="text-accent" aria-hidden="true">*</span>
                    </label>
                    <StyledInput
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      autoComplete="email"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-medium tracking-[0.1em] uppercase text-text-subtle mb-2">
                      Message <span className="text-accent" aria-hidden="true">*</span>
                    </label>
                    <StyledTextarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      placeholder="What's on your mind?"
                    />
                  </div>

                  {status === 'error' && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      role="alert"
                      className="text-red-600 text-sm"
                    >
                      {errorMsg}
                    </motion.p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-3.5 bg-accent text-white font-semibold rounded-lg text-sm hover:opacity-90 active:scale-[0.99] transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === 'loading' ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
