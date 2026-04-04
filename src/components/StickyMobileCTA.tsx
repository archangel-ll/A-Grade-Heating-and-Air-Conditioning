'use client';

import Link from 'next/link';
import { PhoneCall, CalendarCheck2, FileText } from 'lucide-react';
import { siteContent } from '@/data/siteContent';
import { trackEvent } from '@/lib/tracking';

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white p-2 md:hidden">
      <div className="grid grid-cols-3 gap-2 text-xs">
        <a href={`tel:${siteContent.phone}`} onClick={() => trackEvent('phone_click', { location: 'sticky_mobile' })} className="flex flex-col items-center rounded-xl bg-navy px-2 py-2 font-semibold text-white"><PhoneCall className="h-4 w-4" />Call</a>
        <Link href="/book-estimate" onClick={() => trackEvent('book_click', { location: 'sticky_mobile' })} className="flex flex-col items-center rounded-xl border px-2 py-2 font-semibold"><CalendarCheck2 className="h-4 w-4" />Book</Link>
        <Link href="/request-quote" className="flex flex-col items-center rounded-xl border px-2 py-2 font-semibold"><FileText className="h-4 w-4" />Quote</Link>
      </div>
    </div>
  );
}
