import { useState } from 'react';
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

export function Navbar({
  currentRoute,
  language,
  onNavigate,
  onLanguageChange,
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = useTranslations(language);

  const handleNavClick = (route: PageRoute) => {
    setMobileOpen(false);
    onNavigate(route);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl text-[#0f172a] border-b border-slate-200/90 shadow-[0_4px_24px_rgba(11,25,44,0.06)]">
      {/* Top 3px Corporate Navy-to-Sky Seam */}
      <div className="h-[3px] w-full logo-gold-seam" />

      {/* Tier 1: Corporate Utility Bar (Emirates Glass Style — Desktop) */}
      <div className="hidden lg:block bg-[#0b192c] text-slate-300 border-b border-white/10">
        <div className="h-[34px] w-full max-w-[1200px] mx-auto px-5 lg:px-12 flex items-center justify-between text-[11px] font-medium tracking-wide">
          <div className="flex items-center gap-6">
            <a
              href="tel:+97450777210"
              className="inline-flex items-center gap-1.5 hover:text-[#38bdf8] transition-colors tabular-nums"
            >
              <span className="material-symbols-outlined text-[14px] text-[#38bdf8]">call</span>
              <span>(+974) 50777210</span>
            </a>
            <span className="text-white/20" aria-hidden="true">|</span>
            <a
              href="mailto:info@panoramaglass.net"
              className="inline-flex items-center gap-1.5 hover:text-[#38bdf8] transition-colors"
            >
              <span className="material-symbols-outlined text-[14px] text-[#38bdf8]">mail</span>
              <span>info@panoramaglass.net</span>
            </a>
            <span className="text-white/20" aria-hidden="true">|</span>
            <span className="inline-flex items-center gap-1.5 text-slate-300">
              <span className="material-symbols-outlined text-[14px] text-[#38bdf8]">location_on</span>
              <span>New Industrial Area, Doha · State of Qatar</span>
            </span>
          </div>

          <div className="flex items-center gap-5">
            <span className="text-[10px] uppercase tracking-[0.16em] text-slate-400 font-semibold">
              ISO 9001 · 14001 · OHSAS 45001
            </span>
            <span className="text-white/20" aria-hidden="true">|</span>
            {/* Desktop Language Switcher */}
            <div
              role="group"
              aria-label="Language selector"
              className="flex items-center gap-1"
            >
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                aria-pressed={language === 'en'}
                className={`px-2 py-0.5 rounded-xs text-[10px] font-bold tracking-wider transition-colors cursor-pointer ${
                  language === 'en'
                    ? 'bg-[#0284c7] text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('ar')}
                aria-pressed={language === 'ar'}
                className={`px-2 py-0.5 rounded-xs text-[10px] font-bold transition-colors cursor-pointer ${
                  language === 'ar'
                    ? 'bg-[#0284c7] text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                العربية
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tier 2: Main Brand & Navigation Bar */}
      <div className="h-[74px] w-full max-w-[1200px] mx-auto px-5 lg:px-12 flex items-center justify-between gap-6">
        {/* Brand Lockup */}
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 group shrink-0 text-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0284c7] rounded-sm py-1 cursor-pointer"
          aria-label="Panorama Glass Company Home"
        >
          <div className="h-11 w-11 rounded-sm bg-white border border-slate-200 flex items-center justify-center overflow-hidden p-1 transition-transform duration-200 group-hover:scale-105">
            <SafeImage
              src={PANORAMA_EMBLEM_URL}
              alt="Panorama Glass Company Emblem"
              className="h-full w-full object-contain"
              fallbackLabel="PG"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-extrabold tracking-[0.14em] uppercase text-[#0b192c] leading-none group-hover:text-[#0284c7] transition-colors whitespace-nowrap">
              {t.brand.main}
            </span>
            <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#64748b] mt-1 whitespace-nowrap">
              {t.brand.sub} · Qatar
            </span>
          </div>
        </button>

        {/* Horizontal Navigation + Primary Action */}
        <div className="flex items-center gap-6 lg:gap-8 shrink-0">
          <nav
            aria-label="Main navigation"
            className="hidden lg:flex items-center gap-7"
          >
            {NAV_ROUTES.map((route) => {
              const active = currentRoute === route;
              return (
                <button
                  key={route}
                  type="button"
                  onClick={() => handleNavClick(route)}
                  aria-current={active ? 'page' : undefined}
                  className={`relative py-2 px-0.5 text-[13px] uppercase tracking-[0.1em] whitespace-nowrap shrink-0 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0284c7] rounded-xs cursor-pointer ${
                    active
                      ? 'text-[#0284c7] font-bold'
                      : 'text-[#0b192c]/80 hover:text-[#0284c7] font-semibold'
                  }`}
                >
                  {t.nav[route]}
                  {active && (
                    <motion.span
                      layoutId="nav-active-underline"
                      transition={{ type: 'spring', stiffness: 440, damping: 34 }}
                      className="absolute inset-x-0 -bottom-0.5 h-[2px] bg-[#0284c7]"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Compact Language Switcher for Tablet (below lg) */}
          <div
            role="group"
            aria-label="Language selector compact"
            className="hidden sm:flex lg:hidden items-center bg-slate-100 p-1 rounded-sm border border-slate-200"
          >
            <button
              type="button"
              onClick={() => onLanguageChange('en')}
              aria-pressed={language === 'en'}
              className={`px-2 py-1 rounded-xs text-[11px] font-bold transition-all cursor-pointer ${
                language === 'en' ? 'bg-[#0b192c] text-white' : 'text-slate-600'
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => onLanguageChange('ar')}
              aria-pressed={language === 'ar'}
              className={`px-2 py-1 rounded-xs text-[11px] font-bold transition-all cursor-pointer ${
                language === 'ar' ? 'bg-[#0b192c] text-white' : 'text-slate-600'
              }`}
            >
              العربية
            </button>
          </div>

          {/* Primary Architectural CTA */}
          <button
            type="button"
            onClick={() => handleNavClick('request-a-quote')}
            className="glass-sheen hidden sm:inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.12em] font-bold bg-[#0284c7] hover:bg-[#0b192c] text-white px-5 py-3 rounded-sm transition-colors duration-200 whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8] cursor-pointer"
          >
            <span>{t.nav['request-a-quote']}</span>
            <span className="material-symbols-outlined text-[17px] text-[#e0f2fe] group-hover:translate-x-0.5 transition-transform rtl:rotate-180">
              arrow_forward
            </span>
          </button>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-sm bg-slate-100 border border-slate-200 text-[#0f172a] hover:bg-slate-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0284c7]"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-white text-[#0f172a] border-t border-slate-200 shadow-xl px-5 py-5 space-y-4"
          >
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#475569] pb-3 border-b border-slate-100">
              <a href="tel:+97450777210" className="inline-flex items-center gap-1.5 font-semibold text-[#0b192c]">
                <span className="material-symbols-outlined text-[16px] text-[#0284c7]">call</span>
                (+974) 50777210
              </a>
              <a href="mailto:info@panoramaglass.net" className="inline-flex items-center gap-1.5 font-semibold text-[#0b192c]">
                <span className="material-symbols-outlined text-[16px] text-[#0284c7]">mail</span>
                info@panoramaglass.net
              </a>
            </div>

            <nav aria-label="Mobile navigation" className="flex flex-col gap-1.5">
              {NAV_ROUTES.map((route) => {
                const active = currentRoute === route;
                return (
                  <button
                    key={route}
                    type="button"
                    onClick={() => handleNavClick(route)}
                    className={`w-full text-start px-4 py-3 rounded-sm text-sm uppercase tracking-wider transition-colors flex items-center justify-between ${
                      active
                        ? 'bg-[#e0f2fe] text-[#0369a1] font-bold border-s-2 border-[#0284c7]'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-[#0f172a] font-semibold'
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

            <div className="pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center bg-slate-100 p-1 rounded-sm border border-slate-200">
                <button
                  type="button"
                  onClick={() => onLanguageChange('en')}
                  className={`px-3 py-1.5 rounded-xs text-xs font-bold ${
                    language === 'en' ? 'bg-[#0b192c] text-white' : 'text-slate-600'
                  }`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => onLanguageChange('ar')}
                  className={`px-3 py-1.5 rounded-xs text-xs font-bold ${
                    language === 'ar' ? 'bg-[#0b192c] text-white' : 'text-slate-600'
                  }`}
                >
                  العربية
                </button>
              </div>

              <button
                type="button"
                onClick={() => handleNavClick('request-a-quote')}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-bold bg-[#0284c7] hover:bg-[#0b192c] text-white px-5 py-3 rounded-sm"
              >
                <span>{t.nav['request-a-quote']}</span>
                <span className="material-symbols-outlined text-[18px] text-[#e0f2fe] rtl:rotate-180">
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
