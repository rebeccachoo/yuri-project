import "server-only";
import { getSupabasePublicClient } from "@/lib/supabase/public";
import type { VolunteerRow } from "@/lib/supabase/types";

export interface VolunteerOpportunity {
  slug: string;
  organizationName: string;
  title: string;
  location: string;
  date: string;
  ageRequirement: string;
  description: string;
  applyUrl?: string;
}

function fromRow(row: VolunteerRow): VolunteerOpportunity {
  return {
    slug: row.slug,
    organizationName: row.organization_name,
    title: row.title,
    location: row.location,
    date: row.date,
    ageRequirement: row.age_requirement,
    description: row.description,
    applyUrl: row.apply_url ?? undefined,
  };
}

export async function getVolunteerOpportunities(): Promise<VolunteerOpportunity[]> {
  const supabase = getSupabasePublicClient();
  const { data, error } = await supabase
    .from("volunteers")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to load volunteers from Supabase:", error.message);
    return [];
  }

  return (data ?? []).map(fromRow);
}

export async function getVolunteerBySlug(
  slug: string
): Promise<VolunteerOpportunity | undefined> {
  const supabase = getSupabasePublicClient();
  const { data, error } = await supabase
    .from("volunteers")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (error || !data) return undefined;
  return fromRow(data);
}

export async function getVolunteerSlugs(): Promise<string[]> {
  const supabase = getSupabasePublicClient();
  const { data, error } = await supabase.from("volunteers").select("slug");

  if (error) {
    console.error("Failed to load volunteer slugs from Supabase:", error.message);
    return [];
  }

  return (data ?? []).map((row) => row.slug);
}
