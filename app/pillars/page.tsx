import type { Metadata } from "next";
import { Suspense } from "react";
import { pillars } from "@/data/pillars";
import PillarsTabs from "@/components/PillarsTabs";

export const metadata: Metadata = {
  title: "Our Pillars",
  description:
    "Every Kid Can's work spans two pillars: Sensory Inclusion and Social Inclusion.",
};

export default function PillarsPage() {
  return (
    <div className="flex-1">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 pt-28">
        <Suspense>
          <PillarsTabs pillars={pillars} />
        </Suspense>
      </div>
    </div>
  );
}
