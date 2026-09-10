export type LeadershipRole = {
  title: string;
  org: string;
  tenure: string;
  description: string;
  bullets: string[];
  isPrimary?: boolean;
};

export const leadershipRoles: LeadershipRole[] = [
  {
    title: 'Vice Captain',
    org: 'Bennett University Men\'s Volleyball Team',
    tenure: 'Aug 2025 – Apr 2026',
    description: 'I wasn\'t in a leadership role my first year. By my second, I was Vice Captain.',
    bullets: [
      'Team coordination and match-day organisation',
      'Communication between players and coaching staff',
      'Supporting and mentoring junior team members',
      'Maintaining team discipline and training consistency',
      'Representing the team in university discussions and tournament planning',
    ],
    isPrimary: true,
  },
  {
    title: 'Batch Representative — Batch 48',
    org: 'Bennett University',
    tenure: 'Aug 2024 – Jun 2028',
    description: 'Represented the batch and coordinated communication between students and university administration.',
    bullets: [
      'Liaison between students and university administration',
      'Coordinating batch-level communication and feedback',
    ],
    isPrimary: false,
  },
];
