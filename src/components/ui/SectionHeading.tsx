import { cn } from '@/lib/cn';

type SectionHeadingAlign = 'start' | 'center';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: SectionHeadingAlign;
  as?: 'h2' | 'h3';
  id?: string;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'start',
  as: Heading = 'h2',
  id,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </p>
      )}
      <Heading
        id={id}
        className="font-display text-3xl font-bold tracking-tight text-brand-deep [text-wrap:balance] lg:text-4xl"
      >
        {title}
      </Heading>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-on-surface-variant">
          {description}
        </p>
      )}
    </div>
  );
}
