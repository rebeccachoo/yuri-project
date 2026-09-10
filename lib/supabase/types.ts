// Row shapes matching supabase/schema.sql. Kept by hand instead of
// generating with the Supabase CLI, since this project has no CI step for
// that yet — update this alongside schema.sql if columns change.

export interface VolunteerRow {
  id: string;
  slug: string;
  organization_name: string;
  title: string;
  location: string;
  date: string;
  age_requirement: string;
  description: string;
  apply_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface BlogPostRow {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string[];
  author: string;
  date: string;
  read_time: string;
  accent_color: string;
  created_at: string;
  updated_at: string;
}

export interface PartnerRow {
  id: string;
  slug: string;
  name: string;
  website: string | null;
  logo: string | null;
  monogram: string;
  accent_color: string;
  created_at: string;
  updated_at: string;
}
