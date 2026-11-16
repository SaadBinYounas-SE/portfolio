# Saad Bin Younas — Portfolio

Personal site for **Saad Bin Younas**, full-stack and automation engineer.

The previous design is preserved on the `original` branch. `REBUILD_LOG.md` records how and why this
version was built.

## Pages

| Route | What it is |
| --- | --- |
| `/` | Hero, selected work, summary, the mountain section |
| `/work` | Index of every project with a live diagram preview |
| `/work/[slug]` | A case study per project |
| `/about` | Story, experience, stack, education, resume |
| `/contact` | What to include, then the form |

Every page ends with the red contact block. It is rendered once in `src/app/layout.tsx`.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4 — tokens live in `src/app/globals.css`
- Framer Motion — the scroll-linked mountain section and the self-drawing diagrams
- Fonts: Host Grotesk and Martian Mono, self-hosted in `src/app/fonts/`

## Getting started

```bash
npm install
npm run dev      # http://localhost:3001
npm run build
npm run lint
```

## Editing content

All copy — bio, experience, skills, projects, links — lives in one typed file:

```
src/data/profile.ts
```

Adding a project there (with a unique `slug`) creates its row on `/work` and its case-study page.
The resume served by the download links is `public/Saad-Bin-Younas-Resume.pdf`.

## Photos

`src/assets/portrait.png` and `src/assets/field.jpg` are generated from the original photos by
`scripts/process-photos.py` (cut-out + greyscale; the mountain keeps only the red jacket in colour).
Re-run it if either original changes.

## Project structure

```
src/
├── app/            # routes, layout (fonts, metadata, header, contact block, footer), globals.css
├── assets/         # processed photos
├── components/     # one file per block
└── data/           # profile.ts (content), techIcons.ts (brand logo paths)
```

## Deploying

Vercel builds `main` to production on every push.
