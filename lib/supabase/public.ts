import "server-only";
import { createClient } from "@supabase/supabase-js";
import WebSocket from "ws";

// Read-only client for public pages (volunteer bulletin, blog, partners
// list). Uses the anon key, which is safe to expose — it can only do what
// the RLS "public can read" policies in supabase/schema.sql allow.
//
// Only ever called from Server Components, so it's fine to pull in the `ws`
// package here — Node 20 doesn't ship a native WebSocket the Supabase
// client can use, and this avoids bundling `ws` into any client code.

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export function getSupabasePublicClient() {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY (check .env.local)"
    );
  }

  return createClient(supabaseUrl, supabaseAnonKey, {
    realtime: { transport: WebSocket as unknown as typeof globalThis.WebSocket },
  });
}
