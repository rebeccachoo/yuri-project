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
    <div className="flex-1">
      <div className="bg-navy">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h1 className="text-4xl font-extrabold uppercase tracking-tight text-white">
            About Us
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="space-y-12">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-extrabold uppercase tracking-tight text-navy-deep">
                {section.heading}
              </h2>
              <p className="mt-2 italic text-navy-deep/50">{section.body}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
