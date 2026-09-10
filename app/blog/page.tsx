import type { Metadata } from "next";
import { getBlogPosts } from "@/lib/content/blog";
import { blogCategories } from "@/data/blog-categories";
import BlogBrowser from "@/components/BlogBrowser";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Interviews, guides, and updates from Every Kid Can's work in sensory and social inclusion.",
};

export default async function BlogPage(props: PageProps<"/blog">) {
  const { category } = await props.searchParams;
  const categoryParam = typeof category === "string" ? category : undefined;
  const initialCategory =
    categoryParam && (blogCategories as readonly string[]).includes(categoryParam)
      ? categoryParam
      : "All";

  const posts = await getBlogPosts();
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="flex-1">
      <div className="bg-navy">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h1 className="text-4xl font-extrabold uppercase tracking-tight text-white">Blog</h1>
          <p className="mt-2 max-w-2xl text-white/80">
            Interviews, guides, and updates from our work in sensory and social inclusion —
            filter by category to find what you&apos;re looking for.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-12">
        <BlogBrowser posts={sortedPosts} initialCategory={initialCategory} />
      </div>
    </div>
  );
}
