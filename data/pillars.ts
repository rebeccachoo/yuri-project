export interface PillarImage {
  src: string;
  alt: string;
}

export interface PillarActivity {
  slug: string;
  title: string;
  description: string;
  // TODO(content): add real photos to /public/images and list them here.
  // Until then, the carousel shows a placeholder slide.
  images: PillarImage[];
  linkHref?: string;
  linkLabel?: string;
}

export interface Pillar {
  slug: "sensory-inclusion" | "social-inclusion";
  navLabel: string;
  title: string;
  subtitle: string;
  description: string;
  accentColor: string;
  activities: PillarActivity[];
}

export const pillars: Pillar[] = [
  {
    slug: "sensory-inclusion",
    navLabel: "Sensory Inclusion",
    title: "Sensory Inclusion",
    subtitle: "Our work spans Sensory Donations, Boards, & Drives.",
    description:
      "Our Sensory Inclusion pillar focuses on making sensory resources accessible across New Jersey — donating items directly to institutions, building hands-on sensory boards, and running community drives to keep the pipeline of resources going.",
    accentColor: "sky",
    activities: [
      {
        slug: "sensory-donations",
        title: "Sensory Donations",
        description:
          "We donate sensory resources — from fidgets to noise-reducing headphones — directly to schools, libraries, and community facilities across New Jersey.",
        images: [],
      },
      {
        slug: "sensory-boards",
        title: "Sensory Boards",
        description:
          "We design and build hands-on sensory boards that offer tactile, visual, and interactive experiences for kids who benefit from sensory play.",
        images: [],
      },
      {
        slug: "sensory-drives",
        title: "Sensory Drives",
        description:
          "We place donation boxes at community centers across New Jersey to collect sensory items from the public, which we then distribute through our Sensory Donations program.",
        images: [],
      },
    ],
  },
  {
    slug: "social-inclusion",
    navLabel: "Social Inclusion",
    title: "Social Inclusion",
    subtitle: "Our work spans Social Opportunities, Interviews, and Policies.",
    description:
      "Our Social Inclusion pillar works to open up social, educational, and civic spaces for kids with disabilities to fully participate alongside their peers.",
    accentColor: "violet",
    activities: [
      {
        slug: "social-opportunities",
        title: "Social Opportunities",
        description:
          "We connect volunteers with disability-inclusive volunteer opportunities across New Jersey through our Volunteer Bulletin.",
        images: [],
        linkHref: "/volunteer",
        linkLabel: "View the Volunteer Bulletin",
      },
      {
        slug: "interviews",
        title: "Interviews",
        description:
          "We publish interviews with educators, specialists, and advocates working on disability inclusion.",
        images: [],
        linkHref: "/blog?category=Interviews",
        linkLabel: "Read our interviews",
      },
      {
        slug: "social-policies",
        title: "Social Policies",
        description:
          "We research and advocate for policy change — from petitions to expanding access to sensory tools in public spaces.",
        images: [],
      },
    ],
  },
];

export function getPillarBySlug(slug: string): Pillar | undefined {
  return pillars.find((p) => p.slug === slug);
}
