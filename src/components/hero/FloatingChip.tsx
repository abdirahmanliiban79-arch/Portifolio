import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type FloatingChipProps = {
  icon: ReactNode;
  title: string;
  subtitle: string;
  className?: string;
  float?: "default" | "delayed";
};

export function FloatingChip({
  icon,
  title,
  subtitle,
  className,
  float = "default",
}: FloatingChipProps) {
  return (
    <div className={cn("absolute z-10", className)}>
      <div
        className={cn(
          "glass-strong flex items-center gap-2.5 rounded-2xl px-3 py-2 sm:px-4 sm:py-3",
          float === "delayed" ? "animate-float-delayed" : "animate-float",
        )}
      >
        {icon}
        <span className="flex flex-col">
          <span className="text-xs font-medium whitespace-nowrap text-white">
            {title}
          </span>
          <span className="text-[10px] whitespace-nowrap text-muted">
            {subtitle}
          </span>
        </span>
      </div>
    </div>
  );
}
