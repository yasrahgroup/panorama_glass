// import { useMemo, useState } from 'react';
// import { AnimatePresence, motion } from 'motion/react';
// import type { ModalState, PageRoute, ProductCategory } from '../types';
// import { PRODUCTS, SERVICES } from '../data/panoramaData';
// import { filterProductsByCategory } from '../utils/portfolio';
// import { SafeImage } from '../components/SafeImage';
// import { ProductSchematic } from '../components/ProductSchematic';
// import { SCHEMATIC_PRODUCT_IDS } from '../components/productSchematicIds';
// import { LogoPattern } from '../components/LogoPattern';

// interface OurPortfolioPageProps {
//   onNavigate: (route: PageRoute) => void;
//   onOpenModal: (modal: ModalState) => void;
//   onRequestQuoteWithSubject: (subject: string) => void;
// }

// const EASE_CURVE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// const FILTER_OPTIONS: { id: ProductCategory; label: string }[] = [
//   { id: 'all', label: 'All (8)' },
//   { id: 'coatings', label: 'Insulated & Printed' },
//   { id: 'safety', label: 'Tempered & Safety' },
//   { id: 'specialty', label: 'Acoustic & Specialty' },
// ];

// export function OurPortfolioPage({
//   onNavigate,
//   onOpenModal,
//   onRequestQuoteWithSubject,
// }: OurPortfolioPageProps) {
//   const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');

//   const visibleProducts = useMemo(
//     () => filterProductsByCategory(PRODUCTS, activeCategory),
//     [activeCategory],
//   );

//   return (
//     <div className="flex flex-col w-full bg-canvas text-ink">
//       <section className="relative overflow-hidden w-full bg-canvas py-12 lg:py-16 px-5 lg:px-12 border-b border-line">
//         <LogoPattern variant="light" />
//         <div className="relative z-10 mx-auto max-w-7xl flex flex-col items-center text-center">
//           <div className="flex items-center gap-3 mb-4">
//             <span className="w-6 h-[2px] bg-burgundy-light" />
//             <span className="font-mono text-xs uppercase tracking-[0.2em] text-burgundy-light font-bold">
//               Panorama Glass Factory · Doha, Qatar
//             </span>
//             <span className="w-6 h-[2px] bg-burgundy" />
//           </div>

//           <h1 className="max-w-4xl font-display text-4xl lg:text-5xl font-bold tracking-tight text-burgundy [text-wrap:balance]">
//             Products & Services
//           </h1>

//           <p className="mt-4 max-w-2xl text-base text-muted">
//             Engineered glass products and processing capabilities from our 8,000 m² Doha facility.
//           </p>
//         </div>
//       </section>

//       <section
//         id="products-section"
//         className="w-full bg-surface py-16 lg:py-20 px-5 lg:px-12 border-b border-line"
//       >
//         <div className="mx-auto max-w-7xl">
//           <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-4 pb-8">
//             <div className="flex flex-col gap-1.5">
//               <span className="font-mono text-xs uppercase tracking-[0.2em] text-burgundy-light font-bold">
//                 Glass Trading &amp; Processing
//               </span>
//               <h2 className="font-display text-3xl font-bold text-burgundy">Our Products</h2>
//               <p className="text-sm sm:text-base text-muted max-w-xl">
//                 Clear, Obscured, Satin, Reflective, Low-E, Double &amp; Triple Silver Coated Glass (4–19mm), plus Laminated, Bullet Proof, Curved &amp; Printed Glass.
//               </p>
//             </div>

//             <div
//               role="group"
//               aria-label="Filter architectural glass products"
//               className="flex flex-wrap items-center gap-1 bg-canvas p-1.5 rounded-xl border border-line"
//             >
//               {FILTER_OPTIONS.map((opt) => {
//                 const isActive = activeCategory === opt.id;
//                 return (
//                   <button
//                     key={opt.id}
//                     type="button"
//                     onClick={() => setActiveCategory(opt.id)}
//                     aria-pressed={isActive}
//                     className={`relative px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy focus-visible:ring-offset-2 ${
//                       isActive ? 'text-white' : 'text-muted hover:text-burgundy'
//                     }`}
//                   >
//                     {isActive && (
//                       <motion.span
//                         layoutId={`portfolio-filter-${opt.id}`}
//                         transition={{ type: 'spring', stiffness: 420, damping: 32 }}
//                         className="absolute inset-0 bg-burgundy rounded-lg shadow-sm"
//                       />
//                     )}
//                     <span className="relative z-10">{opt.label}</span>
//                   </button>
//                 );
//               })}
//             </div>
//           </div>

//           <motion.div
//             layout
//             data-testid="products-grid"
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2"
//           >
//             <AnimatePresence mode="popLayout">
//               {visibleProducts.map((product) => (
//                 <motion.article
//                   key={product.id}
//                   layout
//                   initial={{ opacity: 0, scale: 0.96 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.95 }}
//                   transition={{ duration: 0.24, ease: EASE_CURVE }}
//                   className="group relative flex flex-col justify-between rounded-2xl bg-canvas p-4 shadow-card hover:shadow-card-hover hover:bg-surface transition-all duration-300 border border-line"
//                 >
//                   <div>
//                     <div className="flex items-center justify-between gap-2 font-mono text-[11px] font-semibold">
//                       <span className="text-burgundy-light truncate">{product.badge}</span>
//                       <span className="text-muted shrink-0">{product.sku}</span>
//                     </div>

//                     <div className="relative mt-3 h-40 w-full overflow-hidden rounded-lg bg-burgundy image-zoom glass-reflection">
//                       {SCHEMATIC_PRODUCT_IDS.has(product.id) ? (
//                         <ProductSchematic product={product} />
//                       ) : (
//                         <SafeImage
//                           src={product.image}
//                           alt={product.imageAlt}
//                           className="h-full w-full object-cover"
//                           fallbackLabel={product.title}
//                         />
//                       )}
//                       <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-burgundy/80 to-transparent pointer-events-none" />
//                       <span className="absolute bottom-2 end-2.5 font-mono text-[10px] font-bold text-sand uppercase tracking-wider">
//                         {product.overlayTag}
//                       </span>
//                     </div>

//                     <h3 className="mt-4 font-display text-lg font-bold text-burgundy group-hover:text-burgundy-light transition-colors leading-snug">
//                       {product.title}
//                     </h3>

//                     <div className="mt-3 pt-3 border-t border-line grid grid-cols-2 gap-x-3 gap-y-2">
//                       {product.kpis.map((kpi) => (
//                         <div key={kpi.label} className="flex flex-col">
//                           <span className="font-mono text-[10px] text-muted uppercase">
//                             {kpi.label}
//                           </span>
//                           <span className="text-xs font-semibold tabular-nums text-burgundy-light">
//                             {kpi.value}
//                           </span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   <button
//                     type="button"
//                     onClick={() => onOpenModal({ type: 'product', id: product.id })}
//                     aria-label={`Know More about ${product.title}`}
//                     className="glass-sheen btn btn-outline-clay mt-4 inline-flex items-center justify-between w-full"
//                   >
//                     <span>Know More</span>
//                     <span className="material-symbols-outlined text-[18px] rtl:rotate-180">
//                       arrow_forward
//                     </span>
//                   </button>
//                 </motion.article>
//               ))}
//             </AnimatePresence>
//           </motion.div>
//         </div>
//       </section>

//       <section
//         id="services-section"
//         className="w-full bg-canvas py-16 lg:py-20 px-5 lg:px-12 border-b border-line"
//       >
//         <div className="mx-auto max-w-7xl">
//           <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-4 pb-8">
//             <div className="flex flex-col gap-1.5">
//               <span className="font-mono text-xs uppercase tracking-[0.2em] text-burgundy-light font-bold">
//                 Processing Services
//               </span>
//               <h2 className="font-display text-3xl font-bold text-burgundy">Our Services</h2>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
//             {SERVICES.map((service, idx) => {
//               const variant = idx % 3 === 0 ? 'card-multicolour' : idx % 3 === 1 ? 'card-sand' : 'surface-lavender';
//               return (
//                 <motion.div
//                   key={service.id}
//                   initial={{ opacity: 0, y: 16 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, amount: 0.15 }}
//                   transition={{ duration: 0.4, delay: idx * 0.06, ease: EASE_CURVE }}
//                   className={variant + ' p-6 flex flex-col justify-between'}
//                 >
//                 <div>
//                   <div className="flex items-center justify-between">
//                     <div className="h-11 w-11 rounded-lg flex items-center justify-center bg-burgundy/10 text-burgundy">
//                       <span className="material-symbols-outlined text-[22px]">{service.icon}</span>
//                     </div>
//                     <span className="font-mono text-[11px] uppercase tracking-wider font-bold text-burgundy-light">
//                       {service.badge}
//                     </span>
//                   </div>
//                   <h3 className="mt-4 font-display text-lg font-bold text-burgundy">
//                     {service.title}
//                   </h3>
//                   <p className="mt-2 text-sm text-muted leading-relaxed">
//                     {service.description}
//                   </p>
//                 </div>

//                 <button
//                   type="button"
//                   onClick={() => onOpenModal({ type: 'service', id: service.id })}
//                   aria-label={`Explore Service: ${service.title}`}
//                   className="mt-4 inline-flex items-center gap-1.5 text-sm text-burgundy-light hover:text-burgundy font-semibold group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy focus-visible:ring-offset-2"
//                 >
//                   <span>Explore Service</span>
//                   <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1 rtl:rotate-180">
//                     arrow_forward
//                   </span>
//                 </button>
//               </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       <section className="w-full bg-canvas py-16 px-5 lg:px-12">
//         <div className="reveal mx-auto max-w-7xl relative overflow-hidden rounded-2xl card-dark p-6 lg:p-10 border border-sand/25 flex flex-col lg:flex-row items-center justify-between gap-6">
//           <div className="absolute top-0 inset-x-0 h-1.5 bg-burgundy" />
//           <LogoPattern variant="dark" />
//           <div className="relative z-10 flex flex-col gap-1.5 max-w-2xl text-start">
//             <span className="font-mono text-xs uppercase tracking-[0.2em] text-sand font-bold">
//               Structural Glass Specification Desk
//             </span>
//             <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
//               Have a Bespoke Architectural Glass Requirement?
//             </h2>
//             <p className="text-sm sm:text-base text-sand">
//               Connect with our structural engineering advisors for project feasibility, solar heat load calculations, acoustic simulations, and commercial quotations.
//             </p>
//           </div>

//           <div className="relative z-10 flex flex-wrap items-center gap-3 w-full lg:w-auto">
//             <button
//               type="button"
//               onClick={() => onRequestQuoteWithSubject('Architectural Facade Specification Inquiry')}
//               className="glass-sheen btn btn-secondary flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 text-sm font-bold px-6 py-3.5 w-full justify-between sm:w-auto cursor-pointer"
//             >
//               <span className="material-symbols-outlined text-[20px] text-burgundy-deep">
//                 request_quote
//               </span>
//               <span>Request for Quote →</span>
//             </button>
//             <button
//               type="button"
//               onClick={() => onNavigate('contact-us')}
//               className="glass-sheen btn btn-outline-light flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 text-sm font-bold px-6 py-3.5 w-full justify-between sm:w-auto cursor-pointer"
//             >
//               <span className="material-symbols-outlined text-[20px] text-sand">
//                 contact_support
//               </span>
//               <span>Contact Us</span>
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


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
  { id: 'all', label: 'All products' },
  { id: 'coatings', label: 'Insulated & printed' },
  { id: 'safety', label: 'Tempered & safety' },
  { id: 'specialty', label: 'Acoustic & specialty' },
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
    <main className="flex w-full flex-col bg-canvas text-ink">
      {/* PAGE INTRO */}
      <section className="relative isolate overflow-hidden border-b border-line bg-canvas px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <LogoPattern variant="light" />
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start text-start">
          <span className="eyebrow mb-5">Panorama Glass Factory · Doha, Qatar</span>
          <h1 className="max-w-4xl font-display text-4xl font-bold tracking-tight text-brand [text-wrap:balance] sm:text-5xl lg:text-6xl">
            Products &amp; Services
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-ink-muted sm:text-lg">
            Engineered glass products and precision processing capabilities from our 8,000 m² Doha facility.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-start gap-3">
            <a href="#products-section" className="btn btn-primary">
              Explore products
              <span aria-hidden="true" className="material-symbols-outlined text-lg">arrow_downward</span>
            </a>
            <a href="#services-section" className="btn btn-outline-brand">
              Our processing services
            </a>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section
        id="products-section"
        aria-labelledby="products-heading"
        className="border-b border-line bg-surface px-5 py-14 sm:px-8 lg:px-12 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="eyebrow mb-3">Glass trading &amp; processing</span>
              <h2 id="products-heading" className="font-display text-3xl font-bold tracking-tight text-brand sm:text-4xl">
                Our Products
              </h2>
              <p className="mt-3 text-sm leading-7 text-ink-muted sm:text-base">
                Clear, obscured, satin, reflective, Low-E, double and triple silver coated glass (4–19mm), plus laminated, bullet-resistant, curved and printed glass.
              </p>
            </div>

            <div
              role="group"
              aria-label="Filter architectural glass products"
              className="flex w-full flex-wrap gap-2 rounded-xl border border-line bg-canvas p-2 lg:w-auto lg:max-w-[560px] lg:justify-end"
            >
              {FILTER_OPTIONS.map((option) => {
                const isActive = activeCategory === option.id;
                const label = option.id === 'all'
                  ? `${option.label} (${PRODUCTS.length})`
                  : option.label;
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setActiveCategory(option.id)}
                    aria-pressed={isActive}
                    className={`rounded-lg px-3 py-2 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                      isActive
                        ? 'bg-brand text-white shadow-card'
                        : 'bg-transparent text-ink-muted hover:bg-surface hover:text-brand'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          <motion.div
            layout
            data-testid="products-grid"
            className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-4"
          >
            <AnimatePresence mode="popLayout">
              {visibleProducts.map((product) => (
                <motion.article
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.22, ease: EASE_CURVE }}
                  className="card group flex h-full min-w-0 flex-col overflow-hidden p-4"
                >
                  <div className="flex min-h-6 items-center justify-between gap-2 font-mono text-[10px] font-semibold uppercase tracking-wide">
                    <span className="truncate text-clay-deep">{product.badge}</span>
                    <span className="shrink-0 text-ink-muted">{product.sku}</span>
                  </div>

                  <div className="mt-3 h-44 w-full overflow-hidden rounded-xl border border-line bg-surface-alt sm:h-48">
                    {SCHEMATIC_PRODUCT_IDS.has(product.id) ? (
                      <ProductSchematic product={product} />
                    ) : (
                      <SafeImage
                        src={product.image}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover"
                        fallbackLabel={product.title}
                      />
                    )}
                  </div>

                  <div className="flex flex-1 flex-col">
                    <h3 className="mt-4 min-h-[3.25rem] font-display text-lg font-bold leading-snug text-brand">
                      {product.title}
                    </h3>

                    <div className="mt-3 grid flex-1 grid-cols-2 content-start gap-x-3 gap-y-3 border-t border-line pt-4">
                      {product.kpis.map((kpi) => (
                        <div key={kpi.label} className="min-w-0">
                          <span className="block truncate font-mono text-[10px] uppercase tracking-wide text-ink-muted">
                            {kpi.label}
                          </span>
                          <span className="mt-1 block break-words text-xs font-semibold tabular-nums text-ink">
                            {kpi.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 border-t border-line pt-4">
                      <span className="mb-3 block font-mono text-[10px] font-bold uppercase tracking-wider text-clay-deep">
                        {product.overlayTag}
                      </span>
                      <button
                        type="button"
                        onClick={() => onOpenModal({ type: 'product', id: product.id })}
                        aria-label={`Know more about ${product.title}`}
                        className="btn btn-outline-clay w-full justify-between"
                      >
                        <span>Know more</span>
                        <span aria-hidden="true" className="material-symbols-outlined text-lg">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {visibleProducts.length === 0 && (
            <p className="rounded-xl border border-line bg-surface-alt p-8 text-center text-sm text-ink-muted">
              No products are available in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services-section"
        aria-labelledby="services-heading"
        className="border-b border-line bg-canvas px-5 py-14 sm:px-8 lg:px-12 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 max-w-2xl">
            <span className="eyebrow mb-3">Processing services</span>
            <h2 id="services-heading" className="font-display text-3xl font-bold tracking-tight text-brand sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-3 text-sm leading-7 text-ink-muted sm:text-base">
              Specialist processing solutions supported by technical expertise, controlled production and a focus on project requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
            {SERVICES.map((service, index) => (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.12 }}
                transition={{ duration: 0.35, delay: (index % 3) * 0.05, ease: EASE_CURVE }}
                className="card flex h-full min-w-0 flex-col p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="icon-circle h-12 w-12 rounded-xl border border-line bg-brand-soft text-brand">
                    <span aria-hidden="true" className="material-symbols-outlined text-2xl">{service.icon}</span>
                  </span>
                  <span className="max-w-[55%] text-right font-mono text-[10px] font-bold uppercase tracking-wider text-clay-deep">
                    {service.badge}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-xl font-bold leading-snug text-brand">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-ink-muted">
                  {service.description}
                </p>

                <button
                  type="button"
                  onClick={() => onOpenModal({ type: 'service', id: service.id })}
                  aria-label={`Explore service: ${service.title}`}
                  className="mt-6 inline-flex min-h-11 items-center justify-between gap-3 border-t border-line pt-4 text-sm font-bold text-brand transition-colors hover:text-clay-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                >
                  <span>Explore service</span>
                  <span aria-hidden="true" className="material-symbols-outlined text-lg">arrow_forward</span>
                </button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT ENQUIRY */}
      <motion.section
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.45, ease: EASE_CURVE }}
        className="bg-canvas px-5 py-14 sm:px-8 lg:px-12 lg:py-20"
      >
        <div className="card-dark relative mx-auto flex max-w-7xl flex-col items-start gap-8 overflow-hidden p-7 sm:p-9 lg:flex-row lg:items-center lg:justify-between lg:p-12">
          <LogoPattern variant="dark" />
          <div className="relative z-10 max-w-2xl">
            <span className="eyebrow eyebrow--on-dark mb-4">Structural glass specification desk</span>
            <h2 className="font-display text-2xl font-bold tracking-tight text-on-dark sm:text-3xl lg:text-4xl">
              Have a Bespoke Architectural Glass Requirement?
            </h2>
            <p className="mt-4 text-sm leading-7 text-on-dark/85 sm:text-base">
              Connect with our structural engineering advisors for project feasibility, solar heat load calculations, acoustic simulations, and commercial quotations.
            </p>
          </div>

          <div className="relative z-10 flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col xl:flex-row">
            <button
              type="button"
              onClick={() => onRequestQuoteWithSubject('Architectural Facade Specification Inquiry')}
              className="btn btn-light w-full sm:w-auto"
            >
              <span aria-hidden="true" className="material-symbols-outlined text-lg">request_quote</span>
              <span>Request a quote</span>
            </button>
            <button
              type="button"
              onClick={() => onNavigate('contact-us')}
              className="btn btn-outline-light w-full sm:w-auto"
            >
              <span aria-hidden="true" className="material-symbols-outlined text-lg">contact_support</span>
              <span>Contact us</span>
            </button>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
