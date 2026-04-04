# Implementation Handoff

## Architecture
- App Router routes under `src/app`
- Reusable conversion components under `src/components`
- Typed editable content in `src/data/siteContent.ts`
- Tracking placeholders in `src/lib/tracking.ts`

## Route map
- `/` Homepage
- `/services`
- `/book-estimate`
- `/request-quote`
- `/services/[slug]` (5 service pages)
- `/thank-you`
- custom `not-found`

## Conversion implementation
- Primary hierarchy: Call → Book → Quote
- Sticky mobile CTA bar with all three actions
- CTA placements: hero, inline mid-page, and bottom booking section
- Service pages contain problem patterns, help scope, and CTA blocks

## SEO implementation
- Global metadata + per-route metadata
- LocalBusiness/HVACBusiness JSON-LD in layout
- FAQPage JSON-LD on service pages
- robots and sitemap routes
- canonical links per page

## Environment variables
- `NEXT_PUBLIC_SITE_URL` (optional)
- `QUOTE_WEBHOOK_URL` (optional)

## Suggested production next steps
1. Replace booking URL with real Calendly link.
2. Connect `QUOTE_WEBHOOK_URL` to a production automation endpoint.
3. Add real brand assets and Open Graph image.
4. Wire production analytics providers.
