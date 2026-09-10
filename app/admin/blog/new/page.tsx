import type { Metadata } from "next";
import Link from "next/link";
import { requireAdminSession } from "@/lib/require-admin";
import BlogFormFields from "@/components/admin/BlogFormFields";
import { createBlogPost } from "../actions";

export const metadata: Metadata = { title: "Admin — New Blog Post", robots: { index: false } };

export default async function NewBlogPostPage(props: PageProps<"/admin/blog/new">) {
  await requireAdminSession();
  const { error } = await props.searchParams;

  return (
    <div className="mx-auto w-full max-w-2xl flex-1 px-6 py-16">
      <Link href="/admin/blog" className="text-sm font-bold text-accent-blue hover:underline">
        ← Blog
      </Link>
      <h1 className="mt-2 text-2xl font-extrabold uppercase tracking-tight text-navy-deep">
        New Blog Post
      </h1>
      {error && <p className="mt-4 text-sm font-semibold text-rose-600">{error}</p>}
      <form action={createBlogPost} className="mt-6">
        <BlogFormFields />
      </form>
    </div>
  );
}
