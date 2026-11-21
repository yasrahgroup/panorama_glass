import type {
  AppRoute,
  ContactFormValues,
  PageRoute,
  ProductCategory,
  ProductItem,
  RfqFormValues,
} from '../types';

export const ACCEPTED_ENGINEERING_EXTENSIONS = [
  '.pdf',
  '.dwg',
  '.dxf',
  '.ifc',
  '.rvt',
  '.xlsx',
  '.xls',
] as const;

export const MAX_UPLOAD_BYTES = 50 * 1024 * 1024;

export function filterProductsByCategory(
  products: ProductItem[],
  category: ProductCategory,
): ProductItem[] {
  if (category === 'all') return products;
  return products.filter((item) => item.category === category);
}

export function isValidEmail(email: string): boolean {
  const trimmed = email.trim();
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmed);
}

export function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/[^\d]/g, '');
  return digits.length >= 7 && digits.length <= 15;
}

export function validateRfqForm(values: RfqFormValues): Record<string, string> {
  const errors: Record<string, string> = {};
  if (!values.contactName.trim()) {
    errors.contactName = 'Lead specifier name is required.';
  }
  if (!values.firmName.trim()) {
    errors.firmName = 'Architectural or contractor entity is required.';
  }
  if (!isValidEmail(values.workEmail)) {
    errors.workEmail = 'Enter a valid corporate email address.';
  }
  if (!isValidPhone(values.contactPhone)) {
    errors.contactPhone = 'Enter a valid direct phone or WhatsApp number.';
  }
  if (!values.projectSite.trim()) {
    errors.projectSite = 'Select a project erection location.';
  }
  return errors;
}

export function validateContactForm(values: ContactFormValues): Record<string, string> {
  const errors: Record<string, string> = {};
  if (!values.fullName.trim()) {
    errors.fullName = 'Full name is required.';
  }
  if (!isValidEmail(values.emailAddress)) {
    errors.emailAddress = 'Enter a valid corporate email address.';
  }
  if (!isValidPhone(values.contactNumber)) {
    errors.contactNumber = 'Enter a valid contact number.';
  }
  if (!values.inquiryType.trim()) {
    errors.inquiryType = 'Select a technical inquiry discipline.';
  }
  return errors;
}

export function isAcceptedEngineeringFile(fileName: string, sizeBytes: number): boolean {
  const lower = fileName.toLowerCase();
  const hasValidExt = ACCEPTED_ENGINEERING_EXTENSIONS.some((ext) => lower.endsWith(ext));
  return hasValidExt && sizeBytes > 0 && sizeBytes <= MAX_UPLOAD_BYTES;
}

export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

export function generateTenderReference(seedNumber: number): string {
  const normalized = Math.abs(Math.floor(seedNumber)) % 9000 + 1000;
  return `PG-2025-RFQ-${normalized}`;
}

export function routeToPath(route: PageRoute): string {
  switch (route) {
    case 'home':
      return '/';
    case 'our-story':
      return '/our-story';
    case 'our-portfolio':
      return '/our-portfolio';
    case 'request-a-quote':
      return '/request-a-quote';
    case 'contact-us':
      return '/contact-us';
  }
}

export function pathToRoute(pathname: string): AppRoute {
  const clean = pathname.replace(/\/+$/, '') || '/';
  if (clean === '/') return 'home';
  if (clean === '/our-story' || clean === '/story') return 'our-story';
  if (clean === '/our-portfolio' || clean === '/portfolio') return 'our-portfolio';
  if (clean === '/request-a-quote' || clean === '/quote') return 'request-a-quote';
  if (clean === '/contact-us' || clean === '/contact') return 'contact-us';
  return 'not-found';
}
