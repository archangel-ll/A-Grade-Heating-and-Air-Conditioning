# Implementation Handoff (Dev)

## What was improved in this iteration
- Rewrote hero copy for stronger HVAC intent (furnace/AC/heat pump problem framing)
- Added a symptom-first homepage section near top for homeowner search-intent matching
- Tightened trust positioning and review-theme proof language
- Refined service card and service-page copy with symptom-led, local Toronto language
- Improved request-quote helper copy to reduce friction and encourage quick submissions
- Preserved App Router structure and Vercel-friendly deployment assumptions

## Visual coordination
- Section background photo URLs are centralized in `src/data/sectionBackgrounds.ts` for coordinated, conversion-style section treatments.
- `src/components/SectionBackdrop.tsx` applies best-practice readability overlays, side anchoring, and controlled opacity so photos support conversion instead of reducing contrast.

## Editable copy source of truth
All key business and conversion copy remains centrally editable in:
- `src/data/siteContent.ts`

Includes:
- hero copy + proof row
- symptom highlight section content
- service page intros, symptoms, help bullets, FAQ snippets
- trust/testimonial review-theme cards
- CTAs, service areas, schema fields, disclaimer flags

## Key components and routes touched
- Homepage: `src/app/page.tsx`
- Hero: `src/components/Hero.tsx`
- Symptom section: `src/components/SymptomSection.tsx`
- Trust section: `src/components/WhyChooseUs.tsx`
- Testimonials proof cards: `src/components/Testimonials.tsx`
- Services grid copy: `src/components/ServicesGrid.tsx`
- Service hero: `src/components/ServiceHero.tsx`
- Service detail template: `src/app/services/[slug]/page.tsx`
- Quote page helper copy: `src/app/request-quote/page.tsx`

## Vercel deployment assumptions (unchanged)
- Framework: Next.js
- Root Directory: `.`
- Output Directory: default/empty
- Production branch: `main`

## Runtime verification note
This environment has restricted npm registry access, so runtime install/build cannot be executed here. Treat validation as structural/static audit unless build is run in CI/local with npm access.
