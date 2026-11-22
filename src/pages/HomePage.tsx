// import { useEffect, useState } from 'react';
// import { AnimatePresence, motion } from 'motion/react';
// import type { Language, PageRoute } from '../types';
// import {
//   HERO_SLIDES,
//   HOME_STORY_IMAGE,
//   LEADERS,
//   PORTFOLIO_PILLAR_IMAGES,
// } from '../data/panoramaData';
// import { useTranslations } from '@/i18n';
// import { SafeImage } from '../components/SafeImage';
// import { AnimatedCounter } from '../components/AnimatedCounter';
// import { LogoPattern } from '../components/LogoPattern';

// interface HomePageProps {
//   language: Language;
//   onNavigate: (route: PageRoute, hash?: string) => void;
// }

// const EASE_CURVE: [number, number, number, number] = [0.16, 1, 0.3, 1];
// const SLIDE_DURATION_MS = 5500;

// export function HomePage({ language, onNavigate }: HomePageProps) {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const t = useTranslations(language);

//   useEffect(() => {
//     if (isPaused) return;
//     const timer = window.setInterval(() => {
//       setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
//     }, SLIDE_DURATION_MS);
//     return () => window.clearInterval(timer);
//   }, [isPaused]);

//   const currentSlide = HERO_SLIDES[activeSlide];

//   return (
//     <div className="flex flex-col w-full bg-canvas text-ink">

//       {/* 1. HERO BANNER */}
//       <section
//         aria-roledescription="carousel"
//         aria-label="Glass manufacturing services banner slider"
//         onMouseEnter={() => setIsPaused(true)}
//         onMouseLeave={() => setIsPaused(false)}
//         className="min-h-[80vh] max-h-[600px]"
//       >
//         <div className="absolute inset-0 z-0 overflow-hidden">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={currentSlide.id}
//               initial={{ opacity: 0, scale: 1.02 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 1.01 }}
//               transition={{ duration: 0.95, ease: EASE_CURVE }}
//               className="absolute inset-0"
//             >
//               <SafeImage
//                 src={currentSlide.image}
//                 alt={currentSlide.imageAlt}
//                 className="w-full h-full object-cover object-center opacity-85"
//                 fallbackLabel={currentSlide.serviceTag}
//               />
//             </motion.div>
//           </AnimatePresence>
//           <LogoPattern variant="dark" className="opacity-20" />
//         </div>

//         <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 lg:px-12 pt-16 pb-12 lg:pt-24 lg:pb-16 flex-1 min-h-0 flex flex-col justify-center overflow-y-auto">
//           <div className="max-w-2xl relative ps-0 sm:ps-6">
//             <motion.div
//               key={`shutter-${currentSlide.id}`}
//               initial={{ scaleY: 0, opacity: 0 }}
//               animate={{ scaleY: 1, opacity: 1 }}
//               transition={{ duration: 0.55, ease: EASE_CURVE }}
//               style={{ transformOrigin: 'top' }}
//               className="hidden sm:block absolute start-0 top-0 bottom-0 w-1.5 bg-[var(--color-clay)]"
//               aria-hidden="true"
//             />

//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={currentSlide.id}
//                 initial={{ opacity: 0, y: 18 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -12 }}
//                 transition={{ duration: 0.45, ease: EASE_CURVE }}
//               >
//                 <div className="flex items-center gap-3 mb-4 eyebrow">
//                   <span className="text-xs uppercase tracking-[0.22em] font-bold text-clay">
//                     {currentSlide.eyebrow}
//                   </span>
//                 </div>

//                 {/* FIXED: text-white -> text-on-dark */}
//                 <h1 className="text-3xl sm:text-5xl lg:text-[42px] text-on-dark tracking-tight font-bold leading-[1.08] mb-5 [text-wrap:balance]">
//                   {currentSlide.title}
//                 </h1>

//                 {/* FIXED: text-clay -> text-on-dark for readability */}
//                 <p className="text-sm sm:text-base lg:text-lg text-on-dark max-w-xl leading-relaxed mb-8 opacity-90">
//                   {currentSlide.subtitle}
//                 </p>
//               </motion.div>
//             </AnimatePresence>

//             <div className="flex flex-wrap items-center gap-3.5">
//               <button
//                 type="button"
//                 onClick={() => onNavigate('request-a-quote')}
//                 className="glass-sheen btn btn-light inline-flex items-center justify-center gap-3 text-xs sm:text-sm uppercase tracking-[0.14em] font-bold px-8 py-4 cursor-pointer"
//               >
//                 <span>Request for Quote</span>
//                 <span className="material-symbols-outlined text-[18px] text-clay rtl:rotate-180">
//                   arrow_forward
//                 </span>
//               </button>

//               <button
//                 type="button"
//                 onClick={() => onNavigate('our-portfolio')}
//                 className="glass-sheen btn btn-outline-light inline-flex items-center justify-center gap-3 text-xs sm:text-sm uppercase tracking-[0.14em] font-semibold px-8 py-4 cursor-pointer"
//               >
//                 <span>{t.home.pillarsSection.projects.cta}</span>
//                 <span className="material-symbols-outlined text-[18px] text-clay">
//                   folder_open
//                 </span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 2. FACILITY SPECIFICATIONS */}
//       <section id="facility-section" className="w-full bg-surface py-16 lg:py-20 border-b border-line">
//         <div className="w-full max-w-7xl mx-auto px-5 lg:px-12">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
//             <motion.div
//               initial={{ opacity: 0, y: 18 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ amount: 0.2 }}
//               transition={{ duration: 0.5, ease: EASE_CURVE }}
//               className="lg:col-span-6 flex flex-col justify-center gap-4 min-h-[400px]"
//             >
//               <div className="flex items-center gap-3">
//                 <span className="font-mono text-xs uppercase tracking-[0.2em] text-clay font-bold">
//                   Facility Specifications
//                 </span>
//                 <span className="w-12 h-[2px] bg-[var(--color-clay)]" />
//               </div>

//               <h2 className="font-display text-3xl lg:text-4xl text-burgundy font-bold tracking-tight [text-wrap:balance]">
//                 Processing Plant, Doha, Qatar
//               </h2>

//               <div className="flex flex-col gap-3 text-sm lg:text-base text-muted">
//                 <div className="flex items-start gap-3">
//                   <span className="material-symbols-outlined text-clay text-[20px] shrink-0">factory</span>
//                   <div>
//                     <strong className="text-ink">Plant Area:</strong> 8,000 m² processing facility in New Industrial Area, Doha
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <span className="material-symbols-outlined text-clay text-[20px] shrink-0">precision_manufacturing</span>
//                   <div>
//                     <strong className="text-ink">Equipment Inventory:</strong> Lisec, Glaston, Bottero machinery (9 processing lines)
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <span className="material-symbols-outlined text-clay text-[20px] shrink-0">straighten</span>
//                   <div>
//                     <strong className="text-ink">Max Processing Size:</strong> 3660 × 5100 mm (cutting), 2400 × 4200 mm (tempering/lamination)
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <span className="material-symbols-outlined text-clay text-[20px] shrink-0">verified</span>
//                   <div>
//                     <strong className="text-ink">Quality Standards:</strong> ISO 9001:2015, ISO 14001:2015, OHSAS 45001:2018 certified
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 18 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ amount: 0.2 }}
//               transition={{ duration: 0.55, delay: 0.08, ease: EASE_CURVE }}
//               className="lg:col-span-6 relative flex"
//             >
//               <div className="w-full min-h-[280px] sm:min-h-[320px] lg:min-h-[380px] rounded-2xl overflow-hidden relative bg-burgundy border border-line shadow-card hover:shadow-card-hover transition-shadow duration-300 image-zoom">
//                 <SafeImage
//                   src={HOME_STORY_IMAGE}
//                   alt="Modern industrial glass manufacturing plant"
//                   className="w-full h-full object-cover"
//                   fallbackLabel="Panorama Processing Facility"
//                 />
//                 <div className="absolute bottom-5 start-5 end-5 sm:end-auto bg-white backdrop-blur-md rounded-xl p-4 shadow-xl border border-line/80">
//                   <div className="flex flex-col gap-2">
//                     <div className="flex items-center gap-2">
//                       <span className="font-display text-sm text-burgundy font-bold">ISO 9001 · 14001 · OHSAS 45001</span>
//                     </div>
//                     <div className="grid grid-cols-2 gap-3 text-xs">
//                       <div className="flex items-center gap-1.5 text-muted">
//                         <span className="material-symbols-outlined text-[16px]">calendar_today</span>
//                         <span>Est. 2015</span>
//                       </div>
//                       <div className="flex items-center gap-1.5 text-muted">
//                         <span className="material-symbols-outlined text-[16px]">location_on</span>
//                         <span>Doha, Qatar</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* 3. EQUIPMENT INVENTORY */}
//       <section id="equipment-section" className="w-full bg-canvas py-16 lg:py-20 relative overflow-hidden">
//         <div className="w-full max-w-[1200px] mx-auto px-5 lg:px-12 relative z-10">
//           <div className="reveal flex flex-col items-center text-center mb-14">
//             <span className="font-mono text-xs uppercase tracking-[0.2em] text-clay font-bold">
//               Equipment Inventory
//             </span>
//             <h2 className="font-display text-2xl sm:text-3xl lg:text-3xl text-burgundy font-bold mt-2">
//               Processing Machinery &amp; Capacity
//             </h2>
//             <p className="text-sm sm:text-base text-muted max-w-2xl mt-2.5">
//               Lisec, Glaston, and Bottero processing lines with certified tolerances and daily output capacities.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               { icon: 'content_cut', tag: 'CNC Cutting', value: <AnimatedCounter target={2500} suffix=" m²" />, label: 'Daily Cutting Capacity', desc: 'Lisec CNC (3660×5100mm) ±0.5mm tolerance, 2 lines.' },
//               { icon: 'thermostat', tag: 'Tempering', value: <AnimatedCounter target={2000} suffix=" m²" />, label: 'Flat Tempering / Day', desc: 'Glaston furnace 4–19mm (2400×4200mm), curve 6–12mm.' },
//               { icon: 'layers', tag: 'Lamination', value: '8.76–85mm', label: 'Lamination Range', desc: 'PVB/EVA lines (2400×4200mm), BR 01–BR 07 certified.' },
//               { icon: 'widgets', tag: 'IGU', value: <AnimatedCounter target={1050} suffix=" m²" />, label: 'IGU Production / Day', desc: 'Lisec IGU line 18–58mm, structural silicone bonding.' },
//             ].map((card, index) => (
//               <motion.div
//                 key={card.label}
//                 initial={{ opacity: 0, y: 18 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ amount: 0.2 }}
//                 transition={{ duration: 0.45, delay: index * 0.07, ease: EASE_CURVE }}
//                 className="card rounded-2xl p-6 flex flex-col"
//               >
//                 <div className="flex items-center justify-between mb-6">
//                   <span className="w-11 h-11 rounded-xl border border-line bg-canvas flex items-center justify-center text-clay">
//                     <span className="material-symbols-outlined text-[22px]">{card.icon}</span>
//                   </span>
//                   <span className="font-mono text-xs uppercase tracking-wider text-muted font-semibold">
//                     {card.tag}
//                   </span>
//                 </div>
//                 <div className="flex-1">
//                   <div className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-burgundy">
//                     {card.value}
//                   </div>
//                   <div className="font-display text-xs text-burgundy font-bold uppercase tracking-wider mt-2">
//                     {card.label}
//                   </div>
//                   <p className="text-xs text-muted mt-2 leading-relaxed">{card.desc}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 4. OUR PORTFOLIO OVERVIEW */}
//       <section id="portfolio-section" className="w-full bg-canvas py-16 lg:py-20 border-b border-line">
//         <div className="w-full max-w-7xl mx-auto px-5 lg:px-12">
//           <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
//             <div className="flex flex-col gap-2 max-w-2xl">
//               <div className="flex items-center gap-3">
//                 <span className="font-mono text-xs uppercase tracking-[0.2em] text-clay font-bold">
//                   Technical Capabilities
//                 </span>
//                 <span className="w-12 h-[2px] bg-[var(--color-clay)]" />
//               </div>
//               <h2 className="font-display text-2xl sm:text-3xl lg:text-3xl text-burgundy font-bold">
//                 Processing Services &amp; Products
//               </h2>
//               <p className="text-sm sm:text-base text-muted">
//                 EN 12600, EN 12150, ASTM C1036 compliant processing with certified quality documentation.
//               </p>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             {/* Pillar 1: Our Services */}
//             <motion.div
//               initial={{ opacity: 0, y: 18 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ amount: 0.15 }}
//               transition={{ duration: 0.45, ease: EASE_CURVE }}
//               className="card card-sand rounded-2xl p-6 lg:p-8 flex flex-col justify-between hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
//             >
//               <div className="flex flex-col">
//                 <div className="w-full h-48 sm:h-56 lg:h-64 rounded-xl overflow-hidden mb-6 relative bg-burgundy image-zoom">
//                   <SafeImage src={PORTFOLIO_PILLAR_IMAGES.services} alt="High-precision glass tempering furnace in action" className="w-full h-full object-cover" fallbackLabel="Industrial Glass Processing" />
//                   <div className="absolute inset-0 bg-gradient-to-t from-burgundy/60 to-transparent" />
//                 </div>

//                 <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-clay font-bold mb-2">
//                   <span>01 · Processing Services</span>
//                   <span>EN/ASTM</span>
//                 </div>

//                 <div className="flex items-center gap-3 mb-3">
//                   <span className="material-symbols-outlined text-clay text-[24px]">precision_manufacturing</span>
//                   <h3 className="font-display text-xl text-burgundy font-bold">Industrial Processing</h3>
//                 </div>
//                 <p className="text-xs sm:text-sm text-muted mb-4">EN 12600, EN 12150, ASTM C1036 compliant processing:</p>
//                 <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-muted mb-6">
//                   <li className="flex items-start gap-2.5">
//                     <span className="material-symbols-outlined text-clay text-[18px] shrink-0 mt-0.5">check_circle</span>
//                     <span><strong className="text-ink">CNC Cutting (±0.5mm):</strong> Lisec lines 3660×5100mm, 2,500 m²/day, shape/round/template cuts.</span>
//                   </li>
//                   <li className="flex items-start gap-2.5">
//                     <span className="material-symbols-outlined text-clay text-[18px] shrink-0 mt-0.5">check_circle</span>
//                     <span><strong className="text-ink">Flat &amp; Curve Tempering:</strong> 4–19mm flat (2400×4200mm, 2,000 m²/day), 6–12mm curve (1000mm radius).</span>
//                   </li>
//                   <li className="flex items-start gap-2.5">
//                     <span className="material-symbols-outlined text-clay text-[18px] shrink-0 mt-0.5">check_circle</span>
//                     <span><strong className="text-ink">PVB/EVA Lamination:</strong> 8.76–85mm, BR 01–BR 07 ballistic, humidity-controlled PVB line.</span>
//                   </li>
//                   <li className="flex items-start gap-2.5">
//                     <span className="material-symbols-outlined text-clay text-[18px] shrink-0 mt-0.5">check_circle</span>
//                     <span><strong className="text-ink">IGU &amp; Frame Bonding:</strong> 18–58mm (1,050 m²/day), Lisec structural silicone bonding.</span>
//                   </li>
//                 </ul>
//               </div>
//               <button type="button" onClick={() => onNavigate('our-portfolio', 'services-section')} className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-clay font-bold hover:text-clay-deep transition-colors duration-200 pt-3 border-t border-line text-start cursor-pointer">
//                 <span>View Services</span>
//                 <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform rtl:rotate-180">arrow_forward</span>
//               </button>
//             </motion.div>

//             {/* Pillar 2: Our Products */}
//             <motion.div
//               initial={{ opacity: 0, y: 18 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ amount: 0.15 }}
//               transition={{ duration: 0.45, delay: 0.08, ease: EASE_CURVE }}
//               className="card card-sand rounded-2xl p-6 lg:p-8 flex flex-col justify-between hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
//             >
//               <div className="flex flex-col">
//                 <div className="w-full h-48 sm:h-56 lg:h-64 rounded-xl overflow-hidden mb-6 relative bg-burgundy image-zoom">
//                   <SafeImage src={PORTFOLIO_PILLAR_IMAGES.products} alt="Architectural solar control Low-E glass samples" className="w-full h-full object-cover" fallbackLabel="Architectural Glass Catalog" />
//                   <div className="absolute inset-0 bg-gradient-to-t from-burgundy/60 to-transparent" />
//                 </div>

//                 <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-clay font-bold mb-2">
//                   <span>02 · Product Range</span>
//                   <span>4–85mm</span>
//                 </div>

//                 <div className="flex items-center gap-3 mb-3">
//                   <span className="material-symbols-outlined text-clay text-[24px]">category</span>
//                   <h3 className="font-display text-xl text-burgundy font-bold">Glass Products</h3>
//                 </div>
//                 <p className="text-xs sm:text-sm text-muted mb-4">EN 1279, EN 14449, ASTM E2190 certified products:</p>
//                 <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-muted mb-6">
//                   <li className="flex items-start gap-2.5">
//                     <span className="material-symbols-outlined text-clay text-[18px] shrink-0 mt-0.5">check_circle</span>
//                     <span><strong className="text-ink">IGU (18–58mm):</strong> Double/triple/curve, Low-E, silver coats, argon gas fill.</span>
//                   </li>
//                   <li className="flex items-start gap-2.5">
//                     <span className="material-symbols-outlined text-clay text-[18px] shrink-0 mt-0.5">check_circle</span>
//                     <span><strong className="text-ink">Laminated Safety (8.76–85mm):</strong> PVB, SentryGlas, EVA, BR 01–BR 07 ballistic, fire rated.</span>
//                   </li>
//                   <li className="flex items-start gap-2.5">
//                     <span className="material-symbols-outlined text-clay text-[18px] shrink-0 mt-0.5">check_circle</span>
//                     <span><strong className="text-ink">Tempered (4–19mm):</strong> Flat EN 12150, curve 6–12mm (1000mm radius), heat-strengthened.</span>
//                   </li>
//                   <li className="flex items-start gap-2.5">
//                     <span className="material-symbols-outlined text-clay text-[18px] shrink-0 mt-0.5">check_circle</span>
//                     <span><strong className="text-ink">Decorative (4–19mm):</strong> 2D/3D ceramic print (2440×3600mm), gradient sand blast, mirrors.</span>
//                   </li>
//                 </ul>
//               </div>
//               <button type="button" onClick={() => onNavigate('our-portfolio', 'products-section')} className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-clay font-bold hover:text-clay-deep transition-colors pt-3 border-t border-line text-start cursor-pointer">
//                 <span>Browse Product Catalog</span>
//                 <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform rtl:rotate-180">arrow_forward</span>
//               </button>
//             </motion.div>

//             {/* Pillar 3: Our Projects */}
//             <motion.div
//               initial={{ opacity: 0, y: 18 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ amount: 0.15 }}
//               transition={{ duration: 0.45, delay: 0.16, ease: EASE_CURVE }}
//               className="card card-sand rounded-2xl p-6 lg:p-8 flex flex-col justify-between hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
//             >
//               <div className="flex flex-col">
//                 <div className="w-full h-48 sm:h-56 lg:h-64 rounded-xl overflow-hidden mb-6 relative bg-burgundy image-zoom">
//                   <SafeImage src={PORTFOLIO_PILLAR_IMAGES.projects} alt="Monolithic modern glass skyscraper tower" className="w-full h-full object-cover" fallbackLabel="Built Architectural Landmarks" />
//                   <div className="absolute inset-0 bg-gradient-to-t from-burgundy/60 to-transparent" />
//                 </div>

//                 <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-clay font-bold mb-2">
//                   <span>03 · Completed Projects</span>
//                   <span>Qatar</span>
//                 </div>

//                 <div className="flex items-center gap-3 mb-3">
//                   <span className="material-symbols-outlined text-clay text-[24px]">domain</span>
//                   <h3 className="font-display text-xl text-burgundy font-bold">Project Portfolio</h3>
//                 </div>
//                 <p className="text-xs sm:text-sm text-muted mb-4">Regional landmarks with technical specifications:</p>
//                 <ul className="flex flex-col divide-y divide-line text-xs sm:text-sm text-muted mb-6">
//                   <li className="py-2.5 flex flex-col">
//                     <span className="font-mono text-[11px] text-clay uppercase font-bold">Commercial Tower · Doha</span>
//                     <span className="text-xs text-ink mt-0.5">12mm tempered facade, 18mm IGU, 3,500 m² glazing area</span>
//                   </li>
//                   <li className="py-2.5 flex flex-col">
//                     <span className="font-mono text-[11px] text-clay uppercase font-bold">Shopping Mall · Doha</span>
//                     <span className="text-xs text-ink mt-0.5">10mm laminated balustrades, 6mm curved skylights, 5,200 m²</span>
//                   </li>
//                   <li className="py-2.5 flex flex-col">
//                     <span className="font-mono text-[11px] text-clay uppercase font-bold">Hotel Complex · Doha</span>
//                     <span className="text-xs text-ink mt-0.5">12mm Low-E tempered, 20mm IGU, fire-rated lobby glazing</span>
//                   </li>
//                   <li className="py-2.5 flex flex-col">
//                     <span className="font-mono text-[11px] text-clay uppercase font-bold">Office Building · Doha</span>
//                     <span className="text-xs text-ink mt-0.5">Double silver Low-E IGU, structural silicone bonding, 4,800 m²</span>
//                   </li>
//                 </ul>
//               </div>
//               <button type="button" onClick={() => onNavigate('our-portfolio', 'projects-section')} className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-clay font-bold hover:text-clay-deep transition-colors duration-200 pt-3 border-t border-line text-start cursor-pointer">
//                 <span>Explore Projects Gallery</span>
//                 <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform rtl:rotate-180">arrow_forward</span>
//               </button>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* 5. QUALITY ASSURANCE */}
//       <section id="quality-section" className="w-full bg-surface py-16 lg:py-20 border-b border-line">
//         <div className="w-full max-w-7xl mx-auto px-5 lg:px-12">
//           <div className="reveal flex flex-col items-center text-center mb-12">
//             <span className="font-mono text-xs uppercase tracking-[0.2em] text-clay font-bold">Quality Assurance</span>
//             <h2 className="font-display text-2xl sm:text-3xl lg:text-3xl text-burgundy font-bold mt-2">QC Procedures &amp; Testing Equipment</h2>
//             <p className="text-sm sm:text-base text-muted max-w-2xl mt-2">ISO 9001:2015 certified quality management with in-house testing laboratory and documented QC procedures.</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.15 }} transition={{ duration: 0.45, ease: EASE_CURVE }} className="card card-sand rounded-2xl p-6">
//               <div className="flex items-center gap-3 mb-4">
//                 <span className="material-symbols-outlined text-clay text-[24px]">science</span>
//                 <h3 className="font-display text-lg text-burgundy font-bold">Test Equipment</h3>
//               </div>
//               <ul className="flex flex-col gap-2 text-sm text-muted">
//                 <li className="flex items-start gap-2"><span className="material-symbols-outlined text-clay text-[16px] shrink-0 mt-0.5">check_circle</span><span>Fragmentometer (EN 12600 impact testing)</span></li>
//                 <li className="flex items-start gap-2"><span className="material-symbols-outlined text-clay text-[16px] shrink-0 mt-0.5">check_circle</span><span>Heat soak furnace (NiS sulfide testing)</span></li>
//                 <li className="flex items-start gap-2"><span className="material-symbols-outlined text-clay text-[16px] shrink-0 mt-0.5">check_circle</span><span>Thickness gauge (±0.1mm accuracy)</span></li>
//                 <li className="flex items-start gap-2"><span className="material-symbols-outlined text-clay text-[16px] shrink-0 mt-0.5">check_circle</span><span>Flatness/deflection measurement tools</span></li>
//               </ul>
//             </motion.div>

//             <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.15 }} transition={{ duration: 0.45, delay: 0.08, ease: EASE_CURVE }} className="card card-sand rounded-2xl p-6">
//               <div className="flex items-center gap-3 mb-4">
//                 <span className="material-symbols-outlined text-clay text-[24px]">task_alt</span>
//                 <h3 className="font-display text-lg text-burgundy font-bold">QC Procedures</h3>
//               </div>
//               <ul className="flex flex-col gap-2 text-sm text-muted">
//                 <li className="flex items-start gap-2"><span className="material-symbols-outlined text-clay text-[16px] shrink-0 mt-0.5">check_circle</span><span>Incoming material inspection (thickness, visual defects)</span></li>
//                 <li className="flex items-start gap-2"><span className="material-symbols-outlined text-clay text-[16px] shrink-0 mt-0.5">check_circle</span><span>In-process quality checks (cutting, edging, drilling)</span></li>
//                 <li className="flex items-start gap-2"><span className="material-symbols-outlined text-clay text-[16px] shrink-0 mt-0.5">check_circle</span><span>Final inspection (dimensions, edge quality, packaging)</span></li>
//                 <li className="flex items-start gap-2"><span className="material-symbols-outlined text-clay text-[16px] shrink-0 mt-0.5">check_circle</span><span>Traceability documentation per batch</span></li>
//               </ul>
//             </motion.div>

//             <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.15 }} transition={{ duration: 0.45, delay: 0.16, ease: EASE_CURVE }} className="card card-sand rounded-2xl p-6">
//               <div className="flex items-center gap-3 mb-4">
//                 <span className="material-symbols-outlined text-clay text-[24px]">verified</span>
//                 <h3 className="font-display text-lg text-burgundy font-bold">Certifications</h3>
//               </div>
//               <ul className="flex flex-col gap-2 text-sm text-muted">
//                 <li className="flex items-start gap-2"><span className="material-symbols-outlined text-clay text-[16px] shrink-0 mt-0.5">check_circle</span><span>ISO 9001:2015 (Quality Management)</span></li>
//                 <li className="flex items-start gap-2"><span className="material-symbols-outlined text-clay text-[16px] shrink-0 mt-0.5">check_circle</span><span>ISO 14001:2015 (Environmental Management)</span></li>
//                 <li className="flex items-start gap-2"><span className="material-symbols-outlined text-clay text-[16px] shrink-0 mt-0.5">check_circle</span><span>OHSAS 45001:2018 (Health &amp; Safety)</span></li>
//                 <li className="flex items-start gap-2"><span className="material-symbols-outlined text-clay text-[16px] shrink-0 mt-0.5">check_circle</span><span>Annual third-party audit compliance</span></li>
//               </ul>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* 6. COMPLIANCE & STANDARDS */}
//       <section id="compliance-section" className="w-full bg-canvas py-16 lg:py-20 border-b border-line">
//         <div className="w-full max-w-7xl mx-auto px-5 lg:px-12">
//           <div className="reveal flex flex-col items-center text-center mb-12">
//             <span className="font-mono text-xs uppercase tracking-[0.2em] text-clay font-bold">Compliance &amp; Standards</span>
//             <h2 className="font-display text-2xl sm:text-3xl lg:text-3xl text-burgundy font-bold mt-2">International Standards Compliance</h2>
//             <p className="text-sm sm:text-base text-muted max-w-2xl mt-2">Products certified to European (EN), American (ASTM), and international standards with documented test reports.</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               { title: 'EN 12600', desc: 'Glass in building - Impact test method and classification for flat glass' },
//               { title: 'EN 12150', desc: 'Thermally toughened soda lime silicate safety glass - Requirements' },
//               { title: 'ASTM C1036', desc: 'Standard specification for flat glass - Quality specifications' },
//               { title: 'EN 1279', desc: 'Insulating glass units - Requirements and testing procedures' },
//             ].map((std, idx) => (
//               <motion.div key={std.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.15 }} transition={{ duration: 0.45, delay: idx * 0.08, ease: EASE_CURVE }} className="card rounded-xl p-5">
//                 <div className="flex items-center gap-2 mb-3">
//                   <span className="material-symbols-outlined text-clay text-[20px]">shield</span>
//                   <h3 className="font-display text-sm text-burgundy font-bold">{std.title}</h3>
//                 </div>
//                 <p className="text-xs text-muted leading-relaxed">{std.desc}</p>
//               </motion.div>
//             ))}
//           </div>

//           <div className="mt-8 card rounded-xl p-6">
//             <div className="flex flex-col md:flex-row items-center justify-between gap-4">
//               <div className="flex items-center gap-3">
//                 <span className="material-symbols-outlined text-clay text-[24px]">description</span>
//                 <div>
//                   <h4 className="font-display text-sm text-burgundy font-bold">Technical Documentation</h4>
//                   <p className="text-xs text-muted">Test reports, certificates, and data sheets available on request</p>
//                 </div>
//               </div>
//               <button type="button" onClick={() => onNavigate('contact-us')} className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-clay font-bold hover:text-clay-deep transition-colors px-6 py-3 border border-clay rounded-lg hover:bg-clay/5 cursor-pointer">
//                 <span>Request Documentation</span>
//                 <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 7. OUR LEADERS */}
//       <section id="leadership-section" className="w-full bg-surface py-16 lg:py-20">
//         <div className="w-full max-w-7xl mx-auto px-5 lg:px-12">
//           <div className="reveal flex flex-col items-center text-center mb-12">
//             <span className="font-mono text-xs uppercase tracking-[0.2em] text-clay font-bold">Executive Governance</span>
//             <h2 className="font-display text-2xl sm:text-3xl lg:text-3xl text-burgundy font-bold mt-2">Our Leadership Team</h2>
//             <p className="text-sm sm:text-base text-muted max-w-2xl mt-2">Guided by industry veterans in structural engineering, materials science, and plant operations.</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {LEADERS.map((leader, idx) => (
//               <motion.div key={leader.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.15 }} transition={{ duration: 0.45, delay: idx * 0.08, ease: EASE_CURVE }} className="card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group">
//                 <div className="w-full h-72 relative bg-canvas overflow-hidden image-zoom">
//                   <SafeImage src={leader.image} alt={leader.imageAlt} className="w-full h-full object-cover object-top" fallbackLabel={leader.name} />
//                   <div className="absolute inset-0 bg-gradient-to-t from-burgundy/40 via-transparent to-transparent" />
//                   <span className="absolute bottom-3.5 start-4 font-mono text-[11px] uppercase tracking-wider font-bold text-clay">{leader.divisionBadge}</span>
//                 </div>
//                 <div className="p-6 flex flex-col flex-1 justify-between gap-6">
//                   <div>
//                     <h3 className="font-display text-lg text-burgundy font-bold">{leader.name}</h3>
//                     <span className="font-mono text-xs uppercase tracking-wider font-semibold mt-0.5 block text-clay">{leader.role}</span>
//                     <p className="text-xs sm:text-sm text-muted mt-3 leading-relaxed">{leader.bio}</p>
//                   </div>
//                   <div className="pt-3 border-t border-line flex items-center justify-between text-ink font-mono text-xs">
//                     <span>{leader.credential}</span>
//                     <span className="font-bold text-clay tabular-nums">{leader.experience}</span>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 8. PRE-FOOTER CONSULTATION BANNER */}
//       <section id="contact-section" className="w-full bg-canvas text-ink py-16 border-t border-line">
//         <div className="w-full max-w-7xl mx-auto px-5 lg:px-12">
//           <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.2 }} transition={{ duration: 0.45, ease: EASE_CURVE }} className="card-dark rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden border border-sand/25">
//             <div className="absolute top-0 inset-x-0 h-1.5 bg-burgundy" />
//             <LogoPattern variant="dark" />

//             <div className="relative z-10 flex flex-col gap-3 max-w-2xl text-center lg:text-start">
//               <div className="inline-flex items-center justify-center lg:justify-start gap-2 text-clay font-mono text-xs uppercase tracking-[0.2em] font-semibold">
//                 Technical Glazing Consultations &amp; Estimations
//               </div>
//               <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-on-dark font-bold tracking-tight">
//                 Have a Bespoke Architectural Glass Requirement?
//               </h2>
//               <p className="text-sm sm:text-base text-clay leading-relaxed">
//                 Connect with our engineering specialists for technical consultations, product specifications, and competitive project tenders.
//               </p>

//               <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2 text-xs text-on-dark">
//                 <a href="tel:+97450777210" className="flex items-center gap-2 bg-white/30 px-3.5 py-2 rounded-lg border border-white/25 hover:bg-white/30 transition-colors tabular-nums focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sand focus-visible:ring-offset-2 focus-visible:ring-offset-slate">
//                   <span className="material-symbols-outlined text-clay text-[18px]">call</span>
//                   <span>(+974) 50777210</span>
//                 </a>
//                 <a href="mailto:info@panoramaglass.net" className="flex items-center gap-2 bg-white/30 px-3.5 py-2 rounded-lg border border-sand/45 hover:bg-white/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sand focus-visible:ring-offset-2 focus-visible:ring-offset-slate">
//                   <span className="material-symbols-outlined text-clay text-[18px]">mail</span>
//                   <span>info@panoramaglass.net</span>
//                 </a>
//                 <div className="flex items-center gap-2 bg-white/30 px-3.5 py-2 rounded-lg border border-white/25">
//                   <span className="material-symbols-outlined text-clay text-[18px]">schedule</span>
//                   <span>New Industrial Area · Doha, Qatar</span>
//                 </div>
//               </div>
//             </div>

//             <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
//               <button type="button" onClick={() => onNavigate('request-a-quote')} className="glass-sheen btn btn-secondary w-full sm:w-auto inline-flex items-center justify-center gap-3 font-display text-xs uppercase tracking-wider font-bold px-8 py-4 cursor-pointer">
//                 <span>Request for Quote</span>
//                 <span className="material-symbols-outlined text-[18px] text-burgundy-deep">description</span>
//               </button>
//               <button type="button" onClick={() => onNavigate('contact-us')} className="glass-sheen btn btn-outline-light w-full sm:w-auto inline-flex items-center justify-center gap-2.5 font-display text-xs uppercase tracking-wider font-semibold px-8 py-4 cursor-pointer">
//                 <span>{t.nav['contact-us']}</span>
//                 <span className="material-symbols-outlined text-[18px] text-clay">contact_support</span>
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }

import { useEffect, useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import type { Language, PageRoute } from '../types';
import {
  HERO_SLIDES,
  LEADERS,
  PORTFOLIO_PILLAR_IMAGES,
  PROCESSING_FACILITY_IMAGE,
} from '../data/panoramaData';
import { useTranslations } from '@/i18n';
import { SafeImage } from '../components/SafeImage';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { LogoPattern } from '../components/LogoPattern';

interface HomePageProps {
  language: Language;
  onNavigate: (route: PageRoute, hash?: string) => void;
}

const EASE_CURVE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const SLIDE_DURATION_MS = 5500;

// HERO DISPLAY CONFIGURATION
// 'slider' = Enable the original image carousel (currently active).
// 'video'  = Reserved for the factory background video (currently commented out).
const HERO_DISPLAY_MODE: 'slider' | 'video' = 'slider';

const getNextSlide = (current: number, count: number) => (current + 1) % count;

export function HomePage({ language, onNavigate }: HomePageProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isManuallyPaused, setIsManuallyPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const t = useTranslations(language);
  const slideCount = HERO_SLIDES.length;
  const safeActiveSlide = slideCount > 0 ? activeSlide % slideCount : 0;
  const currentSlide = HERO_SLIDES[safeActiveSlide];

  const showPreviousSlide = () => {
    if (slideCount > 1) {
      setActiveSlide((previous) => (previous - 1 + slideCount) % slideCount);
    }
  };

  useEffect(() => {
    if (typeof window.matchMedia !== 'function') return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener('change', updatePreference);
    return () => mediaQuery.removeEventListener('change', updatePreference);
  }, []);

  useEffect(() => {
    if (HERO_DISPLAY_MODE !== 'slider' || slideCount <= 1 || isManuallyPaused || prefersReducedMotion) return;

    const timer = window.setInterval(() => {
      setActiveSlide((previous) => getNextSlide(previous, slideCount));
    }, SLIDE_DURATION_MS);

    return () => window.clearInterval(timer);
  }, [isManuallyPaused, prefersReducedMotion, slideCount]);


  if (HERO_DISPLAY_MODE === 'slider' && !currentSlide) {
    return (
      <main className="flex min-h-[40vh] w-full items-center justify-center bg-canvas px-5 text-center text-ink">
        <p>Homepage banner content is currently unavailable.</p>
      </main>
    );
  }

  return (
    <MotionConfig reducedMotion="user">
      <div className="flex w-full flex-col bg-canvas text-ink">
        {/* HERO DISPLAY MODE
            Slider is enabled by default. The factory video section is retained below as a comment.
        */}
        {HERO_DISPLAY_MODE === 'slider' ? (
          <>
            {/* 1. HERO BANNER */}
            <section
              aria-label="Glass manufacturing services"
              aria-roledescription="carousel"
              className="relative isolate flex min-h-[24rem] w-full items-stretch overflow-hidden bg-ink-deep sm:min-h-[28rem] lg:min-h-[30rem]"
            >
              <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide.id}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.01 }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.95, ease: EASE_CURVE }}
                    className="absolute inset-0"
                  >
                    <SafeImage
                      src={currentSlide.image}
                      alt=""
                      className="h-full w-full object-cover object-center opacity-85"
                      fallbackLabel={currentSlide.serviceTag}
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-r from-ink-deep/90 via-ink-deep/65 to-ink-deep/25" />
                <LogoPattern variant="dark" className="opacity-20" />
              </div>

              <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-center px-5 pb-28 pt-16 sm:px-8 sm:pb-32 lg:px-12 lg:pb-36 lg:pt-24">
                <div className="relative max-w-2xl sm:ps-6">
                  <motion.div
                    key={`shutter-${currentSlide.id}`}
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ scaleY: 1, opacity: 1 }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.55, ease: EASE_CURVE }}
                    style={{ transformOrigin: 'top' }}
                    className="absolute inset-y-0 start-0 hidden w-1.5 bg-clay sm:block"
                    aria-hidden="true"
                  />

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide.id}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: prefersReducedMotion ? 0 : 0.45, ease: EASE_CURVE }}
                      role="group"
                      aria-roledescription="slide"
                      aria-label={`Slide ${safeActiveSlide + 1} of ${slideCount}`}
                      aria-live={isManuallyPaused ? 'polite' : 'off'}
                    >
                      <div className="eyebrow mb-4 flex items-center gap-3">
                        <span className="text-xs font-bold uppercase tracking-[0.22em] text-on-dark">
                          {currentSlide.eyebrow}
                        </span>
                      </div>

                      <h1 className="mb-5 text-3xl font-bold leading-[1.08] tracking-tight text-on-dark [text-wrap:balance] sm:text-5xl lg:text-[42px]">
                        {currentSlide.title}
                      </h1>

                      <p className="mb-8 max-w-xl text-sm leading-relaxed text-on-dark/90 sm:text-base lg:text-lg">
                        {currentSlide.subtitle}
                      </p>
                    </motion.div>
                  </AnimatePresence>

                  <div className="flex flex-wrap items-center gap-3.5">
                    <button
                      type="button"
                      onClick={() => onNavigate('request-a-quote')}
                      className="btn btn-light glass-sheen inline-flex min-h-12 items-center justify-center gap-3 px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] sm:px-8 sm:text-sm"
                    >
                      <span>Request for Quote</span>
                      <span className="material-symbols-outlined text-[18px] text-brand" aria-hidden="true">arrow_forward</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => onNavigate('our-portfolio')}
                      className="btn btn-outline-light glass-sheen inline-flex min-h-12 items-center justify-center gap-3 px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] sm:px-8 sm:text-sm"
                    >
                      <span>{t.home.pillarsSection.projects.cta}</span>
                      <span className="material-symbols-outlined text-[18px] text-on-dark" aria-hidden="true">folder_open</span>
                    </button>
                  </div>
                </div>
              </div>

            </section>
          </>
        ) : null}

        {/*
          VIDEO HERO SECTION — CURRENTLY DISABLED
          To enable the factory video later, change HERO_DISPLAY_MODE to 'video'
          and restore this section as the conditional video branch.

          <section
            aria-label="Panorama Glass factory video"
            className="relative isolate flex min-h-[32rem] w-full items-center overflow-hidden bg-ink-deep sm:min-h-[36rem] lg:min-h-[40rem]"
          >
            <div
              className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
              aria-hidden="true"
            >
              <video
                className="absolute inset-0 h-full w-full object-cover object-center"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster={PROCESSING_FACILITY_IMAGE}
                disablePictureInPicture
              >
                <source
                  src="/assets/videos/glass-manufacturing-factory.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink-deep/90 via-ink-deep/55 to-ink-deep/20" />
              <LogoPattern variant="dark" className="pointer-events-none opacity-15" />
            </div>

            <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-center px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
              <div className="max-w-2xl sm:ps-6">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-clay" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-on-dark">
                    Panorama Processing Facility
                  </span>
                </div>
                <h1 className="mb-5 max-w-2xl text-3xl font-bold leading-[1.08] tracking-tight text-on-dark [text-wrap:balance] sm:text-5xl lg:text-6xl">
                  Precision glass processing. Built for ambitious architecture.
                </h1>
                <p className="mb-8 max-w-xl text-sm leading-relaxed text-on-dark/90 sm:text-base lg:text-lg">
                  Discover our glass processing facility in Doha, Qatar, and see how specialist
                  equipment and experienced teams support architectural glass projects.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => onNavigate('request-a-quote')}
                    className="btn btn-light glass-sheen inline-flex min-h-12 items-center justify-center gap-3 px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] sm:px-8 sm:text-sm"
                  >
                    <span>Request a Quote</span>
                    <span className="material-symbols-outlined text-[18px] text-brand" aria-hidden="true">arrow_forward</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate('our-portfolio')}
                    className="btn btn-outline-light glass-sheen inline-flex min-h-12 items-center justify-center gap-3 px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] sm:px-8 sm:text-sm"
                  >
                    <span>{t.home.pillarsSection.projects.cta}</span>
                    <span className="material-symbols-outlined text-[18px] text-on-dark" aria-hidden="true">folder_open</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 end-5 z-10 rounded-full border border-on-dark/25 bg-ink-deep/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-on-dark/80 backdrop-blur-sm sm:bottom-6 sm:end-8">
              Panorama Glass Factory Tour
            </div>
          </section>
        */}

        {/* 2. FACILITY SPECIFICATIONS */}
        <section id="facility-section" className="w-full bg-surface py-16 lg:py-20 border-b border-line">
          <div className="w-full max-w-7xl mx-auto px-5 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.2 }}
                transition={{ duration: 0.5, ease: EASE_CURVE }}
                className="lg:col-span-6 flex flex-col justify-center gap-4 min-h-[400px]"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-clay-deep font-bold">
                    Facility Specifications
                  </span>
                  <span className="w-12 h-[2px] bg-[var(--color-clay)]" />
                </div>

                <h2 className="font-display text-3xl lg:text-4xl text-brand font-bold tracking-tight [text-wrap:balance]">
                  Processing Plant, Doha, Qatar
                </h2>

                <div className="flex flex-col gap-3 text-sm lg:text-base text-ink-muted">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-clay-deep text-[20px] shrink-0" aria-hidden="true">factory</span>
                    <div>
                      <strong className="text-ink">Plant Area:</strong> 8,000 m² processing facility in New Industrial Area, Doha
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-clay-deep text-[20px] shrink-0" aria-hidden="true">precision_manufacturing</span>
                    <div>
                      <strong className="text-ink">Equipment Inventory:</strong> Lisec, Glaston, Bottero machinery (9 processing lines)
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-clay-deep text-[20px] shrink-0" aria-hidden="true">straighten</span>
                    <div>
                      <strong className="text-ink">Max Processing Size:</strong> 3660 × 5100 mm (cutting), 2400 × 4200 mm (tempering/lamination)
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-clay-deep text-[20px] shrink-0" aria-hidden="true">verified</span>
                    <div>
                      <strong className="text-ink">Quality Standards:</strong> ISO 9001:2015, ISO 14001:2015, ISO 45001:2018 certified
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.2 }}
                transition={{ duration: 0.55, delay: 0.08, ease: EASE_CURVE }}
                className="lg:col-span-6 relative flex"
              >
                <div className="w-full min-h-[280px] sm:min-h-[320px] lg:min-h-[380px] rounded-2xl overflow-hidden relative bg-brand border border-line shadow-card hover:shadow-card-hover transition-shadow duration-300 image-zoom">
                  <SafeImage
                    src={PROCESSING_FACILITY_IMAGE}
                    alt="Panorama glass processing facility with glass sheets, roller conveyors and industrial processing machinery"
                    className="w-full h-full object-cover"
                    fallbackLabel="Panorama Processing Facility"
                  />
                  <div className="absolute bottom-5 start-5 end-5 sm:end-auto bg-surface backdrop-blur-md rounded-xl p-4 shadow-xl border border-line/80">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <span className="font-display text-sm text-brand font-bold">ISO 9001 · 14001 · 45001</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div className="flex items-center gap-1.5 text-ink-muted">
                          <span className="material-symbols-outlined text-[16px]" aria-hidden="true">calendar_today</span>
                          <span>Est. 2015</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-ink-muted">
                          <span className="material-symbols-outlined text-[16px]" aria-hidden="true">location_on</span>
                          <span>Doha, Qatar</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. EQUIPMENT INVENTORY */}
        <section id="equipment-section" className="w-full bg-canvas py-16 lg:py-20 relative overflow-hidden">
          <div className="w-full max-w-7xl mx-auto px-5 lg:px-12 relative z-10">
            <div className="reveal flex flex-col items-start text-start mb-14">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-clay-deep font-bold">
                Equipment Inventory
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-3xl text-brand font-bold mt-2">
                Processing Machinery &amp; Capacity
              </h2>
              <p className="text-sm sm:text-base text-ink-muted max-w-2xl mt-2.5">
                Lisec, Glaston, and Bottero processing lines with certified tolerances and daily output capacities.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: 'content_cut', tag: 'CNC Cutting', value: <AnimatedCounter target={2500} suffix=" m²" />, label: 'Daily Cutting Capacity', desc: 'Lisec CNC (3660×5100mm) ±0.5mm tolerance, 2 lines.' },
                { icon: 'thermostat', tag: 'Tempering', value: <AnimatedCounter target={2000} suffix=" m²" />, label: 'Flat Tempering / Day', desc: 'Glaston furnace 4–19mm (2400×4200mm), curve 6–12mm.' },
                { icon: 'layers', tag: 'Lamination', value: '8.76–85mm', label: 'Lamination Range', desc: 'PVB/EVA lines (2400×4200mm), BR 01–BR 07 certified.' },
                { icon: 'widgets', tag: 'IGU', value: <AnimatedCounter target={1050} suffix=" m²" />, label: 'IGU Production / Day', desc: 'Lisec IGU line 18–58mm, structural silicone bonding.' },
              ].map((card, index) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.07, ease: EASE_CURVE }}
                  className="card rounded-2xl p-6 flex flex-col"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-11 h-11 rounded-xl border border-line bg-canvas flex items-center justify-center text-clay-deep">
                      <span className="material-symbols-outlined text-[22px]" aria-hidden="true">{card.icon}</span>
                    </span>
                    <span className="font-mono text-xs uppercase tracking-wider text-ink-muted font-semibold">
                      {card.tag}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand">
                      {card.value}
                    </div>
                    <div className="font-display text-xs text-brand font-bold uppercase tracking-wider mt-2">
                      {card.label}
                    </div>
                    <p className="text-xs text-ink-muted mt-2 leading-relaxed">{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. OUR PORTFOLIO OVERVIEW */}
        <section id="portfolio-section" className="w-full bg-canvas py-16 lg:py-20 border-b border-line">
          <div className="w-full max-w-7xl mx-auto px-5 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="flex flex-col gap-2 max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-clay-deep font-bold">
                    Technical Capabilities
                  </span>
                  <span className="w-12 h-[2px] bg-[var(--color-clay)]" />
                </div>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-3xl text-brand font-bold">
                  Processing Services &amp; Products
                </h2>
                <p className="text-sm sm:text-base text-ink-muted">
                  EN 12600, EN 12150, ASTM C1036 compliant processing with certified quality documentation.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Pillar 1: Our Services */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.15 }}
                transition={{ duration: 0.45, ease: EASE_CURVE }}
                className="card card-sand rounded-2xl p-6 lg:p-8 flex flex-col justify-between group"
              >
                <div className="flex flex-col">
                  <div className="w-full h-48 sm:h-56 lg:h-64 rounded-xl overflow-hidden mb-6 relative bg-brand image-zoom">
                    <SafeImage src={PORTFOLIO_PILLAR_IMAGES.services} alt="High-precision glass tempering furnace in action" className="w-full h-full object-cover" fallbackLabel="Industrial Glass Processing" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand/60 to-transparent" />
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-clay-deep font-bold mb-2">
                    <span>01 · Processing Services</span>
                    <span>EN/ASTM</span>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <span className="material-symbols-outlined text-clay-deep text-[24px]" aria-hidden="true">precision_manufacturing</span>
                    <h3 className="font-display text-xl text-brand font-bold">Industrial Processing</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-ink-muted mb-4">EN 12600, EN 12150, ASTM C1036 compliant processing:</p>
                  <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-ink-muted mb-6">
                    <li className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-clay-deep text-[18px] shrink-0 mt-0.5" aria-hidden="true">check_circle</span>
                      <span><strong className="text-ink">CNC Cutting (±0.5mm):</strong> Lisec lines 3660×5100mm, 2,500 m²/day, shape/round/template cuts.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-clay-deep text-[18px] shrink-0 mt-0.5" aria-hidden="true">check_circle</span>
                      <span><strong className="text-ink">Flat &amp; Curve Tempering:</strong> 4–19mm flat (2400×4200mm, 2,000 m²/day), 6–12mm curve (1000mm radius).</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-clay-deep text-[18px] shrink-0 mt-0.5" aria-hidden="true">check_circle</span>
                      <span><strong className="text-ink">PVB/EVA Lamination:</strong> 8.76–85mm, BR 01–BR 07 ballistic, humidity-controlled PVB line.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-clay-deep text-[18px] shrink-0 mt-0.5" aria-hidden="true">check_circle</span>
                      <span><strong className="text-ink">IGU &amp; Frame Bonding:</strong> 18–58mm (1,050 m²/day), Lisec structural silicone bonding.</span>
                    </li>
                  </ul>
                </div>
                <button type="button" onClick={() => onNavigate('our-portfolio', 'services-section')} className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-clay-deep font-bold hover:text-clay-deep transition-colors duration-200 pt-3 border-t border-line text-start cursor-pointer">
                  <span>View Services</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform rtl:rotate-180" aria-hidden="true">arrow_forward</span>
                </button>
              </motion.div>

              {/* Pillar 2: Our Products */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.15 }}
                transition={{ duration: 0.45, delay: 0.08, ease: EASE_CURVE }}
                className="card card-sand rounded-2xl p-6 lg:p-8 flex flex-col justify-between group"
              >
                <div className="flex flex-col">
                  <div className="w-full h-48 sm:h-56 lg:h-64 rounded-xl overflow-hidden mb-6 relative bg-brand image-zoom">
                    <SafeImage src={PORTFOLIO_PILLAR_IMAGES.products} alt="Architectural solar control Low-E glass samples" className="w-full h-full object-cover" fallbackLabel="Architectural Glass Catalog" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand/60 to-transparent" />
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-clay-deep font-bold mb-2">
                    <span>02 · Product Range</span>
                    <span>4–85mm</span>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <span className="material-symbols-outlined text-clay-deep text-[24px]" aria-hidden="true">category</span>
                    <h3 className="font-display text-xl text-brand font-bold">Glass Products</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-ink-muted mb-4">EN 1279, EN 14449, ASTM E2190 certified products:</p>
                  <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-ink-muted mb-6">
                    <li className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-clay-deep text-[18px] shrink-0 mt-0.5" aria-hidden="true">check_circle</span>
                      <span><strong className="text-ink">IGU (18–58mm):</strong> Double/triple/curve, Low-E, silver coats, argon gas fill.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-clay-deep text-[18px] shrink-0 mt-0.5" aria-hidden="true">check_circle</span>
                      <span><strong className="text-ink">Laminated Safety (8.76–85mm):</strong> PVB, SentryGlas, EVA, BR 01–BR 07 ballistic, fire rated.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-clay-deep text-[18px] shrink-0 mt-0.5" aria-hidden="true">check_circle</span>
                      <span><strong className="text-ink">Tempered (4–19mm):</strong> Flat EN 12150, curve 6–12mm (1000mm radius), heat-strengthened.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-clay-deep text-[18px] shrink-0 mt-0.5" aria-hidden="true">check_circle</span>
                      <span><strong className="text-ink">Decorative (4–19mm):</strong> 2D/3D ceramic print (2440×3600mm), gradient sand blast, mirrors.</span>
                    </li>
                  </ul>
                </div>
                <button type="button" onClick={() => onNavigate('our-portfolio', 'products-section')} className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-clay-deep font-bold hover:text-clay-deep transition-colors pt-3 border-t border-line text-start cursor-pointer">
                  <span>Browse Product Catalog</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform rtl:rotate-180" aria-hidden="true">arrow_forward</span>
                </button>
              </motion.div>

              {/* Pillar 3: Our Projects */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.15 }}
                transition={{ duration: 0.45, delay: 0.16, ease: EASE_CURVE }}
                className="card card-sand rounded-2xl p-6 lg:p-8 flex flex-col justify-between group"
              >
                <div className="flex flex-col">
                  <div className="w-full h-48 sm:h-56 lg:h-64 rounded-xl overflow-hidden mb-6 relative bg-brand image-zoom">
                    <SafeImage src={PORTFOLIO_PILLAR_IMAGES.projects} alt="Monolithic modern glass skyscraper tower" className="w-full h-full object-cover" fallbackLabel="Built Architectural Landmarks" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand/60 to-transparent" />
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-clay-deep font-bold mb-2">
                    <span>03 · Completed Projects</span>
                    <span>Qatar</span>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <span className="material-symbols-outlined text-clay-deep text-[24px]" aria-hidden="true">domain</span>
                    <h3 className="font-display text-xl text-brand font-bold">Project Portfolio</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-ink-muted mb-4">Regional landmarks with technical specifications:</p>
                  <ul className="flex flex-col divide-y divide-line text-xs sm:text-sm text-ink-muted mb-6">
                    <li className="py-2.5 flex flex-col">
                      <span className="font-mono text-[11px] text-clay-deep uppercase font-bold">Commercial Tower · Doha</span>
                      <span className="text-xs text-ink mt-0.5">12mm tempered facade, 18mm IGU, 3,500 m² glazing area</span>
                    </li>
                    <li className="py-2.5 flex flex-col">
                      <span className="font-mono text-[11px] text-clay-deep uppercase font-bold">Shopping Mall · Doha</span>
                      <span className="text-xs text-ink mt-0.5">10mm laminated balustrades, 6mm curved skylights, 5,200 m²</span>
                    </li>
                    <li className="py-2.5 flex flex-col">
                      <span className="font-mono text-[11px] text-clay-deep uppercase font-bold">Hotel Complex · Doha</span>
                      <span className="text-xs text-ink mt-0.5">12mm Low-E tempered, 20mm IGU, fire-rated lobby glazing</span>
                    </li>
                    <li className="py-2.5 flex flex-col">
                      <span className="font-mono text-[11px] text-clay-deep uppercase font-bold">Office Building · Doha</span>
                      <span className="text-xs text-ink mt-0.5">Double silver Low-E IGU, structural silicone bonding, 4,800 m²</span>
                    </li>
                  </ul>
                </div>
                <button type="button" onClick={() => onNavigate('our-portfolio', 'projects-section')} className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-clay-deep font-bold hover:text-clay-deep transition-colors duration-200 pt-3 border-t border-line text-start cursor-pointer">
                  <span>Explore Projects Gallery</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform rtl:rotate-180" aria-hidden="true">arrow_forward</span>
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 5. QUALITY ASSURANCE */}
        <section id="quality-section" className="w-full bg-surface py-16 lg:py-20 border-b border-line">
          <div className="w-full max-w-7xl mx-auto px-5 lg:px-12">
            <div className="reveal flex flex-col items-start text-start mb-12">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-clay-deep font-bold">Quality Assurance</span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-3xl text-brand font-bold mt-2">QC Procedures &amp; Testing Equipment</h2>
              <p className="text-sm sm:text-base text-ink-muted max-w-2xl mt-2">ISO 9001:2015 certified quality management with in-house testing laboratory and documented QC procedures.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.15 }} transition={{ duration: 0.45, ease: EASE_CURVE }} className="card card-sand rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-clay-deep text-[24px]" aria-hidden="true">science</span>
                  <h3 className="font-display text-lg text-brand font-bold">Test Equipment</h3>
                </div>
                <ul className="flex flex-col gap-2 text-sm text-ink-muted">
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-clay-deep text-[16px] shrink-0 mt-0.5" aria-hidden="true">check_circle</span><span>Fragmentometer (EN 12600 impact testing)</span></li>
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-clay-deep text-[16px] shrink-0 mt-0.5" aria-hidden="true">check_circle</span><span>Heat soak furnace (NiS sulfide testing)</span></li>
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-clay-deep text-[16px] shrink-0 mt-0.5" aria-hidden="true">check_circle</span><span>Thickness gauge (±0.1mm accuracy)</span></li>
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-clay-deep text-[16px] shrink-0 mt-0.5" aria-hidden="true">check_circle</span><span>Flatness/deflection measurement tools</span></li>
                </ul>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.15 }} transition={{ duration: 0.45, delay: 0.08, ease: EASE_CURVE }} className="card card-sand rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-clay-deep text-[24px]" aria-hidden="true">task_alt</span>
                  <h3 className="font-display text-lg text-brand font-bold">QC Procedures</h3>
                </div>
                <ul className="flex flex-col gap-2 text-sm text-ink-muted">
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-clay-deep text-[16px] shrink-0 mt-0.5" aria-hidden="true">check_circle</span><span>Incoming material inspection (thickness, visual defects)</span></li>
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-clay-deep text-[16px] shrink-0 mt-0.5" aria-hidden="true">check_circle</span><span>In-process quality checks (cutting, edging, drilling)</span></li>
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-clay-deep text-[16px] shrink-0 mt-0.5" aria-hidden="true">check_circle</span><span>Final inspection (dimensions, edge quality, packaging)</span></li>
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-clay-deep text-[16px] shrink-0 mt-0.5" aria-hidden="true">check_circle</span><span>Traceability documentation per batch</span></li>
                </ul>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.15 }} transition={{ duration: 0.45, delay: 0.16, ease: EASE_CURVE }} className="card card-sand rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-clay-deep text-[24px]" aria-hidden="true">verified</span>
                  <h3 className="font-display text-lg text-brand font-bold">Certifications</h3>
                </div>
                <ul className="flex flex-col gap-2 text-sm text-ink-muted">
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-clay-deep text-[16px] shrink-0 mt-0.5" aria-hidden="true">check_circle</span><span>ISO 9001:2015 (Quality Management)</span></li>
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-clay-deep text-[16px] shrink-0 mt-0.5" aria-hidden="true">check_circle</span><span>ISO 14001:2015 (Environmental Management)</span></li>
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-clay-deep text-[16px] shrink-0 mt-0.5" aria-hidden="true">check_circle</span><span>ISO 45001:2018 (Health &amp; Safety)</span></li>
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-clay-deep text-[16px] shrink-0 mt-0.5" aria-hidden="true">check_circle</span><span>Annual third-party audit compliance</span></li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 6. COMPLIANCE & STANDARDS */}
        <section id="compliance-section" className="w-full bg-canvas py-16 lg:py-20 border-b border-line">
          <div className="w-full max-w-7xl mx-auto px-5 lg:px-12">
            <div className="reveal flex flex-col items-start text-start mb-12">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-clay-deep font-bold">Compliance &amp; Standards</span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-3xl text-brand font-bold mt-2">International Standards Compliance</h2>
              <p className="text-sm sm:text-base text-ink-muted max-w-2xl mt-2">Products certified to European (EN), American (ASTM), and international standards with documented test reports.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'EN 12600', desc: 'Glass in building - Impact test method and classification for flat glass' },
                { title: 'EN 12150', desc: 'Thermally toughened soda lime silicate safety glass - Requirements' },
                { title: 'ASTM C1036', desc: 'Standard specification for flat glass - Quality specifications' },
                { title: 'EN 1279', desc: 'Insulating glass units - Requirements and testing procedures' },
              ].map((std, idx) => (
                <motion.div key={std.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.15 }} transition={{ duration: 0.45, delay: idx * 0.08, ease: EASE_CURVE }} className="card rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="material-symbols-outlined text-clay-deep text-[20px]" aria-hidden="true">shield</span>
                    <h3 className="font-display text-sm text-brand font-bold">{std.title}</h3>
                  </div>
                  <p className="text-xs text-ink-muted leading-relaxed">{std.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 card rounded-xl p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-clay-deep text-[24px]" aria-hidden="true">description</span>
                  <div>
                    <h4 className="font-display text-sm text-brand font-bold">Technical Documentation</h4>
                    <p className="text-xs text-ink-muted">Test reports, certificates, and data sheets available on request</p>
                  </div>
                </div>
                <button type="button" onClick={() => onNavigate('contact-us')} className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-clay-deep font-bold hover:text-clay-deep transition-colors px-6 py-3 border border-clay-deep rounded-lg hover:bg-brand-soft cursor-pointer">
                  <span>Request Documentation</span>
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 7. OUR LEADERS */}
        <section id="leadership-section" className="w-full bg-surface py-16 lg:py-20">
          <div className="w-full max-w-7xl mx-auto px-5 lg:px-12">
            <div className="reveal flex flex-col items-start text-start mb-12">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-clay-deep font-bold">Executive Governance</span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-3xl text-brand font-bold mt-2">Our Leadership Team</h2>
              <p className="text-sm sm:text-base text-ink-muted max-w-2xl mt-2">Guided by industry veterans in structural engineering, materials science, and plant operations.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {LEADERS.map((leader, idx) => (
                <motion.div key={leader.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.15 }} transition={{ duration: 0.45, delay: idx * 0.08, ease: EASE_CURVE }} className="card rounded-2xl overflow-hidden flex flex-col group">
                  <div className="w-full h-72 relative bg-canvas overflow-hidden image-zoom">
                    <SafeImage src={leader.image} alt={leader.imageAlt} className="w-full h-full object-cover object-top" fallbackLabel={leader.name} />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand/40 via-transparent to-transparent" />
                    <span className="absolute bottom-3.5 start-4 font-mono text-[11px] uppercase tracking-wider font-bold text-canvas">{leader.divisionBadge}</span>
                  </div>
                  <div className="p-6 flex flex-col flex-1 justify-between gap-6">
                    <div>
                      <h3 className="font-display text-lg text-brand font-bold">{leader.name}</h3>
                      <span className="font-mono text-xs uppercase tracking-wider font-semibold mt-0.5 block text-clay-deep">{leader.role}</span>
                      <p className="text-xs sm:text-sm text-ink-muted mt-3 leading-relaxed">{leader.bio}</p>
                    </div>
                    <div className="pt-3 border-t border-line flex items-center justify-between text-ink font-mono text-xs">
                      <span>{leader.credential}</span>
                      <span className="font-bold text-clay-deep tabular-nums">{leader.experience}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. PRE-FOOTER CONSULTATION BANNER */}
        <motion.section
          id="contact-section"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.45, ease: EASE_CURVE }}
          className="w-full bg-canvas text-ink py-16 border-t border-line"
        >
          <div className="w-full max-w-7xl mx-auto px-5 lg:px-12">
            <motion.div className="card-dark rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden border border-on-dark/25">
              <div className="absolute top-0 inset-x-0 h-1.5 bg-brand" />
              <LogoPattern variant="dark" />

              <div className="relative z-10 flex flex-col gap-3 max-w-2xl text-center lg:text-start">
                <div className="inline-flex items-center justify-center lg:justify-start gap-2 text-on-dark font-mono text-xs uppercase tracking-[0.2em] font-semibold">
                  Technical Glazing Consultations &amp; Estimations
                </div>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-on-dark font-bold tracking-tight">
                  Have a Bespoke Architectural Glass Requirement?
                </h2>
                <p className="text-sm sm:text-base text-on-dark/90 leading-relaxed">
                  Connect with our engineering specialists for technical consultations, product specifications, and competitive project tenders.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2 text-xs text-on-dark">
                  <a
                    href="tel:+97450777210"
                    className="flex items-center gap-2 bg-canvas px-3.5 py-2 rounded-lg border border-line hover:bg-surface-alt transition-colors tabular-nums text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 focus-visible:ring-offset-ink-deep"
                  >
                    <span className="material-symbols-outlined text-clay-deep text-[18px]" aria-hidden="true">
                      call
                    </span>
                    <span>(+974) 50777210</span>
                  </a>

                  <a
                    href="mailto:info@panoramaglass.net"
                    className="flex items-center gap-2 bg-canvas px-3.5 py-2 rounded-lg border border-line hover:bg-surface-alt transition-colors text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 focus-visible:ring-offset-ink-deep"
                  >
                    <span className="material-symbols-outlined text-clay-deep text-[18px]" aria-hidden="true">
                      mail
                    </span>
                    <span>info@panoramaglass.net</span>
                  </a>
                  <div className="flex items-center gap-2 bg-on-dark/10 px-3.5 py-2 rounded-lg border border-on-dark/25">
                    <span className="material-symbols-outlined text-clay text-[18px]" aria-hidden="true">schedule</span>
                    <span>New Industrial Area · Doha, Qatar</span>
                  </div>
                </div>
              </div>

              <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
                <button type="button" onClick={() => onNavigate('request-a-quote')} className="glass-sheen btn btn-light w-full sm:w-auto inline-flex items-center justify-center gap-3 font-display text-xs uppercase tracking-wider font-bold px-8 py-4 cursor-pointer">
                  <span>Request for Quote</span>
                  <span className="material-symbols-outlined text-[18px] text-brand" aria-hidden="true">description</span>
                </button>
                <button type="button" onClick={() => onNavigate('contact-us')} className="glass-sheen btn btn-outline-light w-full sm:w-auto inline-flex items-center justify-center gap-2.5 font-display text-xs uppercase tracking-wider font-semibold px-8 py-4 cursor-pointer">
                  <span>{t.nav['contact-us']}</span>
                  <span className="material-symbols-outlined text-[18px] text-on-dark" aria-hidden="true">contact_support</span>
                </button>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </MotionConfig>
  );
}

