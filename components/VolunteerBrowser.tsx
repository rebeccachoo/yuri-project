"use client";

import { useMemo, useState } from "react";
import type { VolunteerOpportunity } from "@/data/volunteers";
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
        className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-950 placeholder:text-zinc-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 sm:max-w-sm"
      />

      <p className="mt-6 text-sm text-zinc-500 dark:text-zinc-400">
        {filtered.length} {filtered.length === 1 ? "opportunity" : "opportunities"} found
      </p>

      {filtered.length > 0 ? (
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((opportunity) => (
            <VolunteerCard key={opportunity.slug} opportunity={opportunity} />
          ))}
        </div>
      ) : (
        <div className="mt-4 rounded-xl border border-dashed border-zinc-300 p-10 text-center text-sm text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
          No opportunities match your search.
        </div>
      )}
    </div>
  );
}
