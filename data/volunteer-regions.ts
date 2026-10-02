// A plain constant (no Supabase call), kept separate from
// lib/content/volunteers.ts so Client Components (like VolunteerBrowser)
// can import it without pulling in the server-only Supabase client.
export const volunteerRegions = [
  "Northwest",
  "Northeast",
  "North-Central",
  "West-Central",
  "East-Central",
  "South-Central",
  "Southwest",
  "Shore Region",
  "Southern Tip",
  "South-West",
] as const;

export type VolunteerRegion = (typeof volunteerRegions)[number];
