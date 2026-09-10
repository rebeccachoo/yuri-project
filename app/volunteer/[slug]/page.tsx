import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getVolunteerBySlug, getVolunteerSlugs } from "@/lib/content/volunteers";

export async function generateStaticParams() {
  const slugs = await getVolunteerSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps<"/volunteer/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const opportunity = await getVolunteerBySlug(slug);

  if (!opportunity) {
    return { title: "Opportunity not found" };
  }

  return {
    title: opportunity.title,
    description: opportunity.description,
  };
}

export default async function VolunteerDetailPage(
  props: PageProps<"/volunteer/[slug]">
) {
  const { slug } = await props.params;
  const opportunity = await getVolunteerBySlug(slug);

  if (!opportunity) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16 pt-28">
      <Link href="/volunteer" className="text-sm font-semibold text-gold hover:underline">
        ← Volunteer Bulletin
      </Link>

      <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-gold">
        {opportunity.organizationName}
      </p>
      <h1 className="mt-1 font-serif text-3xl font-semibold tracking-tight text-mist sm:text-4xl">
        {opportunity.title}
      </h1>

      <dl className="mt-6 grid grid-cols-1 gap-4 rounded-2xl border border-ink/10 bg-plum p-6 sm:grid-cols-3">
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-mist/50">
            Location
          </dt>
          <dd className="mt-1 text-sm font-semibold text-mist">{opportunity.location}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-mist/50">Date</dt>
          <dd className="mt-1 text-sm font-semibold text-mist">{opportunity.date}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-mist/50">
            Age Requirement
          </dt>
          <dd className="mt-1 text-sm font-semibold text-mist">
            {opportunity.ageRequirement}
          </dd>
        </div>
      </dl>

      <p className="mt-8 text-mist/70">{opportunity.description}</p>

      {opportunity.applyUrl && (
        <a
          href={opportunity.applyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
        >
          Apply for this opportunity
        </a>
      )}
    </div>
  );
}
