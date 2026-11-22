import type { SelectHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

export function Select({ className, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn('field-control cursor-pointer disabled:cursor-not-allowed disabled:bg-canvas', className)}
      {...props}
    />
  );
}
