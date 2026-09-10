import type { Metadata } from "next";
import Link from "next/link";
import { requireAdminSession } from "@/lib/require-admin";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";
import DeleteButton from "@/components/admin/DeleteButton";
import { deleteVolunteer } from "./actions";

export const metadata: Metadata = { title: "Admin — Volunteers", robots: { index: false } };

export default async function AdminVolunteersPage() {
  await requireAdminSession();

  const supabase = getSupabaseAdminClient();
  const { data } = await supabase
    .from("volunteers")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="mx-auto w-full max-w-4xl flex-1 px-6 py-16">
      <Link href="/admin" className="text-sm font-bold text-accent-blue hover:underline">
        ← Admin
      </Link>
      <div className="mt-2 flex items-center justify-between">
        <h1 className="text-2xl font-extrabold uppercase tracking-tight text-navy-deep">
          Volunteer Opportunities
        </h1>
        <Link
          href="/admin/volunteers/new"
          className="rounded-full bg-accent px-4 py-2 text-sm font-bold text-navy-deep transition-colors hover:bg-cream"
        >
          + New
        </Link>
      </div>

      <div className="mt-8 space-y-4">
        {(data ?? []).map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between rounded-2xl border border-navy/10 bg-white p-4"
          >
            <div>
              <p className="font-bold text-navy-deep">{item.title}</p>
              <p className="text-sm text-navy-deep/60">
                {item.organization_name} · /volunteer/{item.slug}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href={`/admin/volunteers/${item.id}/edit`}
                className="text-sm font-bold text-accent-blue hover:underline"
              >
                Edit
              </Link>
              <form action={deleteVolunteer}>
                <input type="hidden" name="id" value={item.id} />
                <DeleteButton />
              </form>
            </div>
          </div>
        ))}
        {(data ?? []).length === 0 && (
          <p className="text-navy-deep/50">No volunteer opportunities yet.</p>
        )}
      </div>
    </div>
  );
}
