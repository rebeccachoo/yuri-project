import Link from "next/link";
import type { VolunteerOpportunity } from "@/lib/content/volunteers";

export default function VolunteerCard({
  opportunity,
}: {
  opportunity: VolunteerOpportunity;
}) {
  return (
    <div className="flex flex-col rounded-2xl border border-ink/10 bg-plum p-6 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-gold">
        {opportunity.organizationName}
      </p>
      <h3 className="mt-1 text-lg font-semibold text-mist">
        {opportunity.title}
      </h3>
      <p className="mt-2 flex-1 text-sm text-mist/60">
        {opportunity.description}
      </p>
      <dl className="mt-4 space-y-1 text-xs text-mist/50">
        <div className="flex gap-1">
          <dt className="font-semibold text-mist/70">Location:</dt>
          <dd>{opportunity.location}</dd>
        </div>
        <div className="flex gap-1">
          <dt className="font-semibold text-mist/70">Time:</dt>
          <dd>{opportunity.date}</dd>
        </div>
        <div className="flex gap-1">
          <dt className="font-semibold text-mist/70">Age:</dt>
          <dd>{opportunity.ageRequirement}</dd>
        </div>
      </dl>
      <Link
        href={`/volunteer/${opportunity.slug}`}
        className="mt-4 w-fit rounded-full bg-gold px-4 py-2 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
      >
        View Opportunity
      </Link>
    </div>
  );
}
