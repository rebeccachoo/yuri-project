import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Donation Boxes",
  description:
    "How Every Kid Can's donation boxes work — and why the program touches both our Sensory and Social Inclusion pillars.",
};

export default function DonatePage() {
  return (
    <div className="flex-1">
      <PageHeader
        title="Our Donation Boxes"
        description="A two-way relationship between our community and the people we serve."
      />

      <section>
        <div className="mx-auto max-w-3xl px-6 py-16">
          <Reveal>
            <h2 className="font-serif text-xl font-semibold tracking-tight text-mist">
              The Story
            </h2>
            <p className="mt-4 text-mist/70">
              It starts with a donation box in a New Jersey community center.
              Someone drops in a fidget toy, a pair of noise-reducing
              headphones, a tactile puzzle — small things that make a big
              difference for a kid who needs them. We collect what&apos;s
              given, and we give it back out: to schools, libraries, and
              facilities across the state that could use it most.
            </p>
            <p className="mt-4 text-mist/70">
              It&apos;s a cycle, not a transaction. The community gives to
              us, and we give to the community — the boxes are just where it
              starts.
            </p>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Reveal className="text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">
              How It Works
            </span>
            <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-mist sm:text-4xl">
              One Program, Two Pillars
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-mist/70">
              Our donation boxes aren&apos;t just a Sensory Inclusion project
              — they touch everything we do.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <Reveal className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <span className="w-fit rounded-full bg-sky-100 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-sky-800">
                Sensory Inclusion
              </span>
              <h3 className="mt-4 text-xl font-semibold text-mist">What we collect</h3>
              <p className="mt-2 text-mist/60">
                Most of what comes out of our donation boxes are sensory
                items — fidgets, weighted items, noise-reducing headphones,
                and tactile tools. These go directly into our{" "}
                <Link
                  href="/pillars?tab=sensory-inclusion"
                  className="font-semibold text-gold hover:underline"
                >
                  Sensory Donations and Sensory Boards
                </Link>{" "}
                programs.
              </p>
            </Reveal>

            <Reveal delay={150} className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <span className="w-fit rounded-full bg-violet-100 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-violet-800">
                Social Inclusion
              </span>
              <h3 className="mt-4 text-xl font-semibold text-mist">How we deliver it</h3>
              <p className="mt-2 text-mist/60">
                Dropping off a box of donations isn&apos;t the end of it for
                us. We host donation events with the organizations we
                support, using the items alongside the people who receive
                them and connecting our{" "}
                <Link href="/volunteer" className="font-semibold text-gold hover:underline">
                  volunteers
                </Link>{" "}
                directly with the community — building real relationships
                along the way, not just a delivery.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="give" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">
              Give &amp; Connect
            </span>
            <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-mist sm:text-4xl">
              Get Involved
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <Reveal delay={0}>
              <a
                href="https://instagram.com/_everykidcan"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-white/25 hover:bg-white/10"
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
                className="group block rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-white/25 hover:bg-white/10"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-gold">Email</p>
                <p className="mt-2 text-mist">everykidcanplay@gmail.com</p>
              </a>
            </Reveal>
            <Reveal delay={200}>
              <div className="rounded-2xl border border-white/10 bg-linear-to-br from-flame-start/20 via-flame-mid/15 to-flame-end/10 p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold">Donate</p>
                <p className="mt-2 text-mist">via Zelle</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
