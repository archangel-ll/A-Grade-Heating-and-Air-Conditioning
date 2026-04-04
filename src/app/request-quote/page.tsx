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
        <SectionHeading
          eyebrow="Request Quote"
          title="Quick estimate request — callback or email, your choice"
          description="Prefer a callback or email? Share your issue in one or two lines and we can follow up with practical next steps."
        />
        <ContactForm />
      </div>
    </section>
  );
}
