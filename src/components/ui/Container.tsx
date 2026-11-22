import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

type ContainerSize = 'default' | 'narrow';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: ContainerSize;
}

const SIZE_CLASSES: Record<ContainerSize, string> = {
  default: '',
  narrow: 'max-w-narrow',
};

export function Container({ size = 'default', className, ...props }: ContainerProps) {
  return (
    <div
      className={cn('container-page', SIZE_CLASSES[size], className)}
      {...props}
    />
  );
}
