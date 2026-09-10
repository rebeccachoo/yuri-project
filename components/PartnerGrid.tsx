import type { Partner } from "@/data/partners";

export default function PartnerGrid({ partners }: { partners: Partner[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {partners.map((partner) => {
        const content = (
          <>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy text-[10px] font-bold text-white">
              {partner.monogram}
            </span>
            {partner.name}
          </>
        );

        const className =
          "flex items-center gap-2 rounded-full border border-navy/15 bg-white px-4 py-2 text-sm font-semibold text-navy-deep";

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
