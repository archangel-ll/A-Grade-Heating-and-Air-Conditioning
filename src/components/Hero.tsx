'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { PhoneCall, ThermometerSnowflake, Fan, Waves } from 'lucide-react';
import { siteContent } from '@/data/siteContent';
import { trackEvent } from '@/lib/tracking';

const visualHints = [
  { icon: ThermometerSnowflake, label: 'Furnace repair clarity' },
  { icon: Fan, label: 'AC performance fixes' },
  { icon: Waves, label: 'Heat pump + airflow support' },
];

export function Hero() {
  return (
    <section className="gradient-hero pb-16 pt-14 md:pb-24 md:pt-20">
      <div className="container grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
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
          <div className="mt-6 flex flex-wrap gap-2">
            {siteContent.heroCopy.proofRow.map((item) => (
              <span key={item} className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-premium">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-premium">
          <p className="text-sm font-semibold text-slate-500">Service focus</p>
          <div className="mt-4 space-y-3">
            {visualHints.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3">
                <Icon className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium text-slate-700">{label}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-500">HVAC-themed placeholder visual panel (replace with branded photo/media if available).</p>
        </div>
      </div>
    </section>
  );
}
