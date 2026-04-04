import Link from 'next/link';
import { sectionBackgrounds } from '@/data/sectionBackgrounds';
import { siteContent } from '@/data/siteContent';
import { SectionBackdrop } from './SectionBackdrop';
import { SectionHeading } from './SectionHeading';

export function BookingCTA() {
  return (
    <section className="relative overflow-hidden bg-navy py-16 md:py-24" id="contact">
      <SectionBackdrop image={sectionBackgrounds.booking} opacity="opacity-20" />
      <div className="container relative z-10 rounded-3xl bg-navy/85 p-8 text-white md:p-12">
        <SectionHeading
          eyebrow="Book or call"
          title="Ready for a clear HVAC estimate in Toronto?"
          description="Pick the channel that works for you right now."
          titleClassName="text-white"
          descriptionClassName="text-slate-200"
        />
        <div className="flex flex-wrap gap-3">
          <Link href="/book-estimate" className="rounded-full bg-white px-6 py-3 font-semibold text-navy">
            {siteContent.ctaLabels.book}
          </Link>
          <Link href="/request-quote" className="rounded-full border border-white px-6 py-3 font-semibold text-white">
            {siteContent.ctaLabels.quote}
          </Link>
          <a href={`tel:${siteContent.phone}`} className="rounded-full border border-white px-6 py-3 font-semibold text-white">
            {siteContent.ctaLabels.call}
          </a>
        </div>
      </div>
    </section>
  );
}
