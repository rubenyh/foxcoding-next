# Product Catalog

A small product catalog built with Next.js (App Router, JavaScript), Tailwind CSS, and Supabase.

## Routes

- `/` home page
- `/products` product list (Server Component, reads from Supabase)
- `/products/[id]` product detail with a client-side favorite button
- `/about` information page

## Installation

```bash
npm install
```

## Supabase setup

1. Create a project at [supabase.com](https://supabase.com) (or use an existing one).
2. Open **SQL Editor** in the dashboard, paste the contents of `supabase/setup.sql`, and click **Run**.
   This creates `public.products`, enables Row Level Security with public read-only access,
   and adds eight sample products. Running it again does not delete or duplicate data.

## Environment variables

Copy the example file and fill in your values:

```bash
cp .env.example .env.local
```

| Variable | Where to find it |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Project Settings → Data API → Project URL |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | Project Settings → API Keys → publishable key (`sb_publishable_...`) |

Older projects without a publishable key can set `NEXT_PUBLIC_SUPABASE_ANON_KEY` (the legacy anon key) instead.
Never use a secret or `service_role` key in this app. `.env.local` is ignored by Git.

## Development commands

```bash
npm run dev     # start the dev server at http://localhost:3000
npm run lint    # run ESLint
npm run build   # production build (does not need a database connection)
npm run start   # serve the production build
```

Restart the dev server after changing `.env.local`.
