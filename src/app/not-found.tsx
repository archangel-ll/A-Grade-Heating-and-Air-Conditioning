import Link from 'next/link';
import { siteContent } from '@/data/siteContent';

export default function NotFound() {
  return (
    <section className="py-20">
      <div className="container max-w-2xl text-center">
        <h1 className="text-4xl font-bold">Page not found</h1>
        <p className="mt-3 text-slate-600">The page may have moved. You can still book an estimate or call now.</p>
        <div className="mt-6 flex justify-center gap-3">
          <Link href="/book-estimate" className="rounded-full bg-navy px-5 py-3 font-semibold text-white">Book Free Estimate</Link>
          <a href={`tel:${siteContent.phone}`} className="rounded-full border border-slate-300 px-5 py-3 font-semibold">Call Now</a>
        </div>
      </div>
    </section>
  );
}
