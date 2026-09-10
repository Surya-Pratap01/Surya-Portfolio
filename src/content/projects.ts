export type TechGroup = { label: string; items: string[] };
export type ProjectImage = { src: string; alt: string };
export type Project = {
  slug: string;
  name: string;
  isFlagship?: boolean;
  isFeatured?: boolean;
  oneLiner: string;
  problem: string;
  solution: string;
  contribution: string;
  techGroups: TechGroup[];
  engineeringDecisions: string[];
  challenges?: string; // NEEDS VERIFICATION from Surya
  learnings?: string;  // NEEDS VERIFICATION from Surya
  liveUrl?: string;    // omit CTA if undefined
  githubUrl?: string;  // omit CTA if undefined
  images: ProjectImage[];
  color: string; // accent color for card visual treatment
};

export const projects: Project[] = [
  {
    slug: 'nexus-ai',
    name: 'Nexus-AI',
    isFlagship: true,
    isFeatured: true,
    oneLiner: 'A full-stack agentic AI platform that generates, runs, and iterates on code inside isolated sandboxes — across persistent sessions.',
    problem: 'Most AI coding tools stop at generating a code snippet. There was no lightweight platform that could generate a complete project, run it in a sandboxed environment, and let a developer iterate on it across sessions — with full session persistence and a durable workflow that survives failures.',
    solution: 'Nexus-AI is a full-stack platform built on Next.js, tRPC, Prisma, and PostgreSQL, powered by a 3-stage durable agent workflow using Inngest and Google Gemini. The agent can generate files, run terminal commands in an E2B sandbox, and iterate autonomously for up to 15 tool-call cycles per session.',
    contribution: 'I designed and built the complete platform — from the type-safe tRPC API layer and Prisma schema through to the Inngest-powered durable workflow and Gemini tool-calling integration. The E2B sandbox setup and the session persistence system across the PostgreSQL-backed project history were the two most technically involved pieces.',
    techGroups: [
      { label: 'Frontend', items: ['Next.js', 'TypeScript', 'React'] },
      { label: 'Backend', items: ['tRPC', 'Prisma', 'PostgreSQL', 'Clerk'] },
      { label: 'AI / Agents', items: ['Google Gemini', 'Inngest', 'E2B Sandbox'] },
      { label: 'Infrastructure', items: ['Vercel', 'Supabase'] },
    ],
    engineeringDecisions: [
      'Durable 3-stage agent workflow via Inngest — ensures the workflow survives server restarts and network failures mid-generation.',
      'Up to 15 autonomous tool-call iterations per session — allows the agent to self-correct and iterate rather than stopping at a single generation pass.',
      'Sandboxed code execution via E2B — runs generated code in a completely isolated environment, preventing any host-system exposure.',
      'Type-safe end-to-end API with tRPC — eliminates an entire class of runtime errors at the frontend/backend boundary.',
    ],
    // challenges: '[NEEDS VERIFICATION] — ask Surya for 1-2 real specific challenges',
    // learnings: '[NEEDS VERIFICATION] — ask Surya for real learnings in his own words',
    // liveUrl: '[NEEDS VERIFICATION]',
    // githubUrl: '[NEEDS VERIFICATION]',
    images: [
      { src: '/images/projects/nexus-ai/preview.png', alt: 'Nexus-AI platform interface showing the AI code generation workflow' },
    ],
    color: '#F5A623',
  },
  {
    slug: 'tradevision',
    name: 'TradeVision',
    isFeatured: true,
    oneLiner: 'A high-performance AI trading intelligence platform with a multi-agent analysis system and sub-20ms latency WebSocket streams.',
    problem: 'Financial market analysis requires processing real-time data streams at high throughput while running computationally expensive risk models — a combination that typically requires either compromising on latency or on analytical depth.',
    solution: 'TradeVision is built on a scalable FastAPI backend with a 3-layer Redis cache and async I/O with connection pooling to process WebSocket streams at sub-20ms latency for 5,000+ concurrent users. The analysis layer is an autonomous multi-agent system with 4 specialist agents coordinated via LangGraph DAGs for stateful routing, with Monte Carlo risk analysis evaluating 10,000+ market scenarios per trade.',
    contribution: 'I architected the FastAPI backend with the 3-layer Redis caching strategy, implemented async I/O and connection pooling for the WebSocket stream processing, and designed the 4-agent LangGraph system with stateful DAG routing. The Monte Carlo risk simulation pipeline and the sub-20ms latency target were the core engineering objectives I built around.',
    techGroups: [
      { label: 'Backend', items: ['FastAPI', 'Python', 'Redis', 'WebSocket'] },
      { label: 'AI / Agents', items: ['LangGraph', 'Multi-agent System', 'Monte Carlo Simulation'] },
      { label: 'Infrastructure', items: ['Async I/O', 'Connection Pooling'] },
    ],
    engineeringDecisions: [
      '3-layer Redis cache architecture — separates hot data (real-time quotes), warm data (recent analysis), and cold data (historical scenarios) to maximize throughput while minimizing compute.',
      'LangGraph DAGs for stateful agent routing — 4 specialist agents (market analysis, risk assessment, scenario modeling, execution planning) coordinate via directed acyclic graphs, enabling conditional branching without state loss.',
      'Monte Carlo simulation at 10,000+ scenarios per trade — probabilistic risk assessment rather than point estimates, giving a full distribution of outcomes rather than a single predicted result.',
      'Sub-20ms WebSocket latency via async I/O + connection pooling — allows real-time streaming to 5,000+ concurrent users without blocking the event loop.',
    ],
    // challenges: '[NEEDS VERIFICATION] — ask Surya for specific challenges',
    // learnings: '[NEEDS VERIFICATION] — ask Surya for real learnings',
    // liveUrl: '[NEEDS VERIFICATION]',
    // githubUrl: '[NEEDS VERIFICATION]',
    images: [
      { src: '/images/projects/tradevision/preview.png', alt: 'TradeVision multi-agent trading intelligence platform dashboard' },
    ],
    color: '#3B82F6',
  },
  {
    slug: 'samadhan',
    name: 'Samadhan',
    oneLiner: 'A civic-issue reporting and routing platform built for Smart India Hackathon 2025 — connecting citizens to the right government department automatically.',
    problem: 'Civic issues like potholes, broken streetlights, and waterlogging are reported inconsistently across India, leading to complaints that get lost, misrouted between departments, or simply never acted on. There was no structured system to capture GPS-tagged issues, assign them to the correct department by category, and visualise the city-wide backlog.',
    solution: 'Samadhan is a Flask-based civic-issue reporting platform where citizens can submit location-tagged issues via a Leaflet.js map interface. A backend routing engine assigns each submission to the correct government department based on issue category and priority score. An admin dashboard (Chart.js) gives officials real-time visibility into the issue backlog by department and area.',
    contribution: 'I built the Flask backend and database schema, implemented the department-routing and priority-assignment logic, integrated Leaflet.js for GPS-tagged submissions, and built the Chart.js admin dashboard. Samadhan was built for Smart India Hackathon 2025.',
    techGroups: [
      { label: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'Leaflet.js', 'Chart.js'] },
      { label: 'Backend', items: ['Flask', 'Python', 'SQLite'] },
      { label: 'Context', items: ['Smart India Hackathon 2025'] },
    ],
    engineeringDecisions: [
      'Department-routing logic by issue category — each submission type (road, electrical, water, sanitation) maps to a specific government department, reducing misrouting.',
      'Priority scoring system — issues are weighted by report frequency, location density, and category severity to surface high-impact problems first.',
      'Leaflet.js for GPS-tagged submissions — browser-native geolocation feeds directly into the map, no native app required.',
      'Chart.js admin dashboard — gives officials a live view of issue distribution across departments and areas without requiring a separate analytics tool.',
    ],
    // challenges: '[NEEDS VERIFICATION]',
    // learnings: '[NEEDS VERIFICATION]',
    // liveUrl: '[NEEDS VERIFICATION]',
    // githubUrl: '[NEEDS VERIFICATION]',
    images: [
      { src: '/images/projects/samadhan/preview.png', alt: 'Samadhan civic issue reporting platform with Leaflet map interface' },
    ],
    color: '#10B981',
  },
  {
    slug: 'campus-eats',
    name: 'CampusEats',
    oneLiner: 'A food-discovery and rating platform for Bennett University — built for the students who eat there, with magic-link authentication.',
    problem: 'Bennett University students had no structured way to rate or discover food outlets on campus. Recommendations happened informally through word-of-mouth, with no visibility into what was popular, what had improved, or what to avoid.',
    solution: 'CampusEats is a Next.js 15 platform where Bennett students can browse food outlets, leave ratings across four dimensions (taste, value, service, hygiene), and read/write reviews. Authentication uses a magic-link flow restricted to Bennett University emails. An admin panel handles moderation and outlet management.',
    contribution: 'I built the full platform — the Next.js frontend, Supabase backend, four-dimension rating system, the Bennett-email magic-link auth, and the admin moderation workflow.',
    techGroups: [
      { label: 'Frontend', items: ['Next.js 15', 'TypeScript', 'Tailwind CSS'] },
      { label: 'Backend / Database', items: ['Supabase', 'PostgreSQL'] },
      { label: 'Auth', items: ['Magic Link (Bennett email restricted)'] },
    ],
    engineeringDecisions: [
      'Magic-link authentication restricted to @bennett.edu.in emails — ensures only real students can post reviews, maintaining authenticity without requiring manual verification.',
      'Four-dimension rating system (taste, value, service, hygiene) — more useful signal than a single star rating, lets outlets understand specifically what to improve.',
      'Supabase as backend — combines PostgreSQL, auth, and real-time subscriptions in one service, appropriate for a campus-scale product.',
      'Admin moderation panel — gives outlet managers and admins the ability to flag/remove inappropriate reviews without exposing the raw database.',
    ],
    // challenges: '[NEEDS VERIFICATION]',
    // learnings: '[NEEDS VERIFICATION] — also: is CampusEats live for real Bennett students yet, or still in development? This changes the CTA language.',
    // liveUrl: '[NEEDS VERIFICATION]',
    // githubUrl: '[NEEDS VERIFICATION]',
    images: [
      { src: '/images/projects/campus-eats/preview.png', alt: 'CampusEats food rating platform showing restaurant listings and review interface' },
    ],
    color: '#EF4444',
  },
];
