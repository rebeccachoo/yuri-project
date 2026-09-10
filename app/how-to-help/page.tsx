import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "How to Help",
  description:
    "Ways to support Every Kid Can right now: give via Zelle, join our volunteer newsletter, or send us a message directly.",
};

export default function HowToHelpPage() {
  return (
    <div className="flex-1">
      <div className="bg-navy">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h1 className="text-4xl font-extrabold uppercase tracking-tight text-white">
            How to Help
          </h1>
          <p className="mt-2 max-w-2xl text-white/80">
            A few ways you can support Every Kid Can right now.
          </p>
        </div>
      </div>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <Reveal>
            <h2 className="text-xl font-extrabold uppercase tracking-tight text-navy-deep">
              Give via Zelle
            </h2>
            <p className="mt-2 max-w-xl text-navy-deep/70">
              Every donation goes directly toward sensory resources, program
              costs, and community events across New Jersey.
            </p>
            <div className="mt-6 w-fit rounded-2xl bg-cream p-6">
              <p className="font-bold uppercase tracking-wide text-navy-deep">Donate</p>
              <p className="mt-2 text-navy-deep/80">via Zelle</p>
            </div>
            <p className="mt-4 text-sm text-navy-deep/60">
              Curious what your donation supports?{" "}
              <Link href="/donate" className="font-semibold text-accent-blue hover:underline">
                See how our donation boxes work
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <Reveal>
            <h2 className="text-xl font-extrabold uppercase tracking-tight text-navy-deep">
              Join Our Newsletter
            </h2>
            <p className="mt-2 max-w-xl text-navy-deep/70">
              Want to hear about new volunteer opportunities as soon as they
              open up? Join our newsletter and we&apos;ll reach out when
              there&apos;s a new way to get involved.
            </p>
            <a
              href="mailto:everykidcanplay@gmail.com?subject=Newsletter%20Signup&body=Hi%20Every%20Kid%20Can%2C%20please%20add%20me%20to%20your%20volunteer%20newsletter!"
              className="mt-6 inline-block rounded-full bg-accent px-6 py-3 text-sm font-bold text-navy-deep transition-colors hover:bg-navy hover:text-white"
            >
              Subscribe
            </a>
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <Reveal>
            <h2 className="text-xl font-extrabold uppercase tracking-tight text-navy-deep">
              Send Us a Message
            </h2>
            <p className="mt-2 max-w-xl text-navy-deep/70">
              Questions, ideas, or want to partner with us? Send a message
              directly.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
