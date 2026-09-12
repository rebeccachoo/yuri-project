"use client";

import { useMemo, useState } from "react";
import type { VolunteerOpportunity } from "@/lib/content/volunteers";
import VolunteerCard from "@/components/VolunteerCard";
import Reveal from "@/components/Reveal";

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
      <Reveal>
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by organization, title, or location..."
          className="w-full rounded-full border border-ink/15 bg-plum px-5 py-2.5 text-sm text-mist shadow-sm placeholder:text-mist/40 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/50 sm:max-w-sm"
        />

        <p className="mt-6 text-sm text-mist/50">
          {filtered.length}{" "}
          {filtered.length === 1 ? "opportunity" : "opportunities"} found
        </p>
      </Reveal>

      {filtered.length > 0 ? (
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((opportunity, index) => (
            <Reveal key={opportunity.slug} delay={Math.min(index, 5) * 80}>
              <VolunteerCard opportunity={opportunity} />
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="mt-4 rounded-2xl border border-dashed border-ink/15 p-10 text-center text-sm text-mist/50">
          No opportunities match your search.
        </div>
      )}
    </div>
  );
}
