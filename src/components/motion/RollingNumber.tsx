"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";

const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

/** Odometer-style number: each digit rolls to its new value. */
export function RollingNumber({ value, className }: { value: string; className?: string }) {
  const reduce = useReducedMotion();

  return (
    <span aria-hidden="true" className={cn("inline-flex leading-none", className)}>
      {value.split("").map((char, position) => {
        const digit = Number(char);
        if (Number.isNaN(digit)) return <span key={position}>{char}</span>;
        return (
          <span key={position} className="relative inline-block h-[1em] overflow-hidden">
            <motion.span
              className="flex flex-col"
              initial={false}
              animate={{ y: `${-digit}em` }}
              transition={
                reduce
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 140, damping: 22, mass: 0.8 }
              }
            >
              {DIGITS.map((d) => (
                <span key={d} className="block h-[1em]">
                  {d}
                </span>
              ))}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}
