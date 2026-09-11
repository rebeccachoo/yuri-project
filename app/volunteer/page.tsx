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
        description="The Every Kid Can Volunteer Bulletin connects youth volunteers with accessible opportunities to support and engage with individuals with disabilities in their communities. Designed to make volunteering across New Jersey easier to find and be more accessible, the bulletin brings together multiple opportunities in one easy to understand place so young people can easily discover new ways to get involved, build new connections, and make a lasting, meaningful impact on their community. "
      />

      <div className="mx-auto max-w-6xl px-6 py-12">
        <VolunteerBrowser opportunities={opportunities} />
      </div>
    </div>
  );
}
