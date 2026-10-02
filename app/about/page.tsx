import type { Metadata } from "next";
import { teamMembers } from "@/data/team";
import FeaturedTeamMember from "@/components/FeaturedTeamMember";
import TeamMemberCard from "@/components/TeamMemberCard";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet the youth team behind Every Kid Can.",
};

export default function AboutPage() {
  return (
    <div className="flex-1">
      <PageHeader title="About Us" />

      {/* <div className="mx-auto max-w-3xl px-6 py-8">
        <section>
          <h2 className="font-serif text-xl font-semibold tracking-tight text-mist">
            Our Story
          </h2>

          <p className="mt-2 italic text-mist/40">Content coming soon.</p>
        </section>
      </div> */}

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Reveal className="grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start lg:gap-16">
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-mist sm:text-4xl">
              Meet the Team
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-mist/80">
              Every Kid Can&apos;s executive team is fully student-led,
              reflecting our commitment to empower youth to drive change in
              disability advocacy. Together, they oversee our sensory and social
              inclusion initiatives, partnerships, and interview series,
              ensuring every effort is thoughtful, effective, and rooted in
              genuine understanding.
            </p>
          </Reveal>
          <div className="mt-12 grid items-start gap-8 md:grid-cols-3">
            {teamMembers.slice(0, 3).map((member, index) => (
              <Reveal key={member.slug} delay={index * 80}>
                <FeaturedTeamMember member={member} />
              </Reveal>
            ))}
          </div>
          <div className="mt-8 grid items-start gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.slice(3).map((member, index) => (
              <Reveal key={member.slug} delay={Math.min(index, 5) * 80}>
                <TeamMemberCard member={member} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* <div className="mx-auto max-w-3xl px-6 py-16">
        <section>
          <h2 className="font-serif text-xl font-semibold tracking-tight text-mist">
            Awards
          </h2>
          {awards.length > 0 ? (
            <ul className="mt-4 space-y-3">
              {awards.map((award) => (
                <li key={award.slug}>
                  <p className="font-semibold text-mist">
                    {award.title}
                    {award.year ? ` (${award.year})` : ""}
                  </p>
                  {award.description && (
                    <p className="text-sm text-mist/60">{award.description}</p>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            // TODO(content): add confirmed awards to data/awards.ts.
            <p className="mt-2 italic text-mist/40">Content coming soon.</p>
          )}
        </section>
      </div> */}
    </div>
  );
}
