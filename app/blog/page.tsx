import type { Metadata } from "next";
import { getBlogPosts } from "@/lib/content/blog";
import { blogCategories } from "@/data/blog-categories";
import BlogBrowser from "@/components/BlogBrowser";
import PageHeader from "@/components/PageHeader";

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
      <PageHeader
        eyebrow="Stories & Updates"
        title="Blog"
        description="Interviews, guides, and updates from our work in sensory and social inclusion — filter by category to find what you're looking for."
      />

      <div className="mx-auto max-w-6xl px-6 py-12">
        <BlogBrowser posts={sortedPosts} initialCategory={initialCategory} />
      </div>
    </div>
  );
}
