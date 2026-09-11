import Link from "next/link";
import Image from "next/image";
import { impactStats } from "@/data/impact";
import { galleryImages } from "@/data/gallery";
import { teamMembers } from "@/data/team";
import { getPartners } from "@/lib/content/partners";
import ImpactStats from "@/components/ImpactStats";
import PartnerGrid from "@/components/PartnerGrid";
import GalleryCarousel from "@/components/GalleryCarousel";
import TeamMemberCard from "@/components/TeamMemberCard";
import Reveal from "@/components/Reveal";

export default async function Home() {
  const partners = await getPartners();

  return (
    <div className="flex flex-1 flex-col">
      <section className="relative isolate -mt-23 flex h-screen min-h-130 w-full items-center overflow-hidden">
        <Image
          src="/images/ekc_hero.png"
          alt="Every Kid Can volunteers performing music for veterans at a community event"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-base/40" />
        <div className="bg-glow absolute inset-0" />
        <div className="absolute inset-0 bg-linear-to-t from-base via-base/65 to-transparent" />

        <div className="relative mx-auto w-full max-w-6xl px-6 ">
          <Reveal>
            <span className="inline-block rounded-full border border-white/20 bg-base/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold backdrop-blur-sm">
              501(c)(3) Youth-Led Nonprofit
            </span>
            <h1 className="mt-6 max-w-2xl font-serif text-5xl font-semibold uppercase leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              WELCOME TO{" "}
              <span className="bg-linear-to-r from-[#8b98ac] via-[#a7b6ca] to-[#e0ab9f] bg-clip-text text-transparent">
                EVERY KID CAN
              </span>
            </h1>
            <p className="mt-4 max-w-lg text-lg text-white/80">
              Intent on standardizing disability statewide via sensory and
              social inclusion.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/pillars"
                className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
              >
                Explore our pillars
              </Link>
              <Link
                href="/volunteer"
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/60"
              >
                Volunteer with us
              </Link>
            </div>

            {/* <div className="mt-8 w-fit rounded-2xl border border-white/15 bg-base/70 p-4 shadow-xl backdrop-blur-sm sm:absolute sm:bottom-10 sm:right-6 sm:mt-0 lg:right-10">
              <p className="font-serif text-2xl font-semibold text-white">
                7,500+
              </p>
              <p className="mt-1 max-w-52 text-xs text-white/70">
                People with disabilities reached statewide.
              </p>
            </div> */}
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
              Despite legal requirements, only 46% of New Jersey students with
              disabilities are integrated into general education, compared to
              68% nationally, with rates fluctuating between districts. Low
              integration places limits on meaningful interaction between
              students with and without disabilities, which contribute to social
              isolation among the 70% of disabled students already experiencing
              it.
            </p>
          </Reveal>

          <Reveal delay={150} className="relative mx-auto w-full max-w-lg">
            <div
              className="animate-blob-drift absolute inset-0 -z-10 scale-110 bg-linear-to-br from-flame-start/40 via-flame-mid/30 to-flame-end/20 blur-3xl"
              style={{ animationDelay: "-3s, -2s" }}
            />
            <div
              className="animate-blob-drift relative aspect-square w-full overflow-hidden border border-white/25 shadow-2xl"
              style={{ animationDelay: "-3s, -2s" }}
            >
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
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <Reveal>
              <div className="relative mx-auto w-full max-w-70">
                <div className="absolute inset-0 -z-10 scale-125 rounded-full bg-linear-to-br from-flame-start/30 via-flame-mid/25 to-flame-end/20 blur-3xl" />
                <Image
                  src="/images/ekc_logo.png"
                  alt="Every Kid Can logo — two children riding a winged, smiling star"
                  width={390}
                  height={414}
                  className="h-auto w-full"
                />
              </div>
              <div className="mt-10 grid gap-8 sm:grid-cols-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                    The Wings
                  </p>
                  <p className="mt-2 text-sm text-mist/70">
                    Symbolize freedom, empowerment, and the ability to overcome
                    challenges.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                    The Children
                  </p>
                  <p className="mt-2 text-sm text-mist/70">
                    Highlights inclusivity and diversity, and the importance of
                    fun and empowerment.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                    The Star
                  </p>
                  <p className="mt-2 text-sm text-mist/70">
                    Represents each child&apos;s potential to shine and reach
                    their goals.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal
              delay={150}
              className="rounded-2xl border border-ink/10 bg-plum p-8 shadow-sm sm:p-10"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                About Every Kid Can
              </span>
              <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-mist sm:text-4xl">
                Our Mission
              </h2>
              <p className="mt-4 text-mist/70">
                Every Kid Can is a youth-led 501(c)(3) nonprofit intent on
                standardizing disability inclusion statewide via sensory and
                social inclusion.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal className="text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">
              What We Focus On
            </span>
            <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-mist sm:text-4xl">
              Our Two Pillars
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-mist/70">
              Everything we do falls under one of two pillars, working together
              toward the same goal.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <Reveal className="rounded-2xl border border-ink/10 bg-plum p-8 shadow-sm">
              <span className="w-fit rounded-full bg-sky-100 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-sky-800">
                Sensory Inclusion
              </span>
              <p className="mt-4 text-mist/70">
                Recognizing how individuals process and regulate differently,
                and making the tools and spaces that support this accessible in
                everyday settings.
              </p>
              <Link
                href="/pillars?tab=sensory-inclusion"
                className="mt-4 inline-block text-sm font-semibold text-gold hover:underline"
              >
                Learn more →
              </Link>
            </Reveal>
            <Reveal
              delay={150}
              className="rounded-2xl border border-ink/10 bg-plum p-8 shadow-sm"
            >
              <span className="w-fit rounded-full bg-violet-100 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-violet-800">
                Social Inclusion
              </span>
              <p className="mt-4 text-mist/70">
                Building real relationships between disabled and non-disabled
                individuals to reduce stigma and break down the barriers that
                keep these groups apart.
              </p>
              <Link
                href="/pillars?tab=social-inclusion"
                className="mt-4 inline-block text-sm font-semibold text-gold hover:underline"
              >
                Learn more →
              </Link>
            </Reveal>
          </div>
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
              “Every Kid Can is a youth-led, New Jersey based 501(c)(3)
              nonprofit organization that practices sensory and social inclusion
              in order to promote disability integration statewide. ”
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
              Take Action
            </span>
            <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-mist sm:text-4xl">
              Get Involved
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-mist/70">
              A few ways to jump in, whatever you have to give.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "DONATE TO SUPPORT OUR MISSION",
                href: "/donate#give",
                icon: (
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                ),
                text: "Your donation helps us continue our efforts in providing inclusive activity package for children with disabilities.",
              },
              {
                title: "JOIN THE TEAM!",
                href: "/volunteer",
                icon: (
                  <>
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </>
                ),
                text: "Join our team of dedicated volunteers and make a difference in the lives of children with disabilities.",
              },
              {
                title: "HELP US BUILD OUR BASKETS",
                href: "/pillars?tab=sensory-inclusion",
                icon: (
                  <>
                    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                    <path d="m3.3 7 8.7 5 8.7-5" />
                    <path d="M12 22V12" />
                  </>
                ),
                text: "Make a direct impact by sponsoring a child's baskets, allowing them to participate in exclusive activities.",
              },
              {
                title: "CONTACT US!",
                href: "/contact",
                icon: (
                  <>
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </>
                ),
                text: "Get in touch with us to learn more about our programs and how you can support Every Kid Can.",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 100}>
                <Link
                  href={item.href}
                  className="group flex h-full flex-col gap-6 rounded-2xl border border-ink/10 bg-plum p-6 shadow-sm transition-colors hover:border-ink/20 hover:bg-plum-light"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="h-7 w-7 text-gold"
                  >
                    {item.icon}
                  </svg>
                  <div>
                    <p className="font-serif text-2xl font-semibold uppercase leading-snug tracking-tight text-mist">
                      {item.title}
                    </p>
                    <p className="mt-2 text-xl leading-snug tracking-tight text-mist/80">
                      {item.text}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
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
              <Link
                href="/contact"
                className="group block rounded-2xl border border-ink/10 bg-plum p-6 shadow-sm transition-colors hover:border-ink/20 hover:bg-plum-light"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                  Contact Us
                </p>
                <p className="mt-2 text-mist">everykidcanplay@gmail.com</p>
              </Link>
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
