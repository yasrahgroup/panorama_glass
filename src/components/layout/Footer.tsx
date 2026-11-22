import type { Language, PageRoute } from '@/types';
import { PANORAMA_EMBLEM_URL } from '@/data/panoramaData';
import { useTranslations } from '@/i18n';
import { SafeImage } from '@/components/SafeImage';

interface FooterProps {
  language: Language;
  onNavigate: (route: PageRoute) => void;
  onOpenPolicy: (policyKey: 'cookies' | 'privacy' | 'terms') => void;
}

export function Footer({ language, onNavigate, onOpenPolicy }: FooterProps) {
  const t = useTranslations(language);

  return (
    <footer className="footer text-on-dark relative">
      <div className="h-[3px] w-full bg-burgundy" />
      <div className="w-full max-w-7xl mx-auto px-5 lg:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 flex flex-col justify-between pe-0 lg:pe-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="h-11 w-11 rounded-lg bg-surface p-1 border border-sand/30 flex items-center justify-center shadow-sm">
                  <SafeImage
                    src={PANORAMA_EMBLEM_URL}
                    alt="Panorama Glass Company Emblem"
                    className="h-full w-full object-contain"
                    fallbackLabel="PG"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-lg font-bold uppercase tracking-wider text-white leading-none">
                    {t.brand.main}
                  </span>
                  <span className="font-mono text-[10px] font-bold uppercase text-sand tracking-widest mt-1">
                    {t.brand.sub}
                  </span>
                </div>
              </div>
              <p className="text-sm text-sand/80 max-w-sm leading-relaxed">
                {t.brand.tagline}
              </p>
            </div>

            <div className="flex items-center gap-2.5 pt-6">
              <button
                type="button"
                onClick={() => onNavigate('our-portfolio')}
                aria-label="Explore Panorama Glass Portfolio"
                className="w-10 h-10 rounded-lg bg-white/8 border border-white/15 flex items-center justify-center text-sand hover:bg-burgundy hover:text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy focus-visible:ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy focus-visible:ring-offset-2 focus-visible:ring-offset-slate"
              >
                <span className="material-symbols-outlined text-[18px]">share</span>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('our-story')}
                aria-label="Explore Panorama Glass Story"
                className="w-10 h-10 rounded-lg bg-white/8 border border-white/15 flex items-center justify-center text-sand hover:bg-burgundy hover:text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy focus-visible:ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy focus-visible:ring-offset-2 focus-visible:ring-offset-slate"
              >
                <span className="material-symbols-outlined text-[18px]">public</span>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('request-a-quote')}
                aria-label="Request a Project Quotation"
                className="w-10 h-10 rounded-lg bg-white/8 border border-white/15 flex items-center justify-center text-sand hover:bg-burgundy hover:text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy focus-visible:ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy focus-visible:ring-offset-2 focus-visible:ring-offset-slate"
              >
                <span className="material-symbols-outlined text-[18px]">apartment</span>
              </button>
              <a
                href="mailto:info@panoramaglass.net"
                aria-label="Email Panorama Glass Sales"
                className="w-10 h-10 rounded-lg bg-white/8 border border-white/15 flex items-center justify-center text-sand hover:bg-burgundy hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy focus-visible:ring-offset-2 focus-visible:ring-offset-slate"
              >
                <span className="material-symbols-outlined text-[18px]">mail</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <div className="font-mono text-xs uppercase tracking-[0.16em] font-bold text-clay">
              {t.footer.facilities.title}
            </div>
            <ul className="space-y-4 text-sm text-sand/80">
              <li className="flex flex-col">
                <strong className="text-white font-semibold">New Industrial Area, Doha</strong>
                <span>St 26, Bldg 30, Area 81 · P.O. Box: 40022</span>
                <span className="text-sand font-mono text-xs font-semibold mt-0.5 tabular-nums">
                  Facility Area: 8,000 m²
                </span>
              </li>
              <li className="flex flex-col">
                <strong className="text-white font-semibold">Trading &amp; Processing</strong>
                <span>Glass, Aluminium &amp; Accessories</span>
                <span className="text-sand font-mono text-xs font-semibold mt-0.5 tabular-nums">
                  500+ Containers Stocked
                </span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <div className="font-mono text-xs uppercase tracking-[0.16em] font-bold text-clay">
              {t.footer.inquiries.title}
            </div>
            <div className="space-y-2.5 text-sm text-sand/80">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sand text-[18px]">mail</span>
                <a
                  href="mailto:info@panoramaglass.net"
                  className="hover:text-clay transition-colors font-medium focus-visible:outline-none focus-visible:underline focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 focus-visible:ring-offset-slate"
                >
                  info@panoramaglass.net
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sand text-[18px]">call</span>
                <a
                  href="tel:+97450777210"
                  className="hover:text-clay transition-colors tabular-nums focus-visible:outline-none focus-visible:underline focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 focus-visible:ring-offset-slate"
                >
                  (+974) 50777210
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sand text-[18px]">call</span>
                <a
                  href="tel:+97470444877"
                  className="hover:text-clay transition-colors tabular-nums focus-visible:outline-none focus-visible:underline focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 focus-visible:ring-offset-slate"
                >
                  (+974) 70444877
                </a>
              </div>
              <div className="pt-1 font-mono text-[11px] font-semibold text-sand/70">
                Doha, Qatar · New Industrial Area
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <div className="font-mono text-xs uppercase tracking-[0.16em] font-bold text-clay">
              {t.footer.certifications.title}
            </div>
            <ul className="space-y-2.5 text-xs text-sand/80">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sand text-[18px]">verified</span>
                <span className="text-white font-bold">ISO 9001:2015</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sand text-[18px]">verified</span>
                <span className="text-white font-bold">ISO 14001:2015</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sand text-[18px]">verified</span>
                <span className="text-white font-bold">OHSAS 45001:2018</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sand text-[18px]">verified</span>
                <span className="text-white font-bold">EN 12600 / ASTM C1036</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom text-on-dark py-4 px-5 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-sand/80">
          <div>{t.footer.copyright}</div>
          <div className="flex items-center gap-6 font-medium">
            <button
              type="button"
              onClick={() => onOpenPolicy('cookies')}
              className="hover:text-clay transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy focus-visible:ring-offset-2 focus-visible:outline-none focus-visible:underline focus-visible:ring-2 focus-visible:ring-clay"
            >
              {t.footer.legal.cookies}
            </button>
            <button
              type="button"
              onClick={() => onOpenPolicy('privacy')}
              className="hover:text-clay transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy focus-visible:ring-offset-2 focus-visible:outline-none focus-visible:underline focus-visible:ring-2 focus-visible:ring-clay"
            >
              {t.footer.legal.privacy}
            </button>
            <button
              type="button"
              onClick={() => onOpenPolicy('terms')}
              className="hover:text-clay transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy focus-visible:ring-offset-2 focus-visible:outline-none focus-visible:underline focus-visible:ring-2 focus-visible:ring-clay"
            >
              {t.footer.legal.terms}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
