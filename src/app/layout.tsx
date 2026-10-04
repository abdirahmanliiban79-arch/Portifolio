import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Inter, JetBrains_Mono } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const instrument = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const description =
  "Full-Stack Software Engineer building modern web applications, scalable backends, and products that solve real problems. Frontend precision. Backend architecture. Product thinking.";

export const metadata: Metadata = {
  title: {
    default: `${site.name} — Full-Stack Software Engineer`,
    template: `%s — ${site.name}`,
  },
  description,
  keywords: [
    "Full-Stack Software Engineer",
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
  themeColor: "#181C24",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${instrument.variable} ${inter.variable} ${jetbrains.variable} antialiased`}
    >
      <body className="min-h-dvh bg-ink font-sans text-white">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
