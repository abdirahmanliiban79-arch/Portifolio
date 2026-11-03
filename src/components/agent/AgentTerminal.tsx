import type { CSSProperties } from "react";
import { cn } from "@/lib/cn";
import type { TerminalLine, WorkflowStep } from "@/data/services";

const prefix: Record<TerminalLine["kind"], string> = {
  cmd: "$",
  info: "›",
  ok: "✓",
  wait: "●",
  ship: "▲",
};

const tone: Record<TerminalLine["kind"], string> = {
  cmd: "text-white",
  info: "text-secondary",
  ok: "text-emerald-400",
  wait: "text-gold",
  ship: "text-gold-light",
};

type AgentTerminalProps = {
  steps: WorkflowStep[];
  /** Index of the last step whose output is shown. */
  step: number;
  /** Type out lines as they appear (off for reduced motion / static lists). */
  animate?: boolean;
  className?: string;
};

/** Fake agent terminal: prints each step's lines, typing the newest ones. */
export function AgentTerminal({ steps, step, animate = true, className }: AgentTerminalProps) {
  const visible = steps.slice(0, step + 1);
  const done = step >= steps.length - 1;

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-white/10 bg-ink-deep/90 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="ml-2 font-mono text-[11px] text-muted">
          agent — shipment-tracker
        </span>
      </div>
      <div
        role="log"
        aria-label="Agent demo output"
        className="min-h-[13.5rem] space-y-1.5 px-4 py-4 font-mono text-[12px] leading-relaxed sm:text-[13px]"
      >
        {visible.flatMap((s, stepIndex) =>
          s.terminal.map((line, lineIndex) => {
            const typing = animate && stepIndex === step;
            return (
              <p
                key={`${s.index}-${lineIndex}`}
                className={cn("flex gap-2 whitespace-nowrap", tone[line.kind], typing && "type-in")}
                style={
                  typing
                    ? ({ animationDelay: `${lineIndex * 420}ms` } as CSSProperties)
                    : undefined
                }
              >
                <span className="w-3 shrink-0 text-muted">{prefix[line.kind]}</span>
                <span className="truncate">{line.text}</span>
              </p>
            );
          }),
        )}
        <p className="flex gap-2 text-muted">
          <span className="w-3 shrink-0">{done ? "✓" : "›"}</span>
          <span>{done ? "done in one session" : ""}</span>
          <span
            aria-hidden="true"
            className="animate-caret inline-block h-4 w-1.5 translate-y-0.5 bg-gold"
          />
        </p>
      </div>
    </div>
  );
}
