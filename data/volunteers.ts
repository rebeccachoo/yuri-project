export interface VolunteerOpportunity {
  slug: string;
  organizationName: string;
  title: string;
  location: string;
  date: string;
  ageRequirement: string;
  description: string;
  applyUrl?: string;
}

// TODO(content): these are placeholder listings that demonstrate the card
// format only — replace with real, confirmed volunteer opportunities before
// this page goes live. Add new opportunities to this array; each one
// automatically gets a card on /volunteer and a page at /volunteer/[slug].
export const volunteerOpportunities: VolunteerOpportunity[] = [
  {
    slug: "example-sensory-drive-volunteer",
    organizationName: "Example Organization",
    title: "Sample Opportunity — Replace With Real Listing",
    location: "New Jersey",
    date: "TBD",
    ageRequirement: "TBD",
    description:
      "This is placeholder content showing how a volunteer opportunity card will look. Replace this entry in data/volunteers.ts with a real, confirmed opportunity.",
  },
];

export function getVolunteerBySlug(slug: string): VolunteerOpportunity | undefined {
  return volunteerOpportunities.find((v) => v.slug === slug);
}

export function getVolunteerSlugs(): string[] {
  return volunteerOpportunities.map((v) => v.slug);
}
