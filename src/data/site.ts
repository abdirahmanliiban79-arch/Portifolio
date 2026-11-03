export type SocialLink = {
  label: string;
  href: string;
  handle: string;
};

export const site = {
  name: "Abdirahman Liiban",
  initials: "AL",
  role: "Full-Stack Software Engineer",
  heroBadge: "FULL-STACK SOFTWARE ENGINEER",
  identityLine: "Frontend precision. Backend architecture. Product thinking.",
  heroSupport:
    "I design and build modern web apps, APIs, and dashboards, end to end, using AI coding agents to ship faster without cutting corners. For teams hiring an engineer and for businesses that need a product shipped.",
  /** Industries that rotate in the hero headline. */
  industries: ["startups", "logistics", "finance", "e-commerce"],
  available: true,
  availabilityLabel: "Available for work",
  email: "abdirahmanliiban79@gmail.com",
  whatsapp: "https://wa.me/252618846384?text=i%20wanna%20work%20with%20you",
  profileImage: "/profile.jpg" as string | null,
  /**
   * Public URL of the live site, used for SEO (canonical URL, sitemap, share
   * previews). Set NEXT_PUBLIC_SITE_URL, or replace the fallback.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  /** Put your CV at public/cv.pdf, then set this to "/cv.pdf". */
  cvUrl: "/cv.pdf" as string | null,
  /**
   * Web3Forms access key (public by design, free at web3forms.com).
   * While empty, the contact form falls back to opening the visitor's email app.
   */
  web3formsKey: process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "",
  footerNote: "Built with curiosity, systems thinking, and a lot of iteration.",
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/abdirahmanliiban79-arch",
      handle: "@abdirahmanliiban79-arch",
    },
  ] satisfies SocialLink[],
};
