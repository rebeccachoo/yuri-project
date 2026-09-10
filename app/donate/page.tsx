import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Donation Boxes",
  description:
    "How Every Kid Can's donation boxes work — and why the program touches both our Sensory and Social Inclusion pillars.",
};

export default function DonatePage() {
  return (
    <div className="flex-1">
      <div className="bg-navy">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h1 className="text-4xl font-extrabold uppercase tracking-tight text-white">
            Our Donation Boxes
          </h1>
          <p className="mt-2 max-w-2xl text-white/80">
            A two-way relationship between our community and the people we serve.
          </p>
        </div>
      </div>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <Reveal>
            <h2 className="text-xl font-extrabold uppercase tracking-tight text-navy-deep">
              The Story
            </h2>
            <p className="mt-4 text-navy-deep/80">
              It starts with a donation box in a New Jersey community center.
              Someone drops in a fidget toy, a pair of noise-reducing
              headphones, a tactile puzzle — small things that make a big
              difference for a kid who needs them. We collect what&apos;s
              given, and we give it back out: to schools, libraries, and
              facilities across the state that could use it most.
            </p>
            <p className="mt-4 text-navy-deep/80">
              It&apos;s a cycle, not a transaction. The community gives to
              us, and we give to the community — the boxes are just where it
              starts.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Reveal className="text-center">
            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-navy-deep">
              One Program, Two Pillars
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-navy-deep/80">
              Our donation boxes aren&apos;t just a Sensory Inclusion project
              — they touch everything we do.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <Reveal className="rounded-2xl bg-white p-8 shadow-sm">
              <span className="w-fit rounded-full bg-sky-100 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-sky-800">
                Sensory Inclusion
              </span>
              <h3 className="mt-4 text-xl font-bold text-navy-deep">What we collect</h3>
              <p className="mt-2 text-navy-deep/70">
                Most of what comes out of our donation boxes are sensory
                items — fidgets, weighted items, noise-reducing headphones,
                and tactile tools. These go directly into our{" "}
                <Link
                  href="/pillars?tab=sensory-inclusion"
                  className="font-semibold text-accent-blue hover:underline"
                >
                  Sensory Donations and Sensory Boards
                </Link>{" "}
                programs.
              </p>
            </Reveal>

            <Reveal delay={150} className="rounded-2xl bg-white p-8 shadow-sm">
              <span className="w-fit rounded-full bg-violet-100 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-violet-800">
                Social Inclusion
              </span>
              <h3 className="mt-4 text-xl font-bold text-navy-deep">How we deliver it</h3>
              <p className="mt-2 text-navy-deep/70">
                Dropping off a box of donations isn&apos;t the end of it for
                us. We host donation events with the organizations we
                support, using the items alongside the people who receive
                them and connecting our{" "}
                <Link href="/volunteer" className="font-semibold text-accent-blue hover:underline">
                  volunteers
                </Link>{" "}
                directly with the community — building real relationships
                along the way, not just a delivery.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="give" className="scroll-mt-20 bg-navy-deep">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white">
              Get Involved
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
                <p className="mt-2 text-white group-hover:text-navy-deep">@_everykidcan</p>
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
                <p className="font-bold uppercase tracking-wide text-navy-deep">Donate</p>
                <p className="mt-2 text-navy-deep/80">via Zelle</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
