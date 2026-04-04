import type { Metadata } from 'next';
import './globals.css';
import { siteContent } from '@/data/siteContent';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { StickyMobileCTA } from '@/components/StickyMobileCTA';
import { getSiteUrl } from '@/lib/config';

const baseUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${siteContent.businessName} | Toronto HVAC Services`,
    template: `%s | ${siteContent.businessName}`,
  },
  description: 'Toronto HVAC repairs, installation quotes, and estimate booking for furnace, AC, heat pump, and duct work.',
  openGraph: {
    title: `${siteContent.businessName} | Toronto HVAC Services`,
    description: 'Book estimates and request HVAC quotes in Toronto.',
    url: baseUrl,
    siteName: siteContent.businessName,
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteContent.businessName} | Toronto HVAC`,
    description: 'Book estimates and request HVAC quotes in Toronto.',
  },
  alternates: { canonical: '/' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'HVACBusiness',
    name: siteContent.businessName,
    url: baseUrl,
    telephone: siteContent.displayPhone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteContent.address,
      addressLocality: siteContent.city,
      addressRegion: siteContent.province,
      postalCode: siteContent.postalCode,
      addressCountry: 'CA',
    },
    areaServed: siteContent.primaryServiceAreas,
    priceRange: siteContent.schemaData.priceRange,
    sameAs: siteContent.schemaData.sameAs,
  };

  return (
    <html lang="en">
      <body>
        <a href="#main" className="sr-only focus:not-sr-only">Skip to content</a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <StickyMobileCTA />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      </body>
    </html>
  );
}
