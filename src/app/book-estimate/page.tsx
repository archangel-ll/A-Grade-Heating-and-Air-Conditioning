import type { Metadata } from 'next';
import { CalendlyEmbedPlaceholder } from '@/components/CalendlyEmbedPlaceholder';
import { SectionHeading } from '@/components/SectionHeading';

export const metadata: Metadata = {
  title: 'Book Free Estimate',
  description: 'Book a Toronto HVAC estimate for furnace, AC, heat pump, and ventilation work.',
  alternates: { canonical: '/book-estimate' },
};

export default function BookEstimatePage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <SectionHeading eyebrow="Book" title="Book a free HVAC estimate" description="Fast online booking placeholder. Swap in your live Calendly URL." />
        <CalendlyEmbedPlaceholder />
      </div>
    </section>
  );
}
