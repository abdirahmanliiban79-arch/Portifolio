import type { ComponentType, SVGProps } from "react";
import {
  ArrowUpRightIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  SparkleIcon,
} from "@/components/ui/Icons";
import { site } from "@/data/site";

type SocialIcon = ComponentType<SVGProps<SVGSVGElement>>;

const iconByLabel: Record<string, SocialIcon> = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-14 lg:px-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-xl text-white">{site.name}</p>
            <p className="mt-1 font-mono text-[10px] tracking-[0.25em] text-muted uppercase">
              {site.role}
            </p>
          </div>
          <p className="text-sm leading-relaxed text-muted md:max-w-xs">
            {site.footerNote}
          </p>
          <div className="flex items-center gap-3">
            {site.socials
              .filter((social) => social.href)
              .map((social) => {
                const Icon = iconByLabel[social.label] ?? SparkleIcon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.label} profile`}
                    className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition-all duration-300 hover:border-coral/40 hover:text-white"
                  >
                    <Icon className="size-4 text-secondary" />
                  </a>
                );
              })}
            <a
              href={`mailto:${site.email}`}
              aria-label={`Email ${site.name}`}
              className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition-all duration-300 hover:border-coral/40 hover:text-white"
            >
              <MailIcon className="size-4 text-secondary" />
            </a>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 sm:flex-row">
          <p className="font-mono text-[10px] text-muted">
            © {year} {site.name}
          </p>
          <a
            href="#main"
            className="group inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.25em] text-muted uppercase transition-colors hover:text-white"
          >
            Back to top
            <ArrowUpRightIcon className="size-3.5 text-coral transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
