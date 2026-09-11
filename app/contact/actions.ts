"use server";

import { Resend } from "resend";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContactMessage(
  name: string,
  email: string,
  message: string
): Promise<{ error?: string }> {
  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();

  if (!trimmedName || !trimmedMessage) {
    return { error: "Please fill in your name and message." };
  }
  if (!EMAIL_PATTERN.test(trimmedEmail)) {
    return { error: "Please enter a valid email address." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("sendContactMessage: RESEND_API_KEY is not set");
    return { error: "Something went wrong. Please try again." };
  }

  const resend = new Resend(apiKey);
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";
  const toEmail = process.env.CONTACT_TO_EMAIL || "everykidcanplay@gmail.com";

  const { error } = await resend.emails.send({
    from: `Every Kid Can Website <${fromEmail}>`,
    to: toEmail,
    replyTo: trimmedEmail,
    subject: `New message from ${trimmedName}`,
    text: `${trimmedMessage}\n\n— ${trimmedName} (${trimmedEmail})`,
  });

  if (error) {
    console.error("sendContactMessage:", error.message);
    return { error: "Something went wrong. Please try again." };
  }

  return {};
}
