# Saad Bin Younas — Portfolio

Personal portfolio for **Saad Bin Younas**, Full-Stack Engineer & Automation Engineer.

Live sections: Hero · About · Skills · Experience · Projects · Testimonials · Contact — a single page with smooth anchor scrolling, scroll-triggered reveals, and micro-interactions throughout.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) — reveals, hero entrance, draw-on SVG diagrams
- `next/font` (Archivo display + Inter body), `next/image` for the optimized portrait

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

All copy — bio, experience, skills, projects, links — lives in one typed file:

```
src/data/profile.ts
```

Change it there; no component edits needed. The resume PDF served by the “Download CV” buttons is `public/Saad-Bin-Younas-Resume.pdf`.

## Project structure

```
src/
├── app/            # layout (fonts, metadata, grain), page, global theme (globals.css)
├── components/     # one file per section + ui/ primitives (Reveal, RotatingBadge, …)
└── data/profile.ts # single source of truth for all content
```

## Deploying

Zero-config on [Vercel](https://vercel.com): import the repo and deploy. `npm run build` produces a production build.

## Filling in testimonials

`src/components/Testimonials.tsx` renders designed placeholder cards. Replace the skeleton
markup with real quotes (or lift the data into `profile.ts`) when they arrive.
