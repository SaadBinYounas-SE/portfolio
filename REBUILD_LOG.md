# Rebuild log — Saad Bin Younas portfolio

A running record of the UI/UX rebuild so the work can be picked up from any point.
**To resume:** read "Status" below, then continue from the first unchecked item.

## Branches

| Branch | What it holds |
| --- | --- |
| `original` | The old site, copied from `main` at commit `3ee0735` before any change (plus one empty commit to trigger its deployment). |
| `main` | The rebuilt site. Vercel deploys this to production. |
| `rebuild-wip` | Leftover checkpoint branch from the build. Identical in content to `main`; safe to delete on GitHub. |

## Live

| What | URL |
| --- | --- |
| New site (production, from `main`) | https://portfolio-sable-kappa-cv60nuazfx.vercel.app |
| Original site (from `original`) | https://portfolio-git-original-saadbinyounas-ses-projects.vercel.app |

The original lives on a Vercel branch URL. To put it on a custom address, add a domain in the Vercel
project (Settings → Domains) and assign it to the `original` branch.

## Brief (from Saad)

- Discard the old UI/UX entirely; rebuild taking inspiration from shift5.io.
- Free hand on navigation, pages, palette, theme.
- Use the existing headshot once, on the landing page, blended into the background rather than sitting in a frame.
- Add the mountain photo (`20260626_134000(1).jpg`) to show the adventurer side, also blended into the page.
- Premium animation, SVGs, logos, imagery.
- Wherever a visitor goes, the page must lead them to the contact form.
- Latest UI/UX practice.

## What was taken from shift5.io (and what was not)

Taken: hard-edged flat colour blocks instead of cards, one oversized grotesk headline with a slash,
a monospaced face for instrument-style data, a numbered status list with indicator dots, a live data
readout, an arrow tile as the main call to action, greyscale photography.

Not taken: their coral field, their fonts, their copy, their loader, their binary panel. The palette
and the idea below are Saad's own.

## Design system

**Idea:** the mountain photo is a monochrome landscape with one red jacket in it. The site works the
same way — snow, ice, rock and granite greys everywhere, and red reserved for one thing: the way to
the contact form. Every page ends in the red contact block.

| Token | Hex | Use |
| --- | --- | --- |
| `snow` | `#EEF0EE` | main light ground |
| `ice` | `#C3CACC` | cool grey panels |
| `rock` | `#6F787C` | secondary text, rules |
| `granite` | `#1B1F22` | dark ground |
| `ink` | `#14171A` | text on light and on red |
| `jacket` | `#EA4A33` | contact / call to action only |

**Type:** Host Grotesk (headlines and body) and Martian Mono (data, indices, stack lists).
Both are self-hosted from `src/app/fonts/` so builds never depend on Google Fonts.

**Motion:** one orchestrated entrance on the home hero; scroll-linked depth on the mountain photo;
SVG diagrams that draw themselves; everything else only responds to the visitor. `prefers-reduced-motion`
turns all of it off.

## Site map

| Route | Purpose |
| --- | --- |
| `/` | Hero (headshot blended into the blocks), selected work, stack, mountain section |
| `/work` | All nine projects as an index with live diagram preview |
| `/work/[slug]` | One case study per project, then next project |
| `/about` | Story, numbers, experience, education, resume |
| `/contact` | Direct channels, then the form |
| every page | ends with the red contact block (rendered once in `src/app/layout.tsx`) |

## Where things live

- `src/data/profile.ts` — all copy and project data (single source of truth, unchanged facts).
- `src/app/globals.css` — tokens and the few global effects.
- `src/components/` — one file per block.
- `src/assets/` — processed photos (`portrait.png` cut-out, `field.jpg` mountain).
- `scripts/process-photos.py` — how the two photos were produced from the originals.

## Status

- [x] 1. Audit old site, both photos, shift5.io
- [x] 2. `original` branch created from `main` and pushed
- [x] 3. Plan and this log written
- [x] 4. Photos processed
- [x] 5. Design tokens, fonts, layout shell, header, footer, contact block
- [x] 6. Home page
- [x] 7. Work index and case-study pages
- [x] 8. About and contact pages, 404
- [x] 9. Build + lint clean, desktop and mobile checked
- [x] 10. Pushed to `main` (Vercel deploys it automatically)
- [x] 11. Local folder `D:\Portfolio\saad-portfolio` synced with `main`

Rebuild complete on 16 Nov 2026. Anything after this is iteration.

## Decisions worth knowing

- **Portrait:** cut out from its studio backdrop, greyscale, and multiplied onto the page so the block
  colours show through it. It stands across the seam between the snow and ice blocks; below the `lg`
  breakpoint the seam is painted so it always crosses at the collar, never the face.
- **Mountain photo:** cropped to remove the bystanders bottom-left. Its sky fades up into the ice
  block above it. The "Out of office" headline sits between two copies of the photo (the top one is
  masked from the ridge down), so it sinks behind the mountains as the page scrolls.
- **Brackets:** the same corner brackets mark Saad in both photos ("On the clock" / "Off the clock").
- **Each photo is used exactly once.** The old `public/images/headshot.png` was removed.
- **Contact:** `ContactBlock` reads the current route. On a case-study page its copy and placeholder
  name that project, and every submission includes the page it was sent from.
- **Old diagrams kept, restyled:** `ProjectDiagram.tsx` now inherits colour from the block it sits on
  (`currentColor` + `--diagram-bg`).
- **Copy written new for this version** (edit freely in the components): the lifecycle list and run
  log in the hero (`profile.ts`), the mountain caption (`Field.tsx`), the contact page notes
  (`src/app/contact/page.tsx`), the contact block lead (`ContactBlock.tsx`).

## Notes for whoever continues

- This repo is on Next.js 16. Read `node_modules/next/dist/docs/` before using an API from memory
  (`params` is a Promise, `next/image` uses `preload` not `priority`).
- Commands: `npm run dev` (port 3001), `npm run build`, `npm run lint`.
- The contact form posts to Web3Forms with the key in `profile.ts` (same as the old site).
