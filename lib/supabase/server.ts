import "server-only";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

// Session-aware client for Server Components, Server Actions, and Route
// Handlers — reads/writes the Supabase Auth session via cookies. Uses the
// anon key; RLS still applies (this is not the admin/service_role client).
export async function createSupabaseServerClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // Called from a Server Component render, where cookies can't be
            // set. Harmless as long as proxy.ts is also refreshing the
            // session (see proxy.ts).
          }
        },
      },
    }
  );
}
