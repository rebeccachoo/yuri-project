import type { TeamMember } from "@/data/team";

export default function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-navy/10 bg-white p-6 text-center shadow-sm">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-navy text-xl font-bold text-white">
        {member.name.charAt(0)}
      </span>
      <p className="mt-4 text-lg font-bold text-navy-deep">{member.name}</p>
      <p className="mt-1 text-sm font-semibold text-accent-blue">{member.role}</p>
    </div>
  );
}
