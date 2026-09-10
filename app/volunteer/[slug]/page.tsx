import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getVolunteerBySlug, getVolunteerSlugs } from "@/data/volunteers";

export function generateStaticParams() {
  return getVolunteerSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps<"/volunteer/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const opportunity = getVolunteerBySlug(slug);

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
  const opportunity = getVolunteerBySlug(slug);

  if (!opportunity) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16">
      <Link href="/volunteer" className="text-sm font-bold text-accent-blue hover:underline">
        ← Volunteer Bulletin
      </Link>

      <p className="mt-6 text-sm font-bold uppercase tracking-wide text-accent-blue">
        {opportunity.organizationName}
      </p>
      <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-navy-deep sm:text-4xl">
        {opportunity.title}
      </h1>

      <dl className="mt-6 grid grid-cols-1 gap-4 rounded-2xl bg-cream p-6 sm:grid-cols-3">
        <div>
          <dt className="text-xs font-bold uppercase tracking-wide text-navy-deep/60">
            Location
          </dt>
          <dd className="mt-1 text-sm font-bold text-navy-deep">{opportunity.location}</dd>
        </div>
        <div>
          <dt className="text-xs font-bold uppercase tracking-wide text-navy-deep/60">Date</dt>
          <dd className="mt-1 text-sm font-bold text-navy-deep">{opportunity.date}</dd>
        </div>
        <div>
          <dt className="text-xs font-bold uppercase tracking-wide text-navy-deep/60">
            Age Requirement
          </dt>
          <dd className="mt-1 text-sm font-bold text-navy-deep">
            {opportunity.ageRequirement}
          </dd>
        </div>
      </dl>

      <p className="mt-8 text-navy-deep/80">{opportunity.description}</p>

      {opportunity.applyUrl && (
        <a
          href={opportunity.applyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full bg-accent px-6 py-3 text-sm font-bold text-navy-deep transition-colors hover:bg-cream"
        >
          Apply for this opportunity
        </a>
      )}
    </div>
  );
}
