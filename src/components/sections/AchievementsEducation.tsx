'use client';

import { education, hackathonMilestones } from '@/content/achievements';
import { certifications } from '@/content/certifications';

export default function AchievementsEducation() {
  return (
    <section
      id="education"
      aria-label="Education, Achievements, and Certifications"
      className="py-20 md:py-28 bg-[#F7F7F4] border-b border-[#E4E6E7]"
    >
      <div className="editorial-container">
        {/* Section Header */}
        <div className="pb-8 border-b border-[#E4E6E7] flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
          <div>
            <p className="section-label mb-2">Qualifications &amp; Honors</p>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#17191D] font-normal tracking-tight">
              Education &amp; Achievements
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#646B73]">
            Academic credentials, competitive hackathons, and certified coursework.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Education Box */}
          <div className="lg:col-span-5 bg-white border border-[#E4E6E7] rounded-lg p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#E4E6E7]">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#2563EB]">
                Academic Degree
              </span>
              <span className="font-mono text-xs text-[#646B73]">
                {education.duration}
              </span>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#17191D]">
                {education.institution}
              </h3>
              <p className="text-sm font-medium text-[#646B73] mt-1">
                {education.degree}
              </p>
              <p className="font-mono text-xs text-[#17191D] mt-2 font-medium">
                Academic Standing: Cumulative GPA {education.cgpa} / 10.0
              </p>
            </div>

            <div className="pt-4 border-t border-[#E4E6E7]">
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#646B73] mb-3">
                Core Coursework
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {education.coursework.map((course) => (
                  <span
                    key={course}
                    className="px-2.5 py-1 text-xs font-mono bg-[#F7F7F4] border border-[#E4E6E7] text-[#17191D] rounded"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications Subsection */}
            <div className="pt-5 border-t border-[#E4E6E7]">
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#646B73] mb-3">
                Verified Certifications
              </h4>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div key={cert.name} className="p-3 bg-[#F7F7F4] border border-[#E4E6E7] rounded">
                    <p className="text-xs font-semibold text-[#17191D]">{cert.name}</p>
                    <p className="text-[11px] font-mono text-[#2563EB]">{cert.issuer}</p>
                    <p className="text-[11px] text-[#646B73] mt-1">{cert.focus}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hackathons & Milestones Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#646B73]">
              Competitive Hackathon Achievements
            </h3>

            <div className="space-y-4">
              {hackathonMilestones.map((milestone) => (
                <div
                  key={milestone.event}
                  className="bg-white border border-[#E4E6E7] rounded-lg p-6 shadow-sm hover:border-[#2563EB]/40 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-3 border-b border-[#E4E6E7]">
                    <div>
                      <h4 className="text-lg font-semibold text-[#17191D]">
                        {milestone.event}
                      </h4>
                      <p className="font-mono text-xs font-medium text-[#2563EB]">
                        {milestone.standing}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-[#646B73]">
                      Project: {milestone.project} ({milestone.role})
                    </span>
                  </div>

                  <p className="mt-3 text-sm text-[#17191D] font-medium">
                    {milestone.stage}
                  </p>
                  <p className="mt-1 text-xs text-[#646B73]">
                    {milestone.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* University Sports Summary Badge */}
            <div className="p-6 bg-white border border-[#E4E6E7] rounded-lg">
              <div className="flex items-center justify-between pb-3 border-b border-[#E4E6E7]">
                <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#17191D]">
                  University Athletics
                </h4>
                <span className="font-mono text-xs text-[#2563EB]">
                  2024–2026
                </span>
              </div>
              <p className="mt-3 text-sm text-[#17191D] font-medium">
                Vice-Captain, Bennett University Men&apos;s Volleyball Team
              </p>
              <p className="mt-1 text-xs text-[#646B73] leading-relaxed">
                9 inter-university championship podium finishes across Delhi NCR and national invitationals (1 Gold, 7 Silver, 1 Bronze).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
