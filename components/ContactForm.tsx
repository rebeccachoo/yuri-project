"use client";

import { useState } from "react";

const CONTACT_EMAIL = "everykidcanplay@gmail.com";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const subject = `Message from ${name || "the website"}`;
    const body = `${message}\n\n— ${name}${email ? ` (${email})` : ""}`;
    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="contact-name" className="text-sm font-semibold text-mist">
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="mt-1 w-full rounded-lg border border-ink/15 bg-plum px-4 py-2.5 text-sm text-mist shadow-sm placeholder:text-mist/40 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/50"
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="text-sm font-semibold text-mist">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="mt-1 w-full rounded-lg border border-ink/15 bg-plum px-4 py-2.5 text-sm text-mist shadow-sm placeholder:text-mist/40 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/50"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="text-sm font-semibold text-mist">
          Message
        </label>
        <textarea
          id="contact-message"
          required
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="mt-1 w-full rounded-lg border border-ink/15 bg-plum px-4 py-2.5 text-sm text-mist shadow-sm placeholder:text-mist/40 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/50"
        />
      </div>

      <button
        type="submit"
        className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
      >
        Send Message
      </button>
      <p className="text-xs text-mist/40">
        This opens your email app so you can send the message directly to us.
      </p>
    </form>
  );
}
