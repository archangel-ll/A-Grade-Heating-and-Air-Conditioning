import { BookingCTA } from '@/components/BookingCTA';
import { CTAInlineBlock } from '@/components/CTAInlineBlock';
import { FAQAccordion } from '@/components/FAQAccordion';
import { Hero } from '@/components/Hero';
import { HowItWorks } from '@/components/HowItWorks';
import { ServicesGrid } from '@/components/ServicesGrid';
import { SymptomSection } from '@/components/SymptomSection';
import { Testimonials } from '@/components/Testimonials';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { SectionHeading } from '@/components/SectionHeading';
import { siteContent } from '@/data/siteContent';

export default function Home() {
  return (
    <>
      <Hero />
      <SymptomSection />
      <ServicesGrid />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <section className="py-16">
        <div className="container">
          <SectionHeading eyebrow="Service Area" title="Serving Toronto and nearby GTA neighbourhoods" description={siteContent.primaryServiceAreas.join(' • ')} />
          <CTAInlineBlock />
        </div>
      </section>
      <FAQAccordion />
      <BookingCTA />
    </>
  );
}
