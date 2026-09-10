import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { requireAdminSession } from "@/lib/require-admin";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";
import PartnerFormFields from "@/components/admin/PartnerFormFields";
import { updatePartner } from "../../actions";

export const metadata: Metadata = { title: "Admin — Edit Partner", robots: { index: false } };

export default async function EditPartnerPage(props: PageProps<"/admin/partners/[id]/edit">) {
  await requireAdminSession();
  const { id } = await props.params;
  const { error } = await props.searchParams;

  const supabase = getSupabaseAdminClient();
  const { data: partner } = await supabase.from("partners").select("*").eq("id", id).maybeSingle();

  if (!partner) {
    notFound();
  }

  const updateWithId = updatePartner.bind(null, id);

  return (
    <div className="mx-auto w-full max-w-2xl flex-1 px-6 py-16">
      <Link href="/admin/partners" className="text-sm font-bold text-accent-blue hover:underline">
        ← Partners
      </Link>
      <h1 className="mt-2 text-2xl font-extrabold uppercase tracking-tight text-navy-deep">
        Edit Partner
      </h1>
      {error && <p className="mt-4 text-sm font-semibold text-rose-600">{error}</p>}
      <form action={updateWithId} className="mt-6">
        <PartnerFormFields partner={partner} />
      </form>
    </div>
  );
}
