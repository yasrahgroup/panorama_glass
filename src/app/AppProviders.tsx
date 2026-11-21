import type { ReactNode } from 'react';
import { MotionConfig } from 'motion/react';

interface AppProvidersProps {
  children: ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
