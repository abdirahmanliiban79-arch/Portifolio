"use client";

import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/cn";
import { CheckIcon } from "@/components/ui/Icons";

const ease = [0.16, 1, 0.3, 1] as const;

const timeline = ["Picked up", "In transit", "Delivered"];

/**
 * Mini "Shipment Tracker" app that assembles as the agent demo advances:
 * 0 plan → wireframe, 1 build → real UI, 2 test → passing badge,
 * 3 review → reviewed stamp, 4 ship → live.
 */
export function ShipmentPreview({ step, className }: { step: number; className?: string }) {
  const built = step >= 1;
  const tested = step >= 2;
  const reviewed = step >= 3;
  const live = step >= 4;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-ink-raised/80 p-5",
        className,
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase">
            Shipment
          </p>
          <p className="mt-1 truncate font-display text-lg font-medium text-white">
            #SHP-2048
          </p>
        </div>
        <div className="flex items-center gap-2">
          <AnimatePresence>
            {tested ? (
              <motion.span
                key="tests"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, ease }}
                className="inline-flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 font-mono text-[10px] text-emerald-300"
              >
                <CheckIcon className="size-3" /> tests
              </motion.span>
            ) : null}
            {reviewed ? (
              <motion.span
                key="stamp"
                initial={{ opacity: 0, scale: 1.15, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: -5 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.45, ease }}
                className="rounded border-2 border-gold/60 px-1.5 py-px font-mono text-[9px] font-semibold tracking-[0.2em] text-gold uppercase"
              >
                Reviewed
              </motion.span>
            ) : null}
            {live ? (
              <motion.span
                key="live"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, ease }}
                className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-2 py-0.5 font-mono text-[10px] text-gold"
              >
                <span className="relative flex size-1.5">
                  <span className="animate-ping-once absolute inline-flex size-full rounded-full bg-gold" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-gold" />
                </span>
                live
              </motion.span>
            ) : null}
          </AnimatePresence>
        </div>
      </div>

      {/* Body: wireframe and real UI share one grid cell and cross-fade */}
      <div className="mt-5 grid">
        <motion.div
          aria-hidden="true"
          animate={{ opacity: built ? 0 : 1 }}
          transition={{ duration: 0.4, ease }}
          className="col-start-1 row-start-1 space-y-3"
        >
          <div className="h-3 w-2/3 rounded bg-white/[0.07]" />
          <div className="h-2 w-full rounded-full bg-white/[0.07]" />
          <div className="flex gap-2">
            {timeline.map((t) => (
              <div key={t} className="h-6 flex-1 rounded-lg border border-dashed border-white/10" />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={false}
          animate={built ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
          transition={{ duration: 0.5, ease, delay: built ? 0.1 : 0 }}
          className="col-start-1 row-start-1 space-y-3"
        >
          <p className="flex items-center justify-between text-sm text-secondary">
            <span>
              Mogadishu <span className="text-gold">→</span> Nairobi
            </span>
            <span className="font-mono text-[11px] text-muted">ETA Nov 6</span>
          </p>
          <div className="h-2 overflow-hidden rounded-full bg-white/[0.07]">
            <motion.div
              className="h-full origin-left rounded-full bg-gradient-to-r from-gold to-gold-light"
              initial={false}
              animate={{ scaleX: live ? 0.66 : built ? 0.33 : 0 }}
              transition={{ duration: 0.8, ease }}
            />
          </div>
          <div className="flex gap-2">
            {timeline.map((t, i) => {
              const reached = live ? i <= 1 : i === 0;
              return (
                <span
                  key={t}
                  className={cn(
                    "flex-1 rounded-lg border px-2 py-1 text-center font-mono text-[10px] transition-colors duration-500",
                    reached
                      ? "border-gold/30 bg-gold/[0.08] text-gold"
                      : "border-white/10 text-muted",
                  )}
                >
                  {t}
                </span>
              );
            })}
          </div>
        </motion.div>
      </div>

    </div>
  );
}
