import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { SectionHeading } from '@/components/SectionHeading';

export const metadata: Metadata = {
  title: 'Request Quote',
  description: 'Request an HVAC quote in Toronto with details about your project.',
  alternates: { canonical: '/request-quote' },
};

export default function RequestQuotePage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <SectionHeading eyebrow="Request Quote" title="Tell us what you need" description="Share your HVAC issue and preferred callback method." />
        <ContactForm />
      </div>
    </section>
  );
}
