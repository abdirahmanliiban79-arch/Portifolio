import { Reveal } from "@/components/ui/Reveal";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { TechChips } from "@/components/ui/TechChips";
import { ProjectLinks } from "@/components/ui/ProjectLinks";
import { TaskFlowPreview } from "@/components/projects/previews/TaskFlowPreview";
import {
  ApproachList,
  CaseLabel,
  FeatureList,
} from "@/components/projects/ProjectCase";
import type { Project } from "@/data/projects";

export function TaskFlowProject({ project }: { project: Project }) {
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
    <article id="project-taskflow" aria-labelledby="project-taskflow-title">
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="min-w-0 lg:order-2 lg:col-span-6">
          <StatusBadge tone="shipped" label={project.statusLabel} />
          <p
            aria-hidden="true"
            className="mt-6 font-display text-6xl leading-none text-white/[0.06] select-none sm:text-7xl"
          >
            {project.index}
          </p>
          <h3
            id="project-taskflow-title"
            className="mt-2 font-display text-4xl tracking-[-0.02em] text-white sm:text-5xl"
          >
            {project.title}
          </h3>
          <p className="mt-3 font-mono text-[10px] tracking-[0.3em] text-muted uppercase">
            {project.category}
          </p>
          <p className="mt-6 max-w-md text-xl leading-snug text-white/90 sm:text-2xl">
            {project.tagline}
          </p>
          <div className="mt-8 border-l-2 border-coral/50 pl-6">
            <CaseLabel>The Problem</CaseLabel>
            <p className="mt-4 text-sm leading-relaxed text-secondary">
              {project.problem}
            </p>
          </div>
          <div className="mt-8">
            <CaseLabel>{project.solutionTitle}</CaseLabel>
            <p className="mt-4 text-base leading-relaxed text-white/90 sm:text-lg">
              {project.solution}
            </p>
          </div>
        </Reveal>
        <Reveal className="relative min-w-0 lg:order-1 lg:col-span-6" delay={120}>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-full bg-coral/[0.06] blur-[100px]"
          />
          <div className="relative">
            <TaskFlowPreview screenshot={project.screenshot} />
          </div>        </Reveal>
      </div>
      <Reveal className="mt-14 border-t border-white/[0.06] pt-12">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <CaseLabel>Key Features</CaseLabel>
            <div className="mt-6">
              <FeatureList items={project.features} />
            </div>
          </div>
          <div>
            <CaseLabel>Technical Approach</CaseLabel>
            <div className="mt-6">
              <ApproachList items={project.approach} />
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-6 border-t border-white/[0.06] pt-8 lg:flex-row lg:items-center">
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
