"use client";

import { useState } from "react";
import { Send } from "lucide-react";

// Simple contact form. It currently just simulates sending.
// To wire it up for real, sign up for EmailJS (https://www.emailjs.com)
// or Resend (https://resend.com) and replace handleSubmit below —
// see CONTENT_GUIDE.md for step-by-step instructions.
export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // TODO: replace this with a real EmailJS or Resend call.
    setTimeout(() => setStatus("sent"), 900);
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-accent/40 bg-accent/10 p-8 text-center">
        <p className="font-display text-lg font-semibold text-ink">Message received!</p>
        <p className="mt-2 text-sm text-muted">We'll get back to you soon. Thanks for reaching out.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm text-ink/85">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-xl border border-border bg-elevated px-4 py-3 text-sm text-ink outline-none placeholder:text-muted focus:border-accent"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm text-ink/85">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-xl border border-border bg-elevated px-4 py-3 text-sm text-ink outline-none placeholder:text-muted focus:border-accent"
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm text-ink/85">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-xl border border-border bg-elevated px-4 py-3 text-sm text-ink outline-none placeholder:text-muted focus:border-accent"
          placeholder="How can we help?"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-white transition-transform hover:scale-105 disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send message"}
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
