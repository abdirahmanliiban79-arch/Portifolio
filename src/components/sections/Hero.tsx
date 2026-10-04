import { site } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { PrimaryButtonLink, GhostButtonLink } from "@/components/ui/Buttons";
import { ArrowDownIcon } from "@/components/ui/Icons";
import { ProfileComposition } from "@/components/hero/ProfileComposition";

const identityParts = site.identityLine
  .split(".")
  .map((part) => part.trim())
  .filter((part) => part.length > 0);

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 lg:flex lg:min-h-svh lg:items-center lg:pt-44 lg:pb-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid mask-fade-bottom"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-20 size-[26rem] rounded-full bg-coral/[0.07] blur-[120px] sm:size-[34rem]"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal delay={0}>
              <span className="glass inline-flex w-fit items-center gap-2.5 rounded-full px-3 py-1.5">
                <span className="relative flex size-2" aria-hidden="true">
                  <span className="absolute inline-flex size-full animate-ping-slow rounded-full bg-coral-rose" />
                  <span className="relative inline-flex size-2 rounded-full bg-coral-strong" />
                </span>
                <span className="font-mono text-[10px] tracking-[0.2em] text-secondary uppercase sm:text-[11px]">
                  {site.heroBadge}
                </span>
              </span>
            </Reveal>

            <Reveal delay={80} y={0} className="group mt-6">
              <span
                aria-hidden="true"
                className="mb-6 block h-px w-12 bg-gradient-to-r from-coral to-transparent"
              />
              <h1 className="font-display text-[clamp(2.6rem,7.5vw,5.8rem)] leading-[0.98] font-medium tracking-[-0.02em] text-white uppercase">
                <span
                  className="block translate-y-4 opacity-0 transition-all duration-700 ease-out-expo group-data-[visible=true]:translate-y-0 group-data-[visible=true]:opacity-100"
                  style={{ transitionDelay: "60ms" }}
                >
                  Building systems
                </span>
                <span
                  className="block translate-y-4 opacity-0 transition-all duration-700 ease-out-expo group-data-[visible=true]:translate-y-0 group-data-[visible=true]:opacity-100"
                  style={{ transitionDelay: "160ms" }}
                >
                  that turn problems
                </span>
                <span
                  className="block translate-y-4 opacity-0 transition-all duration-700 ease-out-expo group-data-[visible=true]:translate-y-0 group-data-[visible=true]:opacity-100"
                  style={{ transitionDelay: "260ms" }}
                >
                  into <span className="text-coral-gradient">products.</span>
                </span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-secondary sm:text-lg">
                {site.heroSupport}
              </p>
            </Reveal>

            <Reveal delay={260}>
              <p className="mt-6 font-mono text-[11px] tracking-[0.22em] text-muted uppercase">
                {identityParts.map((part, index) => (
                  <span key={part}>
                    {index > 0 ? <span className="text-coral"> · </span> : null}
                    {part}
                  </span>
                ))}
              </p>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-9 flex flex-wrap gap-4">
                <PrimaryButtonLink href="#work" withArrow>
                  Explore My Work
                </PrimaryButtonLink>
                <GhostButtonLink href="#contact">
                  Let&apos;s Connect
                </GhostButtonLink>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="mt-16 hidden items-center gap-3 lg:flex">
                <ArrowDownIcon className="size-4 animate-float text-coral" />
                <span className="font-mono text-[10px] tracking-[0.3em] text-muted uppercase">
                  Scroll
                </span>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <ProfileComposition />
          </div>
        </div>
      </div>
    </section>
  );
}
