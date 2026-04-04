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
    proofRow: string[];
  };
  symptomHighlights: { title: string; detail: string }[];
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
    headline: 'Furnace, AC, and heat pump help in Toronto — clear answers before you commit.',
    subheadline:
      'If your home is cold, warm, noisy, or uneven, A Grade helps you diagnose the issue, compare options, and book service without pressure-heavy sales talk.',
    primaryCta: 'Book Free Estimate',
    secondaryCta: 'Call Now',
    proofRow: ['Clear communication', 'Competitive quotes', 'Responsive scheduling'],
  },
  symptomHighlights: [
    {
      title: 'Furnace not heating properly',
      detail: 'Cold airflow, rooms that never warm up, or frequent cycling during Toronto winter nights.',
    },
    {
      title: 'AC blowing warm air',
      detail: 'Weak cooling, muggy rooms, or longer run times during summer heat waves.',
    },
    {
      title: 'Weak airflow or vent issues',
      detail: 'Uneven temperatures, noisy vents, and comfort gaps between floors or rooms.',
    },
    {
      title: 'Heat pump performance concerns',
      detail: 'Inconsistent heating/cooling and efficiency drops in shoulder seasons.',
    },
    {
      title: 'Replacement or estimate questions',
      detail: 'Not sure whether to repair or replace? Get practical pricing and scope guidance first.',
    },
  ],
  services: [
    {
      slug: 'furnace-repair',
      title: 'Furnace Repair',
      shortDescription: 'Fix furnace heating problems quickly with practical repair-vs-replace guidance.',
      intro:
        'When your furnace stops heating properly in Toronto, you need a clear diagnosis, realistic timeline, and honest repair options — not vague guesswork.',
      symptoms: ['Furnace blowing cool air', 'Frequent on/off cycling', 'Unusual rattling or banging sounds', 'Some rooms stay cold'],
      helpWith: ['Heating diagnostics and targeted repair', 'Furnace replacement estimate planning', 'Airflow and thermostat troubleshooting'],
      whyChoose: ['Clear scope before work starts', 'Competitive quote conversations', 'Responsive scheduling for heating issues'],
      faq: [
        {
          question: 'How do I decide between furnace repair and replacement?',
          answer: 'A Grade can compare age, symptom severity, and projected repair costs so you can choose the most practical next step.',
        },
      ],
    },
    {
      slug: 'ac-repair-installation',
      title: 'AC Repair & Installation',
      shortDescription: 'Solve warm-air and poor cooling issues, or plan an AC install with clearer quote expectations.',
      intro:
        'If your AC is running but not cooling, Toronto summer comfort drops fast. Get straightforward troubleshooting and realistic installation guidance.',
      symptoms: ['Warm air from supply vents', 'High indoor humidity', 'Short cycling or long runtimes', 'Noisy outdoor unit'],
      helpWith: ['Cooling performance diagnostics', 'AC replacement estimate options', 'System sizing and airflow checks'],
      whyChoose: ['Clear communication on options', 'On-time appointment follow-through', 'Competitive AC quote discussions'],
      faq: [
        {
          question: 'Can you help with both AC repair and full replacement estimates?',
          answer: 'Yes. The service process supports both targeted repairs and complete replacement planning, depending on system condition.',
        },
      ],
    },
    {
      slug: 'heat-pump-services',
      title: 'Heat Pump Services',
      shortDescription: 'Improve heat pump comfort and efficiency with practical service and replacement guidance.',
      intro:
        'Heat pumps can perform well in Toronto when setup and maintenance are handled correctly. Get practical support for comfort and efficiency concerns.',
      symptoms: ['Inconsistent room temperatures', 'Frequent defrost concerns', 'Efficiency decline over time', 'Short cycling'],
      helpWith: ['Heat pump diagnostics and service', 'Performance and airflow checks', 'Replacement and upgrade estimates'],
      whyChoose: ['Clear explanations of what to fix first', 'Detail-focused system checks', 'Recommendations aligned to Toronto climate realities'],
      faq: [
        {
          question: 'Do heat pumps need seasonal servicing?',
          answer: 'Seasonal checks can help maintain output and catch wear early, especially when systems run through both heating and cooling seasons.',
        },
      ],
    },
    {
      slug: 'duct-ventilation-work',
      title: 'Duct & Ventilation Work',
      shortDescription: 'Address airflow imbalance, noisy vents, and comfort inconsistencies across the home.',
      intro:
        'Uneven temperatures often come from duct or ventilation issues, not just equipment. Get airflow-focused recommendations you can actually act on.',
      symptoms: ['Hot and cold zones by room', 'Whistling or noisy vent airflow', 'Weak airflow on upper floors', 'Dust buildup from vents'],
      helpWith: ['Airflow diagnostics', 'Ventilation performance improvements', 'Duct-focused comfort recommendations'],
      whyChoose: ['Inspection-first approach', 'Practical scope and quote clarity', 'Respectful in-home communication'],
      faq: [
        {
          question: 'Can duct issues make my furnace or AC work harder?',
          answer: 'Yes. Restricted or leaking duct runs can reduce delivered comfort and increase total run time.',
        },
      ],
    },
    {
      slug: 'seasonal-maintenance',
      title: 'Seasonal Maintenance',
      shortDescription: 'Pre-season HVAC tune-ups that help reduce surprise breakdowns and comfort disruptions.',
      intro:
        'Preventive maintenance helps Toronto homeowners reduce seasonal surprises and keep furnace and AC performance more consistent.',
      symptoms: ['Rising utility bills', 'Frequent minor HVAC issues', 'Reduced airflow or noisy operation', 'Uneven comfort as weather shifts'],
      helpWith: ['Heating and cooling pre-season checkups', 'Performance trend review', 'Maintenance recommendations and next-step planning'],
      whyChoose: ['Proactive communication', 'Reliable timing around seasonal peaks', 'Straightforward maintenance priorities'],
      faq: [
        {
          question: 'When should seasonal HVAC maintenance be scheduled?',
          answer: 'Spring for cooling systems and fall for heating systems is a practical schedule for most Toronto homes.',
        },
      ],
    },
  ],
  testimonials: [
    {
      title: 'What customers seem to value most: communication',
      body: 'Review themes repeatedly point to clear updates, straightforward explanations, and better expectation setting during service visits.',
    },
    {
      title: 'What customers seem to value most: quote clarity',
      body: 'Feedback often highlights competitive quotes and pricing conversations that felt easier to understand before approving work.',
    },
    {
      title: 'What customers seem to value most: reliability',
      body: 'Customers mention responsive scheduling, on-time arrival patterns, and positive furnace installation experiences.',
    },
  ],
  reviewThemes: [
    'Professional service',
    'Clear communication',
    'Competitive pricing and quotes',
    'On-time and responsive',
    'Furnace replacement satisfaction',
    'Would hire again',
  ],
  faqs: [
    {
      question: 'Do you provide HVAC estimates in Toronto and Midtown?',
      answer: 'Yes. You can call or book online to request estimate support across Toronto and nearby neighbourhoods.',
    },
    {
      question: 'Can I request a quote without a long form?',
      answer: 'Yes. Share a short summary, urgency, and preferred contact method. The team can follow up with next steps.',
    },
    {
      question: 'Do you support residential and light commercial HVAC service?',
      answer: 'Current public positioning indicates residential and light commercial HVAC support in Toronto.',
    },
  ],
  ctaLabels: { call: 'Call Now', book: 'Book Free Estimate', quote: 'Request Quote' },
  bookingUrl: 'https://calendly.com/replace-with-real-booking-link',
  socialLinks: [],
  schemaData: {
    priceRange: '$$',
    sameAs: [],
  },
  trustBadges: ['Toronto Local Service', 'Responsive Scheduling', 'Clear Communication', 'Competitive Quotes'],
  disclaimerFlags: {
    claimsEditablePlaceholder: true,
    webhookPlaceholder: true,
    calendlyPlaceholder: true,
  },
};
