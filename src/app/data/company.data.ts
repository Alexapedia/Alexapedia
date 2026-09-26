/**
 * ALEXAPEDIA — Mock site data
 * Edit this file to update content. No backend required.
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

export type ProjectType =
  | 'mobile'
  | 'web'
  | 'saas'
  | 'erp'
  | 'dashboard'
  | 'website';

export interface ProjectResult {
  label: string;
  value: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  type: ProjectType;
  /** Short card blurb */
  description: string;
  /** Longer story for the detail panel */
  story: string;
  /** UX / product highlights */
  uxHighlights: string[];
  features: string[];
  results: ProjectResult[];
  tech: string[];
  platforms: string[];
  accent: string;
  preview: 'dashboard' | 'mobile' | 'erp' | 'saas' | 'website' | 'analytics';
  image: string;
  year: string;
  status: 'Live' | 'In production' | 'Case study';
  client: string;
  /** Optional store / demo links — leave empty string to hide */
  appStoreUrl: string;
  playStoreUrl: string;
  demoUrl: string;
}

export const PROJECT_FILTERS: { id: 'all' | ProjectType; label: string }[] = [
  { id: 'all', label: 'All products' },
  { id: 'mobile', label: 'Mobile Apps' },
  { id: 'web', label: 'Web Apps' },
  { id: 'website', label: 'Websites' },
  { id: 'saas', label: 'SaaS' },
  { id: 'erp', label: 'ERP' },
  { id: 'dashboard', label: 'Dashboards' },
];

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface WhyItem {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: number;
}

export interface ContactInfo {
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  city: string;
  country: string;
  workingHours: string;
  mapEmbedUrl: string;
  socials: { name: string; url: string; icon: string }[];
}

export const COMPANY = {
  name: 'Alexapedia',
  legalName: 'ALEXAPEDIA EG',
  tagline: 'Engineering Digital Excellence',
  shortDescription:
    'We craft software, SaaS platforms, ERP systems, and dashboards that move businesses forward.',
  heroHeadline: 'Your product. Built like a flagship.',
  heroSub:
    'Mobile apps, websites, SaaS, ERP systems, and dashboards — designed to look premium, feel effortless, and scale with your business.',
  ctaPrimary: 'Book a free consultation',
  ctaSecondary: 'See our products',
  trustLine: 'Trusted by startups & enterprises across Egypt & the GCC',
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#work' },
  { label: 'Why us', href: '#why' },
  { label: 'Clients', href: '#clients' },
  { label: 'Contact', href: '#contact' },
];

export const STATS: StatItem[] = [
  { value: 120, suffix: '+', label: 'Products delivered' },
  { value: 45, suffix: '+', label: 'Happy clients' },
  { value: 8, suffix: '+', label: 'Years shipping software' },
  { value: 98, suffix: '%', label: 'Would hire us again' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'apps',
    title: 'Mobile & Web Apps',
    description:
      'iOS, Android, and web apps with buttery UX — from first sketch to App Store & Google Play.',
    icon: 'apps',
    tags: ['iOS', 'Android', 'PWA', 'Flutter', 'Angular'],
  },
  {
    id: 'saas',
    title: 'SaaS Platforms',
    description:
      'Multi-tenant products with billing, roles, white-label, and cloud architecture that scales.',
    icon: 'saas',
    tags: ['Subscriptions', 'Cloud', 'API', 'Auth'],
  },
  {
    id: 'erp',
    title: 'ERP Systems',
    description:
      'Inventory, HR, finance, sales, and operations — one system tailored to how your business actually works.',
    icon: 'erp',
    tags: ['Inventory', 'Finance', 'HR', 'Sales'],
  },
  {
    id: 'dashboard',
    title: 'Dashboards & Analytics',
    description:
      'Real-time dashboards that turn raw data into decisions your team can act on in seconds.',
    icon: 'dashboard',
    tags: ['BI', 'Realtime', 'KPI', 'Reports'],
  },
  {
    id: 'custom',
    title: 'Custom Software',
    description:
      'Integrations, automation, and bespoke systems that connect your tools and kill busywork.',
    icon: 'custom',
    tags: ['Integrations', 'APIs', 'Automation'],
  },
  {
    id: 'uiux',
    title: 'UI/UX Design',
    description:
      'Research-driven product design — wireframes, prototypes, and design systems that convert.',
    icon: 'uiux',
    tags: ['Figma', 'Design System', 'Prototypes'],
  },
];

export const WHY_US: WhyItem[] = [
  {
    title: 'Product thinking, not just coding',
    description:
      'We start from your users and business goals — then ship software people actually love to use.',
    icon: 'product',
  },
  {
    title: 'UX so clear it sells itself',
    description:
      'Every screen is designed for clarity: fewer clicks, stronger hierarchy, and flows that feel obvious.',
    icon: 'ux',
  },
  {
    title: 'End-to-end ownership',
    description:
      'Design, build, App Store / Play Store publish, deploy, and support — one team, zero finger-pointing.',
    icon: 'endtoend',
  },
  {
    title: 'Transparent delivery',
    description:
      'Weekly demos, shared roadmap, and clear timelines. You always know what ships next.',
    icon: 'delivery',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Alexapedia didn’t just build our ERP — they redesigned how our teams work. Stock accuracy jumped and managers finally trust the numbers.',
    name: 'Omar Hassan',
    role: 'Operations Director',
    company: 'Retail Group EG',
    rating: 5,
  },
  {
    quote:
      'From wireframes to App Store launch in weeks. The MediLink UX is so clean our patients book without calling support.',
    name: 'Dr. Sara El-Masry',
    role: 'Founder',
    company: 'CarePlus Clinics',
    rating: 5,
  },
  {
    quote:
      'We needed a SaaS that looked premium and billed reliably. Atlas shipped rock-solid — our churn dropped in the first quarter.',
    name: 'Karim Nabil',
    role: 'CEO',
    company: 'Workspace Labs',
    rating: 5,
  },
];

export const TECH_STACK = [
  'Angular',
  'Flutter',
  'React',
  'NestJS',
  'Node.js',
  'PostgreSQL',
  'Firebase',
  'Docker',
  'Coolify',
  'Stripe',
  'AWS',
  'Figma',
];

export const ABOUT = {
  title: 'The software partner that makes you look premium',
  paragraphs: [
    'Alexapedia EG is a product-focused software house. We build mobile apps, websites, SaaS platforms, ERP systems, and dashboards for founders and enterprises who refuse “good enough.”',
    'Our edge is simple: cinematic UI craft + clean architecture + delivery you can trust. When a client opens what we built, they should feel: this is a serious company.',
  ],
  highlights: [
    'Discovery → design → build → launch',
    'App Store & Google Play publishing',
    'Secure, scalable cloud architecture',
    'Post-launch support & iteration',
  ],
};

/** Showcase products — replace images & links with your real apps anytime */
export const PROJECTS: ProjectItem[] = [
  {
    id: 'p1',
    title: 'Nova Commerce ERP',
    category: 'ERP System',
    type: 'erp',
    client: 'Multi-branch retail network',
    description:
      'One ERP for inventory, sales, purchasing, finance, and HR across every branch.',
    story:
      'The client ran 14 branches on spreadsheets and three disconnected tools. We mapped every role’s daily workflow, then built a unified ERP with crystal-clear screens for cashiers, warehouse, and finance — so training took hours, not weeks.',
    uxHighlights: [
      'Role-based home screens (cashier vs warehouse vs CFO)',
      'One-tap stock transfer between branches',
      'Live low-stock alerts before shelves go empty',
      'Reports that export in two clicks',
    ],
    features: ['Multi-branch stock', 'POS & invoicing sync', 'HR & payroll modules', 'Financial reports'],
    results: [
      { label: 'Stock accuracy', value: '+34%' },
      { label: 'Month-end close', value: '−60% time' },
      { label: 'Branches live', value: '14' },
    ],
    tech: ['Angular', 'NestJS', 'PostgreSQL', 'Docker'],
    platforms: ['Web', 'Tablet'],
    accent: 'magenta',
    preview: 'erp',
    image: 'assets/products/product-erp.png',
    year: '2025',
    status: 'Live',
    appStoreUrl: '',
    playStoreUrl: '',
    demoUrl: '#contact',
  },
  {
    id: 'p2',
    title: 'PulseOps Dashboard',
    category: 'Dashboard',
    type: 'dashboard',
    client: 'Logistics & ops team',
    description:
      'Real-time command center with SLA alerts, team KPIs, and live incident tracking.',
    story:
      'Managers were drowning in Slack noise. PulseOps puts every critical signal on one screen — color-coded severity, drill-down charts, and alert rules that ping the right person only when it matters.',
    uxHighlights: [
      'Traffic-light severity at a glance',
      'Click any KPI → instant drill-down',
      'Alert rules with quiet hours',
      'Dark UI built for long night shifts',
    ],
    features: ['Live charts', 'Alert rules', 'Team scorecards', 'Exportable reports'],
    results: [
      { label: 'MTTR', value: '−42%' },
      { label: 'Missed SLAs', value: '−55%' },
      { label: 'Screens watched', value: '1' },
    ],
    tech: ['Angular', 'WebSockets', 'Redis', 'Chart.js'],
    platforms: ['Web'],
    accent: 'gold',
    preview: 'analytics',
    image: 'assets/products/product-dashboard.png',
    year: '2025',
    status: 'Live',
    appStoreUrl: '',
    playStoreUrl: '',
    demoUrl: '#contact',
  },
  {
    id: 'p3',
    title: 'Atlas SaaS Suite',
    category: 'SaaS Platform',
    type: 'saas',
    client: 'B2B SaaS startup',
    description:
      'Multi-tenant SaaS with billing, roles, white-label branding, and a clean admin console.',
    story:
      'The founders had a strong idea but a messy MVP. We rebuilt Atlas as a proper multi-tenant product: onboarding that converts, Stripe billing that just works, and an admin UX their customers can white-label as their own.',
    uxHighlights: [
      '5-minute guided onboarding',
      'Billing portal customers understand',
      'White-label themes without code',
      'Permission matrix that non-tech admins get',
    ],
    features: ['Tenants & roles', 'Stripe billing', 'White-label themes', 'Public API'],
    results: [
      { label: 'Activation', value: '+48%' },
      { label: 'Churn', value: '−22%' },
      { label: 'Time to first value', value: '< 1 day' },
    ],
    tech: ['Angular', 'Stripe', 'Docker', 'PostgreSQL'],
    platforms: ['Web', 'API'],
    accent: 'purple',
    preview: 'saas',
    image: 'assets/products/product-saas.png',
    year: '2024',
    status: 'In production',
    appStoreUrl: '',
    playStoreUrl: '',
    demoUrl: '#contact',
  },
  {
    id: 'p4',
    title: 'MediLink',
    category: 'Mobile App',
    type: 'mobile',
    client: 'Private clinic network',
    description:
      'Patient app for appointments, records, prescriptions, and secure doctor chat — on iOS & Android.',
    story:
      'Patients used to call reception 5 times to book. MediLink makes booking feel as easy as ordering food: pick doctor, pick slot, done. Push reminders cut no-shows, and chat keeps follow-ups inside the app.',
    uxHighlights: [
      'Book a visit in under 60 seconds',
      'Big tap targets for older patients',
      'Arabic & English, RTL-ready',
      'Biometric lock for medical privacy',
    ],
    features: ['Appointments', 'Health records', 'Push reminders', 'Secure messaging'],
    results: [
      { label: 'No-shows', value: '−38%' },
      { label: 'App rating', value: '4.8★' },
      { label: 'Support calls', value: '−45%' },
    ],
    tech: ['Flutter', 'Firebase', 'REST'],
    platforms: ['iOS', 'Android'],
    accent: 'rose',
    preview: 'mobile',
    image: 'assets/products/product-medilink.png',
    year: '2025',
    status: 'Live',
    appStoreUrl: 'https://apps.apple.com/',
    playStoreUrl: 'https://play.google.com/store',
    demoUrl: '#contact',
  },
  {
    id: 'p5',
    title: 'FleetTrack Pro',
    category: 'Web Application',
    type: 'web',
    client: 'Transport company',
    description:
      'Live vehicle map, maintenance schedules, driver logs, and fuel analytics in one web app.',
    story:
      'Dispatchers tracked vans on WhatsApp locations. FleetTrack puts every vehicle on a live map with maintenance due dates and fuel burn — so ops stops guessing and starts deciding.',
    uxHighlights: [
      'Map-first layout for dispatchers',
      'Color-coded vehicle health',
      'One-click driver history',
      'Works great on tablets in the yard',
    ],
    features: ['GPS tracking', 'Maintenance calendar', 'Driver sync', 'Fuel insights'],
    results: [
      { label: 'Fuel waste', value: '−18%' },
      { label: 'Idle time', value: '−25%' },
      { label: 'Vehicles tracked', value: '80+' },
    ],
    tech: ['Angular', 'Maps API', 'Node.js'],
    platforms: ['Web', 'PWA'],
    accent: 'magenta',
    preview: 'dashboard',
    image: 'assets/products/product-fleet.png',
    year: '2024',
    status: 'Case study',
    appStoreUrl: '',
    playStoreUrl: '',
    demoUrl: '#contact',
  },
  {
    id: 'p6',
    title: 'Lumina Brand Site',
    category: 'Corporate Website',
    type: 'website',
    client: 'Growth-stage brand',
    description:
      'High-conversion corporate site with bilingual content, CMS pages, and motion that feels premium.',
    story:
      'Their old site looked like a template. We rebuilt Lumina as a brand experience — hero storytelling, bilingual EN/AR, SEO structure, and lead forms that actually convert demo requests.',
    uxHighlights: [
      'Brand-first first viewport',
      'Clear path: story → proof → CTA',
      'Fast mobile performance',
      'CMS so marketing ships without developers',
    ],
    features: ['CMS pages', 'Bilingual EN/AR', 'SEO ready', 'Lead forms'],
    results: [
      { label: 'Demo requests', value: '+120%' },
      { label: 'Bounce rate', value: '−31%' },
      { label: 'Lighthouse', value: '95+' },
    ],
    tech: ['Angular', 'SSR', 'Coolify'],
    platforms: ['Web', 'Mobile web'],
    accent: 'gold',
    preview: 'website',
    image: 'assets/products/product-website.png',
    year: '2025',
    status: 'Live',
    appStoreUrl: '',
    playStoreUrl: '',
    demoUrl: '#contact',
  },
  {
    id: 'p7',
    title: 'PayFlow Wallet',
    category: 'Mobile App',
    type: 'mobile',
    client: 'Fintech startup',
    description:
      'Digital wallet for transfers, bill pay, QR checkout, and crystal-clear transaction history.',
    story:
      'Fintech users abandon apps that feel confusing with money. PayFlow’s UX is obsessive about trust: big amounts, clear confirmations, biometric lock, and a home screen that answers “what’s my balance?” instantly.',
    uxHighlights: [
      'Balance visible in under 1 second',
      'Confirmations you can’t mis-tap',
      'QR pay flow in 3 steps',
      'Transaction search that actually finds things',
    ],
    features: ['P2P transfers', 'QR payments', 'Bill pay', 'Biometric lock'],
    results: [
      { label: 'Txn success', value: '99.7%' },
      { label: 'Store rating', value: '4.7★' },
      { label: 'Onboarding', value: '< 2 min' },
    ],
    tech: ['Flutter', 'Kotlin', 'Swift'],
    platforms: ['iOS', 'Android'],
    accent: 'purple',
    preview: 'mobile',
    image: 'assets/products/product-wallet.png',
    year: '2024',
    status: 'Case study',
    appStoreUrl: 'https://apps.apple.com/',
    playStoreUrl: 'https://play.google.com/store',
    demoUrl: '#contact',
  },
  {
    id: 'p8',
    title: 'InsightBI Cloud',
    category: 'Dashboard / BI',
    type: 'dashboard',
    client: 'Mid-market enterprise',
    description:
      'Self-serve BI boards connected to ERP & CRM — drag widgets, share, schedule email reports.',
    story:
      'Business teams waited days for analyst exports. InsightBI lets them build boards themselves with guardrails — so finance, sales, and ops stay aligned on the same numbers.',
    uxHighlights: [
      'Drag-and-drop without feeling lost',
      'Shared boards with live sync',
      'Scheduled PDF/email digests',
      'Connectors with clear data lineage',
    ],
    features: ['Widget builder', 'Shared boards', 'Scheduled emails', 'Data connectors'],
    results: [
      { label: 'Report wait', value: 'days → mins' },
      { label: 'Active boards', value: '60+' },
      { label: 'Adoption', value: '3 departments' },
    ],
    tech: ['Angular', 'NestJS', 'ClickHouse'],
    platforms: ['Web'],
    accent: 'rose',
    preview: 'analytics',
    image: 'assets/products/product-bi.png',
    year: '2025',
    status: 'In production',
    appStoreUrl: '',
    playStoreUrl: '',
    demoUrl: '#contact',
  },
];

export const PROCESS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover',
    description: 'We map goals, users, and constraints — then define a clear product roadmap.',
  },
  {
    step: '02',
    title: 'Design',
    description: 'Wireframes and high-fidelity UI that match your brand and convert users.',
  },
  {
    step: '03',
    title: 'Build',
    description: 'Iterative development with clean code, reviews, and continuous demos.',
  },
  {
    step: '04',
    title: 'Launch & Scale',
    description: 'Deploy, publish to stores, monitor, and evolve with support that stays sharp.',
  },
];

/** Update these with your real contact details */
export const CONTACT: ContactInfo = {
  email: 'hello@alexapedia.com',
  phone: '+20 100 000 0000',
  whatsapp: '+201000000000',
  address: 'Alexandria, Egypt',
  city: 'Alexandria',
  country: 'Egypt',
  workingHours: 'Sun – Thu · 10:00 – 18:00',
  mapEmbedUrl: '',
  socials: [
    { name: 'LinkedIn', url: 'https://linkedin.com/company/alexapedia', icon: 'linkedin' },
    { name: 'GitHub', url: 'https://github.com/alexapedia', icon: 'github' },
    { name: 'Instagram', url: 'https://instagram.com/alexapedia', icon: 'instagram' },
    { name: 'Facebook', url: 'https://facebook.com/alexapedia', icon: 'facebook' },
  ],
};

export const FOOTER = {
  blurb: 'Engineering digital excellence — apps, SaaS, ERP & dashboards.',
  copyright: `© ${new Date().getFullYear()} Alexapedia EG. All rights reserved.`,
};
