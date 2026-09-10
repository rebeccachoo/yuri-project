import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "How to Help",
  description:
    "Ways to support Every Kid Can right now: give via Zelle, join our volunteer newsletter, or send us a message directly.",
};

export default function HowToHelpPage() {
  return (
    <div className="flex-1">
      <PageHeader
        title="How to Help"
        description="A few ways you can support Every Kid Can right now."
      />

      <section>
        <div className="mx-auto max-w-3xl px-6 py-16">
          <Reveal>
            <h2 className="font-serif text-xl font-semibold tracking-tight text-mist">
              Give via Zelle
            </h2>
            <p className="mt-2 max-w-xl text-mist/60">
              Every donation goes directly toward sensory resources, program
              costs, and community events across New Jersey.
            </p>
            <div className="mt-6 w-fit rounded-2xl border border-white/10 bg-linear-to-br from-flame-start/20 via-flame-mid/15 to-flame-end/10 p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold">Donate</p>
              <p className="mt-2 text-mist">via Zelle</p>
            </div>
            <p className="mt-4 text-sm text-mist/50">
              Curious what your donation supports?{" "}
              <Link href="/donate" className="font-semibold text-gold hover:underline">
                See how our donation boxes work
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-6 py-16">
          <Reveal>
            <h2 className="font-serif text-xl font-semibold tracking-tight text-mist">
              Join Our Newsletter
            </h2>
            <p className="mt-2 max-w-xl text-mist/60">
              Want to hear about new volunteer opportunities as soon as they
              open up? Join our newsletter and we&apos;ll reach out when
              there&apos;s a new way to get involved.
            </p>
            <a
              href="mailto:everykidcanplay@gmail.com?subject=Newsletter%20Signup&body=Hi%20Every%20Kid%20Can%2C%20please%20add%20me%20to%20your%20volunteer%20newsletter!"
              className="mt-6 inline-block rounded-full bg-linear-to-r from-flame-start via-flame-mid to-flame-end px-6 py-3 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
            >
              Subscribe
            </a>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-6 py-16">
          <Reveal>
            <h2 className="font-serif text-xl font-semibold tracking-tight text-mist">
              Send Us a Message
            </h2>
            <p className="mt-2 max-w-xl text-mist/60">
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
