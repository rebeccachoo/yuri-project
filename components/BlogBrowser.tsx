import type { BlogPost } from "@/lib/content/blog";
import BlogCard from "@/components/BlogCard";
import Reveal from "@/components/Reveal";

export default function BlogBrowser({ posts }: { posts: BlogPost[] }) {
  return (
    <div>
      <Reveal>
        <p className="text-sm text-mist/50">
          {posts.length} {posts.length === 1 ? "interview" : "interviews"}
        </p>
      </Reveal>

      {posts.length > 0 ? (
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal key={post.slug} delay={Math.min(index, 5) * 80}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="mt-4 rounded-2xl border border-dashed border-ink/15 p-10 text-center text-sm text-mist/50">
          No interviews yet.
        </div>
      )}
    </div>
  );
}
