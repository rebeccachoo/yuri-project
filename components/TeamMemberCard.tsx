import type { TeamMember } from "@/data/team";

export default function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-flame-start via-flame-mid to-flame-end font-serif text-xl font-semibold text-ink">
        {member.name.charAt(0)}
      </span>
      <p className="mt-4 text-lg font-semibold text-mist">{member.name}</p>
      <p className="mt-1 text-sm font-semibold text-gold">{member.role}</p>
    </div>
  );
}
