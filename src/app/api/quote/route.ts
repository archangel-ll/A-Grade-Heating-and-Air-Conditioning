import { NextResponse } from 'next/server';
import { z } from 'zod';

const quoteSchema = z.object({
  fullName: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email(),
  serviceNeeded: z.string().min(2),
  urgency: z.string().min(1),
  postalCode: z.string().min(3),
  preferredContactMethod: z.string().min(1),
  projectDetails: z.string().min(15),
});

export async function POST(req: Request) {
  const json = await req.json();
  const parsed = quoteSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json({ success: false, errors: parsed.error.flatten() }, { status: 400 });
  }

  const webhookUrl = process.env.QUOTE_WEBHOOK_URL;
  if (webhookUrl) {
    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(parsed.data),
      cache: 'no-store',
    });

    if (!webhookResponse.ok) {
      return NextResponse.json({ success: false, message: 'Webhook failed' }, { status: 502 });
    }
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
