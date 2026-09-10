import type { Metadata } from "next";
import Link from "next/link";
import { requireAdminSession } from "@/lib/require-admin";
import PartnerFormFields from "@/components/admin/PartnerFormFields";
import { createPartner } from "../actions";

export const metadata: Metadata = { title: "Admin — New Partner", robots: { index: false } };

export default async function NewPartnerPage(props: PageProps<"/admin/partners/new">) {
  await requireAdminSession();
  const { error } = await props.searchParams;

  return (
    <div className="mx-auto w-full max-w-2xl flex-1 px-6 py-16">
      <Link href="/admin/partners" className="text-sm font-bold text-accent-blue hover:underline">
        ← Partners
      </Link>
      <h1 className="mt-2 text-2xl font-extrabold uppercase tracking-tight text-navy-deep">
        New Partner
      </h1>
      {error && <p className="mt-4 text-sm font-semibold text-rose-600">{error}</p>}
      <form action={createPartner} className="mt-6">
        <PartnerFormFields />
      </form>
    </div>
  );
}
