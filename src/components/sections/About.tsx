import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { philosophy } from "@/data/philosophy";
import { buildStages } from "@/data/skills";

export function About() {
  return (
    <Section id="about" labelledBy="about-title">
      <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
        <SectionHeading
          id="about-title"
          eyebrow="01 / About"
          title={philosophy.heading}
          lead={philosophy.paragraphs[0]}
          className="lg:col-span-6"
        />
        <Reveal delay={100} className="lg:col-span-6">
          <p className="font-display text-xl leading-relaxed tracking-[-0.01em] text-secondary sm:text-2xl">
            {philosophy.paragraphs[1]}
          </p>
        </Reveal>
      </div>

      <Reveal delay={80}>
        <div className="mt-20 rounded-[2rem] border border-white/[0.08] bg-white/[0.02] p-6 sm:p-10 lg:mt-24">
          <p className="mb-10 font-mono text-[11px] tracking-[0.3em] text-muted uppercase">
            How I build
          </p>
          <ProcessSteps stages={buildStages} />
        </div>
      </Reveal>
    </Section>
  );
}
