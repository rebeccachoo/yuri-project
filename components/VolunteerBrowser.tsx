"use client";

import { useMemo, useState } from "react";
import type { VolunteerOpportunity } from "@/lib/content/volunteers";
import { volunteerRegions } from "@/data/volunteer-regions";
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
        opportunity.region,
        opportunity.county,
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(normalizedQuery);
    });
  }, [opportunities, query]);

  // Group by region (in the fixed volunteerRegions order, any unlisted
  // region falls back to the end) then by county, preserving the order
  // opportunities already arrive in within each county.
  const grouped = useMemo(() => {
    const regionMap = new Map<string, Map<string, VolunteerOpportunity[]>>();
    for (const opportunity of filtered) {
      if (!regionMap.has(opportunity.region)) {
        regionMap.set(opportunity.region, new Map());
      }
      const countyMap = regionMap.get(opportunity.region)!;
      if (!countyMap.has(opportunity.county)) {
        countyMap.set(opportunity.county, []);
      }
      countyMap.get(opportunity.county)!.push(opportunity);
    }

    const knownRegions = volunteerRegions.filter((region) => regionMap.has(region));
    const otherRegions = [...regionMap.keys()].filter(
      (region) => !(volunteerRegions as readonly string[]).includes(region),
    );

    return [...knownRegions, ...otherRegions].map((region) => ({
      region,
      counties: [...regionMap.get(region)!.entries()].map(([county, items]) => ({
        county,
        items,
      })),
    }));
  }, [filtered]);

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

      {grouped.length > 0 ? (
        <div className="mt-6 space-y-14">
          {grouped.map((regionGroup) => (
            <div key={regionGroup.region}>
              <h2 className="font-serif text-2xl font-semibold tracking-tight text-mist">
                {regionGroup.region}
              </h2>
              <div className="mt-6 space-y-8">
                {regionGroup.counties.map((countyGroup) => (
                  <div key={countyGroup.county}>
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-gold-text">
                      {countyGroup.county} County
                    </h3>
                    <div className="mt-3 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {countyGroup.items.map((opportunity, index) => (
                        <Reveal
                          key={opportunity.slug}
                          delay={Math.min(index, 5) * 40}
                        >
                          <VolunteerCard opportunity={opportunity} />
                        </Reveal>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
