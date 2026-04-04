# A Grade Heating and Air Conditioning - HVAC Conversion Demo

Premium, conversion-focused Next.js demo site for a Toronto HVAC business.

## Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- React Hook Form + Zod
- Vercel-ready configuration

## Quick Start
```bash
npm install
npm run dev
```
Open `http://localhost:3000`.

## Build
```bash
npm run build
npm run start
```

## Environment variables
Copy `.env.example` to `.env.local` if needed.

- `NEXT_PUBLIC_SITE_URL` (optional, defaults to `https://example.com`)
- `QUOTE_WEBHOOK_URL` (optional, enables server-side quote forwarding)

## Editable business content
All primary copy and business fields are centralized in:
- `src/data/siteContent.ts`

## Booking URL swap
Update `bookingUrl` in `src/data/siteContent.ts`.

## Quote form integration
`src/app/api/quote/route.ts` has Zod validation and optional webhook forwarding.
- Formspree
- Resend
- Make webhook
- n8n webhook

## Deployment (Vercel)
- Framework Preset: **Next.js**
- Root Directory: **.**
- Output Directory: **(leave empty/default)**
- Production Branch: **main**

No custom output path or subdirectory setup is required.


## Conversion upgrades in this version
- Hero rewritten for furnace/AC/heat pump intent and lower-friction messaging.
- Symptom-first support section added near top of homepage.
- Service pages tightened with symptom-aware, Toronto-local copy.
- Quote page helper copy updated to reduce form friction.

- Coordinated section background photo placeholders: `src/data/sectionBackgrounds.ts`.
