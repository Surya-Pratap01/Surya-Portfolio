export type Certification = {
  name: string;
  issuer: string;
  date: string;
};

export const certifications: Certification[] = [
  { name: 'Machine Learning Specialization', issuer: 'Coursera (DeepLearning.AI)', date: '2024' },
  { name: 'Python for Data Science, AI & Development', issuer: 'Coursera (IBM)', date: '2024' },
  { name: 'Programming with Python', issuer: 'Infosys Springboard', date: '2023' },
  { name: 'Introduction to Cybersecurity', issuer: 'Saylor Academy', date: '2023' },
  { name: 'Data Structures & Algorithms', issuer: 'Coursera', date: '2024' },
];
