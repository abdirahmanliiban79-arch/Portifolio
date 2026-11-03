import {
  siClaude,
  siCss,
  siCursor,
  siExpress,
  siGit,
  siGithub,
  siGooglegemini,
  siHtml5,
  siJavascript,
  siJsonwebtokens,
  siLmstudio,
  siMongodb,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siOllama,
  siOpenrouter,
  siPostgresql,
  siPostman,
  siPrisma,
  siReact,
  siReacthookform,
  siReactquery,
  siRender,
  siShadcnui,
  siTailwindcss,
  siTypescript,
  siVercel,
  siZod,
  type SimpleIcon,
} from "simple-icons";
import { cn } from "@/lib/cn";

/** Skill name (as written in src/data/skills.ts) → brand icon. */
const logos: Record<string, SimpleIcon> = {
  "React 19": siReact,
  "Next.js App Router": siNextdotjs,
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  "Tailwind CSS v4": siTailwindcss,
  "HTML5 & CSS3": siHtml5,
  CSS3: siCss,
  "TanStack Query": siReactquery,
  "React Hook Form": siReacthookform,
  "shadcn/ui": siShadcnui,
  "Node.js": siNodedotjs,
  "Express.js": siExpress,
  "Zod validation": siZod,
  JWT: siJsonwebtokens,
  MongoDB: siMongodb,
  PostgreSQL: siPostgresql,
  MySQL: siMysql,
  "Prisma ORM": siPrisma,
  "Gemini API": siGooglegemini,
  OpenRouter: siOpenrouter,
  "Local LLMs": siOllama,
  "LM Studio": siLmstudio,
  "Claude Code": siClaude,
  Cursor: siCursor,
  Git: siGit,
  GitHub: siGithub,
  Postman: siPostman,
  Vercel: siVercel,
  Render: siRender,
};

type ToolLogoProps = {
  name: string;
  className?: string;
};

/** Monochrome brand logo for a skill, or a small dot for concepts without one. */
export function ToolLogo({ name, className }: ToolLogoProps) {
  const icon = logos[name];
  if (!icon) {
    return (
      <span
        aria-hidden="true"
        className={cn("flex size-4 shrink-0 items-center justify-center", className)}
      >
        <span className="size-1.5 rounded-full bg-current" />
      </span>
    );
  }
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn("size-4 shrink-0", className)}
      fill="currentColor"
    >
      <path d={icon.path} />
    </svg>
  );
}
