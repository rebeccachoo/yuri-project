"use client";

import { useState, useTransition } from "react";
import {
  subscribeToNewsletter,
  unsubscribeFromNewsletter,
} from "@/app/how-to-help/actions";

export default function NewsletterForm() {
  const [mode, setMode] = useState<"subscribe" | "unsubscribe">("subscribe");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [isPending, startTransition] = useTransition();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError(null);

    startTransition(async () => {
      const action =
        mode === "subscribe" ? subscribeToNewsletter : unsubscribeFromNewsletter;
      const result = await action(email);
      if (result.error) {
        setError(result.error);
        return;
      }
      setDone(true);
      setEmail("");
    });
  }

  function switchMode() {
    setMode((current) => (current === "subscribe" ? "unsubscribe" : "subscribe"));
    setError(null);
    setDone(false);
  }

  if (done) {
    return (
      <p className="mt-6 text-sm font-semibold text-gold">
        {mode === "subscribe"
          ? "You're on the list! We'll be in touch."
          : "You've been unsubscribed."}
      </p>
    );
  }

  return (
    <div className="mt-6">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 sm:max-w-md sm:flex-row"
      >
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          disabled={isPending}
          className="w-full rounded-full border border-ink/15 bg-plum px-5 py-2.5 text-sm text-mist shadow-sm placeholder:text-mist/40 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/50 disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={isPending}
          className="shrink-0 rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-ink transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {isPending
            ? mode === "subscribe"
              ? "Subscribing…"
              : "Unsubscribing…"
            : mode === "subscribe"
              ? "Subscribe"
              : "Unsubscribe"}
        </button>
      </form>
      {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
      <button
        type="button"
        onClick={switchMode}
        className="mt-3 text-xs font-semibold text-mist/50 hover:text-gold hover:underline"
      >
        {mode === "subscribe"
          ? "Want to unsubscribe instead?"
          : "Want to subscribe instead?"}
      </button>
    </div>
  );
}
