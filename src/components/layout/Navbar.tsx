// import { useState, useEffect, useRef } from 'react';
// import { AnimatePresence, motion } from 'motion/react';
// import { Menu, X } from 'lucide-react';
// import type { AppRoute, Language, PageRoute } from '@/types';
// import { PANORAMA_EMBLEM_URL } from '@/data/panoramaData';
// import { useTranslations } from '@/i18n';
// import { SafeImage } from '@/components/SafeImage';

// interface NavbarProps {
//   currentRoute: AppRoute;
//   language: Language;
//   onNavigate: (route: PageRoute, hash?: string) => void;
//   onLanguageChange: (lang: Language) => void;
// }

// const NAV_ROUTES: PageRoute[] = ['home', 'our-story', 'our-portfolio', 'contact-us'];

// export function Navbar({
//   currentRoute,
//   language,
//   onNavigate,
//   onLanguageChange,
// }: NavbarProps) {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const mobileMenuRef = useRef<HTMLDivElement>(null);
//   const t = useTranslations(language);

//   useEffect(() => {
//     if (mobileOpen && mobileMenuRef.current) {
//       const firstFocusable = mobileMenuRef.current.querySelector('a, button, [tabindex]:not([tabindex="-1"])') as HTMLElement;
//       if (firstFocusable) {
//         firstFocusable.focus();
//       }
//     }
//   }, [mobileOpen]);

//   const handleNavClick = (route: PageRoute) => {
//     setMobileOpen(false);
//     onNavigate(route);
//   };

//   return (
//     <header className="site-header text-ink">
//       <div className="h-[3px] w-full bg-burgundy" />

//       <div className="hidden lg:block utility-bar border-b border-white/10">
//         <div className="h-[34px] w-full max-w-[1200px] mx-auto px-5 lg:px-12 flex items-center justify-between text-[11px] font-medium tracking-wide">
//           <div className="flex items-center gap-6">
//             <a
//               href="tel:+97450777210"
//               className="inline-flex items-center gap-1.5 text-sand hover:text-white transition-colors duration-200 tabular-nums"
//             >
//               <span className="material-symbols-outlined text-[14px] text-sand">call</span>
//               <span>(+974) 50777210</span>
//             </a>
//             <span className="text-sand/30" aria-hidden="true">|</span>
//             <a
//               href="mailto:info@panoramaglass.net"
//               className="inline-flex items-center gap-1.5 text-sand hover:text-white transition-colors duration-200"
//             >
//               <span className="material-symbols-outlined text-[14px] text-sand">mail</span>
//               <span>info@panoramaglass.net</span>
//             </a>
//             <span className="text-sand/30" aria-hidden="true">|</span>
//             <span className="inline-flex items-center gap-1.5 text-sand/75">
//               <span className="material-symbols-outlined text-[14px] text-sand">location_on</span>
//               <span>New Industrial Area, Doha · State of Qatar</span>
//             </span>
//           </div>

//           <div className="flex items-center gap-5">
//             <span className="text-[10px] uppercase tracking-[0.16em] text-sand/75 font-semibold">
//               ISO 9001 · 14001 · OHSAS 45001
//             </span>
//             <span className="text-sand/30" aria-hidden="true">|</span>
//             <div
//               role="group"
//               aria-label="Language selector"
//               className="flex items-center gap-1"
//             >
//               <button
//                 type="button"
//                 onClick={() => onLanguageChange('en')}
//                 aria-pressed={language === 'en'}
//                 className={`rounded-sm text-[10px] font-bold tracking-wider transition-colors duration-200 cursor-pointer ${
//                   language === 'en'
//                     ? 'btn btn-secondary btn-sm'
//                     : 'btn btn-outline-clay btn-sm text-sand hover:text-white'
//                 }`}
//               >
//                 EN
//               </button>
//               <button
//                 type="button"
//                 onClick={() => onLanguageChange('ar')}
//                 aria-pressed={language === 'ar'}
//                 className={`rounded-sm text-[10px] font-bold transition-colors duration-200 cursor-pointer ${
//                   language === 'ar'
//                     ? 'btn btn-secondary btn-sm'
//                     : 'btn btn-outline-clay btn-sm text-sand hover:text-white'
//                 }`}
//               >
//                 العربية
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="h-[74px] w-full max-w-[1200px] mx-auto px-5 lg:px-12 flex items-center justify-between gap-6">
//         <button
//           type="button"
//           onClick={() => handleNavClick('home')}
//           className="brand-lockup group shrink-0 text-start rounded-sm py-1 cursor-pointer"
//           aria-label="Panorama Glass Company Home"
//         >
//           <div className="h-11 w-11 rounded-sm bg-surface border border-line flex items-center justify-center overflow-hidden p-1 transition-transform duration-200 group-hover:scale-105">
//             <SafeImage
//               src={PANORAMA_EMBLEM_URL}
//               alt="Panorama Glass Company Emblem"
//               className="h-full w-full object-contain"
//               fallbackLabel="PG"
//             />
//           </div>
//           <div className="flex flex-col">
//             <span className="text-lg font-extrabold tracking-[0.14em] uppercase text-burgundy leading-none group-hover:text-burgundy-deep transition-colors whitespace-nowrap">
//               {t.brand.main}
//             </span>
//             <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-muted mt-1 whitespace-nowrap">
//               {t.brand.sub} · Qatar
//             </span>
//           </div>
//         </button>

//         <div className="flex items-center gap-6 lg:gap-8 shrink-0">
//           <nav
//             aria-label="Main navigation"
//             className="hidden lg:flex items-center gap-7"
//           >
//             {NAV_ROUTES.map((route) => {
//               const active = currentRoute === route;
//               return (
//                 <button
//                   key={route}
//                   type="button"
//                   onClick={() => handleNavClick(route)}
//                   aria-current={active ? 'page' : undefined}
//                   className={`nav-link relative py-2 px-0.5 text-[13px] uppercase tracking-[0.1em] whitespace-nowrap shrink-0 font-semibold cursor-pointer ${
//                     active ? 'active font-bold' : ''
//                   }`}
//                 >
//                   {t.nav[route]}
//                   {active && (
//                     <motion.span
//                       layoutId="nav-active-underline"
//                       transition={{ type: 'spring', stiffness: 440, damping: 34 }}
//                       className="absolute inset-x-0 -bottom-0.5 h-[2px] bg-burgundy"
//                     />
//                   )}
//                 </button>
//               );
//             })}
//           </nav>

//           <div
//             role="group"
//             aria-label="Language selector compact"
//             className="hidden sm:flex lg:hidden items-center gap-1"
//           >
//             <button
//               type="button"
//               onClick={() => onLanguageChange('en')}
//               aria-pressed={language === 'en'}
//               className={`rounded-sm text-[11px] font-bold transition-colors cursor-pointer ${
//                 language === 'en' ? 'btn btn-secondary btn-sm' : 'btn btn-outline-clay btn-sm text-muted hover:text-ink'
//               }`}
//             >
//               EN
//             </button>
//             <button
//               type="button"
//               onClick={() => onLanguageChange('ar')}
//               aria-pressed={language === 'ar'}
//               className={`rounded-sm text-[11px] font-bold transition-colors cursor-pointer ${
//                 language === 'ar' ? 'btn btn-secondary btn-sm' : 'btn btn-outline-clay btn-sm text-muted hover:text-ink'
//               }`}
//             >
//               العربية
//             </button>
//           </div>

//           <button
//             type="button"
//             onClick={() => handleNavClick('request-a-quote')}
//             className="glass-sheen btn btn-outline-burgundy hidden sm:inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.12em] font-bold px-5 py-3 whitespace-nowrap shrink-0 group cursor-pointer"
//           >
//             <span>{t.nav['request-a-quote']}</span>
//             <span className="material-symbols-outlined text-[17px] group-hover:translate-x-0.5 transition-transform rtl:rotate-180">
//               arrow_forward
//             </span>
//           </button>

//           <button
//             type="button"
//             onClick={() => setMobileOpen((prev) => !prev)}
//             aria-expanded={mobileOpen}
//             aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
//             className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-sm bg-canvas border border-line text-ink hover:bg-surface transition-colors cursor-pointer"
//           >
//             {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
//           </button>
//         </div>
//       </div>

//       <AnimatePresence>
//         {mobileOpen && (
//           <motion.div
//             ref={mobileMenuRef}
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
//             className="lg:hidden bg-surface text-ink border-t border-line shadow-xl px-5 py-5 space-y-4"
//           >
//             <div className="flex flex-wrap items-center gap-4 text-xs text-muted pb-3 border-b border-line">
//               <a href="tel:+97450777210" className="inline-flex items-center gap-1.5 font-semibold text-burgundy">
//                 <span className="material-symbols-outlined text-[16px] text-burgundy">call</span>
//                 (+974) 50777210
//               </a>
//               <a href="mailto:info@panoramaglass.net" className="inline-flex items-center gap-1.5 font-semibold text-burgundy">
//                 <span className="material-symbols-outlined text-[16px] text-burgundy">mail</span>
//                 info@panoramaglass.net
//               </a>
//             </div>

//             <nav aria-label="Mobile navigation" className="flex flex-col gap-1.5">
//               {NAV_ROUTES.map((route) => {
//                 const active = currentRoute === route;
//                 return (
//                   <button
//                     key={route}
//                     type="button"
//                     onClick={() => handleNavClick(route)}
//                     className={`w-full text-start px-4 py-3 rounded-sm text-sm uppercase tracking-wider transition-colors flex items-center justify-between cursor-pointer ${
//                       active
//                         ? 'bg-canvas text-burgundy font-bold border-s-2 border-burgundy'
//                         : 'text-muted hover:bg-surface hover:text-ink font-semibold'
//                     }`}
//                   >
//                     <span>{t.nav[route]}</span>
//                     <span className="material-symbols-outlined text-[18px] opacity-75 rtl:rotate-180">
//                       chevron_right
//                     </span>
//                   </button>
//                 );
//               })}
//             </nav>

//             <div className="pt-3 border-t border-line flex flex-wrap items-center justify-between gap-3">
//               <div className="flex items-center gap-1">
//                 <button
//                   type="button"
//                   onClick={() => onLanguageChange('en')}
//                   className={`rounded-sm text-xs font-bold cursor-pointer ${
//                     language === 'en' ? 'btn btn-secondary btn-sm' : 'btn btn-outline-clay btn-sm text-muted hover:text-ink'
//                   }`}
//                 >
//                   EN
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => onLanguageChange('ar')}
//                   className={`rounded-sm text-xs font-bold cursor-pointer ${
//                     language === 'ar' ? 'btn btn-secondary btn-sm' : 'btn btn-outline-clay btn-sm text-muted hover:text-ink'
//                   }`}
//                 >
//                   العربية
//                 </button>
//               </div>

//               <button
//                 type="button"
//                 onClick={() => handleNavClick('request-a-quote')}
//                 className="flex-1 sm:flex-initial btn btn-primary inline-flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-bold px-5 py-3"
//               >
//                 <span>{t.nav['request-a-quote']}</span>
//                 <span className="material-symbols-outlined text-[18px] text-sand rtl:rotate-180">
//                   arrow_forward
//                 </span>
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }

import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import type { AppRoute, Language, PageRoute } from '@/types';
import { PANORAMA_EMBLEM_URL } from '@/data/panoramaData';
import { useTranslations } from '@/i18n';
import { SafeImage } from '@/components/SafeImage';

interface NavbarProps {
  currentRoute: AppRoute;
  language: Language;
  onNavigate: (route: PageRoute, hash?: string) => void;
  onLanguageChange: (lang: Language) => void;
}

const NAV_ROUTES: PageRoute[] = ['home', 'our-story', 'our-portfolio', 'contact-us'];

export function Navbar({ currentRoute, language, onNavigate, onLanguageChange }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const t = useTranslations(language);

  // Move focus into the menu when it opens and return it to the toggle when it closes.
  useEffect(() => {
    if (mobileOpen) {
      const firstFocusable = mobileMenuRef.current?.querySelector<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      firstFocusable?.focus();
    } else {
      menuToggleRef.current?.focus();
    }
  }, [mobileOpen]);

  // Escape closes the mobile menu. The listener exists only while the menu is open.
  useEffect(() => {
    if (!mobileOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setMobileOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  // Close the mobile menu if navigation changes from outside the menu as well.
  useEffect(() => {
    setMobileOpen(false);
  }, [currentRoute]);

  const handleNavClick = (route: PageRoute) => {
    setMobileOpen(false);
    onNavigate(route);
  };

  const handleLanguageChange = (lang: Language) => {
    onLanguageChange(lang);
  };

  return (
    <header className="site-header sticky top-0 z-50 w-full bg-surface text-ink shadow-sm">
      <div className="h-[3px] w-full bg-burgundy" />

      <div className="utility-bar">
        <div className="mx-auto flex min-h-[34px] w-full max-w-7xl flex-wrap items-center justify-center gap-x-4 gap-y-1 px-4 py-2 text-[10px] font-medium tracking-wide sm:justify-between sm:px-5 lg:px-12 lg:text-[11px]">
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 sm:justify-start sm:gap-6">
            <a
              href="tel:+97450777210"
              className="!text-on-dark inline-flex items-center gap-1.5 transition-colors duration-200 hover:!text-white tabular-nums"
            >
              <span className="material-symbols-outlined !text-on-dark text-[14px]">call</span>
              <span>(+974) 50777210</span>
            </a>

            <span className="text-on-dark/30" aria-hidden="true">
              |
            </span>

            <a
              href="mailto:info@panoramaglass.net"
              className="!text-on-dark inline-flex items-center gap-1.5 transition-colors duration-200 hover:!text-white"
            >
              <span className="material-symbols-outlined !text-on-dark text-[14px]">mail</span>
              <span>info@panoramaglass.net</span>
            </a>
            <span className="hidden text-sand/30 sm:inline" aria-hidden="true">
              |
            </span>
            <span className="hidden items-center gap-1.5 text-sand/75 xl:inline-flex">
              <span className="material-symbols-outlined text-[14px] text-sand">location_on</span>
              <span>New Industrial Area, Doha · State of Qatar</span>
            </span>
          </div>

          <div className="hidden items-center gap-5 lg:flex">
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-sand/75">
              ISO 9001 · 14001 · OHSAS 45001
            </span>
            <span className="text-sand/30" aria-hidden="true">
              |
            </span>
            <div role="group" aria-label="Language selector" className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => handleLanguageChange('en')}
                aria-pressed={language === 'en'}
                className={`rounded-sm text-[10px] font-bold tracking-wider transition-colors duration-200 ${
                  language === 'en'
                    ? 'btn btn-secondary btn-sm'
                    : 'btn btn-outline-clay btn-sm text-sand hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => handleLanguageChange('ar')}
                aria-pressed={language === 'ar'}
                className={`rounded-sm text-[10px] font-bold transition-colors duration-200 ${
                  language === 'ar'
                    ? 'btn btn-secondary btn-sm'
                    : 'btn btn-outline-clay btn-sm text-sand hover:text-white'
                }`}
              >
                العربية
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-[74px] w-full items-center justify-between gap-6 px-5 lg:px-12">
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="brand-lockup group flex shrink-0 cursor-pointer items-center gap-3 rounded-sm py-1 text-start"
          aria-label="Panorama Glass Company Home"
        >
          <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-sm border border-line bg-surface p-1 transition-transform duration-200 group-hover:scale-105">
            <SafeImage
              src={PANORAMA_EMBLEM_URL}
              alt="Panorama Glass Company Emblem"
              className="h-full w-full object-contain"
              fallbackLabel="PG"
            />
          </span>
          <span className="flex flex-col">
            <span className="whitespace-nowrap text-lg font-extrabold uppercase leading-none tracking-[0.14em] text-burgundy transition-colors group-hover:text-burgundy-deep">
              {t.brand.main}
            </span>
            <span className="mt-1 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.22em] text-muted">
              {t.brand.sub} · Qatar
            </span>
          </span>
        </button>

        <div className="flex shrink-0 items-center gap-6 lg:gap-8">
          <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
            {NAV_ROUTES.map((route) => {
              const active = currentRoute === route;
              return (
                <button
                  key={route}
                  type="button"
                  onClick={() => handleNavClick(route)}
                  aria-current={active ? 'page' : undefined}
                  className={`nav-link relative shrink-0 cursor-pointer whitespace-nowrap px-0.5 py-2 text-[13px] font-semibold uppercase tracking-[0.1em] ${
                    active ? 'active font-bold' : ''
                  }`}
                >
                  {t.nav[route]}
                  {active && (
                    <motion.span
                      layoutId="nav-active-underline"
                      transition={{ type: 'spring', stiffness: 440, damping: 34 }}
                      className="absolute inset-x-0 -bottom-0.5 h-[2px] bg-burgundy"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          <div
            role="group"
            aria-label="Language selector compact"
            className="hidden items-center gap-1 sm:flex lg:hidden"
          >
            <button
              type="button"
              onClick={() => handleLanguageChange('en')}
              aria-pressed={language === 'en'}
              className={`rounded-sm text-[11px] font-bold transition-colors ${
                language === 'en'
                  ? 'btn btn-secondary btn-sm'
                  : 'btn btn-outline-clay btn-sm text-muted hover:text-ink'
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => handleLanguageChange('ar')}
              aria-pressed={language === 'ar'}
              className={`rounded-sm text-[11px] font-bold transition-colors ${
                language === 'ar'
                  ? 'btn btn-secondary btn-sm'
                  : 'btn btn-outline-clay btn-sm text-muted hover:text-ink'
              }`}
            >
              العربية
            </button>
          </div>

          <button
            type="button"
            onClick={() => handleNavClick('request-a-quote')}
            className="glass-sheen btn btn-outline-burgundy group hidden shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] sm:inline-flex"
          >
            <span>{t.nav['request-a-quote']}</span>
            <span className="material-symbols-outlined text-[17px] transition-transform group-hover:translate-x-0.5 rtl:rotate-180">
              arrow_forward
            </span>
          </button>

          <button
            ref={menuToggleRef}
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-primary-navigation"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-sm border border-line bg-canvas text-ink transition-colors hover:bg-surface lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-primary-navigation"
            ref={mobileMenuRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-x-0 top-full z-50 border-t border-line bg-surface px-5 py-5 text-ink shadow-xl lg:hidden"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col gap-1.5">
              {NAV_ROUTES.map((route) => {
                const active = currentRoute === route;
                return (
                  <button
                    key={route}
                    type="button"
                    onClick={() => handleNavClick(route)}
                    aria-current={active ? 'page' : undefined}
                    className={`flex w-full cursor-pointer items-center justify-between rounded-sm px-4 py-3 text-start text-sm uppercase tracking-wider transition-colors ${
                      active
                        ? 'border-s-2 border-burgundy bg-canvas font-bold text-burgundy'
                        : 'font-semibold text-muted hover:bg-surface-alt hover:text-ink'
                    }`}
                  >
                    <span>{t.nav[route]}</span>
                    <span className="material-symbols-outlined text-[18px] opacity-75 rtl:rotate-180">
                      chevron_right
                    </span>
                  </button>
                );
              })}
            </nav>

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-3">
              <div
                role="group"
                aria-label="Language selector mobile"
                className="flex items-center gap-1"
              >
                <button
                  type="button"
                  onClick={() => handleLanguageChange('en')}
                  aria-pressed={language === 'en'}
                  className={`rounded-sm text-xs font-bold ${
                    language === 'en'
                      ? 'btn btn-secondary btn-sm'
                      : 'btn btn-outline-clay btn-sm text-muted hover:text-ink'
                  }`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => handleLanguageChange('ar')}
                  aria-pressed={language === 'ar'}
                  className={`rounded-sm text-xs font-bold ${
                    language === 'ar'
                      ? 'btn btn-secondary btn-sm'
                      : 'btn btn-outline-clay btn-sm text-muted hover:text-ink'
                  }`}
                >
                  العربية
                </button>
              </div>

              <button
                type="button"
                onClick={() => handleNavClick('request-a-quote')}
                className="btn btn-primary inline-flex flex-1 items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider sm:flex-initial"
              >
                <span>{t.nav['request-a-quote']}</span>
                <span className="material-symbols-outlined text-[18px] text-sand rtl:rotate-180">
                  arrow_forward
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
