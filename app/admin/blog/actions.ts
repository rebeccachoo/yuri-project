"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdminSession, slugify } from "@/lib/require-admin";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";

function readBlogFields(formData: FormData) {
  const contentRaw = String(formData.get("content") ?? "");
  const content = contentRaw
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  return {
    slug: slugify(String(formData.get("slug") ?? "")),
    title: String(formData.get("title") ?? "").trim(),
    category: String(formData.get("category") ?? "").trim(),
    excerpt: String(formData.get("excerpt") ?? "").trim(),
    content,
    author: String(formData.get("author") ?? "").trim(),
    date: String(formData.get("date") ?? "").trim(),
    read_time: String(formData.get("readTime") ?? "").trim(),
    accent_color: String(formData.get("accentColor") ?? "navy").trim(),
  };
}

export async function createBlogPost(formData: FormData) {
  await requireAdminSession();

  const fields = readBlogFields(formData);
  const supabase = getSupabaseAdminClient();
  const { error } = await supabase.from("blog_posts").insert(fields);

  if (error) {
    redirect(`/admin/blog/new?error=${encodeURIComponent(error.message)}`);
  }

  revalidatePath("/blog");
  revalidatePath("/admin/blog");
  redirect("/admin/blog");
}

export async function updateBlogPost(id: string, formData: FormData) {
  await requireAdminSession();

  const fields = readBlogFields(formData);
  const supabase = getSupabaseAdminClient();
  const { error } = await supabase.from("blog_posts").update(fields).eq("id", id);

  if (error) {
    redirect(`/admin/blog/${id}/edit?error=${encodeURIComponent(error.message)}`);
  }

  revalidatePath("/blog");
  revalidatePath("/admin/blog");
  redirect("/admin/blog");
}

export async function deleteBlogPost(formData: FormData) {
  await requireAdminSession();

  const id = String(formData.get("id") ?? "");
  const supabase = getSupabaseAdminClient();
  await supabase.from("blog_posts").delete().eq("id", id);

  revalidatePath("/blog");
  revalidatePath("/admin/blog");
  redirect("/admin/blog");
}
