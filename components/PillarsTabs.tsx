"use client";

import { useState } from "react";
import Link from "next/link";
import type { Pillar } from "@/data/pillars";
import { getAccentClasses } from "@/components/colors";
import ImageCarousel from "@/components/ImageCarousel";

export default function PillarsTabs({
  pillars,
  initialTab,
}: {
  pillars: Pillar[];
  initialTab: string;
}) {
  const defaultSlug = pillars.some((p) => p.slug === initialTab)
    ? initialTab
    : pillars[0].slug;
  const [activeSlug, setActiveSlug] = useState(defaultSlug);
  const pillar = pillars.find((p) => p.slug === activeSlug) ?? pillars[0];
  const accent = getAccentClasses(pillar.accentColor);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {pillars.map((p) => (
          <button
            key={p.slug}
            type="button"
            onClick={() => setActiveSlug(p.slug)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
              p.slug === activeSlug
                ? "border-transparent bg-zinc-950 text-white dark:bg-zinc-50 dark:text-zinc-950"
                : "border-zinc-300 bg-white text-zinc-600 hover:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400"
            }`}
          >
            {p.navLabel}
          </button>
        ))}
      </div>

      <h1 className="mt-8 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
        {pillar.title}
      </h1>
      <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">{pillar.subtitle}</p>
      <p className="mt-4 max-w-3xl text-zinc-600 dark:text-zinc-400">{pillar.description}</p>

      <div className="mt-12 space-y-12">
        {pillar.activities.map((activity) => (
          <div
            key={activity.slug}
            className="grid gap-6 rounded-xl border border-zinc-200 p-6 sm:grid-cols-2 sm:items-center dark:border-zinc-800"
          >
            <ImageCarousel images={activity.images} label={activity.title} />
            <div>
              <span className={`w-fit rounded-full px-2.5 py-1 text-xs font-medium ${accent.badge}`}>
                {pillar.navLabel}
              </span>
              <h2 className="mt-3 text-xl font-semibold text-zinc-950 dark:text-zinc-50">
                {activity.title}
              </h2>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {activity.description}
              </p>
              {activity.linkHref && (
                <Link
                  href={activity.linkHref}
                  className="mt-4 inline-block text-sm font-semibold text-sky-700 hover:underline dark:text-sky-400"
                >
                  {activity.linkLabel} →
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
