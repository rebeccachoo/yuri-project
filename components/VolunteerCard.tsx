import Link from "next/link";
import type { VolunteerOpportunity } from "@/data/volunteers";

export default function VolunteerCard({ opportunity }: { opportunity: VolunteerOpportunity }) {
  return (
    <div className="flex flex-col rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
      <p className="text-xs font-semibold uppercase tracking-wide text-sky-700 dark:text-sky-400">
        {opportunity.organizationName}
      </p>
      <h3 className="mt-1 text-lg font-semibold text-zinc-950 dark:text-zinc-50">
        {opportunity.title}
      </h3>
      <p className="mt-2 flex-1 text-sm text-zinc-600 dark:text-zinc-400">
        {opportunity.description}
      </p>
      <dl className="mt-4 grid grid-cols-1 gap-x-4 gap-y-1 text-xs text-zinc-500 sm:grid-cols-3 dark:text-zinc-500">
        <div className="flex gap-1">
          <dt className="font-medium text-zinc-700 dark:text-zinc-300">Location:</dt>
          <dd>{opportunity.location}</dd>
        </div>
        <div className="flex gap-1">
          <dt className="font-medium text-zinc-700 dark:text-zinc-300">Date:</dt>
          <dd>{opportunity.date}</dd>
        </div>
        <div className="flex gap-1">
          <dt className="font-medium text-zinc-700 dark:text-zinc-300">Age:</dt>
          <dd>{opportunity.ageRequirement}</dd>
        </div>
      </dl>
      <Link
        href={`/volunteer/${opportunity.slug}`}
        className="mt-4 w-fit rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-sky-700"
      >
        View Opportunity
      </Link>
    </div>
  );
}
