import { cn } from "@/lib/cn";

type StatusBadgeProps = {
  label: string;
  tone: "shipped" | "progress";
  className?: string;
};

export function StatusBadge({ label, tone, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 font-mono text-[10px] tracking-[0.2em] uppercase",
        tone === "progress"
          ? "border-coral/30 bg-coral/[0.08] text-coral"
          : "border-white/10 bg-white/[0.05] text-secondary",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "size-1.5 rounded-full",
          tone === "progress" ? "bg-coral-strong" : "bg-emerald-300/80",
        )}
      />
      {label}
    </span>
  );
}
