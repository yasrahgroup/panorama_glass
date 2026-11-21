import type { TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        'min-h-32 w-full resize-y rounded-sm border border-outline-variant bg-surface-bright px-4 py-3 text-sm text-on-surface transition-colors placeholder:text-outline focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 aria-invalid:border-error aria-invalid:ring-error/20 disabled:cursor-not-allowed disabled:bg-surface-container-low',
        className,
      )}
      {...props}
    />
  );
}
