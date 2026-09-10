'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { skillGroups, SkillGroup } from '@/content/skills';

function formatProjectName(slug: string) {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
    .replace('Ai', 'AI')
    .replace('Campus Eats', 'CampusEats')
    .replace('Trade Vision', 'TradeVision');
}

export default function Stack() {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [highlightedProjects, setHighlightedProjects] = useState<string[]>([]);

  const handleSkillHover = (skill: string, group: SkillGroup) => {
    setHoveredSkill(skill);
    setHighlightedProjects(group.usedIn);
  };

  const handleSkillLeave = () => {
    setHoveredSkill(null);
    setHighlightedProjects([]);
  };

  return (
    <section
      id="stack"
      aria-label="Skills and Technology Stack"
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
          <p className="eyebrow mb-5">Stack</p>
          <h2
            className="font-[family-name:var(--font-display)] text-text-primary"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 3.25rem)', letterSpacing: '-0.025em' }}
          >
            Technology I work with.
          </h2>
          <p className="mt-5 text-text-muted max-w-xl" style={{ fontSize: '1rem', lineHeight: 1.8 }}>
            Evidence-based — every skill is linked to a real project. Hover a skill to see where it was used.
          </p>
        </motion.div>

        <div className="space-y-0 border-t border-border">
          {skillGroups.map((group, groupIdx) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: shouldReduceMotion ? 0 : groupIdx * 0.04 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 border-b border-border"
            >
              <div className="md:col-span-3">
                <h3 className="text-xs font-semibold tracking-[0.14em] uppercase text-text-primary pt-1">
                  {group.label}
                </h3>
              </div>

              <div className="md:col-span-6">
                <ul className="flex flex-wrap gap-2" role="list">
                  {group.items.map((skill) => (
                    <li key={skill}>
                      <button
                        className={`tag cursor-default select-text transition-all duration-200 ${
                          hoveredSkill === skill
                            ? '!border-accent !text-accent !bg-accent-dim'
                            : ''
                        }`}
                        onMouseEnter={() => handleSkillHover(skill, group)}
                        onMouseLeave={handleSkillLeave}
                        onFocus={() => handleSkillHover(skill, group)}
                        onBlur={handleSkillLeave}
                        aria-label={`${skill} — used in ${group.usedIn.length} project${group.usedIn.length > 1 ? 's' : ''}`}
                      >
                        {skill}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-3 md:text-right">
                {group.usedIn.length > 0 && (
                  <div>
                    <p className="text-[0.65rem] font-medium tracking-[0.12em] uppercase text-text-subtle mb-2">
                      Used in
                    </p>
                    <div className="flex flex-wrap md:justify-end gap-2">
                      {group.usedIn.map((slug) => (
                        <a
                          key={slug}
                          href={`/projects/${slug}`}
                          className={`text-xs font-medium transition-all duration-200 px-2 py-0.5 rounded-full border ${
                            highlightedProjects.includes(slug)
                              ? 'text-accent border-accent/40 bg-accent-dim'
                              : 'text-text-subtle border-transparent hover:text-text-muted'
                          }`}
                        >
                          {formatProjectName(slug)}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 text-text-subtle text-sm text-center"
        >
          Every skill here has been used in at least one shipped project.
        </motion.p>
      </div>
    </section>
  );
}
