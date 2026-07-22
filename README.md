# CCPAC Website

Official website for the **Chittagong College Physics & Astronomy Club**, rebuilt with
Next.js 15, React 19, TypeScript, and Tailwind CSS.

## Tech stack

- Next.js 15 (App Router)
- React 19 + TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)

No database, no CMS, no backend — all content lives in plain TypeScript files under `/data`.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Go to https://vercel.com/new and import the repository.
3. Vercel auto-detects Next.js — click **Deploy**. No environment variables are required.

## Folder structure

```
app/                  Pages (App Router) — one folder per route
  about/               /about
  founders/            /founders
  committee/           /committee
  activities/          /activities
  events/              /events and /events/[slug]
  contact/             /contact
  layout.tsx           Shared layout (navbar, footer, fonts, SEO)
  page.tsx             Homepage
  sitemap.ts           Auto-generated sitemap.xml
  robots.ts            Auto-generated robots.txt
components/
  layout/              Navbar, Footer
  sections/            Page sections (Hero, Stats, MessageDesk, etc.)
  cards/                Reusable cards (PersonCard, SessionCard, etc.)
  ui/                   Small building blocks (Container, Eyebrow, OrbitField)
data/                  ALL editable content — see CONTENT_GUIDE.md
lib/                   Small helper functions
public/images/         Put any image files you want to use here
```

## How to update content

**You do not need to touch any component or page file to update content.**
Everything lives in `/data`. Open the relevant file, copy an existing entry, edit
the text, save. See **CONTENT_GUIDE.md** for a non-technical, step-by-step version
of this guide.

| To update...              | Edit this file            |
|----------------------------|---------------------------|
| Site name, tagline, nav    | `data/site.ts`             |
| Principal/Moderator quotes | `data/messages.ts`         |
| Founders                   | `data/founders.ts`         |
| Executive Committee        | `data/committee.ts`        |
| Sessions, Weekly Challenge, Articles, Podcast | `data/activities.ts` |
| Events / camps              | `data/events.ts`           |

After editing a file, save it — `npm run dev` will hot-reload automatically. On
Vercel, just commit and push; Vercel rebuilds and redeploys automatically.

### Adding a new page section on the homepage

Homepage sections are composed in `app/page.tsx`. Each section is a small component
in `components/sections/`. To reorder sections, reorder the lines in `app/page.tsx`.

### Contact form

The form in `components/sections/ContactForm.tsx` currently only simulates sending.
To make it actually send email, sign up for a free **EmailJS** (https://www.emailjs.com)
or **Resend** (https://resend.com) account and replace the `handleSubmit` function —
both have a 5-minute setup guide on their websites.

## Notes

- Member photos aren't wired up yet (the original site's images are temporary,
  expiring Google-signed URLs). Cards currently show initials. To add real photos,
  drop image files into `public/images/` and update `components/cards/PersonCard.tsx`.
- All content was preserved from the original site: https://sites.google.com/view/ccpacbd/home
