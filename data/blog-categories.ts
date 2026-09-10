// A plain constant (no Supabase call), kept separate from lib/content/blog.ts
// so Client Components (like BlogBrowser) can import it without pulling in
// the server-only Supabase client.
export const blogCategories = ["Interviews", "Guides", "Updates"] as const;

export type BlogCategory = (typeof blogCategories)[number];
