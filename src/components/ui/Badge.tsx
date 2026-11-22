import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

type BadgeTone = 'primary' | 'secondary' | 'tertiary' | 'neutral';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
}

const TONE_CLASSES: Record<BadgeTone, string> = {
  primary: 'bg-burgundy text-white',
  secondary: 'bg-canvas text-burgundy-deep',
  tertiary: 'bg-surface text-burgundy',
  neutral: 'bg-canvas text-muted border border-line',
};

export function Badge({ tone = 'primary', className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-sm px-2 py-1 text-[10px] font-bold uppercase tracking-[0.14em]',
        TONE_CLASSES[tone],
        className,
      )}
      {...props}
    />
  );
}
