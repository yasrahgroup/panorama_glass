import { AnimatePresence, motion } from 'motion/react';
import type { AppRoute, Language, ModalState, PageRoute } from '@/types';
import { ContactUsPage } from '@/pages/ContactUsPage';
import { HomePage } from '@/pages/HomePage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { OurPortfolioPage } from '@/pages/OurPortfolioPage';
import { OurStoryPage } from '@/pages/OurStoryPage';
import { RequestQuotePage } from '@/pages/RequestQuotePage';

const PAGE_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface AppRoutesProps {
  route: AppRoute;
  language: Language;
  onNavigate: (route: PageRoute, hash?: string) => void;
  onOpenCertificates: () => void;
  onOpenModal: (modal: ModalState) => void;
  onRequestQuoteWithSubject: (subject: string) => void;
  quotePrefill?: string;
}

export function AppRoutes({
  route,
  language,
  onNavigate,
  onOpenCertificates,
  onOpenModal,
  onRequestQuoteWithSubject,
  quotePrefill,
}: AppRoutesProps) {
  const renderRoute = () => {
    switch (route) {
      case 'home':
        return <HomePage language={language} onNavigate={onNavigate} />;
      case 'our-story':
        return <OurStoryPage onNavigate={onNavigate} onOpenCertificates={onOpenCertificates} />;
      case 'our-portfolio':
        return (
          <OurPortfolioPage
            onNavigate={onNavigate}
            onOpenModal={onOpenModal}
            onRequestQuoteWithSubject={onRequestQuoteWithSubject}
          />
        );
      case 'request-a-quote':
        return <RequestQuotePage prefillSubject={quotePrefill} />;
      case 'contact-us':
        return <ContactUsPage onNavigate={onNavigate} />;
      case 'not-found':
        return <NotFoundPage language={language} onNavigate={onNavigate} />;
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={route}
        initial={{ opacity: 0, y: 14, scale: 0.995 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -10, scale: 0.995 }}
        transition={{ duration: 0.32, ease: PAGE_EASE }}
      >
        {renderRoute()}
      </motion.div>
    </AnimatePresence>
  );
}
