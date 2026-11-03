"use client";

import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AgentTerminal } from "@/components/agent/AgentTerminal";
import { ShipmentPreview } from "@/components/agent/ShipmentPreview";
import { WipeReveal } from "@/components/motion/WipeReveal";
import { agentWorkflow, type WorkflowStep } from "@/data/services";

const ease = [0.16, 1, 0.3, 1] as const;
const LAST = agentWorkflow.length - 1;

function HumanTag() {
  return (
    <span className="ml-2 rounded-full border border-gold/30 px-2 py-0.5 align-middle font-mono text-[9px] tracking-[0.2em] text-gold uppercase">
      Me
    </span>
  );
}

function StepDot({ step, lit }: { step: WorkflowStep; lit: boolean }) {
  return (
    <span
      className={cn(
        "relative flex size-10 shrink-0 items-center justify-center rounded-full border font-mono text-xs transition-[background-color,border-color,color,box-shadow] duration-500",
        lit
          ? step.human
            ? "border-gold bg-gold text-ink shadow-[0_0_0_6px_rgba(245,158,11,0.14)]"
            : "border-gold/70 bg-ink text-gold"
          : "border-white/12 bg-ink text-muted",
      )}
    >
      {step.index}
    </span>
  );
}

/** Desktop: sticky scene where scroll drives the pipeline and the agent demo. */
function ScrollScene() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const [scrollStep, setScrollStep] = useState(0);
  const [finished, setFinished] = useState(false);
  const [replayStep, setReplayStep] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start 30%", "end end"],
  });
  const fill = useSpring(useTransform(scrollYProgress, [0, 0.85], [0, 1]), {
    stiffness: 120,
    damping: 28,
  });

  // Only re-render when the step actually changes, not on every scroll frame
  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const next = Math.min(LAST, Math.max(0, Math.floor((p / 0.85) * agentWorkflow.length)));
    setScrollStep((prev) => (prev === next ? prev : next));
    setFinished((prev) => (prev === p >= 0.85 ? prev : p >= 0.85));
  });

  // Replay: step through the demo on a timer, then hand control back to scroll
  useEffect(() => {
    if (replayStep === null) return;
    const id = window.setTimeout(
      () => setReplayStep(replayStep >= LAST ? null : replayStep + 1),
      replayStep >= LAST ? 1600 : 1300,
    );
    return () => window.clearTimeout(id);
  }, [replayStep]);

  const step = replayStep ?? scrollStep;

  return (
    <div ref={sceneRef} className="relative mt-16 h-[260vh]">
      <div className="sticky top-28 grid grid-cols-12 items-center gap-10">
        {/* Pipeline */}
        <ol className="relative col-span-5 space-y-7">
          <span aria-hidden="true" className="absolute top-5 bottom-5 left-5 w-px bg-white/10" />
          <motion.span
            aria-hidden="true"
            style={{ scaleY: fill }}
            className="absolute top-5 bottom-5 left-5 w-px origin-top bg-gradient-to-b from-gold to-gold-light"
          />
          {agentWorkflow.map((s, i) => {
            const lit = i <= step;
            const current = i === step;
            return (
              <li key={s.index} className="relative flex gap-5">
                <StepDot step={s} lit={lit} />
                <div
                  className={cn(
                    "pt-1.5 transition-[opacity,transform] duration-500",
                    lit ? "opacity-100" : "opacity-40",
                    current && "translate-x-1",
                  )}
                >
                  <p className="font-display text-xl font-medium text-white">
                    {s.title}
                    {s.human ? <HumanTag /> : null}
                  </p>
                  <p className="mt-1 max-w-xs text-sm leading-relaxed text-muted">{s.body}</p>
                </div>
              </li>
            );
          })}
        </ol>

        {/* Live demo */}
        <div className="relative col-span-7 space-y-4">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-10 rounded-full bg-gold/[0.06] blur-[90px]"
          />
          <AgentTerminal steps={agentWorkflow} step={step} className="relative" />
          <ShipmentPreview step={step} className="relative" />
          <div className="relative flex h-8 items-center justify-between">
            <p className="font-mono text-[11px] text-muted">
              Sample project · Shipment Tracker
            </p>
            <motion.button
              type="button"
              onClick={() => setReplayStep(0)}
              initial={false}
              animate={{ opacity: finished && replayStep === null ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              tabIndex={finished && replayStep === null ? 0 : -1}
              aria-hidden={!(finished && replayStep === null)}
              className="rounded-full border border-white/15 px-3 py-1 font-mono text-[11px] text-secondary transition-colors hover:border-gold/40 hover:text-white"
            >
              ↻ Replay demo
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Mobile/tablet and reduced motion: a plain list where each step reveals in view. */
function StepList({ animate }: { animate: boolean }) {
  return (
    <div className="mt-14 space-y-10">
      <ol className="relative space-y-8">
        <span aria-hidden="true" className="absolute top-5 bottom-5 left-5 w-px bg-gold/30" />
        {agentWorkflow.map((s) => (
          <motion.li
            key={s.index}
            initial={animate ? { opacity: 0, y: 12 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -15% 0px" }}
            transition={{ duration: 0.5, ease }}
            className="relative flex gap-4"
          >
            <StepDot step={s} lit />
            <div className="min-w-0 flex-1 pt-1.5">
              <p className="font-display text-lg font-medium text-white">
                {s.title}
                {s.human ? <HumanTag /> : null}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{s.body}</p>
              <div className="mt-3 space-y-1 rounded-xl border border-white/[0.08] bg-ink-deep/80 px-3 py-2.5 font-mono text-[11px]">
                {s.terminal.map((line) => (
                  <p
                    key={line.text}
                    className={cn(
                      "truncate",
                      line.kind === "ok" ? "text-emerald-400" : line.kind === "info" || line.kind === "cmd" ? "text-secondary" : "text-gold",
                    )}
                  >
                    {line.text}
                  </p>
                ))}
              </div>
            </div>
          </motion.li>
        ))}
      </ol>
      <ShipmentPreview step={LAST} />
    </div>
  );
}

export function AgentWorkflow() {
  const reduce = useReducedMotion();

  return (
    <section
      id="agentic"
      aria-labelledby="agentic-title"
      className="relative border-t border-white/[0.06] py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="agentic-title"
            eyebrow="03 / Agentic Coding"
            title={
              <>
                Fast with AI agents.{" "}
                <span className="text-gold-gradient">Reliable by design.</span>
              </>
            }
            lead="Agents do the heavy lifting. I own the plan and the review, so you get speed without surprises."
          />
          <p className="hidden font-mono text-[11px] tracking-[0.25em] text-muted uppercase lg:block">
            Scroll to run the demo ↓
          </p>
        </div>

        <WipeReveal>
          {reduce ? (
            <StepList animate={false} />
          ) : (
            <>
              <div className="hidden lg:block">
                <ScrollScene />
              </div>
              <div className="lg:hidden">
                <StepList animate />
              </div>
            </>
          )}
        </WipeReveal>
      </div>
    </section>
  );
}
