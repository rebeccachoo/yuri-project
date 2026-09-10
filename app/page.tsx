import Link from "next/link";
import Image from "next/image";
import { impactStats } from "@/data/impact";
import { galleryImages } from "@/data/gallery";
import { getPartners } from "@/lib/content/partners";
import ImpactStats from "@/components/ImpactStats";
import PartnerGrid from "@/components/PartnerGrid";
import GalleryCarousel from "@/components/GalleryCarousel";
import Reveal from "@/components/Reveal";

export default async function Home() {
  const partners = await getPartners();

  return (
    <div className="flex flex-1 flex-col">
      <section className="relative overflow-hidden pb-24 pt-20 sm:pt-28">
        <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
          <Reveal className="lg:order-2">
            <span className="inline-block rounded-full border border-ink/15 bg-plum px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold">
              501(c)(3) Youth-Led Nonprofit
            </span>
            <h1 className="mt-6 max-w-xl font-serif text-5xl font-semibold uppercase leading-tight tracking-tight text-mist sm:text-6xl">
              WELCOME TO{" "}
              <span className="bg-linear-to-r from-[#8b98ac] via-[#a7b6ca] to-[#e0ab9f] bg-clip-text text-transparent">
                EVERY KID CAN
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-mist/70">
              EMPOWERING CHILDREN OF ALL ABILITIES
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/pillars"
                className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
              >
                Explore our pillars
              </Link>
              <Link
                href="/volunteer"
                className="rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold text-mist transition-colors hover:border-ink/40"
              >
                Volunteer with us
              </Link>
            </div>
          </Reveal>

          <Reveal
            delay={150}
            className="relative mx-auto w-full max-w-lg lg:order-1"
          >
            <div className="absolute inset-0 -z-10 scale-110 rounded-[63%_37%_54%_46%/43%_65%_35%_57%] bg-linear-to-br from-flame-start/40 via-flame-mid/30 to-flame-end/20 blur-3xl" />
            <div className="relative aspect-square overflow-hidden rounded-[63%_37%_54%_46%/43%_65%_35%_57%] border-4 border-white/10 shadow-2xl">
              <Image
                src="/images/hero.jpg"
                alt="Every Kid Can volunteers performing music for veterans at a community event"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 320px, 384px"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 max-w-52 rounded-2xl border border-ink/10 bg-plum p-4 shadow-xl">
              <p className="font-serif text-2xl font-semibold text-mist">
                7,500+
              </p>
              <p className="mt-1 text-xs text-mist/60">
                People with disabilities reached statewide.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-20 lg:grid-cols-2">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                The Challenge
              </span>
            </div>
            <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-mist sm:text-5xl">
              The Barrier
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist/70">
              New Jersey students with disabilities are included in general
              education classrooms at a rate below the national average. That
              gap doesn&apos;t just affect academics — it deepens social
              isolation for kids who are already navigating a world that
              isn&apos;t built with them in mind.
            </p>
          </Reveal>

          <Reveal delay={150} className="relative">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl border border-ink/10 shadow-2xl">
              <Image
                src="/images/barrier.jpg"
                alt="A teacher helping a student in a wheelchair in a general education classroom"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 max-w-56 rounded-2xl border border-ink/10 bg-plum p-4 shadow-xl sm:-left-10">
              <p className="font-serif text-sm font-semibold text-mist">
                Inclusion shouldn&apos;t be the exception.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">
              The Value of Inclusion
            </span>
            <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl font-semibold tracking-tight text-mist sm:text-4xl">
              Every Kid Can is closing that gap, statewide.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-mist/70">
              Every Kid Can is a New Jersey-based, youth-led 501(c)(3) nonprofit
              working to close that gap through sensory and social inclusion —
              donating sensory resources, building hands-on sensory boards,
              running community drives, and connecting volunteers and advocates
              to the cause statewide.
            </p>
          </Reveal>
          <div className="mt-14">
            <ImpactStats stats={impactStats} />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal className="text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">
              In Action
            </span>
            <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-mist sm:text-4xl">
              Our Gallery
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-mist/70">
              A look at our programs and events in action.
            </p>
          </Reveal>
          <Reveal delay={150} className="mt-12">
            <GalleryCarousel images={galleryImages} />
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">
              Our Partners
            </span>
            <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-mist sm:text-4xl">
              Facilities we&apos;ve collaborated with
            </h2>
          </Reveal>
          <Reveal delay={100} className="mt-8">
            <PartnerGrid partners={partners} />
          </Reveal>
        </div>
      </section>

      <section
        id="stay-in-touch"
        className="relative scroll-mt-20 overflow-hidden"
      >
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">
              Get In Touch
            </span>
            <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-mist sm:text-4xl">
              Stay in Touch
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <Reveal delay={0}>
              <a
                href="https://instagram.com/_everykidcan"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-ink/10 bg-plum p-6 shadow-sm transition-colors hover:border-ink/20 hover:bg-plum-light"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                  Instagram
                </p>
                <p className="mt-2 text-mist">@_everykidcan</p>
              </a>
            </Reveal>
            <Reveal delay={100}>
              <a
                href="mailto:everykidcanplay@gmail.com"
                className="group block rounded-2xl border border-ink/10 bg-plum p-6 shadow-sm transition-colors hover:border-ink/20 hover:bg-plum-light"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                  Email
                </p>
                <p className="mt-2 text-mist">everykidcanplay@gmail.com</p>
              </a>
            </Reveal>
            <Reveal delay={200}>
              <div className="rounded-2xl border border-ink/10 bg-linear-to-br from-flame-start/25 via-flame-mid/20 to-flame-end/20 p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                  Donate
                </p>
                <p className="mt-2 text-mist">via Zelle</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
