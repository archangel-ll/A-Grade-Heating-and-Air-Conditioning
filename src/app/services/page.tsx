import type { Metadata } from 'next';
import { ServicesGrid } from '@/components/ServicesGrid';

export const metadata: Metadata = {
  title: 'HVAC Services',
  description: 'Explore furnace, AC, heat pump, duct, and maintenance HVAC services in Toronto.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return <ServicesGrid />;
}
