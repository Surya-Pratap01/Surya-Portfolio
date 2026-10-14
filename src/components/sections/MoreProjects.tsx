'use client';

import Image from 'next/image';
import { moreProjects } from '@/content/projects';

export default function MoreProjects() {
  return (
    <section
      id="more-projects"
      aria-label="Additional Software Projects"
      className="py-20 md:py-28 bg-[#F7F7F4] border-b border-[#E4E6E7]"
    >
      <div className="editorial-container">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-8 border-b border-[#E4E6E7]">
          <div>
            <p className="section-label mb-2">Extended Exploration</p>
            <h2 className="font-serif-display text-2xl sm:text-4xl text-[#17191D] font-normal tracking-tight">
              More Projects
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#646B73]">
            Subordinate works exploring applied AI agents, FinTech, and document retrieval.
          </p>
        </div>

        {/* Compact Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {moreProjects.map((project) => {
            const previewImg = project.images[0];
            return (
              <div
                key={project.slug}
                className="group flex flex-col justify-between bg-white border border-[#E4E6E7] rounded-lg p-5 shadow-sm hover:border-[#2563EB]/50 transition-all duration-300"
              >
                <div>
                  {/* Thumbnail */}
                  {previewImg && (
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded bg-[#EFEFEA] border border-[#E4E6E7] mb-5">
                      <Image
                        src={previewImg.src}
                        alt={previewImg.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 550px"
                        className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                      />
                    </div>
                  )}

                  {/* Header info */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs font-semibold text-[#2563EB]">
                      [{project.number}]
                    </span>
                    <span className="font-mono text-xs text-[#646B73]">
                      {project.context}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-[#17191D] group-hover:text-[#2563EB] transition-colors">
                    {project.name}
                  </h3>

                  <p className="mt-2 text-sm text-[#646B73] leading-relaxed">
                    {project.oneLiner}
                  </p>

                  <div className="mt-4 pt-4 border-t border-[#E4E6E7]">
                    <h4 className="font-mono text-xs text-[#17191D] font-medium mb-1.5">
                      Architecture &amp; Key Features:
                    </h4>
                    <p className="text-xs text-[#646B73] leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Footer with Tech Stack and GitHub link */}
                <div className="mt-6 pt-4 border-t border-[#E4E6E7] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[11px] font-mono bg-[#F7F7F4] border border-[#E4E6E7] text-[#646B73] rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#17191D] hover:text-[#2563EB] transition-colors ml-auto"
                      aria-label={`View ${project.name} on GitHub (opens in new tab)`}
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                      <span>Repository</span>
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" className="w-3 h-3" aria-hidden="true">
                        <path d="M4 12L12 4M12 4H6M12 4V10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
