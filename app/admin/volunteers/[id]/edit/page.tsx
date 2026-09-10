import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { requireAdminSession } from "@/lib/require-admin";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";
import VolunteerFormFields from "@/components/admin/VolunteerFormFields";
import { updateVolunteer } from "../../actions";

export const metadata: Metadata = { title: "Admin — Edit Volunteer Opportunity", robots: { index: false } };

export default async function EditVolunteerPage(
  props: PageProps<"/admin/volunteers/[id]/edit">
) {
  await requireAdminSession();
  const { id } = await props.params;
  const { error } = await props.searchParams;

  const supabase = getSupabaseAdminClient();
  const { data: volunteer } = await supabase
    .from("volunteers")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (!volunteer) {
    notFound();
  }

  const updateWithId = updateVolunteer.bind(null, id);

  return (
    <div className="mx-auto w-full max-w-2xl flex-1 px-6 py-16">
      <Link href="/admin/volunteers" className="text-sm font-bold text-accent-blue hover:underline">
        ← Volunteer Opportunities
      </Link>
      <h1 className="mt-2 text-2xl font-extrabold uppercase tracking-tight text-navy-deep">
        Edit Volunteer Opportunity
      </h1>
      {error && <p className="mt-4 text-sm font-semibold text-rose-600">{error}</p>}
      <form action={updateWithId} className="mt-6">
        <VolunteerFormFields volunteer={volunteer} />
      </form>
    </div>
  );
}
