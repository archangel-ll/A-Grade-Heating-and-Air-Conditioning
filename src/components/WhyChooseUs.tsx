import { ShieldCheck, BadgeDollarSign, MessageCircleMore } from 'lucide-react';
import { sectionBackgrounds } from '@/data/sectionBackgrounds';
import { SectionBackdrop } from './SectionBackdrop';
import { SectionHeading } from './SectionHeading';

const reasons = [
  {
    icon: MessageCircleMore,
    title: 'Clear communication start to finish',
    body: 'Review themes suggest homeowners value updates that are easy to understand before, during, and after service.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Competitive quote conversations',
    body: 'Customers frequently mention pricing that felt competitive and quote details that were easier to compare.',
  },
  {
    icon: ShieldCheck,
    title: 'Responsive and professional visits',
    body: 'Public feedback points to on-time responsiveness and positive furnace replacement or installation outcomes.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <SectionBackdrop image={sectionBackgrounds.trust} align="left" opacity="opacity-[0.08]" />
      <div className="container relative z-10">
        <SectionHeading eyebrow="Why homeowners choose A Grade" title="Trust signals grounded in real review themes" />
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
