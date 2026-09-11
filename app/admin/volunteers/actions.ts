"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdminSession, slugify } from "@/lib/require-admin";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";

function readVolunteerFields(formData: FormData) {
  return {
    slug: slugify(String(formData.get("slug") ?? "")),
    organization_name: String(formData.get("organizationName") ?? "").trim(),
    title: String(formData.get("title") ?? "").trim(),
    location: String(formData.get("location") ?? "").trim(),
    date: String(formData.get("date") ?? "").trim(),
    age_requirement: String(formData.get("ageRequirement") ?? "").trim(),
    description: String(formData.get("description") ?? "").trim(),
    apply_url: String(formData.get("applyUrl") ?? "").trim() || null,
  };
}

export async function createVolunteer(formData: FormData) {
  await requireAdminSession();

  const fields = readVolunteerFields(formData);
  const supabase = getSupabaseAdminClient();
  const { error } = await supabase.from("volunteers").insert(fields);

  if (error) {
    redirect(
      `/admin/volunteers/new?error=${encodeURIComponent(error.message)}`,
    );
  }

  revalidatePath("/volunteer");
  revalidatePath("/admin/volunteers");
  redirect("/admin/volunteers");
}

export async function updateVolunteer(id: string, formData: FormData) {
  await requireAdminSession();

  const fields = readVolunteerFields(formData);
  const supabase = getSupabaseAdminClient();
  const { error } = await supabase
    .from("volunteers")
    .update(fields)
    .eq("id", id);

  if (error) {
    redirect(
      `/admin/volunteers/${id}/edit?error=${encodeURIComponent(error.message)}`,
    );
  }

  revalidatePath("/volunteer");
  revalidatePath("/admin/volunteers");
  redirect("/admin/volunteers");
}

export async function deleteVolunteer(formData: FormData) {
  await requireAdminSession();

  const id = String(formData.get("id") ?? "");
  const supabase = getSupabaseAdminClient();
  await supabase.from("volunteers").delete().eq("id", id);

  revalidatePath("/volunteer");
  revalidatePath("/admin/volunteers");
  redirect("/admin/volunteers");
}
