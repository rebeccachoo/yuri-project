import type { Metadata } from "next";
import { login } from "../actions";

export const metadata: Metadata = {
  title: "Admin Login",
  robots: { index: false, follow: false },
};

export default async function AdminLoginPage(props: PageProps<"/admin/login">) {
  const { error } = await props.searchParams;
  const errorMessage = typeof error === "string" ? error : undefined;

  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-sm flex-1 flex-col justify-center px-6 py-16">
      <h1 className="text-2xl font-extrabold uppercase tracking-tight text-navy-deep">
        Admin Login
      </h1>
      <form action={login} className="mt-6 space-y-4">
        <div>
          <label htmlFor="email" className="text-sm font-bold text-navy-deep">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoFocus
            className="mt-1 w-full rounded-lg border border-navy/20 bg-white px-4 py-2.5 text-sm text-navy-deep focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue"
          />
        </div>
        <div>
          <label htmlFor="password" className="text-sm font-bold text-navy-deep">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="mt-1 w-full rounded-lg border border-navy/20 bg-white px-4 py-2.5 text-sm text-navy-deep focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue"
          />
        </div>
        {errorMessage && (
          <p className="text-sm font-semibold text-rose-600">{errorMessage}</p>
        )}
        <button
          type="submit"
          className="w-full rounded-full bg-accent px-6 py-3 text-sm font-bold text-navy-deep transition-colors hover:bg-cream"
        >
          Log In
        </button>
      </form>
    </div>
  );
}
