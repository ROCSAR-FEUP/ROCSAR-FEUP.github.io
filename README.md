# ROCSAR Website

Official website for **ROCSAR** — a compact 5.8 GHz Synthetic Aperture Radar payload flown aboard BEXUS as part of the ESA [REXUS/BEXUS](https://rexusbexus.net) programme.

Built with [Astro](https://astro.build) and deployed to GitHub Pages at [rocsar-feup.github.io/site](https://rocsar-feup.github.io/site/).

> **Note:** the repo is currently named `site` (base `/site`). Once it is renamed to `ROCSAR-FEUP.github.io`, change `base` in `astro.config.mjs` to `/` (or remove it) and update `public/robots.txt`.

## Project structure

```text
/
├── public/
│   ├── images/        # team photos, logo, hardware photos, placeholder
│   ├── sponsors/      # sponsor & partner logos
│   ├── favicon.svg / favicon.ico
│   └── robots.txt
├── src/
│   ├── data.ts        # all site content (team, timeline, sponsors, results)
│   ├── layouts/
│   │   └── Layout.astro   # shared shell, nav, footer, global CSS, SEO
│   └── pages/
│       ├── index.astro    # project overview
│       ├── team.astro
│       ├── history.astro
│       ├── results.astro
│       └── 404.astro
└── .github/workflows/deploy.yml
```

## Development

Requires Node.js >= 22.12 and pnpm.

```sh
pnpm install
pnpm dev            # local dev server at localhost:4321
pnpm build          # production build to ./dist
pnpm preview        # preview the production build
```

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Editing content

Almost all copy lives in [`src/data.ts`](src/data.ts):

- `ROCSAR_INFO` — tagline, objectives, campaign timeline, hardware photo captions
- `TEAM_MEMBERS` — name, role, bio, skills, photo filename in `public/images/`
- `SPONSORS` — logo path in `public/sponsors/` and category label
- `HISTORY_PROJECTS`, `PROJECT_RESULTS`

## Adding images

Drop files into `public/` using the exact filenames referenced in `src/data.ts`. Missing team photos fall back to an initials avatar; missing hardware photos hide their section until the files exist.

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds with pnpm and publishes to GitHub Pages (site: `https://ROCSAR-FEUP.github.io`).
