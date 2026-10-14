'use client';

import { skillCategories } from '@/content/skills';

export default function Skills() {
  return (
    <section
      id="skills"
      aria-label="Technical Skills and Core Competencies"
      className="py-20 md:py-28 bg-[#F7F7F4] border-b border-[#E4E6E7]"
    >
      <div className="editorial-container">
        {/* Section Header */}
        <div className="pb-8 border-b border-[#E4E6E7] flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
          <div>
            <p className="section-label mb-2">Technical Foundations</p>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#17191D] font-normal tracking-tight">
              Skills &amp; Technologies
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#646B73]">
            Verified technical tools and core computer science foundations.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="bg-white border border-[#E4E6E7] rounded-lg p-6 shadow-sm hover:border-[#2563EB]/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#E4E6E7]">
                  <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#17191D]">
                    {cat.title}
                  </h3>
                  <span className="font-mono text-[11px] text-[#646B73]">
                    {cat.skills.length} skills
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-mono bg-[#F7F7F4] border border-[#E4E6E7] text-[#17191D] rounded font-medium hover:border-[#2563EB] hover:text-[#2563EB] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <p className="mt-6 pt-4 border-t border-[#E4E6E7] text-xs text-[#646B73] leading-relaxed">
                {cat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
