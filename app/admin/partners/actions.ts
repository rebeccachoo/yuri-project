"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdminSession, slugify } from "@/lib/require-admin";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";

function readPartnerFields(formData: FormData) {
  return {
    slug: slugify(String(formData.get("slug") ?? "")),
    name: String(formData.get("name") ?? "").trim(),
    website: String(formData.get("website") ?? "").trim() || null,
    logo: String(formData.get("logo") ?? "").trim() || null,
    monogram: String(formData.get("monogram") ?? "").trim().toUpperCase(),
    accent_color: String(formData.get("accentColor") ?? "navy").trim(),
  };
}

export async function createPartner(formData: FormData) {
  await requireAdminSession();

  const fields = readPartnerFields(formData);
  const supabase = getSupabaseAdminClient();
  const { error } = await supabase.from("partners").insert(fields);

  if (error) {
    redirect(`/admin/partners/new?error=${encodeURIComponent(error.message)}`);
  }

  revalidatePath("/");
  revalidatePath("/admin/partners");
  redirect("/admin/partners");
}

export async function updatePartner(id: string, formData: FormData) {
  await requireAdminSession();

  const fields = readPartnerFields(formData);
  const supabase = getSupabaseAdminClient();
  const { error } = await supabase.from("partners").update(fields).eq("id", id);

  if (error) {
    redirect(`/admin/partners/${id}/edit?error=${encodeURIComponent(error.message)}`);
  }

  revalidatePath("/");
  revalidatePath("/admin/partners");
  redirect("/admin/partners");
}

export async function deletePartner(formData: FormData) {
  await requireAdminSession();

  const id = String(formData.get("id") ?? "");
  const supabase = getSupabaseAdminClient();
  await supabase.from("partners").delete().eq("id", id);

  revalidatePath("/");
  revalidatePath("/admin/partners");
  redirect("/admin/partners");
}
