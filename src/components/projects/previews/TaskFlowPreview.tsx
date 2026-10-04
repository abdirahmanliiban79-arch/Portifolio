import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { CheckIcon, SparkleIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/cn";

const rawGoals = [
  "Launch portfolio",
  "finish api docs??",
  "gym 3x",
  "read 20 pages",
];

const planSteps = [
  {
    time: "09:00",
    title: "Define scope and pages",
    priority: "High",
    done: true,
  },
  { time: "10:30", title: "Build API + auth", priority: "High", done: false },
  {
    time: "14:00",
    title: "Write case study copy",
    priority: "Medium",
    done: false,
  },
  { time: "19:00", title: "Ship to Vercel", priority: "Medium", done: false },
];

export function TaskFlowPreview({
  screenshot,
}: {
  screenshot: string | null;
}) {
  if (screenshot) {
    return (
      <BrowserFrame
        url="taskflow.app/plan"
        screenshot={screenshot}
        alt="TaskFlow 5D plan view"
      />
    );
  }

  return (
    <div className="relative py-6 sm:min-h-[440px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 scale-75 rounded-full bg-coral/[0.07] blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="relative flex flex-col gap-6 sm:block"
      >
        <div className="glass -rotate-1 rounded-2xl border-white/10 p-4 sm:absolute sm:top-6 sm:left-0 sm:w-[58%] sm:rotate-[-2deg] sm:p-5">
          <p className="font-mono text-[9px] tracking-[0.25em] text-muted">
            INPUT — raw goals
          </p>
          <div className="mt-3 space-y-2.5">
            {rawGoals.map((goal) => (
              <div key={goal} className="flex items-center gap-2.5">
                <span className="flex shrink-0 flex-col gap-0.5 text-white/20">
                  <span className="h-px w-2.5 bg-current" />
                  <span className="h-px w-2.5 bg-current" />
                </span>
                <span className="text-xs text-muted line-through decoration-white/20">
                  {goal}
                </span>
              </div>
            ))}
          </div>
        </div>
        <SparkleIcon className="mx-auto size-5 shrink-0 text-coral drop-shadow-[0_0_12px_rgba(255,160,122,0.5)] sm:absolute sm:top-1/2 sm:left-1/2 sm:z-10 sm:-translate-x-1/2 sm:-translate-y-1/2" />
        <div className="glass-strong rotate-1 rounded-2xl border-coral/20 p-4 shadow-[0_30px_80px_-30px_rgba(255,140,117,0.35)] sm:absolute sm:right-0 sm:bottom-0 sm:w-[62%] sm:rotate-[1.5deg] sm:p-5">
          <p className="font-mono text-[9px] tracking-[0.25em] text-coral">
            OUTPUT — structured plan
          </p>
          <div className="mt-3 space-y-2.5">
            {planSteps.map((step) => (
              <div
                key={step.time}
                className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.03] px-3 py-2.5"
              >
                <span className="shrink-0 font-mono text-[10px] text-muted">
                  {step.time}
                </span>
                <span
                  className={cn(
                    "min-w-0 truncate text-xs text-white",
                    step.done && "text-white/60 line-through decoration-coral/40",
                  )}
                >
                  {step.title}
                </span>
                {step.done ? (
                  <CheckIcon className="size-3.5 shrink-0 text-coral" />
                ) : null}
                <span
                  className={cn(
                    "ml-auto shrink-0 rounded-full px-2 py-0.5 text-[9px]",
                    step.priority === "High"
                      ? "border border-coral/25 bg-coral/15 text-coral"
                      : "border border-white/10 text-muted",
                  )}
                >
                  {step.priority}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-3">
            <div className="h-1 flex-1 rounded-full bg-white/10">
              <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-coral to-coral-rose" />
            </div>
            <p className="shrink-0 font-mono text-[10px] text-muted">
              2/4 · 50%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
