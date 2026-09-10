'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { name: 'About', href: '/#about' },
  { name: 'Build', href: '/#build' },
  { name: 'Stack', href: '/#stack' },
  { name: 'Lead & Compete', href: '/#lead-compete' },
  { name: 'Contact', href: '/#contact' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasResume, setHasResume] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    fetch('/resume.pdf', { method: 'HEAD' })
      .then((r) => { if (r.ok) setHasResume(true); })
      .catch(() => {});

    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-20% 0px -75% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((s) => observer.observe(s));

    return () => {
      sections.forEach((s) => observer.unobserve(s));
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const isActive = (href: string) => activeSection === href.replace('/#', '').replace('#', '');

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={
        scrolled || isMobileMenuOpen
          ? {
              backgroundColor: 'rgba(247, 247, 245, 0.92)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              borderBottom: '1px solid var(--border)',
            }
          : {
              backgroundColor: 'transparent',
              borderBottom: '1px solid transparent',
            }
      }
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-xl text-text-primary tracking-tight hover:text-accent transition-colors"
          aria-label="Surya — Home"
        >
          Surya
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          <ul className="flex items-center gap-1" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`nav-link px-3 py-2 text-[0.8125rem] font-medium transition-colors duration-200 ${
                    isActive(link.href)
                      ? 'text-accent active'
                      : 'text-text-muted hover:text-text-primary'
                  }`}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {hasResume && (
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full text-[0.8125rem] font-semibold transition-all duration-200 bg-accent text-white hover:opacity-90"
            >
              Resume
            </a>
          )}
        </nav>

        <button
          className="md:hidden p-2 -mr-2 text-text-muted hover:text-text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 7h16M4 12h16M4 17h16'}
            />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-label="Navigation menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute inset-x-0 top-16"
            style={{
              backgroundColor: 'rgba(247, 247, 245, 0.98)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              borderBottom: '1px solid var(--border)',
            }}
          >
            <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-6">
              <nav aria-label="Mobile navigation">
                <ul className="flex flex-col gap-1" role="list">
                  {NAV_LINKS.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block py-3.5 text-lg font-medium transition-colors duration-150 border-b border-border ${
                          isActive(link.href)
                            ? 'text-accent'
                            : 'text-text-muted hover:text-text-primary'
                        }`}
                        aria-current={isActive(link.href) ? 'page' : undefined}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {hasResume && (
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm bg-accent text-white"
                >
                  Resume
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
