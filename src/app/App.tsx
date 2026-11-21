import { useEffect, useState } from 'react';
import type { AppRoute, Language, ModalState, PageRoute } from '@/types';
import { pathToRoute, routeToPath } from '@/utils/portfolio';
import { InteractiveModal } from '@/components/InteractiveModal';
import { AppProviders } from '@/app/AppProviders';
import { AppRoutes } from '@/app/AppRoutes';
import { PageLayout } from '@/components/layout/PageLayout';

export default function App() {
  const [route, setRoute] = useState<AppRoute>(() => pathToRoute(window.location.pathname));
  const [language, setLanguage] = useState<Language>('en');
  const [modal, setModal] = useState<ModalState>(null);
  const [quotePrefill, setQuotePrefill] = useState<string | undefined>(undefined);

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    const onPopState = () => {
      setRoute(pathToRoute(window.location.pathname));
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = (nextRoute: PageRoute, sectionHash?: string) => {
    const targetPath = routeToPath(nextRoute);
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
    setRoute(nextRoute);

    if (sectionHash) {
      window.setTimeout(() => {
        const el = document.getElementById(sectionHash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 280);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleRequestQuoteWithSubject = (subject: string) => {
    setModal(null);
    setQuotePrefill(subject);
    navigate('request-a-quote');
  };

  return (
    <AppProviders>
      <PageLayout
        currentRoute={route}
        language={language}
        onNavigate={navigate}
        onLanguageChange={setLanguage}
        onOpenPolicy={(policyKey) => setModal({ type: 'policy', policyKey })}
      >
        <AppRoutes
          route={route}
          language={language}
          onNavigate={navigate}
          onOpenCertificates={() => setModal({ type: 'certificates' })}
          onOpenModal={setModal}
          onRequestQuoteWithSubject={handleRequestQuoteWithSubject}
          quotePrefill={quotePrefill}
        />
      </PageLayout>

      <InteractiveModal
        modal={modal}
        onClose={() => setModal(null)}
        onRequestQuoteWithSubject={handleRequestQuoteWithSubject}
      />
    </AppProviders>
  );
}
