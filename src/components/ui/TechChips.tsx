import { cn } from "@/lib/cn";

type TechChipsProps = {
  items: string[];
  className?: string;
};

export function TechChips({ items, className }: TechChipsProps) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[11px] tracking-wide text-secondary transition-colors duration-300 hover:border-coral/30 hover:text-white"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
