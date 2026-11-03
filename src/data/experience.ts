export type ExperienceType = "work" | "freelance" | "independent" | "learning";

export type ExperienceEntry = {
  id: string;
  type: ExperienceType;
  title: string;
  org: string;
  period: string;
  summary: string;
  tags?: string[];
};

export const experienceTypeLabel: Record<ExperienceType, string> = {
  work: "Work",
  freelance: "Freelance",
  independent: "Independent",
  learning: "Learning",
};

/**
 * Newest first. Filter tabs appear only for types that have entries,
 * so adding a "work" or "freelance" entry adds its tab automatically.
 */
export const experience: ExperienceEntry[] = [
  {
    id: "jamhuriya",
    type: "learning",
    title: "Computer & IT: Data Science & AI",
    org: "Jamhuriya University of Science and Technology",
    period: "Oct 2026 — Present",
    summary:
      "University studies in computer science with a focus on data science and artificial intelligence.",
    tags: ["Data Science", "AI"],
  },
  {
    id: "dugsiiye",
    type: "learning",
    title: "Full-Stack Software Engineer Program",
    org: "Dugsiiye",
    period: "Nov 2025 — Present",
    summary:
      "Intensive hands-on training across frontend, backend, APIs, databases, authentication, deployment, and debugging.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    id: "independent",
    type: "independent",
    title: "Full-Stack & AI Developer",
    org: "Independent",
    period: "Ongoing",
    summary:
      "Built and deployed full-stack and AI-powered apps, including a financial management system, an AI task planner, and an AI price-finding agent. Frontends shipped on Vercel, backends on Render.",
    tags: ["Next.js", "TypeScript", "JWT", "Gemini API", "OpenRouter"],
  },
];
