'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { certifications } from '@/content/certifications';
import { hackathons } from '@/content/achievements';

export default function Milestones() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="milestones"
      aria-label="Milestones and Achievements"
      className="py-28 lg:py-36 bg-bg-alt"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="mb-16 lg:mb-20"
        >
          <p className="eyebrow mb-5">Milestones</p>
          <h2
            className="font-[family-name:var(--font-display)] text-text-primary"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 3.25rem)', letterSpacing: '-0.025em' }}
          >
            Certifications &amp; hackathons.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xs font-semibold tracking-[0.14em] uppercase text-text-subtle mb-2">
              Certifications
            </h3>
            <div>
              {certifications.map((cert, i) => (
                <div
                  key={cert.name}
                  className="editorial-row py-5 flex items-start justify-between gap-6"
                >
                  <div>
                    <p className="text-text-primary font-medium text-sm leading-snug flex items-baseline gap-3">
                      <span className="mono text-xs text-accent tabular-nums opacity-70">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {cert.name}
                    </p>
                    <p className="text-text-subtle text-xs mt-1.5 ml-8">{cert.issuer}</p>
                  </div>
                  <span className="text-xs text-text-subtle flex-shrink-0 mt-0.5 tabular-nums">
                    {cert.date}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.08 }}
          >
            <h3 className="text-xs font-semibold tracking-[0.14em] uppercase text-text-subtle mb-2">
              Hackathons
            </h3>
            <div>
              {hackathons.map((h, i) => (
                <div
                  key={h.name}
                  className="editorial-row py-5 flex items-start justify-between gap-6"
                >
                  <div>
                    <p className="text-text-primary font-medium text-sm leading-snug flex items-baseline gap-3">
                      <span className="mono text-xs text-accent tabular-nums opacity-70">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {h.name}
                    </p>
                    {h.projectSlug && (
                      <a
                        href={`/projects/${h.projectSlug}`}
                        className="text-accent text-xs font-medium mt-2 ml-8 inline-block link-underline"
                      >
                        See project →
                      </a>
                    )}
                  </div>
                  <span className="text-[0.65rem] font-medium tracking-[0.1em] uppercase text-text-subtle flex-shrink-0 mt-1">
                    Participated
                  </span>
                </div>
              ))}
            </div>
            <p className="text-text-subtle text-xs mt-6 leading-relaxed">
              Results not listed — only confirmed facts appear on this site.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
