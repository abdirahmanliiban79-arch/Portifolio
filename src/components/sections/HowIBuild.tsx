import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildStages } from "@/data/skills";

export function HowIBuild() {
  return (
    <Section
      id="process"
      labelledBy="process-title"
      className="border-t border-white/[0.06]"
    >
      <SectionHeading
        id="process-title"
        eyebrow="02 / Engineering Mindset"
        title="How I Build"
        lead="The same four stages whether it is a dashboard, an API, or an agent — because the order of thinking matters more than the speed of typing."
      />
      <ol className="mt-16 divide-y divide-white/10 lg:mt-20">
        {buildStages.map((stage, index) => (
          <li key={stage.index}>
            <Reveal delay={index * 90}>
              <article className="group grid items-baseline gap-4 rounded-2xl px-4 py-8 transition-colors duration-500 hover:bg-white/[0.02] md:grid-cols-12 md:gap-8 lg:px-6 lg:py-10">
                <p className="font-mono text-sm tracking-[0.3em] text-muted transition-colors duration-500 group-hover:text-coral md:col-span-2">
                  <span
                    aria-hidden="true"
                    className="mr-3 inline-block h-px w-6 bg-coral/60 align-middle"
                  />
                  {stage.index}
                </p>
                <h3 className="font-display text-2xl tracking-[-0.01em] text-white transition-transform duration-500 group-hover:translate-x-1 md:col-span-3 lg:text-3xl">
                  {stage.title}
                </h3>
                <p className="max-w-xl leading-relaxed text-secondary md:col-span-7">
                  {stage.body}
                </p>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
