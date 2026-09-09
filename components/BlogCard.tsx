import Link from "next/link";
import type { BlogPost } from "@/data/blog";
import { getAccentClasses } from "@/components/colors";

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogCard({ post }: { post: BlogPost }) {
  const accent = getAccentClasses(post.accentColor);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col rounded-xl border border-zinc-200 bg-white p-6 transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
    >
      <span className={`w-fit rounded-full px-2.5 py-1 text-xs font-medium ${accent.badge}`}>
        {post.category}
      </span>
      <h3 className="mt-4 text-lg font-semibold text-zinc-950 group-hover:underline dark:text-zinc-50">
        {post.title}
      </h3>
      <p className="mt-2 flex-1 text-sm text-zinc-600 dark:text-zinc-400">{post.excerpt}</p>
      <div className="mt-4 flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-500">
        <span>{post.author}</span>
        <span aria-hidden="true">·</span>
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span aria-hidden="true">·</span>
        <span>{post.readTime}</span>
      </div>
    </Link>
  );
}
