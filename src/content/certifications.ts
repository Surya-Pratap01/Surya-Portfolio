export type Certification = {
  name: string;
  issuer: string;
  focus: string;
};

export const certifications: Certification[] = [
  {
    name: 'Introduction to Modern Database Systems',
    issuer: 'Saylor Academy',
    focus: 'Relational Database Architecture, SQL Normalization, Indexing & Query Execution',
  },
  {
    name: 'AWS Academy Cloud Foundations',
    issuer: 'AWS Academy',
    focus: 'Cloud Infrastructure, Virtual Networking, Security, Compute & Storage Services',
  },
];
