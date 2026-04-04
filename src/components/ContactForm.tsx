'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { trackEvent } from '@/lib/tracking';

const schema = z.object({
  fullName: z.string().min(2, 'Please enter your full name.'),
  phone: z.string().min(10, 'Please enter a valid phone number.'),
  email: z.string().email('Please enter a valid email.'),
  serviceNeeded: z.string().min(2, 'Select a service type.'),
  urgency: z.string().min(1, 'Select urgency.'),
  postalCode: z.string().min(3, 'Enter postal code.'),
  preferredContactMethod: z.string().min(1, 'Select contact preference.'),
  projectDetails: z.string().min(15, 'Please include a few details about your HVAC issue.'),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    setServerError(null);
    const res = await fetch('/api/quote', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(values) });
    if (!res.ok) {
      setServerError('We could not submit your request right now. Please call instead.');
      return;
    }
    trackEvent('quote_submit', { serviceNeeded: values.serviceNeeded });
    setIsSuccess(true);
  };

  if (isSuccess) {
    return <p className="rounded-xl bg-green-50 p-4 text-green-800">Request sent. We will follow up shortly.</p>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-premium">
      <div className="grid gap-4 md:grid-cols-2">
        {[
          ['fullName', 'Full Name'],
          ['phone', 'Phone'],
          ['email', 'Email'],
          ['postalCode', 'Postal Code'],
        ].map(([name, label]) => (
          <label key={name} className="text-sm font-medium">
            {label}
            <input className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" {...register(name as keyof FormValues)} />
            <span className="text-xs text-red-600">{errors[name as keyof FormValues]?.message as string}</span>
          </label>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-medium">Service Needed
          <select className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" {...register('serviceNeeded')}>
            <option value="">Select service</option>
            <option>Furnace Repair</option><option>AC Repair & Installation</option><option>Heat Pump Services</option><option>Duct & Ventilation Work</option><option>Seasonal Maintenance</option>
          </select>
          <span className="text-xs text-red-600">{errors.serviceNeeded?.message}</span>
        </label>
        <label className="text-sm font-medium">Urgency
          <select className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" {...register('urgency')}>
            <option value="">Select urgency</option><option>As soon as possible</option><option>This week</option><option>Flexible</option>
          </select>
          <span className="text-xs text-red-600">{errors.urgency?.message}</span>
        </label>
      </div>
      <label className="block text-sm font-medium">Preferred Contact Method
        <select className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" {...register('preferredContactMethod')}>
          <option value="">Select contact method</option><option>Phone</option><option>Email</option><option>Text</option>
        </select>
        <span className="text-xs text-red-600">{errors.preferredContactMethod?.message}</span>
      </label>
      <label className="block text-sm font-medium">Project Details
        <textarea rows={5} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" {...register('projectDetails')} />
        <span className="text-xs text-red-600">{errors.projectDetails?.message}</span>
      </label>
      {serverError ? <p className="text-sm text-red-700">{serverError}</p> : null}
      <button disabled={isSubmitting} className="rounded-full bg-navy px-6 py-3 font-semibold text-white disabled:opacity-60">{isSubmitting ? 'Sending...' : 'Submit Quote Request'}</button>
      <p className="text-xs text-slate-500">Webhook integration placeholder: Formspree, Resend, Make, or n8n can be connected in /api/quote.</p>
    </form>
  );
}
