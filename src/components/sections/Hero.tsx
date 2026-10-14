'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { profile } from '@/content/profile';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: 0.04,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.45,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 border-b border-[#E4E6E7]"
    >
      <div className="editorial-container">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column: Editorial Typography & Positioning */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Context Eyebrow */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs font-medium uppercase tracking-wider text-[#646B73]">
                {profile.university} · B.Tech CSE (2024–2028)
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" aria-hidden="true" />
              <span className="font-mono text-xs text-[#646B73]">
                CGPA 8.14
              </span>
            </motion.div>

            {/* Main Name & Title */}
            <motion.div variants={itemVariants} className="space-y-3">
              <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[#17191D] tracking-tight leading-[1.08] font-normal">
                Surya Pratap Singh Rathod
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-[#17191D] leading-snug">
                Full-Stack Developer building thoughtful software for real-world problems.
              </p>
            </motion.div>

            {/* Supporting Editorial Paragraph */}
            <motion.p
              variants={itemVariants}
              className="mt-6 text-base sm:text-lg text-[#646B73] leading-relaxed max-w-2xl"
            >
              I build reliable web applications, databases, and applied AI systems.
              From campus food discovery and verified peer ratings to municipal civic tracking
              and land acquisition risk platforms, I focus on clean software architecture,
              database access controls, and shipping working tools that solve real operational bottlenecks.
            </motion.p>

            {/* Quick Credentials Strip */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap gap-2 text-xs font-mono text-[#646B73]"
            >
              <span className="px-2.5 py-1 bg-white border border-[#E4E6E7] rounded">
                Technical Head, Data Science Society
              </span>
              <span className="px-2.5 py-1 bg-white border border-[#E4E6E7] rounded">
                Vice-Captain, Bennett Volleyball
              </span>
              <span className="px-2.5 py-1 bg-white border border-[#E4E6E7] rounded">
                SIH 2026 Internal Finalist (Rank 62/600+)
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="mt-9 flex flex-wrap items-center gap-3.5"
            >
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium bg-[#17191D] text-white rounded hover:bg-[#2563EB] transition-colors shadow-sm"
              >
                <span>View Selected Work</span>
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8h10m-4-4l4 4-4 4"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium bg-white text-[#17191D] border border-[#E4E6E7] rounded hover:border-[#2563EB] hover:text-[#2563EB] transition-colors shadow-sm"
              >
                <span>View Resume</span>
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  className="w-3.5 h-3.5 opacity-70"
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

              {/* External Profile Links */}
              <div className="flex items-center gap-3 ml-1 sm:ml-3">
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-[#646B73] hover:text-[#17191D] hover:bg-white border border-transparent hover:border-[#E4E6E7] rounded transition-all"
                  aria-label="GitHub Profile (opens in new tab)"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-[#646B73] hover:text-[#17191D] hover:bg-white border border-transparent hover:border-[#E4E6E7] rounded transition-all"
                  aria-label="LinkedIn Profile (opens in new tab)"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Authentic Professional Portrait */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex flex-col items-center lg:items-end"
          >
            <div className="w-full max-w-sm sm:max-w-md bg-white p-3.5 border border-[#E4E6E7] rounded-lg shadow-sm">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded bg-[#EFEFEA]">
                <Image
                  src="/images/surya-portrait.jpg"
                  alt="Portrait of Surya Pratap Singh Rathod"
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                  className="object-cover object-top hover:scale-[1.02] transition-transform duration-500 ease-out"
                />
              </div>

              {/* Portrait Caption / Micro-Metadata */}
              <div className="mt-3.5 pt-3 border-t border-[#E4E6E7] flex items-center justify-between text-xs">
                <span className="font-mono text-[#17191D] font-medium">
                  Surya Pratap Singh Rathod
                </span>
                <span className="font-mono text-[#646B73]">
                  B.Tech CSE &apos;28
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
