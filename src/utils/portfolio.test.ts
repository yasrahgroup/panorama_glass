import test from 'node:test';
import assert from 'node:assert/strict';
import {
  filterProductsByCategory,
  formatFileSize,
  generateTenderReference,
  isAcceptedEngineeringFile,
  isValidEmail,
  isValidPhone,
  pathToRoute,
  routeToPath,
  validateContactForm,
  validateRfqForm,
} from './portfolio';
import type { ProductItem } from '../types';

const sampleProducts: ProductItem[] = [
  {
    id: 'dgu',
    sku: 'PG-DGU-01',
    category: 'coatings',
    badge: 'Triple-Silver Coating',
    badgeTone: 'secondary',
    overlayTag: 'Ug 1.1 W/m²K',
    title: 'Solar Control Low-E DGU',
    modalCategory: 'Solar Control',
    description: 'desc',
    crossSection: '6+16+6',
    image: '',
    imageAlt: '',
    kpis: [],
    specs: [],
    downloads: [],
  },
  {
    id: 'sgp',
    sku: 'PG-SGP-02',
    category: 'safety',
    badge: 'SentryGlas®',
    badgeTone: 'primary',
    overlayTag: 'Class 1B1',
    title: 'SentryGlas Laminated',
    modalCategory: 'Safety',
    description: 'desc',
    crossSection: '10+1.52+10',
    image: '',
    imageAlt: '',
    kpis: [],
    specs: [],
    downloads: [],
  },
  {
    id: 'pdlc',
    sku: 'PG-PLC-06',
    category: 'specialty',
    badge: 'Switchable PDLC',
    badgeTone: 'primary',
    overlayTag: '< 100ms',
    title: 'Smart Privacy PDLC',
    modalCategory: 'Specialty',
    description: 'desc',
    crossSection: '6+PDLC+6',
    image: '',
    imageAlt: '',
    kpis: [],
    specs: [],
    downloads: [],
  },
];

test('filterProductsByCategory returns all or filtered subsets accurately', () => {
  assert.equal(filterProductsByCategory(sampleProducts, 'all').length, 3);
  assert.deepEqual(
    filterProductsByCategory(sampleProducts, 'coatings').map((p) => p.id),
    ['dgu'],
  );
  assert.deepEqual(
    filterProductsByCategory(sampleProducts, 'safety').map((p) => p.id),
    ['sgp'],
  );
  assert.deepEqual(
    filterProductsByCategory(sampleProducts, 'specialty').map((p) => p.id),
    ['pdlc'],
  );
});

test('email and phone validation handles valid and invalid formats', () => {
  assert.equal(isValidEmail('arch@panoramaglass.qa'), true);
  assert.equal(isValidEmail('invalid-email'), false);
  assert.equal(isValidPhone('+974 4498 7200'), true);
  assert.equal(isValidPhone('123'), false);
});

test('validateRfqForm catches missing required fields and passes when complete', () => {
  const emptyErrors = validateRfqForm({
    contactName: '',
    firmName: '',
    workEmail: 'bad',
    contactPhone: '12',
    projectSite: '',
    projectType: 'skyscraper',
    selectedSystems: [],
    volumeScope: '2500',
    targetUValue: '',
    hstRequired: true,
    engineeringNotes: '',
  });
  assert.equal(Object.keys(emptyErrors).length, 5);

  const validErrors = validateRfqForm({
    contactName: 'Eng. Fahad',
    firmName: 'Qatari Diar',
    workEmail: 'fahad@qataridiar.qa',
    contactPhone: '50123456',
    projectSite: 'lusail',
    projectType: 'skyscraper',
    selectedSystems: ['Low-E'],
    volumeScope: '2500',
    targetUValue: 'U < 1.3',
    hstRequired: true,
    engineeringNotes: '',
  });
  assert.equal(Object.keys(validErrors).length, 0);
});

test('validateContactForm enforces required fields', () => {
  const errors = validateContactForm({
    fullName: '',
    orgName: '',
    emailAddress: 'not-an-email',
    contactNumber: '',
    inquiryType: '',
    projectScope: '',
    sampleBox: false,
  });
  assert.equal(Object.keys(errors).length, 4);
});

test('engineering file validation and size formatting', () => {
  assert.equal(isAcceptedEngineeringFile('facade-elevations.dwg', 204800), true);
  assert.equal(isAcceptedEngineeringFile('boq-schedule.XLSX', 1024), true);
  assert.equal(isAcceptedEngineeringFile('malware.exe', 1024), false);
  assert.equal(isAcceptedEngineeringFile('oversized.pdf', 60 * 1024 * 1024), false);
  assert.equal(formatFileSize(512), '512 B');
  assert.equal(formatFileSize(1536), '1.5 KB');
  assert.equal(formatFileSize(2 * 1024 * 1024), '2.00 MB');
});

test('routing helpers convert paths symmetrically', () => {
  assert.equal(pathToRoute('/'), 'home');
  assert.equal(pathToRoute('/our-story'), 'our-story');
  assert.equal(pathToRoute('/our-portfolio'), 'our-portfolio');
  assert.equal(pathToRoute('/request-a-quote'), 'request-a-quote');
  assert.equal(pathToRoute('/contact-us'), 'contact-us');
  assert.equal(pathToRoute('/contact'), 'contact-us');
  assert.equal(pathToRoute('/missing-page'), 'not-found');
  assert.equal(routeToPath('our-portfolio'), '/our-portfolio');
  assert.match(generateTenderReference(8841), /^PG-2025-RFQ-\d{4}$/);
});
