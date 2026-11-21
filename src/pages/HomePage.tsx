import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import type { Language, PageRoute } from '../types';
import {
  HERO_SLIDES,
  HOME_STORY_IMAGE,
  LEADERS,
  PORTFOLIO_PILLAR_IMAGES,
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

export function HomePage({ language, onNavigate }: HomePageProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const t = useTranslations(language);

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, SLIDE_DURATION_MS);
    return () => window.clearInterval(timer);
  }, [isPaused]);

  const currentSlide = HERO_SLIDES[activeSlide];
  // const goPrev = () =>
  //   setActiveSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  // const goNext = () => setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);

  return (
    <div className="flex flex-col w-full bg-[#f8fafc] text-[#0f172a]">
      {/* 1. HERO BANNER — Video Placeholder */}
      {/* 
        DEVELOPER NOTE: 
        The hero slider below has been commented out to accommodate a video section.
        To enable the video section when the client provides a video asset:
        1. Uncomment and configure the video placeholder section below
        2. Remove the comment block around the video section
        3. Ensure the video file is properly hosted and accessible
        If no video is required, uncomment the original slider code below.
      */}
      
      {/* Video Placeholder Section */}
      {/* <section className="relative w-full min-h-[580px] lg:min-h-[670px] overflow-hidden bg-[#071426]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#050f1d]/92 via-[#0b192c]/62 to-[#071426]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050f1d]/85 via-transparent to-[#050f1d]/25" />
        <LogoPattern variant="dark" className="opacity-25" />
        
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 lg:px-12 pt-16 pb-12 lg:pt-24 lg:pb-16 flex-1 flex flex-col justify-center">
          <div className="max-w-2xl relative ps-0 sm:ps-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#38bdf8]" />
              <span className="text-xs uppercase tracking-[0.22em] font-bold text-[#38bdf8]">
                Video Coming Soon
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[54px] text-white tracking-tight font-bold leading-[1.08] mb-5 [text-wrap:balance]">
              Panorama Glass Factory
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-200 max-w-xl leading-relaxed mb-8">
              Company/product video will be displayed here when provided. Our state-of-the-art glass processing facility in Doha, Qatar delivers premium architectural glass solutions.
            </p>

            <div className="flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={() => onNavigate('request-a-quote')}
                className="glass-sheen inline-flex items-center justify-center gap-3 bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs sm:text-sm uppercase tracking-[0.14em] font-bold px-8 py-4 rounded-sm shadow-[0_10px_28px_rgba(2,132,199,0.35)] transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Request for Quote</span>
                <span className="material-symbols-outlined text-[18px] text-[#e0f2fe] rtl:rotate-180">
                  arrow_forward
                </span>
              </button>

              <button
                type="button"
                onClick={() => onNavigate('our-portfolio')}
                className="glass-sheen inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-xs sm:text-sm uppercase tracking-[0.14em] font-semibold px-8 py-4 rounded-sm border border-white/30 hover:border-[#38bdf8] transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View Portfolio</span>
                <span className="material-symbols-outlined text-[18px] text-[#38bdf8]">
                  folder_open
                </span>
              </button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Original Hero Slider (Commented out - can be re-enabled if video is not required) */}
      <section
        aria-roledescription="carousel"
        aria-label="Glass manufacturing services banner slider"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="relative w-full min-h-[420px] sm:min-h-[500px] lg:min-h-[550px] overflow-hidden flex flex-col justify-between bg-[#071426]"
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.01 }}
              transition={{ duration: 0.95, ease: EASE_CURVE }}
              className="absolute inset-0"
            >
              <SafeImage
                src={currentSlide.image}
                alt={currentSlide.imageAlt}
                className="w-full h-full object-cover object-center opacity-90"
                fallbackLabel={currentSlide.serviceTag}
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-r from-[#050f1d]/92 via-[#0b192c]/62 to-[#071426]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050f1d]/85 via-transparent to-[#050f1d]/25" />
          <LogoPattern variant="dark" className="opacity-25" />
        </div>
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 lg:px-12 pt-16 pb-12 lg:pt-24 lg:pb-16 flex-1 flex flex-col justify-center">
          <div className="max-w-2xl relative ps-0 sm:ps-6">
            <motion.div
              key={`shutter-${currentSlide.id}`}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 0.55, ease: EASE_CURVE }}
              style={{ transformOrigin: 'top', backgroundColor: currentSlide.accent || '#38bdf8' }}
              className="hidden sm:block absolute start-0 top-1 bottom-2 w-[3px]"
              aria-hidden="true"
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: EASE_CURVE }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="w-8 h-[2px]"
                    style={{ backgroundColor: currentSlide.accent || '#38bdf8' }}
                  />
                  <span
                    className="text-xs uppercase tracking-[0.22em] font-bold"
                    style={{ color: currentSlide.accent || '#38bdf8' }}
                  >
                    {currentSlide.eyebrow}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-[42px] text-white tracking-tight font-bold leading-[1.08] mb-5 [text-wrap:balance]">
                  {currentSlide.title}
                </h1>

                <p className="text-sm sm:text-base lg:text-lg text-slate-200 max-w-xl leading-relaxed mb-8">
                  {currentSlide.subtitle}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={() => onNavigate('request-a-quote')}
                className="glass-sheen inline-flex items-center justify-center gap-3 bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs sm:text-sm uppercase tracking-[0.14em] font-bold px-8 py-4 rounded-sm shadow-[0_10px_28px_rgba(2,132,199,0.35)] transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Request for Quote</span>
                <span className="material-symbols-outlined text-[18px] text-[#e0f2fe] rtl:rotate-180">
                  arrow_forward
                </span>
              </button>

              <button
                type="button"
                onClick={() => onNavigate('our-portfolio')}
                className="glass-sheen inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-xs sm:text-sm uppercase tracking-[0.14em] font-semibold px-8 py-4 rounded-sm border border-white/30 hover:border-[#38bdf8] transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <span>{t.home.pillarsSection.projects.cta}</span>
                <span className="material-symbols-outlined text-[18px] text-[#38bdf8]">
                  folder_open
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FACILITY SPECIFICATIONS */}
      <section
        id="facility-section"
        className="w-full bg-white py-16 lg:py-20 border-b border-slate-200"
      >
        <div className="w-full max-w-[1200px] mx-auto px-5 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: EASE_CURVE }}
              className="lg:col-span-6 flex flex-col justify-center gap-4"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#0284c7] font-bold">
                  Facility Specifications
                </span>
                <span className="w-12 h-[2px] bg-[#0b192c]" />
              </div>

              <h2 className="font-display text-3xl lg:text-4xl text-[#0b192c] font-bold tracking-tight [text-wrap:balance]">
                Processing Plant, Doha, Qatar
              </h2>

              <div className="flex flex-col gap-3 text-sm lg:text-base text-[#475569]">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#0284c7] text-[20px] shrink-0">factory</span>
                  <div>
                    <strong className="text-[#0f172a]">Plant Area:</strong> 8,000 m² processing facility in New Industrial Area, Doha
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#0284c7] text-[20px] shrink-0">precision_manufacturing</span>
                  <div>
                    <strong className="text-[#0f172a]">Equipment Inventory:</strong> Lisec, Glaston, Bottero machinery (9 processing lines)
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#0284c7] text-[20px] shrink-0">straighten</span>
                  <div>
                    <strong className="text-[#0f172a]">Max Processing Size:</strong> 3660 × 5100 mm (cutting), 2400 × 4200 mm (tempering/lamination)
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#0284c7] text-[20px] shrink-0">verified</span>
                  <div>
                    <strong className="text-[#0f172a]">Quality Standards:</strong> ISO 9001:2015, ISO 14001:2015, OHSAS 45001:2018 certified
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.08, ease: EASE_CURVE }}
              className="lg:col-span-6 relative flex"
            >
              <div className="w-full min-h-[280px] sm:min-h-[320px] lg:min-h-[380px] rounded-2xl overflow-hidden relative bg-[#0b192c] border border-slate-200 shadow-xl group">
                <SafeImage
                  src={HOME_STORY_IMAGE}
                  alt="Modern industrial glass manufacturing plant"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  fallbackLabel="Panorama Processing Facility"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071426]/85 via-transparent to-transparent" />
                <div className="absolute bottom-5 start-5 end-5 sm:end-auto bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl border border-slate-200/80">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-display text-sm text-[#0b192c] font-bold">ISO 9001 · 14001 · OHSAS 45001</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="flex items-center gap-1.5 text-[#0284c7]">
                        <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                        <span>Est. 2015</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[#0284c7]">
                        <span className="material-symbols-outlined text-[16px]">location_on</span>
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
      <section
        id="equipment-section"
        className="w-full bg-logo-fins-dark text-white py-16 lg:py-20 relative overflow-hidden"
      >
        <div className="w-full max-w-[1200px] mx-auto px-5 lg:px-12 relative z-10">
          <div className="flex flex-col items-center text-center mb-14">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#38bdf8] font-bold">
              Equipment Inventory
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-3xl text-white font-bold mt-2">
              Processing Machinery &amp; Capacity
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mt-2.5">
              Lisec, Glaston, and Bottero processing lines with certified tolerances and daily output capacities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: 'content_cut',
                tag: 'CNC Cutting',
                value: <AnimatedCounter target={2500} suffix=" m²" />,
                label: 'Daily Cutting Capacity',
                desc: 'Lisec CNC (3660×5100mm) ±0.5mm tolerance, 2 lines.',
                accent: 'text-[#38bdf8]',
                iconBg: 'bg-[#0284c7]/20 text-[#7dd3fc] border-[#38bdf8]/30',
              },
              {
                icon: 'thermostat',
                tag: 'Tempering',
                value: <AnimatedCounter target={2000} suffix=" m²" />,
                label: 'Flat Tempering / Day',
                desc: 'Glaston furnace 4–19mm (2400×4200mm), curve 6–12mm.',
                accent: 'text-[#7dd3fc]',
                iconBg: 'bg-[#0284c7]/20 text-[#38bdf8] border-[#38bdf8]/30',
              },
              {
                icon: 'layers',
                tag: 'Lamination',
                value: '8.76–85mm',
                label: 'Lamination Range',
                desc: 'PVB/EVA lines (2400×4200mm), BR 01–BR 07 certified.',
                accent: 'text-[#22d3ee]',
                iconBg: 'bg-[#0e7490]/25 text-[#67e8f9] border-[#22d3ee]/30',
              },
              {
                icon: 'widgets',
                tag: 'IGU',
                value: <AnimatedCounter target={1050} suffix=" m²" />,
                label: 'IGU Production / Day',
                desc: 'Lisec IGU line 18–58mm, structural silicone bonding.',
                accent: 'text-[#60a5fa]',
                iconBg: 'bg-[#1d4ed8]/25 text-[#93c5fd] border-[#60a5fa]/30',
              },
            ].map((card, index) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.07, ease: EASE_CURVE }}
                className="glass-sheen bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-md rounded-2xl p-6 transition-all duration-300 border border-white/10 hover:border-[#38bdf8]/50 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-6">
                  <span
                    className={`w-11 h-11 rounded-xl border flex items-center justify-center ${card.iconBg}`}
                  >
                    <span className="material-symbols-outlined text-[22px]">{card.icon}</span>
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider text-slate-300 font-semibold">
                    {card.tag}
                  </span>
                </div>
                <div>
                  <div
                    className={`font-display text-3xl sm:text-4xl font-bold tracking-tight ${card.accent}`}
                  >
                    {card.value}
                  </div>
                  <div className="font-display text-xs text-white font-bold uppercase tracking-wider mt-2">
                    {card.label}
                  </div>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR PORTFOLIO OVERVIEW (3 Pillars with Editorial Numbering) */}
      <section
        id="portfolio-section"
        className="w-full bg-logo-fins py-16 lg:py-20 border-b border-slate-200"
      >
        <div className="w-full max-w-[1200px] mx-auto px-5 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="flex flex-col gap-2 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#0284c7] font-bold">
                  Technical Capabilities
                </span>
                <span className="w-12 h-[2px] bg-[#0b192c]" />
              </div>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-3xl text-[#0b192c] font-bold">
                Processing Services &amp; Products
              </h2>
              <p className="text-sm sm:text-base text-[#475569]">
                EN 12600, EN 12150, ASTM C1036 compliant processing with certified quality documentation.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Pillar 1: Our Services */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, ease: EASE_CURVE }}
              className="bg-white rounded-2xl p-6 lg:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-200 group"
            >
              <div className="flex flex-col">
                <div className="w-full h-48 sm:h-56 rounded-xl overflow-hidden mb-6 relative bg-[#0b192c]">
                  <SafeImage
                    src={PORTFOLIO_PILLAR_IMAGES.services}
                    alt="High-precision glass tempering furnace in action"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    fallbackLabel="Industrial Glass Processing"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071426]/60 via-transparent to-transparent" />
                </div>

                <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-[#0284c7] font-bold mb-2">
                  <span>01 · Processing Services</span>
                  <span>EN/ASTM</span>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <span className="material-symbols-outlined text-[#0284c7] text-[24px]">
                    precision_manufacturing
                  </span>
                  <h3 className="font-display text-xl text-[#0b192c] font-bold">Industrial Processing</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] mb-4">
                  EN 12600, EN 12150, ASTM C1036 compliant processing:
                </p>
                <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-[#475569] mb-6">
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#0284c7] text-[18px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span>
                      <strong className="text-[#0f172a]">CNC Cutting (±0.5mm):</strong>{' '}
                      Lisec lines 3660×5100mm, 2,500 m²/day, shape/round/template cuts.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#0284c7] text-[18px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span>
                      <strong className="text-[#0f172a]">Flat &amp; Curve Tempering:</strong> 4–19mm
                      flat (2400×4200mm, 2,000 m²/day), 6–12mm curve (1000mm radius).
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#0284c7] text-[18px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span>
                      <strong className="text-[#0f172a]">PVB/EVA Lamination:</strong>{' '}
                      8.76–85mm, BR 01–BR 07 ballistic, humidity-controlled PVB line.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#0284c7] text-[18px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span>
                      <strong className="text-[#0f172a]">IGU &amp; Frame Bonding:</strong>{' '}
                      18–58mm (1,050 m²/day), Lisec structural silicone bonding.
                    </span>
                  </li>
                </ul>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('our-portfolio', 'services-section')}
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#0284c7] font-bold hover:text-[#0b192c] transition-colors pt-3 border-t border-slate-100 text-start cursor-pointer"
              >
                <span>View Services</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform rtl:rotate-180">
                  arrow_forward
                </span>
              </button>
            </motion.div>

            {/* Pillar 2: Our Products */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: 0.08, ease: EASE_CURVE }}
              className="bg-white rounded-2xl p-6 lg:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-200 group"
            >
              <div className="flex flex-col">
                <div className="w-full h-48 sm:h-56 rounded-xl overflow-hidden mb-6 relative bg-[#0b192c]">
                  <SafeImage
                    src={PORTFOLIO_PILLAR_IMAGES.products}
                    alt="Architectural solar control Low-E glass samples"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    fallbackLabel="Architectural Glass Catalog"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071426]/60 via-transparent to-transparent" />
                </div>

                <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-[#0e7490] font-bold mb-2">
                  <span>02 · Product Range</span>
                  <span>4–85mm</span>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <span className="material-symbols-outlined text-[#0e7490] text-[24px]">
                    category
                  </span>
                  <h3 className="font-display text-xl text-[#0b192c] font-bold">Glass Products</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] mb-4">
                  EN 1279, EN 14449, ASTM E2190 certified products:
                </p>
                <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-[#475569] mb-6">
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#0e7490] text-[18px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span>
                      <strong className="text-[#0f172a]">IGU (18–58mm):</strong>{' '}
                      Double/triple/curve, Low-E, silver coats, argon gas fill.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#0e7490] text-[18px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span>
                      <strong className="text-[#0f172a]">Laminated Safety (8.76–85mm):</strong>{' '}
                      PVB, SentryGlas, EVA, BR 01–BR 07 ballistic, fire rated.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#0e7490] text-[18px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span>
                      <strong className="text-[#0f172a]">Tempered (4–19mm):</strong>{' '}
                      Flat EN 12150, curve 6–12mm (1000mm radius), heat-strengthened.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#0e7490] text-[18px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span>
                      <strong className="text-[#0f172a]">Decorative (4–19mm):</strong>{' '}
                      2D/3D ceramic print (2440×3600mm), gradient sand blast, mirrors.
                    </span>
                  </li>
                </ul>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('our-portfolio', 'products-section')}
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#0e7490] font-bold hover:text-[#0b192c] transition-colors pt-3 border-t border-slate-100 text-start cursor-pointer"
              >
                <span>Browse Product Catalog</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform rtl:rotate-180">
                  arrow_forward
                </span>
              </button>
            </motion.div>

            {/* Pillar 3: Our Projects */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: 0.16, ease: EASE_CURVE }}
              className="bg-white rounded-2xl p-6 lg:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-200 group"
            >
              <div className="flex flex-col">
                <div className="w-full h-52 rounded-xl overflow-hidden mb-6 relative bg-[#0b192c]">
                  <SafeImage
                    src={PORTFOLIO_PILLAR_IMAGES.projects}
                    alt="Monolithic modern glass skyscraper tower"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    fallbackLabel="Built Architectural Landmarks"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071426]/60 via-transparent to-transparent" />
                </div>

                <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-[#0b192c] font-bold mb-2">
                  <span>03 · Completed Projects</span>
                  <span>Qatar</span>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <span className="material-symbols-outlined text-[#0b192c] text-[24px]">
                    domain
                  </span>
                  <h3 className="font-display text-xl text-[#0b192c] font-bold">Project Portfolio</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] mb-4">
                  Regional landmarks with technical specifications:
                </p>
                <ul className="flex flex-col divide-y divide-slate-100 text-xs sm:text-sm text-[#475569] mb-6 border-t border-b border-slate-100">
                  <li className="py-2.5 flex flex-col">
                    <span className="font-mono text-[11px] text-[#0284c7] uppercase font-bold">
                      Commercial Tower · Doha
                    </span>
                    <span className="text-xs text-[#0f172a] mt-0.5">
                      12mm tempered facade, 18mm IGU, 3,500 m² glazing area
                    </span>
                  </li>
                  <li className="py-2.5 flex flex-col">
                    <span className="font-mono text-[11px] text-[#0369a1] uppercase font-bold">
                      Shopping Mall · Doha
                    </span>
                    <span className="text-xs text-[#0f172a] mt-0.5">
                      10mm laminated balustrades, 6mm curved skylights, 5,200 m²
                    </span>
                  </li>
                  <li className="py-2.5 flex flex-col">
                    <span className="font-mono text-[11px] text-[#0e7490] uppercase font-bold">
                      Hotel Complex · Doha
                    </span>
                    <span className="text-xs text-[#0f172a] mt-0.5">
                      12mm Low-E tempered, 20mm IGU, fire-rated lobby glazing
                    </span>
                  </li>
                  <li className="py-2.5 flex flex-col">
                    <span className="font-mono text-[11px] text-[#0b192c] uppercase font-bold">
                      Office Building · Doha
                    </span>
                    <span className="text-xs text-[#0f172a] mt-0.5">
                      Double silver Low-E IGU, structural silicone bonding, 4,800 m²
                    </span>
                  </li>
                </ul>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('our-portfolio', 'projects-section')}
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#0b192c] font-bold hover:text-[#0284c7] transition-colors pt-3 border-t border-slate-100 text-start cursor-pointer"
              >
                <span>Explore Projects Gallery</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform rtl:rotate-180">
                  arrow_forward
                </span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. QUALITY ASSURANCE */}
      <section
        id="quality-section"
        className="w-full bg-white py-16 lg:py-20 border-b border-slate-200"
      >
        <div className="w-full max-w-[1200px] mx-auto px-5 lg:px-12">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#0284c7] font-bold">
              Quality Assurance
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-3xl text-[#0b192c] font-bold mt-2">
              QC Procedures &amp; Testing Equipment
            </h2>
            <p className="text-sm sm:text-base text-[#475569] max-w-2xl mt-2">
              ISO 9001:2015 certified quality management with in-house testing laboratory and documented QC procedures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, ease: EASE_CURVE }}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-[#0284c7] text-[24px]">science</span>
                <h3 className="font-display text-lg text-[#0b192c] font-bold">Test Equipment</h3>
              </div>
              <ul className="flex flex-col gap-2 text-sm text-[#475569]">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#0284c7] text-[16px] shrink-0 mt-0.5">check_circle</span>
                  <span>Fragmentometer (EN 12600 impact testing)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#0284c7] text-[16px] shrink-0 mt-0.5">check_circle</span>
                  <span>Heat soak furnace (NiS sulfide testing)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#0284c7] text-[16px] shrink-0 mt-0.5">check_circle</span>
                  <span>Thickness gauge (±0.1mm accuracy)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#0284c7] text-[16px] shrink-0 mt-0.5">check_circle</span>
                  <span>Flatness/deflection measurement tools</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: 0.08, ease: EASE_CURVE }}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-[#0e7490] text-[24px]">task_alt</span>
                <h3 className="font-display text-lg text-[#0b192c] font-bold">QC Procedures</h3>
              </div>
              <ul className="flex flex-col gap-2 text-sm text-[#475569]">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#0e7490] text-[16px] shrink-0 mt-0.5">check_circle</span>
                  <span>Incoming material inspection (thickness, visual defects)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#0e7490] text-[16px] shrink-0 mt-0.5">check_circle</span>
                  <span>In-process quality checks (cutting, edging, drilling)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#0e7490] text-[16px] shrink-0 mt-0.5">check_circle</span>
                  <span>Final inspection (dimensions, edge quality, packaging)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#0e7490] text-[16px] shrink-0 mt-0.5">check_circle</span>
                  <span>Traceability documentation per batch</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: 0.16, ease: EASE_CURVE }}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-[#0369a1] text-[24px]">verified</span>
                <h3 className="font-display text-lg text-[#0b192c] font-bold">Certifications</h3>
              </div>
              <ul className="flex flex-col gap-2 text-sm text-[#475569]">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#0369a1] text-[16px] shrink-0 mt-0.5">check_circle</span>
                  <span>ISO 9001:2015 (Quality Management)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#0369a1] text-[16px] shrink-0 mt-0.5">check_circle</span>
                  <span>ISO 14001:2015 (Environmental Management)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#0369a1] text-[16px] shrink-0 mt-0.5">check_circle</span>
                  <span>OHSAS 45001:2018 (Health &amp; Safety)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#0369a1] text-[16px] shrink-0 mt-0.5">check_circle</span>
                  <span>Annual third-party audit compliance</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. COMPLIANCE & STANDARDS */}
      <section
        id="compliance-section"
        className="w-full bg-slate-50 py-16 lg:py-20 border-b border-slate-200"
      >
        <div className="w-full max-w-[1200px] mx-auto px-5 lg:px-12">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#0284c7] font-bold">
              Compliance &amp; Standards
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-3xl text-[#0b192c] font-bold mt-2">
              International Standards Compliance
            </h2>
            <p className="text-sm sm:text-base text-[#475569] max-w-2xl mt-2">
              Products certified to European (EN), American (ASTM), and international standards with documented test reports.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, ease: EASE_CURVE }}
              className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-[#0284c7] text-[20px]">shield</span>
                <h3 className="font-display text-sm text-[#0b192c] font-bold">EN 12600</h3>
              </div>
              <p className="text-xs text-[#475569] leading-relaxed">
                Glass in building - Impact test method and classification for flat glass
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: 0.08, ease: EASE_CURVE }}
              className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-[#0e7490] text-[20px]">shield</span>
                <h3 className="font-display text-sm text-[#0b192c] font-bold">EN 12150</h3>
              </div>
              <p className="text-xs text-[#475569] leading-relaxed">
                Thermally toughened soda lime silicate safety glass - Requirements
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: 0.16, ease: EASE_CURVE }}
              className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-[#0369a1] text-[20px]">shield</span>
                <h3 className="font-display text-sm text-[#0b192c] font-bold">ASTM C1036</h3>
              </div>
              <p className="text-xs text-[#475569] leading-relaxed">
                Standard specification for flat glass - Quality specifications
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: 0.24, ease: EASE_CURVE }}
              className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-[#0b192c] text-[20px]">shield</span>
                <h3 className="font-display text-sm text-[#0b192c] font-bold">EN 1279</h3>
              </div>
              <p className="text-xs text-[#475569] leading-relaxed">
                Insulating glass units - Requirements and testing procedures
              </p>
            </motion.div>
          </div>

          <div className="mt-8 bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#0284c7] text-[24px]">description</span>
                <div>
                  <h4 className="font-display text-sm text-[#0b192c] font-bold">Technical Documentation</h4>
                  <p className="text-xs text-[#475569]">Test reports, certificates, and data sheets available on request</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('contact-us')}
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#0284c7] font-bold hover:text-[#0b192c] transition-colors px-6 py-3 border border-[#0284c7] rounded-lg hover:bg-[#0284c7]/5 cursor-pointer"
              >
                <span>Request Documentation</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. OUR LEADERS (Strict 3x1 Grid) */}
      <section id="leadership-section" className="w-full bg-white py-16 lg:py-20">
        <div className="w-full max-w-[1200px] mx-auto px-5 lg:px-12">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#0284c7] font-bold">
              Executive Governance
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-3xl text-[#0b192c] font-bold mt-2">
              Our Leadership Team
            </h2>
            <p className="text-sm sm:text-base text-[#475569] max-w-2xl mt-2">
              Guided by industry veterans in structural engineering, materials science, and plant operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LEADERS.map((leader, idx) => {
              const roleTone =
                idx === 0
                  ? 'text-[#0284c7]'
                  : idx === 1
                    ? 'text-[#0e7490]'
                    : 'text-[#0369a1]';
              return (
                <motion.div
                  key={leader.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: idx * 0.08, ease: EASE_CURVE }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 flex flex-col group"
                >
                  <div className="w-full h-72 relative bg-slate-100 overflow-hidden">
                    <SafeImage
                      src={leader.image}
                      alt={leader.imageAlt}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      fallbackLabel={leader.name}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071426]/65 via-transparent to-transparent" />
                    <span className="absolute bottom-3.5 start-4 font-mono text-[11px] uppercase tracking-wider font-bold text-[#e0f2fe]">
                      {leader.divisionBadge}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1 justify-between gap-6">
                    <div>
                      <h3 className="font-display text-lg text-[#0b192c] font-bold">
                        {leader.name}
                      </h3>
                      <span
                        className={`font-mono text-xs uppercase tracking-wider font-semibold mt-0.5 block ${roleTone}`}
                      >
                        {leader.role}
                      </span>
                      <p className="text-xs sm:text-sm text-[#475569] mt-3 leading-relaxed">
                        {leader.bio}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-[#0f172a] font-mono text-xs">
                      <span>{leader.credential}</span>
                      <span className="font-bold text-[#0284c7] tabular-nums">
                        {leader.experience}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. PRE-FOOTER CONSULTATION & QUOTE BANNER */}
      <section
        id="contact-section"
        className="w-full bg-[#f8fafc] text-[#0f172a] py-16 border-t border-slate-200"
      >
        <div className="w-full max-w-[1200px] mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: EASE_CURVE }}
            className="bg-logo-fins-dark text-white rounded-3xl p-8 lg:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden border border-[#38bdf8]/25"
          >
            <div className="absolute top-0 inset-x-0 h-1.5 logo-gold-seam" />
            <LogoPattern variant="dark" />

            <div className="relative z-10 flex flex-col gap-3 max-w-2xl text-center lg:text-start">
              <div className="inline-flex items-center justify-center lg:justify-start gap-2 text-[#38bdf8] font-mono text-xs uppercase tracking-[0.2em] font-semibold">
                Technical Glazing Consultations &amp; Estimations
              </div>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-white font-bold tracking-tight">
                Have a Bespoke Architectural Glass Requirement?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Connect with our engineering specialists for technical consultations, product specifications, and competitive project tenders.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2 text-xs text-white">
                <a
                  href="tel:+97450777210"
                  className="flex items-center gap-2 bg-white/10 px-3.5 py-2 rounded-lg border border-white/15 hover:bg-white/20 transition-colors tabular-nums"
                >
                  <span className="material-symbols-outlined text-[#38bdf8] text-[18px]">
                    call
                  </span>
                  <span>(+974) 50777210</span>
                </a>
                <a
                  href="mailto:info@panoramaglass.net"
                  className="flex items-center gap-2 bg-white/10 px-3.5 py-2 rounded-lg border border-[#38bdf8]/35 hover:bg-white/20 transition-colors"
                >
                  <span className="material-symbols-outlined text-[#7dd3fc] text-[18px]">
                    mail
                  </span>
                  <span>info@panoramaglass.net</span>
                </a>
                <div className="flex items-center gap-2 bg-white/10 px-3.5 py-2 rounded-lg border border-white/15">
                  <span className="material-symbols-outlined text-[#22d3ee] text-[18px]">
                    schedule
                  </span>
                  <span>New Industrial Area · Doha, Qatar</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => onNavigate('request-a-quote')}
                className="glass-sheen w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#0284c7] hover:bg-[#0369a1] text-white font-display text-xs uppercase tracking-wider font-bold px-8 py-4 rounded-xl shadow-lg transition-all cursor-pointer"
              >
                <span>Request for Quote</span>
                <span className="material-symbols-outlined text-[18px] text-[#e0f2fe]">
                  description
                </span>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('contact-us')}
                className="glass-sheen w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-display text-xs uppercase tracking-wider font-semibold px-8 py-4 rounded-xl border border-white/25 hover:border-[#38bdf8]/60 transition-all cursor-pointer"
              >
                <span>{t.nav['contact-us']}</span>
                <span className="material-symbols-outlined text-[18px] text-[#38bdf8]">
                  contact_support
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
