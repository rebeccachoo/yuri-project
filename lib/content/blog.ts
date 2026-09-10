import "server-only";
import { getSupabasePublicClient } from "@/lib/supabase/public";
import type { BlogPostRow } from "@/lib/supabase/types";

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string[];
  author: string;
  date: string;
  readTime: string;
  accentColor: string;
}

export { blogCategories, type BlogCategory } from "@/data/blog-categories";

function fromRow(row: BlogPostRow): BlogPost {
  return {
    slug: row.slug,
    title: row.title,
    category: row.category,
    excerpt: row.excerpt,
    content: row.content,
    author: row.author,
    date: row.date,
    readTime: row.read_time,
    accentColor: row.accent_color,
  };
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const supabase = getSupabasePublicClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .order("date", { ascending: false });

  if (error) {
    console.error("Failed to load blog posts from Supabase:", error.message);
    return [];
  }

  return (data ?? []).map(fromRow);
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const supabase = getSupabasePublicClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (error || !data) return undefined;
  return fromRow(data);
}

export async function getBlogSlugs(): Promise<string[]> {
  const supabase = getSupabasePublicClient();
  const { data, error } = await supabase.from("blog_posts").select("slug");

  if (error) {
    console.error("Failed to load blog slugs from Supabase:", error.message);
    return [];
  }

  return (data ?? []).map((row) => row.slug);
}
