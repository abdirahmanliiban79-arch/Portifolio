export type ProjectStatus = "shipped" | "in-progress";

export type Project = {
  id: string;
  index: string;
  title: string;
  category: string;
  status: ProjectStatus;
  statusLabel: string;
  tagline: string;
  summary: string;
  problem: string;
  solutionTitle: string;
  solution: string;
  features: string[];
  approach: string[];
  stack: string[];
  liveUrl: string;
  liveLabel: string;
  githubUrl: string;
  githubLabel: string;
  screenshot: string | null;
};

export const projects: Project[] = [
  {
    id: "fintrack",
    index: "01",
    title: "FinTrack Pro",
    category: "Full-Stack Finance Management System",
    status: "shipped",
    statusLabel: "Shipped",
    tagline:
      "A structured system for money that usually lives in scattered spreadsheets, notes, and memory.",
    summary:
      "Income, expenses, and transactions organized into one system — with authentication, categories, and a secure API behind every screen.",
    problem:
      "Financial activity rarely lives in one place. Income arrives through one channel, expenses leave through several, and the record of what actually happened ends up scattered across spreadsheets, notes, and banking apps that don't talk to each other. When the data is fragmented, so is the understanding.",
    solutionTitle: "The Solution",
    solution:
      "FinTrack Pro pulls all of it into one structured system. Transactions are categorized as they are recorded, balances are derived rather than maintained, and every screen reads from the same source of truth. The result is a clear, current picture of where money stands — not a pile of numbers to reconcile.",
    features: [
      "Income and expense tracking with structured categories",
      "Transaction history with filtering and clear state",
      "JWT authentication with bcrypt-hashed credentials",
      "Request validation and typed contracts with Zod",
      "REST API with consistent, predictable resource design",
      "Persistent MongoDB storage backing every view",
    ],
    approach: [
      "Data model designed first — users, categories, and transactions with clear relationships — so reporting is a query, not a computation scattered through the UI.",
      "API layer built around resources with predictable status codes; validation happens at the boundary with Zod before anything reaches business logic.",
      "Authentication handled with JWT access tokens and bcrypt-hashed credentials; protected routes verify identity server-side, never in the client.",
      "Frontend consumes typed API responses directly, keeping state close to where it is used and the data flow easy to trace.",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "bcrypt",
      "Zod",
    ],
    liveUrl:
      "https://finance-trac-2xfr-bbf5x236q-abdirahmanliiban79-archs-projects.vercel.app",
    liveLabel: "Live Demo",
    githubUrl:
      "https://github.com/abdirahmanliiban79-arch/finance-trac/tree/main",
    githubLabel: "GitHub",
    screenshot: null,
  },
  {
    id: "taskflow",
    index: "02",
    title: "TaskFlow 5D",
    category: "AI-Powered Task Planning System",
    status: "shipped",
    statusLabel: "Shipped",
    tagline: "Tasks don't need another list. They need a plan.",
    summary:
      "An AI-powered planner that turns loose tasks and goals into structured, actionable plans through the Gemini API and a persistent data layer.",
    problem:
      "Most task apps are containers, not planners. They store whatever you type and give nothing back — so a goal like 'launch my portfolio' sits next to 'buy milk' as if they cost the same attention. The user still has to do the thinking the tool was supposed to help with.",
    solutionTitle: "The AI-Powered Approach",
    solution:
      "TaskFlow sends the raw goal and its tasks through the Gemini API, which returns structure: sequenced steps, priorities, and time estimates. What comes back is a plan — ordered, sized, and specific — which the user can adjust and track, backed by Prisma so plans survive sessions and evolve as work progresses.",
    features: [
      "Goal-to-plan transformation through the Gemini API",
      "AI-generated sequencing, priorities, and time estimates",
      "Editable plans — the AI proposes, the user decides",
      "Persistent plans and progress with Prisma",
      "Structured workflows instead of flat task lists",
      "Progress tracking as steps get completed",
    ],
    approach: [
      "Prompting treated as an engineering surface: constrained output format, explicit schema, and validation before a plan is allowed into the database.",
      "Prisma models for plans, steps, and progress with clear relations — AI output is normalized into the same structures as user edits, so there is one path for both.",
      "API routes wrap the Gemini call with error handling and sane fallbacks: if generation fails, the user keeps their input and can retry without losing work.",
      "The UI keeps the human in control — generated plans are drafts, always editable, never authoritative.",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Gemini API",
      "Prisma",
      "Tailwind CSS",
    ],
    liveUrl:
      "https://taskflow-i6ehw8own-abdirahmanliiban79-archs-projects.vercel.app",
    liveLabel: "Live Demo",
    githubUrl: "https://github.com/abdirahmanliiban79-arch/TaskFlow",
    githubLabel: "GitHub",
    screenshot: null,
  },
  {
    id: "shopping-agent",
    index: "03",
    title: "AI Shopping Agent",
    category: "AI-Powered Price Discovery",
    status: "shipped",
    statusLabel: "Shipped",
    tagline: "Before you buy, let an agent do the searching.",
    summary:
      "An agent-based system that takes over the repetitive part of buying online: finding the product, comparing sellers, and surfacing competitive prices.",
    problem:
      "Comparing prices online is manual work disguised as convenience. The same product lives across a dozen storefronts with different prices, shipping costs, and availability — so the quick check becomes twenty open tabs and a judgment call made from fatigue.",
    solutionTitle: "The Approach",
    solution:
      "The agent takes a product request in natural language, plans a search across sources, and works through it step by step: identify candidate products, extract price and seller data, and return a comparison that supports a decision. LLM reasoning handles the messy parts — varied page structures, ambiguous product matches — while the workflow stays observable and correctable.",
    features: [
      "Natural-language product requests",
      "Agent workflow: plan, search, extract, compare",
      "Price comparison across multiple sources",
      "LLM reasoning routed through OpenRouter",
      "Structured output — decisions, not raw scraped noise",
      "Observable steps, so conclusions can be traced",
    ],
    approach: [
      "Built as an agent loop rather than a single prompt: the model plans, calls tools, observes results, and refines its approach until it has enough signal to compare.",
      "OpenRouter is the model gateway — provider flexibility without rewriting the agent every time a model changes.",
      "Output designed for decision support: a ranked comparison with reasoning, not a wall of extracted text.",
      "Iterating on extraction reliability and product-matching accuracy — varied storefront structures are what make the agent's reasoning the interesting part.",
    ],
    stack: ["OpenRouter", "LLM APIs", "Agent Workflow", "TypeScript", "Next.js"],
    liveUrl: "https://shopping-ai-agent-os5o-ib1djdbky.vercel.app",
    liveLabel: "Live Demo",
    githubUrl: "https://github.com/abdirahmanliiban79-arch/Shopping-Ai-Agent",
    githubLabel: "GitHub",
    screenshot: null,
  },
];
