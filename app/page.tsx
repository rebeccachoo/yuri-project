import Link from "next/link";
import { impactStats } from "@/data/impact";
import { partners } from "@/data/partners";
import ImpactStats from "@/components/ImpactStats";
import PartnerGrid from "@/components/PartnerGrid";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      {/* TODO(content): swap this gradient for the Canva collage background once it's exported. */}
      <section className="border-b border-zinc-200 bg-linear-to-b from-sky-50 via-violet-50 to-white dark:border-zinc-800 dark:from-sky-950/20 dark:via-violet-950/10 dark:to-black">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-20 sm:py-28">
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl dark:text-zinc-50">
            Every Kid Can
          </h1>
          <p className="max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
            Intent on standardizing disability inclusion statewide via sensory
            and social inclusion.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/pillars"
              className="rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-700"
            >
              Explore our pillars
            </Link>
            <Link
              href="/volunteer"
              className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:border-zinc-400 dark:border-zinc-700 dark:text-zinc-300"
            >
              Volunteer with us
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
          The Barrier
        </h2>
        <p className="mt-4 max-w-3xl text-zinc-600 dark:text-zinc-400">
          New Jersey students with disabilities are included in general
          education classrooms at a rate below the national average. That gap
          doesn&apos;t just affect academics — it deepens social isolation for
          kids who are already navigating a world that isn&apos;t built with
          them in mind.
        </p>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
            The Value of Inclusion
          </h2>
          <p className="mt-4 max-w-3xl text-zinc-600 dark:text-zinc-400">
            Every Kid Can is a New Jersey-based, youth-led 501(c)(3) nonprofit
            working to close that gap through sensory and social inclusion —
            donating sensory resources, building hands-on sensory boards,
            running community drives, and connecting volunteers and advocates to
            the cause statewide.
          </p>
          <div className="mt-8">
            <ImpactStats stats={impactStats} />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
          Our Partners
        </h2>
        <div className="mt-8">
          <PartnerGrid partners={partners} />
        </div>
      </section>

      <section className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
            Stay in Touch
          </h2>
          <ul className="mt-4 space-y-2 text-zinc-600 dark:text-zinc-400">
            <li>
              Instagram:{" "}
              <a
                href="https://instagram.com/_everykidcan"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-sky-700 hover:underline dark:text-sky-400"
              >
                @_everykidcan
              </a>
            </li>
            <li>
              Email:{" "}
              <a
                href="mailto:everykidcanplay@gmail.com"
                className="font-medium text-sky-700 hover:underline dark:text-sky-400"
              >
                everykidcanplay@gmail.com
              </a>
            </li>
            <li>Donate: Zelle</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
