"use client";

import { useState, type FocusEvent, type FormEvent } from "react";
import { cn } from "@/lib/cn";
import { CheckIcon, SendIcon } from "@/components/ui/Icons";
import { site } from "@/data/site";

type Field = "name" | "email" | "message";
type Status = "idle" | "sending" | "sent" | "error";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(field: Field, value: string): string | null {
  const v = value.trim();
  if (field === "name") return v ? null : "Add your name so I know who to reply to.";
  if (field === "email") {
    if (!v) return "Add an email address so I can reply.";
    return EMAIL_PATTERN.test(v) ? null : "That email looks incomplete, e.g. you@company.com.";
  }
  return v.length >= 10 ? null : "Add a few more words about what you need.";
}

const inputClass =
  "w-full rounded-xl border bg-ink-deep/60 px-4 py-3 text-base text-white transition-colors duration-300 outline-none placeholder:text-muted/60 focus:bg-ink-deep sm:text-sm";

export function ContactForm() {
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  function onBlur(event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const field = event.target.name as Field;
    const error = validate(field, event.target.value);
    setErrors((prev) => ({ ...prev, [field]: error ?? undefined }));
  }

  function onInput(field: Field, value: string) {
    if (errors[field] && !validate(field, value)) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const values = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    const nextErrors: Partial<Record<Field, string>> = {};
    for (const field of Object.keys(values) as Field[]) {
      const error = validate(field, values[field]);
      if (error) nextErrors[field] = error;
    }
    setErrors(nextErrors);
    const firstInvalid = (Object.keys(nextErrors) as Field[])[0];
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    // No key configured yet: fall back to the visitor's email app.
    if (!site.web3formsKey) {
      const subject = encodeURIComponent(`Project inquiry from ${values.name}`);
      const body = encodeURIComponent(
        `Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`,
      );
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: site.web3formsKey,
          subject: `New portfolio message from ${values.name}`,
          from_name: "Portfolio website",
          botcheck: data.get("botcheck") ? true : "",
          ...values,
        }),
      });
      const result = (await response.json()) as { success?: boolean };
      if (!response.ok || !result.success) throw new Error("Send failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const fieldProps = (field: Field) => ({
    name: field,
    onBlur,
    "aria-invalid": errors[field] ? true : undefined,
    "aria-describedby": errors[field] ? `contact-${field}-error` : undefined,
    className: cn(
      inputClass,
      errors[field]
        ? "border-danger/70 focus:border-danger"
        : "border-white/10 focus:border-gold/50",
    ),
  });

  const fieldError = (field: Field) =>
    errors[field] ? (
      <p id={`contact-${field}-error`} className="mt-2 text-xs text-danger">
        {errors[field]}
      </p>
    ) : null;

  const labelClass =
    "mb-2 block font-mono text-[10px] tracking-[0.25em] text-muted uppercase";

  if (status === "sent") {
    return (
      <div
        role="status"
        className="flex min-h-[26rem] flex-col items-center justify-center rounded-[1.75rem] border border-gold/25 bg-white/[0.04] p-8 text-center"
      >
        <span className="flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-light text-ink">
          <CheckIcon className="size-6" />
        </span>
        <h3 className="mt-6 font-display text-2xl text-white">Message sent</h3>
        <p className="mt-2 max-w-sm text-sm text-muted">
          Thanks for reaching out. I usually reply within a day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 rounded-full border border-white/15 px-5 py-2.5 text-sm text-white transition-colors hover:border-gold/40"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.1] bg-white/[0.05] p-6 backdrop-blur-xl sm:p-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/[0.06] to-transparent"
      />
      <div className="relative">
        <h3 className="text-sm font-medium text-white">Start the conversation</h3>
        <p className="mt-1 text-xs text-muted">
          {"Tell me what you're building or the role you're hiring for."}
        </p>
        <form onSubmit={handleSubmit} noValidate className="mt-6 grid gap-5">
          {/* Honeypot: hidden from people, bots fill it in */}
          <input
            type="checkbox"
            name="botcheck"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-name" className={labelClass}>
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                autoComplete="name"
                onInput={(e) => onInput("name", e.currentTarget.value)}
                {...fieldProps("name")}
              />
              {fieldError("name")}
            </div>
            <div>
              <label htmlFor="contact-email" className={labelClass}>
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                autoComplete="email"
                placeholder="you@company.com"
                onInput={(e) => onInput("email", e.currentTarget.value)}
                {...fieldProps("email")}
              />
              {fieldError("email")}
            </div>
          </div>
          <div>
            <label htmlFor="contact-message" className={labelClass}>
              Message
            </label>
            <textarea
              id="contact-message"
              rows={5}
              onInput={(e) => onInput("message", e.currentTarget.value)}
              {...fieldProps("message")}
              className={cn(fieldProps("message").className, "min-h-32 resize-y")}
            />
            {fieldError("message")}
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-light px-6 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:brightness-105 active:scale-[0.98] disabled:cursor-wait disabled:opacity-70 sm:w-auto"
          >
            <SendIcon className={cn("size-4", status === "sending" && "animate-pulse")} />
            {status === "sending" ? "Sending…" : "Send message"}
          </button>
        </form>
        <div aria-live="polite">
          {status === "error" ? (
            <p className="mt-4 text-sm text-danger">
              {"The message didn't go through. Try again, or email me at "}
              <a href={`mailto:${site.email}`} className="underline">
                {site.email}
              </a>
              .
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
