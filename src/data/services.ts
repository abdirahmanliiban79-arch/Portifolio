export type ServiceIcon = "code" | "database" | "layers" | "sparkle";

export type Service = {
  id: string;
  index: string;
  icon: ServiceIcon;
  title: string;
  body: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    id: "web-apps",
    index: "01",
    icon: "code",
    title: "Web Applications",
    body: "Fast, responsive products built with Next.js and React, from the first screen to production.",
    deliverables: ["Next.js / React", "Auth & user accounts", "Responsive UI"],
  },
  {
    id: "backends",
    index: "02",
    icon: "database",
    title: "APIs & Backends",
    body: "Secure REST APIs and data models that stay clean as the product grows.",
    deliverables: ["Node.js / Express", "PostgreSQL / MongoDB", "Role-based access"],
  },
  {
    id: "dashboards",
    index: "03",
    icon: "layers",
    title: "Dashboards & Internal Tools",
    body: "Admin panels, reports, and tools that turn messy data into decisions.",
    deliverables: ["Data tables & charts", "Admin panels", "Workflow automation"],
  },
  {
    id: "industry",
    index: "04",
    icon: "sparkle",
    title: "Industry Solutions",
    body: "Software shaped around how a business actually runs, whatever the field.",
    deliverables: ["Logistics & shipping", "Finance", "Retail & e-commerce"],
  },
];

export type TerminalLine = {
  kind: "cmd" | "info" | "ok" | "wait" | "ship";
  text: string;
};

export type WorkflowStep = {
  index: string;
  title: string;
  body: string;
  /** Steps a human owns, highlighted to show where reliability comes from. */
  human?: boolean;
  /** What the agent terminal prints during this step of the demo. */
  terminal: TerminalLine[];
};

/** Agent-assisted delivery, demonstrated on a sample "Shipment Tracker" app. */
export const agentWorkflow: WorkflowStep[] = [
  {
    index: "01",
    title: "Plan",
    body: "Break the work into clear steps and set the rules the agent follows.",
    human: true,
    terminal: [
      { kind: "cmd", text: 'claude "build a shipment tracker"' },
      { kind: "info", text: "plan: 3 tasks · tracking page, status API, tests" },
    ],
  },
  {
    index: "02",
    title: "Build",
    body: "Agents write the code in small, focused changes.",
    terminal: [
      { kind: "info", text: "editing app/track/[id]/page.tsx" },
      { kind: "info", text: "editing app/api/shipments/route.ts" },
    ],
  },
  {
    index: "03",
    title: "Test",
    body: "Type checks, linting, and tests run on every change.",
    terminal: [
      { kind: "info", text: "running type check, lint, tests…" },
      { kind: "ok", text: "12 tests passed" },
    ],
  },
  {
    index: "04",
    title: "Review",
    body: "I read every line before it ships. Nothing merges unreviewed.",
    human: true,
    terminal: [
      { kind: "wait", text: "waiting for human review…" },
      { kind: "ok", text: "approved by Abdirahman" },
    ],
  },
  {
    index: "05",
    title: "Ship",
    body: "Deploy, gather feedback, and iterate quickly.",
    terminal: [{ kind: "ship", text: "deployed → tracker.vercel.app" }],
  },
];
