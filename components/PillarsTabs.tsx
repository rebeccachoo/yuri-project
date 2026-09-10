"use client";

import { useState } from "react";
import Link from "next/link";
import type { Pillar } from "@/data/pillars";
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

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {pillars.map((p) => (
          <button
            key={p.slug}
            type="button"
            onClick={() => setActiveSlug(p.slug)}
            className={`rounded-full cursor-pointer border px-4 py-2 text-sm font-bold transition-colors ${
              p.slug === activeSlug
                ? "border-transparent bg-accent text-navy-deep"
                : "border-white/30 bg-transparent text-white hover:border-white/60"
            }`}
          >
            {p.navLabel}
          </button>
        ))}
      </div>

      <h1 className="mt-8 text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">
        {pillar.title}
      </h1>
      <p className="mt-2 text-lg text-accent">{pillar.subtitle}</p>
      <p className="mt-4 max-w-3xl text-white/80">{pillar.description}</p>

      <div className="mt-12 space-y-12">
        {pillar.activities.map((activity) => (
          <div
            key={activity.slug}
            className="grid gap-8 rounded-2xl bg-white/5 p-6 sm:grid-cols-2 sm:items-center"
          >
            <ImageCarousel images={activity.images} label={activity.title} />
            <div>
              <span className="w-fit rounded-full bg-accent/20 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-accent">
                {pillar.navLabel}
              </span>
              <h2 className="mt-3 text-xl font-bold text-white">
                {activity.title}
              </h2>
              <p className="mt-2 text-sm text-white/70">
                {activity.description}
              </p>
              {activity.linkHref && (
                <Link
                  href={activity.linkHref}
                  className="mt-4 inline-block text-sm font-bold text-accent hover:underline"
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
