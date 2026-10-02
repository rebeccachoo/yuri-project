import Image from "next/image";
import type { TeamMember } from "@/data/team";

export default function FeaturedTeamMember({ member }: { member: TeamMember }) {
  return (
    <details className="group overflow-hidden rounded-3xl border border-ink/10 bg-plum shadow-sm transition-shadow open:shadow-lg hover:shadow-lg">
      <summary className="cursor-pointer list-none rounded-3xl focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-gold [&::-webkit-details-marker]:hidden">
        <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-linear-to-br from-flame-start/45 via-plum-light to-gold/25">
          {member.photo ? (
            <Image
              src={member.photo}
              alt={member.name}
              fill
              sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1152px) 33vw, 352px"
              className="object-cover"
            />
          ) : (
            <span aria-hidden="true" className="font-serif text-8xl font-semibold text-ink/70">
              {member.name.charAt(0)}
            </span>
          )}
          <span aria-hidden="true" className="absolute right-5 bottom-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl text-ink shadow-sm transition-transform group-open:rotate-45 motion-reduce:transition-none">
            +
          </span>
        </div>
        <div className="p-6 sm:p-7">
          <h3 className="font-serif text-3xl font-semibold text-ink">{member.name}</h3>
          {member.role !== "Role TBD" && (
            <p className="mt-2 text-sm font-semibold text-gold-text">{member.role}</p>
          )}
          <p className="mt-4 text-sm font-semibold text-gold-text">
            <span className="group-open:hidden">Meet {member.name} →</span>
            <span className="hidden group-open:inline">Close biography −</span>
          </p>
        </div>
      </summary>
      <div className="mx-6 border-t border-ink/10 py-6 sm:mx-7">
        <p className="whitespace-pre-line leading-relaxed text-mist/80">
          {member.bio || "Biography coming soon."}
        </p>
      </div>
    </details>
  );
}
