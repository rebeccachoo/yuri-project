import Link from "next/link";
import type { VolunteerOpportunity } from "@/lib/content/volunteers";

export default function VolunteerCard({ opportunity }: { opportunity: VolunteerOpportunity }) {
  return (
    <div className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6">
      <p className="text-xs font-semibold uppercase tracking-wide text-gold">
        {opportunity.organizationName}
      </p>
      <h3 className="mt-1 text-lg font-semibold text-mist">{opportunity.title}</h3>
      <p className="mt-2 flex-1 text-sm text-mist/60">{opportunity.description}</p>
      <dl className="mt-4 grid grid-cols-1 gap-x-4 gap-y-1 text-xs text-mist/50 sm:grid-cols-3">
        <div className="flex gap-1">
          <dt className="font-semibold text-mist/70">Location:</dt>
          <dd>{opportunity.location}</dd>
        </div>
        <div className="flex gap-1">
          <dt className="font-semibold text-mist/70">Date:</dt>
          <dd>{opportunity.date}</dd>
        </div>
        <div className="flex gap-1">
          <dt className="font-semibold text-mist/70">Age:</dt>
          <dd>{opportunity.ageRequirement}</dd>
        </div>
      </dl>
      <Link
        href={`/volunteer/${opportunity.slug}`}
        className="mt-4 w-fit rounded-full bg-linear-to-r from-flame-start via-flame-mid to-flame-end px-4 py-2 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
      >
        View Opportunity
      </Link>
    </div>
  );
}
