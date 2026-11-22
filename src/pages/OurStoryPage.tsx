// import { useState } from 'react';
// import { motion, AnimatePresence } from 'motion/react';
// import type { PageRoute } from '../types';
// import { CERTIFICATIONS } from '../data/panoramaData';
// import { AnimatedCounter } from '../components/AnimatedCounter';
// import { LogoPattern } from '../components/LogoPattern';

// interface OurStoryPageProps {
//   onNavigate: (route: PageRoute) => void;
//   onOpenCertificates: () => void;
// }

// const EASE_CURVE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// export function OurStoryPage({ onNavigate, onOpenCertificates }: OurStoryPageProps) {
//   const [expandedSection, setExpandedSection] = useState<string | null>(null);

//   return (
//     <div className="flex flex-col w-full bg-canvas text-graphite">

//       {/* 1. HERO SECTION */}
//       <section className="relative overflow-hidden w-full bg-canvas py-14 lg:py-20 border-b border-line">
//         <LogoPattern variant="light" />
//         <div className="relative z-10 max-w-[1440px] mx-auto px-5 lg:px-12 flex flex-col items-center text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.35, ease: EASE_CURVE }}
//             className="flex items-center gap-3 mb-5"
//           >
//             <span className="w-6 h-[2px] bg-clay" />
//             <span className="font-mono text-xs uppercase tracking-[0.2em] text-clay font-bold">
//               Our Heritage & Vision
//             </span>
//             <span className="w-6 h-[2px] bg-clay" />
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 14 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.45, delay: 0.05, ease: EASE_CURVE }}
//             className="font-display text-4xl sm:text-5xl text-burgundy max-w-4xl tracking-tight mb-5 font-bold [text-wrap:balance]"
//           >
//             Engineering Architectural{' '}
//             <span className="text-bronze">Transparency</span> & Enduring Trust
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 14 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.45, delay: 0.1, ease: EASE_CURVE }}
//             className="text-base lg:text-lg text-muted max-w-2xl leading-relaxed mb-8"
//           >
//             Established in Doha, Qatar in 2015 with a land area of 8,000 m², Panorama Glass Factory meets growing architectural demand with high-quality ISO-certified glass processing and trading services.
//           </motion.p>

//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6 w-full max-w-3xl pt-2">
//             {[
//               { val: <AnimatedCounter target={2015} />, label: 'Established Doha', color: 'text-burgundy' },
//               { val: <AnimatedCounter target={8000} suffix=" m²" />, label: 'Factory Area', color: 'text-clay' },
//               { val: <AnimatedCounter target={500} suffix=" +" />, label: 'Containers Stocked', color: 'text-burgundy' },
//               { val: '4 Divs', label: 'Trade & Process', color: 'text-clay' },
//             ].map((stat, idx) => (
//               <motion.div
//                 key={stat.label}
//                 initial={{ opacity: 0, y: 12 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.35, delay: 0.12 + idx * 0.05, ease: EASE_CURVE }}
//                 className="flex flex-col items-center p-4 rounded-xl bg-canvas border border-line shadow-card"
//               >
//                 <span className={`font-display text-2xl sm:text-3xl font-bold tabular-nums ${stat.color}`}>
//                   {stat.val}
//                 </span>
//                 <span className="font-mono text-[11px] uppercase tracking-wider text-muted mt-1 font-semibold">
//                   {stat.label}
//                 </span>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 2. TIMELINE SECTION */}
//       <section className="w-full bg-surface py-16 lg:py-20 border-b border-line">
//         <div className="max-w-[1440px] mx-auto px-5 lg:px-12">
//           <div className="reveal flex flex-col items-center text-center mb-12">
//             <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-clay mb-2">
//               Our Journey
//             </span>
//             <h2 className="font-display text-3xl lg:text-4xl font-bold text-burgundy tracking-tight">
//               Company Timeline
//             </h2>
//           </div>

//           <div className="max-w-3xl mx-auto space-y-0">
//             {[
//               { year: '2015', title: 'Established in Doha', desc: 'Founded with 8,000 m² processing plant in New Industrial Area' },
//               { year: '2016-2018', title: 'ISO Certification', desc: 'Achieved ISO 9001, 14001 & OHSAS 45001 certifications' },
//               { year: '2019-2022', title: 'Expansion', desc: 'Added curve tempering, lamination, and IGU production lines' },
//               { year: '2023-Present', title: 'Market Leader', desc: 'Leading curved glass processor in Qatar with 500+ containers stocked' },
//             ].map((item, idx) => (
//               <motion.div
//                 key={item.year}
//                 initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ amount: 0.2 }}
//                 transition={{ duration: 0.45, delay: idx * 0.1, ease: EASE_CURVE }}
//                 className="relative flex flex-col sm:flex-row gap-4 sm:gap-6 items-start"
//               >
//                 <div className="flex flex-col items-center">
//                   <div className="w-12 h-12 rounded-full bg-clay text-white font-mono text-sm font-bold flex items-center justify-center shrink-0 z-10">
//                     {item.year.slice(-2)}
//                   </div>
//                   {idx < 3 && <div className="w-0.5 flex-1 bg-line mt-2" />}
//                 </div>
//                 <div className="flex-1 pb-8">
//                   <h3 className="font-display text-lg font-bold text-burgundy">{item.title}</h3>
//                   <p className="text-sm text-muted mt-1">{item.desc}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 3. VISION, MISSION & QUALITY */}
//       <section className="w-full bg-canvas py-12 lg:py-16 border-b border-line">
//         <div className="max-w-[1440px] mx-auto px-5 lg:px-12">
//           <div className="reveal flex flex-col items-center text-center mb-10">
//             <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-clay mb-2">
//               Foundational Principles
//             </span>
//             <h2 className="font-display text-3xl lg:text-4xl font-bold text-burgundy tracking-tight">
//               Vision, Mission & Quality Policy
//             </h2>
//           </div>

//           <div className="max-w-3xl mx-auto space-y-4">
//             {[
//               { id: 'vision', num: '01', title: 'Our Vision', desc: 'To be a leading Glass Processor in Qatar and globally by providing excellence in Service, Quality, and Commitment.', icon: 'visibility' },
//               { id: 'mission', num: '02', title: 'Our Mission', desc: 'Exceed expectations through integrity, teamwork, and innovation; continuously improve product quality; and review measurable quality objectives.', icon: 'military_tech' },
//               { id: 'quality', num: '03', title: 'Quality Policy', desc: 'Use modern technology to meet customer requirements. Uphold strict Quality Management procedures and ongoing employee training as an ISO Certified Company.', icon: 'diamond' },
//             ].map((item) => (
//               <motion.div
//                 key={item.id}
//                 initial={{ opacity: 0, y: 10 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ amount: 0.1 }}
//                 className="rounded-xl bg-surface border border-line shadow-card overflow-hidden"
//               >
//                 <button
//                   type="button"
//                   onClick={() => setExpandedSection(expandedSection === item.id ? null : item.id)} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setExpandedSection(expandedSection === item.id ? null : item.id); } }}
//                   className="w-full flex items-center justify-between p-5 text-left cursor-pointer hover:bg-canvas transition-colors"
//                 >
//                   <div className="flex items-center gap-4">
//                     <span className="font-mono text-sm font-bold text-clay">{item.num}</span>
//                     <span className="material-symbols-outlined text-[20px] text-burgundy">{item.icon}</span>
//                     <h3 className="font-display text-lg font-bold text-burgundy">{item.title}</h3>
//                   </div>
//                   <span className={`material-symbols-outlined text-muted transition-transform ${expandedSection === item.id ? 'rotate-180' : ''}`}>
//                     expand_more
//                   </span>
//                 </button>
//                 <AnimatePresence>
//                   {expandedSection === item.id && (
//                     <motion.div
//                       initial={{ height: 0, opacity: 0 }}
//                       animate={{ height: 'auto', opacity: 1 }}
//                       exit={{ height: 0, opacity: 0 }}
//                       transition={{ duration: 0.3, ease: EASE_CURVE }}
//                       className="px-5 pb-5 pt-0"
//                     >
//                       <p className="text-sm text-muted leading-relaxed pl-6 sm:pl-14">{item.desc}</p>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 4. CERTIFICATIONS */}
//       <section className="w-full bg-surface py-16 lg:py-20 border-b border-line">
//         <div className="max-w-[1440px] mx-auto px-5 lg:px-12">
//           <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
//             <div className="flex flex-col max-w-2xl">
//               <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-clay mb-2">
//                 Standards Compliance
//               </span>
//               <h2 className="font-display text-3xl lg:text-4xl font-bold text-burgundy tracking-tight">
//                 ISO 9001:2015, ISO 14001:2015 & OHSAS 45001:2018
//               </h2>
//               <p className="text-sm sm:text-base text-muted mt-2">
//                 Maintaining documented Quality, Environmental, and Occupational Health & Safety Management Systems across our Doha factory.
//               </p>
//             </div>

//             <button
//               type="button"
//               onClick={onOpenCertificates}
//               className="glass-sheen btn btn-primary inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider shrink-0 group cursor-pointer"
//             >
//               <span>View Certifications</span>
//               <span className="material-symbols-outlined text-[18px] text-white group-hover:translate-x-1 transition-transform rtl:rotate-180">
//                 arrow_forward
//               </span>
//             </button>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {CERTIFICATIONS.map((cert, idx) => (
//               <motion.div
//                 key={cert.id}
//                 initial={{ opacity: 0, y: 16 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ amount: 0.15 }}
//                 transition={{ duration: 0.4, delay: idx * 0.06, ease: EASE_CURVE }}
//                 className="card card-sand p-6 flex flex-col justify-between"
//               >
//                 <div className="flex flex-col">
//                   <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 bg-clay/10 text-clay">
//                     <span className="material-symbols-outlined text-[24px]">{cert.icon}</span>
//                   </div>
//                   <span className="font-mono text-[11px] uppercase font-bold mb-1 text-clay">
//                     {cert.category}
//                   </span>
//                   <h3 className="font-display text-lg font-bold text-burgundy mb-2">
//                     {cert.title}
//                   </h3>
//                   <p className="text-xs text-muted leading-relaxed">{cert.description}</p>
//                 </div>
//                 <div className="mt-5 pt-3 flex items-center justify-between text-muted font-mono text-xs border-t border-line">
//                   <span>{cert.tier}</span>
//                   <span className="text-clay font-bold">{cert.status}</span>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 5. HUMAN CAPITAL */}
//       <section className="w-full bg-canvas py-16 lg:py-20 border-b border-line">
//         <div className="max-w-[1440px] mx-auto px-5 lg:px-12">
//           <div className="reveal flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
//             <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-clay mb-2">
//               Human Capital & Safety
//             </span>
//             <h2 className="font-display text-3xl lg:text-4xl font-bold text-burgundy tracking-tight">
//               A Culture of Precision, Safety & Continuous Mastery
//             </h2>
//             <p className="text-base text-muted mt-2 leading-relaxed">
//               Engineering excellence, zero-harm safety protocols, and continuous technical training across our fabrication lines.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {[
//               { icon: 'health_and_safety', title: 'Integrity & Teamwork', body: 'Providing a work environment that values integrity and encourages teamwork, innovation, and personal and professional growth at all levels.', check: 'OHSAS 45001:2018 Guided' },
//               { icon: 'psychology', title: 'Specialist Engineering Team', body: 'A highly specialized group of professionals who have worked with world-renowned glass manufacturing and processing companies.', check: 'Continuous Improvement & Training' },
//               { icon: 'groups', title: 'Customer Satisfaction Focus', body: 'Equipped with skilled staff with deep technical knowledge to ease customer workload and deliver professional, economical project support.', check: 'Measurable Quality Objectives' },
//             ].map((item, idx) => (
//               <motion.div
//                 key={item.title}
//                 initial={{ opacity: 0, y: 16 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ amount: 0.15 }}
//                 transition={{ duration: 0.45, delay: idx * 0.08, ease: EASE_CURVE }}
//                 className="card p-6 lg:p-8"
//               >
//                 <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 bg-clay/10 text-clay">
//                   <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
//                 </div>
//                 <h3 className="font-display text-lg font-bold text-burgundy mb-2">{item.title}</h3>
//                 <p className="text-sm text-muted leading-relaxed">{item.body}</p>
//                 <div className="mt-5 pt-3 border-t border-line flex items-center gap-2 font-mono text-xs font-semibold text-clay">
//                   <span className="material-symbols-outlined text-[16px]">check_circle</span>
//                   <span>{item.check}</span>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 6. PRE-FOOTER BANNER (FIXED LAYOUT) */}
//       <section className="w-full bg-canvas py-16 lg:py-20">
//         <div className="max-w-[1440px] mx-auto px-5 lg:px-12">
//           <div className="reveal relative overflow-hidden p-8 lg:p-12 rounded-3xl card-dark border border-sand/25 flex flex-col lg:flex-row items-center justify-between gap-8">
//             <div className="absolute top-0 inset-x-0 h-1.5 bg-burgundy" />
//             <LogoPattern variant="dark" />

//             {/* Text Section */}
//             <div className="relative z-10 flex flex-col gap-2 text-center lg:text-start max-w-xl">
//               <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-sand">
//                 Let's Build Together
//               </span>
//               <h2 className="font-display text-3xl lg:text-4xl font-bold text-on-dark tracking-tight">
//                 Have a Bespoke Architectural Glass Requirement?
//               </h2>
//               <p className="text-sm sm:text-base text-sand">
//                 Connect directly with our structural engineering advisors for project feasibility, solar heat load calculations, and fast-track quotations.
//               </p>
//             </div>

//             {/* Buttons Section */}
//             <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
//               <button
//                 type="button"
//                 onClick={() => onNavigate('request-a-quote')}
//                 className="glass-sheen btn btn-light w-full sm:w-auto inline-flex items-center justify-center gap-2 font-display text-xs uppercase tracking-wider font-bold px-7 py-4 cursor-pointer"
//               >
//                 <span>REQUEST FOR QUOTE</span>
//                 <span className="material-symbols-outlined text-[18px] text-clay-deep">
//                   trending_flat
//                 </span>
//               </button>
//               <button
//                 type="button"
//                 onClick={() => onNavigate('contact-us')}
//                 className="glass-sheen w-full sm:w-auto inline-flex items-center justify-center gap-2 btn btn-outline-light flex-1 sm:w-auto"
//               >
//                 <span>CONTACT US</span>
//                 <span className="material-symbols-outlined text-[18px] text-sand">
//                   phone_in_talk
//                 </span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// }

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import type { PageRoute } from '../types';
import { CERTIFICATIONS } from '../data/panoramaData';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { LogoPattern } from '../components/LogoPattern';

interface OurStoryPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenCertificates: () => void;
}

const EASE_CURVE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const TIMELINE = [
  {
    year: '2015',
    marker: '15',
    title: 'Established in Doha',
    desc: 'Founded with an 8,000 m² processing plant in New Industrial Area.',
  },
  {
    year: '2016–2018',
    marker: '16',
    title: 'ISO Certification',
    desc: 'Achieved ISO 9001, ISO 14001 and occupational health and safety certifications.',
  },
  {
    year: '2019–2022',
    marker: '19',
    title: 'Expansion',
    desc: 'Added curved tempering, lamination and IGU production lines.',
  },
  {
    year: '2023–Present',
    marker: '23+',
    title: 'Continued Growth',
    desc: 'Expanded glass processing capabilities and project support in Qatar.',
  },
];

const PRINCIPLES = [
  {
    id: 'vision',
    num: '01',
    title: 'Our Vision',
    desc: 'To be a leading glass processor in Qatar and globally by providing excellence in service, quality and commitment.',
    icon: 'visibility',
  },
  {
    id: 'mission',
    num: '02',
    title: 'Our Mission',
    desc: 'Exceed expectations through integrity, teamwork and innovation; continuously improve product quality; and review measurable quality objectives.',
    icon: 'military_tech',
  },
  {
    id: 'quality',
    num: '03',
    title: 'Quality Policy',
    desc: 'Use modern technology to meet customer requirements. Uphold strict quality management procedures and ongoing employee training as an ISO-certified company.',
    icon: 'diamond',
  },
];

const PEOPLE_AND_SAFETY = [
  {
    icon: 'health_and_safety',
    title: 'Integrity & Teamwork',
    body: 'Providing a work environment that values integrity and encourages teamwork, innovation, and personal and professional growth at all levels.',
    check: 'Safety-led working practices',
  },
  {
    icon: 'psychology',
    title: 'Specialist Engineering Team',
    body: 'A specialized group of professionals with experience in glass manufacturing and processing, focused on technical quality and continuous learning.',
    check: 'Continuous improvement & training',
  },
  {
    icon: 'groups',
    title: 'Customer Satisfaction Focus',
    body: 'Skilled staff with technical knowledge to support customer requirements and provide professional, economical project assistance.',
    check: 'Measurable quality objectives',
  },
];

export function OurStoryPage({ onNavigate, onOpenCertificates }: OurStoryPageProps) {
  const [selectedPrinciple, setSelectedPrinciple] =
    useState<(typeof PRINCIPLES)[number] | null>(null);

  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const shouldReduceMotion = useReducedMotion();

  const revealInitial = shouldReduceMotion ? false : { opacity: 0, y: 14 };
  const revealInView = shouldReduceMotion ? undefined : { opacity: 1, y: 0 };
  const revealTransition = (delay = 0) => ({
    duration: shouldReduceMotion ? 0 : 0.4,
    delay: shouldReduceMotion ? 0 : delay,
    ease: EASE_CURVE,
  });

  const openPrinciple = (
    item: (typeof PRINCIPLES)[number],
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    previousFocusRef.current = event.currentTarget;
    setSelectedPrinciple(item);
  };

  const closePrinciple = () => {
    setSelectedPrinciple(null);
  };

  useEffect(() => {
    if (!selectedPrinciple) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus the close button after the dialog mounts.
    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 0);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setSelectedPrinciple(null);
        return;
      }

      if (event.key !== 'Tab' || !modalRef.current) return;

      const focusable = modalRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href], input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [selectedPrinciple]);

  return (
    <main className="flex w-full flex-col bg-canvas text-ink">
      {/* 1. HERO SECTION */}
      <section
        aria-labelledby="our-story-heading"
        className="relative w-full overflow-hidden border-b border-line bg-canvas py-14 sm:py-16 lg:py-20"
      >
        <LogoPattern variant="light" />
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start px-5 text-start sm:px-8 lg:px-12">
          <motion.div
            initial={revealInitial}
            whileInView={revealInView}
            viewport={{ amount: 0.2 }}
            transition={revealTransition()}
            className="mb-5 flex items-center gap-3"
          >
            <span aria-hidden="true" className="h-0.5 w-6 bg-clay" />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-clay-deep">
              Our Heritage & Vision
            </span>
          </motion.div>

          <motion.h1
            id="our-story-heading"
            initial={revealInitial}
            whileInView={revealInView}
            viewport={{ amount: 0.2 }}
            transition={revealTransition(0.05)}
            className="mb-5 max-w-4xl font-display text-4xl font-bold tracking-tight text-brand sm:text-5xl [text-wrap:balance]"
          >
            Engineering Architectural{' '}
            <span className="text-clay-deep">Transparency</span> & Enduring Trust
          </motion.h1>

          <motion.p
            initial={revealInitial}
            whileInView={revealInView}
            viewport={{ amount: 0.2 }}
            transition={revealTransition(0.1)}
            className="mb-8 max-w-2xl text-base leading-relaxed text-ink-muted lg:text-lg"
          >
            Established in Doha, Qatar in 2015 with a land area of 8,000 m², Panorama Glass Factory
            meets growing architectural demand with glass processing and trading services.
          </motion.p>

          <div className="grid w-full max-w-3xl grid-cols-2 gap-3 pt-2 sm:grid-cols-4 sm:gap-4 lg:gap-6">
            {[
              { value: <AnimatedCounter target={2015} />, label: 'Established', color: 'text-brand' },
              { value: <AnimatedCounter target={8000} suffix=" m²" />, label: 'Factory area', color: 'text-clay-deep' },
              { value: <AnimatedCounter target={500} suffix="+" />, label: 'Containers stocked', color: 'text-brand' },
              { value: '4', label: 'Business divisions', color: 'text-clay-deep' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={revealInitial}
                whileInView={revealInView}
                viewport={{ amount: 0.2 }}
                transition={revealTransition(0.12 + index * 0.05)}
                className="flex min-w-0 flex-col items-center rounded-xl border border-line bg-surface-alt p-3 shadow-card sm:p-4"
              >
                <span className={`font-display text-2xl font-bold tabular-nums sm:text-3xl ${stat.color}`}>
                  {stat.value}
                </span>
                <span className="mt-1 text-center font-mono text-[10px] font-semibold uppercase tracking-wider text-ink-muted sm:text-[11px]">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. TIMELINE SECTION */}
      <section aria-labelledby="timeline-heading" className="w-full border-b border-line bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-12 flex flex-col items-start text-start">
            <span className="mb-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-clay-deep">
              Our Journey
            </span>
            <h2 id="timeline-heading" className="font-display text-3xl font-bold tracking-tight text-brand lg:text-4xl">
              Company Timeline
            </h2>
          </div>

          <ol className="mx-auto max-w-3xl">
            {TIMELINE.map((item, index) => (
              <motion.li
                key={item.year}
                initial={shouldReduceMotion ? false : { opacity: 0, x: index % 2 === 0 ? -16 : 16 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
                viewport={{ amount: 0.2 }}
                transition={revealTransition(index * 0.08)}
                className="relative flex items-stretch gap-4 sm:gap-6"
              >
                <div className="flex w-12 shrink-0 flex-col items-center self-stretch">
                  <span className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-clay-deep font-mono text-xs font-bold text-surface">
                    {item.marker}
                  </span>
                  {index < TIMELINE.length - 1 && (
                    <span aria-hidden="true" className="mt-2 min-h-8 w-0.5 flex-1 bg-line" />
                  )}
                </div>
                <div className="min-w-0 flex-1 pb-8 pt-1">
                  <p className="mb-1 font-mono text-xs font-bold uppercase tracking-wider text-clay-deep">
                    {item.year}
                  </p>
                  <h3 className="font-display text-lg font-bold text-brand">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">{item.desc}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* 3. VISION, MISSION & QUALITY */}
      {/* <section aria-labelledby="principles-heading" className="w-full border-b border-line bg-canvas py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-10 flex flex-col items-start text-start">
            <span className="mb-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-clay-deep">
              Foundational Principles
            </span>
            <h2 id="principles-heading" className="font-display text-3xl font-bold tracking-tight text-brand lg:text-4xl">
              Vision, Mission & Quality Policy
            </h2>
          </div>

          <div className="mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {PRINCIPLES.map((item) => (
              <motion.button
                key={item.id}
                type="button"
                initial={revealInitial}
                whileInView={revealInView}
                viewport={{ amount: 0.1 }}
                transition={revealTransition()}
                onClick={(event) => openPrinciple(item, event)}
                className="rounded-xl border border-line bg-surface shadow-card cursor-pointer hover:bg-surface-alt transition-colors focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-[-3px] w-full p-5 sm:p-6 group"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                  <span className="shrink-0 font-mono text-sm font-bold text-clay-deep">{item.num}</span>
                  <span aria-hidden="true" className="material-symbols-outlined text-xl text-brand">{item.icon}</span>
                  <span className="font-display text-base font-bold text-brand sm:text-lg">{item.title}</span>
                </div>
                <p className="text-sm leading-relaxed text-ink-muted">{item.desc}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </section> */}
      {/* 3. VISION, MISSION & QUALITY */}
      <section
        aria-labelledby="principles-heading"
        className="w-full border-b border-line bg-canvas py-12 lg:py-16"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-10 flex flex-col items-start text-start">
            <span className="mb-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-clay-deep">
              Foundational Principles
            </span>
            <h2
              id="principles-heading"
              className="font-display text-3xl font-bold tracking-tight text-brand lg:text-4xl"
            >
              Vision, Mission & Quality Policy
            </h2>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {PRINCIPLES.map((item, index) => (
              <motion.button
                key={item.id}
                type="button"
                initial={revealInitial}
                whileInView={revealInView}
                viewport={{ amount: 0.1 }}
                transition={revealTransition(index * 0.1)}
                onClick={(event) => openPrinciple(item, event)}
                aria-haspopup="dialog"
                className="group flex w-full cursor-pointer flex-col rounded-xl border border-line bg-surface p-5 text-left shadow-card transition-colors hover:border-clay-deep/40 hover:bg-surface-alt focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-brand sm:p-6"
              >
                <div className="mb-4 flex items-center gap-3 sm:gap-4">
                  <span className="shrink-0 font-mono text-sm font-bold text-clay-deep">
                    {item.num}
                  </span>
                  <span
                    aria-hidden="true"
                    className="material-symbols-outlined text-xl text-brand"
                  >
                    {item.icon}
                  </span>
                  <span className="font-display text-base font-bold text-brand sm:text-lg">
                    {item.title}
                  </span>
                </div>

                {/* Teaser only — full copy lives in the dialog */}
                <p className="line-clamp-3 text-sm leading-relaxed text-ink-muted">
                  {item.desc}
                </p>

                <span className="mt-auto inline-flex items-center gap-1 pt-4 font-mono text-[11px] font-bold uppercase tracking-wider text-clay-deep">
                  Read more
                  <span
                    aria-hidden="true"
                    className="material-symbols-outlined text-base transition-transform group-hover:translate-x-0.5 rtl:rotate-180"
                  >
                    arrow_forward
                  </span>
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CERTIFICATIONS */}
      <section aria-labelledby="certifications-heading" className="w-full border-b border-line bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="flex max-w-2xl flex-col">
              <span className="mb-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-clay-deep">
                Standards Compliance
              </span>
              <h2 id="certifications-heading" className="font-display text-3xl font-bold tracking-tight text-brand lg:text-4xl">
                ISO 9001:2015, ISO 14001:2015 & Occupational Health and Safety
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted sm:text-base">
                Maintaining documented quality, environmental and occupational health and safety management systems across our Doha factory.
              </p>
            </div>

            <button
              type="button"
              onClick={onOpenCertificates}
              className="btn btn-primary glass-sheen group inline-flex shrink-0 items-center gap-2 font-mono text-xs uppercase tracking-wider"
            >
              <span>View Certifications</span>
              <span aria-hidden="true" className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1 rtl:rotate-180">
                arrow_forward
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {CERTIFICATIONS.map((cert, index) => (
              <motion.article
                key={cert.id}
                initial={revealInitial}
                whileInView={revealInView}
                viewport={{ amount: 0.15 }}
                transition={revealTransition(index * 0.05)}
                className="card card-sand flex flex-col justify-between p-5 sm:p-6"
              >
                <div className="flex flex-col">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                    <span aria-hidden="true" className="material-symbols-outlined text-2xl">{cert.icon}</span>
                  </div>
                  <span className="mb-1 font-mono text-[11px] font-bold uppercase text-clay-deep">{cert.category}</span>
                  <h3 className="mb-2 font-display text-lg font-bold text-brand">{cert.title}</h3>
                  <p className="text-xs leading-relaxed text-ink-muted">{cert.description}</p>
                </div>
                <div className="mt-5 flex items-center justify-between gap-3 border-t border-line pt-3 font-mono text-xs text-ink-muted">
                  <span>{cert.tier}</span>
                  <span className="text-right font-bold text-clay-deep">{cert.status}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HUMAN CAPITAL */}
      <section aria-labelledby="people-heading" className="w-full border-b border-line bg-canvas py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-12 flex w-full flex-col items-start text-left">
            <span className="mb-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-clay-deep">
              Human Capital & Safety
            </span>

            <h2
              id="people-heading"
              className="font-display text-3xl font-bold tracking-tight text-brand lg:text-4xl"
            >
              A Culture of Precision, Safety & Continuous Mastery
            </h2>

            <p className="mt-2 text-base leading-relaxed text-ink-muted">
              Engineering excellence, safety protocols and continuous technical training across our fabrication lines.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
            {PEOPLE_AND_SAFETY.map((item, index) => (
              <motion.article
                key={item.title}
                initial={revealInitial}
                whileInView={revealInView}
                viewport={{ amount: 0.15 }}
                transition={revealTransition(index * 0.07)}
                className="card p-6 lg:p-8"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <span aria-hidden="true" className="material-symbols-outlined text-2xl">{item.icon}</span>
                </div>
                <h3 className="mb-2 font-display text-lg font-bold text-brand">{item.title}</h3>
                <p className="text-sm leading-relaxed text-ink-muted">{item.body}</p>
                <div className="mt-5 flex items-center gap-2 border-t border-line pt-3 font-mono text-xs font-semibold text-clay-deep">
                  <span aria-hidden="true" className="material-symbols-outlined text-base">check_circle</span>
                  <span>{item.check}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PRE-FOOTER CTA */}
      <section aria-labelledby="story-cta-heading" className="w-full bg-canvas py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="card-dark relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-3xl border border-line/25 p-7 sm:p-8 lg:flex-row lg:p-12">
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1.5 bg-brand" />
            <LogoPattern variant="dark" />

            <div className="relative z-10 flex max-w-xl flex-col gap-2 text-center lg:text-left">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-on-dark">
                Let's Build Together
              </span>
              <h2 id="story-cta-heading" className="font-display text-3xl font-bold tracking-tight text-on-dark lg:text-4xl">
                Have a Bespoke Architectural Glass Requirement?
              </h2>
              <p className="text-sm leading-relaxed text-on-dark sm:text-base">
                Connect with our structural engineering advisors for project feasibility, solar heat load calculations and quotations.
              </p>
            </div>

            <div className="relative z-10 flex w-full shrink-0 flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
              <button
                type="button"
                onClick={() => onNavigate('request-a-quote')}
                className="btn btn-light glass-sheen inline-flex w-full items-center justify-center gap-2 px-7 py-4 font-display text-xs font-bold uppercase tracking-wider sm:w-auto"
              >
                <span>Request a Quote</span>
                <span aria-hidden="true" className="material-symbols-outlined text-lg text-clay-deep">trending_flat</span>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('contact-us')}
                className="btn btn-outline-light glass-sheen inline-flex w-full items-center justify-center gap-2 px-7 py-4 font-display text-xs font-bold uppercase tracking-wider sm:w-auto"
              >
                <span>Contact Us</span>
                <span aria-hidden="true" className="material-symbols-outlined text-lg">phone_in_talk</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PRINCIPLE MODAL */}
      <AnimatePresence initial={false}>
        {selectedPrinciple && (
          <motion.div
            key="principle-dialog"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
            onClick={closePrinciple}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4 backdrop-blur-md sm:p-6"
          >
            <motion.div
              ref={modalRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="principle-dialog-title"
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.24, ease: EASE_CURVE }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg overflow-hidden rounded-xl border border-line bg-surface shadow-overlay"
            >
              <div className="flex items-start justify-between gap-4 border-b border-line px-5 py-4 sm:px-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm font-bold text-clay-deep">
                    {selectedPrinciple.num}
                  </span>
                  <h2
                    id="principle-dialog-title"
                    className="font-display text-xl font-bold tracking-tight text-brand"
                  >
                    {selectedPrinciple.title}
                  </h2>
                </div>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={closePrinciple}
                  aria-label="Close dialog"
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-ink-muted transition-colors hover:bg-canvas hover:text-ink focus-visible:ring-2 focus-visible:ring-brand"
                >
                  <span
                    aria-hidden="true"
                    className="material-symbols-outlined text-xl"
                  >
                    close
                  </span>
                </button>
              </div>

              <div className="px-5 py-5 sm:px-6">
                <p className="text-sm leading-relaxed text-ink-muted">
                  {selectedPrinciple.desc}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
