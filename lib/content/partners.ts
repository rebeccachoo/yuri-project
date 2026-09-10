import "server-only";
import { getSupabasePublicClient } from "@/lib/supabase/public";
import type { PartnerRow } from "@/lib/supabase/types";

export interface Partner {
  slug: string;
  name: string;
  website?: string;
  logo?: string;
  monogram: string;
  accentColor: string;
}

function fromRow(row: PartnerRow): Partner {
  return {
    slug: row.slug,
    name: row.name,
    website: row.website ?? undefined,
    logo: row.logo ?? undefined,
    monogram: row.monogram,
    accentColor: row.accent_color,
  };
}

export async function getPartners(): Promise<Partner[]> {
  const supabase = getSupabasePublicClient();
  const { data, error } = await supabase
    .from("partners")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    console.error("Failed to load partners from Supabase:", error.message);
    return [];
  }

  return (data ?? []).map(fromRow);
}
