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
                ? "border-transparent bg-gold text-ink"
                : "border-ink/20 bg-transparent text-mist/70 hover:border-ink/40"
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
      {pillar.introHeading && (
        <h2 className="mt-8 font-serif text-2xl font-semibold tracking-tight text-mist sm:text-3xl">
          {pillar.introHeading}
        </h2>
      )}
      <p className="mt-4 max-w-3xl text-mist/70">{pillar.description}</p>

      <div className="mt-12">
        {pillar.activities.map((activity, index) => {
          const reversed = index % 2 === 1;
          const tinted = index % 2 === 1;
          return (
            <div
              key={activity.slug}
              className={`relative left-1/2 right-1/2 mx-[-50vw] w-screen ${
                tinted ? "bg-plum" : ""
              }`}
            >
              <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:grid-cols-2 sm:items-center">
                <div className={`order-2 ${reversed ? "sm:order-1" : "sm:order-2"}`}>
                  <ImageCarousel images={activity.images} label={activity.title} />
                </div>
                <div className={`order-1 ${reversed ? "sm:order-2" : "sm:order-1"}`}>
                  <h2 className="font-serif text-2xl font-bold uppercase tracking-tight text-mist sm:text-3xl">
                    {activity.title}
                  </h2>
                  <p className="mt-4 text-mist/70">{activity.description}</p>
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
            </div>
          );
        })}
      </div>
    </div>
  );
}
