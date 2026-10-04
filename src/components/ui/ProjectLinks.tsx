import { cn } from "@/lib/cn";
import { ArrowUpRightIcon, GitHubIcon } from "@/components/ui/Icons";

type ProjectLink = {
  href: string;
  label: string;
  kind: "live" | "github";
};

type ProjectLinksProps = {
  links: ProjectLink[];
  className?: string;
};

export function ProjectLinks({ links, className }: ProjectLinksProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      {links.map((link) =>
        link.href ? (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:border-coral/40 hover:bg-white/[0.08]"
          >
            {link.kind === "github" ? (
              <GitHubIcon className="size-4" />
            ) : (
              <ArrowUpRightIcon className="size-4 text-coral" />
            )}
            {link.label}
          </a>
        ) : (
          <span
            key={link.label}
            aria-disabled="true"
            className="inline-flex items-center gap-2 rounded-full border border-dashed border-white/15 px-4 py-2 text-sm text-muted"
          >
            {link.kind === "github" ? (
              <GitHubIcon className="size-4" />
            ) : (
              <ArrowUpRightIcon className="size-4" />
            )}
            {link.label}
          </span>
        ),
      )}
    </div>
  );
}
