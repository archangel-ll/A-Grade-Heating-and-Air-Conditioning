import Link from 'next/link';
import { siteContent } from '@/data/siteContent';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10 pb-24 md:pb-10">
      <div className="container grid gap-6 md:grid-cols-2">
        <div>
          <p className="text-lg font-bold text-navy">{siteContent.businessName}</p>
          <p className="mt-2 text-sm text-slate-600">{siteContent.address}, {siteContent.city}, {siteContent.province} {siteContent.postalCode}</p>
          <a href={`tel:${siteContent.phone}`} className="mt-2 block text-sm font-semibold text-accent">{siteContent.displayPhone}</a>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <Link href="/book-estimate">Book Estimate</Link>
          <Link href="/request-quote">Request Quote</Link>
          <Link href="/services/furnace-repair">Furnace Repair</Link>
          <Link href="/services/ac-repair-installation">AC Repair & Installation</Link>
          <Link href="/services/heat-pump-services">Heat Pump Services</Link>
          <Link href="/services/duct-ventilation-work">Duct & Ventilation Work</Link>
        </div>
      </div>
    </footer>
  );
}
