"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { site } from "@/data/site";
import { AvailabilityBadge } from "@/components/ui/AvailabilityBadge";
import { MobileMenu } from "@/components/navigation/MobileMenu";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const wasOpenRef = useRef(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (wasOpenRef.current && !open) {
      toggleRef.current?.focus({ preventScroll: true });
    }
    wasOpenRef.current = open;
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 py-3",
          open ? "z-[70]" : "z-50",
        )}
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div
            className={cn(
              "relative flex h-16 items-center justify-between rounded-full border px-4 transition-all duration-500 ease-out-expo sm:px-5 lg:h-[72px]",
              scrolled
                ? "border-white/10 bg-ink/70 shadow-[0_18px_50px_-28px_rgba(0,0,0,0.9)] backdrop-blur-xl"
                : "border-transparent bg-transparent",
            )}
          >
            <a
              href="#main"
              className="flex items-center gap-2 transition-opacity duration-300 hover:opacity-80"
            >
              <span className="font-mono text-sm font-semibold tracking-[0.18em] text-coral-gradient">
                {site.initials}
              </span>
              <span aria-hidden="true" className="font-mono text-sm text-muted">
                /
              </span>
              <span className="hidden font-display text-sm font-medium tracking-wide text-white sm:inline">
                {site.name}
              </span>
            </a>

            <nav
              aria-label="Primary"
              className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block"
            >
              <ul className="flex items-center gap-1">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="block rounded-full px-3 py-2 text-sm text-secondary transition-colors duration-300 hover:bg-white/[0.05] hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-3">
              {site.available ? (
                <AvailabilityBadge
                  label={site.availabilityLabel}
                  className="max-lg:hidden"
                />
              ) : null}
              <button
                ref={toggleRef}
                type="button"
                onClick={() => setOpen((value) => !value)}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                aria-controls="mobile-menu"
                className="glass flex size-10 items-center justify-center rounded-full text-white transition-colors duration-300 hover:bg-white/[0.08] md:hidden"
              >
                <span
                  aria-hidden="true"
                  className="relative flex size-4 flex-col items-center justify-center"
                >
                  <span
                    className={cn(
                      "absolute h-px w-4 bg-current transition-all duration-300 ease-out-expo",
                      open ? "rotate-45" : "-translate-y-[5px]",
                    )}
                  />
                  <span
                    className={cn(
                      "absolute h-px w-4 bg-current transition-all duration-300 ease-out-expo",
                      open ? "scale-x-0 opacity-0" : "opacity-100",
                    )}
                  />
                  <span
                    className={cn(
                      "absolute h-px w-4 bg-current transition-all duration-300 ease-out-expo",
                      open ? "-rotate-45" : "translate-y-[5px]",
                    )}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu open={open} links={links} onClose={() => setOpen(false)} />
    </>
  );
}
