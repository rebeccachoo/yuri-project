export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string[];
  author: string;
  date: string;
  readTime: string;
  accentColor: string;
}

export const blogCategories = ["Interviews", "Guides", "Updates"] as const;

export type BlogCategory = (typeof blogCategories)[number];

// TODO(content): these two posts are placeholders that demonstrate the blog
// format only. In particular, replace "interview-with-special-education-teacher"
// with a real transcript once an actual interview has been conducted — don't
// publish it as-is, since it does not quote a real person.
export const blogPosts: BlogPost[] = [
  {
    slug: "how-sensory-tools-help-children",
    title: "How Sensory Tools Help Children",
    category: "Guides",
    excerpt:
      "A quick primer on what sensory tools are, why they matter for many kids with disabilities, and how our Sensory Boards and Drives put them in reach.",
    content: [
      "Sensory tools — things like weighted lap pads, fidgets, noise-reducing headphones, and textured boards — help many kids regulate input from their environment. For a child who is easily overwhelmed by noise, light, or touch, having the right tool on hand can be the difference between a hard day and a manageable one.",
      "That's the idea behind two of our core activities: Sensory Boards, which we design and build to give kids a safe, guided way to explore tactile and visual input, and Sensory Drives, where we collect donated sensory items from the community and get them into the hands of local schools, libraries, and families who need them.",
      "This is a placeholder article — replace this content in data/blog.ts with a real, reviewed post before publishing.",
    ],
    author: "Every Kid Can",
    date: "2026-01-01",
    readTime: "3 min read",
    accentColor: "sky",
  },
  {
    slug: "interview-with-special-education-teacher",
    title: "[Placeholder] Interview With a Special Education Teacher",
    category: "Interviews",
    excerpt:
      "This slot is reserved for a real interview with an educator, advocate, or specialist — not yet conducted.",
    content: [
      "This is a placeholder entry showing where an interview-format article will go. It does not contain a real interview or real quotes from any person.",
      "When a real interview is conducted with an educator, advocate, or other expert, replace this entry in data/blog.ts with the actual transcript and update the author, date, and excerpt accordingly.",
    ],
    author: "Every Kid Can",
    date: "2026-01-01",
    readTime: "2 min read",
    accentColor: "violet",
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
