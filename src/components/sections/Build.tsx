'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { projects, Project } from '@/content/projects';

function ProjectVisual({ project, large = false }: { project: Project; large?: boolean }) {
  const initial = project.name.charAt(0);
  return (
    <div
      className="w-full h-full relative overflow-hidden group-hover:scale-[1.015] transition-transform duration-500 ease-out"
      style={{ backgroundColor: 'var(--bg-alt)' }}
      role="img"
      aria-label={`${project.name} project visual`}
    >
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          background: `linear-gradient(145deg, ${project.color} 0%, transparent 55%)`,
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 lg:p-10">
        <div className="flex items-start justify-between gap-4">
          <span
            className="font-[family-name:var(--font-display)] leading-none text-text-primary/20"
            style={{ fontSize: large ? 'clamp(4rem, 12vw, 8rem)' : 'clamp(3rem, 8vw, 5rem)' }}
            aria-hidden="true"
          >
            {initial}
          </span>
          <span
            className="w-2.5 h-2.5 rounded-full mt-2"
            style={{ background: project.color }}
            aria-hidden="true"
          />
        </div>
        <div>
          <p className="text-xs font-medium tracking-[0.16em] uppercase text-text-subtle mb-2">
            Case study
          </p>
          <p
            className="font-[family-name:var(--font-display)] text-text-primary"
            style={{ fontSize: large ? 'clamp(1.5rem, 3vw, 2rem)' : '1.25rem' }}
          >
            {project.name}
          </p>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
        style={{ background: project.color }}
        aria-hidden="true"
      />
    </div>
  );
}

function FlagshipProject({ project }: { project: Project }) {
  const shouldReduceMotion = useReducedMotion();
  const tags = project.techGroups.flatMap((g) => g.items).slice(0, 8);

  return (
    <motion.article
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="mb-20 lg:mb-28"
    >
      <Link href={`/projects/${project.slug}`} className="group block">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-semibold tracking-[0.14em] uppercase text-accent">
            Flagship project
          </span>
          <div className="flex-1 h-px bg-border" aria-hidden="true" />
        </div>

        <div
          className="relative overflow-hidden border border-border mb-8"
          style={{ aspectRatio: '16/9', minHeight: '240px' }}
        >
          <ProjectVisual project={project} large />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7">
            <h3
              className="font-[family-name:var(--font-display)] text-text-primary group-hover:text-accent transition-colors duration-200 mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', letterSpacing: '-0.025em', lineHeight: 1.1 }}
            >
              {project.name}
            </h3>
            <p className="text-text-muted max-w-2xl" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
              {project.oneLiner}
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-6 lg:pt-2">
            <ul className="space-y-3" role="list">
              {project.engineeringDecisions.slice(0, 2).map((d) => {
                const [title] = d.split('—');
                return (
                  <li key={title} className="text-sm text-text-muted leading-relaxed pl-4 border-l border-border">
                    {title.trim()}
                  </li>
                );
              })}
            </ul>
            <div className="flex flex-wrap gap-2">
              {tags.map((tech) => (
                <span key={tech} className="tag">{tech}</span>
              ))}
            </div>
            <span className="text-sm font-medium text-accent link-underline self-start">
              View case study →
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

function FeaturedRow({ project }: { project: Project }) {
  const shouldReduceMotion = useReducedMotion();
  const tags = project.techGroups.flatMap((g) => g.items).slice(0, 5);

  return (
    <motion.article
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="border-t border-border py-12 lg:py-16"
    >
      <Link href={`/projects/${project.slug}`} className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <p className="text-xs font-medium tracking-[0.14em] uppercase text-text-subtle mb-3">
            Featured
          </p>
          <h3
            className="font-[family-name:var(--font-display)] text-text-primary group-hover:text-accent transition-colors mb-4"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', letterSpacing: '-0.02em' }}
          >
            {project.name}
          </h3>
          <p className="text-text-muted text-[0.95rem] mb-6 max-w-md" style={{ lineHeight: 1.75 }}>
            {project.oneLiner}
          </p>
          <div className="flex flex-wrap gap-2 mb-5">
            {tags.map((tech) => (
              <span key={tech} className="tag">{tech}</span>
            ))}
          </div>
          <span className="text-sm font-medium text-accent link-underline">
            View case study →
          </span>
        </div>
        <div
          className="lg:col-span-7 order-1 lg:order-2 overflow-hidden border border-border"
          style={{ aspectRatio: '16/10' }}
        >
          <ProjectVisual project={project} />
        </div>
      </Link>
    </motion.article>
  );
}

function CompactProject({ project, index }: { project: Project; index: number }) {
  const shouldReduceMotion = useReducedMotion();
  const tags = project.techGroups.flatMap((g) => g.items).slice(0, 4);

  return (
    <motion.article
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : index * 0.08 }}
      className="border-t border-border pt-8"
    >
      <Link href={`/projects/${project.slug}`} className="group block h-full">
        <div
          className="overflow-hidden border border-border mb-6"
          style={{ aspectRatio: '16/10' }}
        >
          <ProjectVisual project={project} />
        </div>
        <div className="flex items-baseline justify-between gap-4 mb-3">
          <h3
            className="font-[family-name:var(--font-display)] text-text-primary group-hover:text-accent transition-colors"
            style={{ fontSize: '1.5rem', letterSpacing: '-0.02em' }}
          >
            {project.name}
          </h3>
          <span className="mono text-xs text-text-subtle tabular-nums">
            {String(index + 2).padStart(2, '0')}
          </span>
        </div>
        <p className="text-text-muted text-sm mb-5" style={{ lineHeight: 1.7 }}>
          {project.oneLiner}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tech) => (
            <span key={tech} className="tag">{tech}</span>
          ))}
        </div>
      </Link>
    </motion.article>
  );
}

export default function Build() {
  const flagship = projects.find((p) => p.isFlagship);
  const featured = projects.find((p) => p.isFeatured && !p.isFlagship);
  const rest = projects.filter((p) => !p.isFlagship && !(p.isFeatured && p.slug === featured?.slug));

  return (
    <section
      id="build"
      aria-label="Projects"
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
          <p className="eyebrow mb-5">Build</p>
          <h2
            className="font-[family-name:var(--font-display)] text-text-primary"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 3.25rem)', letterSpacing: '-0.025em' }}
          >
            Things I&apos;ve built.
          </h2>
          <p className="mt-5 text-text-muted max-w-xl" style={{ fontSize: '1rem', lineHeight: 1.8 }}>
            Four projects built across different stacks and problem domains — from agentic AI platforms to civic tech to campus products.
          </p>
        </motion.div>

        {flagship && <FlagshipProject project={flagship} />}

        {featured && <FeaturedRow project={featured} />}

        {rest.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 mt-4">
            {rest.map((project, i) => (
              <CompactProject key={project.slug} project={project} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
