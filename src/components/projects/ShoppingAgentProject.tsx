import { Reveal } from "@/components/ui/Reveal";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { TechChips } from "@/components/ui/TechChips";
import { ProjectLinks } from "@/components/ui/ProjectLinks";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { ShoppingAgentPreview } from "@/components/projects/previews/ShoppingAgentPreview";
import {
  ApproachList,
  CaseLabel,
  FeatureList,
} from "@/components/projects/ProjectCase";
import type { Project } from "@/data/projects";

const pipelineSteps = ["Request", "Plan", "Search", "Compare"];

export function ShoppingAgentProject({ project }: { project: Project }) {
  return (
    <article
      id="project-shopping-agent"
      aria-labelledby="project-shopping-agent-title"
    >
      <Reveal>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <StatusBadge tone="shipped" label={project.statusLabel} />
        </div>
        <div className="relative mt-6">
          <p
            aria-hidden="true"
            className="pointer-events-none absolute -top-10 -left-2 font-display text-[clamp(6rem,18vw,14rem)] leading-none text-white/[0.05] select-none"
          >
            {project.index}
          </p>
          <h3
            id="project-shopping-agent-title"
            className="relative font-display text-5xl tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl"
          >
            {project.title}
          </h3>
          <p className="relative mt-4 font-mono text-[10px] tracking-[0.3em] text-muted uppercase">
            {project.category}
          </p>
        </div>
        <p className="mt-8 max-w-3xl font-display text-2xl leading-snug text-white/90 sm:text-3xl">
          {project.tagline}
        </p>
      </Reveal>
      <Reveal className="mt-12" delay={100}>
        <ol
          role="list"
          aria-label="Agent workflow"
          className="flex flex-col gap-3 lg:flex-row lg:items-stretch"
        >
          {pipelineSteps.map((step, index) => (
            <li
              key={step}
              className="flex flex-col items-center gap-3 lg:flex-1 lg:flex-row"
            >
              <div className="glass w-full rounded-2xl px-5 py-4 transition-colors duration-500 hover:border-coral/30 lg:min-w-0 lg:flex-1">
                <p className="font-mono text-[10px] tracking-[0.25em] text-muted">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-1 font-display text-lg text-white">{step}</p>
              </div>
              {index < pipelineSteps.length - 1 ? (
                <ArrowRightIcon className="size-5 shrink-0 rotate-90 text-coral/60 lg:rotate-0" />
              ) : (
                <span
                  aria-hidden="true"
                  className="hidden size-5 shrink-0 lg:block"
                />
              )}
            </li>
          ))}
        </ol>
      </Reveal>
      <div className="mt-16 grid gap-12 border-t border-white/[0.06] pt-12 lg:grid-cols-12">
        <Reveal className="min-w-0 lg:col-span-5">
          <CaseLabel>The Problem</CaseLabel>
          <p className="mt-5 text-base leading-relaxed text-secondary">
            {project.problem}
          </p>
          <div className="mt-10">
            <CaseLabel>{project.solutionTitle}</CaseLabel>
            <p className="mt-5 text-base leading-relaxed text-secondary">
              {project.solution}
            </p>
          </div>
        </Reveal>
        <Reveal className="min-w-0 lg:col-span-7" delay={120}>
          <ShoppingAgentPreview
            screenshot={project.screenshot}
            liveUrl={project.liveUrl}
          />
        </Reveal>
      </div>
      <Reveal className="mt-14">
        <CaseLabel>Key Features</CaseLabel>
        <div className="mt-6">
          <FeatureList items={project.features} />
        </div>
        <div className="mt-12 max-w-3xl">
          <CaseLabel>Technical Approach</CaseLabel>
          <div className="mt-6">
            <ApproachList items={project.approach} />
          </div>
        </div>
      </Reveal>
      <Reveal className="mt-12 border-t border-white/[0.06] pt-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div className="flex max-w-2xl flex-1 flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <CaseLabel>Tech Stack</CaseLabel>
            <TechChips items={project.stack} className="flex-1" />
          </div>
          <ProjectLinks
            links={[
              {
                href: project.liveUrl,
                label: project.liveLabel,
                kind: "live",
              },
              {
                href: project.githubUrl,
                label: project.githubLabel,
                kind: "github",
              },
            ]}
          />
        </div>
      </Reveal>
    </article>
  );
}
