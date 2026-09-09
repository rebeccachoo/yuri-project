import type { Metadata } from "next";
import { blogPosts, blogCategories } from "@/data/blog";
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

  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">Blog</h1>
      <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-400">
        Interviews, guides, and updates from our work in sensory and social inclusion — filter by
        category to find what you&apos;re looking for.
      </p>

      <div className="mt-10">
        <BlogBrowser posts={sortedPosts} initialCategory={initialCategory} />
      </div>
    </div>
  );
}
