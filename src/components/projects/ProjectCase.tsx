import type React from "react";
import { CheckIcon } from "@/components/ui/Icons";

export function CaseLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[10px] tracking-[0.3em] text-coral uppercase">
      <span
        aria-hidden="true"
        className="mr-2 inline-block size-1.5 rounded-full bg-coral"
      />
      {children}
    </p>
  );
}

export function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 text-sm leading-relaxed text-secondary"
        >
          <CheckIcon className="mt-0.5 size-4 shrink-0 text-coral" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ApproachList({ items }: { items: string[] }) {
  return (
    <ol className="space-y-5">
      {items.map((item, index) => (
        <li key={item} className="grid grid-cols-[auto_1fr] gap-4">
          <span className="pt-1 font-mono text-xs text-muted">
            {String(index + 1).padStart(2, "0")}
          </span>
          <p className="text-sm leading-relaxed text-secondary">{item}</p>
        </li>
      ))}
    </ol>
  );
}
