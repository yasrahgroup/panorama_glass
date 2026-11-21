import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import type { ModalState, PageRoute, ProductCategory } from '../types';
import { PRODUCTS, SERVICES } from '../data/panoramaData';
import { filterProductsByCategory } from '../utils/portfolio';
import { SafeImage } from '../components/SafeImage';
import { ProductSchematic } from '../components/ProductSchematic';
import { SCHEMATIC_PRODUCT_IDS } from '../components/productSchematicIds';
import { LogoPattern } from '../components/LogoPattern';

interface OurPortfolioPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenModal: (modal: ModalState) => void;
  onRequestQuoteWithSubject: (subject: string) => void;
}

const EASE_CURVE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const FILTER_OPTIONS: { id: ProductCategory; label: string }[] = [
  { id: 'all', label: 'All (8)' },
  { id: 'coatings', label: 'Insulated & Printed' },
  { id: 'safety', label: 'Tempered & Safety' },
  { id: 'specialty', label: 'Acoustic & Specialty' },
];

export function OurPortfolioPage({
  onNavigate,
  onOpenModal,
  onRequestQuoteWithSubject,
}: OurPortfolioPageProps) {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');

  const visibleProducts = useMemo(
    () => filterProductsByCategory(PRODUCTS, activeCategory),
    [activeCategory],
  );

  return (
    <div className="flex flex-col w-full bg-[#f8fafc] text-[#0f172a]">
      {/* SECTION 1: Page Header */}
      <section className="relative overflow-hidden w-full bg-logo-fins py-12 lg:py-16 px-5 lg:px-12 border-b border-slate-200">
        <LogoPattern variant="light" />
        <div className="relative z-10 mx-auto max-w-7xl flex flex-col items-center text-center">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[2px] bg-[#0284c7]" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#0284c7] font-bold">
              Panorama Glass Factory · Doha, Qatar
            </span>
            <span className="w-6 h-[2px] bg-[#0b192c]" />
          </div>

          <h1 className="max-w-4xl font-display text-4xl lg:text-5xl font-bold tracking-tight text-[#0b192c] [text-wrap:balance]">
            Products & Services
          </h1>

          <p className="mt-4 max-w-2xl text-base text-[#475569]">
            Engineered glass products and processing capabilities from our 8,000 m² Doha facility.
          </p>
        </div>
      </section>

      {/* SECTION 2: Our Products (4x2 Grid + Sliding Segmented Filter Bar) */}
      <section
        id="products-section"
        className="w-full bg-white py-16 lg:py-20 px-5 lg:px-12 border-b border-slate-200"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pb-8">
            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#0284c7] font-bold">
                Glass Trading &amp; Processing
              </span>
              <h2 className="font-display text-3xl font-bold text-[#0b192c]">Our Products</h2>
              <p className="text-sm sm:text-base text-[#475569] max-w-xl">
                Clear, Obscured, Satin, Reflective, Low-E, Double &amp; Triple Silver Coated Glass (4–19mm), plus Laminated, Bullet Proof, Curved &amp; Printed Glass.
              </p>
            </div>

            <div
              role="group"
              aria-label="Filter architectural glass products"
              className="flex flex-wrap items-center gap-1 bg-slate-100 p-1.5 rounded-xl border border-slate-200"
            >
              {FILTER_OPTIONS.map((opt) => {
                const isActive = activeCategory === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setActiveCategory(opt.id)}
                    aria-pressed={isActive}
                    className={`relative px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                      isActive ? 'text-white' : 'text-[#475569] hover:text-[#0b192c]'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="portfolio-filter-pill"
                        transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                        className="absolute inset-0 bg-[#0b192c] rounded-lg shadow-sm"
                      />
                    )}
                    <span className="relative z-10">{opt.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <motion.div
            layout
            data-testid="products-grid"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2"
          >
            <AnimatePresence mode="popLayout">
              {visibleProducts.map((product) => (
                <motion.article
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.24, ease: EASE_CURVE }}
                  className="group relative flex flex-col justify-between rounded-xl bg-[#f8fafc] p-4 shadow-sm hover:shadow-xl hover:bg-white transition-all duration-300 border border-slate-200"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 font-mono text-[11px] font-semibold">
                      <span className="text-[#0284c7] truncate">{product.badge}</span>
                      <span className="text-[#64748b] shrink-0">{product.sku}</span>
                    </div>

                    <div className="relative mt-3 h-40 w-full overflow-hidden rounded-lg bg-[#0b192c]">
                      {SCHEMATIC_PRODUCT_IDS.has(product.id) ? (
                        <ProductSchematic product={product} />
                      ) : (
                        <SafeImage
                          src={product.image}
                          alt={product.imageAlt}
                          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                          fallbackLabel={product.title}
                        />
                      )}
                      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#071426]/80 to-transparent pointer-events-none" />
                      <span className="absolute bottom-2 end-2.5 font-mono text-[10px] font-bold text-[#e0f2fe] uppercase tracking-wider">
                        {product.overlayTag}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-lg font-bold text-[#0b192c] group-hover:text-[#0284c7] transition-colors leading-snug">
                      {product.title}
                    </h3>

                    <div className="mt-3 pt-3 border-t border-slate-200 grid grid-cols-2 gap-x-3 gap-y-2">
                      {product.kpis.map((kpi) => {
                        const kpiColor =
                          kpi.tone === 'primary'
                            ? 'text-[#0284c7]'
                            : kpi.tone === 'secondary'
                              ? 'text-[#0b192c]'
                              : kpi.tone === 'tertiary'
                                ? 'text-[#0e7490]'
                                : 'text-[#0369a1]';
                        return (
                          <div key={kpi.label} className="flex flex-col">
                            <span className="font-mono text-[10px] text-[#64748b] uppercase">
                              {kpi.label}
                            </span>
                            <span className={`text-xs font-semibold tabular-nums ${kpiColor}`}>
                              {kpi.value}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenModal({ type: 'product', id: product.id })}
                    aria-label={`Know More about ${product.title}`}
                    className="glass-sheen mt-4 inline-flex items-center justify-between w-full rounded-lg bg-slate-200/80 hover:bg-[#0284c7] text-[#0b192c] hover:text-white px-4 py-2.5 text-sm font-semibold transition-all duration-200 cursor-pointer"
                  >
                    <span>Know More</span>
                    <span className="material-symbols-outlined text-[18px] rtl:rotate-180">
                      arrow_forward
                    </span>
                  </button>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: Our Services */}
      <section
        id="services-section"
        className="w-full bg-logo-fins-subtle py-16 lg:py-20 px-5 lg:px-12 border-b border-slate-200"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pb-8">
            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#0e7490] font-bold">
                Processing Services
              </span>
              <h2 className="font-display text-3xl font-bold text-[#0b192c]">Our Services</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {SERVICES.map((service, idx) => {
              const iconBg =
                service.accentTone === 'primary'
                  ? 'bg-[#e0f2fe] text-[#0284c7]'
                  : service.accentTone === 'secondary'
                    ? 'bg-[#ecfeff] text-[#0e7490]'
                    : 'bg-slate-100 text-[#0b192c]';
              const badgeColor =
                service.accentTone === 'primary'
                  ? 'text-[#0284c7]'
                  : service.accentTone === 'secondary'
                    ? 'text-[#0e7490]'
                    : 'text-[#0b192c]';

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.4, delay: idx * 0.06, ease: EASE_CURVE }}
                  className="flex flex-col justify-between rounded-xl bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className={`h-11 w-11 rounded-lg flex items-center justify-center ${iconBg}`}>
                        <span className="material-symbols-outlined text-[22px]">{service.icon}</span>
                      </div>
                      <span
                        className={`font-mono text-[11px] uppercase tracking-wider font-bold ${badgeColor}`}
                      >
                        {service.badge}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold text-[#0b192c]">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#475569] leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenModal({ type: 'service', id: service.id })}
                    aria-label={`Explore Service: ${service.title}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm text-[#0284c7] hover:text-[#0b192c] font-semibold group cursor-pointer"
                  >
                    <span>Explore Service</span>
                    <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1 rtl:rotate-180">
                      arrow_forward
                    </span>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: Pre-Footer Banner */}
      <section className="w-full bg-[#f1f5f9] py-16 px-5 lg:px-12">
        <div className="mx-auto max-w-7xl relative overflow-hidden rounded-2xl bg-logo-fins-dark text-white p-6 lg:p-10 shadow-xl border border-[#38bdf8]/25 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="absolute top-0 inset-x-0 h-1.5 logo-gold-seam" />
          <LogoPattern variant="dark" />
          <div className="relative z-10 flex flex-col gap-1.5 max-w-2xl text-start">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#38bdf8] font-bold">
              Structural Glass Specification Desk
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Have a Bespoke Architectural Glass Requirement?
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Connect with our structural engineering advisors for project feasibility, solar heat load calculations, acoustic simulations, and commercial quotations.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap items-center gap-3 w-full lg:w-auto">
            <button
              type="button"
              onClick={() => onRequestQuoteWithSubject('Architectural Facade Specification Inquiry')}
              className="glass-sheen flex-1 lg:flex-initial inline-flex items-center justify-center gap-2 bg-[#0284c7] hover:bg-[#0369a1] text-white text-sm font-bold px-6 py-3.5 rounded-lg shadow-md transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px] text-[#e0f2fe]">
                request_quote
              </span>
              <span>Request for Quote →</span>
            </button>
            <button
              type="button"
              onClick={() => onNavigate('contact-us')}
              className="glass-sheen flex-1 lg:flex-initial inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-bold px-6 py-3.5 rounded-lg border border-white/25 transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px] text-[#38bdf8]">
                contact_support
              </span>
              <span>Contact Us</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
