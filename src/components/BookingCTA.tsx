import Link from 'next/link';
import { sectionBackgrounds } from '@/data/sectionBackgrounds';
import { siteContent } from '@/data/siteContent';
import { SectionHeading } from './SectionHeading';

export function BookingCTA() {
  return (
    <section
      className="bg-cover bg-center py-16 md:py-24"
      id="contact"
      style={{ backgroundImage: `linear-gradient(rgba(11,37,69,0.82), rgba(11,37,69,0.82)), url(${sectionBackgrounds.booking})` }}
    >
      <div className="container rounded-3xl bg-navy/90 p-8 text-white md:p-12">
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
