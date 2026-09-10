import Link from "next/link";
import type { BlogPost } from "@/lib/content/blog";
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
      className="group flex flex-col rounded-2xl border border-navy/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      <span className={`w-fit rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-wide ${accent.badge}`}>
        {post.category}
      </span>
      <h3 className="mt-4 text-lg font-bold text-navy-deep group-hover:underline">
        {post.title}
      </h3>
      <p className="mt-2 flex-1 text-sm text-navy-deep/70">{post.excerpt}</p>
      <div className="mt-4 flex items-center gap-2 text-xs text-navy-deep/50">
        <span>{post.author}</span>
        <span aria-hidden="true">·</span>
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span aria-hidden="true">·</span>
        <span>{post.readTime}</span>
      </div>
    </Link>
  );
}
