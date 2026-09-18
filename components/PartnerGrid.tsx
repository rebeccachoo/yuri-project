import Image from "next/image";
import type { Partner } from "@/lib/content/partners";

export default function PartnerGrid({ partners }: { partners: Partner[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {partners.map((partner) => {
        // Every tile gets the same fixed footprint regardless of whether the
        // source logo is a wide landscape mark, a tall portrait one, or a
        // square icon — `object-contain` inside a fixed box scales each down
        // to fit without stretching or cropping, so the row of chips lines
        // up evenly instead of following each logo's native aspect ratio.
        const content = partner.logo ? (
          <div className="relative h-24 w-48">
            <Image
              src={partner.logo}
              alt={partner.name}
              fill
              className="object-contain"
              sizes="192px"
            />
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-flame-start via-flame-mid to-flame-end text-xs font-bold text-ink">
              {partner.monogram}
            </span>
            <span className="text-base font-semibold text-slate-800">
              {partner.name}
            </span>
          </div>
        );

        const className =
          "flex h-32 w-60 items-center justify-center rounded-2xl border border-ink/10 bg-white p-4 shadow-sm";

        return partner.website ? (
          <a
            key={partner.slug}
            href={partner.website}
            target="_blank"
            rel="noopener noreferrer"
            title={partner.name}
            className={`${className} transition-opacity hover:opacity-90`}
          >
            {content}
          </a>
        ) : (
          <span key={partner.slug} title={partner.name} className={className}>
            {content}
          </span>
        );
      })}
    </div>
  );
}
