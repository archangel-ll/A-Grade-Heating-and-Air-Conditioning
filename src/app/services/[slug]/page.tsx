import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CTAInlineBlock } from '@/components/CTAInlineBlock';
import { SectionHeading } from '@/components/SectionHeading';
import { ServiceHero } from '@/components/ServiceHero';
import { siteContent } from '@/data/siteContent';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return siteContent.services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = siteContent.services.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} in Toronto`,
    description: service.shortDescription,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = siteContent.services.find((item) => item.slug === slug);
  if (!service) notFound();

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
  };

  return (
    <>
      <ServiceHero service={service} />
      <section className="py-12 md:py-16">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading title="Common symptoms homeowners mention" description="Use these symptoms to quickly explain what you're seeing when you request service." />
            <ul className="space-y-2 text-slate-700">{service.symptoms.map((item) => <li key={item}>• {item}</li>)}</ul>
          </div>
          <div>
            <SectionHeading title="What A Grade can help with" description="Practical next steps tailored to your equipment condition and comfort goals." />
            <ul className="space-y-2 text-slate-700">{service.helpWith.map((item) => <li key={item}>• {item}</li>)}</ul>
          </div>
        </div>
      </section>
      <section className="bg-slate-50 py-12 md:py-16">
        <div className="container">
          <SectionHeading title="Why Toronto customers choose this service" description="Review themes consistently point to clear communication, responsive timing, and quote clarity." />
          <ul className="space-y-2 text-slate-700">{service.whyChoose.map((item) => <li key={item}>• {item}</li>)}</ul>
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-semibold">Service FAQ</h3>
            {service.faq.map((item) => (
              <div key={item.question} className="mt-4">
                <p className="font-semibold">{item.question}</p>
                <p className="text-slate-600">{item.answer}</p>
              </div>
            ))}
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/book-estimate" className="rounded-full bg-navy px-5 py-3 font-semibold text-white">Book Free Estimate</Link>
              <Link href="/request-quote" className="rounded-full border border-slate-300 px-5 py-3 font-semibold">Request a Quick Quote</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16"><div className="container"><CTAInlineBlock /></div></section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
