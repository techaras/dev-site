import { motion, useScroll, useSpring, useMotionValue } from 'framer-motion';
import type { SpringOptions } from 'framer-motion';
import type { RefObject } from 'react';
import { useEffect } from 'react';
import { cn } from '@/lib/utils';

export type ScrollProgressProps = {
  className?: string;
  springOptions?: SpringOptions;
  containerRef?: RefObject<HTMLDivElement>;
  progress?: number; // New: manual progress override (0 to 1)
};

const DEFAULT_SPRING_OPTIONS: SpringOptions = {
  stiffness: 200,
  damping: 50,
  restDelta: 0.001,
};

export function ScrollProgress({
  className,
  springOptions,
  containerRef,
  progress,
}: ScrollProgressProps) {
  // Use manual progress if provided, otherwise use scroll-based progress
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  // Create a motion value for manual progress
  const manualProgress = useMotionValue(progress ?? 0);

  // Update manual progress when prop changes
  useEffect(() => {
    if (progress !== undefined) {
      manualProgress.set(progress);
    }
  }, [progress, manualProgress]);

  // Choose which progress value to use
  const activeProgress = progress !== undefined ? manualProgress : scrollYProgress;

  const scaleX = useSpring(activeProgress, {
    ...DEFAULT_SPRING_OPTIONS,
    ...(springOptions ?? {}),
  });

  return (
    <motion.div
      className={cn('inset-x-0 top-0 h-1 origin-left', className)}
      style={{
        scaleX,
      }}
    />
  );
}
