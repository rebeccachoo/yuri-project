"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import type { Pillar } from "@/data/pillars";
import ImageCarousel from "@/components/ImageCarousel";

export default function PillarsTabs({ pillars }: { pillars: Pillar[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");

  const activeSlug = pillars.some((p) => p.slug === tabParam)
    ? (tabParam as string)
    : pillars[0].slug;
  const pillar = pillars.find((p) => p.slug === activeSlug) ?? pillars[0];

  function selectTab(slug: string) {
    router.push(`/pillars?tab=${slug}`, { scroll: false });
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {pillars.map((p) => (
          <button
            key={p.slug}
            type="button"
            onClick={() => selectTab(p.slug)}
            className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
              p.slug === activeSlug
                ? "border-transparent bg-linear-to-r from-flame-start via-flame-mid to-flame-end text-ink"
                : "border-white/20 bg-transparent text-mist/70 hover:border-white/40"
            }`}
          >
            {p.navLabel}
          </button>
        ))}
      </div>

      <h1 className="mt-8 font-serif text-4xl font-semibold tracking-tight text-mist sm:text-5xl">
        {pillar.title}
      </h1>
      <p className="mt-2 text-lg text-gold">{pillar.subtitle}</p>
      <p className="mt-4 max-w-3xl text-mist/70">{pillar.description}</p>

      <div className="mt-12 space-y-12">
        {pillar.activities.map((activity, index) => (
          <div
            key={activity.slug}
            className="grid gap-8 rounded-2xl border border-white/10 bg-white/5 p-6 sm:grid-cols-2 sm:items-center"
          >
            <ImageCarousel images={activity.images} label={activity.title} />
            <div>
              <span className="font-serif text-2xl italic text-plum-muted">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-1 text-xl font-semibold text-mist">{activity.title}</h2>
              <p className="mt-2 text-sm text-mist/60">{activity.description}</p>
              {activity.linkHref && (
                <Link
                  href={activity.linkHref}
                  className="mt-4 inline-block text-sm font-semibold text-gold hover:underline"
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
