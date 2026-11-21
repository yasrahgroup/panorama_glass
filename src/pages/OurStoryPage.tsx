import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import type { PageRoute } from '../types';
import { CERTIFICATIONS } from '../data/panoramaData';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { LogoPattern } from '../components/LogoPattern';

interface OurStoryPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenCertificates: () => void;
}

const EASE_CURVE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function OurStoryPage({ onNavigate, onOpenCertificates }: OurStoryPageProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  return (
    <div className="flex flex-col w-full bg-[#f8fafc] text-[#0f172a]">
      {/* SECTION 1: Page Hero / Header Banner */}
      <section className="relative overflow-hidden w-full bg-logo-fins py-14 lg:py-20 border-b border-slate-200">
        <LogoPattern variant="light" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-5 lg:px-12 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: EASE_CURVE }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="w-6 h-[2px] bg-[#0284c7]" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#0284c7] font-bold">
              Our Heritage &amp; Vision
            </span>
            <span className="w-6 h-[2px] bg-[#0b192c]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05, ease: EASE_CURVE }}
            className="font-display text-4xl sm:text-5xl text-[#0b192c] max-w-4xl tracking-tight mb-5 font-bold [text-wrap:balance]"
          >
            Engineering Architectural{' '}
            <span className="text-[#0284c7]">Transparency</span> &amp; Enduring Trust
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1, ease: EASE_CURVE }}
            className="text-base lg:text-lg text-[#475569] max-w-2xl leading-relaxed mb-8"
          >
            Established in Doha, Qatar in 2015 with a land area of 8,000 m², Panorama Glass Factory meets growing architectural demand with high-quality ISO-certified glass processing and trading services.
          </motion.p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6 w-full max-w-3xl pt-2">
            {[
              { val: <AnimatedCounter target={2015} />, label: 'Established Doha', color: 'text-[#0284c7]' },
              { val: <AnimatedCounter target={8000} suffix=" m²" />, label: 'Factory Area', color: 'text-[#0b192c]' },
              { val: <AnimatedCounter target={500} suffix="+" />, label: 'Containers Stocked', color: 'text-[#0e7490]' },
              { val: '4 Divs', label: 'Trade & Process', color: 'text-[#0369a1]' },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.12 + idx * 0.05, ease: EASE_CURVE }}
                className="flex flex-col items-center p-4 rounded-xl bg-white border border-slate-200 shadow-sm"
              >
                <span className={`font-display text-2xl sm:text-3xl font-bold tabular-nums ${stat.color}`}>
                  {stat.val}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#64748b] mt-1 font-semibold">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Company Timeline */}
      <section className="w-full bg-white py-16 lg:py-20 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-12">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#0284c7] mb-2">
              Our Journey
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#0b192c] tracking-tight">
              Company Timeline
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              { year: '2015', title: 'Established in Doha', desc: 'Founded with 8,000 m² processing plant in New Industrial Area' },
              { year: '2016-2018', title: 'ISO Certification', desc: 'Achieved ISO 9001, 14001 & OHSAS 45001 certifications' },
              { year: '2019-2022', title: 'Expansion', desc: 'Added curve tempering, lamination, and IGU production lines' },
              { year: '2023-Present', title: 'Market Leader', desc: 'Leading curved glass processor in Qatar with 500+ containers stocked' },
            ].map((item, idx) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.1, ease: EASE_CURVE }}
                className="flex gap-6 items-start"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#0284c7] text-white font-mono text-sm font-bold flex items-center justify-center shrink-0">
                    {item.year.slice(-2)}
                  </div>
                  {idx < 3 && <div className="w-0.5 h-full bg-slate-200 mt-2" />}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="font-display text-lg font-bold text-[#0b192c]">{item.title}</h3>
                  <p className="text-sm text-[#475569] mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Core Values (Expandable) */}
      <section className="w-full bg-logo-fins-dark text-white py-12 lg:py-16 border-b border-slate-800">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-12">
          <div className="flex flex-col items-center text-center mb-10">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#38bdf8] mb-2">
              Foundational Principles
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Vision, Mission & Quality Policy
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                id: 'vision',
                num: '01',
                title: 'Our Vision',
                desc: 'To be a leading Glass Processor in Qatar and globally by providing excellence in Service, Quality, and Commitment.',
                accent: 'text-[#38bdf8]',
                icon: 'visibility',
              },
              {
                id: 'mission',
                num: '02',
                title: 'Our Mission',
                desc: 'Exceed expectations through integrity, teamwork, and innovation; continuously improve product quality; and review measurable quality objectives.',
                accent: 'text-[#22d3ee]',
                icon: 'military_tech',
              },
              {
                id: 'quality',
                num: '03',
                title: 'Quality Policy',
                desc: 'Use modern technology to meet customer requirements. Uphold strict Quality Management procedures and ongoing employee training as an ISO Certified Company.',
                accent: 'text-[#7dd3fc]',
                icon: 'diamond',
              },
            ].map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                className="rounded-xl bg-white/[0.04] border border-white/10 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setExpandedSection(expandedSection === item.id ? null : item.id)}
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer hover:bg-white/[0.06] transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className={`font-mono text-sm font-bold ${item.accent}`}>{item.num}</span>
                    <span className="material-symbols-outlined text-[20px] text-white">{item.icon}</span>
                    <h3 className="font-display text-lg font-bold text-white">{item.title}</h3>
                  </div>
                  <span className={`material-symbols-outlined transition-transform ${expandedSection === item.id ? 'rotate-180' : ''}`}>
                    expand_more
                  </span>
                </button>
                <AnimatePresence>
                  {expandedSection === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: EASE_CURVE }}
                      className="px-5 pb-5 pt-0"
                    >
                      <p className="text-sm text-slate-300 leading-relaxed pl-14">{item.desc}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Our Certifications */}
      <section className="w-full bg-white py-16 lg:py-20 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="flex flex-col max-w-2xl">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#0284c7] mb-2">
                Standards Compliance
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#0b192c] tracking-tight">
                ISO 9001:2015, ISO 14001:2015 &amp; OHSAS 45001:2018
              </h2>
              <p className="text-sm sm:text-base text-[#475569] mt-2">
                Maintaining documented Quality, Environmental, and Occupational Health &amp; Safety Management Systems across our Doha factory.
              </p>
            </div>

            <button
              type="button"
              onClick={onOpenCertificates}
              className="glass-sheen inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-md shrink-0 group cursor-pointer"
            >
              <span>View Certifications &amp; Quality Policy</span>
              <span className="material-symbols-outlined text-[18px] text-[#e0f2fe] group-hover:translate-x-1 transition-transform rtl:rotate-180">
                arrow_forward
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CERTIFICATIONS.map((cert, idx) => {
              const iconBg =
                cert.tone === 'amber'
                  ? 'bg-[#e0f2fe] text-[#0369a1]'
                  : cert.tone === 'sky'
                    ? 'bg-[#ecfeff] text-[#0e7490]'
                    : idx % 2 === 0
                      ? 'bg-slate-100 text-[#0b192c]'
                      : 'bg-[#e0f2fe] text-[#0284c7]';
              const categoryColor =
                cert.tone === 'amber'
                  ? 'text-[#0369a1]'
                  : cert.tone === 'sky'
                    ? 'text-[#0e7490]'
                    : idx % 2 === 0
                      ? 'text-[#0b192c]'
                      : 'text-[#0284c7]';
              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.4, delay: idx * 0.06, ease: EASE_CURVE }}
                  className="p-6 rounded-2xl bg-[#f8fafc] hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-200 flex flex-col justify-between"
                >
                  <div className="flex flex-col">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${iconBg}`}
                    >
                      <span className="material-symbols-outlined text-[24px]">{cert.icon}</span>
                    </div>
                    <span className={`font-mono text-[11px] uppercase font-bold mb-1 ${categoryColor}`}>
                      {cert.category}
                    </span>
                    <h3 className="font-display text-lg font-bold text-[#0b192c] mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-[#475569] leading-relaxed">{cert.description}</p>
                  </div>
                  <div className="mt-5 pt-3 flex items-center justify-between text-[#475569] font-mono text-xs border-t border-slate-200">
                    <span>{cert.tier}</span>
                    <span className="text-[#0284c7] font-bold">{cert.status}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: Workplace Culture */}
      <section className="w-full bg-logo-fins-subtle py-16 lg:py-20 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-12">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#0284c7] mb-2">
              Human Capital &amp; Safety
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#0b192c] tracking-tight">
              A Culture of Precision, Safety &amp; Continuous Mastery
            </h2>
            <p className="text-base text-[#475569] mt-2 leading-relaxed">
              Engineering excellence, zero-harm safety protocols, and continuous technical training across our fabrication lines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: 'health_and_safety',
                title: 'Integrity & Teamwork',
                body: 'Providing a work environment that values integrity and encourages teamwork, innovation, and personal and professional growth at all levels.',
                check: 'OHSAS 45001:2018 Guided',
                tone: 'text-[#0369a1] bg-[#e0f2fe]',
                checkColor: 'text-[#0369a1]',
              },
              {
                icon: 'psychology',
                title: 'Specialist Engineering Team',
                body: 'A highly specialized group of professionals who have worked with world-renowned glass manufacturing and processing companies.',
                check: 'Continuous Improvement & Training',
                tone: 'text-[#0284c7] bg-[#e0f2fe]',
                checkColor: 'text-[#0284c7]',
              },
              {
                icon: 'groups',
                title: 'Customer Satisfaction Focus',
                body: 'Equipped with skilled staff with deep technical knowledge to ease customer workload and deliver professional, economical project support.',
                check: 'Measurable Quality Objectives',
                tone: 'text-[#0e7490] bg-[#ecfeff]',
                checkColor: 'text-[#0e7490]',
              },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: EASE_CURVE }}
                className="p-6 lg:p-8 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 shadow-sm border border-slate-200"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${item.tone}`}>
                  <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-[#0b192c] mb-2">{item.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{item.body}</p>
                <div
                  className={`mt-5 pt-3 border-t border-slate-100 flex items-center gap-2 font-mono text-xs font-semibold ${item.checkColor}`}
                >
                  <span className="material-symbols-outlined text-[16px]">check_circle</span>
                  <span>{item.check}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Pre-Footer Call to Action Banner */}
      <section className="w-full bg-[#f8fafc] py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-12">
          <div className="relative overflow-hidden p-8 lg:p-12 rounded-3xl bg-logo-fins-dark text-white border border-[#38bdf8]/25 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="absolute top-0 inset-x-0 h-1.5 logo-gold-seam" />
            <LogoPattern variant="dark" />
            <div className="relative z-10 flex flex-col gap-2 text-center lg:text-start max-w-xl">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#38bdf8]">
                Let&apos;s Build Together
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Have a Bespoke Architectural Glass Requirement?
              </h2>
              <p className="text-sm sm:text-base text-slate-300">
                Connect directly with our structural engineering advisors for project feasibility, solar heat load calculations, and fast-track quotations.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => onNavigate('request-a-quote')}
                className="glass-sheen w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0284c7] hover:bg-[#0369a1] text-white font-display text-xs uppercase tracking-wider font-bold px-7 py-4 rounded-xl shadow-md transition-all cursor-pointer"
              >
                <span>REQUEST FOR QUOTE</span>
                <span className="material-symbols-outlined text-[18px] text-[#e0f2fe]">
                  trending_flat
                </span>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('contact-us')}
                className="glass-sheen w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-display text-xs uppercase tracking-wider font-bold px-7 py-4 rounded-xl border border-white/25 transition-all cursor-pointer"
              >
                <span>CONTACT US</span>
                <span className="material-symbols-outlined text-[18px] text-[#38bdf8]">
                  phone_in_talk
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
