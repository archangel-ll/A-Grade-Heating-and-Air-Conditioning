import Link from 'next/link';
import { siteContent } from '@/data/siteContent';

export function CTAInlineBlock() {
  return (
    <div className="rounded-2xl bg-navy p-6 text-white shadow-premium md:p-8">
      <h3 className="text-2xl font-semibold">Need help with your HVAC system in Toronto?</h3>
      <p className="mt-2 text-slate-200">Call for a fast response or book an estimate online in under a minute.</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link className="rounded-full bg-white px-5 py-3 font-semibold text-navy" href="/book-estimate">
          {siteContent.ctaLabels.book}
        </Link>
        <a className="rounded-full border border-white px-5 py-3 font-semibold" href={`tel:${siteContent.phone}`}>
          {siteContent.ctaLabels.call}
        </a>
      </div>
    </div>
  );
}
