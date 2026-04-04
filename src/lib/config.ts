const fallbackSiteUrl = 'https://example.com';

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || fallbackSiteUrl;
}
