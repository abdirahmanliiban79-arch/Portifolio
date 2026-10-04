import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { LockIcon } from "@/components/ui/Icons";

type BrowserFrameProps = {
  url: string;
  screenshot?: string | null;
  alt?: string;
  children?: ReactNode;
  className?: string;
  contentClassName?: string;
};

export function BrowserFrame({
  url,
  screenshot,
  alt = "",
  children,
  className,
  contentClassName,
}: BrowserFrameProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] shadow-[0_50px_140px_-50px_rgba(0,0,0,0.85)] backdrop-blur-xl",
        className,
      )}
    >
      <div className="flex items-center gap-3 border-b border-white/[0.08] bg-white/[0.03] px-4 py-3">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
        </span>
        <span className="mx-auto flex max-w-full items-center gap-1.5 truncate rounded-full border border-white/10 bg-ink-deep/70 px-3 py-1 font-mono text-[10px] tracking-wide text-muted">
          <LockIcon className="size-3 shrink-0" />
          <span className="truncate">{url}</span>
        </span>
        <span className="hidden w-12 shrink-0 sm:block" aria-hidden="true" />
      </div>
      <div className={cn("relative bg-ink-deep", contentClassName)}>
        {screenshot ? (
          <Image
            src={screenshot}
            alt={alt}
            width={1600}
            height={1000}
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="h-auto w-full"
          />
        ) : (
          children
        )}
      </div>
    </div>
  );
}
