"use client";

import { useState, type FormEvent } from "react";
import { SendIcon } from "@/components/ui/Icons";
import { site } from "@/data/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.1] bg-white/[0.05] p-6 backdrop-blur-xl sm:p-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/[0.06] to-transparent"
      />
      <div className="relative">
        <h3 className="text-sm font-medium text-white">
          Start the conversation
        </h3>
        <p className="mt-1 text-xs text-muted">
          {"Tell me what you're building and where it's stuck."}
        </p>
        <form onSubmit={handleSubmit} className="mt-6 grid gap-5">
          <div>
            <label
              htmlFor="contact-name"
              className="mb-2 block font-mono text-[10px] tracking-[0.25em] text-muted uppercase"
            >
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Your name"
              className="w-full rounded-xl border border-white/10 bg-ink-deep/60 px-4 py-3 text-base text-white transition-colors duration-300 outline-none placeholder:text-muted/60 focus:border-coral/50 focus:bg-ink-deep sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="contact-email"
              className="mb-2 block font-mono text-[10px] tracking-[0.25em] text-muted uppercase"
            >
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@company.com"
              className="w-full rounded-xl border border-white/10 bg-ink-deep/60 px-4 py-3 text-base text-white transition-colors duration-300 outline-none placeholder:text-muted/60 focus:border-coral/50 focus:bg-ink-deep sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="contact-message"
              className="mb-2 block font-mono text-[10px] tracking-[0.25em] text-muted uppercase"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              required
              aria-describedby="contact-form-note"
              placeholder="What are you building?"
              className="min-h-32 w-full resize-y rounded-xl border border-white/10 bg-ink-deep/60 px-4 py-3 text-base text-white transition-colors duration-300 outline-none placeholder:text-muted/60 focus:border-coral/50 focus:bg-ink-deep sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-coral to-coral-rose px-6 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:brightness-105 active:scale-[0.98] disabled:opacity-60 sm:w-auto"
          >
            <SendIcon className="size-4" />
            Send message
          </button>
        </form>
        {sent ? (
          <p role="status" className="mt-4 text-xs text-muted">
            {"Your email client should be open. If not, reach me directly at "}
            <a href={`mailto:${site.email}`} className="text-coral">
              {site.email}
            </a>
            .
          </p>
        ) : null}
        <p id="contact-form-note" className="mt-4 text-[10px] text-muted">
          {"This form opens your email client — no data is stored."}
        </p>
      </div>
    </div>
  );
}
