'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { PhoneCall } from 'lucide-react';
import { siteContent } from '@/data/siteContent';
import { trackEvent } from '@/lib/tracking';
import { ReviewBadgeCluster } from './ReviewBadgeCluster';

export function Hero() {
  return (
    <section className="gradient-hero pb-16 pt-14 md:pb-24 md:pt-20">
      <div className="container">
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
        </motion.div>
        <ReviewBadgeCluster className="mt-10" />
      </div>
    </section>
  );
}
