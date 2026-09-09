"use client";

import { useMemo, useState } from "react";
import type { BlogPost } from "@/data/blog";
import { blogCategories } from "@/data/blog";
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
            className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
              category === cat
                ? "border-sky-600 bg-sky-600 text-white"
                : "border-zinc-300 bg-white text-zinc-600 hover:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm text-zinc-500 dark:text-zinc-400">
        {filtered.length} {filtered.length === 1 ? "article" : "articles"}
      </p>

      {filtered.length > 0 ? (
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="mt-4 rounded-xl border border-dashed border-zinc-300 p-10 text-center text-sm text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
          No articles in this category yet.
        </div>
      )}
    </div>
  );
}
