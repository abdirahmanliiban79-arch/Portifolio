"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/cn";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  experience,
  experienceTypeLabel,
  type ExperienceType,
} from "@/data/experience";

type Filter = "all" | ExperienceType;

const typeOrder: ExperienceType[] = ["work", "freelance", "independent", "learning"];

// Only offer tabs for types that actually have entries
const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  ...typeOrder
    .filter((type) => experience.some((entry) => entry.type === type))
    .map((type) => ({ id: type, label: experienceTypeLabel[type] })),
];

export function Experience() {
  const [filter, setFilter] = useState<Filter>("all");
  const visible =
    filter === "all" ? experience : experience.filter((e) => e.type === filter);

  return (
    <Section
      id="experience"
      labelledBy="experience-title"
      className="border-t border-white/[0.06]"
    >
      <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          id="experience-title"
          eyebrow="04 / Experience"
          title="The journey so far."
          lead="Training, studies, and the products I've built along the way."
        />
        <div
          role="group"
          aria-label="Filter experience"
          className="flex w-fit flex-wrap gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1"
        >
          {filters.map((item) => {
            const active = filter === item.id;
            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(item.id)}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm transition-colors duration-300",
                  active ? "text-ink" : "text-secondary hover:text-white",
                )}
              >
                {active ? (
                  <motion.span
                    layoutId="experience-filter"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-gold to-gold-light"
                  />
                ) : null}
                <span className="relative font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <ol className="relative mt-16 lg:mt-20">
        <span
          aria-hidden="true"
          className="absolute top-0 bottom-0 left-[7px] w-px bg-gradient-to-b from-gold/60 via-white/10 to-transparent md:left-[calc(25%+7px)]"
        />
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((entry) => (
            <motion.li
              key={entry.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="relative grid gap-2 pb-12 pl-9 last:pb-0 md:grid-cols-4 md:gap-10 md:pl-0"
            >
              <p className="font-mono text-xs tracking-[0.2em] text-muted md:pt-1 md:text-right">
                {entry.period}
              </p>
              <span
                aria-hidden="true"
                className="absolute top-1 left-0 size-[15px] rounded-full border-2 border-gold bg-ink md:left-[25%]"
              />
              <div className="md:col-span-3 md:pl-10">
                <span className="inline-block rounded-full border border-gold/25 bg-gold/[0.08] px-2.5 py-0.5 font-mono text-[10px] tracking-[0.2em] text-gold uppercase">
                  {experienceTypeLabel[entry.type]}
                </span>
                <h3 className="mt-3 font-display text-2xl font-medium text-white">
                  {entry.title}
                  <span className="text-muted"> · {entry.org}</span>
                </h3>
                <p className="mt-2 max-w-2xl leading-relaxed text-secondary">
                  {entry.summary}
                </p>
                {entry.tags?.length ? (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {entry.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] text-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
        {visible.length === 0 ? (
          <li className="pl-9 text-sm text-muted md:pl-[calc(25%+2.5rem)]">
            Nothing here yet.
          </li>
        ) : null}
      </ol>
    </Section>
  );
}
