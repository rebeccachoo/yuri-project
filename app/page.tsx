import Link from "next/link";
import Image from "next/image";
import { impactStats } from "@/data/impact";
import { partners } from "@/data/partners";
import ImpactStats from "@/components/ImpactStats";
import PartnerGrid from "@/components/PartnerGrid";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <section className="relative isolate flex h-screen min-h-140 items-center overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Every Kid Can volunteers performing music for veterans at a community event"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-navy-deep/90 via-navy-deep/50 to-navy-deep/20" />
        <Reveal className="relative mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-6">
          <h1 className="max-w-2xl text-5xl font-extrabold uppercase tracking-tight text-white sm:text-6xl">
            Every Kid Can
          </h1>
          <p className="max-w-xl text-lg text-white/90">
            Intent on standardizing disability inclusion statewide via sensory
            and social inclusion.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/pillars"
              className="rounded-full bg-accent px-6 py-3 text-sm font-bold text-navy-deep transition-colors hover:bg-cream"
            >
              Explore our pillars
            </Link>
            <Link
              href="/volunteer"
              className="rounded-full border border-white/70 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              Volunteer with us
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="relative overflow-hidden bg-navy">
        <div className="pointer-events-none absolute -left-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-accent-blue/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 py-24 sm:grid-cols-2">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                The Challenge
              </span>
            </div>
            <h2 className="mt-4 text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">
              The Barrier
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              New Jersey students with disabilities are included in general
              education classrooms at a rate below the national average. That
              gap doesn&apos;t just affect academics — it deepens social
              isolation for kids who are already navigating a world that
              isn&apos;t built with them in mind.
            </p>
          </Reveal>

          <Reveal delay={150} className="relative">
            <div className="absolute -inset-4 rounded-4xl border-2 border-accent/30" />
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/barrier.jpg"
                alt="A teacher helping a student in a wheelchair in a general education classroom"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 max-w-56 rounded-2xl bg-cream p-4 shadow-xl sm:-left-10">
              <p className="text-sm font-bold text-navy-deep">
                Inclusion shouldn&apos;t be the exception.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <Reveal>
            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-navy-deep">
              The Value of Inclusion
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-navy-deep/80">
              Every Kid Can is a New Jersey-based, youth-led 501(c)(3) nonprofit
              working to close that gap through sensory and social inclusion —
              donating sensory resources, building hands-on sensory boards,
              running community drives, and connecting volunteers and advocates
              to the cause statewide.
            </p>
          </Reveal>
          <div className="mt-12">
            <ImpactStats stats={impactStats} />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-navy-deep">
              Our Partners
            </h2>
            <p className="mt-2 text-navy-deep/70">
              Facilities and organizations we&apos;ve collaborated with.
            </p>
          </Reveal>
          <Reveal delay={100} className="mt-8">
            <PartnerGrid partners={partners} />
          </Reveal>
        </div>
      </section>

      <section id="stay-in-touch" className="bg-navy-deep scroll-mt-20">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white">
              Stay in Touch
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <Reveal delay={0}>
              <a
                href="https://instagram.com/_everykidcan"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl bg-navy p-6 transition-colors hover:bg-accent"
              >
                <p className="font-bold uppercase tracking-wide text-accent group-hover:text-navy-deep">
                  Instagram
                </p>
                <p className="mt-2 text-white group-hover:text-navy-deep">
                  @_everykidcan
                </p>
              </a>
            </Reveal>
            <Reveal delay={100}>
              <a
                href="mailto:everykidcanplay@gmail.com"
                className="group block rounded-2xl bg-accent-blue p-6 transition-colors hover:bg-accent"
              >
                <p className="font-bold uppercase tracking-wide text-white group-hover:text-navy-deep">
                  Email
                </p>
                <p className="mt-2 text-white group-hover:text-navy-deep">
                  everykidcanplay@gmail.com
                </p>
              </a>
            </Reveal>
            <Reveal delay={200}>
              <div className="rounded-2xl bg-cream p-6">
                <p className="font-bold uppercase tracking-wide text-navy-deep">
                  Donate
                </p>
                <p className="mt-2 text-navy-deep/80">via Zelle</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
