export type TrackingEvent =
  | 'phone_click'
  | 'book_click'
  | 'quote_submit'
  | 'calendly_open'
  | 'faq_interaction';

export function trackEvent(event: TrackingEvent, metadata?: Record<string, string>) {
  if (process.env.NODE_ENV !== 'production') {
    console.info('[tracking]', event, metadata ?? {});
  }
}
