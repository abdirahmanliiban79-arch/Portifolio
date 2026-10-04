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
    "Full-Stack Software Engineer focused on building modern web applications, scalable backends, and products that solve real problems.",
  available: true,
  availabilityLabel: "Available for opportunities",
  email: "abdirahmanliiban79@gmail.com",
  whatsapp: "https://wa.me/252618846384?text=i%20wanna%20work%20with%20you",
  profileImage: "/profile.jpg" as string | null,
  footerNote: "Built with curiosity, systems thinking, and a lot of iteration.",
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/abdirahmanliiban79-arch",
      handle: "@abdirahmanliiban79-arch",
    },
  ] satisfies SocialLink[],
};
