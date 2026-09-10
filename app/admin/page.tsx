import type { Metadata } from "next";
import Link from "next/link";
import { requireAdminSession } from "@/lib/require-admin";
import { logout } from "./actions";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

const sections = [
  {
    href: "/admin/volunteers",
    label: "Volunteer Opportunities",
    description: "Add, edit, or remove listings on the Volunteer Bulletin.",
  },
  {
    href: "/admin/blog",
    label: "Blog",
    description: "Add, edit, or remove blog posts.",
  },
  {
    href: "/admin/partners",
    label: "Partners",
    description: "Add, edit, or remove partner organizations.",
  },
];

export default async function AdminPage() {
  const user = await requireAdminSession();

  return (
    <div className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-extrabold uppercase tracking-tight text-navy-deep">
          Admin
        </h1>
        <form action={logout}>
          <button type="submit" className="text-sm font-bold text-accent-blue hover:underline">
            Log out
          </button>
        </form>
      </div>
      <p className="mt-2 text-sm text-navy-deep/50">Signed in as {user.email}</p>
      <p className="mt-4 text-navy-deep/70">
        Changes here go straight to Supabase and show up on the live site right away.
        Pillars, team, impact stats, and awards still live in the{" "}
        <code>data/*.ts</code> files and aren&apos;t editable here.
      </p>

      <div className="mt-8 space-y-4">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="block rounded-2xl border border-navy/10 bg-white p-6 transition-colors hover:border-accent-blue"
          >
            <p className="text-lg font-bold text-navy-deep">{section.label}</p>
            <p className="mt-1 text-sm text-navy-deep/60">{section.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
