import type { MetadataRoute } from 'next';
import { siteContent } from '@/data/siteContent';
import { getSiteUrl } from '@/lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const core = ['/', '/services', '/book-estimate', '/request-quote', '/thank-you'];
  return [
    ...core.map((path) => ({ url: `${base}${path}`, lastModified: new Date() })),
    ...siteContent.services.map((s) => ({ url: `${base}/services/${s.slug}`, lastModified: new Date() })),
  ];
}
