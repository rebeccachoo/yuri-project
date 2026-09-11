import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import NewsletterForm from "@/components/NewsletterForm";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "How to Help",
  description:
    "Ways to support Every Kid Can right now: give via Zelle or join our volunteer newsletter.",
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
            <div className="mt-6 w-fit rounded-2xl border border-ink/10 bg-linear-to-br from-flame-start/25 via-flame-mid/20 to-flame-end/20 p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                Donate
              </p>
              <p className="mt-2 text-mist">via Zelle</p>
            </div>
            <p className="mt-4 text-sm text-mist/50">
              Curious what your donation supports?{" "}
              <Link
                href="/donate"
                className="font-semibold text-gold hover:underline"
              >
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
            <NewsletterForm />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
