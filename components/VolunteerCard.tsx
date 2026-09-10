import Link from "next/link";
import type { VolunteerOpportunity } from "@/lib/content/volunteers";

export default function VolunteerCard({ opportunity }: { opportunity: VolunteerOpportunity }) {
  return (
    <div className="flex flex-col rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
      <p className="text-xs font-bold uppercase tracking-wide text-accent-blue">
        {opportunity.organizationName}
      </p>
      <h3 className="mt-1 text-lg font-bold text-navy-deep">{opportunity.title}</h3>
      <p className="mt-2 flex-1 text-sm text-navy-deep/70">{opportunity.description}</p>
      <dl className="mt-4 grid grid-cols-1 gap-x-4 gap-y-1 text-xs text-navy-deep/60 sm:grid-cols-3">
        <div className="flex gap-1">
          <dt className="font-bold text-navy-deep/80">Location:</dt>
          <dd>{opportunity.location}</dd>
        </div>
        <div className="flex gap-1">
          <dt className="font-bold text-navy-deep/80">Date:</dt>
          <dd>{opportunity.date}</dd>
        </div>
        <div className="flex gap-1">
          <dt className="font-bold text-navy-deep/80">Age:</dt>
          <dd>{opportunity.ageRequirement}</dd>
        </div>
      </dl>
      <Link
        href={`/volunteer/${opportunity.slug}`}
        className="mt-4 w-fit rounded-full bg-accent px-4 py-2 text-sm font-bold text-navy-deep transition-colors hover:bg-cream"
      >
        View Opportunity
      </Link>
    </div>
  );
}
