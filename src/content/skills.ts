export type SkillCategory = {
  title: string;
  skills: string[];
  description: string;
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['C++', 'Python', 'TypeScript', 'JavaScript', 'SQL'],
    description: 'Core programming languages applied across algorithms, system services, and full-stack applications.',
  },
  {
    title: 'Frontend Engineering',
    skills: ['React', 'Next.js (App Router)', 'Tailwind CSS', 'HTML5', 'CSS3', 'Leaflet.js'],
    description: 'Building responsive, accessible user interfaces with clean component composition and state management.',
  },
  {
    title: 'Backend & Databases',
    skills: [
      'Node.js',
      'FastAPI',
      'Flask',
      'PostgreSQL',
      'PostGIS',
      'Supabase (Auth & RLS)',
      'SQLite',
    ],
    description: 'Relational data modeling, spatial queries, REST API handlers, and database access security policies.',
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'VS Code', 'Vercel', 'Postman'],
    description: 'Version control, developer tooling, branch workflows, and cloud deployment pipelines.',
  },
  {
    title: 'CS Fundamentals',
    skills: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming (OOP)',
      'Database Management Systems (DBMS)',
      'Operating Systems',
    ],
    description: 'Foundational computer science principles applied to software structure, query optimization, and memory efficiency.',
  },
];
