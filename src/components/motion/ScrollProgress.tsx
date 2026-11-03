"use client";

import { motion, useScroll, useSpring } from "motion/react";

/** Thin gold bar at the top of the viewport showing page scroll progress. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[75] h-[2px] origin-left bg-gradient-to-r from-gold via-gold-light to-gold-bright"
    />
  );
}
