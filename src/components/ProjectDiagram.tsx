"use client";

import { motion } from "framer-motion";

/**
 * Abstract blueprint-style schematics for the featured projects —
 * lines draw themselves in when scrolled into view.
 */

const stroke = "var(--color-mint-700)";
const soft = "var(--color-mint-400)";

const draw = (delay: number) => ({
  initial: { pathLength: 0, opacity: 0 },
  whileInView: { pathLength: 1, opacity: 1 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.9, delay, ease: "easeInOut" as const },
});

const pop = (delay: number) => ({
  initial: { opacity: 0, scale: 0.85 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, delay, ease: [0.21, 0.65, 0.28, 0.99] as const },
});

function Label({ x, y, children }: { x: number; y: number; children: string }) {
  return (
    <text
      x={x}
      y={y}
      textAnchor="middle"
      fontSize="8.5"
      fontWeight={700}
      letterSpacing="1.4"
      fill="var(--color-mint-800)"
    >
      {children}
    </text>
  );
}

function Box({
  x,
  y,
  w,
  h,
  label,
  dashed,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  dashed?: boolean;
}) {
  return (
    <>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={9}
        fill="white"
        stroke={dashed ? soft : stroke}
        strokeWidth="1.4"
        strokeDasharray={dashed ? "4 4" : undefined}
      />
      <Label x={x + w / 2} y={y + h / 2 + 3}>
        {label}
      </Label>
    </>
  );
}

function SchemaDiagram() {
  return (
    <svg viewBox="0 0 320 240" fill="none" className="h-full w-full" aria-hidden>
      {/* connectors */}
      <motion.path d="M160 52 V70 M160 70 H85 V88 M160 70 H235 V88" stroke={stroke} strokeWidth="1.4" {...draw(0.3)} />
      <motion.path d="M85 120 V138 M85 138 H45 V156 M85 138 H125 V156" stroke={stroke} strokeWidth="1.4" {...draw(0.55)} />
      <motion.path d="M235 120 V156" stroke={stroke} strokeWidth="1.4" {...draw(0.55)} />
      <motion.path d="M60 196 H260" stroke={soft} strokeWidth="1.4" strokeDasharray="4 4" {...draw(0.8)} />
      {/* nodes */}
      <motion.g {...pop(0.1)}>
        <Box x={110} y={18} w={100} h={34} label="ORGANIZATION" />
      </motion.g>
      <motion.g {...pop(0.4)}>
        <Box x={40} y={88} w={90} h={32} label="BRAND" />
        <Box x={190} y={88} w={90} h={32} label="BRAND" />
      </motion.g>
      <motion.g {...pop(0.65)}>
        <Box x={16} y={156} w={62} h={28} label="SUB" />
        <Box x={96} y={156} w={62} h={28} label="SUB" />
        <Box x={204} y={156} w={62} h={28} label="SUB" />
      </motion.g>
      <motion.g {...pop(0.9)}>
        <Box x={92} y={206} w={136} h={24} label="AUDIT LOG" dashed />
      </motion.g>
    </svg>
  );
}

/** MonthWiseTravel — one config + one dataset fan out into a static page matrix. */
function SeoDiagram() {
  const cells: [number, number][] = [];
  for (let r = 0; r < 3; r++) for (let c = 0; c < 4; c++) cells.push([c, r]);
  return (
    <svg viewBox="0 0 320 240" fill="none" className="h-full w-full" aria-hidden>
      {/* sources → build */}
      <motion.path d="M100 40 H120 V64 M106 84 H120 V64 M120 64 H128" stroke={stroke} strokeWidth="1.4" {...draw(0.3)} />
      {/* build → matrix */}
      <motion.path d="M172 64 H196" stroke={stroke} strokeWidth="1.4" {...draw(0.6)} />
      {/* build → seo layer */}
      <motion.path
        d="M150 84 V150 M34 150 H286 M34 150 V172 M160 150 V172 M286 150 V172"
        stroke={soft}
        strokeWidth="1.4"
        strokeDasharray="4 4"
        {...draw(1.05)}
      />

      <motion.g {...pop(0.1)}>
        <Box x={16} y={26} w={84} h={28} label="CONFIG" />
      </motion.g>
      <motion.g {...pop(0.2)}>
        <Box x={10} y={70} w={96} h={28} label="CLIMATE JSON" />
      </motion.g>
      <motion.g {...pop(0.45)}>
        <path d="M150 44 172 64 150 84 128 64Z" fill="white" stroke={stroke} strokeWidth="1.4" />
        <Label x={150} y={67}>BUILD</Label>
      </motion.g>

      <motion.g {...pop(0.65)}>
        <Label x={250} y={36}>15 × 12 MATRIX</Label>
      </motion.g>
      {cells.map(([c, r], i) => (
        <motion.rect
          key={`${c}-${r}`}
          x={206 + c * 24}
          y={44 + r * 20}
          width={20}
          height={16}
          rx={3}
          fill={r === 0 ? "var(--color-mint-100)" : "var(--color-mint-50)"}
          stroke={soft}
          strokeWidth="1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.65 + i * 0.03, duration: 0.3 }}
        />
      ))}
      <motion.g {...pop(0.95)}>
        <Label x={250} y={118}>208 URLS</Label>
      </motion.g>

      <motion.g {...pop(1.05)}>
        <Box x={14} y={172} w={80} h={26} label="SITEMAP" dashed />
        <Box x={120} y={172} w={80} h={26} label="JSON-LD" dashed />
        <Box x={226} y={172} w={80} h={26} label="CANONICAL" dashed />
      </motion.g>
      <motion.g {...pop(1.15)}>
        <Label x={160} y={222}>GENERATED FROM ONE SOURCE</Label>
      </motion.g>
    </svg>
  );
}

/** YelpScraper — the unlocker layer carries the headless browser through the anti-bot wall. */
function ScraperDiagram() {
  return (
    <svg viewBox="0 0 320 240" fill="none" className="h-full w-full" aria-hidden>
      {/* search → unlocker → wall → source */}
      <motion.path d="M78 40 H100" stroke={stroke} strokeWidth="1.4" {...draw(0.25)} />
      <motion.path d="M168 40 H194" stroke={soft} strokeWidth="1.6" strokeDasharray="4 4" {...draw(0.5)} />
      <motion.path d="M234 40 H258" stroke={soft} strokeWidth="1.6" strokeDasharray="4 4" {...draw(0.65)} />
      {/* source → api */}
      <motion.path d="M284 56 V86 M160 86 H284 M160 86 V100" stroke={stroke} strokeWidth="1.4" {...draw(0.85)} />
      {/* api → outputs */}
      <motion.path d="M160 132 V146 M72 146 H250 M72 146 V162 M250 146 V162" stroke={stroke} strokeWidth="1.4" {...draw(1.05)} />

      <motion.g {...pop(0.1)}>
        <Box x={14} y={26} w={64} h={28} label="SEARCH" />
      </motion.g>
      <motion.g {...pop(0.3)}>
        <Box x={100} y={26} w={68} h={28} label="UNLOCKER" />
      </motion.g>
      {/* the anti-bot wall it passes through */}
      <motion.g {...pop(0.5)}>
        <path
          d="M214 18 234 26v13c0 9.5-20 16-20 16s-20-6.5-20-16V26l20-8Z"
          fill="var(--color-mint-50)"
          stroke={stroke}
          strokeWidth="1.4"
        />
        <path d="M206 36h16M214 30v12" stroke={soft} strokeWidth="1.6" strokeLinecap="round" />
        <Label x={214} y={68}>PERIMETERX</Label>
      </motion.g>
      <motion.g {...pop(0.7)}>
        <Box x={258} y={26} w={50} h={28} label="YELP" />
      </motion.g>

      <motion.g {...pop(0.95)}>
        <Box x={96} y={100} w={128} h={32} label="FLASK · SSE" />
      </motion.g>

      {/* live table */}
      <motion.g {...pop(1.0)}>
        <rect x={22} y={162} width={100} height={56} rx={9} fill="white" stroke={stroke} strokeWidth="1.4" />
        <rect x={22} y={162} width={100} height={20} rx={9} fill="var(--color-mint-50)" stroke={stroke} strokeWidth="1.4" />
        <Label x={72} y={176}>RESULTS</Label>
        <path d="M34 194h76M34 204h76M34 212h48" stroke={soft} strokeWidth="2" strokeLinecap="round" />
      </motion.g>
      {/* per-user store */}
      <motion.g {...pop(1.1)}>
        <ellipse cx={250} cy={170} rx={30} ry={8} fill="white" stroke={stroke} strokeWidth="1.4" />
        <path d="M220 170v28c0 4.4 13.4 8 30 8s30-3.6 30-8v-28" fill="white" stroke={stroke} strokeWidth="1.4" />
        <Label x={250} y={228}>PER-USER</Label>
      </motion.g>
    </svg>
  );
}

function VoiceDiagram() {
  return (
    <svg viewBox="0 0 320 240" fill="none" className="h-full w-full" aria-hidden>
      {/* connectors */}
      <motion.path d="M66 96 H112" stroke={stroke} strokeWidth="1.4" {...draw(0.3)} />
      <motion.path d="M188 96 H228" stroke={stroke} strokeWidth="1.4" {...draw(0.5)} />
      <motion.path
        d="M150 134 V152 M150 152 H60 V168 M150 152 H120 V168 M150 152 H180 V168 M150 152 H240 V168"
        stroke={stroke}
        strokeWidth="1.4"
        {...draw(0.7)}
      />
      {/* caller */}
      <motion.g {...pop(0.1)}>
        <circle cx="44" cy="96" r="22" fill="white" stroke={stroke} strokeWidth="1.4" />
        <path
          d="M38 89c0 8 5 14 13 14l2-4-4.5-3-2.5 1.5c-2-1.5-3.5-3.5-4-6l2.5-1.5-1-5.5-5.5.5Z"
          fill={stroke}
        />
      </motion.g>
      {/* voice waves */}
      <motion.path d="M74 88c3 3 3 13 0 16 M82 84c5 5 5 19 0 24" stroke={soft} strokeWidth="1.4" {...draw(0.4)} />
      {/* AI agent */}
      <motion.g {...pop(0.35)}>
        <circle cx="150" cy="96" r="34" fill="white" stroke={stroke} strokeWidth="1.4" />
        <Label x={150} y={94}>VOICE</Label>
        <Label x={150} y={106}>AGENT</Label>
      </motion.g>
      {/* Jane calendar */}
      <motion.g {...pop(0.55)}>
        <rect x="228" y="66" width="70" height="58" rx="9" fill="white" stroke={stroke} strokeWidth="1.4" />
        <path d="M228 84h70" stroke={stroke} strokeWidth="1.2" />
        <circle cx="245" cy="98" r="2.4" fill={soft} />
        <circle cx="261" cy="98" r="2.4" fill={soft} />
        <circle cx="277" cy="98" r="2.4" fill="var(--color-mint-600)" />
        <circle cx="245" cy="112" r="2.4" fill={soft} />
        <Label x={263} y={62}>JANE</Label>
      </motion.g>
      {/* post-call pipeline */}
      <motion.g {...pop(0.85)}>
        <Box x={30} y={168} w={60} h={26} label="TICKET" />
        <Box x={98} y={168} w={52} h={26} label="EMAIL" />
        <Box x={158} y={168} w={48} h={26} label="SMS" />
        <Box x={214} y={168} w={60} h={26} label="INBOX" />
      </motion.g>
      <motion.g {...pop(1.0)}>
        <Label x={152} y={218}>POST-CALL PIPELINE</Label>
      </motion.g>
    </svg>
  );
}

function GenerateDiagram() {
  return (
    <svg viewBox="0 0 320 240" fill="none" className="h-full w-full" aria-hidden>
      {/* connectors */}
      <motion.path d="M160 60 V86" stroke={stroke} strokeWidth="1.4" {...draw(0.35)} />
      <motion.path
        d="M160 138 V150 M160 150 H65 V166 M160 150 V166 M160 150 H255 V166"
        stroke={stroke}
        strokeWidth="1.4"
        {...draw(0.6)}
      />
      {/* URL bar */}
      <motion.g {...pop(0.1)}>
        <rect x="70" y="30" width="180" height="30" rx="15" fill="white" stroke={stroke} strokeWidth="1.4" />
        <circle cx="88" cy="45" r="4" fill={soft} />
        <path d="M100 45h96" stroke={soft} strokeWidth="2.4" strokeLinecap="round" />
        <Label x={228} y={48}>URL</Label>
      </motion.g>
      {/* AI core */}
      <motion.g {...pop(0.4)}>
        <path d="M160 86 173 112 160 138 147 112Z" fill="white" stroke={stroke} strokeWidth="1.4" />
        <path d="M160 100v24M150 112h20" stroke={soft} strokeWidth="1.4" />
        <Label x={206} y={115}>VISION + GEN</Label>
      </motion.g>
      {/* outputs */}
      <motion.g {...pop(0.75)}>
        <rect x="30" y="166" width="70" height="52" rx="9" fill="white" stroke={stroke} strokeWidth="1.4" />
        <path d="m40 206 12-14 8 8 8-11 12 17" stroke={soft} strokeWidth="1.6" strokeLinejoin="round" />
        <circle cx="50" cy="182" r="3.5" stroke={soft} strokeWidth="1.4" />
        <Label x={65} y={162}>MOODBOARD</Label>
      </motion.g>
      <motion.g {...pop(0.85)}>
        <rect x="125" y="166" width="70" height="52" rx="9" fill="white" stroke={stroke} strokeWidth="1.4" />
        <path d="M137 182h46M137 192h46M137 202h28" stroke={soft} strokeWidth="2" strokeLinecap="round" />
        <Label x={160} y={162}>AD POST</Label>
      </motion.g>
      <motion.g {...pop(0.95)}>
        <rect x="220" y="166" width="70" height="52" rx="9" fill="white" stroke={stroke} strokeWidth="1.4" />
        <path d="m248 181 16 11-16 11Z" fill={soft} />
        <Label x={255} y={162}>VIDEO</Label>
      </motion.g>
    </svg>
  );
}

function AirtableDiagram() {
  const cells: [number, number][] = [];
  for (let r = 0; r < 4; r++) for (let c = 0; c < 5; c++) cells.push([c, r]);
  return (
    <svg viewBox="0 0 320 240" fill="none" className="h-full w-full" aria-hidden>
      {/* table grid */}
      <motion.g {...pop(0.1)}>
        <rect x="24" y="40" width="200" height="150" rx="10" fill="white" stroke={stroke} strokeWidth="1.4" />
        <rect x="24" y="40" width="200" height="26" rx="10" fill="var(--color-mint-50)" stroke={stroke} strokeWidth="1.4" />
        <Label x={124} y={57}>16 TABLES · 489 FIELDS</Label>
      </motion.g>
      {cells.map(([c, r], i) => (
        <motion.rect
          key={`${c}-${r}`}
          x={34 + c * 37}
          y={78 + r * 26}
          width={30}
          height={18}
          rx={3}
          fill={r === 0 ? "var(--color-mint-100)" : "var(--color-mint-50)"}
          stroke={soft}
          strokeWidth="1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.3 + i * 0.02, duration: 0.3 }}
        />
      ))}
      {/* automations node */}
      <motion.path d="M224 115 H258" stroke={stroke} strokeWidth="1.4" {...draw(0.6)} />
      <motion.g {...pop(0.7)}>
        <circle cx="278" cy="115" r="22" fill="white" stroke={stroke} strokeWidth="1.4" />
        <path d="M280 104 271 118h7l-2 12 11-15h-7l2-11Z" fill={soft} />
        <Label x={278} y={150}>40+ AUTO</Label>
      </motion.g>
    </svg>
  );
}

function RestaurantDiagram() {
  return (
    <svg viewBox="0 0 320 240" fill="none" className="h-full w-full" aria-hidden>
      <motion.path d="M96 100 H150" stroke={stroke} strokeWidth="1.4" {...draw(0.3)} />
      <motion.path d="M210 100 V150 H90 V150 M150 132 V150" stroke={stroke} strokeWidth="1.4" {...draw(0.6)} />
      {/* phone */}
      <motion.g {...pop(0.1)}>
        <rect x="44" y="66" width="52" height="70" rx="9" fill="white" stroke={stroke} strokeWidth="1.4" />
        <path d="M60 82h20M60 92h20M60 102h12" stroke={soft} strokeWidth="2" strokeLinecap="round" />
        <Label x={70} y={128}>CALL</Label>
      </motion.g>
      {/* agent */}
      <motion.g {...pop(0.35)}>
        <circle cx="180" cy="100" r="30" fill="white" stroke={stroke} strokeWidth="1.4" />
        <Label x={180} y={97}>ORDER</Label>
        <Label x={180} y={109}>AGENT</Label>
      </motion.g>
      {/* dashboard */}
      <motion.g {...pop(0.6)}>
        <rect x="234" y="72" width="64" height="56" rx="9" fill="white" stroke={stroke} strokeWidth="1.4" />
        <path d="M244 118v-10M256 118v-18M268 118v-8M280 118v-14" stroke={soft} strokeWidth="2.4" strokeLinecap="round" />
        <Label x={266} y={68}>DASHBOARD</Label>
      </motion.g>
      {/* outputs */}
      <motion.g {...pop(0.85)}>
        <Box x={54} y={150} w={72} h={26} label="ORDER" />
        <Box x={174} y={150} w={72} h={26} label="TABLE" />
      </motion.g>
      <motion.g {...pop(1)}>
        <Label x={160} y={196}>ROUTED VIA N8N</Label>
      </motion.g>
    </svg>
  );
}

function MobileDiagram() {
  return (
    <svg viewBox="0 0 320 240" fill="none" className="h-full w-full" aria-hidden>
      {/* phone frame */}
      <motion.g {...pop(0.1)}>
        <rect x="122" y="30" width="76" height="150" rx="14" fill="white" stroke={stroke} strokeWidth="1.4" />
        <rect x="132" y="44" width="56" height="14" rx="4" fill="var(--color-mint-100)" />
        <Label x={160} y={54}>EASYROZEE</Label>
      </motion.g>
      {/* cards inside */}
      {[0, 1, 2].map((r) => (
        <motion.g key={r} {...pop(0.35 + r * 0.12)}>
          <rect x="132" y={66 + r * 26} width="56" height="20" rx="4" fill="var(--color-mint-50)" stroke={soft} strokeWidth="1" />
          <circle cx="142" cy={76 + r * 26} r="4" fill={soft} />
          <path d={`M152 ${72 + r * 26}h28M152 ${80 + r * 26}h18`} stroke={soft} strokeWidth="1.6" strokeLinecap="round" />
        </motion.g>
      ))}
      {/* firebase / features */}
      <motion.path d="M122 150 H70 M198 150 H250" stroke={stroke} strokeWidth="1.4" {...draw(0.7)} />
      <motion.g {...pop(0.9)}>
        <Box x={26} y={138} w={68} h={26} label="FIREBASE" />
        <Box x={226} y={138} w={68} h={26} label="TRACKING" />
      </motion.g>
      <motion.g {...pop(1.05)}>
        <Label x={160} y={200}>AFFILIATE LINKS</Label>
      </motion.g>
    </svg>
  );
}

function SyncDiagram() {
  return (
    <svg viewBox="0 0 320 240" fill="none" className="h-full w-full" aria-hidden>
      {/* airtable side */}
      <motion.g {...pop(0.1)}>
        <rect x="26" y="76" width="92" height="88" rx="10" fill="white" stroke={stroke} strokeWidth="1.4" />
        <rect x="26" y="76" width="92" height="22" rx="10" fill="var(--color-mint-50)" stroke={stroke} strokeWidth="1.4" />
        <Label x={72} y={91}>AIRTABLE</Label>
        <path d="M40 112h64M40 126h64M40 140h40" stroke={soft} strokeWidth="2" strokeLinecap="round" />
      </motion.g>
      {/* sheets side */}
      <motion.g {...pop(0.35)}>
        <rect x="202" y="76" width="92" height="88" rx="10" fill="white" stroke={stroke} strokeWidth="1.4" />
        <rect x="202" y="76" width="92" height="22" rx="10" fill="var(--color-mint-50)" stroke={stroke} strokeWidth="1.4" />
        <Label x={248} y={91}>SHEETS</Label>
        <path d="M216 112h64M216 126h64M216 140h40" stroke={soft} strokeWidth="2" strokeLinecap="round" />
      </motion.g>
      {/* arrows through GAS */}
      <motion.path d="M118 108 H150 M170 108 H202" stroke={stroke} strokeWidth="1.6" {...draw(0.6)} />
      <motion.path d="M202 132 H170 M150 132 H118" stroke={soft} strokeWidth="1.6" strokeDasharray="4 4" {...draw(0.8)} />
      <motion.g {...pop(0.75)}>
        <path d="M160 96 173 120 160 132 147 120Z" fill="white" stroke={stroke} strokeWidth="1.4" />
        <Label x={160} y={116}>GAS</Label>
      </motion.g>
      <motion.g {...pop(1)}>
        <Label x={160} y={186}>IDEMPOTENT BY EXTERNAL ID</Label>
      </motion.g>
    </svg>
  );
}

export type DiagramVariant =
  | "schema"
  | "seo"
  | "scraper"
  | "voice"
  | "generate"
  | "airtable"
  | "restaurant"
  | "mobile"
  | "sync";

export default function ProjectDiagram({ variant }: { variant: DiagramVariant }) {
  switch (variant) {
    case "schema":
      return <SchemaDiagram />;
    case "seo":
      return <SeoDiagram />;
    case "scraper":
      return <ScraperDiagram />;
    case "voice":
      return <VoiceDiagram />;
    case "generate":
      return <GenerateDiagram />;
    case "airtable":
      return <AirtableDiagram />;
    case "restaurant":
      return <RestaurantDiagram />;
    case "mobile":
      return <MobileDiagram />;
    case "sync":
      return <SyncDiagram />;
  }
}
