"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { cn } from "@/lib/cn";
import { CheckIcon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ToolLogo } from "@/components/ui/ToolLogo";
import { RollingNumber } from "@/components/motion/RollingNumber";
import { WipeReveal } from "@/components/motion/WipeReveal";
import { skillGroups, strengths } from "@/data/skills";

const ease = [0.16, 1, 0.3, 1] as const;

export function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const panelRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const active = skillGroups[activeIndex];

  // Spotlight follows the mouse via CSS variables, so no React re-render per move
  function onPanelMove(event: PointerEvent<HTMLDivElement>) {
    if (reduce || event.pointerType !== "mouse" || !panelRef.current) return;
    const rect = panelRef.current.getBoundingClientRect();
    panelRef.current.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    panelRef.current.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }

  function select(index: number) {
    const next = (index + skillGroups.length) % skillGroups.length;
    setActiveIndex(next);
    tabRefs.current[next]?.focus();
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const keys: Record<string, number> = {
      ArrowDown: activeIndex + 1,
      ArrowRight: activeIndex + 1,
      ArrowUp: activeIndex - 1,
      ArrowLeft: activeIndex - 1,
      Home: 0,
      End: skillGroups.length - 1,
    };
    if (event.key in keys) {
      event.preventDefault();
      select(keys[event.key]);
    }
  }

  return (
    <Section
      id="skills"
      labelledBy="skills-title"
      className="border-t border-white/[0.06]"
    >
      <SectionHeading
        id="skills-title"
        eyebrow="05 / Skills"
        title={
          <>
            My stack, <span className="text-gold-gradient">end to end.</span>
          </>
        }
        lead="Pick a layer to see the tools I use there."
      />

      <WipeReveal>
        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-12 lg:gap-8">
          {/* Category tabs: horizontal scroll on mobile, vertical list on desktop */}
          <div
            role="tablist"
            aria-label="Skill categories"
            onKeyDown={onKeyDown}
            className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:-mx-8 sm:px-8 lg:col-span-4 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0"
          >
            {skillGroups.map((group, index) => {
              const selected = index === activeIndex;
              return (
                <button
                  key={group.id}
                  ref={(node) => {
                    tabRefs.current[index] = node;
                  }}
                  id={`skills-tab-${group.id}`}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls="skills-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "group relative flex shrink-0 items-center gap-4 rounded-2xl border px-4 py-3 text-left transition-colors duration-300 lg:px-5 lg:py-4",
                    selected
                      ? "border-gold/40 text-white"
                      : "border-white/[0.06] text-secondary hover:border-white/15 hover:text-white",
                  )}
                >
                  {selected ? (
                    <motion.span
                      layoutId="skills-active-tab"
                      transition={{ type: "spring", stiffness: 260, damping: 30, mass: 0.9 }}
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gold/[0.14] to-gold/[0.02]"
                    />
                  ) : null}
                  <span
                    className={cn(
                      "relative font-mono text-[11px] tracking-[0.2em] transition-colors",
                      selected ? "text-gold" : "text-muted",
                    )}
                  >
                    {group.index}
                  </span>
                  <span className="relative font-display text-base font-medium whitespace-nowrap lg:flex-1 lg:text-xl">
                    {group.title}
                  </span>
                  <span className="relative hidden font-mono text-[11px] text-muted lg:inline">
                    {group.items.length}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active category panel */}
          <div
            ref={panelRef}
            id="skills-panel"
            role="tabpanel"
            aria-labelledby={`skills-tab-${active.id}`}
            onPointerMove={onPanelMove}
            className="group/panel relative min-h-[24rem] overflow-hidden rounded-[2rem] border border-white/[0.08] bg-ink-raised/60 p-6 sm:p-10 lg:col-span-8"
          >
            {/* Cursor spotlight */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/panel:opacity-100"
              style={{
                background:
                  "radial-gradient(360px circle at var(--mx, 50%) var(--my, 50%), rgb(245 158 11 / 0.09), transparent 65%)",
              }}
            />
            <span
              aria-hidden="true"
              className="text-outline-gold pointer-events-none absolute top-4 right-6 font-display text-[7rem] font-semibold select-none sm:right-10 sm:text-[9rem]"
            >
              <RollingNumber value={active.index} />
            </span>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-gold/[0.10] blur-[90px]"
            />
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active.id}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8, filter: "blur(6px)" }}
                animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: -6, filter: "blur(4px)" }}
                transition={{ duration: 0.4, ease }}
                className="relative"
              >
                <h3 className="font-display text-4xl font-semibold tracking-[-0.02em] text-white sm:text-5xl">
                  {active.title}
                </h3>
                <p className="mt-4 max-w-md text-secondary">{active.capability}</p>

                <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {active.items.map((item, index) => (
                    <motion.li
                      key={item}
                      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 10, filter: "blur(4px)" }}
                      animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{ duration: 0.5, delay: 0.08 + index * 0.04, ease }}
                      className="group relative flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 transition-[border-color,background-color] duration-300 hover:border-gold/40 hover:bg-gold/[0.05]"
                    >
                      <ToolLogo
                        name={item}
                        className="text-white/70 transition-[color,transform] duration-300 group-hover:-translate-y-0.5 group-hover:text-gold"
                      />
                      <span className="text-sm font-medium text-white sm:text-[15px]">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </WipeReveal>

      <Reveal delay={120}>
        <div className="mt-10 flex flex-col gap-4 rounded-[2rem] border border-white/[0.06] px-6 py-5 sm:flex-row sm:items-center sm:px-8">
          <p className="shrink-0 font-mono text-[11px] tracking-[0.3em] text-muted uppercase">
            Core strengths
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {strengths.map((strength) => (
              <li key={strength} className="flex items-center gap-2 text-sm text-secondary">
                <CheckIcon className="size-3.5 text-gold" />
                {strength}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
