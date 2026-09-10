'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { leadershipRoles } from '@/content/leadership';
import { tournamentResults, TournamentResult } from '@/content/achievements';

const medalConfig = {
  Gold:   { color: '#B8860B', label: 'Gold' },
  Silver: { color: '#6B7280', label: 'Silver' },
  Bronze: { color: '#A67C52', label: 'Bronze' },
};

function TournamentRow({ tournament, delay }: { tournament: TournamentResult; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const shouldReduceMotion = useReducedMotion();
  const medal = medalConfig[tournament.result];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : delay }}
      className="editorial-row py-4 flex items-center justify-between gap-4"
    >
      <div className="flex items-center gap-4 min-w-0">
        <span
          className="w-2 h-2 rounded-full flex-shrink-0"
          style={{ background: medal.color }}
          aria-hidden="true"
        />
        <div className="min-w-0">
          <p className="font-medium text-text-primary text-sm truncate">
            {tournament.event}
            {tournament.isHighlighted && (
              <span className="ml-2 text-[0.65rem] font-semibold tracking-wide uppercase text-accent">
                Notable
              </span>
            )}
          </p>
        </div>
      </div>
      <p className="text-xs font-semibold tracking-wide uppercase flex-shrink-0" style={{ color: medal.color }}>
        {tournament.result}
      </p>
    </motion.div>
  );
}

export default function LeadCompete() {
  const primaryRole = leadershipRoles.find((r) => r.isPrimary);
  const secondaryRole = leadershipRoles.find((r) => !r.isPrimary);

  const bySeasonMap: Record<string, TournamentResult[]> = {};
  for (const t of tournamentResults) {
    if (!bySeasonMap[t.season]) bySeasonMap[t.season] = [];
    bySeasonMap[t.season].push(t);
  }
  const seasons = Object.entries(bySeasonMap);

  return (
    <section
      id="lead-compete"
      aria-label="Leadership and Sports"
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
          <p className="eyebrow mb-5">Lead &amp; Compete</p>
          <h2
            className="font-[family-name:var(--font-display)] text-text-primary mb-8"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 3.25rem)', letterSpacing: '-0.025em' }}
          >
            Beyond the codebase.
          </h2>
          <blockquote className="max-w-2xl accent-line-left">
            <p
              className="font-[family-name:var(--font-display)] italic text-text-primary"
              style={{ fontSize: 'clamp(1.15rem, 2.5vw, 1.45rem)', lineHeight: 1.55 }}
            >
              &ldquo;I wasn&apos;t in a leadership role my first year. By my second, I was Vice Captain.&rdquo;
            </p>
          </blockquote>
        </motion.div>

        {/* Leadership — editorial timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          {primaryRole && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55 }}
              className="lg:col-span-7 leadership-accent pl-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-6">
                <div>
                  <h3
                    className="font-[family-name:var(--font-display)] text-text-primary mb-1"
                    style={{ fontSize: 'clamp(1.5rem, 3vw, 1.85rem)' }}
                  >
                    {primaryRole.title}
                  </h3>
                  <p className="text-text-muted text-sm">{primaryRole.org}</p>
                </div>
                <span className="text-xs font-medium tracking-wide text-text-subtle">
                  {primaryRole.tenure}
                </span>
              </div>
              <ul className="space-y-4" role="list">
                {primaryRole.bullets.map((bullet) => (
                  <li key={bullet} className="text-text-muted text-sm leading-relaxed pl-0">
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {secondaryRole && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-border pt-8 lg:pt-0 lg:pl-10"
            >
              <div>
                <h3
                  className="font-[family-name:var(--font-display)] text-text-primary mb-2"
                  style={{ fontSize: '1.35rem' }}
                >
                  {secondaryRole.title}
                </h3>
                <p className="text-text-muted text-sm mb-1">{secondaryRole.org}</p>
                <span className="text-xs text-text-subtle">{secondaryRole.tenure}</span>
              </div>
              <p className="text-sm text-text-muted mt-8 leading-relaxed">
                {secondaryRole.description}
              </p>
            </motion.div>
          )}
        </div>

        {/* Tournament Record */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55 }}
        >
          <h3
            className="font-[family-name:var(--font-display)] text-text-primary mb-3"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 1.85rem)' }}
          >
            Tournament Record
          </h3>
          <p className="text-text-muted text-sm mb-10 max-w-xl" style={{ lineHeight: 1.7 }}>
            Bennett Men&apos;s Volleyball — competitive record across two seasons.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {seasons.map(([season, tournaments], sIdx) => (
              <div key={season}>
                <div className="flex items-center gap-4 mb-2">
                  <p className="text-xs font-semibold tracking-[0.14em] uppercase text-accent whitespace-nowrap">
                    {season} Season
                  </p>
                  <div className="flex-1 h-px bg-border" aria-hidden="true" />
                  <p className="mono text-xs text-text-subtle whitespace-nowrap">
                    {tournaments.filter((t) => t.result === 'Gold').length}G{' '}
                    {tournaments.filter((t) => t.result === 'Silver').length}S{' '}
                    {tournaments.filter((t) => t.result === 'Bronze').length}B
                  </p>
                </div>
                <div>
                  {tournaments.map((t, tIdx) => (
                    <TournamentRow
                      key={`${t.event}-${tIdx}`}
                      tournament={t}
                      delay={sIdx * 0.1 + tIdx * 0.05}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-20 pt-12 border-t border-border"
        >
          <p
            className="font-[family-name:var(--font-display)] italic text-text-muted max-w-3xl"
            style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)', lineHeight: 1.6 }}
          >
            &ldquo;The same consistency that gets you through a tournament season is what gets a project shipped.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
