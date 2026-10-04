import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/data/site";
import { philosophy } from "@/data/philosophy";

export function Philosophy() {
  return (
    <Section id="about" labelledBy="philosophy-title">
      <SectionHeading
        id="philosophy-title"
        eyebrow="01 / Philosophy"
        title={philosophy.heading}
        lead={philosophy.paragraphs[0]}
      />
      <div className="mt-16 grid items-start gap-14 lg:mt-20 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-7">
          <Reveal delay={80}>
            <p className="max-w-2xl font-display text-xl leading-relaxed tracking-[-0.01em] text-secondary sm:text-2xl">
              {philosophy.paragraphs[1]}
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted">
              {philosophy.paragraphs[2]}
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-10 bg-coral/70" />
              <p className="font-mono text-xs text-muted">— {site.name}</p>
            </div>
          </Reveal>
        </div>
        <div className="lg:col-span-5">
          <Reveal delay={120}>
            <ol className="relative space-y-10 border-l border-white/10 pl-8 before:absolute before:top-0 before:left-[-1px] before:h-full before:w-px before:bg-gradient-to-b before:from-coral/50 before:to-transparent">
              {philosophy.flow.map((item, index) => (
                <li key={item.label} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute top-[3px] -left-[37px] size-2.5 rounded-full bg-coral-strong shadow-[0_0_0_5px_rgba(255,140,117,0.12)]"
                  />
                  <p className="font-mono text-xs tracking-[0.3em] text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 font-display text-xl text-white">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm text-muted">{item.note}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
