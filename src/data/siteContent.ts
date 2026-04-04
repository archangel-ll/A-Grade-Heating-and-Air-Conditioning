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
    microTrustLine: string;
    primaryCta: string;
    secondaryCta: string;
    proofRow: string[];
    imagePanelTitle: string;
    imagePanelCaption: string;
    heroImageUrl: string;
  };
  ctaMicrocopy: { fast: string; noObligation: string };
  symptomHighlights: { title: string; detail: string }[];
  chooseReasons: { title: string; body: string }[];
  homeownerSay: { sentence: string; outcome: string; label: string }[];
  quotePageCopy: { title: string; description: string };
  services: ServiceItem[];
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
    testimonialsAreDemoPlaceholders: boolean;
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
    headline: 'Furnace or AC acting up in Toronto? Get clear next steps before you commit.',
    subheadline:
      'When heating or cooling breaks down, talk to someone quickly, understand your options, and choose repair or replacement with less stress.',
    microTrustLine: 'No pressure. Clear answers. Competitive quotes.',
    primaryCta: 'Book Free Estimate',
    secondaryCta: 'Call Now',
    proofRow: ['Clear communication', 'Competitive quotes', 'Responsive scheduling'],
    imagePanelTitle: 'In-home HVAC service focus',
    imagePanelCaption: 'Technician-on-site visual placeholder. Replace with your branded field photo when available.',
    heroImageUrl: 'https://images.pexels.com/photos/8486972/pexels-photo-8486972.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1200&w=2000',
  },
  ctaMicrocopy: {
    fast: 'Takes less than 30 seconds',
    noObligation: 'No obligation',
  },
  symptomHighlights: [
    { title: 'Furnace not heating properly', detail: 'Cold airflow, frequent cycling, or rooms that never warm up in winter.' },
    { title: 'AC blowing warm air', detail: 'Poor cooling, muggy rooms, or long run times during hot days.' },
    { title: 'Weak airflow or vent issues', detail: 'Hot and cold spots, noisy vents, and uneven room comfort.' },
    { title: 'Heat pump performance concerns', detail: 'Inconsistent output and seasonal performance drops.' },
    { title: 'Repair or replace uncertainty', detail: 'Get clear repair vs replace guidance and quote breakdowns first.' },
  ],
  chooseReasons: [
    { title: 'Clear quote breakdowns', body: 'Review themes suggest customers appreciate straightforward scope and pricing conversations before work starts.' },
    { title: 'No pressure decisions', body: 'Customers can compare options first and decide on practical next steps without hard-sell tactics.' },
    { title: 'Responsive scheduling', body: 'Public feedback highlights on-time follow-up and dependable visit windows for HVAC issues.' },
  ],
  homeownerSay: [
    { sentence: 'Explained everything clearly before starting. No surprises.', outcome: 'Confidence before approving work', label: 'Demo placeholder sentiment card' },
    { sentence: 'Quote was competitive and easy to compare with other options.', outcome: 'Clear pricing decision path', label: 'Demo placeholder sentiment card' },
    { sentence: 'They arrived when expected and fixed the heating issue quickly.', outcome: 'Comfort restored faster', label: 'Demo placeholder sentiment card' },
    { sentence: 'Furnace replacement process felt organized and well communicated.', outcome: 'Smoother installation experience', label: 'Demo placeholder sentiment card' },
  ],
  quotePageCopy: {
    title: 'Quick estimate request - callback or email, your choice',
    description: 'Just describe the issue in 1-2 lines. We will follow up with options, not pressure.',
  },
  services: [
    {
      slug: 'furnace-repair',
      title: 'Furnace Repair',
      shortDescription: 'Fix heating issues fast with clear repair vs replace guidance.',
      intro: 'If your furnace is not heating properly, get a direct diagnosis and practical repair path for your Toronto property.',
      symptoms: ['Furnace blowing cool air', 'Frequent on/off cycling', 'Unusual rattling or banging sounds', 'Some rooms stay cold'],
      helpWith: ['Heating diagnostics and targeted repair', 'Furnace replacement estimate planning', 'Airflow and thermostat troubleshooting'],
      whyChoose: ['Clear scope before work starts', 'Competitive quote conversations', 'Responsive scheduling for heating issues'],
      faq: [{ question: 'How do I decide between furnace repair and replacement?', answer: 'A Grade can compare age, symptom severity, and projected repair costs so you can choose the most practical next step.' }],
    },
    {
      slug: 'ac-repair-installation',
      title: 'AC Repair & Installation',
      shortDescription: 'Restore cooling quickly and plan replacement with clearer quote expectations.',
      intro: 'If your AC is running but not cooling, get practical troubleshooting and installation guidance for Toronto summer conditions.',
      symptoms: ['Warm air from supply vents', 'High indoor humidity', 'Short cycling or long runtimes', 'Noisy outdoor unit'],
      helpWith: ['Cooling performance diagnostics', 'AC replacement estimate options', 'System sizing and airflow checks'],
      whyChoose: ['Clear communication on options', 'On-time appointment follow-through', 'Competitive AC quote discussions'],
      faq: [{ question: 'Can you help with both AC repair and full replacement estimates?', answer: 'Yes. The service process supports both targeted repairs and complete replacement planning, depending on system condition.' }],
    },
    {
      slug: 'heat-pump-services',
      title: 'Heat Pump Services',
      shortDescription: 'Improve heat pump comfort and efficiency with practical service planning.',
      intro: 'Get actionable service guidance if your heat pump performance feels inconsistent across Toronto seasons.',
      symptoms: ['Inconsistent room temperatures', 'Frequent defrost concerns', 'Efficiency decline over time', 'Short cycling'],
      helpWith: ['Heat pump diagnostics and service', 'Performance and airflow checks', 'Replacement and upgrade estimates'],
      whyChoose: ['Clear explanations of what to fix first', 'Detail-focused system checks', 'Recommendations aligned to Toronto climate realities'],
      faq: [{ question: 'Do heat pumps need seasonal servicing?', answer: 'Seasonal checks can help maintain output and catch wear early, especially when systems run through both heating and cooling seasons.' }],
    },
    {
      slug: 'duct-ventilation-work',
      title: 'Duct & Ventilation Work',
      shortDescription: 'Solve airflow imbalances and improve room-to-room comfort consistency.',
      intro: 'When temperatures vary by room, duct and ventilation diagnostics can reveal practical fixes beyond equipment replacement.',
      symptoms: ['Hot and cold zones by room', 'Whistling or noisy vent airflow', 'Weak airflow on upper floors', 'Dust buildup from vents'],
      helpWith: ['Airflow diagnostics', 'Ventilation performance improvements', 'Duct-focused comfort recommendations'],
      whyChoose: ['Inspection-first approach', 'Practical scope and quote clarity', 'Respectful in-home communication'],
      faq: [{ question: 'Can duct issues make my furnace or AC work harder?', answer: 'Yes. Restricted or leaking duct runs can reduce delivered comfort and increase total run time.' }],
    },
    {
      slug: 'seasonal-maintenance',
      title: 'Seasonal Maintenance',
      shortDescription: 'Reduce surprise breakdowns with practical pre-season HVAC maintenance.',
      intro: 'Seasonal maintenance helps Toronto homeowners reduce avoidable breakdown risk and keep heating and cooling performance steady.',
      symptoms: ['Rising utility bills', 'Frequent minor HVAC issues', 'Reduced airflow or noisy operation', 'Uneven comfort as weather shifts'],
      helpWith: ['Heating and cooling pre-season checkups', 'Performance trend review', 'Maintenance recommendations and next-step planning'],
      whyChoose: ['Proactive communication', 'Reliable timing around seasonal peaks', 'Straightforward maintenance priorities'],
      faq: [{ question: 'When should seasonal HVAC maintenance be scheduled?', answer: 'Spring for cooling systems and fall for heating systems is a practical schedule for most Toronto homes.' }],
    },
  ],
  faqs: [
    { question: 'Do you provide HVAC estimates in Toronto and Midtown?', answer: 'Yes. You can call or book online to request estimate support across Toronto and nearby neighbourhoods.' },
    { question: 'Can I request a quote without a long form?', answer: 'Yes. Share a short summary, urgency, and preferred contact method. The team can follow up with next steps.' },
    { question: 'Do you support residential and light commercial HVAC service?', answer: 'Current public positioning indicates residential and light commercial HVAC support in Toronto.' },
  ],
  ctaLabels: { call: 'Call Now', book: 'Book Free Estimate', quote: 'Request Quote' },
  bookingUrl: 'https://calendly.com/replace-with-real-booking-link',
  socialLinks: [],
  schemaData: { priceRange: '$$', sameAs: [] },
  trustBadges: ['Toronto Local Service', 'Responsive Scheduling', 'Clear Communication', 'Competitive Quotes'],
  disclaimerFlags: {
    claimsEditablePlaceholder: true,
    webhookPlaceholder: true,
    calendlyPlaceholder: true,
    testimonialsAreDemoPlaceholders: true,
  },
};
