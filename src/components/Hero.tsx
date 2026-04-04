'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { PhoneCall } from 'lucide-react';
import { siteContent } from '@/data/siteContent';
import { sectionBackgrounds } from '@/data/sectionBackgrounds';
import { trackEvent } from '@/lib/tracking';
import { SectionBackdrop } from './SectionBackdrop';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50 pb-16 pt-14 md:pb-24 md:pt-20">
      <SectionBackdrop image={sectionBackgrounds.hero} opacity="opacity-15" />
      <div className="container relative z-10 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">Toronto HVAC Service</p>
          <h1 className="mt-3 text-balance text-4xl font-extrabold tracking-tight text-ink md:text-6xl">{siteContent.heroCopy.headline}</h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-600">{siteContent.heroCopy.subheadline}</p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link href="/book-estimate" className="rounded-full bg-navy px-6 py-3 font-semibold text-white" onClick={() => trackEvent('book_click', { location: 'hero' })}>
              {siteContent.heroCopy.primaryCta}
            </Link>
            <a href={`tel:${siteContent.phone}`} className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 font-semibold text-ink" onClick={() => trackEvent('phone_click', { location: 'hero' })}>
              <PhoneCall className="h-4 w-4" />
              {siteContent.heroCopy.secondaryCta}
            </a>
            <span className="text-sm font-semibold text-slate-700">{siteContent.displayPhone}</span>
          </div>
          <p className="mt-3 text-sm font-medium text-slate-700">{siteContent.heroCopy.microTrustLine}</p>
          <p className="mt-1 text-xs text-slate-500">{siteContent.ctaMicrocopy.fast} • {siteContent.ctaMicrocopy.noObligation}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {siteContent.heroCopy.proofRow.map((item) => (
              <span key={item} className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-premium">
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-premium">
          <img src={siteContent.heroCopy.heroImageUrl} alt="HVAC technician working on home comfort equipment" className="h-72 w-full object-cover md:h-80" />
          <div className="p-5">
            <p className="text-sm font-semibold text-slate-700">{siteContent.heroCopy.imagePanelTitle}</p>
            <p className="mt-2 text-sm text-slate-600">{siteContent.heroCopy.imagePanelCaption}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
