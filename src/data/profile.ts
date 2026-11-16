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
    // Opens Gmail's compose window with the "to" field pre-filled.
    email:
      "https://mail.google.com/mail/?view=cm&fs=1&to=ranasaadbinyounas@gmail.com&su=Let%27s%20work%20together",
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
  heading: "I build the systems businesses run on — end to end.",
  paragraphs: [
    "I’m a software engineer comfortable operating across the full product lifecycle — from technical scoping and architecture through to deployment, handover, and the operational work that keeps systems running afterwards.",
    "I turn ambiguous problems into production systems. I architect normalized, multi-tenant databases, build type-safe backends in NestJS, Node, and Python, and ship fast, responsive frontends in React and Next.js — then own the deployment, the migrations, and the reviews that keep them healthy. I lead delivery teams and hold the standard for what ships.",
    "My work runs at real scale: white-label platforms holding hundreds of thousands of records and running entire sales floors, AI voice, vision, and generative features wired into live products, and data and automation pipelines that quietly replace whole manual workflows.",
    "And I do it working directly with clients — scoping the requirements, writing the proposals and discovery documents, and translating business goals into systems they can depend on.",
  ],
  stats: [
    { value: "700K+", label: "records powering the systems I’ve built" },
    { value: "100+", label: "production automations engineered" },
    { value: "10+", label: "products shipped end-to-end" },
    { value: "12+", label: "AI & automation integrations shipped" },
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
    role: "Automation Engineer & Full-Stack Developer",
    company: "Automaxion LLC",
    meta: "Full-Time · On-Site",
    location: "Lahore, PK",
    period: "Aug 2025 — Present",
    current: true,
    bullets: [
      "Own the full delivery lifecycle across concurrent client engagements — scoping, system design, architecture, full-stack implementation, deployment, and handover.",
      "Architect and build multi-tenant platforms end to end — normalized PostgreSQL schemas, type-safe NestJS and Python services, and React frontends — including a white-label CRM that runs a client’s entire sales operation.",
      "Integrate AI into client-facing products: voice agents that handle live booking and ordering calls, and vision and generative pipelines that turn a website into branded ad content.",
      "Build the data and automation layer — scraping and lead-generation pipelines, ETL migrations off no-code platforms, and event-driven and scheduled workflows that replace manual processes outright.",
      "Maintain and extend mature no-code/low-code platforms (Airtable, N8N, Make.com, Google Apps Script) in production while concurrently delivering full-stack rebuilds that succeed them.",
      "Lead a small delivery team via GitHub — issue assignment, branch and pull-request review, cross-service coordination — and own production operations, including security incident response across client repositories.",
      "Produce end-to-end technical documentation — architecture diagrams, ER and state diagrams, QA test plans, and formal discovery and migration proposals guiding clients from no-code platforms to bespoke full-stack solutions.",
    ],
    tech: [
      "NestJS",
      "React",
      "TypeScript",
      "PostgreSQL",
      "RabbitMQ",
      "Drizzle ORM",
      "Python",
      "Airtable",
      "N8N",
      "Retell AI",
    ],
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
  icon:
    | "code"
    | "layout"
    | "server"
    | "database"
    | "bolt"
    | "rocket"
    | "shield"
    | "plug"
    | "sparkles"
    | "wrench";
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
    skills: ["TypeScript", "JavaScript", "Python", "Java", "C++"],
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
    skills: ["NestJS", "Node.js", "Fastify", "Express.js", "FastAPI", "Flask", "PHP Laravel", "Postman"],
  },
  {
    title: "Databases & ORM",
    icon: "database",
    blurb: "Schema design to data access.",
    skills: ["PostgreSQL", "Supabase", "Drizzle ORM", "Prisma", "Firebase", "Oracle", "Google Sheets"],
  },
  {
    title: "Architecture & Systems",
    icon: "plug",
    blurb: "How the pieces fit together.",
    concepts: true,
    skills: [
      "System design",
      "Multi-tenant data modelling",
      "Event-driven architecture",
      "Message queues",
      "REST API design",
      "Auth, JWT & RBAC",
      "Real-time & streaming",
      "Audit logging",
      "ETL & data migration",
      "Technical documentation",
    ],
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
    skills: [
      "Vercel",
      "Linux",
      "Git",
      "GitHub",
      "Railway",
      "Docker",
      "Nginx",
      "PM2",
      "Jira",
      "Figma",
      "Playwright",
      "Selenium",
    ],
  },
];

/** Logo belt under the hero — keys must match techIcons so each shows its brand logo. */
export const marqueeItems = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "NestJS",
  "PostgreSQL",
  "Python",
  "Tailwind CSS",
  "Supabase",
  "Drizzle ORM",
  "Firebase",
  "Airtable",
  "N8N",
  "Make.com",
  "React Native",
  "Vercel",
];

/* ------------------------------------------------------------------ */
/* Projects — one unified, expandable list (featured + more builds)    */
/* ------------------------------------------------------------------ */

export type ProjectLink = { label: string; href: string };

export type Project = {
  index: string;
  /** URL segment for the case-study page: /work/<slug>. */
  slug: string;
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
  /** Live / source links surfaced inside the case study. */
  links?: ProjectLink[];
  diagram:
    | "schema"
    | "seo"
    | "scraper"
    | "voice"
    | "generate"
    | "airtable"
    | "restaurant"
    | "mobile"
    | "sync";
  featured?: boolean;
};

export const projects: Project[] = [
  {
    index: "01",
    slug: "sidago-crm",
    title: "Sidago CRM — Multi-Brand White-Label Platform",
    category: "Full-Stack Platform",
    year: "2025 — Present",
    role: "Architect & Backend Lead",
    featured: true,
    blurb:
      "The operational backbone of a multi-brand U.S. telesales firm — a white-label platform running the client’s entire sales floor, on a schema and backend I designed and own.",
    description: [
      "The operational backbone for a multi-brand outbound telesales firm targeting U.S. small-cap public companies (NASDAQ / NYSE / OTC / TSX) — three sales brands and tens of thousands of leads, feeding the parent firm’s investment and financing engagements. I own the backend, the automations service, the shared schema package, and every production migration.",
      "I designed the normalized PostgreSQL schema — a white-label organization → brand → sub-brand hierarchy with trigger-based audit logging and full role-based access control over JWT. The backend is a multi-service NestJS monorepo: a write-authority API alongside a cron- and event-driven automations service, fronted by a React + Vite app with role-scoped navigation and a TanStack Query data layer.",
      "It runs the whole floor: lead assignment and call queues, dialer integration with call verification that reconciles agent-reported outcomes against carrier records, a configurable lead lifecycle, automated email tracks, leaderboards and scoring, and live dashboards. A shared server-side query layer gives every grid in the product real search, filtering, sorting, and nested grouping across the full dataset rather than the current page.",
      "I also moved the business off its no-code predecessor — a staged, dry-runnable ETL migrating roughly 700K rows into PostgreSQL with de-duplication and data recovery — and re-architected the write path around an event-driven message queue when cross-continent latency made synchronous processing untenable.",
    ],
    metrics: ["3 sales brands · 36K leads", "~700K rows migrated", "Multi-service backend", "Full RBAC & audit trail"],
    tech: [
      "NestJS",
      "PostgreSQL",
      "RabbitMQ",
      "Drizzle ORM",
      "React",
      "Vite",
      "TypeScript",
      "Supabase",
      "Socket.IO",
      "Nginx",
    ],
    diagram: "schema",
  },
  {
    index: "02",
    slug: "monthwisetravel",
    title: "MonthWiseTravel — Programmatic SEO Engine",
    category: "Programmatic SEO",
    year: "2026",
    role: "Solo Build",
    featured: true,
    blurb:
      "208 pre-rendered, independently indexable pages generated from one config file and a single climate dataset — indexed by Google in ~10 days from a cold domain.",
    description: [
      "A programmatic SEO engine that generates 208 pre-rendered, independently indexable URLs from a single config file and one JSON dataset — a 15-destination × 12-month combinatorial matrix (180 leaf pages) plus 28 hub pages, all statically rendered at build time.",
      "The build-time pipeline ingests roughly ten years of daily historical climate data per destination (~55,000 records) from the Open-Meteo Historical Weather API, aggregates it into monthly statistics, and persists a climate.json snapshot as the single source of truth — pages build from the snapshot, never from live API calls, so builds stay deterministic, reproducible, and independent of third-party uptime. The ingestion layer runs sequentially against an unauthenticated, rate-limited public API with throttled delays, retry and backoff, exposed as a re-runnable refresh script so the dataset regenerates on demand without touching application code.",
      "Derived logic converts raw temperature and precipitation series into per-page judgments — average high and low in °C and °F, monthly rainfall, estimated rainy-day counts, and a Great / Good / Mixed / Avoid comfort verdict from defined threshold rules — so every page carries an answer rather than a data dump. A variable-driven copy layer templates titles, meta descriptions, H1s, intros, and packing recommendations with varied sentence construction to avoid scaled-content classification, and the entire technical SEO surface (sitemap, robots, canonicals, JSON-LD, BreadcrumbList) is generated from the same arrays that drive the routes. Adding one destination to a config array produces 12 new pages, a new hub, updated sitemap entries, and fully rewired internal linking — no template or route changes.",
      "Instrumented in Google Search Console from day one to validate the pipeline end to end. From a cold-start domain with zero backlinks, pages were crawled and indexed within about ten days and began surfacing against real long-tail queries, with the structured data accepted by Google as a valid enhancement — confirming the whole generation approach works in production, not just in theory.",
    ],
    metrics: ["208 static URLs", "~55K climate records", "Indexed in ~10 days", "Zero-touch scaling"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Open-Meteo API", "Vercel"],
    links: [
      { label: "Live site", href: "https://monthwisetravel.vercel.app" },
      { label: "Source", href: "https://github.com/SaadBinYounas-SE/monthwisetravel" },
    ],
    diagram: "seo",
  },
  {
    index: "03",
    slug: "yelpscraper",
    title: "YelpScraper — Lead-Gen Scraper & Dashboard",
    category: "Data Product",
    year: "2026",
    role: "Sole Developer",
    featured: true,
    blurb:
      "A delivered, multi-user lead-generation dashboard — scraping business listings on demand and streaming them live into a searchable, exportable table.",
    description: [
      "A production web dashboard that scrapes Yelp business listings by any search term and U.S. location, on demand. Results stream live into a searchable, filterable, CSV-exportable table with per-business detail panels, full search history across every prior batch, and advanced AND-condition filtering over any field. Multi-user by design: email/password accounts, each user’s data stored privately and deduplicated by business, so re-running a search updates existing records instead of duplicating them.",
      "React 19 + Vite on Vercel; a Python/Flask backend streaming results to the dashboard over Server-Sent Events; Playwright headless Chromium with BeautifulSoup parsing; PostgreSQL in Docker on a Contabo VPS, with JWT + bcrypt auth. A “deep search” mode visits each individual business profile to pull the three fields Yelp only exposes conditionally — present on roughly 60% of businesses in a sample run — bringing the capture to 14+ fields per record.",
      "The hard part was never the scraper. Yelp sits behind an enterprise anti-bot system that blocks at the browser-fingerprint and IP-reputation level, so rotating proxies does not solve it — and it was the blocker that had stalled this build before I took it on. I diagnosed the failure as infrastructure-level rather than code-level and integrated a purpose-built unlocker service as a drop-in abstraction inside the existing Playwright layer, leaving the dashboard and data layer untouched.",
      "Nine days from first client contact to a working end-to-end demo, about two weeks of active build, four weeks to full handover — source in the client’s own repo with commit history, environment variables, server credentials, and a generated PDF technical document covering architecture, stack rationale, schema, endpoints, and env reference. Hosting was engineered down to a flat ~$5–7/month, deliberately kept independent of data and traffic growth.",
    ],
    metrics: ["14+ fields per business", "Live result streaming", "Anti-bot layer solved", "Flat, traffic-independent hosting"],
    tech: ["React", "TypeScript", "Python", "Flask", "Playwright", "PostgreSQL", "Docker", "Tailwind CSS", "Vercel"],
    diagram: "scraper",
  },
  {
    index: "04",
    slug: "shiftgrit",
    title: "ShiftGrit — AI Medical Booking Automation",
    category: "AI Voice Automation",
    year: "2025 — 2026",
    role: "Automation Architect",
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
    index: "05",
    slug: "brandlift-ai",
    title: "BrandLift AI — Brand Content Generator",
    category: "AI Product",
    year: "2026",
    role: "Full-Stack Developer",
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
    index: "06",
    slug: "sidago-airtable",
    title: "Sidago CRM — Airtable Platform",
    category: "No-Code Platform",
    year: "2025",
    role: "Sole Developer & Maintainer",
    blurb:
      "The predecessor CRM I owned solo — a 16-table, 489-field Airtable base running a full sales floor with 40+ custom automations.",
    description: [
      "The predecessor production CRM running the same multi-brand telesales business — a 16-table, 489-field Airtable base spanning 3 brands and ~36K leads, operating the client’s full sales floor (agents, dialing, validation, leaderboards, fixer workflows) until the full-stack migration.",
      "Sole developer and maintainer: 40+ custom JavaScript automations (lead assignment, call-result handling, hot-lead lifecycle, leaderboard scoring, nightly sync), Mighty Caller VoIP with automated daily JWT refresh, Numverify + NeverBounce validation, and a self-hosted N8N instance offloading staged processing beyond platform-native limits.",
    ],
    metrics: ["16 tables · 489 fields", "40+ automations", "Self-hosted N8N"],
    tech: ["Airtable", "Airtable Scripts", "N8N", "Mighty Caller", "Numverify", "NeverBounce"],
    diagram: "airtable",
  },
  {
    index: "07",
    slug: "ai-restaurant",
    title: "AI Restaurant — Inbound Voice Agent",
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
    index: "08",
    slug: "easyrozee",
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
    index: "09",
    slug: "airtable-sheets-sync",
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

/** "Sidago CRM — Multi-Brand White-Label Platform" → ["Sidago CRM", "Multi-Brand White-Label Platform"] */
export function splitTitle(title: string): [string, string | null] {
  const [name, ...rest] = title.split(" — ");
  return [name, rest.length ? rest.join(" — ") : null];
}

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/* ------------------------------------------------------------------ */
/* Delivery lifecycle — the stages owned on every engagement           */
/* ------------------------------------------------------------------ */

export const lifecycle = [
  { stage: "Scope", detail: "Requirements, proposals, discovery docs" },
  { stage: "Architect", detail: "Schemas, services, system design" },
  { stage: "Build", detail: "Type-safe backends, fast frontends" },
  { stage: "Integrate", detail: "AI, voice, automation, third parties" },
  { stage: "Deploy", detail: "Migrations, releases, infrastructure" },
  { stage: "Operate", detail: "Reviews, incidents, handover" },
] as const;

/** One-line run summaries shown in the hero readout — each is a fact from a project above. */
export const runLog = [
  { job: "sidago-crm", action: "migrate", result: "~700K rows" },
  { job: "monthwisetravel", action: "build", result: "208 pages" },
  { job: "yelpscraper", action: "stream", result: "14+ fields" },
  { job: "shiftgrit", action: "book", result: "zero-touch" },
  { job: "sidago-airtable", action: "automate", result: "40+ scripts" },
  { job: "brandlift-ai", action: "generate", result: "url to ads" },
] as const;

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export const navLinks = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
