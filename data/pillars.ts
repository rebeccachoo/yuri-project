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
  introHeading?: string;
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
    introHeading: "Sensory as an Outlet of Communication for All",
    description:
      "Sensory tools are a medium of communication that allow individuals to express their emotions and regulate overwhelming experiences. Sensorial exposure can improve self-regulation, improve attention, and encourage meaningful engagement through play.",
    accentColor: "sky",
    activities: [
      {
        slug: "sensory-donations",
        title: "Sensory Donations",
        description:
          "We donate sensory resources to several organizations and facilities to help create more inclusive places for children of all abilities. Our donations allow every child to learn through play and participation in several environments.",
        images: [],
      },
      {
        slug: "sensory-boards",
        title: "Sensory Boards",
        description:
          "Our handmade sensory boards combine visual, tactile, and interactive elements that encourage exploration through play. They are designed to support fine motor skills, self-regulation, and provide sensory engagement, which allow every child to interact and discover at their own pace.",
        images: [],
      },
      {
        slug: "sensory-drives",
        title: "Sensory Drives",
        description:
          "Our handmade donation boxes are placed in centers across New Jersey to collect resources and integrate community participation. Sensory Donation Drives support programs for those with disabilities to have access to sensory items that help them feel more comfortable, focused, and supported.",
        images: [],
        linkHref: "/donate",
        linkLabel: "How our donation boxes work",
      },
    ],
  },
  {
    slug: "social-inclusion",
    navLabel: "Social Inclusion",
    title: "Social Inclusion",
    subtitle: "Our work spans Social Opportunities, Interviews, and Policies.",
    introHeading: "Social Pillar",
    description:
      "Every Kid Can's Social Pillar focuses on helping people build real, meaningful connections. Our organization supports individuals with disabilities in developing important social skills, while also encouraging those without disabilities to learn how to properly communicate, connect and build genuine relationships with them. Inclusion is a two way street; we believe a stronger, more understanding community is created when everyone is empowered to participate in and contribute to meaningful human connection.",
    accentColor: "violet",
    activities: [
      {
        slug: "social-opportunities",
        title: "Social Opportunities",
        description:
          "The Every Kid Can Volunteer Bulletin connects youth volunteers with accessible opportunities to support and engage with individuals with disabilities in their communities. Designed to make volunteering across New Jersey easier to find and be more accessible, the bulletin brings together multiple opportunities in one easy to understand place so young people can easily discover new ways to get involved, build new connections, and make a lasting, meaningful impact on their community.",
        images: [],
        linkHref: "/volunteer",
        linkLabel: "View the Volunteer Bulletin",
      },
      {
        slug: "interviews",
        title: "Interviews",
        description:
          "Our Interview Series sits down with professionals, educators, and advocates who work alongside people with disabilities every day. Through these conversations, we uncover the barriers, both visible and invisible, that stand in the way of true inclusion, and gather real, practical advice for youth on how to show up as genuine allies. Our goal is to turn these perspectives into resources that help young people engage with confidence, empathy, and respect.",
        images: [],
        linkHref: "/blog?category=Interviews",
        linkLabel: "Read our interviews",
      },
      {
        slug: "social-policies",
        title: "Social Policies",
        description:
          "Every Kid Can's policy work pushes for systemic change alongside grassroots action, advocating for the accessibility and inclusion measures that individual volunteering alone can't fix. Because lasting inclusion requires both community effort and institutional accountability, we believe policy advocacy is essential to building a truly accessible system for every student. (Through petitions and original policy research, including our brief on expanding sensory tool access in New Jersey classrooms, we push state and local leaders to make sensory and social inclusion a standard part of public education, not a privilege determined by district funding.)",
        images: [],
      },
    ],
  },
];

export function getPillarBySlug(slug: string): Pillar | undefined {
  return pillars.find((p) => p.slug === slug);
}
