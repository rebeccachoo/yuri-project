import type { Metadata } from "next";
import Link from "next/link";
import { requireAdminSession } from "@/lib/require-admin";
import VolunteerFormFields from "@/components/admin/VolunteerFormFields";
import { createVolunteer } from "../actions";

export const metadata: Metadata = { title: "Admin — New Volunteer Opportunity", robots: { index: false } };

export default async function NewVolunteerPage(props: PageProps<"/admin/volunteers/new">) {
  await requireAdminSession();
  const { error } = await props.searchParams;

  return (
    <div className="mx-auto w-full max-w-2xl flex-1 px-6 py-16">
      <Link href="/admin/volunteers" className="text-sm font-bold text-accent-blue hover:underline">
        ← Volunteer Opportunities
      </Link>
      <h1 className="mt-2 text-2xl font-extrabold uppercase tracking-tight text-navy-deep">
        New Volunteer Opportunity
      </h1>
      {error && <p className="mt-4 text-sm font-semibold text-rose-600">{error}</p>}
      <form action={createVolunteer} className="mt-6">
        <VolunteerFormFields />
      </form>
    </div>
  );
}
