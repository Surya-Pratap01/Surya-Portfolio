export type LeadershipRole = {
  title: string;
  org: string;
  tenure: string;
  category: 'Technical' | 'Athletics' | 'Academic';
  description: string;
  bullets: string[];
  metrics?: string;
  isPrimary?: boolean;
};

export const leadershipRoles: LeadershipRole[] = [
  {
    title: 'Technical Head',
    org: 'Data Science Society, Bennett University',
    tenure: 'Sep 2026 – Present',
    category: 'Technical',
    description:
      'Lead the core technical function across projects, workshops, and interview selection for the university technical society.',
    bullets: [
      'Lead the technical function managing 3 sub-heads within a ~25-member core team.',
      'Enhanced and maintained the official society website, improving performance and deployment workflows.',
      'Conducted ~80 technical interviews for junior-core intake and actively mentor 10–15 juniors in modern software development.',
    ],
    metrics: '~25-member core · 80+ interviews · 10–15 mentees',
    isPrimary: true,
  },
  {
    title: 'Vice-Captain',
    org: "Bennett University Men's Volleyball Team",
    tenure: 'Aug 2025 – Present',
    category: 'Athletics',
    description:
      'Lead tactical training, match coordination, and university representation on the varsity volleyball team.',
    bullets: [
      'Coordinate team training schedules, tournament travel logistics, and coach-administration communications.',
      'Lead on-court tactics and team strategy during tournament matches in the captain\'s absence.',
      'Represented Bennett University across competitive inter-university championships, securing 9 podium finishes (1 Gold, 7 Silver, 1 Bronze).',
    ],
    metrics: '9 Podium Finishes: 1 Gold, 7 Silver, 1 Bronze',
    isPrimary: true,
  },
  {
    title: 'Batch Representative',
    org: 'Batch 48, Bennett University',
    tenure: 'Aug 2024 – Present',
    category: 'Academic',
    description:
      'Elected student liaison between the engineering cohort, academic faculty, and university administration.',
    bullets: [
      'Liaise between the student batch and faculty/administration on course registrations, academic forms, and student issues.',
      'Facilitate transparent peer communication, gathering feedback and resolving academic schedule bottlenecks.',
    ],
    metrics: 'Batch 48 Student Cohort Liaison',
    isPrimary: false,
  },
];
