"use server";

import { getSupabasePublicClient } from "@/lib/supabase/public";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function subscribeToNewsletter(
  email: string
): Promise<{ error?: string }> {
  const trimmed = email.trim();

  if (!EMAIL_PATTERN.test(trimmed)) {
    return { error: "Please enter a valid email address." };
  }

  const supabase = getSupabasePublicClient();
  const { error } = await supabase
    .from("newsletter_subscribers")
    .insert({ email: trimmed });

  if (error) {
    if (error.code === "23505") {
      return { error: "That email is already on the list!" };
    }
    console.error("subscribeToNewsletter:", error.message);
    return { error: "Something went wrong. Please try again." };
  }

  return {};
}

export async function unsubscribeFromNewsletter(
  email: string
): Promise<{ error?: string }> {
  const trimmed = email.trim();

  if (!EMAIL_PATTERN.test(trimmed)) {
    return { error: "Please enter a valid email address." };
  }

  const supabase = getSupabasePublicClient();
  const { error, count } = await supabase
    .from("newsletter_subscribers")
    .delete({ count: "exact" })
    .eq("email", trimmed);

  if (error) {
    console.error("unsubscribeFromNewsletter:", error.message);
    return { error: "Something went wrong. Please try again." };
  }

  if (!count) {
    return { error: "We couldn't find that email on our list." };
  }

  return {};
}
