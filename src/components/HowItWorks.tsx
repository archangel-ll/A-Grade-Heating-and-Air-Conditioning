import { SectionHeading } from './SectionHeading';

const steps = [
  { title: '1) Request', body: 'Call, request a quote, or book a free estimate online.' },
  { title: '2) Confirm', body: 'Confirm your service needs and preferred contact method.' },
  { title: '3) Visit / Estimate', body: 'Get a clear assessment, options, and next-step recommendations.' },
];

export function HowItWorks() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <SectionHeading eyebrow="How it works" title="Simple process. Fast answers." />
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title} className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-slate-600">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
