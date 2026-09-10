export type SkillGroup = {
  label: string;
  items: string[];
  usedIn: string[]; // project slugs
};

export const skillGroups: SkillGroup[] = [
  { label: 'Languages', items: ['C++', 'Python', 'Java', 'JavaScript', 'TypeScript', 'SQL'], usedIn: ['nexus-ai', 'tradevision', 'samadhan', 'campus-eats'] },
  { label: 'Frontend', items: ['HTML', 'CSS', 'React', 'Next.js', 'Tailwind CSS'], usedIn: ['nexus-ai', 'samadhan', 'campus-eats'] },
  { label: 'Backend', items: ['Flask', 'tRPC', 'FastAPI'], usedIn: ['nexus-ai', 'tradevision', 'samadhan'] },
  { label: 'Databases', items: ['PostgreSQL', 'SQLite', 'Supabase', 'Prisma', 'Redis'], usedIn: ['nexus-ai', 'tradevision', 'samadhan', 'campus-eats'] },
  { label: 'AI / Generative AI', items: ['Google Gemini', 'Generative AI', 'AI Agent Workflows', 'E2B', 'LangGraph'], usedIn: ['nexus-ai', 'tradevision'] },
  { label: 'Cloud / Deployment', items: ['Vercel', 'Supabase Cloud', 'AWS Fundamentals'], usedIn: ['nexus-ai', 'campus-eats'] },
  { label: 'Tools', items: ['Git', 'GitHub', 'Inngest', 'Clerk', 'Leaflet.js', 'Chart.js', 'WebSocket'], usedIn: ['nexus-ai', 'tradevision', 'samadhan'] },
];
