'use client';

import { leadershipRoles } from '@/content/leadership';
import { volleyballPodiums } from '@/content/achievements';

const medalStyles = {
  Gold: 'text-amber-700 bg-amber-50 border-amber-200',
  Silver: 'text-slate-700 bg-slate-100 border-slate-300',
  Bronze: 'text-amber-900 bg-orange-50 border-orange-200',
};

export default function ExperienceLeadership() {
  return (
    <section
      id="experience"
      aria-label="Experience and Leadership"
      className="py-20 md:py-28 bg-[#F7F7F4] border-b border-[#E4E6E7]"
    >
      <div className="editorial-container">
        {/* Section Header */}
        <div className="pb-8 border-b border-[#E4E6E7] flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
          <div>
            <p className="section-label mb-2">Responsibility &amp; Direction</p>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#17191D] font-normal tracking-tight">
              Experience &amp; Leadership
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#646B73]">
            Technical execution, university athletics, and cohort representation.
          </p>
        </div>

        {/* Roles Editorial Timeline */}
        <div className="mt-12 space-y-8">
          {leadershipRoles.map((role) => (
            <div
              key={role.title + role.org}
              className="bg-white border border-[#E4E6E7] rounded-lg p-6 sm:p-8 shadow-sm hover:border-[#2563EB]/40 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#E4E6E7]">
                <div>
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-xl font-semibold text-[#17191D]">
                      {role.title}
                    </h3>
                    <span className="font-mono text-[11px] px-2 py-0.5 rounded border border-[#E4E6E7] bg-[#F7F7F4] text-[#646B73]">
                      {role.category}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-[#2563EB] mt-0.5">
                    {role.org}
                  </p>
                </div>

                <div className="font-mono text-xs text-[#646B73]">
                  {role.tenure}
                </div>
              </div>

              <div className="mt-5 space-y-3">
                <p className="text-sm text-[#17191D] font-medium leading-relaxed">
                  {role.description}
                </p>

                <ul className="space-y-2 text-sm text-[#646B73]" role="list">
                  {role.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-[#2563EB] mt-1 text-xs" aria-hidden="true">▪</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {role.metrics && (
                  <div className="mt-4 pt-3 border-t border-[#E4E6E7] flex items-center gap-2">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#646B73]">
                      Impact:
                    </span>
                    <span className="font-mono text-xs font-semibold text-[#17191D]">
                      {role.metrics}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Verified Athletics Section (Respectfully and Accurately Documented) */}
        <div className="mt-14 bg-white border border-[#E4E6E7] rounded-lg p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#E4E6E7]">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#646B73]">
                Inter-University Athletics Record (2024–2026)
              </span>
              <h4 className="text-lg font-semibold text-[#17191D] mt-0.5">
                Bennett University Men&apos;s Volleyball Team Podium Finishes
              </h4>
            </div>
            <span className="font-mono text-xs font-semibold text-[#2563EB] bg-[#2563EB]/5 px-2.5 py-1 rounded border border-[#2563EB]/20">
              9 Tournament Medals: 1 Gold · 7 Silver · 1 Bronze
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {volleyballPodiums.map((podium, index) => (
              <div
                key={index}
                className="p-3 bg-[#F7F7F4] border border-[#E4E6E7] rounded flex items-center justify-between text-xs font-mono"
              >
                <div>
                  <p className="font-semibold text-[#17191D]">{podium.university}</p>
                  <p className="text-[11px] text-[#646B73]">{podium.tournament}</p>
                </div>
                <span
                  className={`px-2 py-0.5 rounded text-[11px] font-semibold border ${
                    medalStyles[podium.result]
                  }`}
                >
                  {podium.result}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
