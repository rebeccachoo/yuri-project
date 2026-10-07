"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdminSession, slugify } from "@/lib/require-admin";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";
import { detectPartnerLogoType, maxPartnerLogoBytes, partnerLogoBucket } from "@/lib/partner-logo";

function readPartnerFields(formData: FormData) {
  return {
    slug: slugify(String(formData.get("slug") ?? "")),
    name: String(formData.get("name") ?? "").trim(),
    website: String(formData.get("website") ?? "").trim() || null,
    monogram: String(formData.get("monogram") ?? "").trim().toUpperCase(),
    accent_color: String(formData.get("accentColor") ?? "navy").trim(),
  };
}

async function uploadLogo(formData: FormData, errorPath: string) {
  const file = formData.get("logoFile");
  if (!(file instanceof File) || file.size === 0) return null;
  if (file.size > maxPartnerLogoBytes) {
    redirect(`${errorPath}?error=${encodeURIComponent("Logo must be no larger than 2 MB.")}`);
  }
  const bytes = new Uint8Array(await file.arrayBuffer());
  const type = detectPartnerLogoType(bytes);
  if (!type) {
    redirect(`${errorPath}?error=${encodeURIComponent("Choose a PNG, JPG, or WebP image.")}`);
  }
  const supabase = getSupabaseAdminClient();
  const path = `${crypto.randomUUID()}.${type.extension}`;
  const { error } = await supabase.storage.from(partnerLogoBucket).upload(path, bytes, {
    contentType: type.contentType,
    cacheControl: "31536000",
    upsert: false,
  });
  if (error) {
    console.error("Partner logo upload failed:", error.message);
    redirect(`${errorPath}?error=${encodeURIComponent("Could not upload the logo. Please try again.")}`);
  }
  return { path, url: supabase.storage.from(partnerLogoBucket).getPublicUrl(path).data.publicUrl };
}

export async function createPartner(formData: FormData) {
  await requireAdminSession();

  const fields = readPartnerFields(formData);
  const uploaded = await uploadLogo(formData, "/admin/partners/new");
  const supabase = getSupabaseAdminClient();
  const { error } = await supabase.from("partners").insert({ ...fields, logo: uploaded?.url ?? null });

  if (error) {
    if (uploaded) await supabase.storage.from(partnerLogoBucket).remove([uploaded.path]);
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
  const { data: existing, error: lookupError } = await supabase.from("partners").select("id").eq("id", id).maybeSingle();
  if (lookupError || !existing) {
    redirect(`/admin/partners?error=${encodeURIComponent("Partner not found.")}`);
  }
  const uploaded = await uploadLogo(formData, `/admin/partners/${id}/edit`);
  // Omitting logo preserves the database value, including legacy local paths.
  const logoChange = uploaded ? { logo: uploaded.url } : formData.get("removeLogo") === "on" ? { logo: null } : {};
  const { error } = await supabase.from("partners").update({ ...fields, ...logoChange }).eq("id", id);

  if (error) {
    if (uploaded) await supabase.storage.from(partnerLogoBucket).remove([uploaded.path]);
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
