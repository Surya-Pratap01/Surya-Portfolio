import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { projects } from '@/content/projects';
import Footer from '@/components/Footer';

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.name} — Case Study`,
    description: project.oneLiner,
    openGraph: {
      title: `${project.name} — Surya Pratap Singh Rathod`,
      description: project.oneLiner,
      type: 'article',
    },
  };
}

function ProjectVisual({ name, color }: { name: string; color: string }) {
  return (
    <div
      className="w-full h-full relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg-alt)' }}
      aria-label={`${name} project visual`}
      role="img"
    >
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{ background: `linear-gradient(145deg, ${color} 0%, transparent 55%)` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 flex flex-col justify-between p-8 sm:p-10 lg:p-12">
        <span
          className="font-[family-name:var(--font-display)] leading-none text-text-primary/15"
          style={{ fontSize: 'clamp(5rem, 18vw, 10rem)' }}
          aria-hidden="true"
        >
          {name.charAt(0)}
        </span>
        <div>
          <p className="text-xs font-medium tracking-[0.16em] uppercase text-text-subtle mb-2">
            Case study
          </p>
          <p
            className="font-[family-name:var(--font-display)] text-text-primary"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
          >
            {name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const allTechItems = project.techGroups.flatMap((g) => g.items);

  return (
    <>
      <main className="bg-bg-deep min-h-screen pt-24 pb-20 w-full overflow-hidden">
        <article className="max-w-5xl mx-auto px-6 lg:px-12" aria-label={`${project.name} case study`}>
          <Link
            href="/#build"
            className="inline-flex items-center gap-2 text-text-muted hover:text-accent transition-colors text-sm mb-14 group font-medium"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" aria-hidden="true">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Projects
          </Link>

          <header className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              {project.isFlagship && (
                <span className="text-xs font-semibold tracking-[0.12em] uppercase text-accent">
                  Flagship Project
                </span>
              )}
              {project.isFeatured && !project.isFlagship && (
                <span className="text-xs font-semibold tracking-[0.12em] uppercase text-accent">
                  Featured Project
                </span>
              )}
            </div>

            <h1
              className="font-[family-name:var(--font-display)] text-text-primary mb-6"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 4rem)', letterSpacing: '-0.025em', lineHeight: 1.05 }}
            >
              {project.name}
            </h1>

            <p className="text-[clamp(1.05rem,2.5vw,1.2rem)] text-text-muted leading-relaxed mb-10 max-w-3xl">
              {project.oneLiner}
            </p>

            {(project.liveUrl || project.githubUrl) && (
              <div className="flex flex-wrap gap-3 mb-10">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-full text-sm hover:opacity-90 active:scale-[0.98] transition-all"
                  >
                    Live Demo
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-border bg-white text-text-primary font-medium rounded-full text-sm hover:border-accent hover:text-accent active:scale-[0.98] transition-all"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub Repository
                  </a>
                )}
              </div>
            )}

            <div className="flex flex-wrap gap-2">
              {allTechItems.map((tech) => (
                <span key={tech} className="tag">{tech}</span>
              ))}
            </div>
          </header>

          <div className="mb-20 overflow-hidden border border-border" style={{ aspectRatio: '16/9' }}>
            <ProjectVisual name={project.name} color={project.color} />
          </div>

          <div className="space-y-16">
            <section aria-labelledby="problem-heading" className="border-t border-border pt-12">
              <p className="eyebrow mb-3">Problem</p>
              <h2
                id="problem-heading"
                className="font-[family-name:var(--font-display)] text-2xl text-text-primary mb-6"
              >
                What gap does this fill?
              </h2>
              <p className="text-[1.05rem] text-text-muted leading-[1.85] max-w-3xl">
                {project.problem}
              </p>
            </section>

            <section aria-labelledby="solution-heading" className="border-t border-border pt-12">
              <p className="eyebrow mb-3">Solution</p>
              <h2
                id="solution-heading"
                className="font-[family-name:var(--font-display)] text-2xl text-text-primary mb-6"
              >
                What was built
              </h2>
              <p className="text-[1.05rem] text-text-muted leading-[1.85] max-w-3xl">
                {project.solution}
              </p>
            </section>

            <section aria-labelledby="contribution-heading" className="border-t border-border pt-12">
              <p className="eyebrow mb-3">My Contribution</p>
              <h2
                id="contribution-heading"
                className="font-[family-name:var(--font-display)] text-2xl text-text-primary mb-6"
              >
                What I specifically built
              </h2>
              <p className="text-[1.05rem] text-text-muted leading-[1.85] max-w-3xl">
                {project.contribution}
              </p>
            </section>

            <section aria-labelledby="technology-heading" className="border-t border-border pt-12">
              <p className="eyebrow mb-3">Technology</p>
              <h2
                id="technology-heading"
                className="font-[family-name:var(--font-display)] text-2xl text-text-primary mb-8"
              >
                Stack used
              </h2>
              <div className="space-y-0">
                {project.techGroups.map((group) => (
                  <div
                    key={group.label}
                    className="editorial-row py-5 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6"
                  >
                    <h3 className="sm:col-span-3 text-xs font-semibold tracking-[0.12em] uppercase text-text-subtle pt-1">
                      {group.label}
                    </h3>
                    <div className="sm:col-span-9 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span key={item} className="tag">{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section aria-labelledby="engineering-heading" className="border-t border-border pt-12">
              <p className="eyebrow mb-3">Engineering Decisions</p>
              <h2
                id="engineering-heading"
                className="font-[family-name:var(--font-display)] text-2xl text-text-primary mb-8"
              >
                Notable technical choices
              </h2>
              <div className="space-y-0">
                {project.engineeringDecisions.map((decision, i) => {
                  const dashIdx = decision.indexOf('—');
                  const title = dashIdx > -1 ? decision.slice(0, dashIdx).trim() : decision;
                  const desc = dashIdx > -1 ? decision.slice(dashIdx + 1).trim() : '';
                  return (
                    <div
                      key={i}
                      className="editorial-row py-6 pl-5"
                      style={{ borderLeft: `2px solid ${project.color}` }}
                    >
                      <h3 className="font-semibold text-text-primary mb-2 text-sm">{title}</h3>
                      {desc && <p className="text-text-muted text-sm leading-relaxed max-w-2xl">{desc}</p>}
                    </div>
                  );
                })}
              </div>
            </section>

            {project.challenges && (
              <section aria-labelledby="challenges-heading" className="border-t border-border pt-12">
                <p className="eyebrow mb-3">Challenges</p>
                <h2
                  id="challenges-heading"
                  className="font-[family-name:var(--font-display)] text-2xl text-text-primary mb-6"
                >
                  What was hard
                </h2>
                <p className="text-[1.05rem] text-text-muted leading-[1.85] max-w-3xl">
                  {project.challenges}
                </p>
              </section>
            )}

            {project.learnings && (
              <section aria-labelledby="learnings-heading" className="border-t border-border pt-12">
                <p className="eyebrow mb-3">Learnings</p>
                <h2
                  id="learnings-heading"
                  className="font-[family-name:var(--font-display)] text-2xl text-text-primary mb-6"
                >
                  What I took away
                </h2>
                <p className="text-[1.05rem] text-text-muted leading-[1.85] max-w-3xl">
                  {project.learnings}
                </p>
              </section>
            )}
          </div>

          <div className="mt-20 pt-10 border-t border-border flex flex-wrap items-center gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-full text-sm hover:opacity-90 active:scale-[0.98] transition-all"
              >
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border bg-white text-text-primary font-medium rounded-full text-sm hover:border-accent hover:text-accent active:scale-[0.98] transition-all"
              >
                GitHub Repository
              </a>
            )}
            <Link
              href="/#build"
              className="inline-flex items-center gap-2 px-6 py-3 text-text-muted font-medium rounded-full text-sm hover:text-accent transition-colors"
            >
              ← All Projects
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
