import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { SectionHeading } from '@/components/SectionHeading';
import { siteContent } from '@/data/siteContent';

export const metadata: Metadata = {
  title: 'Request Quote',
  description: 'Request an HVAC quote in Toronto with details about your project.',
  alternates: { canonical: '/request-quote' },
};

export default function RequestQuotePage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <SectionHeading eyebrow="Request Quote" title={siteContent.quotePageCopy.title} description={siteContent.quotePageCopy.description} />
        <ContactForm />
      </div>
    </section>
  );
}
