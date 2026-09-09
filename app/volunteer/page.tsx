import type { Metadata } from "next";
import { volunteerOpportunities } from "@/data/volunteers";
import VolunteerBrowser from "@/components/VolunteerBrowser";

export const metadata: Metadata = {
  title: "Volunteer Bulletin",
  description:
    "Disability-inclusive volunteer opportunities across New Jersey, collected by Every Kid Can.",
};

export default function VolunteerPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
        Volunteer Bulletin
      </h1>
      <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-400">
        Disability-inclusive volunteer opportunities from organizations across New Jersey. Search
        by organization, title, or location — everything below updates instantly.
      </p>

      <div className="mt-10">
        <VolunteerBrowser opportunities={volunteerOpportunities} />
      </div>
    </div>
  );
}
