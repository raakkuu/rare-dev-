/**
 * RARE DEV — site content
 * ---------------------------------------------------------------
 * All editable copy lives here so it can be swapped without touching
 * layout. Portfolio entries are clearly-labelled example projects;
 * replace them with real work when it is ready to publish.
 */

export const STUDIO = {
  name: 'RARE DEV',
  discipline: 'Digital Technology Studio',
  tagline: 'Digital products, built to be rare.',
  description:
    'RARE DEV is a boutique technology studio building websites, e-commerce platforms, web applications, AI-powered products, and custom digital systems for ambitious businesses.',
};

export const NAV_LINKS = [
  { label: 'Pricing', id: 'pricing' },
  { label: 'About', path: '/about' },
  { label: 'Labs', path: '/labs' },
];

export const CAPABILITIES = [
  'Web Development',
  'E-Commerce',
  'Web Apps',
  'AI & Automation',
  'SaaS',
  'Custom Software',
];

export const DISCIPLINES = ['Design', 'Engineering', 'Technology', 'Automation', 'AI'];

export const SERVICES = [
  {
    no: '01',
    id: 'websites',
    title: 'Websites',
    body: 'Professional, responsive websites for businesses, brands, and organizations.',
    tags: ['Brand systems', 'Interface design', 'Performance', 'Content architecture'],
  },
  {
    no: '02',
    id: 'ecommerce',
    title: 'E-Commerce',
    body: 'Online stores, product experiences, checkout flows, and commerce systems.',
    tags: ['Catalogues', 'Checkout', 'Payments', 'Operations'],
  },
  {
    no: '03',
    id: 'applications',
    title: 'Web Applications',
    body: 'Dashboards, portals, booking systems, and custom business applications.',
    tags: ['Dashboards', 'Portals', 'Workflows', 'Access control'],
  },
  {
    no: '04',
    id: 'ai',
    title: 'AI & Automation',
    body: 'AI integrations, intelligent workflows, and business process automation.',
    tags: ['AI features', 'Assistants', 'Document processing', 'Process automation'],
  },
  {
    no: '05',
    id: 'saas',
    title: 'SaaS & Software',
    body: 'Custom software products, SaaS platforms, and digital tools.',
    tags: ['Product architecture', 'Billing', 'Accounts', 'Scale'],
  },
  {
    no: '06',
    id: 'integrations',
    title: 'Integrations',
    body: 'APIs, databases, payment services, authentication, and third-party systems.',
    tags: ['APIs', 'Payments', 'Third-party services', 'Data'],
  },
];

/** The studio's complete service index (shown behind "View all services"). */
export const FULL_SERVICES = [
  'Professional websites',
  'E-commerce websites',
  'Web applications',
  'SaaS products',
  'AI integrations & AI-powered products',
  'Business automation',
  'Custom software',
  'API & third-party integrations',
  'Digital systems & internal tools',
  'Ongoing technical support',
];

export const PROJECTS = [
  {
    no: '01',
    title: 'NEXA',
    category: 'Premium corporate website',
    sector: 'Concept project',
    year: '2026',
    description:
      'A corporate presence that reads clearly at every level — positioning, services, and career pages built on one scalable content system.',
    tags: ['Interface design', 'Front-end', 'Content system'],
    visual: 'nexa',
  },
  {
    no: '02',
    title: 'MONO',
    category: 'Distinctive storefront',
    sector: 'Concept project',
    year: '2026',
    description:
      'A restrained storefront where the product does the talking: fast browsing, honest product detail, and a checkout with no friction.',
    tags: ['Store design', 'Commerce', 'Payments'],
    visual: 'mono',
  },
  {
    no: '03',
    title: 'ORBIT',
    category: 'SaaS dashboard',
    sector: 'Concept project',
    year: '2026',
    description:
      'A data-dense workspace for teams — clear hierarchy, live metrics, and interaction patterns that stay calm under heavy use.',
    tags: ['Product design', 'Application', 'Data viz'],
    visual: 'orbit',
  },
  {
    no: '04',
    title: 'ATLAS',
    category: 'AI & automation interface',
    sector: 'Concept project',
    year: '2026',
    description:
      'An internal system that replaces manual operations with automated pipelines, structured records, and a single source of truth.',
    tags: ['Automation', 'Internal tools', 'Integrations'],
    visual: 'atlas',
  },
];

export const PRINCIPLES = [
  {
    no: '01',
    title: 'Thoughtful design',
    body: 'Interfaces built around how people actually use them — not around what looks good in a presentation.',
  },
  {
    no: '02',
    title: 'Clean engineering',
    body: 'Readable, maintainable code that still makes sense to the next developer, and to us, months later.',
  },
  {
    no: '03',
    title: 'Fast execution',
    body: 'Short cycles and visible progress. You see working software early, not a long silence followed by a reveal.',
  },
  {
    no: '04',
    title: 'Transparent pricing',
    body: 'Scope and numbers agreed before the work starts, so there are no surprises in the final invoice.',
  },
  {
    no: '05',
    title: 'Practical technology',
    body: 'We choose the simplest stack that solves your problem properly — not the most fashionable one.',
  },
  {
    no: '06',
    title: 'Long-term support',
    body: 'We stay available after launch: improvements, fixes, and new features as your product grows.',
  },
];

export const PROCESS_STEPS = [
  {
    no: '01',
    title: 'Discover',
    body: 'We learn the business, the users, and the constraints before anything else.',
  },
  {
    no: '02',
    title: 'Plan',
    body: 'Scope, structure, budget, and timeline — documented and agreed in writing.',
  },
  {
    no: '03',
    title: 'Design',
    body: 'Interfaces designed around real content and the way people actually use them.',
  },
  {
    no: '04',
    title: 'Build',
    body: 'Short, reviewable build cycles, with working software visible early.',
  },
  {
    no: '05',
    title: 'Test',
    body: 'Every flow checked across devices, browsers, and the edge cases nobody mentions.',
  },
  {
    no: '06',
    title: 'Launch',
    body: 'Performance, security, and analytics verified before the product meets real users.',
  },
  {
    no: '07',
    title: 'Support',
    body: 'Improvements, fixes, and new features for as long as the product keeps moving.',
  },
];

/** Editorial pricing rows — starting points, quoted per project in BDT. */
export const PRICING_TIERS = [
  {
    no: '01',
    name: 'Business Website',
    price: 'from ৳19,999',
    body: 'A sharp, fast website that makes your business look credible and turn visitors into enquiries.',
    type: 'Websites',
  },
  {
    no: '02',
    name: 'Professional Website',
    price: 'from ৳39,999',
    body: 'A larger, content-rich website with custom design, a content system, and integrations.',
    type: 'Websites',
  },
  {
    no: '03',
    name: 'E-Commerce',
    price: 'from ৳49,999',
    body: 'A complete online store — catalogue, checkout, payments, and order operations.',
    type: 'E-Commerce',
  },
  {
    no: '04',
    name: 'Web Applications',
    price: 'from ৳75,000',
    body: 'Dashboards, portals, and custom business systems built around your workflow.',
    type: 'Web Applications',
  },
  {
    no: '05',
    name: 'Custom Software',
    price: 'individually scoped',
    body: 'SaaS products, AI systems, and complex platforms — scoped and quoted per project.',
    type: 'SaaS & Software',
  },
];

export const PRICING_NOTES = [
  {
    no: '01',
    title: 'Fixed project quotes',
    body: 'Every project is scoped individually and quoted as a fixed price before work begins.',
  },
  {
    no: '02',
    title: 'No hourly surprises',
    body: 'If something changes, the change is quoted and approved before we touch it.',
  },
  {
    no: '03',
    title: 'Ongoing support',
    body: 'For products that keep evolving, we work on a simple monthly arrangement.',
  },
];

/** How the studio works — shown on the About page. */
export const APPROACH = [
  { no: '01', title: 'Clarity', body: 'We understand the problem before choosing the technology.' },
  { no: '02', title: 'Craft', body: 'Details matter, from interaction design to code quality.' },
  { no: '03', title: 'Practicality', body: 'Technology should solve a real problem.' },
  { no: '04', title: 'Speed', body: 'We move quickly without treating quality as optional.' },
  { no: '05', title: 'Partnership', body: 'Clients should understand what they are paying for and what they are getting.' },
];

/** What the studio keeps under one roof. */
export const EXPERTISE = [
  { title: 'Design', body: 'How it looks, feels, and moves people through it.' },
  { title: 'Development', body: 'How it is actually built — fast, stable, maintainable.' },
  { title: 'AI', body: 'Where it genuinely helps, not where it is fashionable.' },
  { title: 'Automation', body: 'What should run by itself, without a person babysitting it.' },
  { title: 'Business thinking', body: 'Why the thing exists, and what it needs to achieve.' },
];

/** The wider RARE brand ecosystem. */
export const ECOSYSTEM = [
  {
    name: 'RARE SHOP',
    role: 'Commerce & retail',
    body: 'The commerce and retail side of the RARE ecosystem.',
    status: 'coming-soon',
  },
  {
    name: 'RAREST',
    role: 'Collectibles & die-cast',
    body: 'A collectibles and die-cast focused brand.',
    status: 'coming-soon',
  },
  {
    name: 'RARE DEV',
    role: 'Technology studio',
    body: 'Websites, software, AI systems, automation, and digital products for clients.',
    status: 'here',
  },
  {
    name: 'RARE LABS',
    role: 'Product studio',
    body: 'Applications, games, software, and technology products created and owned by RARE.',
    status: 'labs',
  },
];

/** Contact channels — placeholders. Replace with the real details when ready. */
export const CONTACT_CHANNELS = [
  { label: 'Email', note: 'Direct line to the studio' },
  { label: 'WhatsApp', note: 'Fast, informal conversations' },
  { label: 'Social', note: 'Where new work gets shown' },
  { label: 'Studio', note: 'Where we work from' },
];