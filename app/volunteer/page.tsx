import type { Metadata } from "next";
import { getVolunteerOpportunities } from "@/lib/content/volunteers";
import VolunteerBrowser from "@/components/VolunteerBrowser";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Volunteer Bulletin",
  description:
    "Disability-inclusive volunteer opportunities across New Jersey, collected by Every Kid Can.",
};

export default async function VolunteerPage() {
  const opportunities = await getVolunteerOpportunities();

  return (
    <div className="flex-1">
      <PageHeader
        eyebrow="Get Involved"
        title="Volunteer Bulletin"
        description="Disability-inclusive volunteer opportunities from organizations across New Jersey. Search by organization, title, or location — everything below updates instantly."
      />

      <div className="mx-auto max-w-6xl px-6 py-12">
        <VolunteerBrowser opportunities={opportunities} />
      </div>
    </div>
  );
}
