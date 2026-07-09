/**
 * Single source of truth for all portfolio content.
 * Every fact here is scraped from Saad's resume & cover letter — edit this
 * file to update the site, no component changes needed.
 */

export const profile = {
  name: "Saad Bin Younas",
  firstName: "Saad",
  lastName: "Bin Younas",
  title: "Full-Stack Engineer & Automation Engineer",
  roles: ["Full-Stack Engineer", "Automation Engineer"],
  tagline:
    "I own systems end-to-end — from database architecture and design docs to production code, deployment, and team review.",
  location: "Lahore, Pakistan",
  email: "ranasaadbinyounas@gmail.com",
  phone: "+92 332 448 5239",
  resumeUrl: "/Saad-Bin-Younas-Resume.pdf",
  socials: {
    github: "https://github.com/SaadBinYounas-SE",
    linkedin: "https://www.linkedin.com/in/saad-bin-younas-830485248/",
    email: "mailto:ranasaadbinyounas@gmail.com",
  },
} as const;

/**
 * Web3Forms access key for the contact form.
 * Get a free key in ~30s at https://web3forms.com (just enter your email —
 * no account needed), then paste it here. Submissions arrive in that inbox.
 * Left as the demo placeholder until you swap in your own.
 */
export const WEB3FORMS_ACCESS_KEY: string = "f7247774-8772-48eb-9ed7-385356e286ae";

/* ------------------------------------------------------------------ */
/* About — narrative adapted from the cover letter                     */
/* ------------------------------------------------------------------ */

export const about = {
  heading: "Full-stack development and automation engineering — a rare combination.",
  paragraphs: [
    "I’m a software engineer comfortable operating across the full product lifecycle — from technical scoping and architecture through to deployment and handover. At Automaxion LLC, I own end-to-end delivery across multiple concurrent client projects: full-stack web applications, no-code/low-code automation pipelines, and AI-powered integrations.",
    "The work I’m most proud of: ShiftGrit, a fully automated AI voice booking system that replaced a medical firm’s receptionist workflows end-to-end; a live multi-brand CRM for U.S. stock-market sales operations that I grew from 40+ Airtable automations into a complete full-stack rebuild; and BrandLift AI, a platform that turns any website URL into branded social content with Google Vision, Imagen 3, and Veo.",
    "I’m equally comfortable writing custom backend logic from scratch as I am picking up a new platform and shipping production workflows within days — and I bring the documentation culture to match: architecture diagrams, ER and state diagrams, and formal migration proposals that guide clients from no-code platforms to bespoke systems.",
  ],
  stats: [
    { value: "40K+", label: "leads running through platforms I’ve built" },
    { value: "40+", label: "production automations engineered & maintained" },
    { value: "31", label: "ordered database migrations shipped to production" },
    { value: "6", label: "AI technologies integrated into client products" },
  ],
} as const;

/* ------------------------------------------------------------------ */
/* Experience                                                          */
/* ------------------------------------------------------------------ */

export type Experience = {
  role: string;
  company: string;
  meta: string;
  location: string;
  period: string;
  current?: boolean;
  bullets: string[];
  tech: string[];
};

export const experience: Experience[] = [
  {
    role: "Automation Engineer & Full-Stack Lead",
    company: "Automaxion LLC",
    meta: "Full-Time · On-Site",
    location: "Lahore, PK",
    period: "Aug 2025 — Present",
    current: true,
    bullets: [
      "Own the full delivery lifecycle across concurrent client engagements — scoping, system design, architecture, full-stack implementation, deployment, and handover.",
      "Maintain and extend mature no-code/low-code platforms (Airtable, N8N, Make.com, Google Apps Script) in production while concurrently delivering full-stack rebuilds in React, NestJS, TypeScript, Python, and PostgreSQL.",
      "Lead a small delivery team via GitHub — issue assignment, branch and pull-request review, and cross-service coordination across frontend, backend, and automation tracks.",
      "Integrate voice and vision AI (Retell AI, Google Vision / Video Intelligence API, generative models) into client-facing products and workflows.",
      "Produce end-to-end technical documentation — architecture diagrams, ER and state diagrams, user stories, and formal migration proposals guiding clients from no-code platforms to bespoke full-stack solutions.",
    ],
    tech: ["React", "NestJS", "TypeScript", "Python", "PostgreSQL", "Airtable", "N8N", "Make.com", "Retell AI"],
  },
  {
    role: "Junior Software Developer",
    company: "RTC League",
    meta: "Mobile & Voice AI",
    location: "Lahore, PK",
    period: "Aug 2024 — Jan 2025",
    bullets: [
      "Integrated Google’s Tacotron 2 text-to-speech model into the Alexander AI Voice module, enabling natural-language voice output within the mobile application.",
      "Delivered module-based features across React Native (JavaScript) and native Android (Java) codebases, maintaining consistent cross-platform behaviour and participating in code reviews.",
    ],
    tech: ["React Native", "Java (Android)", "Google Tacotron 2"],
  },
  {
    role: "Associate Web Developer",
    company: "PacsLink Corporation",
    meta: "Enterprise Web & Desktop",
    location: "Lahore, PK",
    period: "Jun 2023 — Sep 2023",
    bullets: [
      "Contributed to a desktop application for Lahore General Hospital built in Java with Oracle database integration, implementing data management and reporting modules.",
      "Developed web application features for Chughtai Labs using PHP Laravel — backend logic, database-driven views, and REST endpoints.",
    ],
    tech: ["PHP Laravel", "Java", "Oracle"],
  },
];

/* ------------------------------------------------------------------ */
/* Education — expandable cards reveal the curriculum                  */
/* ------------------------------------------------------------------ */

export type Education = {
  school: string;
  degree: string;
  period: string;
  location: string;
  summary: string;
  coursesLabel: string;
  courses: string[];
};

export const education: Education[] = [
  {
    school: "FAST-NUCES",
    degree: "BS, Software Engineering",
    period: "2021 — 2025",
    location: "Lahore, PK",
    summary:
      "A rigorous, full-spectrum software engineering degree — from algorithms and systems fundamentals through architecture, databases, and the full software delivery process.",
    coursesLabel: "Core coursework",
    courses: [
      "Data Structures & Algorithms",
      "Design & Analysis of Algorithms",
      "Object-Oriented Programming",
      "Database Systems",
      "Operating Systems",
      "Computer Networks",
      "Software Design & Architecture",
      "Software Requirements Engineering",
      "Software Quality Assurance",
      "Web Engineering",
      "Mobile Application Development",
      "Artificial Intelligence",
      "Human-Computer Interaction",
      "Software Project Management",
    ],
  },
  {
    school: "Pak Turk Maarif International Colleges",
    degree: "FSc. Pre-Engineering",
    period: "2019 — 2021",
    location: "Lahore, PK",
    summary:
      "Pre-engineering foundation with a heavy emphasis on mathematics and physics — the analytical groundwork for an engineering degree.",
    coursesLabel: "Major subjects",
    courses: ["Mathematics", "Physics", "Chemistry", "Computer Science"],
  },
];

/* ------------------------------------------------------------------ */
/* Skills — presented as an aligned "spec sheet" of grouped stacks     */
/* ------------------------------------------------------------------ */

export type SkillGroup = {
  title: string;
  icon: "code" | "layout" | "server" | "database" | "bolt" | "rocket" | "shield";
  blurb: string;
  /** Skill labels — matched against techIcons for brand logos where available. */
  skills: string[];
  /** Concept groups render as text chips (no brand logos). */
  concepts?: boolean;
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    icon: "code",
    blurb: "The core I build in daily.",
    skills: ["TypeScript", "JavaScript", "Python", "Java", "C++", "SQL"],
  },
  {
    title: "Frontend",
    icon: "layout",
    blurb: "Web & mobile interfaces.",
    skills: ["React", "Next.js", "React Native", "Vite", "TanStack Query", "Tailwind CSS", "Expo"],
  },
  {
    title: "Backend & APIs",
    icon: "server",
    blurb: "Services, endpoints & integrations.",
    skills: ["NestJS", "Node.js", "Fastify", "Express.js", "FastAPI", "PHP Laravel", "Postman"],
  },
  {
    title: "Databases & ORM",
    icon: "database",
    blurb: "Schema design to data access.",
    skills: ["PostgreSQL", "Supabase", "Drizzle ORM", "Prisma", "Firebase", "Oracle", "Google Sheets"],
  },
  {
    title: "Automation & AI",
    icon: "bolt",
    blurb: "No-code pipelines and voice / vision AI.",
    skills: [
      "Airtable",
      "N8N",
      "Make.com",
      "Google Apps Script",
      "Retell AI",
      "Google Vision",
      "Video Intelligence",
      "Imagen 3",
      "Veo",
    ],
  },
  {
    title: "DevOps & Tools",
    icon: "rocket",
    blurb: "Ship, run & collaborate.",
    skills: ["Vercel", "Railway", "Linux", "Git", "GitHub", "Jira", "Figma", "Playwright", "Selenium"],
  },
  {
    title: "Architecture & Practices",
    icon: "shield",
    blurb: "How I keep systems sound.",
    concepts: true,
    skills: [
      "Schema design & normalization",
      "Multi-tenant / white-label",
      "Audit logging",
      "JWT / RBAC",
      "HMAC-signed webhooks",
      "HLD / LLD",
      "ER & state diagrams",
      "Separation of concerns",
    ],
  },
];

/** Wordmarks for the hero marquee belt */
export const marqueeItems = [
  "React",
  "TypeScript",
  "Next.js",
  "NestJS",
  "PostgreSQL",
  "Python",
  "Airtable",
  "N8N",
  "Make.com",
  "Retell AI",
  "Supabase",
  "Drizzle ORM",
  "React Native",
  "Tailwind CSS",
  "Google Vision API",
  "Firebase",
];

/* ------------------------------------------------------------------ */
/* Projects — one unified, expandable list (featured + more builds)    */
/* ------------------------------------------------------------------ */

export type Project = {
  index: string;
  title: string;
  category: string;
  year: string;
  role: string;
  /** Short line shown while the card is collapsed. */
  blurb: string;
  /** Full story revealed on expand. */
  description: string[];
  metrics?: string[];
  tech: string[];
  diagram: "schema" | "voice" | "generate" | "airtable" | "restaurant" | "mobile" | "sync";
  featured?: boolean;
};

export const projects: Project[] = [
  {
    index: "01",
    title: "Sidago CRM — Multi-Brand White-Label Platform",
    category: "Full-Stack Platform",
    year: "2025 — Present",
    role: "Architect & Full-Stack Lead",
    featured: true,
    blurb:
      "The full-stack rebuild powering a multi-brand U.S. telesales operation — ~40K leads, a white-label brand hierarchy, and HMAC-signed services.",
    description: [
      "The operational backbone for a multi-brand outbound telesales firm targeting U.S. small-cap public companies (NASDAQ / NYSE / OTC / TSX) — roughly 40K leads across 3 sales brands, feeding the parent firm’s investment and financing engagements.",
      "I designed the normalized PostgreSQL schema — a white-label organization → brand → sub-brand hierarchy with trigger-based audit logging and full RBAC over JWT with refresh rotation, shipped across 31 ordered Drizzle migrations. The backend is a multi-service NestJS monorepo (write-authority API + cron/event-driven automations service) communicating over HMAC-signed webhooks with constant-time verification, fronted by a React + Vite app with role-scoped navigation and a TanStack Query data layer.",
    ],
    metrics: ["~40K leads", "3 sales brands", "31 ordered migrations", "HMAC-signed services"],
    tech: ["React", "NestJS", "PostgreSQL", "Supabase", "Drizzle ORM", "TypeScript", "JWT/RBAC", "HMAC Webhooks"],
    diagram: "schema",
  },
  {
    index: "02",
    title: "ShiftGrit — AI Medical Booking Automation",
    category: "AI Voice Automation",
    year: "2025 — 2026",
    role: "Automation Architect",
    featured: true,
    blurb:
      "A Retell AI voice agent that books medical appointments end-to-end — checking live availability and orchestrating the whole post-call pipeline.",
    description: [
      "A fully automated booking and patient-communication system for a medical/therapy firm — replacing manual receptionist workflows end-to-end.",
      "A Retell AI voice agent handles inbound patient booking calls, verifying doctor availability in Jane in real time and enforcing therapist-configured capacity limits before confirming or rerouting. Make.com orchestrates the post-call pipeline — Freshdesk ticket, Jane confirmation email, Textline SMS reminder, Missive routing — extended with Google Apps Script for conditional business logic beyond native platform capabilities.",
    ],
    metrics: ["Zero-touch bookings", "Real-time Jane availability", "4-channel post-call pipeline"],
    tech: ["Retell AI", "Make.com", "Jane", "Freshdesk", "Missive", "Textline", "Google Sheets", "GAS"],
    diagram: "voice",
  },
  {
    index: "03",
    title: "BrandLift AI — Brand Content Generator",
    category: "AI Product",
    year: "2026",
    role: "Full-Stack Developer",
    featured: true,
    blurb:
      "Turns any website URL into branded social content — scraping brand tone from the DOM, then generating posts and video with Imagen 3 + Veo.",
    description: [
      "A full-stack AI platform that generates branded social-media ad content from nothing but a URL — scraping product data, colour palettes, typography, and brand tone straight from the site’s DOM.",
      "Google Vision API analyses product imagery, Video Intelligence extracts scene-level metadata, and Imagen 3 + Veo generate moodboards, ad posts, and short-form videos. The Python backend runs as serverless functions on Vercel, with Google Analytics wired in for SEO and funnel tracking.",
    ],
    metrics: ["URL → branded content", "Imagen 3 + Veo generation", "Serverless Python on Vercel"],
    tech: ["Python", "React", "Google Vision API", "Video Intelligence", "Imagen 3", "Veo", "Google Analytics"],
    diagram: "generate",
  },
  {
    index: "04",
    title: "Sidago CRM — Airtable Platform",
    category: "No-Code Platform",
    year: "2025",
    role: "Sole Developer & Maintainer",
    blurb:
      "The predecessor CRM I owned solo — a 16-table, 489-field Airtable base running a full sales floor with 40+ custom automations.",
    description: [
      "The predecessor production CRM running the same multi-brand telesales business — a 16-table, 489-field Airtable base spanning 3 brands and ~40K leads, operating the client’s full sales floor (agents, dialing, validation, leaderboards, fixer workflows) until the full-stack migration.",
      "Sole developer and maintainer: 40+ custom JavaScript automations (lead assignment, call-result handling, hot-lead lifecycle, leaderboard scoring, nightly sync), Mighty Caller VoIP with automated daily JWT refresh, Numverify + NeverBounce validation, and a self-hosted N8N instance offloading staged processing beyond platform-native limits.",
    ],
    metrics: ["16 tables · 489 fields", "40+ automations", "Self-hosted N8N"],
    tech: ["Airtable", "Airtable Scripts", "N8N", "Mighty Caller", "Numverify", "NeverBounce"],
    diagram: "airtable",
  },
  {
    index: "05",
    title: "POV AI Restaurant — Inbound Voice Agent",
    category: "AI Voice Concept",
    year: "2025",
    role: "Full-Stack Developer",
    blurb:
      "A concept platform where Retell AI takes complete food orders and reservations by phone — no human, no custom backend.",
    description: [
      "A concept AI platform where Retell AI handles complete inbound food ordering and table-reservation calls with no human involvement, and an owner dashboard allows real-time menu, pricing, and seating updates.",
      "N8N orchestrates webhook-driven handoff between Retell AI call events and the frontend, routing order and reservation data without a custom backend.",
    ],
    metrics: ["Human-free ordering", "Live owner dashboard", "Backend-less via N8N"],
    tech: ["React", "TypeScript", "Tailwind CSS", "Retell AI", "N8N", "Vite"],
    diagram: "restaurant",
  },
  {
    index: "06",
    title: "EasyRozee — Affiliate Marketing Platform",
    category: "Mobile App (FYP)",
    year: "2024 — 2025",
    role: "Full Project Lifecycle",
    blurb:
      "My final-year project — a full-featured affiliate-marketing mobile app on React Native + Firebase, run through a complete Agile lifecycle.",
    description: [
      "A full-featured mobile application for the Pakistani affiliate-marketing market — product discovery, affiliate link generation, and performance tracking, built on Firebase auth, realtime database, and push notifications.",
      "I managed the full project lifecycle in an Agile/Scrum process with Jira, producing a complete Software Project Management plan covering WBS, timeline, and resource allocation.",
    ],
    metrics: ["Firebase realtime + auth", "Affiliate link tracking", "Full Agile lifecycle"],
    tech: ["React Native", "Expo", "TypeScript", "Firebase", "Jira"],
    diagram: "mobile",
  },
  {
    index: "07",
    title: "Airtable ↔ Google Sheets Real-Time Sync",
    category: "Integration Tool",
    year: "2026",
    role: "Sole Developer",
    blurb:
      "A live sync mirroring every Airtable CRUD op into Google Sheets — idempotent by external ID, killing a manual export-and-paste step.",
    description: [
      "A live sync tool mirroring every CRUD operation from Airtable into Google Sheets via JSON payloads POSTed to a Google Apps Script web-app endpoint.",
      "I authored both sides — the Airtable Scripts producer and the GAS consumer — with idempotent record matching by external ID so reapplied updates never duplicate, eliminating a recurring manual export-and-paste step from the client’s reporting workflow.",
    ],
    metrics: ["Real-time CRUD mirror", "Idempotent by external ID", "Zero manual exports"],
    tech: ["Airtable Scripts", "Google Apps Script", "Airtable REST API"],
    diagram: "sync",
  },
];

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
] as const;
