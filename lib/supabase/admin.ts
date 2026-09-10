import "server-only";
import { createClient } from "@supabase/supabase-js";
import WebSocket from "ws";

// Write client for admin server actions ONLY. The service_role key bypasses
// Row Level Security entirely, so this must never be imported from a Client
// Component or anywhere reachable without first passing the /admin login
// gate (see proxy.ts and app/admin/actions.ts).

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export function getSupabaseAdminClient() {
  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY (check .env.local)"
    );
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false },
    realtime: { transport: WebSocket as unknown as typeof globalThis.WebSocket },
  });
}
