import { site } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { PrimaryButtonLink, GhostButtonLink } from "@/components/ui/Buttons";
import { ArrowDownIcon } from "@/components/ui/Icons";
import { ProfileComposition } from "@/components/hero/ProfileComposition";
import { Magnetic } from "@/components/motion/Magnetic";
import { RotatingWord } from "@/components/motion/RotatingWord";
import { TiltCard } from "@/components/motion/TiltCard";

const identityParts = site.identityLine
  .split(".")
  .map((part) => part.trim())
  .filter((part) => part.length > 0);

/** Headline lines animate with CSS so the LCP text never waits for hydration. */
function Line({ delay, children }: { delay: number; children: React.ReactNode }) {
  return (
    <span className="block overflow-hidden pb-[0.06em]">
      <span className="hero-line block whitespace-nowrap" style={{ animationDelay: `${delay}ms` }}>
        {children}
      </span>
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 lg:flex lg:min-h-svh lg:items-center lg:pt-36 lg:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid mask-fade-bottom"
      />
      <div
        aria-hidden="true"
        className="animate-drift pointer-events-none absolute -top-32 -right-24 size-[28rem] rounded-full bg-gold/[0.12] blur-[130px] sm:size-[38rem]"
      />
      <div
        aria-hidden="true"
        className="animate-drift-reverse pointer-events-none absolute bottom-0 -left-40 size-[22rem] rounded-full bg-gold-light/[0.08] blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
          <div className="lg:col-span-8">
            <Reveal delay={0}>
              <span className="glass inline-flex w-fit items-center gap-2.5 rounded-full px-3 py-1.5">
                <span className="relative flex size-2" aria-hidden="true">
                  <span className="absolute inline-flex size-full animate-ping-slow rounded-full bg-gold-light" />
                  <span className="relative inline-flex size-2 rounded-full bg-gold-bright" />
                </span>
                <span className="font-mono text-[10px] tracking-[0.2em] text-secondary uppercase sm:text-[11px]">
                  {site.heroBadge}
                  {site.available ? ` · ${site.availabilityLabel}` : null}
                </span>
              </span>
            </Reveal>

            <h1 className="mt-7 font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.92] font-semibold tracking-[-0.035em] text-white uppercase">
              <Line delay={80}>Building</Line>
              <Line delay={180}>
                <span className="text-outline">software</span> for
              </Line>
              <Line delay={280}>
                <RotatingWord
                  words={site.industries}
                  className="text-gold-gradient"
                />
                <span className="text-gold">.</span>
              </Line>
            </h1>

            <Reveal delay={360}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-secondary sm:text-lg">
                {site.heroSupport}
              </p>
            </Reveal>

            <Reveal delay={420}>
              <div className="mt-9 flex flex-wrap gap-4">
                <Magnetic>
                  <PrimaryButtonLink href="#contact" withArrow>
                    Hire me
                  </PrimaryButtonLink>
                </Magnetic>
                <Magnetic>
                  {site.cvUrl ? (
                    <GhostButtonLink href={site.cvUrl} download>
                      Download CV
                    </GhostButtonLink>
                  ) : (
                    <GhostButtonLink href="#services">See services</GhostButtonLink>
                  )}
                </Magnetic>
              </div>
            </Reveal>

            <Reveal delay={480}>
              <p className="mt-10 font-mono text-[11px] tracking-[0.22em] text-muted uppercase">
                {identityParts.map((part, index) => (
                  <span key={part}>
                    {index > 0 ? <span className="text-gold"> · </span> : null}
                    {part}
                  </span>
                ))}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-4">
            <Reveal delay={200} y={40}>
              <TiltCard className="rounded-[2rem]">
                <ProfileComposition />
              </TiltCard>
            </Reveal>
          </div>
        </div>

        <a
          href="#about"
          className="mt-16 hidden w-fit items-center gap-3 lg:flex"
          aria-label="Scroll to About"
        >
          <ArrowDownIcon className="size-4 animate-float text-gold" />
          <span className="font-mono text-[10px] tracking-[0.3em] text-muted uppercase">
            Scroll
          </span>
        </a>
      </div>
    </section>
  );
}
