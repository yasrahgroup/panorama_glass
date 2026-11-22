import type { TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn('field-control min-h-32 resize-y disabled:cursor-not-allowed disabled:bg-canvas', className)}
      {...props}
    />
  );
}
