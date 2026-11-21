import type { ReactNode } from 'react';
import { motion, useScroll } from 'motion/react';
import type { AppRoute, Language, PageRoute } from '@/types';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';

interface PageLayoutProps {
  currentRoute: AppRoute;
  language: Language;
  onNavigate: (route: PageRoute, hash?: string) => void;
  onLanguageChange: (language: Language) => void;
  onOpenPolicy: (policyKey: 'cookies' | 'privacy' | 'terms') => void;
  children: ReactNode;
}

export function PageLayout({
  currentRoute,
  language,
  onNavigate,
  onLanguageChange,
  onOpenPolicy,
  children,
}: PageLayoutProps) {
  const { scrollYProgress } = useScroll();

  return (
    <div className="flex min-h-screen flex-col bg-surface text-on-surface">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[70] bg-[#0284c7] text-white px-4 py-2 rounded-lg text-sm font-bold focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>
      <motion.div
        aria-hidden="true"
        style={{ scaleX: scrollYProgress, transformOrigin: '0% 50%' }}
        className="pointer-events-none fixed left-0 right-0 top-0 z-[60] h-[3px] bg-gradient-to-r from-brand-deep via-primary to-brand-sky"
      />

      <Navbar
        currentRoute={currentRoute}
        language={language}
        onNavigate={onNavigate}
        onLanguageChange={onLanguageChange}
      />

      <main id="main-content" className="w-full flex-1 pt-[77px] lg:pt-[111px]">
        {children}
      </main>

      <Footer
        language={language}
        onNavigate={onNavigate}
        onOpenPolicy={onOpenPolicy}
      />
    </div>
  );
}
