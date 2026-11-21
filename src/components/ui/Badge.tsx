import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

type BadgeTone = 'primary' | 'secondary' | 'tertiary' | 'neutral';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
}

const TONE_CLASSES: Record<BadgeTone, string> = {
  primary: 'bg-primary-fixed text-primary-container',
  secondary: 'bg-secondary-fixed text-secondary',
  tertiary: 'bg-tertiary-fixed text-tertiary-container',
  neutral: 'bg-surface-container-low text-on-surface-variant',
};

export function Badge({ tone = 'primary', className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-xs px-2 py-1 text-[10px] font-bold uppercase tracking-[0.14em]',
        TONE_CLASSES[tone],
        className,
      )}
      {...props}
    />
  );
}
