"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

type RotatingWordProps = {
  words: string[];
  interval?: number;
  className?: string;
};

/** Cycles through words with a vertical slide. Screen readers get the full list once. */
export function RotatingWord({
  words,
  interval = 2200,
  className,
}: RotatingWordProps) {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || words.length < 2) return;
    const id = window.setInterval(
      () => setIndex((value) => (value + 1) % words.length),
      interval,
    );
    return () => window.clearInterval(id);
  }, [interval, reduce, words.length]);

  return (
    <span className="relative inline-grid overflow-hidden align-bottom">
      <span className="sr-only">{words.join(", ")}</span>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={words[index]}
          aria-hidden="true"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={className}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
