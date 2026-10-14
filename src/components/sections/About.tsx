'use client';

import { profile } from '@/content/profile';

const quickFacts = [
  { label: 'Institution', value: 'Bennett University, Greater Noida' },
  { label: 'Degree', value: 'B.Tech in Computer Science and Engineering' },
  { label: 'Academic Standing', value: 'CGPA 8.14 · Aug 2024 – Jun 2028' },
  { label: 'Core Technical Role', value: 'Technical Head, Data Science Society' },
  { label: 'Athletics Leadership', value: "Vice-Captain, Men's Volleyball Team" },
  { label: 'Hackathon Track', value: 'SIH 2026 Internal Finalist · SIH 2025' },
];

export default function About() {
  return (
    <section
      id="about"
      aria-label="About Surya Pratap Singh Rathod"
      className="py-20 md:py-28 bg-[#F7F7F4] border-b border-[#E4E6E7]"
    >
      <div className="editorial-container">
        {/* Section Header */}
        <div className="pb-8 border-b border-[#E4E6E7]">
          <p className="section-label mb-2">Background &amp; Approach</p>
          <h2 className="font-serif-display text-3xl sm:text-4xl text-[#17191D] font-normal tracking-tight">
            About Me
          </h2>
        </div>

        {/* Content Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#646B73] leading-relaxed">
            {profile.aboutNarrative.map((paragraph, index) => (
              <p key={index} className="text-[#17191D]/80">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Fact Sheet Column */}
          <div className="lg:col-span-5 bg-white border border-[#E4E6E7] rounded-lg p-6 shadow-sm space-y-5">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#17191D] pb-3 border-b border-[#E4E6E7]">
              Academic &amp; Profile Summary
            </h3>

            <dl className="space-y-4 text-xs font-mono">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="flex flex-col space-y-0.5">
                  <dt className="text-[#646B73] uppercase tracking-wide text-[10px]">
                    {fact.label}
                  </dt>
                  <dd className="text-sm font-sans font-medium text-[#17191D]">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="pt-4 border-t border-[#E4E6E7]">
              <p className="text-xs text-[#646B73] leading-normal font-sans">
                Currently exploring opportunities in full-stack engineering, distributed systems, and applied AI applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
