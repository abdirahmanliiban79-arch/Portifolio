export type SkillGroup = {
  id: string;
  index: string;
  title: string;
  capability: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    index: "01",
    title: "Frontend",
    capability:
      "Interfaces that hold up under real state, real data, and real users.",
    items: [
      "React 19",
      "Next.js App Router",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS v4",
      "HTML5 & CSS3",
      "TanStack Query",
      "Zustand",
      "React Hook Form",
      "shadcn/ui",
    ],
  },
  {
    id: "backend",
    index: "02",
    title: "Backend",
    capability:
      "APIs designed around resources, validated at the boundary, and easy to extend.",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Middleware",
      "Zod validation",
      "Error handling",
      "File uploads",
    ],
  },
  {
    id: "security",
    index: "03",
    title: "Auth & Security",
    capability: "Sign-in, sessions, and permissions that are secure by default.",
    items: ["JWT", "bcrypt", "Cookies", "Role-based access", "Auth middleware"],
  },
  {
    id: "data",
    index: "04",
    title: "Databases",
    capability:
      "Schemas that make the right query obvious and bad data hard to create.",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Prisma ORM"],
  },
  {
    id: "ai",
    index: "05",
    title: "AI",
    capability:
      "Practical AI features and agents that do real work for real users.",
    items: ["Gemini API", "OpenRouter", "AI agents", "Local LLMs", "LM Studio"],
  },
  {
    id: "agentic",
    index: "06",
    title: "Agentic Coding",
    capability:
      "I direct AI coding agents to ship faster, and review every change as if I wrote it myself.",
    items: [
      "Claude Code",
      "Cursor",
      "OpenCode",
      "Plan-first workflows",
      "Project rules & context",
      "Custom agent skills",
      "AI code review",
      "Test-backed changes",
    ],
  },
  {
    id: "tools",
    index: "07",
    title: "Tools & Deploy",
    capability: "Versioning, testing, and shipping without ceremony.",
    items: ["Git", "GitHub", "Postman", "VS Code", "Vercel", "Render"],
  },
];

export const strengths = [
  "Problem solving",
  "Debugging",
  "Clean code",
  "API design",
  "Fast learning",
];

export type BuildStage = {
  index: string;
  title: string;
  body: string;
};

export const buildStages: BuildStage[] = [
  {
    index: "01",
    title: "Understand",
    body: "Understand the problem before choosing the solution. Who it's for, what breaks today, and what working actually means.",
  },
  {
    index: "02",
    title: "Design",
    body: "Think through architecture, user experience, data flow, and structure. Decisions get cheaper here than anywhere else.",
  },
  {
    index: "03",
    title: "Build",
    body: "Frontend, backend, APIs, database, authentication, integrations — built as one system, not four separate efforts.",
  },
  {
    index: "04",
    title: "Refine",
    body: "Test the edges, simplify what is clever, harden what matters, and prepare the product for real usage.",
  },
];
