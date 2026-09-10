export type MedalType = 'Gold' | 'Silver' | 'Bronze';
export type TournamentResult = {
  season: string;
  event: string;
  result: MedalType;
  isHighlighted?: boolean;
};

export const tournamentResults: TournamentResult[] = [
  { season: '2024-25', event: 'NIU', result: 'Silver', isHighlighted: true },
  { season: '2024-25', event: 'Christ University', result: 'Silver' },
  { season: '2025-26', event: 'IBI', result: 'Gold' },
  { season: '2025-26', event: 'AIMT', result: 'Silver' },
  { season: '2025-26', event: 'Sportikon', result: 'Silver' },
  { season: '2025-26', event: 'NIU', result: 'Silver', isHighlighted: true },
  { season: '2025-26', event: 'IILM', result: 'Silver' },
  { season: '2025-26', event: 'BML', result: 'Bronze' },
];

export const hackathons = [
  { name: 'Smart India Hackathon 2025', projectSlug: 'samadhan' },
  { name: 'HCLTech AI Hackathon' },
  { name: 'Adobe University Hackathon' },
  { name: 'Hackacino' },
  { name: 'Multiple university-level hackathons' },
];
