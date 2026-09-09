import type { Partner } from "@/data/partners";
import { getAccentClasses } from "@/components/colors";

export default function PartnerGrid({ partners }: { partners: Partner[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {partners.map((partner) => {
        const accent = getAccentClasses(partner.accentColor);
        const content = (
          <>
            <span
              className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold text-white ${accent.chip}`}
            >
              {partner.monogram}
            </span>
            {partner.name}
          </>
        );

        const className =
          "flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300";

        return partner.website ? (
          <a
            key={partner.slug}
            href={partner.website}
            target="_blank"
            rel="noopener noreferrer"
            className={`${className} transition-colors hover:border-zinc-300 dark:hover:border-zinc-700`}
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
