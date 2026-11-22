import { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'motion/react';

interface AnimatedCounterProps {
  target: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
}

export function AnimatedCounter({
  target,
  decimals = 0,
  suffix = '',
  prefix = '',
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { amount: 0.25 });
  const prefersReduced = useReducedMotion();
  const formattedTarget = `${prefix}${target.toFixed(decimals)}${suffix}`;
  const [animatedValue, setAnimatedValue] = useState<number | null>(null);

  useEffect(() => {
    if (!inView || prefersReduced) return;
    const controls = animate(0, target, {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: setAnimatedValue,
      onComplete: () => setAnimatedValue(null),
    });
    return () => controls.stop();
  }, [inView, prefersReduced, target]);

  const display =
    animatedValue === null
      ? formattedTarget
      : `${prefix}${animatedValue.toFixed(decimals)}${suffix}`;

  return (
    <span ref={ref} className="tabular-nums font-mono">
      {display}
    </span>
  );
}
