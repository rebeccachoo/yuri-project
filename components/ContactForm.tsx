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
        <label htmlFor="contact-name" className="text-sm font-bold text-navy-deep">
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="mt-1 w-full rounded-lg border border-navy/20 bg-white px-4 py-2.5 text-sm text-navy-deep placeholder:text-navy-deep/40 focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue"
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="text-sm font-bold text-navy-deep">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="mt-1 w-full rounded-lg border border-navy/20 bg-white px-4 py-2.5 text-sm text-navy-deep placeholder:text-navy-deep/40 focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="text-sm font-bold text-navy-deep">
          Message
        </label>
        <textarea
          id="contact-message"
          required
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="mt-1 w-full rounded-lg border border-navy/20 bg-white px-4 py-2.5 text-sm text-navy-deep placeholder:text-navy-deep/40 focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue"
        />
      </div>

      <button
        type="submit"
        className="rounded-full bg-accent px-6 py-3 text-sm font-bold text-navy-deep transition-colors hover:bg-cream"
      >
        Send Message
      </button>
      <p className="text-xs text-navy-deep/50">
        This opens your email app so you can send the message directly to us.
      </p>
    </form>
  );
}
