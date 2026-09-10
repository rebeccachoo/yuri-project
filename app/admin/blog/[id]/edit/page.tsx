import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { requireAdminSession } from "@/lib/require-admin";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";
import BlogFormFields from "@/components/admin/BlogFormFields";
import { updateBlogPost } from "../../actions";

export const metadata: Metadata = { title: "Admin — Edit Blog Post", robots: { index: false } };

export default async function EditBlogPostPage(props: PageProps<"/admin/blog/[id]/edit">) {
  await requireAdminSession();
  const { id } = await props.params;
  const { error } = await props.searchParams;

  const supabase = getSupabaseAdminClient();
  const { data: post } = await supabase.from("blog_posts").select("*").eq("id", id).maybeSingle();

  if (!post) {
    notFound();
  }

  const updateWithId = updateBlogPost.bind(null, id);

  return (
    <div className="mx-auto w-full max-w-2xl flex-1 px-6 py-16">
      <Link href="/admin/blog" className="text-sm font-bold text-accent-blue hover:underline">
        ← Blog
      </Link>
      <h1 className="mt-2 text-2xl font-extrabold uppercase tracking-tight text-navy-deep">
        Edit Blog Post
      </h1>
      {error && <p className="mt-4 text-sm font-semibold text-rose-600">{error}</p>}
      <form action={updateWithId} className="mt-6">
        <BlogFormFields post={post} />
      </form>
    </div>
  );
}
