import { site } from "@/data/site";
import { FloatingChip } from "@/components/hero/FloatingChip";
import { LayersIcon, SparkleIcon } from "@/components/ui/Icons";

export function ProfileComposition() {
  return (
    <div className="relative mx-auto w-full max-w-[22rem] lg:max-w-[24rem]">
      <div
        aria-hidden="true"
        className="absolute -inset-8 rounded-full bg-coral/[0.14] blur-[90px]"
      />
      <div
        aria-hidden="true"
        className="absolute -inset-3 rounded-[2.5rem] border border-white/[0.06]"
      />

      <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.05] p-2.5 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)] backdrop-blur-xl">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.55rem] bg-ink-raised">
          {site.profileImage ? (
            <img
              src={site.profileImage}
              alt={`Portrait of ${site.name}`}
              width={960}
              height={1280}
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div aria-hidden="true" className="absolute inset-0 bg-grid-sm" />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,160,122,0.16),transparent_60%)]"
              />
              <span className="relative font-display text-8xl/[9rem] font-medium text-coral-gradient">
                {site.initials}
              </span>
              <p className="absolute inset-x-0 bottom-0 px-4 pb-3 text-center font-mono text-[8px] tracking-[0.14em] text-muted/70">
                Profile image — replace /public/profile.jpg
              </p>
            </div>
          )}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/[0.09] to-transparent"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-[1.55rem] ring-1 ring-white/10 ring-inset"
          />
        </div>
      </div>

      <FloatingChip
        icon={<SparkleIcon className="size-4 text-coral" />}
        title="Autonomous Builder"
        subtitle="builds end-to-end"
        className="top-0 left-0 -translate-x-2 -translate-y-2 sm:-translate-x-3"
      />
      <FloatingChip
        icon={<LayersIcon className="size-4 text-coral" />}
        title="Problem Solver"
        subtitle="thinks in systems"
        float="delayed"
        className="right-0 bottom-0 translate-x-2 translate-y-2 sm:translate-x-3"
      />

      <div className="glass-strong absolute -bottom-5 left-3 z-20 inline-flex max-w-[calc(100%-1.5rem)] items-center overflow-hidden rounded-xl px-3 py-2.5 font-mono text-[10px] text-muted sm:left-4 sm:px-4">
          <span className="truncate">
            <span className="text-secondary">
              ~/{site.name.toLowerCase().replace(/\s+/g, "")}
            </span>{" "}
            — building products
          </span>
        <span
          aria-hidden="true"
          className="animate-caret ml-0.5 inline-block h-3 w-1.5 shrink-0 bg-coral-strong align-middle"
        />
      </div>
    </div>
  );
}
