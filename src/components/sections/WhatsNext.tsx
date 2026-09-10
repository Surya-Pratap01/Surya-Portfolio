'use client';

import { motion, useReducedMotion } from 'framer-motion';

const directions = [
  {
    title: 'Building better software',
    desc: 'Deepening my understanding of system design, distributed systems, and engineering at scale — not just shipping features, but building things the right way.',
  },
  {
    title: 'Going deeper into applied AI',
    desc: 'Exploring how AI systems are built end-to-end — from model integration and agent workflows to the infrastructure that makes them reliable in production.',
  },
  {
    title: 'Looking for internship opportunities',
    desc: 'Actively seeking software engineering and applied AI internships for 2025–26 where I can contribute real work and learn from experienced engineers.',
  },
  {
    title: 'Growing as a leader',
    desc: 'Continuing to develop as Vice Captain — learning what it takes to communicate across a team under pressure and translate that consistency into engineering work.',
  },
];

export default function WhatsNext() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="whats-next"
      aria-label="What's Next"
      className="py-28 lg:py-36 bg-bg-deep"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="mb-16 lg:mb-20"
        >
          <p className="eyebrow mb-5">What&apos;s Next</p>
          <h2
            className="font-[family-name:var(--font-display)] text-text-primary mb-6"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 3.25rem)', letterSpacing: '-0.025em' }}
          >
            Still early. Still building.
          </h2>
          <p className="text-text-muted max-w-2xl" style={{ fontSize: '1rem', lineHeight: 1.8 }}>
            I&apos;m in my third year. The pattern so far is consistent — find the actual problem, build something real, take responsibility for the outcome, and keep showing up. That&apos;s what I&apos;m continuing.
          </p>
        </motion.div>

        <div className="border-t border-border">
          {directions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: shouldReduceMotion ? 0 : i * 0.06 }}
              className="editorial-row py-8 lg:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10"
            >
              <div className="md:col-span-2">
                <span className="mono text-sm text-accent tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="md:col-span-4">
                <h3
                  className="font-[family-name:var(--font-display)] text-text-primary"
                  style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)', letterSpacing: '-0.015em' }}
                >
                  {item.title}
                </h3>
              </div>
              <div className="md:col-span-6">
                <p className="text-text-muted text-sm" style={{ lineHeight: 1.75 }}>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-16 pt-12 border-t border-border flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8"
        >
          <div>
            <p
              className="font-[family-name:var(--font-display)] text-text-primary mb-2"
              style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)' }}
            >
              If something here resonates — let&apos;s talk.
            </p>
            <p className="text-text-muted text-sm" style={{ lineHeight: 1.7 }}>
              Open to internships, collaborations, and conversations about interesting problems.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-white font-semibold rounded-full text-sm hover:opacity-90 active:scale-[0.98] transition-all duration-150 self-start sm:self-auto"
          >
            Get in touch
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
