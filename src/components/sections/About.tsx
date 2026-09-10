'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { profile } from '@/content/profile';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
});

const facts = [
  { label: 'University', value: 'Bennett University' },
  { label: 'Degree', value: 'B.Tech CSE' },
  { label: 'Year', value: '3rd Year · Grad June 2028' },
  { label: 'Location', value: 'Greater Noida, India' },
  { label: 'Role', value: "Vice Captain, Men's Volleyball" },
];

const currently = [
  'Building full-stack & AI projects',
  'Exploring applied AI systems',
  'Vice Captain, Bennett Volleyball',
  'Looking for SWE internships',
];

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  const paragraphs = profile.mediumBio
    .split('\n\n')
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <section
      id="about"
      aria-label="About Surya"
      className="py-28 lg:py-36 bg-bg-alt"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div variants={fadeUp(0)} className="mb-16 lg:mb-20">
            <p className="eyebrow mb-5">About</p>
            <h2
              className="font-[family-name:var(--font-display)] text-text-primary max-w-2xl"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 3.25rem)', letterSpacing: '-0.025em', lineHeight: 1.15 }}
            >
              The person behind the projects.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-start">
            <motion.div
              variants={shouldReduceMotion ? {} : fadeUp(0.08)}
              className="lg:col-span-7 space-y-6"
            >
              {paragraphs.map((para, i) => (
                <p
                  key={i}
                  className="text-text-primary"
                  style={{
                    fontSize: 'clamp(1.05rem, 2vw, 1.15rem)',
                    lineHeight: '1.85',
                    maxWidth: '38rem',
                  }}
                >
                  {para}
                </p>
              ))}
            </motion.div>

            <motion.div
              variants={shouldReduceMotion ? {} : fadeUp(0.16)}
              className="lg:col-span-5"
            >
              <dl className="space-y-0">
                {facts.map((fact, i) => (
                  <div
                    key={fact.label}
                    className="editorial-row py-4 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-6"
                  >
                    <dt className="text-xs font-medium tracking-[0.12em] uppercase text-text-subtle flex items-center gap-3">
                      <span className="mono text-accent tabular-nums opacity-70">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {fact.label}
                    </dt>
                    <dd className="text-sm font-medium text-text-primary sm:text-right">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-10 pt-8 border-t border-border">
                <p className="text-xs font-medium tracking-[0.12em] uppercase text-text-subtle mb-5">
                  Currently
                </p>
                <ul className="space-y-3" role="list">
                  {currently.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-text-muted">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
