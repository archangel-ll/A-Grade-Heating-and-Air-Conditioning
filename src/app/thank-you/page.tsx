import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <section className="py-20">
      <div className="container max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-premium">
        <h1 className="text-3xl font-bold">Thanks — your request is in.</h1>
        <p className="mt-3 text-slate-600">We received your details and will follow up shortly.</p>
        <Link href="/" className="mt-6 inline-flex rounded-full bg-navy px-6 py-3 font-semibold text-white">Back to homepage</Link>
      </div>
    </section>
  );
}
