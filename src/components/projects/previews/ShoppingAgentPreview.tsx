import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { ArrowUpRightIcon, SparkleIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/cn";

const results = [
  { product: "Keychron K8 Pro", store: "store.a", price: "$94.00", best: false },
  {
    product: "Royal Kludge RK84",
    store: "store.b",
    price: "$89.00",
    best: true,
  },
  {
    product: "Logitech MX Keys",
    store: "store.c",
    price: "$109.00",
    best: false,
  },
];

export function ShoppingAgentPreview({
  screenshot,
  liveUrl,
}: {
  screenshot: string | null;
  liveUrl?: string | null;
}) {
  if (screenshot) {
    return (
      <BrowserFrame
        url="agent.local/session"
        screenshot={screenshot}
        alt="AI Shopping Agent session"
      />
    );
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-deep">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-sm opacity-[0.35]"
      />
      <div className="relative">
        <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-white/15" />
            <span className="size-2.5 rounded-full bg-white/15" />
            <span className="size-2.5 rounded-full bg-white/15" />
          </span>
          <span className="mx-auto font-mono text-[10px] text-muted">
            agent — session
          </span>
          <SparkleIcon className="size-3.5 shrink-0 text-coral" />
        </div>
        <div
          aria-hidden="true"
          className="space-y-2 p-4 font-mono text-[11px] leading-relaxed sm:p-5"
        >
          <p>
            <span className="text-muted">$</span>{" "}
            <span className="text-secondary">
              compare &quot;mechanical keyboard, wireless&quot;
            </span>
          </p>
          <p className="text-muted">→ planning sources… done (6 stores)</p>
          <p className="text-muted">→ extracting prices… 4 candidates</p>
          <p className="text-muted">→ matching variants…</p>
          <p className="text-coral">✓ best price found</p>
          <p>
            <span className="inline-block h-3 w-1.5 animate-caret rounded-sm bg-coral-strong align-middle" />
          </p>
        </div>
        <div aria-hidden="true" className="mt-1 border-t border-white/[0.06]">
          {results.map((result) => (
            <div
              key={result.product}
              className={cn(
                "grid grid-cols-[1fr_auto] items-center gap-3 px-4 py-3 sm:grid-cols-[1.4fr_1fr_auto] sm:px-5",
                result.best && "border-y border-coral/20 bg-coral/[0.06]",
              )}
            >
              <div className="flex min-w-0 items-center gap-2">
                <span className="truncate text-xs text-secondary">
                  {result.product}
                </span>
                {result.best ? (
                  <span className="shrink-0 rounded-full border border-coral/30 px-2 py-0.5 text-[8px] tracking-[0.2em] text-coral">
                    BEST PRICE
                  </span>
                ) : null}
              </div>
              <span className="hidden text-[10px] text-muted sm:block">
                {result.store}
              </span>
              <span className="text-right font-mono text-xs text-white tabular-nums">
                {result.price}
              </span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between gap-3 border-t border-white/[0.06] px-4 py-3 sm:px-5">
          <span className="font-mono text-[9px] tracking-[0.2em] text-muted uppercase">
            Session complete — 4 candidates compared
          </span>
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-1.5 font-mono text-[9px] tracking-[0.2em] text-coral uppercase transition-colors hover:text-coral-strong"
            >
              Open live demo
              <ArrowUpRightIcon className="size-3" />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
