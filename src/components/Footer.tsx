'use client';

import { profile } from '@/content/profile';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="bg-white border-t border-[#E4E6E7] py-14"
      role="contentinfo"
      aria-label="Site Footer"
    >
      <div className="editorial-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#E4E6E7] items-start">
          {/* Brand & Positioning */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded border border-[#E4E6E7] bg-[#F7F7F4] flex items-center justify-center font-mono text-xs font-semibold text-[#17191D]">
                SR
              </span>
              <span className="font-semibold text-base text-[#17191D]">
                Surya Pratap Singh Rathod
              </span>
            </div>

            <p className="text-xs text-[#646B73] leading-relaxed max-w-sm">
              Full-Stack Developer and B.Tech Computer Science student at Bennett University (2024–2028). Building practical software with verified engineering standards.
            </p>

            <p className="font-mono text-xs text-[#646B73]">
              Greater Noida, Uttar Pradesh, India
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-4 space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#17191D] font-semibold block mb-3">
              Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono text-[#646B73]">
              <a href="#work" className="hover:text-[#2563EB] transition-colors">
                Featured Work
              </a>
              <a href="#about" className="hover:text-[#2563EB] transition-colors">
                About Background
              </a>
              <a href="#experience" className="hover:text-[#2563EB] transition-colors">
                Leadership
              </a>
              <a href="#skills" className="hover:text-[#2563EB] transition-colors">
                Technical Skills
              </a>
              <a href="#education" className="hover:text-[#2563EB] transition-colors">
                Education
              </a>
              <a href="#contact" className="hover:text-[#2563EB] transition-colors">
                Direct Contact
              </a>
            </div>
          </div>

          {/* Connect & Top */}
          <div className="md:col-span-3 space-y-3 md:text-right">
            <span className="font-mono text-xs uppercase tracking-wider text-[#17191D] font-semibold block mb-3">
              Connect
            </span>
            <div className="flex flex-col md:items-end gap-2 text-xs font-mono text-[#646B73]">
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#2563EB] transition-colors"
              >
                GitHub · @Surya-Pratap01
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#2563EB] transition-colors"
              >
                LinkedIn Profile
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#2563EB] transition-colors"
              >
                Download Resume (PDF)
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#646B73]">
          <p>
            © {new Date().getFullYear()} Surya Pratap Singh Rathod. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-[#17191D] transition-colors"
            aria-label="Scroll back to the top of the page"
          >
            <span>Back to top</span>
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
              <path d="M8 12V4M4 8l4-4 4 4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
