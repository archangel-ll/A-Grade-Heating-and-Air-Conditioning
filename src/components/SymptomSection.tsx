import Link from 'next/link';
import { AlertCircle } from 'lucide-react';
import { sectionBackgrounds } from '@/data/sectionBackgrounds';
import { siteContent } from '@/data/siteContent';
import { SectionHeading } from './SectionHeading';
import { SectionBackdrop } from './SectionBackdrop';

export function SymptomSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20">
      <SectionBackdrop image={sectionBackgrounds.symptoms} align="left" opacity="opacity-[0.08]" />
      <div className="container relative z-10">
        <SectionHeading
          eyebrow="Symptom-first support"
          title="Common HVAC problems we help solve across Toronto"
          description="If any of these sound familiar, you can call now or request a quick estimate with your symptom summary."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {siteContent.symptomHighlights.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-premium">
              <AlertCircle className="h-5 w-5 text-accent" />
              <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{item.detail}</p>
            </article>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/request-quote" className="rounded-full bg-navy px-5 py-3 font-semibold text-white">Request Quote</Link>
          <Link href="/book-estimate" className="rounded-full border border-slate-300 px-5 py-3 font-semibold">Book Free Estimate</Link>
        </div>
        <p className="mt-2 text-xs text-slate-500">{siteContent.ctaMicrocopy.fast} • {siteContent.ctaMicrocopy.noObligation}</p>
      </div>
    </section>
  );
}
