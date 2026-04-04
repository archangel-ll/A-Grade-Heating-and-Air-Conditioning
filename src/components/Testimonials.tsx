import { sectionBackgrounds } from '@/data/sectionBackgrounds';
import { siteContent } from '@/data/siteContent';
import { SectionBackdrop } from './SectionBackdrop';
import { SectionHeading } from './SectionHeading';

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-sky py-16 md:py-24">
      <SectionBackdrop image={sectionBackgrounds.testimonials} align="left" opacity="opacity-[0.08]" />
      <div className="container relative z-10">
        <SectionHeading
          eyebrow="What homeowners say"
          title="Short sentiment examples for outreach demos"
          description="These are clearly labeled demo placeholder sentiment cards based on public review themes."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {siteContent.homeownerSay.map((item) => (
            <article key={item.sentence} className="rounded-2xl bg-white p-5 shadow-premium">
              <p className="text-sm font-semibold uppercase text-accent">{item.label}</p>
              <p className="mt-2 text-base font-medium text-ink">{item.sentence}</p>
              <p className="mt-2 text-sm text-slate-600">Outcome: {item.outcome}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
