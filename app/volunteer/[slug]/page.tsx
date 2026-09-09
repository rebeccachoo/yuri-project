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
      <Link
        href="/volunteer"
        className="text-sm font-medium text-sky-700 hover:underline dark:text-sky-400"
      >
        ← Volunteer Bulletin
      </Link>

      <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-sky-700 dark:text-sky-400">
        {opportunity.organizationName}
      </p>
      <h1 className="mt-1 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
        {opportunity.title}
      </h1>

      <dl className="mt-6 grid grid-cols-1 gap-4 rounded-xl border border-zinc-200 bg-zinc-50 p-6 sm:grid-cols-3 dark:border-zinc-800 dark:bg-zinc-900">
        <div>
          <dt className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            Location
          </dt>
          <dd className="mt-1 text-sm font-medium text-zinc-950 dark:text-zinc-50">
            {opportunity.location}
          </dd>
        </div>
        <div>
          <dt className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            Date
          </dt>
          <dd className="mt-1 text-sm font-medium text-zinc-950 dark:text-zinc-50">
            {opportunity.date}
          </dd>
        </div>
        <div>
          <dt className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            Age Requirement
          </dt>
          <dd className="mt-1 text-sm font-medium text-zinc-950 dark:text-zinc-50">
            {opportunity.ageRequirement}
          </dd>
        </div>
      </dl>

      <p className="mt-8 text-zinc-700 dark:text-zinc-300">{opportunity.description}</p>

      {opportunity.applyUrl && (
        <a
          href={opportunity.applyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-700"
        >
          Apply for this opportunity
        </a>
      )}
    </div>
  );
}
