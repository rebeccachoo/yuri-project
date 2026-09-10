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
    <div className="flex-1">
      <div className="bg-navy">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h1 className="text-4xl font-extrabold uppercase tracking-tight text-white">
            Volunteer Bulletin
          </h1>
          <p className="mt-2 max-w-2xl text-white/80">
            Disability-inclusive volunteer opportunities from organizations across New Jersey.
            Search by organization, title, or location — everything below updates instantly.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-12">
        <VolunteerBrowser opportunities={volunteerOpportunities} />
      </div>
    </div>
  );
}
