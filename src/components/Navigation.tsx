'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const NAV_LINKS = [
  { name: 'Work', href: '/#work' },
  { name: 'About', href: '/#about' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Education', href: '/#education' },
  { name: 'Contact', href: '/#contact' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('work');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-25% 0px -65% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((s) => observer.observe(s));

    return () => {
      sections.forEach((s) => observer.unobserve(s));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileOpen) {
        setIsMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileOpen]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-[#F7F7F4]/95 backdrop-blur-md border-b border-[#E4E6E7] py-3.5 shadow-sm'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
      role="banner"
    >
      <div className="editorial-container flex items-center justify-between">
        {/* Brand / Monogram */}
        <Link
          href="/"
          className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-sm"
          aria-label="Surya Pratap Singh Rathod Homepage"
        >
          <span className="w-8 h-8 rounded border border-[#E4E6E7] bg-white flex items-center justify-center font-mono text-xs font-semibold tracking-wider text-[#17191D] group-hover:border-[#2563EB] group-hover:text-[#2563EB] transition-colors">
            SR
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-[#17191D] group-hover:text-[#2563EB] transition-colors">
              Surya Pratap Singh Rathod
            </span>
            <span className="text-[11px] font-mono text-[#646B73]">
              Bennett University · 2028
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
          <ul className="flex items-center gap-1" role="list">
            {NAV_LINKS.map((link) => {
              const targetId = link.href.replace('/#', '');
              const isActive = activeSection === targetId;
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                      isActive
                        ? 'text-[#2563EB] font-semibold bg-[#2563EB]/5'
                        : 'text-[#646B73] hover:text-[#17191D] hover:bg-black/5'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="h-4 w-px bg-[#E4E6E7] mx-2" aria-hidden="true" />

          {/* Resume Link */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-[#E4E6E7] bg-white text-[#17191D] rounded hover:border-[#2563EB] hover:text-[#2563EB] transition-all"
            aria-label="Open Resume PDF in a new tab"
          >
            <span>Resume</span>
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              className="w-3 h-3 opacity-70"
              aria-hidden="true"
            >
              <path
                d="M4 12L12 4M12 4H6M12 4V10"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1 text-xs font-medium border border-[#E4E6E7] bg-white rounded text-[#17191D]"
          >
            Resume
          </a>
          <button
            type="button"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="p-2 text-[#17191D] border border-[#E4E6E7] rounded bg-white hover:bg-[#EFEFEA] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
            aria-expanded={isMobileOpen}
            aria-controls="mobile-navigation"
            aria-label={isMobileOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isMobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-0 top-[61px] bg-[#F7F7F4] z-50 p-6 flex flex-col justify-between overflow-y-auto md:hidden border-t border-[#E4E6E7]"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <nav>
            <ul className="space-y-2" role="list">
              {NAV_LINKS.map((link) => {
                const targetId = link.href.replace('/#', '');
                const isActive = activeSection === targetId;
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className={`block py-3 px-4 text-base font-medium rounded border ${
                        isActive
                          ? 'border-[#2563EB] bg-[#2563EB]/5 text-[#2563EB]'
                          : 'border-transparent text-[#17191D] hover:bg-[#EFEFEA]'
                      }`}
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="pt-8 border-t border-[#E4E6E7] space-y-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-white bg-[#2563EB] rounded hover:bg-[#1D4ED8] transition-colors"
            >
              <span>Download Resume PDF</span>
              <svg
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path
                  d="M8 2v9m0 0l-3-3m3 3l3-3M2 14h12"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <div className="flex justify-center gap-6 pt-2 font-mono text-xs text-[#646B73]">
              <a
                href="https://github.com/Surya-Pratap01"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#2563EB]"
              >
                GitHub
              </a>
              <span>·</span>
              <a
                href="https://www.linkedin.com/in/surya-pratap-a5a855312/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#2563EB]"
              >
                LinkedIn
              </a>
              <span>·</span>
              <a
                href="mailto:suryarathore051@gmail.com"
                className="hover:text-[#2563EB]"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
