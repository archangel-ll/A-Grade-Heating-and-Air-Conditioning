import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { siteContent } from '@/data/siteContent';
import { SectionHeading } from './SectionHeading';

export function ServicesGrid() {
  return (
    <section className="py-16 md:py-24" id="services">
      <div className="container">
        <SectionHeading eyebrow="Services" title="HVAC services for Toronto homes and light commercial spaces" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {siteContent.services.map((service) => (
            <article key={service.slug} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-premium transition hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-ink">{service.title}</h3>
              <p className="mt-2 text-slate-600">{service.shortDescription}</p>
              <Link className="mt-4 inline-flex items-center gap-2 font-semibold text-accent" href={`/services/${service.slug}`}>
                Explore service <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
