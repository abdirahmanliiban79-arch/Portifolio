"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import type { BuildStage } from "@/data/skills";

/** Four process steps joined by a line that fills as the row scrolls into view. */
export function ProcessSteps({ stages }: { stages: BuildStage[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 55%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <ol
      ref={ref}
      className="relative grid gap-10 md:grid-cols-4 md:gap-6"
    >
      {/* Track: vertical on mobile, horizontal from md up */}
      <span
        aria-hidden="true"
        className="absolute top-2 bottom-2 left-[7px] w-px bg-white/10 md:top-[7px] md:right-0 md:bottom-auto md:left-0 md:h-px md:w-auto"
      />
      <motion.span
        aria-hidden="true"
        style={{ scaleY: progress }}
        className="absolute top-2 bottom-2 left-[7px] w-px origin-top bg-gradient-to-b from-gold to-gold-light md:hidden"
      />
      <motion.span
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="absolute top-[7px] right-0 left-0 hidden h-px origin-left bg-gradient-to-r from-gold to-gold-light md:block"
      />

      {stages.map((stage) => (
        <li key={stage.index} className="relative pl-9 md:pt-10 md:pl-0">
          <span
            aria-hidden="true"
            className="absolute top-0 left-0 size-[15px] rounded-full border-2 border-gold bg-ink shadow-[0_0_0_6px_rgba(245,158,11,0.1)]"
          />
          <p className="font-mono text-[11px] tracking-[0.3em] text-gold">
            {stage.index}
          </p>
          <h3 className="mt-2 font-display text-2xl font-medium text-white">
            {stage.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">{stage.body}</p>
        </li>
      ))}
    </ol>
  );
}
