import type { TeamMember } from "@/data/team";
import Image from "next/image";

export default function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-ink/10 bg-plum shadow-sm">
      <div className="relative flex aspect-square items-center justify-center bg-linear-to-br from-flame-start/45 via-plum-light to-gold/25">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={member.name}
            fill
            sizes="(max-width: 639px) calc(100vw - 48px), (max-width: 1023px) 50vw, (max-width: 1152px) 25vw, 252px"
            className="object-cover"
          />
        ) : (
          <span aria-hidden="true" className="font-serif text-7xl font-semibold text-ink/70">
            {member.name.charAt(0)}
          </span>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-serif text-2xl font-semibold text-ink">{member.name}</h3>
        <p className="mt-2 text-sm font-semibold text-gold-text">{member.role}</p>
      </div>
    </div>
  );
}
