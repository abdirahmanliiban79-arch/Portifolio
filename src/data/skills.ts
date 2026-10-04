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
      "Interfaces that hold up under real state, real data, and real users — not just empty states.",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
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
      "APIs designed around resources, validated at the boundary, and secure by default.",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT",
      "bcrypt",
      "Zod",
      "Authentication",
      "Authorization",
      "Role-based Authentication",
    ],
  },
  {
    id: "data",
    index: "03",
    title: "Databases",
    capability:
      "Schemas that make the right query obvious and inconsistent state hard to create.",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Prisma ORM"],
  },
  {
    id: "tools",
    index: "04",
    title: "Tools & Workflow",
    capability:
      "The working system around the code: versioning, review, and shipping without ceremony.",
    items: ["Git", "GitHub", "VS Code", "Vercel", "Render"],
  },
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
