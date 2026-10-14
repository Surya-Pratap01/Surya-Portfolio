export type MedalType = 'Gold' | 'Silver' | 'Bronze';

export type TournamentResult = {
  season: string;
  university: string;
  tournament: string;
  result: MedalType;
};

export const volleyballPodiums: TournamentResult[] = [
  { season: '2025–26', university: 'IBI', tournament: 'Inter-University Championship', result: 'Gold' },
  { season: '2025–26', university: 'DTU', tournament: 'Delhi Technological University Invitational', result: 'Silver' },
  { season: '2025–26', university: 'NIU', tournament: 'Noida International University Fest', result: 'Silver' },
  { season: '2025–26', university: 'AIMT', tournament: 'Army Institute Invitational', result: 'Silver' },
  { season: '2025–26', university: 'Sportikon', tournament: 'All-NCR Inter-University Meet', result: 'Silver' },
  { season: '2025–26', university: 'IILM', tournament: 'Inter-University Sports Fest', result: 'Silver' },
  { season: '2024–25', university: 'Christ University', tournament: 'NCR Inter-University Tournament', result: 'Silver' },
  { season: '2024–25', university: 'NIU', tournament: 'Inter-College Cup', result: 'Silver' },
  { season: '2025–26', university: 'BML Munjal', tournament: 'National Sports Tournament', result: 'Bronze' },
];

export const hackathonMilestones = [
  {
    event: 'Smart India Hackathon 2026',
    stage: 'Internal Round Finalist · Qualified for Presentation Round',
    standing: 'Ranked 62nd among 600+ teams',
    project: 'Bhoomi Sanket',
    role: 'Team Leader',
    detail: 'Designed stage-aware land acquisition delay tracking and GIS risk mapping.',
  },
  {
    event: 'Smart India Hackathon 2025',
    stage: 'Internal Selection Round',
    standing: 'Top 200 among 600+ teams',
    project: 'Samadhan',
    role: 'Team Leader',
    detail: 'Built full-stack civic issue reporting with Leaflet GPS mapping and municipal routing.',
  },
];

export const education = {
  institution: 'Bennett University',
  location: 'Greater Noida, Uttar Pradesh, India',
  degree: 'Bachelor of Technology in Computer Science and Engineering',
  duration: 'Aug 2024 – Jun 2028',
  cgpa: '8.14',
  coursework: [
    'Data Structures & Algorithms',
    'Object-Oriented Programming (OOP)',
    'Database Management Systems (DBMS)',
    'Operating Systems',
  ],
};
