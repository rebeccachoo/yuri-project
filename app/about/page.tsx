import type { Metadata } from "next";
import { teamMembers } from "@/data/team";
import { impactStats } from "@/data/impact";
import { awards } from "@/data/awards";
import TeamMemberCard from "@/components/TeamMemberCard";
import ImpactStats from "@/components/ImpactStats";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Every Kid Can's story, mission, team, and impact.",
};

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
        <section>
          <h2 className="text-xl font-extrabold uppercase tracking-tight text-navy-deep">
            Our Story
          </h2>
          {/* TODO(content): fill in once Yuri provides the real content. */}
          <p className="mt-2 italic text-navy-deep/50">Content coming soon.</p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-extrabold uppercase tracking-tight text-navy-deep">
            Our Mission
          </h2>
          {/* TODO(content): fill in once Yuri provides the real content. */}
          <p className="mt-2 italic text-navy-deep/50">Content coming soon.</p>
        </section>
      </div>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-xl font-extrabold uppercase tracking-tight text-navy-deep">
            Our Team
          </h2>
          <p className="mt-2 max-w-2xl text-navy-deep/70">
            Every Kid Can is led by a youth team, each directing one of our program areas.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.slug} member={member} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="text-xl font-extrabold uppercase tracking-tight text-navy-deep">
            Our Impact
          </h2>
          <div className="mt-8">
            <ImpactStats stats={impactStats} />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-6 py-16">
        <section>
          <h2 className="text-xl font-extrabold uppercase tracking-tight text-navy-deep">
            Awards
          </h2>
          {awards.length > 0 ? (
            <ul className="mt-4 space-y-3">
              {awards.map((award) => (
                <li key={award.slug}>
                  <p className="font-bold text-navy-deep">
                    {award.title}
                    {award.year ? ` (${award.year})` : ""}
                  </p>
                  {award.description && (
                    <p className="text-sm text-navy-deep/70">{award.description}</p>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            // TODO(content): add confirmed awards to data/awards.ts.
            <p className="mt-2 italic text-navy-deep/50">Content coming soon.</p>
          )}
        </section>
      </div>
    </div>
  );
}
