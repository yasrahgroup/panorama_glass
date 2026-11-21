import type { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const BASE_CLASSES =
  'inline-flex items-center justify-center gap-2 rounded-sm font-bold uppercase tracking-[0.12em] transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-on-primary hover:bg-brand-deep focus-visible:ring-brand-sky focus-visible:ring-offset-white',
  secondary:
    'bg-secondary text-on-secondary hover:bg-primary focus-visible:ring-brand-sky focus-visible:ring-offset-white',
  outline:
    'border border-outline-variant bg-surface-bright text-on-surface hover:border-primary hover:text-primary focus-visible:ring-primary focus-visible:ring-offset-white',
  ghost:
    'text-brand-deep hover:bg-brand-ice hover:text-primary-container focus-visible:ring-primary focus-visible:ring-offset-white',
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'px-3 py-2 text-[11px]',
  md: 'px-5 py-3 text-xs',
  lg: 'px-6 py-3.5 text-sm',
};

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(BASE_CLASSES, VARIANT_CLASSES[variant], SIZE_CLASSES[size], className)}
      {...props}
    />
  );
}
