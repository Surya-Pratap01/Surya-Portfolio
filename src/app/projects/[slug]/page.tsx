import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { allProjects } from '@/content/projects';
import Footer from '@/components/Footer';

export async function generateStaticParams() {
  return allProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.name} | Technical Dossier`,
    description: project.oneLiner,
    openGraph: {
      title: `${project.name} | Surya Pratap Singh Rathod`,
      description: project.oneLiner,
      type: 'article',
      images: [
        {
          url: project.images[0]?.src || '/images/surya-portrait.jpg',
          alt: project.name,
        },
      ],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);

  if (!project) notFound();

  const primaryImg = project.images.find((img) => img.isPrimary) || project.images[0];
  const supportingImgs = project.images.filter((img) => img !== primaryImg);

  return (
    <>
      <main className="bg-[#F7F7F4] min-h-screen pt-28 pb-20 w-full overflow-hidden">
        <article className="editorial-container max-w-4xl" aria-label={`${project.name} project dossier`}>
          {/* Back Navigation */}
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#646B73] hover:text-[#2563EB] transition-colors mb-10 group"
          >
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform"
              aria-hidden="true"
            >
              <path
                d="M10 12L6 8l4-4"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Back to Selected Work</span>
          </Link>

          {/* Dossier Header */}
          <header className="pb-10 border-b border-[#E4E6E7]">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs font-semibold text-[#2563EB]">
                [{project.number}]
              </span>
              <span className="font-mono text-xs uppercase tracking-wider text-[#646B73]">
                {project.context}
              </span>
            </div>

            <h1 className="font-serif-display text-4xl sm:text-5xl text-[#17191D] font-normal tracking-tight mb-4">
              {project.name}
            </h1>

            <p className="text-sm font-medium text-[#2563EB] mb-4">
              {project.role}
            </p>

            <p className="text-base sm:text-lg text-[#17191D] font-medium leading-relaxed max-w-2xl mb-8">
              {project.oneLiner}
            </p>

            {/* Links and Actions */}
            <div className="flex flex-wrap items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-700 text-white text-xs font-mono font-medium rounded hover:bg-emerald-800 transition-colors shadow-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" aria-hidden="true" />
                  <span>Open Live Application</span>
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
                    <path d="M4 12L12 4M12 4H6M12 4V10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#17191D] border border-[#E4E6E7] text-xs font-mono font-medium rounded hover:border-[#2563EB] hover:text-[#2563EB] transition-colors shadow-sm"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>View GitHub Repository</span>
                </a>
              )}
            </div>
          </header>

          {/* Primary Authentic Screenshot */}
          {primaryImg && (
            <div className="my-12 bg-white border border-[#E4E6E7] rounded-lg p-2.5 shadow-sm">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded bg-[#EFEFEA]">
                <Image
                  src={primaryImg.src}
                  alt={primaryImg.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 900px"
                  className="object-cover object-top"
                />
              </div>
              {primaryImg.caption && (
                <p className="px-3 py-2 text-xs font-mono text-[#646B73]">
                  {primaryImg.caption}
                </p>
              )}
            </div>
          )}

          {/* Case Study Details */}
          <div className="space-y-12">
            {/* The Problem */}
            <section aria-labelledby="problem-heading" className="bg-white border border-[#E4E6E7] rounded-lg p-6 sm:p-8">
              <h2 id="problem-heading" className="font-mono text-xs font-semibold uppercase tracking-wider text-[#17191D] pb-3 border-b border-[#E4E6E7] mb-4">
                Operational Problem &amp; Context
              </h2>
              <p className="text-sm sm:text-base text-[#646B73] leading-relaxed">
                {project.problem}
              </p>
            </section>

            {/* The Solution */}
            <section aria-labelledby="solution-heading" className="bg-white border border-[#E4E6E7] rounded-lg p-6 sm:p-8">
              <h2 id="solution-heading" className="font-mono text-xs font-semibold uppercase tracking-wider text-[#17191D] pb-3 border-b border-[#E4E6E7] mb-4">
                Architecture &amp; System Solution
              </h2>
              <p className="text-sm sm:text-base text-[#646B73] leading-relaxed">
                {project.solution}
              </p>
            </section>

            {/* My Contribution */}
            <section aria-labelledby="contribution-heading" className="bg-white border border-[#E4E6E7] rounded-lg p-6 sm:p-8">
              <h2 id="contribution-heading" className="font-mono text-xs font-semibold uppercase tracking-wider text-[#17191D] pb-3 border-b border-[#E4E6E7] mb-4">
                Personal Engineering Contribution
              </h2>
              <p className="text-sm sm:text-base text-[#646B73] leading-relaxed">
                {project.contribution}
              </p>
            </section>

            {/* Engineering Decisions */}
            <section aria-labelledby="decisions-heading" className="bg-white border border-[#E4E6E7] rounded-lg p-6 sm:p-8">
              <h2 id="decisions-heading" className="font-mono text-xs font-semibold uppercase tracking-wider text-[#17191D] pb-3 border-b border-[#E4E6E7] mb-5">
                Technical Choices &amp; Implementation Decisions
              </h2>
              <div className="space-y-3">
                {project.engineeringDecisions.map((decision, i) => (
                  <div key={i} className="p-3 bg-[#F7F7F4] border border-[#E4E6E7] rounded text-xs sm:text-sm text-[#17191D]">
                    <span className="font-mono text-[#2563EB] font-bold mr-2">{i + 1}.</span>
                    {decision}
                  </div>
                ))}
              </div>
            </section>

            {/* Tech Stack Groups */}
            <section aria-labelledby="tech-heading" className="bg-white border border-[#E4E6E7] rounded-lg p-6 sm:p-8">
              <h2 id="tech-heading" className="font-mono text-xs font-semibold uppercase tracking-wider text-[#17191D] pb-3 border-b border-[#E4E6E7] mb-5">
                Technologies Applied
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.techGroups.map((group) => (
                  <div key={group.label} className="p-4 bg-[#F7F7F4] border border-[#E4E6E7] rounded">
                    <h3 className="font-mono text-[11px] uppercase tracking-wider text-[#646B73] mb-2 font-semibold">
                      {group.label}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span key={item} className="px-2 py-0.5 text-xs font-mono bg-white border border-[#E4E6E7] rounded text-[#17191D]">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Supporting Screenshots Gallery */}
            {supportingImgs.length > 0 && (
              <section aria-labelledby="gallery-heading" className="space-y-6">
                <h2 id="gallery-heading" className="font-mono text-xs font-semibold uppercase tracking-wider text-[#646B73]">
                  Supporting Screenshots &amp; Evidence
                </h2>
                <div className="grid grid-cols-1 gap-6">
                  {supportingImgs.map((img, i) => (
                    <div key={i} className="bg-white border border-[#E4E6E7] rounded-lg p-2.5 shadow-sm">
                      <div className="relative aspect-[16/9] w-full overflow-hidden rounded bg-[#EFEFEA]">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 900px"
                          className="object-cover object-top"
                        />
                      </div>
                      {img.caption && (
                        <p className="px-3 py-2 text-xs font-mono text-[#646B73]">
                          {img.caption}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Footer Navigation */}
          <div className="mt-16 pt-8 border-t border-[#E4E6E7] flex items-center justify-between">
            <Link
              href="/#work"
              className="text-xs font-mono font-medium text-[#17191D] hover:text-[#2563EB] transition-colors"
            >
              ← Back to All Projects
            </Link>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono font-medium text-[#2563EB] hover:underline"
            >
              View Surya&apos;s Resume PDF →
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
