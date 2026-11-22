export type PageRoute = 'home' | 'our-story' | 'our-portfolio' | 'request-a-quote' | 'contact-us';
export type AppRoute = PageRoute | 'not-found';
export type Language = 'en' | 'ar';
export type ProductCategory = 'all' | 'coatings' | 'safety' | 'specialty';

export interface ProductSpecItem {
  label: string;
  value: string;
}

export interface ProductKPI {
  label: string;
  value: string;
  tone: 'primary' | 'secondary' | 'neutral' | 'tertiary';
}

export interface ProductItem {
  id: string;
  sku: string;
  category: Exclude<ProductCategory, 'all'>;
  badge: string;
  badgeTone: 'secondary' | 'primary' | 'tertiary';
  overlayTag: string;
  title: string;
  modalCategory: string;
  description: string;
  crossSection: string;
  image: string;
  imageAlt: string;
  kpis: ProductKPI[];
  specs: ProductSpecItem[];
  downloads: string[];
}

export interface ServiceItem {
  id: string;
  icon: string;
  badge: string;
  accentTone: 'primary' | 'secondary' | 'tertiary' | 'clay' | 'terracotta' | 'gold' | 'olive';
  title: string;
  description: string;
  capacity: string;
  turnaround: string;
  compliance: string;
  details: string;
}

export interface ProjectMetric {
  k: string;
  v: string;
}

export interface ProjectItem {
  id: string;
  sector: string;
  sectorTone: 'primary' | 'secondary' | 'tertiary';
  location: string;
  area: string;
  title: string;
  scope: string;
  performance: string;
  architect: string;
  consultant: string;
  glazingBuild: string;
  summary: string;
  image: string;
  imageAlt: string;
  metrics: ProjectMetric[];
}

export interface LeaderItem {
  id: string;
  name: string;
  role: string;
  divisionBadge: string;
  bio: string;
  credential: string;
  experience: string;
  accentTone: 'burgundy' | 'deep-plum' | 'terracotta';
  image: string;
  imageAlt: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  initials: string;
  name: string;
  role: string;
  tone: 'clay' | 'burgundy' | 'deep-plum';
}

export interface TenderFaqItem {
  num: string;
  title: string;
  body: string;
}

export interface RfqFormValues {
  contactName: string;
  firmName: string;
  workEmail: string;
  contactPhone: string;
  projectSite: string;
  projectType: string;
  selectedSystems: string[];
  volumeScope: string;
  targetUValue: string;
  hstRequired: boolean;
  engineeringNotes: string;
}

export interface ContactFormValues {
  fullName: string;
  orgName: string;
  emailAddress: string;
  contactNumber: string;
  inquiryType: string;
  projectScope: string;
  sampleBox: boolean;
}

export type ModalState =
  | { type: 'product'; id: string }
  | { type: 'service'; id: string }
  | { type: 'certificates' }
  | { type: 'policy'; policyKey: 'cookies' | 'privacy' | 'terms' }
  | null;
