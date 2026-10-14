'use client';

import Image from 'next/image';
import { featuredProjects, Project } from '@/content/projects';

function ProjectShowcase({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 1;
  const primaryImg = project.images.find((img) => img.isPrimary) || project.images[0];
  const secondaryImg = project.images.find((img) => !img.isPrimary && img !== primaryImg);

  return (
    <article
      className="py-16 md:py-24 border-b border-[#E4E6E7] last:border-b-0"
      aria-labelledby={`project-title-${project.slug}`}
    >
      <div className="editorial-container">
        {/* Project Header Bar */}
        <div className="flex flex-wrap items-baseline justify-between gap-4 pb-6 border-b border-[#E4E6E7]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-semibold text-[#2563EB]">
              [{project.number}]
            </span>
            <span className="font-mono text-xs uppercase tracking-wider text-[#646B73]">
              {project.context}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 rounded hover:bg-emerald-100 transition-colors"
                aria-label={`Visit live demo for ${project.name} (opens in new tab)`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" aria-hidden="true" />
                <span>Live Application</span>
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" className="w-3 h-3" aria-hidden="true">
                  <path d="M4 12L12 4M12 4H6M12 4V10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-medium text-[#17191D] bg-white border border-[#E4E6E7] rounded hover:border-[#2563EB] hover:text-[#2563EB] transition-colors"
                aria-label={`View ${project.name} source code on GitHub (opens in new tab)`}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                <span>Source Code</span>
              </a>
            )}
          </div>
        </div>

        {/* Project Content Grid */}
        <div className={`mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start ${isEven ? 'lg:grid-flow-dense' : ''}`}>
          {/* Narrative / Context Column */}
          <div className={`lg:col-span-5 ${isEven ? 'lg:col-start-8' : ''} space-y-6`}>
            <div>
              <h3
                id={`project-title-${project.slug}`}
                className="font-serif-display text-3xl sm:text-4xl text-[#17191D] tracking-tight font-normal"
              >
                {project.name}
              </h3>
              <p className="mt-2 text-sm font-medium text-[#2563EB]">
                {project.role}
              </p>
              <p className="mt-3 text-base text-[#17191D] font-medium leading-relaxed">
                {project.oneLiner}
              </p>
            </div>

            {/* Problem & Solution Breakdown */}
            <div className="space-y-4 pt-2">
              <div className="p-4 bg-white border border-[#E4E6E7] rounded-md">
                <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#17191D] mb-1.5">
                  The Problem
                </h4>
                <p className="text-xs sm:text-sm text-[#646B73] leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-4 bg-white border border-[#E4E6E7] rounded-md">
                <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#17191D] mb-1.5">
                  My Technical Contribution
                </h4>
                <p className="text-xs sm:text-sm text-[#646B73] leading-relaxed">
                  {project.contribution}
                </p>
              </div>
            </div>

            {/* Metrics or Dimensions */}
            {project.metricsOrDimensions && project.metricsOrDimensions.length > 0 && (
              <div className="p-4 bg-[#EFEFEA]/60 border border-[#E4E6E7] rounded-md">
                <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#17191D] mb-2">
                  Key Verification Points
                </h4>
                <ul className="space-y-1.5 text-xs text-[#646B73]" role="list">
                  {project.metricsOrDimensions.map((m, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#2563EB] mt-0.5" aria-hidden="true">▪</span>
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Prototype / Accuracy Note if applicable */}
            {project.demoNote && (
              <p className="text-xs font-mono text-[#646B73] bg-amber-50/80 border border-amber-200/80 text-amber-900 p-3 rounded">
                Note: {project.demoNote}
              </p>
            )}

            {/* Tech Stack Pills */}
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#646B73] mb-2.5">
                Technologies Applied
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono bg-white border border-[#E4E6E7] text-[#17191D] rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Showcase Column */}
          <div className={`lg:col-span-7 ${isEven ? 'lg:col-start-1' : ''} space-y-6`}>
            {/* Primary Visual */}
            <div className="group relative bg-white border border-[#E4E6E7] rounded-lg p-2.5 shadow-sm hover:border-[#2563EB]/40 transition-colors">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded bg-[#EFEFEA]">
                <Image
                  src={primaryImg.src}
                  alt={primaryImg.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 700px"
                  className="object-cover object-top group-hover:scale-[1.01] transition-transform duration-500 ease-out"
                />
              </div>
              {primaryImg.caption && (
                <div className="px-2 pt-2.5 pb-1 flex items-center justify-between text-[11px] font-mono text-[#646B73]">
                  <span>{primaryImg.caption}</span>
                  <span className="text-[#2563EB]">Primary Visual</span>
                </div>
              )}
            </div>

            {/* Secondary Supporting Visual */}
            {secondaryImg && (
              <div className="group relative bg-white border border-[#E4E6E7] rounded-lg p-2.5 shadow-sm hover:border-[#2563EB]/40 transition-colors">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded bg-[#EFEFEA]">
                  <Image
                    src={secondaryImg.src}
                    alt={secondaryImg.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 700px"
                    className="object-cover object-top group-hover:scale-[1.01] transition-transform duration-500 ease-out"
                  />
                </div>
                {secondaryImg.caption && (
                  <div className="px-2 pt-2.5 pb-1 flex items-center justify-between text-[11px] font-mono text-[#646B73]">
                    <span>{secondaryImg.caption}</span>
                    <span className="text-[#646B73]">Supporting Evidence</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function FeaturedProjects() {
  return (
    <section
      id="work"
      aria-label="Selected Engineering Projects"
      className="bg-[#F7F7F4] pt-20"
    >
      <div className="editorial-container pb-10 border-b border-[#E4E6E7]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="section-label mb-3">Selected Projects</p>
            <h2 className="font-serif-display text-3xl sm:text-5xl text-[#17191D] tracking-tight font-normal">
              Featured Work
            </h2>
          </div>
          <p className="text-sm font-mono text-[#646B73] max-w-sm sm:text-right">
            Three core projects demonstrating full-stack architecture, spatial databases, and civic systems.
          </p>
        </div>
      </div>

      <div className="divide-y divide-[#E4E6E7]">
        {featuredProjects.map((project, index) => (
          <ProjectShowcase key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
