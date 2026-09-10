"use client";

import { useMemo, useState } from "react";
import type { VolunteerOpportunity } from "@/lib/content/volunteers";
import VolunteerCard from "@/components/VolunteerCard";

export default function VolunteerBrowser({
  opportunities,
}: {
  opportunities: VolunteerOpportunity[];
}) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return opportunities;

    return opportunities.filter((opportunity) => {
      const haystack = [
        opportunity.organizationName,
        opportunity.title,
        opportunity.location,
        opportunity.description,
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(normalizedQuery);
    });
  }, [opportunities, query]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search by organization, title, or location..."
        className="w-full rounded-full border border-navy/20 bg-white px-5 py-2.5 text-sm text-navy-deep placeholder:text-navy-deep/40 focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue sm:max-w-sm"
      />

      <p className="mt-6 text-sm text-navy-deep/60">
        {filtered.length} {filtered.length === 1 ? "opportunity" : "opportunities"} found
      </p>

      {filtered.length > 0 ? (
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((opportunity) => (
            <VolunteerCard key={opportunity.slug} opportunity={opportunity} />
          ))}
        </div>
      ) : (
        <div className="mt-4 rounded-2xl border border-dashed border-navy/20 p-10 text-center text-sm text-navy-deep/50">
          No opportunities match your search.
        </div>
      )}
    </div>
  );
}
