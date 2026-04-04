import { ShieldCheck, BadgeDollarSign, MessageCircleMore } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const reasons = [
  { icon: MessageCircleMore, title: 'Clear communication', body: 'Know what is happening, why it matters, and your next options before work starts.' },
  { icon: BadgeDollarSign, title: 'Competitive pricing', body: 'Get practical recommendations and transparent quote conversations without pressure.' },
  { icon: ShieldCheck, title: 'Reliable professionalism', body: 'Review themes highlight responsive scheduling, on-time service, and quality furnace install outcomes.' },
];

export function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="container">
        <SectionHeading eyebrow="Why homeowners choose A Grade" title="Built on trust, not sales pressure" />
        <div className="grid gap-5 md:grid-cols-3">
          {reasons.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-2xl bg-white p-6 shadow-premium">
              <Icon className="h-6 w-6 text-accent" />
              <h3 className="mt-3 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-slate-600">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
