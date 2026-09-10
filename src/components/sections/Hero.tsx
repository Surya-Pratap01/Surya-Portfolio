'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { profile } from '@/content/profile';

const roles = ['Computer Science Student', 'Full-Stack Developer', 'AI/ML Enthusiast'];

const GITHUB_SVG = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LINKEDIN_SVG = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const X_SVG = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const INSTAGRAM_SVG = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

const EMAIL_SVG = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const socialLinks = [
  { href: profile.social.github, label: 'GitHub', icon: GITHUB_SVG },
  { href: profile.social.linkedin, label: 'LinkedIn', icon: LINKEDIN_SVG },
  { href: profile.social.x, label: 'X (Twitter)', icon: X_SVG },
  { href: profile.social.instagram, label: 'Instagram', icon: INSTAGRAM_SVG },
  { href: `mailto:${profile.social.email}`, label: 'Email', icon: EMAIL_SVG },
];

function useTypewriter(texts: string[], reducedMotion: boolean) {
  const [displayText, setDisplayText] = useState(reducedMotion ? texts[texts.length - 1] : '');
  const [settled, setSettled] = useState(reducedMotion);
  const stateRef = useRef({ textIndex: 0, charIndex: 0, cycles: 0, deleting: false });

  useEffect(() => {
    if (reducedMotion || settled) return;
    const state = stateRef.current;
    const totalCycles = 2;
    const tick = () => {
      const current = texts[state.textIndex];
      if (!state.deleting) {
        if (state.charIndex < current.length) {
          state.charIndex++;
          setDisplayText(current.slice(0, state.charIndex));
          return setTimeout(tick, 45);
        }
        if (state.textIndex === texts.length - 1 && state.cycles >= totalCycles - 1) {
          setSettled(true);
          return;
        }
        return setTimeout(() => { state.deleting = true; tick(); }, 1600);
      } else {
        if (state.charIndex > 0) {
          state.charIndex--;
          setDisplayText(current.slice(0, state.charIndex));
          return setTimeout(tick, 25);
        }
        state.deleting = false;
        state.textIndex = (state.textIndex + 1) % texts.length;
        if (state.textIndex === 0) state.cycles++;
        return setTimeout(tick, 200);
      }
    };
    const timer = setTimeout(tick, 600);
    return () => clearTimeout(timer);
  }, [texts, reducedMotion, settled]);

  return { displayText, settled };
}

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [hasResume, setHasResume] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const { displayText } = useTypewriter(roles, shouldReduceMotion ?? false);

  useEffect(() => {
    fetch('/resume.pdf', { method: 'HEAD' })
      .then((r) => { if (r.ok) setHasResume(true); })
      .catch(() => {});
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.09,
        delayChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.15 : 0.55,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  };

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative min-h-[100svh] flex items-center pt-24 pb-20 overflow-hidden bg-bg-deep"
    >
      <div className="paper-grain absolute inset-0 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="lg:col-span-7 xl:col-span-8">
            <motion.p
              variants={itemVariants}
              className="text-sm font-medium text-text-muted mb-8 tracking-wide"
            >
              Bennett University · B.Tech CSE · 3rd Year
            </motion.p>

            <motion.div variants={itemVariants}>
              <h1
                className="font-[family-name:var(--font-display)] text-text-primary"
                style={{
                  fontSize: 'clamp(3.75rem, 12vw, 7.5rem)',
                  letterSpacing: '-0.03em',
                  lineHeight: 0.92,
                }}
              >
                SURYA
              </h1>
              <p
                className="mt-3 font-medium text-text-primary"
                style={{ fontSize: 'clamp(1.15rem, 2.8vw, 1.65rem)', letterSpacing: '-0.02em' }}
              >
                Pratap Singh Rathod
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-6 h-7 flex items-center"
              aria-live="off"
            >
              <span
                className="text-accent font-medium"
                style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)' }}
                aria-hidden="true"
              >
                {displayText}
                <span className="cursor-blink ml-0.5">|</span>
              </span>
              <span className="sr-only">Full-Stack Developer and Applied AI Builder</span>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="mt-8 text-text-muted max-w-xl"
              style={{ fontSize: 'clamp(1.05rem, 2vw, 1.2rem)', lineHeight: '1.75' }}
            >
              {profile.headline}
            </motion.p>

            <motion.div variants={itemVariants} className="mt-10 flex flex-wrap gap-3">
              <a
                href="#build"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-white font-semibold rounded-full text-sm hover:opacity-90 active:scale-[0.98] transition-all duration-150"
              >
                View my work
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              {hasResume && (
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 font-medium rounded-full text-sm text-text-primary border border-border bg-white hover:border-border-mid active:scale-[0.98] transition-all duration-150"
                >
                  View resume
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              )}
            </motion.div>

            <motion.div variants={itemVariants} className="mt-10 flex items-center gap-5">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-text-subtle hover:text-accent transition-colors duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Editorial monogram / photo panel */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 xl:col-span-4 flex justify-start lg:justify-end"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[320px]">
              <div
                className="absolute -inset-3 rounded-sm bg-bg-alt -z-10"
                aria-hidden="true"
              />
              <div className="relative aspect-[4/5] overflow-hidden border border-border bg-bg-alt">
                <div
                  className="profile-avatar-placeholder absolute inset-0"
                  aria-hidden={imgLoaded ? 'true' : undefined}
                >
                  <div className="flex flex-col items-center justify-center gap-4 px-8 text-center">
                    <span
                      className="font-[family-name:var(--font-display)] text-text-primary leading-none"
                      style={{ fontSize: '5.5rem' }}
                    >
                      S
                    </span>
                    <div className="w-10 h-px bg-accent" aria-hidden="true" />
                    <p className="text-xs font-medium tracking-[0.2em] uppercase text-text-muted">
                      Software Engineer
                    </p>
                  </div>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/profile/profile.jpg"
                  alt="Surya Pratap Singh Rathod"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                  style={{ opacity: imgLoaded ? 1 : 0 }}
                  onLoad={() => setImgLoaded(true)}
                  onError={() => {}}
                />
              </div>
              <p className="mt-4 text-xs text-text-subtle tracking-wide">
                Greater Noida · India
              </p>
            </div>
          </motion.div>
        </motion.div>

        {!shouldReduceMotion && (
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-text-subtle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <span className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">Scroll</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              aria-hidden="true"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
