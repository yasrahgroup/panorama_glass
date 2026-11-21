import type { SelectHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

export function Select({ className, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn(
        'w-full rounded-sm border border-outline-variant bg-surface-bright px-4 py-3 text-sm text-on-surface transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 aria-invalid:border-error aria-invalid:ring-error/20 disabled:cursor-not-allowed disabled:bg-surface-container-low',
        className,
      )}
      {...props}
    />
  );
}
