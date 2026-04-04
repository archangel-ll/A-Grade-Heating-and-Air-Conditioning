import { sectionBackgrounds } from '@/data/sectionBackgrounds';
import { siteContent } from '@/data/siteContent';
import { SectionBackdrop } from './SectionBackdrop';
import { SectionHeading } from './SectionHeading';

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <SectionBackdrop image={sectionBackgrounds.trust} align="left" opacity="opacity-[0.08]" />
      <div className="container relative z-10">
        <SectionHeading eyebrow="Why homeowners choose A Grade" title="Clear quote breakdowns, no-pressure decisions, and responsive scheduling" />
        <div className="grid gap-5 md:grid-cols-3">
          {siteContent.chooseReasons.map((reason) => (
            <div key={reason.title} className="rounded-2xl bg-white p-6 shadow-premium">
              <h3 className="text-xl font-semibold">{reason.title}</h3>
              <p className="mt-2 text-slate-600">{reason.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
