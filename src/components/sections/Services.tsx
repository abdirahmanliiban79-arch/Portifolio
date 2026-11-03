import type { ComponentType, SVGProps } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckIcon, CodeIcon, DatabaseIcon, LayersIcon, SparkleIcon } from "@/components/ui/Icons";
import { TiltCard } from "@/components/motion/TiltCard";
import { services, type ServiceIcon } from "@/data/services";

const icons: Record<ServiceIcon, ComponentType<SVGProps<SVGSVGElement>>> = {
  code: CodeIcon,
  database: DatabaseIcon,
  layers: LayersIcon,
  sparkle: SparkleIcon,
};

export function Services() {
  return (
    <Section
      id="services"
      labelledBy="services-title"
      className="border-t border-white/[0.06]"
    >
      <SectionHeading
        id="services-title"
        eyebrow="02 / Services"
        title={
          <>
            What I can build <span className="text-gold-gradient">for you.</span>
          </>
        }
        lead="Whether you're hiring for a team or need a product built, this is the work I take on from start to finish."
      />
      <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
        {services.map((service, index) => {
          const Icon = icons[service.icon];
          return (
            <li key={service.id}>
              <Reveal delay={index * 90} className="h-full">
                <TiltCard className="rounded-[1.75rem]">
                  <article className="relative flex h-full flex-col rounded-[1.75rem] border border-white/[0.08] bg-ink-raised/60 p-6 transition-colors duration-500 group-hover:border-gold/30 sm:p-7">
                    <div className="flex items-center justify-between">
                      <span className="flex size-12 items-center justify-center rounded-2xl border border-gold/20 bg-gold/[0.08] text-gold transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                        <Icon className="size-5" />
                      </span>
                      <span className="font-mono text-[11px] tracking-[0.3em] text-muted">
                        {service.index}
                      </span>
                    </div>
                    <h3 className="mt-8 font-display text-2xl leading-tight font-medium text-white">
                      {service.title}
                    </h3>
                    <p className="mt-3 mb-6 text-sm leading-relaxed text-muted">
                      {service.body}
                    </p>
                    <ul className="mt-auto space-y-2 border-t border-white/[0.06] pt-5">
                      {service.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2.5 text-sm text-secondary"
                        >
                          <CheckIcon className="size-3.5 shrink-0 text-gold" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                </TiltCard>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
