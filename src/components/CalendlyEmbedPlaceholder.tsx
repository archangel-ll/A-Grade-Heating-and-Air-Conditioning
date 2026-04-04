'use client';

import { siteContent } from '@/data/siteContent';
import { trackEvent } from '@/lib/tracking';

export function CalendlyEmbedPlaceholder() {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-center shadow-premium">
      <h2 className="text-2xl font-semibold">Booking Widget Placeholder</h2>
      <p className="mx-auto mt-3 max-w-2xl text-slate-600">
        Replace this block with a Calendly inline embed using <code>siteContent.bookingUrl</code>.
      </p>
      <a
        href={siteContent.bookingUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex rounded-full bg-navy px-6 py-3 font-semibold text-white"
        onClick={() => trackEvent('calendly_open', { location: 'booking_page' })}
      >
        Open Booking Link
      </a>
    </div>
  );
}
