import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SESSION_COOKIE_NAME, isValidSessionToken } from "@/lib/auth";
import { logout } from "./actions";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  // Proxy already gates this route, but a Server Function or Route Handler
  // should never trust Proxy alone — check the session here too.
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;

  if (!isValidSessionToken(token)) {
    redirect("/admin/login");
  }

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
      <p className="mt-4 text-navy-deep/70">
        You&apos;re logged in. This gate doesn&apos;t have a content editor wired up
        yet — for now, keep editing volunteers, blog posts, partners, and other
        content directly in the <code>data/*.ts</code> files. Editing UI that writes
        back to those files would need somewhere to persist the changes (a database
        or a writable server), which this site intentionally doesn&apos;t have.
      </p>
    </div>
  );
}
