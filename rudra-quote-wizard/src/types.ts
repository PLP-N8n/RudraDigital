export interface QuoteData {
  // Step 1: About You
  businessName: string;
  businessType: string;
  location: string;
  contactName: string;
  phone: string;
  email: string;

  // Step 2: What You Need
  siteType: 'starter' | 'professional' | 'growth' | '';
  pages: string[];
  features: string[];

  // Step 3: Design Preferences
  designStyle: 'modern' | 'classic' | 'bold' | 'minimal' | '';
  colourPreference: string;
  inspirationUrl: string;
  hasLogo: 'yes' | 'no' | '';

  // Step 4: Content
  contentReady: 'yes' | 'some' | 'no' | '';
  needsCopywriting: boolean;
  needsPhotography: boolean;

  // Step 5: Domain & Hosting
  hasDomain: 'yes' | 'no' | '';
  domainName: string;
  needsHosting: boolean;

  // Step 6: SEO & Extras
  needsSeo: boolean;
  needsGoogleBusiness: boolean;
  socialLinks: boolean;
  needsMaintenance: boolean;

  // Step 7: Timeline
  timeline: 'asap' | '2-4weeks' | 'flexible' | '';
  additionalNotes: string;
}

export const defaultQuoteData: QuoteData = {
  businessName: '',
  businessType: '',
  location: '',
  contactName: '',
  phone: '',
  email: '',
  siteType: '',
  pages: [],
  features: [],
  designStyle: '',
  colourPreference: '',
  inspirationUrl: '',
  hasLogo: '',
  contentReady: '',
  needsCopywriting: false,
  needsPhotography: false,
  hasDomain: '',
  domainName: '',
  needsHosting: false,
  needsSeo: false,
  needsGoogleBusiness: false,
  socialLinks: false,
  needsMaintenance: false,
  timeline: '',
  additionalNotes: '',
};

export const STEPS = [
  'About You',
  'What You Need',
  'Design',
  'Content',
  'Domain & Hosting',
  'Extras',
  'Timeline',
  'Your Quote',
] as const;

export const BUSINESS_TYPES = [
  'Hair / Beauty Salon',
  'Barber',
  'Plumber / Heating Engineer',
  'Electrician',
  'Builder / Tradesperson',
  'Cleaning Company',
  'Restaurant / Café',
  'Takeaway / Delivery',
  'Gym / Personal Trainer',
  'Accountant / Financial',
  'Legal / Solicitor',
  'Property / Estate Agent',
  'Other',
];

export const PAGE_OPTIONS = [
  'Home',
  'About Us',
  'Services',
  'Pricing',
  'Gallery / Portfolio',
  'Testimonials / Reviews',
  'Contact',
  'Blog',
  'Booking / Appointments',
  'FAQ',
];

export const FEATURE_OPTIONS = [
  'Contact form',
  'Click-to-call button',
  'WhatsApp button',
  'Google Maps embed',
  'Image gallery',
  'Testimonials / reviews',
  'Online booking integration',
  'Social media links',
  'Newsletter signup',
  'Live chat widget',
];

// Pricing
export const PRICING = {
  starter: { label: 'Starter', setup: 299, description: 'Up to 3 pages, mobile-friendly, contact form' },
  professional: { label: 'Professional', setup: 599, description: 'Up to 6 pages, SEO basics, Google Maps, gallery' },
  growth: { label: 'Growth', setup: 999, description: 'Up to 10 pages, full SEO, booking integration, ongoing support' },
} as const;

export const ADDONS = {
  copywriting: { label: 'Professional Copywriting', price: 99, type: 'one-off' as const },
  photography: { label: 'Stock Photo Package', price: 49, type: 'one-off' as const },
  domain: { label: 'Domain Registration (1 year)', price: 15, type: 'one-off' as const },
  hosting: { label: 'Hosting & SSL (monthly)', price: 12, type: 'monthly' as const },
  seo: { label: 'Monthly SEO Package', price: 79, type: 'monthly' as const },
  maintenance: { label: 'Maintenance & Updates', price: 39, type: 'monthly' as const },
  googleBusiness: { label: 'Google Business Setup', price: 49, type: 'one-off' as const },
};

export const EARLY_BIRD_SLOTS = 5;
export const EARLY_BIRD_DISCOUNT = 0.2; // 20%
export const VAT_RATE = 0.2;
