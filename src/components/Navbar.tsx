'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { siteContent } from '@/data/siteContent';
import { cn } from '@/lib/utils';
import { trackEvent } from '@/lib/tracking';

export function Navbar() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={cn('sticky top-0 z-50 transition-all', solid ? 'bg-white/95 shadow-sm backdrop-blur' : 'bg-transparent')}>
      <nav className="container flex h-16 items-center justify-between" aria-label="Main Navigation">
        <Link href="/" className="text-lg font-bold text-navy">A Grade HVAC</Link>
        <div className="hidden items-center gap-6 md:flex">
          <Link href="/services">Services</Link>
          <Link href="/book-estimate">Book</Link>
          <Link href="/request-quote">Quote</Link>
          <a href={`tel:${siteContent.phone}`} onClick={() => trackEvent('phone_click', { location: 'navbar' })} className="rounded-full bg-navy px-4 py-2 text-sm font-semibold text-white">
            {siteContent.displayPhone}
          </a>
        </div>
      </nav>
    </header>
  );
}
