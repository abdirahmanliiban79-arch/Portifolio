import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { ArrowRightIcon } from "@/components/ui/Icons";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  withArrow?: boolean;
  download?: boolean;
};

function isExternal(href: string) {
  return /^https?:\/\//.test(href);
}

export function PrimaryButtonLink({
  href,
  children,
  className,
  withArrow = false,
  download = false,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      download={download || undefined}
      {...(isExternal(href)
        ? { target: "_blank", rel: "noopener noreferrer" }
        : null)}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-light px-6 py-3 text-sm font-semibold text-ink shadow-[0_10px_34px_-14px_rgba(245,158,11,0.7)] transition-all duration-300 hover:brightness-105 hover:shadow-[0_18px_48px_-16px_rgba(245,158,11,0.9)] active:scale-[0.98]",
        className,
      )}
    >
      {children}
      {withArrow ? (
        <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      ) : null}
    </a>
  );
}

export function GhostButtonLink({
  href,
  children,
  className,
  withArrow = false,
  download = false,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      download={download || undefined}
      {...(isExternal(href)
        ? { target: "_blank", rel: "noopener noreferrer" }
        : null)}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-gold/40 hover:bg-white/[0.07] active:scale-[0.98]",
        className,
      )}
    >
      {children}
      {withArrow ? (
        <ArrowRightIcon className="size-4 text-gold transition-transform duration-300 group-hover:translate-x-0.5" />
      ) : null}
    </a>
  );
}
