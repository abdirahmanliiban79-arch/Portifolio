import { cn } from "@/lib/cn";

type AvailabilityBadgeProps = {
  label: string;
  className?: string;
};

export function AvailabilityBadge({
  label,
  className,
}: AvailabilityBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-1.5 backdrop-blur-md",
        className,
      )}
    >
      <span className="relative flex size-2" aria-hidden="true">
        <span className="absolute inline-flex size-full animate-ping-slow rounded-full bg-gold-light" />
        <span className="relative inline-flex size-2 rounded-full bg-gold-bright" />
      </span>
      <span className="font-mono text-[10px] tracking-[0.22em] text-secondary uppercase">
        {label}
      </span>
    </span>
  );
}
