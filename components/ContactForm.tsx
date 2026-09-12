"use client";

import { useState, useTransition } from "react";
import { sendContactMessage } from "@/app/contact/actions";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [isPending, startTransition] = useTransition();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError(null);

    startTransition(async () => {
      const result = await sendContactMessage(name, email, message);
      if (result.error) {
        setError(result.error);
        return;
      }
      setSent(true);
      setName("");
      setEmail("");
      setMessage("");
    });
  }

  if (sent) {
    return (
      <p className="text-sm font-semibold text-gold">
        Thanks for reaching out! We&apos;ll get back to you soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="contact-name"
          className="text-sm font-semibold text-mist"
        >
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          disabled={isPending}
          className="mt-1 w-full rounded-lg border border-ink/15 bg-plum px-4 py-2.5 text-sm text-mist shadow-sm placeholder:text-mist/40 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/50 disabled:opacity-60"
        />
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="text-sm font-semibold text-mist"
        >
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          disabled={isPending}
          className="mt-1 w-full rounded-lg border border-ink/15 bg-plum px-4 py-2.5 text-sm text-mist shadow-sm placeholder:text-mist/40 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/50 disabled:opacity-60"
        />
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="text-sm font-semibold text-mist"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          required
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          disabled={isPending}
          className="mt-1 w-full rounded-lg border border-ink/15 bg-plum px-4 py-2.5 text-sm text-mist shadow-sm placeholder:text-mist/40 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/50 disabled:opacity-60"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="rounded-full cursor-pointer bg-gold px-6 py-3 text-sm font-semibold text-ink transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {isPending ? "Sending…" : "Send Message"}
      </button>
      {error && <p className="text-sm text-red-400">{error}</p>}
    </form>
  );
}
