import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getBlogSlugs, blogPosts } from "@/data/blog";
import { getAccentClasses } from "@/components/colors";
import BlogCard from "@/components/BlogCard";

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Article not found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogDetailPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const accent = getAccentClasses(post.accentColor);
  const related = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16">
      <Link
        href="/blog"
        className="text-sm font-medium text-sky-700 hover:underline dark:text-sky-400"
      >
        ← All articles
      </Link>

      <span className={`mt-6 inline-block w-fit rounded-full px-2.5 py-1 text-xs font-medium ${accent.badge}`}>
        {post.category}
      </span>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
        {post.title}
      </h1>

      <div className="mt-4 flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
        <span>{post.author}</span>
        <span aria-hidden="true">·</span>
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span aria-hidden="true">·</span>
        <span>{post.readTime}</span>
      </div>

      <div className="prose prose-zinc mt-8 max-w-none dark:prose-invert">
        {post.content.map((paragraph, index) => (
          <p key={index} className="text-zinc-700 dark:text-zinc-300">
            {paragraph}
          </p>
        ))}
      </div>

      {related.length > 0 && (
        <div className="mt-16 border-t border-zinc-200 pt-10 dark:border-zinc-800">
          <h2 className="text-xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
            More in {post.category}
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
            {related.map((item) => (
              <BlogCard key={item.slug} post={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
