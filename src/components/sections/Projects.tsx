import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FinTrackProject } from "@/components/projects/FinTrackProject";
import { TaskFlowProject } from "@/components/projects/TaskFlowProject";
import { ShoppingAgentProject } from "@/components/projects/ShoppingAgentProject";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <Section
      id="work"
      labelledBy="work-title"
      className="border-t border-white/[0.06]"
    >
      <SectionHeading
        id="work-title"
        eyebrow="04 / Selected Work"
        title="Three products. Three different problems."
        lead="Not tutorial builds — systems with data models, auth, APIs, and decisions I can defend. Each is presented the way it was built: problem first, then architecture, then product."
      />
      <div className="mt-24 lg:mt-36">
        <FinTrackProject project={projects[0]} />
      </div>
      <div
        aria-hidden="true"
        className="mt-16 flex items-center gap-5 lg:mt-[5.5rem]"
      >
        <span className="h-px flex-1 bg-white/[0.06]" />
        <span className="font-mono text-[10px] tracking-[0.3em] text-muted">
          {projects[1].index}
        </span>
        <span className="h-px flex-1 bg-white/[0.06]" />
      </div>
      <div className="mt-16 lg:mt-[5.5rem]">
        <TaskFlowProject project={projects[1]} />
      </div>
      <div
        aria-hidden="true"
        className="mt-16 flex items-center gap-5 lg:mt-[5.5rem]"
      >
        <span className="h-px flex-1 bg-white/[0.06]" />
        <span className="font-mono text-[10px] tracking-[0.3em] text-muted">
          {projects[2].index}
        </span>
        <span className="h-px flex-1 bg-white/[0.06]" />
      </div>
      <div className="mt-16 lg:mt-[5.5rem]">
        <ShoppingAgentProject project={projects[2]} />
      </div>
    </Section>
  );
}
