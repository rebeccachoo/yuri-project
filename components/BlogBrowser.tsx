"use client";

import { useMemo, useState } from "react";
import type { BlogPost } from "@/lib/content/blog";
import { blogCategories } from "@/data/blog-categories";
import BlogCard from "@/components/BlogCard";

export default function BlogBrowser({
  posts,
  initialCategory = "All",
}: {
  posts: BlogPost[];
  initialCategory?: string;
}) {
  const [category, setCategory] = useState<string>(initialCategory);

  const filtered = useMemo(() => {
    if (category === "All") return posts;
    return posts.filter((post) => post.category === category);
  }, [posts, category]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {["All", ...blogCategories].map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setCategory(cat)}
            className={`rounded-full border px-3.5 py-1.5 text-sm font-semibold transition-colors ${
              category === cat
                ? "border-transparent bg-linear-to-r from-flame-start via-flame-mid to-flame-end text-ink"
                : "border-white/15 bg-white/5 text-mist/70 hover:border-white/30"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm text-mist/50">
        {filtered.length} {filtered.length === 1 ? "article" : "articles"}
      </p>

      {filtered.length > 0 ? (
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="mt-4 rounded-2xl border border-dashed border-white/15 p-10 text-center text-sm text-mist/50">
          No articles in this category yet.
        </div>
      )}
    </div>
  );
}
