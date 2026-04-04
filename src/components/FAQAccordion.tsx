'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { sectionBackgrounds } from '@/data/sectionBackgrounds';
import { siteContent } from '@/data/siteContent';
import { trackEvent } from '@/lib/tracking';
import { SectionBackdrop } from './SectionBackdrop';
import { SectionHeading } from './SectionHeading';

export function FAQAccordion({ compact = false }: { compact?: boolean }) {
  const faqs = compact ? siteContent.faqs.slice(0, 2) : siteContent.faqs;
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <SectionBackdrop image={sectionBackgrounds.faq} opacity="opacity-[0.06]" />
      <div className="container relative z-10">
        <SectionHeading eyebrow="FAQ" title="Common questions from Toronto property owners" />
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const expanded = open === idx;
            return (
              <div key={faq.question} className="rounded-2xl border border-slate-200 bg-white">
                <button
                  className="flex w-full items-center justify-between px-5 py-4 text-left"
                  aria-expanded={expanded}
                  onClick={() => {
                    setOpen(expanded ? null : idx);
                    trackEvent('faq_interaction', { question: faq.question });
                  }}
                >
                  <span className="font-semibold">{faq.question}</span>
                  <ChevronDown className={`h-4 w-4 transition ${expanded ? 'rotate-180' : ''}`} />
                </button>
                {expanded ? <p className="px-5 pb-4 text-slate-600">{faq.answer}</p> : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
