import type { Metadata } from "next";
import { pillars } from "@/data/pillars";
import PillarsTabs from "@/components/PillarsTabs";

export const metadata: Metadata = {
  title: "Our Pillars",
  description:
    "Every Kid Can's work spans two pillars: Sensory Inclusion and Social Inclusion.",
};

export default async function PillarsPage(props: PageProps<"/pillars">) {
  const { tab } = await props.searchParams;
  const initialTab = typeof tab === "string" ? tab : pillars[0].slug;

  return (
    <div className="flex-1 bg-navy">
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <PillarsTabs pillars={pillars} initialTab={initialTab} />
      </div>
    </div>
  );
}
