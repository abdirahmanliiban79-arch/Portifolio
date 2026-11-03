import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Geist, Geist_Mono } from "next/font/google";
import { site } from "@/data/site";
import { MotionProvider } from "@/components/motion/MotionProvider";
import "./globals.css";

const display = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const sans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const description =
  "Full-Stack Software Engineer building web apps, APIs, and dashboards for startups, logistics, finance, and e-commerce. Ships fast with AI coding agents. Available for full-time roles and freelance projects.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  email: `mailto:${site.email}`,
  url: site.url,
  image: site.profileImage ? `${site.url}${site.profileImage}` : undefined,
  sameAs: site.socials.map((social) => social.href),
  knowsAbout: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "MongoDB"],
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  alternates: { canonical: "/" },
  title: {
    default: `${site.name} — Full-Stack Software Engineer`,
    template: `%s — ${site.name}`,
  },
  description,
  keywords: [
    site.name,
    "Full-Stack Software Engineer",
    "Freelance Web Developer",
    "Hire Full-Stack Developer",
    "Logistics Software Developer",
    "Dashboard Development",
    "Agentic Coding",
    "AI-Assisted Development",
    "Claude Code",
    "Next.js Developer",
    "React Developer",
    "Node.js",
    "TypeScript",
    "REST APIs",
    "MongoDB",
    "PostgreSQL",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: `${site.name} — Full-Stack Software Engineer`,
    description,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Full-Stack Software Engineer`,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0A",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable} antialiased`}
    >
      <body className="min-h-dvh bg-ink font-sans text-white">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <MotionProvider>{children}</MotionProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
