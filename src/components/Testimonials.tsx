import { sectionBackgrounds } from '@/data/sectionBackgrounds';
import { siteContent } from '@/data/siteContent';
import { SectionBackdrop } from './SectionBackdrop';
import { SectionHeading } from './SectionHeading';

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-sky py-16 md:py-24">
      <SectionBackdrop image={sectionBackgrounds.testimonials} align="left" opacity="opacity-[0.08]" />
      <div className="container relative z-10">
        <SectionHeading eyebrow="What customers seem to value most" title="Review-theme proof, summarized" description="Paraphrased feedback themes from publicly available reviews." />
        <div className="grid gap-5 md:grid-cols-3">
          {siteContent.testimonials.map((item) => (
            <article key={item.title} className="rounded-2xl bg-white p-6 shadow-premium">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-slate-600">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
