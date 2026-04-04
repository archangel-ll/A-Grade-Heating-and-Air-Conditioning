import Link from 'next/link';
import { ServiceItem, siteContent } from '@/data/siteContent';

export function ServiceHero({ service }: { service: ServiceItem }) {
  return (
    <section className="gradient-hero py-14 md:py-20">
      <div className="container max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">Toronto HVAC Service</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">{service.title}</h1>
        <p className="mt-4 text-lg text-slate-600">{service.intro}</p>
        <div className="mt-6 flex gap-3">
          <Link href="/book-estimate" className="rounded-full bg-navy px-5 py-3 font-semibold text-white">{siteContent.ctaLabels.book}</Link>
          <Link href="/request-quote" className="rounded-full border border-slate-300 px-5 py-3 font-semibold">{siteContent.ctaLabels.quote}</Link>
        </div>
      </div>
    </section>
  );
}
