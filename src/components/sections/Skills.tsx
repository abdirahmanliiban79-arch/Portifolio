import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechChips } from "@/components/ui/TechChips";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <Section
      id="skills"
      labelledBy="skills-title"
      className="border-t border-white/[0.06]"
    >
      <SectionHeading
        id="skills-title"
        eyebrow="03 / Capability Map"
        title="A capability map, not a logo wall."
        lead="The stack is a means to an end. Each group below is a category of problems I can take on — not a checklist to skim."
      />
      <div className="mt-16 grid gap-x-16 gap-y-12 lg:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Reveal key={group.id} delay={index * 80}>
            <article className="group relative border-t border-white/10 pt-6 transition-colors duration-500 hover:border-coral/30 lg:pt-8">
              <p className="font-mono text-[11px] tracking-[0.3em] text-muted">
                {group.index}
              </p>
              <h3 className="mt-2 font-display text-2xl text-white">
                {group.title}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                {group.capability}
              </p>
              <TechChips items={group.items} className="mt-5" />
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal delay={320}>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8 font-mono text-[10px] tracking-[0.25em] text-muted uppercase">
          <p>Frontend · Backend · Data · Tooling</p>
          <p className="text-coral/80">Systems over stacks</p>
        </div>
      </Reveal>
    </Section>
  );
}
