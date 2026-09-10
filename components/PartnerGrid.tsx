import Image from "next/image";
import type { Partner } from "@/data/partners";

export default function PartnerGrid({ partners }: { partners: Partner[] }) {
  return (
    <div className="flex flex-wrap gap-4">
      {partners.map((partner) => {
        const content = partner.logo ? (
          <Image
            src={partner.logo}
            alt={partner.name}
            width={160}
            height={72}
            className="h-12 w-auto object-contain"
          />
        ) : (
          <>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy text-[10px] font-bold text-white">
              {partner.monogram}
            </span>
            <span className="text-sm font-semibold text-navy-deep">{partner.name}</span>
          </>
        );

        const className =
          "flex items-center gap-2 rounded-2xl border border-navy/15 bg-white px-5 py-3";

        return partner.website ? (
          <a
            key={partner.slug}
            href={partner.website}
            target="_blank"
            rel="noopener noreferrer"
            className={`${className} transition-colors hover:border-navy/40`}
          >
            {content}
          </a>
        ) : (
          <span key={partner.slug} className={className}>
            {content}
          </span>
        );
      })}
    </div>
  );
}
