import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { cn } from "@/lib/cn";

const navItems = ["Overview", "Transactions", "Categories", "Settings"];

const stats = [
  {
    label: "Total Balance",
    value: "$24,580.00",
    delta: "+12.4%",
    tone: "emerald",
  },
  { label: "Income", value: "$8,240.00", delta: "+8.1%", tone: "emerald" },
  { label: "Expenses", value: "$3,120.00", delta: "-3.2%", tone: "muted" },
] as const;

const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
const incomeBars = [45, 62, 38, 74, 55, 88, 47, 66, 58, 90, 72, 60];
const expenseBars = [30, 42, 22, 50, 35, 58, 28, 40, 33, 55, 44, 25];

const transactions = [
  {
    name: "Acme invoice",
    category: "Income",
    amount: "+$1,200.00",
    positive: true,
  },
  {
    name: "Groceries",
    category: "Food",
    amount: "−$84.20",
    positive: false,
  },
  {
    name: "Figma",
    category: "Software",
    amount: "−$15.00",
    positive: false,
  },
  {
    name: "Savings transfer",
    category: "Savings",
    amount: "−$500.00",
    positive: false,
  },
];

export function FinTrackPreview({
  screenshot,
}: {
  screenshot: string | null;
}) {
  const frameClassName =
    "transition-colors duration-700 group-hover:border-coral/25";

  if (screenshot) {
    return (
      <BrowserFrame
        url="fintrack.app/dashboard"
        screenshot={screenshot}
        alt="FinTrack Pro dashboard"
        className={frameClassName}
      />
    );
  }

  return (
    <BrowserFrame url="fintrack.app/dashboard" className={frameClassName}>
      <div aria-hidden="true" className="flex">
        <div className="hidden w-36 flex-col gap-1 border-r border-white/[0.06] p-3 md:flex lg:w-40">
          <div className="mb-3 flex items-center gap-2 px-1">
            <span className="size-2 rounded-full bg-coral" />
            <span className="font-display text-xs text-white">FinTrack</span>
          </div>
          {navItems.map((item) => (
            <span
              key={item}
              className={cn(
                "rounded-lg px-2.5 py-2 text-[11px]",
                item === "Overview"
                  ? "border border-coral/20 bg-coral/[0.1] text-coral"
                  : "text-muted",
              )}
            >
              {item}
            </span>
          ))}
          <div className="mt-auto flex items-center gap-2 px-1 pt-6">
            <span className="size-6 rounded-full bg-white/10" />
            <span className="truncate text-[10px] text-muted">
              Abdirahman Liiban
            </span>
          </div>
        </div>
        <div className="min-w-0 flex-1 p-3 sm:p-4 lg:p-5">
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs text-secondary">Overview</p>
            <span className="shrink-0 rounded-full border border-white/10 px-2.5 py-1 text-[10px] text-muted">
              Last 30 days
            </span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 sm:gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="min-w-0 rounded-xl border border-white/[0.08] bg-white/[0.03] p-2.5 sm:p-3"
              >
                <p className="truncate text-[9px] tracking-wide text-muted uppercase sm:text-[10px]">
                  {stat.label}
                </p>
                <p className="mt-1 truncate font-mono text-[11px] text-white tabular-nums sm:text-sm lg:text-base">
                  {stat.value}
                </p>
                <p
                  className={cn(
                    "mt-0.5 text-[9px] sm:text-[10px]",
                    stat.tone === "emerald"
                      ? "text-emerald-300/80"
                      : "text-muted",
                  )}
                >
                  {stat.delta}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-3 grid gap-3 lg:grid-cols-5">
            <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-3 lg:col-span-3">
              <div className="flex items-center justify-between gap-2">
                <p className="text-[10px] text-muted">Cash flow</p>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5 text-[9px] text-muted">
                    <span className="size-1.5 rounded-full bg-coral" />
                    Income
                  </span>
                  <span className="flex items-center gap-1.5 text-[9px] text-muted">
                    <span className="size-1.5 rounded-full bg-white/20" />
                    Expenses
                  </span>
                </div>
              </div>
              <div className="mt-3 flex h-24 items-end gap-1.5 sm:h-28">
                {months.map((month, index) => (
                  <div
                    key={`${month}-${index}`}
                    className="flex h-full min-w-0 flex-1 items-end justify-center gap-0.5"
                  >
                    <span
                      style={{ height: `${incomeBars[index]}%` }}
                      className="w-1 rounded-t bg-gradient-to-t from-coral/40 to-coral sm:w-2"
                    />
                    <span
                      style={{ height: `${expenseBars[index]}%` }}
                      className="w-1 rounded-t bg-white/10 sm:w-2"
                    />
                  </div>
                ))}
              </div>
              <div className="mt-1.5 flex gap-1.5">
                {months.map((month, index) => (
                  <span
                    key={`${month}-label-${index}`}
                    className="min-w-0 flex-1 text-center text-[8px] text-muted"
                  >
                    {month}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-3 lg:col-span-2">
              <p className="text-[10px] text-muted">Recent transactions</p>
              <div className="mt-2 space-y-2">
                {transactions.map((transaction) => (
                  <div
                    key={transaction.name}
                    className="flex items-center justify-between gap-2"
                  >
                    <div className="flex min-w-0 items-center gap-2">
                      <span className="truncate text-[11px] text-secondary">
                        {transaction.name}
                      </span>
                      <span className="shrink-0 rounded-full border border-white/10 px-1.5 text-[9px] text-muted">
                        {transaction.category}
                      </span>
                    </div>
                    <span
                      className={cn(
                        "shrink-0 font-mono text-[11px] tabular-nums",
                        transaction.positive
                          ? "text-emerald-300/80"
                          : "text-white/70",
                      )}
                    >
                      {transaction.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}
