import type { InputHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn('field-control disabled:cursor-not-allowed disabled:bg-canvas', className)}
      {...props}
    />
  );
}
