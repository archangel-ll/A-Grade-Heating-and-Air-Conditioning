export type ServiceItem = {
  slug: string;
  title: string;
  shortDescription: string;
  intro: string;
  symptoms: string[];
  helpWith: string[];
  whyChoose: string[];
  faq: { question: string; answer: string }[];
};

export type SiteContent = {
  businessName: string;
  legalName: string;
  phone: string;
  displayPhone: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  primaryServiceAreas: string[];
  heroCopy: {
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
  };
  services: ServiceItem[];
  testimonials: { title: string; body: string }[];
  reviewThemes: string[];
  faqs: { question: string; answer: string }[];
  ctaLabels: { call: string; book: string; quote: string };
  bookingUrl: string;
  socialLinks: { name: string; href: string }[];
  schemaData: {
    sameAs?: string[];
    priceRange?: string;
  };
  trustBadges: string[];
  disclaimerFlags: {
    claimsEditablePlaceholder: boolean;
    webhookPlaceholder: boolean;
    calendlyPlaceholder: boolean;
  };
};

export const siteContent: SiteContent = {
  businessName: 'A Grade Heating and Air Conditioning',
  legalName: 'A Grade Heating and Air Conditioning',
  phone: '+14375221885',
  displayPhone: '(437) 522-1885',
  address: '99 Broadway Ave',
  city: 'Toronto',
  province: 'ON',
  postalCode: 'M4P 0E3',
  primaryServiceAreas: ['Toronto', 'Midtown Toronto', 'North York', 'East York', 'Scarborough', 'Etobicoke'],
  heroCopy: {
    headline: 'Toronto HVAC repairs, installs, and quotes without the runaround.',
    subheadline:
      'Get clear communication, competitive pricing, and responsive service for furnaces, AC, heat pumps, and duct work across Toronto.',
    primaryCta: 'Book Free Estimate',
    secondaryCta: 'Call Now',
  },
  services: [
    {
      slug: 'furnace-repair',
      title: 'Furnace Repair',
      shortDescription: 'Diagnose heating issues quickly and restore comfort safely.',
      intro: 'If your furnace is blowing cold air, cycling too often, or not starting, get a clear diagnosis and practical next step.',
      symptoms: ['Cold air from vents', 'Frequent cycling', 'Unusual furnace noises', 'Higher winter utility bills'],
      helpWith: ['System diagnostics and repair', 'Furnace replacement planning', 'Thermostat checks and airflow issues'],
      whyChoose: ['Professional communication', 'Competitive quotes', 'Responsive scheduling in Toronto'],
      faq: [
        { question: 'Should I repair or replace my furnace?', answer: 'A technician can compare repair costs, age, and efficiency so you can choose confidently.' }
      ]
    },
    {
      slug: 'ac-repair-installation',
      title: 'AC Repair & Installation',
      shortDescription: 'Restore cooling performance and plan smooth AC replacements.',
      intro: 'From warm airflow to noisy units, get straightforward help with AC repairs or replacement options.',
      symptoms: ['Warm air from AC', 'Weak airflow', 'Frequent breaker trips', 'High humidity indoors'],
      helpWith: ['Air conditioner troubleshooting', 'Replacement estimates', 'Cooling performance optimization'],
      whyChoose: ['Clear explanations', 'On-time visits', 'Competitive installation quotes'],
      faq: [{ question: 'Can you help size a new AC unit?', answer: 'Yes. Load and home layout factors are reviewed before giving install recommendations.' }]
    },
    {
      slug: 'heat-pump-services',
      title: 'Heat Pump Services',
      shortDescription: 'Service, diagnostics, and replacement guidance for heat pump systems.',
      intro: 'If your heat pump struggles in shoulder seasons or loses efficiency, get a practical service plan.',
      symptoms: ['Inconsistent temperatures', 'Reduced efficiency', 'Short cycling', 'Ice buildup concerns'],
      helpWith: ['Heat pump servicing', 'System performance checks', 'Replacement consultations'],
      whyChoose: ['Transparent communication', 'Detail-focused diagnostics', 'Toronto climate-aware recommendations'],
      faq: [{ question: 'Do heat pumps work in Toronto?', answer: 'Properly selected and maintained systems can perform well; setup and expectations matter.' }]
    },
    {
      slug: 'duct-ventilation-work',
      title: 'Duct & Ventilation Work',
      shortDescription: 'Address airflow imbalances, vent issues, and comfort inconsistencies.',
      intro: 'Uneven temperatures and noisy airflow often point to duct or ventilation bottlenecks that can be corrected.',
      symptoms: ['Hot and cold spots', 'Whistling vents', 'Dusty airflow', 'Weak airflow in some rooms'],
      helpWith: ['Duct troubleshooting', 'Ventilation improvements', 'Airflow balancing recommendations'],
      whyChoose: ['Thoughtful inspection process', 'Actionable options', 'Respectful in-home service'],
      faq: [{ question: 'Can duct issues raise energy bills?', answer: 'Yes. Leakage and airflow restrictions can increase system run time and waste energy.' }]
    },
    {
      slug: 'seasonal-maintenance',
      title: 'Seasonal Maintenance',
      shortDescription: 'Preventive tune-ups to reduce surprise breakdowns and maintain comfort.',
      intro: 'Seasonal checks help catch wear early and keep your furnace and AC operating more efficiently.',
      symptoms: ['Aging equipment concerns', 'Frequent small issues', 'Rising utility costs', 'Reduced comfort over time'],
      helpWith: ['Pre-season inspections', 'Performance checks', 'Maintenance recommendations'],
      whyChoose: ['Proactive communication', 'Reliable visit windows', 'Practical maintenance guidance'],
      faq: [{ question: 'When should I book seasonal service?', answer: 'Spring for cooling and fall for heating is typically the most practical schedule.' }]
    }
  ],
  testimonials: [
    { title: 'Professional and clear', body: 'Customers describe professional service and straightforward communication from first call to final visit.' },
    { title: 'Fair pricing feedback', body: 'Review themes consistently mention competitive quotes and pricing that felt reasonable for the work completed.' },
    { title: 'Responsive scheduling', body: 'Homeowners mention responsive timing, on-time arrival, and willingness to hire A Grade again for future HVAC needs.' }
  ],
  reviewThemes: [
    'Professional service',
    'Clear communication',
    'Competitive pricing and quotes',
    'On-time and responsive',
    'Furnace replacement satisfaction',
    'Would hire again'
  ],
  faqs: [
    { question: 'Do you provide estimates in Toronto?', answer: 'Yes. Use the booking page or call to request an estimate in Toronto and nearby GTA areas.' },
    { question: 'Can I request service online?', answer: 'Yes. Use the Request Quote page and share your issue, urgency, and preferred contact method.' },
    { question: 'Do you work on both homes and smaller commercial spaces?', answer: 'Current positioning indicates residential and light commercial HVAC support in Toronto.' }
  ],
  ctaLabels: { call: 'Call Now', book: 'Book Free Estimate', quote: 'Request Quote' },
  bookingUrl: 'https://calendly.com/replace-with-real-booking-link',
  socialLinks: [],
  schemaData: {
    priceRange: '$$',
    sameAs: []
  },
  trustBadges: ['Toronto Local Service', 'Responsive Scheduling', 'Clear Communication', 'Competitive Quotes'],
  disclaimerFlags: {
    claimsEditablePlaceholder: true,
    webhookPlaceholder: true,
    calendlyPlaceholder: true,
  },
};
