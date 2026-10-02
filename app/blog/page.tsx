import type { Metadata } from "next";
import { getBlogPosts } from "@/lib/content/blog";
import BlogBrowser from "@/components/BlogBrowser";
import PageHeader from "@/components/PageHeader";

const description =
  "Every Kid Can's Interview Series features conversations with professionals, educators, and advocates who work alongside people with disabilities every day, uncovering the barriers to true inclusion and gathering practical advice for youth on how to be genuine allies.";

export const metadata: Metadata = {
  title: "Interviews",
  description,
};

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const sortedPosts = posts.filter((post) => post.category === "Interviews").sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="flex-1">
      <PageHeader title="Interviews" description={description} />

      <div className="mx-auto max-w-6xl px-6 py-12">
        <BlogBrowser posts={sortedPosts} />
      </div>
    </div>
  );
}
