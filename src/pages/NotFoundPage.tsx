import type { Language, PageRoute } from '@/types';
import { useTranslations } from '@/i18n';
import { LogoPattern } from '@/components/LogoPattern';
import { Button, Container } from '@/components/ui';

interface NotFoundPageProps {
  language: Language;
  onNavigate: (route: PageRoute) => void;
}

export function NotFoundPage({ language, onNavigate }: NotFoundPageProps) {
  const t = useTranslations(language);

  return (
    <section className="relative flex min-h-[60vh] w-full items-center overflow-hidden bg-logo-fins-dark py-24 text-white lg:py-32">
      <LogoPattern variant="dark" />
      <Container className="relative z-10">
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-brand-sky">
            {t.notFound.eyebrow}
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight [text-wrap:balance] sm:text-5xl">
            {t.notFound.title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 lg:text-lg">
            {t.notFound.description}
          </p>
          <Button
            size="lg"
            onClick={() => onNavigate('home')}
            className="mt-8"
            aria-label={t.notFound.backHome}
          >
            {t.notFound.backHome}
            <span
              className="material-symbols-outlined text-[18px] rtl:rotate-180"
              aria-hidden="true"
            >
              arrow_forward
            </span>
          </Button>
        </div>
      </Container>
    </section>
  );
}
