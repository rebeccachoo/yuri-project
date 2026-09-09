import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Every Kid Can's story, mission, team, and impact.",
};

// TODO(content): this page is a skeleton — fill in each section once Yuri
// provides the real content.
const sections = [
  {
    heading: "Our Story",
    body: "Content coming soon.",
  },
  {
    heading: "Our Mission",
    body: "Content coming soon.",
  },
  {
    heading: "Our Team",
    body: "Content coming soon.",
  },
  {
    heading: "Our Impact",
    body: "Content coming soon.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
        About Us
      </h1>

      <div className="mt-10 space-y-12">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
              {section.heading}
            </h2>
            <p className="mt-2 text-zinc-500 italic dark:text-zinc-400">{section.body}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
