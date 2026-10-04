import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/ui/Reveal";

type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  lead,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn("max-w-3xl", align === "center" && "mx-auto", className)}
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-coral">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-5 font-display text-4xl leading-[1.05] font-medium tracking-[-0.02em] text-white text-balance sm:text-5xl lg:text-6xl"
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={cn(
            "mt-6 max-w-2xl text-base leading-relaxed text-secondary sm:text-lg",
            align === "center" && "mx-auto",
          )}
        >
          {lead}
        </p>
      ) : null}
    </Reveal>
  );
}
