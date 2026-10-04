import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  labelledBy?: string;
  bleed?: boolean;
};

export function Section({
  id,
  children,
  className,
  containerClassName,
  labelledBy,
  bleed = false,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("relative overflow-hidden py-24 sm:py-32 lg:py-40", className)}
    >
      {bleed ? (
        children
      ) : (
        <div
          className={cn(
            "mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12",
            containerClassName,
          )}
        >
          {children}
        </div>
      )}
    </section>
  );
}
