export type TechGroup = { label: string; items: string[] };

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
  isPrimary?: boolean;
};

export type Project = {
  slug: string;
  number: string;
  name: string;
  role: string;
  context: string;
  category: 'Featured' | 'More';
  isFeatured: boolean;
  oneLiner: string;
  problem: string;
  solution: string;
  contribution: string;
  techStack: string[];
  techGroups: TechGroup[];
  engineeringDecisions: string[];
  metricsOrDimensions?: string[];
  images: ProjectImage[];
  githubUrl?: string;
  liveUrl?: string;
  color: string;
  demoNote?: string;
};

export const featuredProjects: Project[] = [
  {
    slug: 'campus-eats',
    number: '01',
    name: 'Campus Eats',
    role: 'Solo Full-Stack Developer',
    context: 'Bennett University Campus Platform',
    category: 'Featured',
    isFeatured: true,
    oneLiner:
      'A full-stack campus food discovery and multidimensional rating platform built for Bennett University students.',
    problem:
      'Students had no structured or transparent system to discover food outlets on campus, compare meal prices, or evaluate food quality. Food recommendations relied entirely on informal word-of-mouth without accountability or dish-level quality indicators.',
    solution:
      'Campus Eats provides a centralized catalog of campus dining tuck shops and outlets. Students sign in with verified university credentials to rate individual dishes across 4 specific dimensions (Taste, Hygiene, Quantity, and Value for Money), browse detailed menus, and access an administrative moderation panel.',
    contribution:
      'Designed and built the full-stack platform end-to-end: implemented Next.js 15 App Router architecture, Supabase email authentication restricted to @bennett.edu.in emails, PostgreSQL Row-Level Security policies, a 4-table relational schema with database triggers, and an administrative management panel tested with student accounts.',
    techStack: [
      'Next.js 15',
      'TypeScript',
      'Tailwind CSS',
      'Supabase',
      'PostgreSQL',
      'Row-Level Security',
      'Vercel',
    ],
    techGroups: [
      { label: 'Frontend', items: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'React'] },
      { label: 'Database & Auth', items: ['Supabase Auth', 'PostgreSQL', 'Row-Level Security (RLS)', 'SQL Triggers'] },
      { label: 'Deployment', items: ['Vercel', 'Supabase Cloud'] },
    ],
    engineeringDecisions: [
      'Email authentication restricted to @bennett.edu.in domain ensures all reviews originate from authentic campus students.',
      'PostgreSQL Row-Level Security (RLS) policies strictly enforce authenticated student submission while protecting administrative routes.',
      'Four-dimensional rating model (Taste, Quantity, Value for Money, Hygiene) delivers actionable diagnostic feedback rather than unhelpful single-star averages.',
      'Relational schema across 4 core tables (profiles, outlets, menu_items, ratings) with automated database triggers for profile initialization on signup.',
      'Dedicated admin panel enables menu and outlet catalog updates along with content moderation.',
    ],
    metricsOrDimensions: [
      'Taste Factor: Flavor balance and preparation',
      'Quantity: Portion size relative to post-class hunger',
      'Value for Money: Price-to-volume ratio calibrated for student allowances',
      'Hygiene: Kitchen cleanliness, hairnets, safe handling, and oil freshness',
    ],
    images: [
      {
        src: '/images/projects/campus-eats/outlets.png',
        alt: 'Campus Eats outlet directory featuring Green Nox, House of Chow, and campus tuck shops with 4-dimensional rating badges',
        caption: 'Primary outlet directory with 4-dimensional scorecards and dish catalogs',
        isPrimary: true,
      },
      {
        src: '/images/projects/campus-eats/rating-modal.png',
        alt: 'Campus Eats 4-dimensional dish rating modal with Taste, Quantity, Value for Money, and Hygiene stars',
        caption: 'Rating modal breaking down scores across Taste, Quantity, Value for Money, and Hygiene',
      },
      {
        src: '/images/projects/campus-eats/rating-metric.png',
        alt: 'Campus Eats 4-dimensional rating metric methodology overview',
        caption: 'The Bennett Standard rating criteria overview',
      },
      {
        src: '/images/projects/campus-eats/login.png',
        alt: 'Campus Eats university email validation and authentication screen',
        caption: 'Authentication gateway restricted to Bennett University email accounts',
      },
    ],
    githubUrl: 'https://github.com/Surya-Pratap01/Campus-Eats',
    color: '#0D9488',
  },
  {
    slug: 'bhoomi-sanket',
    number: '02',
    name: 'Bhoomi Sanket',
    role: 'Team Leader & Systems Architect',
    context: 'Smart India Hackathon 2026 · Ranked 62nd among 600+ teams',
    category: 'Featured',
    isFeatured: true,
    oneLiner:
      'A land acquisition delay monitoring platform and geospatial risk intelligence prototype for infrastructure governance.',
    problem:
      'Major infrastructure projects face severe timeline blowouts during land acquisition stages under the RFCTLARR Act 2013. Authorities lack centralized geospatial tracking to monitor acquisition pacing across multiple packages, legal bottlenecks, and statutory notice deadlines.',
    solution:
      'Bhoomi Sanket introduces stage-aware tracking for large-scale infrastructure corridors. It consolidates project packages, acquisition stages (SIA, Section 11, Section 19, Award, Possession), and GIS spatial risk maps into an administrative dashboard for proactive project monitoring.',
    contribution:
      'Led the team as project lead and architected the monorepo: built the Next.js App Router REST handlers, designed the PostgreSQL/PostGIS database schema with Supabase Row-Level Security, integrated the interactive GIS digital risk map with React-Leaflet, and defined the FastAPI service interface for future risk scoring.',
    techStack: [
      'Next.js 14',
      'TypeScript',
      'PostgreSQL',
      'PostGIS',
      'Supabase',
      'React-Leaflet',
      'FastAPI',
      'Vercel',
    ],
    techGroups: [
      { label: 'Frontend & GIS', items: ['Next.js 14 App Router', 'TypeScript', 'React-Leaflet', 'OpenStreetMap', 'Tailwind CSS'] },
      { label: 'Backend & Spatial DB', items: ['PostgreSQL / PostGIS', 'Supabase RLS', 'FastAPI (Service Interface)', 'REST Endpoints'] },
      { label: 'Architecture', items: ['Monorepo', 'Audit Logging Engine', 'Stage Milestone Contracts'] },
    ],
    engineeringDecisions: [
      'Monorepo architecture with shared TypeScript contracts between route handlers and dashboard components for stage-aware tracking.',
      'Spatial data modeling using PostgreSQL/PostGIS to support geospatial boundary rendering and district-level risk aggregations.',
      'Supabase Row-Level Security policies for audit logging, administrative controls, and role-based milestone updates.',
      'Explicit FastAPI service contract defined for future ML-based risk scoring; ML inference is intentionally disconnected in this prototype to ensure data integrity.',
      'Deployed on Vercel with structured synthetic demo datasets modeling real-world statutory acquisition timelines.',
    ],
    metricsOrDimensions: [
      'Ranked 62nd among 600+ teams in the internal hackathon round',
      'Qualified for next-stage presentation round',
      'Supports 1:Many infrastructure project to acquisition package tracking',
      'Geospatial asset risk aggregation across state and national highway corridors',
    ],
    images: [
      {
        src: '/images/projects/bhoomi-sanket/dashboard.png',
        alt: 'Bhoomi Sanket National Infrastructure Intelligence Dashboard with project metrics and risk index',
        caption: 'National Infrastructure Intelligence overview dashboard displaying active acquisition packages and risk tiers',
        isPrimary: true,
      },
      {
        src: '/images/projects/bhoomi-sanket/risk-map.png',
        alt: 'Bhoomi Sanket Geospatial Project Risk Map with interactive district markers and spatial assets',
        caption: 'Interactive GIS risk map visualizing infrastructure corridors and spatial delay indicators',
      },
      {
        src: '/images/projects/bhoomi-sanket/projects-table.png',
        alt: 'Bhoomi Sanket Infrastructure Project Portfolio dossier table with stage-aware monitoring',
        caption: 'Multi-package infrastructure project tracking view with risk tiers and dossier inspection',
      },
      {
        src: '/images/projects/bhoomi-sanket/signin.png',
        alt: 'Bhoomi Sanket secure official portal sign in gateway',
        caption: 'Official portal gateway for infrastructure governance personnel',
      },
    ],
    githubUrl: 'https://github.com/Surya-Pratap01/bhoomi-sanket',
    demoNote: 'Prototype running on synthetic demonstration datasets; ML scoring service interface defined.',
    color: '#2563EB',
  },
  {
    slug: 'samadhan',
    number: '03',
    name: 'Samadhan',
    role: 'Team Leader & Full-Stack Architect',
    context: 'Smart India Hackathon 2025 · Top 200 of 600+ teams',
    category: 'Featured',
    isFeatured: true,
    oneLiner:
      'A crowdsourced civic issue reporting and municipal department routing platform with GPS map pinning and live issue tracking.',
    problem:
      'Civic infrastructure breakdowns like road hazards, water leaks, and broken streetlights often go unaddressed due to lost paper complaints, vague location descriptions, duplicate reports, and confusion over departmental jurisdiction.',
    solution:
      'Samadhan enables citizens to report civic issues directly from browser-enabled devices using native GPS coordinate capture, photo evidence upload, and map verification. Reports are automatically assigned priority weights and routed to the corresponding municipal department.',
    contribution:
      'Designed the relational database schema with duplicate-vote constraints, developed the Flask backend with SQLAlchemy, integrated Leaflet.js with browser geolocation, built the Chart.js administrative analytics views, and collaborated on rule-based departmental routing logic.',
    techStack: [
      'Flask',
      'Python',
      'SQLite',
      'SQLAlchemy',
      'JavaScript',
      'Leaflet.js',
      'Chart.js',
      'OpenStreetMap',
    ],
    techGroups: [
      { label: 'Backend', items: ['Flask', 'Python', 'SQLAlchemy', 'REST API'] },
      { label: 'Database', items: ['SQLite', 'Unique Device Constraints', 'Data Models'] },
      { label: 'Frontend & Maps', items: ['Vanilla JavaScript', 'Leaflet.js', 'Chart.js', 'HTML5 Geolocation'] },
    ],
    engineeringDecisions: [
      'Browser-native HTML5 GPS coordinate capture pins exact latitude and longitude on Leaflet maps without requiring a native mobile app install.',
      'Unique database constraints prevent duplicate voting or redundant complaints per device session.',
      'Rule-based routing engine distributes incoming tickets across six municipal departments with priority scoring based on issue category.',
      'Persistent database records ensure reported issues remain visible, trackable, and verifiable across reloads.',
      'Interactive Chart.js administrative dashboard gives municipal officers real-time visibility into pending, active, and resolved civic tickets.',
    ],
    metricsOrDimensions: [
      'Top 200 of 600+ teams in SIH 2025 internal round',
      'Automated rule-based routing to 6 municipal departments',
      'Browser-based GPS location detection with interactive map pinning',
      'End-to-end evidence workflow with photo and voice note attachments',
    ],
    images: [
      {
        src: '/images/projects/samadhan/report-hero.png',
        alt: 'Samadhan civic issue reporting platform interface for citizens',
        caption: 'Citizen issue submission portal with category selection and incident details',
        isPrimary: true,
      },
      {
        src: '/images/projects/samadhan/location-map.png',
        alt: 'Samadhan location selection and Leaflet GPS coordinate capture map',
        caption: 'Interactive Leaflet map with browser GPS detection for precise incident geolocation',
      },
      {
        src: '/images/projects/samadhan/evidence-upload.png',
        alt: 'Samadhan photo and voice note evidence attachment interface',
        caption: 'Supporting evidence module supporting photo uploads and voice recordings',
      },
      {
        src: '/images/projects/samadhan/features.png',
        alt: 'Samadhan platform pillars: mobile friendly, GPS location, real-time tracking, community driven',
        caption: 'Core platform pillars highlighting real-time tracking and municipal transparency',
      },
    ],
    githubUrl: 'https://github.com/Surya-Pratap01/Samadhan--Civic-Issue-Management-System',
    liveUrl: 'https://civic-isuue-tracker.vercel.app/',
    color: '#059669',
  },
];

export const moreProjects: Project[] = [
  {
    slug: 'nexus-ai',
    number: '04',
    name: 'Nexus-AI',
    role: 'Full-Stack Developer',
    context: 'Autonomous AI Workspace',
    category: 'More',
    isFeatured: false,
    oneLiner:
      'An autonomous unified AI workspace combining website generation, conversational intelligence, ATS resume scoring, and enterprise document RAG.',
    problem:
      'Developers and job-seekers typically navigate disconnected tools for coding assistance, website generation, resume optimization, and document retrieval.',
    solution:
      'Nexus-AI integrates multiple generative and retrieval AI modules into a unified dashboard: real-time streaming conversational assistant, prompt-based full-stack website generation, ATS resume scoring with keyword analysis, and document semantic search using PostgreSQL pgvector.',
    contribution:
      'Architected and implemented the platform using Next.js 15, TypeScript, PostgreSQL, and Google Gemini API with Clerk authentication and role-based access control.',
    techStack: [
      'Next.js 15',
      'TypeScript',
      'Tailwind CSS',
      'PostgreSQL',
      'Google Gemini API',
      'Clerk',
      'pgvector',
    ],
    techGroups: [
      { label: 'Frontend', items: ['Next.js 15', 'TypeScript', 'Tailwind CSS'] },
      { label: 'AI & Backend', items: ['Google Gemini API', 'PostgreSQL', 'pgvector RAG', 'Clerk Auth'] },
    ],
    engineeringDecisions: [
      'Semantic document RAG using pgvector embeddings for grounded context responses.',
      'ATS resume parsing engine evaluating impact metrics, formatting, and keyword alignment.',
      'Prompt-driven web builder scaffolding full-stack code structures.',
    ],
    images: [
      {
        src: '/images/projects/nexus-ai/preview.png',
        alt: 'Nexus-AI platform interface showcasing unified autonomous workspace and creation tools',
        caption: 'Nexus-AI unified workspace interface',
        isPrimary: true,
      },
    ],
    githubUrl: 'https://github.com/Surya-Pratap01/Nexus-AI',
    color: '#3B82F6',
  },
  {
    slug: 'tradevision',
    number: '05',
    name: 'TradeVision',
    role: 'Full-Stack Developer',
    context: 'FinTech Platform · Built for III 5.0 Hackathon',
    category: 'More',
    isFeatured: false,
    oneLiner:
      'An AI-assisted paper trading and portfolio intelligence platform with simulated execution, market analytics, and multi-agent analysis.',
    problem:
      'Retail traders and students lack realistic trading environments that integrate real-time market simulation, automated risk modeling, and algorithmic agent deliberation before risking capital.',
    solution:
      'TradeVision provides a virtual trading terminal with $100k paper cash balances, multi-tier market data caching (in-memory, Redis, and Finnhub fallback), 4-agent swarm deliberation (Momentum, Mean Reversion, Sentiment, Risk), and Monte Carlo portfolio simulation.',
    contribution:
      'Built full-stack trading workflows with FastAPI, Python, Redis, WebSockets, and React, implementing atomic trade settlement and portfolio risk analytics.',
    techStack: [
      'FastAPI',
      'Python',
      'Redis',
      'WebSockets',
      'React',
      'LangGraph',
      'PostgreSQL',
    ],
    techGroups: [
      { label: 'Backend', items: ['FastAPI', 'Python', 'Redis', 'WebSockets'] },
      { label: 'AI & Intelligence', items: ['LangGraph', 'Multi-Agent Swarm', 'Monte Carlo Risk Engine'] },
    ],
    engineeringDecisions: [
      'Multi-tier market quote caching using in-memory and Redis layers for rapid quote retrieval.',
      'Row-locked atomic trade transactions to prevent concurrent double-spending on paper cash balances.',
      'Multi-agent swarm evaluating momentum, sentiment, mean reversion, and capital risk.',
    ],
    images: [
      {
        src: '/images/projects/tradevision/preview.png',
        alt: 'TradeVision equities trading intelligence terminal with multi-agent consensus and system status',
        caption: 'TradeVision trading intelligence terminal',
        isPrimary: true,
      },
    ],
    githubUrl: 'https://github.com/Surya-Pratap01/TradeVision',
    color: '#2563EB',
  },
];

export const allProjects: Project[] = [...featuredProjects, ...moreProjects];
export const projects: Project[] = allProjects;
