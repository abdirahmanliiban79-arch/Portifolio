"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef, type ReactNode } from "react";

type WipeRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/**
 * Reveals its content with a soft top-to-bottom wipe the first time it scrolls into view.
 * Visibility is tracked on an unclipped outer wrapper, because a fully clipped element
 * is not reported as intersecting (e.g. when jumping straight to the middle of the page).
 */
export function WipeReveal({ children, className, delay = 0 }: WipeRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -12% 0px" });
  const reduce = useReducedMotion();

  const hidden = reduce ? { opacity: 0 } : { opacity: 0, clipPath: "inset(0% 0% 100% 0%)" };
  const shown = reduce ? { opacity: 1 } : { opacity: 1, clipPath: "inset(-5% -5% -5% -5%)" };

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={hidden}
        animate={inView ? shown : hidden}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
