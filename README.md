# Boussaidi Badii — Portfolio

Personal portfolio built with Next.js (App Router), Tailwind CSS v4 and Motion.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Editing content

- **Projects** — `src/data/projects.ts`. Each entry has a name, description, category, tags, live URL, repo URL and a
  screenshot in `public/projects/`. Set `featured: true` to make a card span two columns.
- **Profile, stats, stack, contact info** — `src/data/profile.ts`.
- **CV** — replace `public/Curriculum_Vitae_Boussaidi_Badii.pdf`.

## Structure

```
src/app/          layout, page, global styles (design tokens in globals.css @theme)
src/components/   Background, Nav, Hero, Skills (+ Marquee), Projects, About, Contact (+ Footer), ui helpers
src/data/         projects.ts, profile.ts
public/           profile photo, CV, project screenshots, favicon
```
