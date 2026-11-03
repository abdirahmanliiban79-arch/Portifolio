"use client";

import { cn } from "@/lib/cn";
import { site } from "@/data/site";
import { AvailabilityBadge } from "@/components/ui/AvailabilityBadge";

type NavLink = {
  label: string;
  href: string;
};

type MobileMenuProps = {
  open: boolean;
  links: readonly NavLink[];
  onClose: () => void;
};

export function MobileMenu({ open, links, onClose }: MobileMenuProps) {
  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation"
      inert={!open}
      className={cn(
        "fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-ink/85 backdrop-blur-2xl transition-opacity duration-500 ease-out-expo md:hidden",
        open ? "opacity-100" : "pointer-events-none opacity-0",
      )}
    >
      <div aria-hidden="true" className="h-20 shrink-0" />
      <nav
        aria-label="Mobile"
        className="flex flex-1 flex-col justify-center px-5 sm:px-8"
      >
        <ul className="mx-auto w-full max-w-7xl">
          {links.map((link, index) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={onClose}
                style={{
                  transitionDelay: open ? `${140 + index * 80}ms` : "0ms",
                }}
                className={cn(
                  "group flex items-baseline gap-4 rounded-2xl px-2 py-3 transition-all duration-500 ease-out-expo sm:gap-6",
                  open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
                )}
              >
                <span className="font-mono text-[11px] tracking-[0.3em] text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-4xl font-medium text-white transition-colors duration-300 group-hover:text-gold sm:text-5xl">
                  {link.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mx-auto w-full max-w-7xl px-5 pb-10 sm:px-8 lg:px-12">
        {site.available ? (
          <AvailabilityBadge label={site.availabilityLabel} />
        ) : null}
        <p className="mt-5 font-mono text-[11px] tracking-[0.18em] text-muted">
          <a
            href={`mailto:${site.email}`}
            className="transition-colors duration-300 hover:text-white"
          >
            {site.email}
          </a>
        </p>
      </div>
    </div>
  );
}
