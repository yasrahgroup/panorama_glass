import type {
  LeaderItem,
  ProductItem,
  ProjectItem,
  ServiceItem,
  TestimonialItem,
  TenderFaqItem,
} from '../types';

import heroFacadeImg from '../assets/images/hero_panorama_facade_1794586714718.jpg';
import heroTemperingImg from '../assets/images/hero_service_tempering_1795034231062.jpg';
import heroLaminationImg from '../assets/images/hero_service_lamination_1795034228935.jpg';
import heroCncImg from '../assets/images/hero_service_cnc_1795034227487.jpg';
import heroCeramicPrintImg from '../assets/images/hero_service_ceramic_print_1795034230149.jpg';

export const PANORAMA_EMBLEM_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA6bpOKz24ti_b7P51InCu9V-iljpcOt3Uf60mXit3MMO31QnyWQ6O62tB7w-TbflzJl61f3PkvT1cMOC7UYJO-Y2LgAH3eQFGePBBP7yL6SO2N44fSTEbWBh_dkqs5CE_BpdPdbPuR1q2WDt8Hl-41EjoRVhqlIqh8sQoFMQxeoT5okJp7GbR7aWfKV0mZa9dKrkqe5MwW6xYTdZbzRPN6rNRUyhqILSi-PRBvVGVfNjsd-UaEuAhs';

export const HERO_SLIDES = [
  {
    id: 'slide-1',
    serviceTag: '01 · Flat & Curve Tempering',
    eyebrow: 'Service 01 · Largest Curve Furnace in Qatar',
    title: 'Flat & Curve Architectural Glass Tempering',
    subtitle:
      'Advanced tempering furnace producing 2,000 m²/day of 4–19mm flat tempered glass and Qatar’s largest curved tempered glass (6–12mm, up to 2400 × 3600 mm, 1000mm radius).',
    image: heroTemperingImg,
    imageAlt: 'Panorama Glass Factory flat and curved architectural glass tempering furnace',
    accent: '#38bdf8',
  },
  {
    id: 'slide-2',
    serviceTag: '02 · PVB & EVA Lamination',
    eyebrow: 'Service 02 · Humidity-Controlled Safety Lines',
    title: 'PVB, SentryGlas® & EVA Lamination (Up to BR 07)',
    subtitle:
      'Two dedicated autoclaved lamination lines delivering 8.76–85mm acoustic PVB, SentryGlas®, curved EVA, mesh, smart switchable, and BR 01–BR 07 bulletproof glass.',
    image: heroLaminationImg,
    imageAlt: 'Cleanroom autoclave glass lamination line for PVB, SentryGlas, and EVA safety glass',
    accent: '#7dd3fc',
  },
  {
    id: 'slide-3',
    serviceTag: '03 · CNC Cut, Edge & Drill',
    eyebrow: 'Service 03 · 2,500 m²/Day Automated Fabrication',
    title: 'Precision CNC Cutting, Edge Polishing & Drilling',
    subtitle:
      'Automated CNC and jumbo cutting up to 3660 × 5100 mm paired with double-edger polishing (3–30mm) and 3 simultaneous drilling lines up to 100mm diameter.',
    image: heroCncImg,
    imageAlt: 'Automated CNC glass cutting table and double-edger polishing machinery in Doha',
    accent: '#22d3ee',
  },
  {
    id: 'slide-4',
    serviceTag: '04 · Ceramic Print & Sand Blast',
    eyebrow: 'Service 04 · Architectural Frit & Gradient Frosting',
    title: 'Digital Ceramic Printing & European Sand Blasting',
    subtitle:
      'Direct-to-glass 2D & 3D digital ceramic printing (2440 × 3600 mm) alongside automated full, custom pattern, and gradient European sandblasting lines.',
    image: heroCeramicPrintImg,
    imageAlt: 'Wide-format digital ceramic glass printing and frosted sandblasting machinery',
    accent: '#60a5fa',
  },
  {
    id: 'slide-5',
    serviceTag: '05 · IGU & Facade Installation',
    eyebrow: 'Service 05 · New Industrial Area, Doha, Qatar',
    title: 'Double & Triple IGU Glazing & Turnkey Installation',
    subtitle:
      '1,050 m²/day Double, Triple & Curve IGU production (18–58mm), Lisec structural silicone bonding, and full supply & installation supported by 500+ stocked containers.',
    image: heroFacadeImg,
    imageAlt: 'Curved architectural glass facade with champagne gold mullions in Doha, Qatar',
    accent: '#38bdf8',
  },
];

export const HOME_STORY_IMAGE =
  'https://lh3.googleusercontent.com/aida/ALJJyrBva2rjMYHxfzSWaoZ_644972AGOdIETGT2RWF73NE9sb828JtfOzpAqilfP2_HaiD626PheveEyGnJVC1L8Akb9fxpz9mTdm04ts6RxVoR1c13xV8YsJpN3WqgYOJTQqotK0JmRvIDTLydNwqRosEND92NltJ0zbSGCt8DS-UNwENTMXkoWd85d8PMZ-Ip7Y_j46ADDCJ0RIkzXjUzBu0PsO3kY6bOJ9EylN5AkBe-';

export const STORY_HUB_IMAGE =
  'https://lh3.googleusercontent.com/aida/ALJJyrAg_EAvsStlPGMvX4e_5AGwS7q6BfQKZaUfs3ojehkOXeSSDH8lkOtappmDf9B3N1zSbGvPLeVFtGETkSM9dc1PLXuQ4ejyqo4CJdzFAHAGUjvLCLp03DLTWsjYaual7Ux5Sbm1MTa0y7PV6V8kbxyki-K8uxOo3AsoOYkr8ZI0GjeY8zMxtIbrAnrxFD2fcI6pcZ_aFRmXAvqY2RK13l-wgungSWgH6NcRMGpUI0wl';

export const PORTFOLIO_PILLAR_IMAGES = {
  services:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCC79rYj2KT0C6FHNBvIEtpC6OI61t50-sPZxSb-gDL4EwqOXHGrOfKrCow5sLc8ax9NmGbHd6zaFciSzxUq0GLBK8wgZxzP0rIPzlZoGrGSwI4JVUct1ReG3ZP3NtNqfPgBfBnXO6k5nUaT5ZL3fWObPN_CF_wgEBv3KUaSIa_0VI5q98GIBykEsMEPsT032Tlg8tDMd0l_oNfJdIXR1s8aJFYOipN_T6u4Bphr4E',
  products:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDjAG4iM27Bcf8_qmMKfr6woLRYcRLUHy6H_0TDsbZJ25tsZyu7iQdO93L4VeG3HjgkXmTMPHH3PCjsja8_AtTOvEGV1hBNVek0v_lCe8jTJ5BeujiBcLwD4-aw8-2vZIwG8PKhorOBUtbKnZt2SLA_imS-t27xrZHY--Qr47TSAs1wm48EaR9ViP_qHdEwXuVkCUJitM2gDW-hlcUX9SCUe0JpdXGxFFtIiogWFjI',
  projects:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCoYzsug3gdX9zbDrm5WjrXHAhJUmAiJVhfbFvJK1tsoUoucYdT72vlihC8PqZcm_BWuVO21FNdqVF5b5Av_O5-oJaXEXJ3y3INwFR8_lPcTuwpfvf7VNYv3oWpL2ya_ktHIFvkxx9JLgIhKmet1Hw4AanJ8hWTQwCvdjA2uY9h0WrEHsgmJ48Fl0IRvQLpcZk7x13vaR2Q5GVhn4MBNP3JBUrlkgkSMa0Nbss18Oc',
};

export const LISEC_IGU_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDK_V9PlnycFw2_4HjvdguGAzpHLBAGgRKfq7UeXAve70zgoAGUwJyOQerLXuYPeIvMhSarLVaUVbXJ4Aejj74unWWyT_jTmcq4moZ7SXgYfsRrpWNTPVMpZddeRdka12VsrOQ6KghsvdnwdGaxCJSQvfrZgrmCosU4VcEW2JFJTaRJW5Q0wTvZGTJfO8PcL7o8nkyR0wQQMUnbevCDVvVfDTxft3aomwveX-Otc2E';

export const LEADERS: LeaderItem[] = [
  {
    id: 'tariq',
    name: 'Hassan Musa E Abuhelaiqa',
    role: 'General Manager',
    divisionBadge: 'Executive Management',
    bio: 'Leading Panorama Glass Factory with over 20 years of experience in the glass and aluminum industry in Qatar. Specialized in strategic business development and quality management systems.',
    credential: 'MBA - Business Administration',
    experience: '20+ Years in Glass Industry',
    accentTone: 'amber',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDrCHkZeRq8Xlk8RmnXu7tjOH2-GFERnu2M3viuVzShOuPuilsOlqsB3TWT2FrRp8gONhFseUydSWYa5AsBCafCLms1ZUn8VcDO9rH8UsAkMp7H-md86d365vYZkXVb3xdGmr959DD5_hDy3pbC9UcmMhXIYlP4Z8yAqWEGRD-LzvdmeCTGp4qjmIFLh6I5h4JV9oeRNdESK4cAL5d3FqFBVkTE22GT-YYgLchDo6E',
    imageAlt: 'Hassan Musa E Abuhelaiqa, General Manager at Panorama Glass Factory',
  },
  {
    id: 'mona',
    name: 'Ashraf Ali M.',
    role: 'Senior Management',
    divisionBadge: 'Senior Management',
    bio: 'Overseeing operations and production quality control with 15 years of expertise in glass processing technologies and factory management.',
    credential: 'BSc - Mechanical Engineering',
    experience: '15+ Years in Manufacturing',
    accentTone: 'purple',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDLBubhPADcXuay09Q6Fcni14zihKmkrTezxbHiAqXXhMKVoL31OgBg2c4FenPJe43bF3V_MF8F4LtMQrhAdDsHZKqChn5oljxt7gXv9mBkbDyCva-rS6rB-VAloF0S_OMPApmJCr9qu1NCESjpY_ClLxHc1y2EJj6-nCFja1Sd3uSM_8t1BSb6iJzyoZdFWtKVfpoGWYXWumNRK7kDSnkX1YeFdXdEznWOvOys0WI',
    imageAlt: 'Ashraf Ali M., Senior Management at Panorama Glass Factory',
  },
  {
    id: 'kareem',
    name: 'Mohammed Al-Khalidi',
    role: 'Operations Manager',
    divisionBadge: 'Operations & Quality',
    bio: 'Managing daily factory operations including tempering, lamination, and cutting lines with focus on efficiency and safety standards compliance.',
    credential: 'Diploma - Industrial Management',
    experience: '12+ Years in Factory Operations',
    accentTone: 'cobalt',
    image:
      'https://randomuser.me/api/portraits/men/32.jpg',
    imageAlt: 'Mohammed Al-Khalidi, Operations Manager at Panorama Glass Factory',
  },
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'dgu',
    sku: 'PG-IGU-01',
    category: 'coatings',
    badge: 'Double, Triple & Curve IGU',
    badgeTone: 'secondary',
    overlayTag: '18mm – 58mm IGU',
    title: 'Insulated Double & Triple Glazed Glass',
    modalCategory: 'Insulated Glazing Units',
    description:
      'Our factory is equipped with an advanced Insulating Glass machine performing all types of Double, Triple, and Curve Glass Units alongside Clear, Tinted, Reflective, Low-E, Double Silver, and Triple Silver Coated Glass.',
    crossSection:
      '18mm to 58mm Total IGU Thickness · Up to 2400 × 3600 mm · Lisec Structural Silicone Bonding',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAf4rK5P6TWi-84SbND0fhctA9sLH6TSUbS5-Mr8wcD3tmgd5W6juo4EUROfukHayQUo8Io_jk1x88LGoS-9pDfMWY0-IR1ouattXCA5xdoVhau8Y6UBWdxtOVRlyr6FBfcie5mJYJLO-zQ0_B15W_WAVMBAQBHNMGMRDim6mUzDni9CIVXsIQuqiirtc_dDq6wPAAu2-1w0iL82zEjQ1eJBF1XsbKQe6TOw79YMlI',
    imageAlt: 'Insulated double and triple glazed architectural glass units',
    kpis: [
      { label: 'Thickness Range', value: '18mm – 58mm', tone: 'primary' },
      { label: 'Max Panel Size', value: '2400 × 3600 mm', tone: 'secondary' },
      { label: 'Daily Output', value: '1,050 sqm / day', tone: 'neutral' },
      { label: 'U-Value / SHGC', value: 'Lorem ipsum', tone: 'tertiary' },
    ],
    specs: [
      { label: 'Glass Thickness Range', value: '18 mm to 58 mm' },
      { label: 'Maximum Unit Dimensions', value: '2400 × 3600 mm' },
      { label: 'Production Capacity', value: '1,050 sqm / Day' },
      { label: 'Coated Substrates', value: 'Clear, Tinted, Reflective, Low-E, Double & Triple Silver' },
      { label: 'Frame Bonding', value: 'Lisec Structural Silicone' },
      { label: 'Thermal & Optical Data', value: 'Contact factory for specifications' }
    ],
    downloads: ['panoramaglass.net.pdf'],
  },
  {
    id: 'sgp',
    sku: 'PG-LAM-02',
    category: 'safety',
    badge: 'PVB, SentryGlas® & EVA',
    badgeTone: 'primary',
    overlayTag: '8.76 – 85mm Lam',
    title: 'Laminated Safety Glass (Flat, Curve & EVA)',
    modalCategory: 'Safety & Structural Lamination',
    description:
      'Produced across two dedicated lamination lines: a humidity and temperature-controlled Flat Lamination line for PVB, Acoustic PVB, and SentryGlas®, plus an EVA Lamination line for Curve, Mesh, Smart Glass, and multi-ply safety panels.',
    crossSection:
      '8.76mm to 85mm Laminated Buildup · PVB / SentryGlas® / EVA Interlayers · 2400 × 4200 mm',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBrI5zr1_22soav0A0sQKcXrcRPyXQEtLQvDTIyWOHroOz5eU5riMyTWzkqM9WI3iXX6xnkwMZZIVpU_jeBkQiHbbitZtb6lIIWtXWoyz_kvhbltZEa1LjQAuNhd3oPELLea_kUFGDFoG1JdcArN47fyQ1TtN0PpEUIycXPdUnucQXumsF0YM-0_VK13_JgUhl7pc0lAiQfUB0FJSycXXSbuY0taKyWL0U1gCtN3-A',
    imageAlt: 'Flat, curve, PVB, SentryGlas, and EVA laminated safety glass panels',
    kpis: [
      { label: 'Thickness', value: '8.76mm – 85mm', tone: 'primary' },
      { label: 'Max Size', value: '2400 × 4200 mm', tone: 'secondary' },
      { label: 'Lines', value: '02 (PVB + EVA)', tone: 'neutral' },
      { label: 'Capacity', value: '24 pcs / day', tone: 'tertiary' },
    ],
    specs: [
      { label: 'Flat Line Interlayers', value: 'PVB, Acoustic PVB, SentryGlas®' },
      { label: 'EVA Line Applications', value: 'Curve, Mesh, Smart Glass & Bullet Proof' },
      { label: 'Glass Thickness Range', value: '8.76 mm to 85 mm' },
      { label: 'Maximum Panel Size', value: '2400 × 4200 mm' },
      { label: 'Production Capacity', value: '24 pcs / Day' },
      { label: 'Impact Test Report', value: 'Contact factory for specifications' }
    ],
    downloads: ['panoramaglass.net.pdf'],
  },
  {
    id: 'acoustic',
    sku: 'PG-ACP-03',
    category: 'specialty',
    badge: 'Acoustic PVB Lamination',
    badgeTone: 'secondary',
    overlayTag: 'Humidity Controlled',
    title: 'Acoustic PVB & Double/Triple Insulated Systems',
    modalCategory: 'Acoustic & Insulated Glazing',
    description:
      'Engineered using our humidity and temperature-controlled Flat Lamination line with specialized Acoustic PVB interlayers and paired with double or triple glazed units for noise attenuation.',
    crossSection: 'Multi-Ply Clear / Low-E Glass + Acoustic PVB Interlayer + Double / Triple Glazed Unit',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAK6mRa3DcjGrA_vo_gFu1NR-uxTVPMIgdJqhjJlStFnp69fCJwQDDrSqglJe0CvXg0aCydVyCDAlNwY8QIRqxk2fTUpD5tryoAvPuyfUJIULt6vJ_uDUrL78j4uj8ULVEbHwSgg5k3xNxxMZFauZQOMlg5Dxk7iKj0R_XgHBal6sau7LsodLghgKEflvP32Sy3QjAf380-guJF-ooohyyfpSEmp9Rfu6c-6LL7thE',
    imageAlt: 'Acoustic PVB laminated glass panel from Panorama Glass Factory',
    kpis: [
      { label: 'Interlayer', value: 'Acoustic PVB', tone: 'primary' },
      { label: 'Process Control', value: 'Humidity & Temp', tone: 'secondary' },
      { label: 'Thickness', value: '8.76mm – 85mm', tone: 'neutral' },
      { label: 'STC / Rw Rating', value: 'Lorem ipsum', tone: 'tertiary' },
    ],
    specs: [
      { label: 'Lamination Line', value: 'Controlled Humidity & Temperature Flat PVB Line' },
      { label: 'Thickness Capability', value: '8.76 mm to 85 mm' },
      { label: 'Max Lamination Size', value: '2400 × 4200 mm' },
      { label: 'IGU Pairing', value: '18 mm to 58 mm Double & Triple Glazing' },
      { label: 'Acoustic Lab Metrics', value: 'Contact factory for specifications' },
      { label: 'Standard Reference', value: 'Contact factory for specifications' }
    ],
    downloads: ['panoramaglass.net.pdf'],
  },
  {
    id: 'ballistic',
    sku: 'PG-BR7-04',
    category: 'safety',
    badge: 'Bullet Proof BR 01 – BR 07',
    badgeTone: 'tertiary',
    overlayTag: 'Up to 85mm Thick',
    title: 'Bullet Proof & Fire Rated Glass',
    modalCategory: 'Defense & Security Glazing',
    description:
      'We manufacture all Bullet Resistant Class Levels from BR 01 to BR 07 alongside Fire Rated glass assemblies with maximum multi-ply laminated thickness up to 85 mm on our specialized EVA and flat lines.',
    crossSection: 'BR 01 – BR 07 Multi-Ply Composite up to 85mm · Fire Rated & EVA / PVB Bonded',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDCSoezRs2tQ5deYtk3QzlVgGES004AjXGiNStj7b9kGTBDw3KgMf2inwARC4kx2sVjy8-2lQLpYwc35HYmzMnhTpjuC-d32C39ab8PX0KKeWydOZwp-pX459wxx0BSmrjRCxmaYW2ys8ZxzzZgESvYtcURfAeVM_iEH9g6O7dSZdeWBtfn2w8DSwadgpM6MVMc7F_aznYVFX31C9cnLGwak48tPc_eC0iaOXSwfHk',
    imageAlt: 'Bullet proof BR01 to BR07 and fire rated laminated glass panel',
    kpis: [
      { label: 'Ballistic Classes', value: 'BR 01 – BR 07', tone: 'primary' },
      { label: 'Max Thickness', value: 'Up to 85 mm', tone: 'secondary' },
      { label: 'Max Panel Size', value: '2400 × 4200 mm', tone: 'neutral' },
      { label: 'Fire / Blast Spec', value: 'Lorem ipsum', tone: 'tertiary' },
    ],
    specs: [
      { label: 'Bullet Resistant Levels', value: 'BR 01 to BR 07' },
      { label: 'Fire Rated Option', value: 'Fire Rated & Bullet Proof Glass' },
      { label: 'Maximum Glass Thickness', value: 'Up to 85 mm' },
      { label: 'Maximum Processing Size', value: '2400 × 4200 mm' },
      { label: 'Production Line', value: 'EVA & Flat Lamination Lines' },
      { label: 'Ballistic Test Certificate', value: 'Contact factory for specifications' }
    ],
    downloads: ['panoramaglass.net.pdf'],
  },
  {
    id: 'frit',
    sku: 'PG-DCP-05',
    category: 'coatings',
    badge: '2D & 3D Ceramic Print',
    badgeTone: 'secondary',
    overlayTag: '250 sqm / day',
    title: 'Digital Ceramic Printed Glass',
    modalCategory: 'Decorative & Ceramic Printed',
    description:
      'Our factory is equipped with an advanced Digital Ceramic printing machine capable of performing Full coverage, custom Pattern Design, and any kind of 2D and 3D architectural designs on 4–19 mm glass.',
    crossSection: '4mm – 19mm Clear / Tinted / Low-E Substrate + 2D / 3D Digital Ceramic Ink',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuApOo-oFSh3mMH0B7dPCorZkPGHIXsKt8khEUw7yIklEKXyrI4TBl4kpjlGPSRR_FuzcnTfdQxV2BNvidEYy9WBuJNtg4QbqgDavlerDI1UwSMoUfeqY9wIqExTuFom_OkthWQM3AJWp7_0Q4C4-GCq23EWrbHPXJ8CaJTnADYw4Kdi0GxA1LIA2RVh7MV89XoclPtbxK-eBk6BVLwZfrx0DuPxGdlFjB-iZsHFg8s',
    imageAlt: 'Digital ceramic printed glass with custom 2D and 3D designs',
    kpis: [
      { label: 'Glass Thickness', value: '4mm – 19mm', tone: 'primary' },
      { label: 'Max Dimensions', value: '2440 × 3600 mm', tone: 'secondary' },
      { label: 'Design Scope', value: 'Full, 2D & 3D', tone: 'neutral' },
      { label: 'Capacity', value: '250 sqm / day', tone: 'tertiary' },
    ],
    specs: [
      { label: 'Glass Thickness', value: '4 – 19 mm' },
      { label: 'Maximum Size', value: '2440 × 3600 mm' },
      { label: 'Design Capability', value: 'Full, Design & any kind of 2D and 3D Design' },
      { label: 'Production Capacity', value: '250 sqm / Day' },
      { label: 'Substrate Options', value: 'Tempered & Decorative Architectural Glass' },
      { label: 'Frit Technical Data', value: 'Contact factory for specifications' }
    ],
    downloads: ['panoramaglass.net.pdf'],
  },
  {
    id: 'pdlc',
    sku: 'PG-EVA-06',
    category: 'specialty',
    badge: 'EVA Smart Glass & Sand Blast',
    badgeTone: 'primary',
    overlayTag: 'Mesh & Sand Blast',
    title: 'Smart Glass, Sand Blasted Glass & Mirrors',
    modalCategory: 'Specialty & Interior Glass',
    description:
      'Specialty interior and architectural glazing combining EVA Lamination (Smart Glass and Mesh Lamination), European Full/Design/Gradient Sand Blasted glass, and Clear, Tinted, and Decorative Mirrors.',
    crossSection: '4mm – 19mm Sand Blasted / Mirror / EVA Laminated Smart & Mesh Glass',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDzKidv6NZDtJTd3OIX5sXJEUdWKe6QCqjaFJwChNUyC4KQBze_tUoGSZBUcLX6EAB8461L_9OQJApbpJavOYDJDQ_guDUNwl-nJkx0MiO6iQLcdVd9r-x5GXcXut6WcXVtEycCDF7_OTaJCmpwNHzE33D6MD9_rHmMc_kUH1xZ-PUrhjpTk50sMJC5ZKN1gRGfGuf9pC1FHHX1LJWFwHVCXFClo1NbnsGiihU89zg',
    imageAlt: 'Smart EVA laminated glass, gradient sand blasted panels, and mirrors',
    kpis: [
      { label: 'Sand Blast Max', value: '2440 × 5100 mm', tone: 'primary' },
      { label: 'Sand Blast Cap.', value: '250 m² / day', tone: 'secondary' },
      { label: 'Thickness', value: '4mm – 19mm', tone: 'neutral' },
      { label: 'Power / Switching', value: 'Lorem ipsum', tone: 'tertiary' },
    ],
    specs: [
      { label: 'EVA Specialty Lamination', value: 'Smart Glass, Mesh Lamination & Curve Glass' },
      { label: 'Sand Blasting Scope', value: 'Full, Design & Gradient Sand Blast Design' },
      { label: 'Sand Blasting Size & Cap.', value: '2440 × 5100 mm · 250 m² / Day' },
      { label: 'Annealed & Mirror Range', value: '4 mm to 19 mm Mirrors, Satin & Obscured' },
      { label: 'Electrical Specification', value: 'Contact factory for specifications' },
      { label: 'Warranty & Lifecycle', value: 'Contact factory for specifications' }
    ],
    downloads: ['panoramaglass.net.pdf'],
  },
  {
    id: 'curved',
    sku: 'PG-CRV-07',
    category: 'safety',
    badge: 'Largest Curve Glass in Qatar',
    badgeTone: 'tertiary',
    overlayTag: 'R Max 1000mm',
    title: 'Tempered & Curved Tempered Glass',
    modalCategory: 'Tempering & Bending',
    description:
      'One of the biggest curved glass manufacturers in Qatar. Our advanced tempering furnace handles both Flat and Curve Tempered or Heat-Strengthened glass for Clear, Tinted, Reflective, Low-E, and Double Silver products.',
    crossSection: 'Flat 4–19mm (2400 × 4200 mm) · Curve 6–12mm (2400 × 3600 mm, Radius Max 1000mm)',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDz0LCmLFXX9Kw_v4zCPgqtblHGqhp3R5q4eY5ii34V1vG3AiR6zNTC9NeE7-_2C6sbNbrQBARH2rGiPgIATpsWNHpWKqmdwdPhzN01wWKH0JEpqqoi1nB66XTGVEU4aWvux17TrgRKQChmQFayq7H1vdwSp-t_NzYbKeneRoCDsWuf2KLr0-Q2G0XQwu5X7vAjybPu0KMEr-JEWa2YrwxCfxwX6hjRNadwWDPQKNM',
    imageAlt: 'Tempered and jumbo curved tempered architectural glass processed in Qatar',
    kpis: [
      { label: 'Flat Size / Cap.', value: '2400×4200 · 2000m²/d', tone: 'primary' },
      { label: 'Curve Size', value: '2400 × 3600 mm', tone: 'secondary' },
      { label: 'Max Radius', value: '1,000 mm', tone: 'neutral' },
      { label: 'Curve Output', value: '60 pcs / day', tone: 'tertiary' },
    ],
    specs: [
      { label: 'Flat Glass Thickness', value: '4 – 19 mm (2400 × 4200 mm, 2000 sqm / Day)' },
      { label: 'Curve Glass Thickness', value: '6 – 12 mm (2400 × 3600 mm, 60 pcs / Day)' },
      { label: 'Maximum Bending Radius', value: '1000 mm' },
      { label: 'Coated Substrates', value: 'Clear, Tinted, Reflective, Low-E & Double Silver' },
      { label: 'Heat Strengthening', value: 'Flat & Curve Tempering / Heat Strengthened' },
      { label: 'Additional Standard Ref.', value: 'Contact factory for specifications' }
    ],
    downloads: ['panoramaglass.net.pdf'],
  },
  {
    id: 'fins',
    sku: 'PG-SUP-08',
    category: 'safety',
    badge: 'Supply, Stockist & Install',
    badgeTone: 'secondary',
    overlayTag: '500+ Containers',
    title: 'Annealed Coated Glass, Doors, Walls & Balustrades',
    modalCategory: 'Supply, Fabrication & Installation',
    description:
      'Over 500 containers stocked across Clear, Obscured, Satin, Reflective, Low-E, Double & Triple Silver Coated Glass (4–19mm), plus complete supply and installation of Curtain Walls, Doors, Skylights, Balustrades, and Partitions.',
    crossSection: '4mm – 19mm Annealed / Low-E / Double & Triple Silver · Full Fabrication & Installation',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDYyaOY3hU1A7PqeAmGX3gd2yOsfAeYIQt8-rrCGvvPaFY4r9o4_oEcmA9ffzvqZIUa3zin79PDoo_s7LLBgwmZtShVzYW0e6z9cOevm9U8tUEoKwnV0-DfJQl1SHJvgsL0wYAgZAQR6K1_7q5oiI0yfSapAwgggGAQFiyZm5QRD_kohMd5B0VLdtfS4zgy3Wqj-OBUbNy9vV9guO96VqKmMwVy2SWB9DwhroBeKjM',
    imageAlt: 'Curtain wall, glass doors, balustrades, and coated architectural glass supply',
    kpis: [
      { label: 'Warehouse Stock', value: '500+ Containers', tone: 'primary' },
      { label: 'Glass Thickness', value: '4mm – 19mm', tone: 'secondary' },
      { label: 'Drilling Max Hole', value: '100 mm (600/day)', tone: 'neutral' },
      { label: 'Structural Calc', value: 'Lorem ipsum', tone: 'tertiary' },
    ],
    specs: [
      { label: 'Annealed Product Range', value: 'Clear, Obscured, Satin, Reflective, Low-E, Double & Triple Silver' },
      { label: 'Stock Volume', value: 'More than 500 Containers Stocked' },
      { label: 'Supply & Install Scope', value: 'Doors, Windows, Curtain Walls, Skylights, Balustrades, Handrails' },
      { label: 'Interior & UPVC Scope', value: 'Shower & Office Partitions, Kitchen Cabinets, UPVC Windows' },
      { label: 'CNC Drilling / Edging', value: 'Up to 100mm holes · 3–30mm Double & Single Edgers' },
      { label: 'Structural Code Note', value: 'Contact factory for specifications' }
    ],
    downloads: ['panoramaglass.net.pdf'],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'tempering',
    icon: 'thermostat',
    badge: 'Flat & Curve Tempering',
    accentTone: 'primary',
    title: 'Glass Tempering (Flat & Largest Curve Furnace in Qatar)',
    description:
      'Advanced glass tempering furnace providing Flat and Curve tempered or heat-strengthened glass (4–19mm flat up to 2400×4200mm; 6–12mm curve up to 2400×3600mm, 1000mm radius).',
    capacity: '2,000 sqm/Day (Flat) · 60 pcs/Day (Curve)',
    turnaround: 'Lorem ipsum',
    compliance: 'ISO 9001:2015',
    details:
      'Our factory is equipped with an Advanced Glass Tempering Furnace providing tempering and heat-strengthened glass processing across Clear, Tinted, Reflective, Low-E, and Double Silver products. It produces the largest curved glass size in Qatar (6–12mm thickness, up to 2400×3600mm, 1000mm max radius).',
  },
  {
    id: 'lamination',
    icon: 'layers',
    badge: '02 Lamination Lines',
    accentTone: 'secondary',
    title: 'PVB, SentryGlas® & EVA Lamination (Up to BR 07)',
    description:
      'Two dedicated lamination lines: humidity and temperature-controlled Flat Lamination for PVB, Acoustic PVB, and SentryGlas®, plus EVA Lamination for Curve, Mesh, Smart Glass, and BR 01–BR 07 Bullet Proof up to 85mm.',
    capacity: '24 pcs/Day · 8.76–85 mm (2400×4200 mm)',
    turnaround: 'Lorem ipsum',
    compliance: 'BR 01 – BR 07 · ISO',
    details:
      'Equipped with 2 lamination lines: Line 1 uses advanced humidity and temperature control mandatory for PVB, Acoustic PVB, and SentryGlas®; Line 2 specializes in EVA Lamination for Curve, Mesh, Smart Glass, Fire Rated, and Bullet Proof glass classes BR 01 through BR 07 up to 85 mm thickness.',
  },
  {
    id: 'igu',
    icon: 'smart_toy',
    badge: 'Insulating & Lisec',
    accentTone: 'tertiary',
    title: 'Double & Triple Glazing & Lisec Frame Bonding',
    description:
      'Advanced Insulating Glass machinery producing Double, Triple, and Curve IGU assemblies (18–58mm thick, up to 2400×3600mm) paired with a Lisec Structural Silicone Frame Bonding line.',
    capacity: '1,050 sqm/Day · 18–58 mm',
    turnaround: 'Lorem ipsum',
    compliance: 'ISO 9001:2015',
    details:
      'Our factory manufactures Double, Triple, and Curved Insulating Glass Units from 18 mm to 58 mm thickness up to 2400×3600 mm at 1,050 sqm/day capacity, complemented by Lisec Silicone machine frame bonding using structural silicone tailored to client requirements.',
  },
  {
    id: 'cnc',
    icon: 'construction',
    badge: 'Cutting, Edging & Drilling',
    accentTone: 'secondary',
    title: 'CNC Cutting (02 Lines), Edge Polishing (03) & Drilling (03)',
    description:
      'Two optimization cutting lines (up to 3660×5100mm), three polishing machines (1 Double Edger + 2 Vertical Single Edgers, 3–30mm), and three simultaneous drilling machines up to 100mm diameter.',
    capacity: '2,500 m²/Day Cut · 1,600 m²/Day Edge · 600 Holes/Day',
    turnaround: 'Lorem ipsum',
    compliance: 'ISO 9001:2015',
    details:
      'CNC Cutting Line 1 (4–19mm, 3660×2550mm, 2,500 m²/day) & Semi-Auto Jumbo Line 2 (3660×5100mm) handle straight, shape, round, and template cuts. One Double Edger + two Vertical Single Edgers polish/miter/bevel 3–30mm glass (1,600 m²/day), while 3 drilling machines run simultaneously for holes up to 100mm (600 holes/day).',
  },
  {
    id: 'fritting',
    icon: 'pattern',
    badge: 'Ceramic Print & Sand Blast',
    accentTone: 'primary',
    title: 'Digital Ceramic Printing & European Sand Blasting',
    description:
      'Advanced Digital Ceramic printing machine for Full, Design, and 2D/3D patterns (2440×3600mm, 250 sqm/day) plus European Sand Blasting for Full, Design, and Gradient glass (2440×5100mm, 250 m²/day).',
    capacity: '250 m²/Day Each · 4–19 mm',
    turnaround: 'Lorem ipsum',
    compliance: 'ISO 9001:2015',
    details:
      'Direct-to-glass Digital Ceramic printing performs any 2D and 3D design across 4–19 mm substrates (up to 2440×3600 mm), while our advanced European Sand Blasting unit executes Full, custom Design, and smooth Gradient sand blast finishes across 4–19 mm panes up to 2440×5100 mm.',
  },
  {
    id: 'advisory',
    icon: 'query_stats',
    badge: 'Trading & Installation',
    accentTone: 'tertiary',
    title: 'Glass & Aluminium Trading, Supply & Installation Services',
    description:
      'Over 500 containers stocked across Glass, Aluminium, and Accessories Trading Divisions, plus end-to-end supply and installation for Doors, Windows, Curtain Walls, Skylights, Balustrades, and UPVC.',
    capacity: '500+ Containers Stocked',
    turnaround: 'Lorem ipsum',
    compliance: 'OHSAS 45001:2018',
    details:
      'Backed by four core divisions (Glass Trading, Aluminium Trading, Glass & Aluminium Accessories Trading, and Glass Processing), Panorama Glass Factory delivers turnkey Glass Supply and Installation for Doors, Windows, Curtain Walls, Shower Partitions, Skylights, Balustrades, Handrails, Office Partitions, Kitchen Cabinets, and UPVC Windows at competitive prices.',
  },
];

export const PROJECTS: ProjectItem[] = [];

export const CERTIFICATIONS = [
  {
    id: 'iso9001',
    icon: 'fact_check',
    tone: 'amber' as const,
    category: 'Quality Management',
    title: 'ISO 9001:2015 Certified',
    description:
      'Maintaining a Quality Management System with documented procedures, continuous training, and measurable departmental objectives in compliance with international standards.',
    tier: 'Quality System',
    status: 'Certified',
  },
  {
    id: 'iso14001',
    icon: 'eco',
    tone: 'sky' as const,
    category: 'Environmental System',
    title: 'ISO 14001:2015 Certified',
    description:
      'Environmental management compliance minimizing glass processing wastage through automated cutting optimization and responsible manufacturing practices.',
    tier: 'Environmental',
    status: 'Certified',
  },
  {
    id: 'ohsas45001',
    icon: 'shield_lock',
    tone: 'indigo' as const,
    category: 'Health & Safety',
    title: 'OHSAS 45001:2018 Certified',
    description:
      'Occupational health and safety management standards safeguarding our factory teams across heavy glass cutting, tempering furnaces, and lamination lines.',
    tier: 'Safety Standard',
    status: 'Certified',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [];

export const TENDER_FAQS: TenderFaqItem[] = [];
