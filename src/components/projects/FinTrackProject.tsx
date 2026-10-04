import { Reveal } from "@/components/ui/Reveal";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { TechChips } from "@/components/ui/TechChips";
import { ProjectLinks } from "@/components/ui/ProjectLinks";
import { FinTrackPreview } from "@/components/projects/previews/FinTrackPreview";
import {
  ApproachList,
  CaseLabel,
  FeatureList,
} from "@/components/projects/ProjectCase";
import type { Project } from "@/data/projects";

export function FinTrackProject({ project }: { project: Project }) {
  const links = [
    ...(project.liveLabel
      ? [
          {
            href: project.liveUrl,
            label: project.liveLabel,
            kind: "live" as const,
          },
        ]
      : []),
    {
      href: project.githubUrl,
      label: project.githubLabel,
      kind: "github" as const,
    },
  ];

  return (
    <article id="project-fintrack" aria-labelledby="project-fintrack-title">
      <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="min-w-0 lg:col-span-5">
          <StatusBadge tone="shipped" label={project.statusLabel} />
          <p
            aria-hidden="true"
            className="mt-6 font-display text-[clamp(3.5rem,7vw,6rem)] leading-none text-white/[0.07] select-none"
          >
            {project.index}
          </p>
          <h3
            id="project-fintrack-title"
            className="mt-2 font-display text-4xl tracking-[-0.02em] text-white sm:text-5xl"
          >
            {project.title}
          </h3>
          <p className="mt-3 font-mono text-[10px] tracking-[0.3em] text-muted uppercase">
            {project.category}
          </p>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-secondary sm:text-xl">
            {project.tagline}
          </p>
        </Reveal>
        <Reveal className="min-w-0 lg:col-span-7" delay={120}>
          <div className="group">
            <div className="origin-center transition-transform duration-700 group-hover:scale-[1.01]">
              <FinTrackPreview screenshot={project.screenshot} />
            </div>
          </div>
        </Reveal>
      </div>
      <div className="mt-16 grid gap-12 border-t border-white/[0.06] pt-12 lg:mt-20 lg:grid-cols-12 lg:pt-16">
        <Reveal className="min-w-0 lg:col-span-5">
          <CaseLabel>The Problem</CaseLabel>
          <p className="mt-5 text-base leading-relaxed text-secondary">
            {project.problem}
          </p>
        </Reveal>
        <Reveal className="lg:col-span-7" delay={80}>
          <CaseLabel>{project.solutionTitle}</CaseLabel>
          <p className="mt-5 text-lg leading-relaxed text-white/90 sm:text-xl">
            {project.solution}
          </p>
        </Reveal>
        <Reveal className="lg:col-span-7">
          <CaseLabel>Key Features</CaseLabel>
          <div className="mt-6">
            <FeatureList items={project.features} />
          </div>
        </Reveal>
        <Reveal className="lg:col-span-5" delay={80}>
          <CaseLabel>Technical Approach</CaseLabel>
          <div className="mt-6">
            <ApproachList items={project.approach} />
          </div>
        </Reveal>
      </div>
      <Reveal className="mt-12 border-t border-white/[0.06] pt-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div className="flex max-w-2xl flex-1 flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <CaseLabel>Tech Stack</CaseLabel>
            <TechChips items={project.stack} className="flex-1" />
          </div>
          <ProjectLinks links={links} />
        </div>
      </Reveal>
    </article>
  );
}
