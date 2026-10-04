import type { ComponentType, SVGProps } from "react";
import { ContactForm } from "@/components/contact/ContactForm";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  SparkleIcon,
  WhatsAppIcon,
} from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import { site } from "@/data/site";

type ChannelIcon = ComponentType<SVGProps<SVGSVGElement>>;

type Channel = {
  label: string;
  value: string;
  icon: ChannelIcon;
  href?: string;
  external?: boolean;
};

const iconByLabel: Record<string, ChannelIcon> = {
  Email: MailIcon,
  WhatsApp: WhatsAppIcon,
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
};

const channels: Channel[] = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: MailIcon,
  },
  site.whatsapp
    ? {
        label: "WhatsApp",
        value: "Message me",
        href: site.whatsapp,
        external: true,
        icon: WhatsAppIcon,
      }
    : {
        label: "WhatsApp",
        value: "Add link",
        icon: WhatsAppIcon,
      },
  ...site.socials.map((social) => ({
    label: social.label,
    value: social.href ? social.handle : "Add link",
    href: social.href || undefined,
    external: Boolean(social.href),
    icon: iconByLabel[social.label] ?? SparkleIcon,
  })),
];

function ChannelRow({ channel }: { channel: Channel }) {
  const Icon = channel.icon;
  const isLink = Boolean(channel.href);

  const rowClassName = cn(
    "group flex items-center gap-4 rounded-2xl border px-5 py-4 transition-all duration-300",
    isLink
      ? "border-white/[0.08] bg-white/[0.03] hover:border-coral/30 hover:bg-white/[0.05]"
      : "border-dashed border-white/15 bg-white/[0.03] opacity-60",
  );

  const content = (
    <>
      <span
        className={cn(
          "flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05]",
          isLink ? "text-coral" : "text-muted",
        )}
      >
        <Icon className="size-4" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-medium text-white">
          {channel.label}
        </span>
        {isLink ? (
          <span className="block truncate text-xs text-muted">
            {channel.value}
          </span>
        ) : (
          <span className="block font-mono text-[10px] text-coral">
            Add link
          </span>
        )}
      </span>
    </>
  );

  if (!channel.href) {
    return (
      <div aria-disabled="true" className={rowClassName}>
        {content}
      </div>
    );
  }

  return (
    <a
      href={channel.href}
      {...(channel.external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={rowClassName}
    >
      {content}
    </a>
  );
}

export function Contact() {
  return (
    <Section
      id="contact"
      labelledBy="contact-title"
      className="border-t border-white/[0.06]"
    >
      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-coral/[0.06] blur-[120px]"
        />
        <SectionHeading
          id="contact-title"
          eyebrow="05 / Contact"
          title="Have a problem worth solving?"
          lead="If you're building something meaningful and need someone who can think across the product, frontend, backend, and data layer, let's talk."
          align="center"
        />
        <div className="relative mt-16 grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal delay={100}>
              <p className="mb-5 font-mono text-[10px] tracking-[0.3em] text-muted uppercase">
                Direct channels
              </p>
              <ul className="flex flex-col gap-3">
                {channels.map((channel) => (
                  <li key={channel.label}>
                    <ChannelRow channel={channel} />
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={150}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
        <p className="relative mt-16 text-center font-mono text-[10px] tracking-[0.3em] text-muted uppercase">
          Frontend precision <span className="text-coral/60">·</span> Backend
          architecture <span className="text-coral/60">·</span> Product thinking
        </p>
      </div>
    </Section>
  );
}
