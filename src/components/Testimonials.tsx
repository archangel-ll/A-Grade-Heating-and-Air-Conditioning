import { siteContent } from '@/data/siteContent';
import { SectionHeading } from './SectionHeading';

export function Testimonials() {
  return (
    <section className="bg-sky py-16 md:py-24">
      <div className="container">
        <SectionHeading eyebrow="Review themes" title="What customers repeatedly mention" description="Paraphrased sentiment themes from publicly available feedback." />
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
