import type { Metadata } from "next";
import { teamMembers } from "@/data/team";
import { impactStats } from "@/data/impact";
import { awards } from "@/data/awards";
import TeamMemberCard from "@/components/TeamMemberCard";
import ImpactStats from "@/components/ImpactStats";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Every Kid Can's story, mission, team, and impact.",
};

export default function AboutPage() {
  return (
    <div className="flex-1">
      <PageHeader title="About Us" />

      <div className="mx-auto max-w-3xl px-6 py-8">
        <section>
          <h2 className="font-serif text-xl font-semibold tracking-tight text-mist">
            Our Story
          </h2>
          {/* TODO(content): fill in once Yuri provides the real content. */}
          <p className="mt-2 italic text-mist/40">Content coming soon.</p>
        </section>

        <section className="mt-12">
          <h2 className="font-serif text-xl font-semibold tracking-tight text-mist">
            Our Mission
          </h2>
          <p className="mt-4 text-mist/70">
            Every Kid Can is a 501(c)(3) youth-led organization focused on empowering
            individuals with disabilities. By mobilizing community resources and donations,
            we work to remove physical, social, and financial barriers to participation in
            everyday activities. Our mission is rooted in reducing stigma, promoting
            inclusion, and ensuring every child has the opportunity to thrive. Join us in
            making a difference and helping every child discover their potential!
          </p>
        </section>
      </div>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-serif text-xl font-semibold tracking-tight text-mist">
            Our Team
          </h2>
          <p className="mt-2 max-w-2xl text-mist/60">
            Every Kid Can is led by a youth team, each directing one of our program areas.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.slug} member={member} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="font-serif text-xl font-semibold tracking-tight text-mist">
            Our Impact
          </h2>
          <div className="mt-8">
            <ImpactStats stats={impactStats} />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-6 py-16">
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
      </div>
    </div>
  );
}
