export interface TeamMember {
  slug: string;
  name: string;
  role: string;
}

// TODO(content): confirm each person's exact title/team with Yuri before
// publishing — only Parker's role has been confirmed so far.
export const teamMembers: TeamMember[] = [
  { slug: "yuri", name: "Yuri", role: "Role TBD" },
  { slug: "kayla", name: "Kayla", role: "Role TBD" },
  { slug: "aliyah", name: "Aliyah", role: "Role TBD" },
  { slug: "parker", name: "Parker", role: "Director of Policy" },
];
