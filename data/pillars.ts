export interface PillarImage {
  src: string;
  alt: string;
}

export interface PillarResourceLink {
  label: string;
  title: string;
  href: string;
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
  // When set, PillarsTabs shows this resource-link list instead of the
  // image carousel for this activity.
  resources?: PillarResourceLink[];
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
    subtitle: "Our work spans Sensory Boards, Donations, & Drives.",
    introHeading: "Sensory as an Outlet of Communication for All",
    description:
      "Sensory tools are a medium of communication that allow individuals to express their emotions and regulate overwhelming experiences. Sensorial exposure can improve self-regulation, improve attention, and encourage meaningful engagement through play.",
    accentColor: "sky",
    activities: [
      {
        slug: "sensory-boards",
        title: "Sensory Boards",
        description:
          "Our handmade sensory boards combine visual, tactile, and interactive elements that encourage exploration through play. They are designed to support fine motor skills, self-regulation, and provide sensory engagement, which allow every child to interact and discover at their own pace.",
        images: [
          {
            src: "/images/sensory-boards/sensory-board-14.jpg",
            alt: "Five completed Every Kid Can sensory boards with colorful tactile elements",
          },
          {
            src: "/images/sensory-boards/sensory-board-15.jpg",
            alt: "Group presenting sensory boards and a box of materials indoors",
          },
          {
            src: "/images/sensory-boards/sensory-board-17.jpg",
            alt: "Group displaying handmade sensory boards and materials",
          },
          {
            src: "/images/sensory-boards/sensory-board-18.jpg",
            alt: "Group gathered behind a table displaying sensory boards",
          },
          {
            src: "/images/sensory-boards/sensory-board-13.jpg",
            alt: "Finished Every Kid Can board with a hand-shaped texture and interactive pieces",
          },
          {
            src: "/images/sensory-boards/sensory-board-22.jpg",
            alt: "Space-themed sensory board with textured shapes and a launch pad",
          },
          {
            src: "/images/sensory-boards/sensory-board-03.jpg",
            alt: "Sensory board with textured shapes, a chain, bells, and switches",
          },
          {
            src: "/images/sensory-boards/sensory-board-02.jpg",
            alt: "Visitors exploring colorful sensory boards at an outdoor event",
          },
          {
            src: "/images/sensory-boards/sensory-board-25.jpg",
            alt: "Child exploring a colorful sensory board at an outdoor event",
          },
          {
            src: "/images/sensory-boards/sensory-board-24.jpg",
            alt: "Close-up of colorful tactile shapes on a sensory board",
          },
          {
            src: "/images/sensory-boards/sensory-board-23.jpg",
            alt: "Visitors interacting with sensory boards at an outdoor table",
          },
          {
            src: "/images/sensory-boards/sensory-board-16.jpg",
            alt: "Group holding a sensory board at Eastwick College",
          },
          {
            src: "/images/sensory-boards/sensory-board-01.jpg",
            alt: "Wooden Every Kid Can board with engraved lettering and stars",
          },
          {
            src: "/images/sensory-boards/sensory-board-19.jpg",
            alt: "Hands working on a sensory board with switches, chains, and textured shapes",
          },
          {
            src: "/images/sensory-boards/sensory-board-04.jpg",
            alt: "Colorful tactile pieces and supplies for making sensory boards",
          },
          {
            src: "/images/sensory-boards/sensory-board-05.jpg",
            alt: "Plywood prepared on a workshop table for a sensory board",
          },
          {
            src: "/images/sensory-boards/sensory-board-06.jpg",
            alt: "Tools and materials laid out in the sensory board workshop",
          },
          {
            src: "/images/sensory-boards/sensory-board-07.jpg",
            alt: "Assembled sensory board with tactile shapes and interactive hardware",
          },
          {
            src: "/images/sensory-boards/sensory-board-08.jpg",
            alt: "Wooden board and frame pieces during assembly",
          },
          {
            src: "/images/sensory-boards/sensory-board-09.jpg",
            alt: "Volunteers standing behind a sensory board in the workshop",
          },
          {
            src: "/images/sensory-boards/sensory-board-10.jpg",
            alt: "Measuring a wooden panel for a sensory board",
          },
          {
            src: "/images/sensory-boards/sensory-board-11.jpg",
            alt: "Marking a large plywood panel in the workshop",
          },
          {
            src: "/images/sensory-boards/sensory-board-12.jpg",
            alt: "Preparing materials at a workshop table",
          },
          {
            src: "/images/sensory-boards/sensory-board-20.jpg",
            alt: "Laser engraving an Every Kid Can sensory board",
          },
          {
            src: "/images/sensory-boards/sensory-board-21.jpg",
            alt: "Laser cutting equipment working on a wooden board",
          },
        ],
      },
      {
        slug: "sensory-donations",
        title: "Sensory Donations",
        description:
          "We donate sensory resources to several organizations and facilities to help create more inclusive places for children of all abilities. Our donations allow every child to learn through play and participation in several environments.",
        images: [
          {
            src: "/images/sensory-donations/sensory-donation-06.jpg",
            alt: "Volunteers delivering a donation box at The Arc of Essex County",
          },
          {
            src: "/images/sensory-donations/sensory-donation-07.jpg",
            alt: "Volunteers carrying a donation box outside The Arc entrance",
          },
          {
            src: "/images/sensory-donations/sensory-donation-15.jpg",
            alt: "Volunteers outside The Arc of Union County",
          },
          {
            src: "/images/sensory-donations/sensory-donation-17.jpg",
            alt: "Group gathered beside a donation box indoors",
          },
          {
            src: "/images/sensory-donations/sensory-donation-02.jpg",
            alt: "Volunteers with collected toys and games ready for donation",
          },
          {
            src: "/images/sensory-donations/sensory-donation-38.jpg",
            alt: "Volunteers delivering a donation outside a brick building in winter",
          },
          {
            src: "/images/sensory-donations/sensory-donation-29.jpg",
            alt: "Volunteer holding a donation box beside an outdoor sign",
          },
          {
            src: "/images/sensory-donations/sensory-donation-08.jpg",
            alt: "Volunteers holding a donation box in a parking area",
          },
          {
            src: "/images/sensory-donations/sensory-donation-19.jpg",
            alt: "Volunteer carrying a donation box outside a brick building",
          },
          {
            src: "/images/sensory-donations/sensory-donation-01.jpg",
            alt: "Collected games, toys, and activity supplies arranged for donation",
          },
          {
            src: "/images/sensory-donations/sensory-donation-03.jpg",
            alt: "Volunteers organizing boxes of donated games and toys",
          },
          {
            src: "/images/sensory-donations/sensory-donation-04.jpg",
            alt: "Open donation boxes filled with activity supplies",
          },
          {
            src: "/images/sensory-donations/sensory-donation-05.jpg",
            alt: "Boxes containing puzzles, games, and toys",
          },
          {
            src: "/images/sensory-donations/sensory-donation-09.jpg",
            alt: "Assorted donated toys and games arranged on the floor",
          },
          {
            src: "/images/sensory-donations/sensory-donation-10.jpg",
            alt: "Donation boxes containing toys and activity kits",
          },
          {
            src: "/images/sensory-donations/sensory-donation-11.jpg",
            alt: "Collection of toys, puzzles, and games ready to be packed",
          },
          {
            src: "/images/sensory-donations/sensory-donation-12.jpg",
            alt: "Volunteers holding cardboard boxes in a store",
          },
          {
            src: "/images/sensory-donations/sensory-donation-13.jpg",
            alt: "Packed donation boxes with games and sensory items",
          },
          {
            src: "/images/sensory-donations/sensory-donation-14.jpg",
            alt: "Donation box filled with games and colorful toys",
          },
          {
            src: "/images/sensory-donations/sensory-donation-16.jpg",
            alt: "Close-up of games and toys inside a donation box",
          },
          {
            src: "/images/sensory-donations/sensory-donation-18.jpg",
            alt: "Box packed with puzzles and games",
          },
          {
            src: "/images/sensory-donations/sensory-donation-20.jpg",
            alt: "Donation box containing toy instruments and games",
          },
          {
            src: "/images/sensory-donations/sensory-donation-21.jpg",
            alt: "Donation box with books, games, and activity supplies",
          },
          {
            src: "/images/sensory-donations/sensory-donation-22.jpg",
            alt: "Packed donation box in the back of a vehicle",
          },
          {
            src: "/images/sensory-donations/sensory-donation-23.jpg",
            alt: "Boxes of donated craft materials and activity supplies",
          },
          {
            src: "/images/sensory-donations/sensory-donation-24.jpg",
            alt: "Open box containing toys, games, and sensory items",
          },
          {
            src: "/images/sensory-donations/sensory-donation-25.jpg",
            alt: "Bags and boxes of collected toys ready for sorting",
          },
          {
            src: "/images/sensory-donations/sensory-donation-26.jpg",
            alt: "Several boxes of sorted donation items",
          },
          {
            src: "/images/sensory-donations/sensory-donation-27.jpg",
            alt: "Collection of colorful toys and sensory items",
          },
          {
            src: "/images/sensory-donations/sensory-donation-28.jpg",
            alt: "Packed donation box on a car seat",
          },
          {
            src: "/images/sensory-donations/sensory-donation-30.jpg",
            alt: "Donation box with art supplies, activity kits, and toys",
          },
          {
            src: "/images/sensory-donations/sensory-donation-31.jpg",
            alt: "Packed box of colorful sensory toys and activity items",
          },
          {
            src: "/images/sensory-donations/sensory-donation-32.jpg",
            alt: "Donation box beside an outdoor wooden railing",
          },
          {
            src: "/images/sensory-donations/sensory-donation-33.jpg",
            alt: "Donated games and a box displayed on indoor shelving",
          },
          {
            src: "/images/sensory-donations/sensory-donation-34.jpg",
            alt: "Bags and boxes of donated games and supplies",
          },
          {
            src: "/images/sensory-donations/sensory-donation-35.jpg",
            alt: "Collection of board games and colorful sensory toys",
          },
          {
            src: "/images/sensory-donations/sensory-donation-36.jpg",
            alt: "Box packed with books, games, and activity kits",
          },
          {
            src: "/images/sensory-donations/sensory-donation-37.jpg",
            alt: "Donation box filled with colorful games and toys",
          },
          {
            src: "/images/sensory-donations/sensory-donation-39.jpg",
            alt: "Donation box resting on a blue table",
          },
          {
            src: "/images/sensory-donations/sensory-donation-40.jpg",
            alt: "Games and sensory toys packed inside a donation box",
          },
          {
            src: "/images/sensory-donations/sensory-donation-41.jpg",
            alt: "Donation box containing a drawing tablet, toys, and sensory items",
          },
        ],
      },
      {
        slug: "sensory-drives",
        title: "Sensory Drives",
        description:
          "Our handmade donation boxes are placed in centers across New Jersey to collect resources and integrate community participation. Sensory Donation Drives support programs for those with disabilities to have access to sensory items that help them feel more comfortable, focused, and supported.",
        images: [
          {
            src: "/images/sensory-drives/sensory-drive-28.jpg",
            alt: "Donation box beneath a wooden table in a library",
          },
          {
            src: "/images/sensory-drives/sensory-drive-22.jpg",
            alt: "Board games collected in a signed donation box",
          },
          {
            src: "/images/sensory-drives/sensory-drive-07.jpg",
            alt: "Blue donation box beside a bench and community noticeboard",
          },
          {
            src: "/images/sensory-drives/sensory-drive-26.jpg",
            alt: "Donation collection point below a service counter",
          },
          {
            src: "/images/sensory-drives/sensory-drive-01.jpg",
            alt: "Blue donation collection box beside a doorway and bookshelf",
          },
          {
            src: "/images/sensory-drives/sensory-drive-02.jpg",
            alt: "Donation collection box at the foot of wooden stairs",
          },
          {
            src: "/images/sensory-drives/sensory-drive-03.jpg",
            alt: "Games collected in a donation box beneath an information table",
          },
          {
            src: "/images/sensory-drives/sensory-drive-04.jpg",
            alt: "Two handmade blue collection boxes ready for a donation drive",
          },
          {
            src: "/images/sensory-drives/sensory-drive-05.jpg",
            alt: "Printed donation signs ready to attach to collection boxes",
          },
          {
            src: "/images/sensory-drives/sensory-drive-06.jpg",
            alt: "Toys and games gathered in a donation collection box",
          },
          {
            src: "/images/sensory-drives/sensory-drive-08.jpg",
            alt: "Games collected in a box beneath a table",
          },
          {
            src: "/images/sensory-drives/sensory-drive-09.jpg",
            alt: "Donation collection box with signs beside a wooden door",
          },
          {
            src: "/images/sensory-drives/sensory-drive-10.jpg",
            alt: "Books and games collected in a donation box beside a bench",
          },
          {
            src: "/images/sensory-drives/sensory-drive-11.jpg",
            alt: "Donation box containing books and activity supplies",
          },
          {
            src: "/images/sensory-drives/sensory-drive-12.jpg",
            alt: "Collection box with donation signs beside a wooden seat",
          },
          {
            src: "/images/sensory-drives/sensory-drive-13.jpg",
            alt: "Donated items in and around a collection box by a brick wall",
          },
          {
            src: "/images/sensory-drives/sensory-drive-14.jpg",
            alt: "Donation box filled with bags and books",
          },
          {
            src: "/images/sensory-drives/sensory-drive-15.jpg",
            alt: "Games and sensory items gathered in a donation collection box",
          },
          {
            src: "/images/sensory-drives/sensory-drive-16.jpg",
            alt: "Blue collection box near library shelving",
          },
          {
            src: "/images/sensory-drives/sensory-drive-17.jpg",
            alt: "Donation collection box beside a library display table",
          },
          {
            src: "/images/sensory-drives/sensory-drive-18.jpg",
            alt: "Donated items filling a box beside a wooden bench",
          },
          {
            src: "/images/sensory-drives/sensory-drive-19.jpg",
            alt: "Toys collected in a donation box near a doorway",
          },
          {
            src: "/images/sensory-drives/sensory-drive-20.jpg",
            alt: "Collection box beneath a wall-mounted donation notice",
          },
          {
            src: "/images/sensory-drives/sensory-drive-21.jpg",
            alt: "Donation box filled with toys and activity materials",
          },
          {
            src: "/images/sensory-drives/sensory-drive-23.jpg",
            alt: "Paper bag of donated items inside a collection box",
          },
          {
            src: "/images/sensory-drives/sensory-drive-24.jpg",
            alt: "Blue donation collection box beside an indoor passageway",
          },
          {
            src: "/images/sensory-drives/sensory-drive-25.jpg",
            alt: "Collection box beneath a community information display",
          },
          {
            src: "/images/sensory-drives/sensory-drive-27.jpg",
            alt: "Donation box with signs attached to its front and back",
          },
          {
            src: "/images/sensory-drives/sensory-drive-29.jpg",
            alt: "Collected donations inside a box near a door",
          },
        ],
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
        images: [
          {
            src: "/images/social-opportunities/social-opportunity-03.jpg",
            alt: "Group gathered together in a community activity room",
          },
          {
            src: "/images/social-opportunities/social-opportunity-06.jpg",
            alt: "Group seated together with a box of donated resources",
          },
          {
            src: "/images/social-opportunities/social-opportunity-09.jpg",
            alt: "Volunteers and participants gathered for a group photo indoors",
          },
          {
            src: "/images/social-opportunities/social-opportunity-01.jpg",
            alt: "Three participants taking a group photo in a gym",
          },
          {
            src: "/images/social-opportunities/social-opportunity-02.jpg",
            alt: "Volunteers and participants posing together in an activity room",
          },
          {
            src: "/images/social-opportunities/social-opportunity-04.jpg",
            alt: "Volunteers and participants taking a group selfie",
          },
          {
            src: "/images/social-opportunities/social-opportunity-05.jpg",
            alt: "Volunteers joining participants for activities in a colorful room",
          },
          {
            src: "/images/social-opportunities/social-opportunity-07.jpg",
            alt: "Group holding a box of resources beside a colorful wall",
          },
          {
            src: "/images/social-opportunities/social-opportunity-08.jpg",
            alt: "Participants exploring items in a shared activity box",
          },
        ],
        linkHref: "/volunteer",
        linkLabel: "View the Volunteer Bulletin",
      },
      {
        slug: "interviews",
        title: "Interviews",
        description:
          "Our Interview Series sits down with professionals, educators, and advocates who work alongside people with disabilities every day. Through these conversations, we uncover the barriers, both visible and invisible, that stand in the way of true inclusion, and gather real, practical advice for youth on how to show up as genuine allies. Our goal is to turn these perspectives into resources that help young people engage with confidence, empathy, and respect.",
        images: [
          {
            src: "/images/interviews/interview-01.jpg",
            alt: "Group displaying sensory boards and donated resources indoors",
          },
          {
            src: "/images/interviews/interview-02.jpg",
            alt: "Group standing with a donation box in a hallway",
          },
          {
            src: "/images/interviews/interview-03.jpg",
            alt: "Group photo with sensory boards and a box of resources",
          },
          {
            src: "/images/interviews/interview-04.jpg",
            alt: "Group gathered behind a box of donated games",
          },
          {
            src: "/images/interviews/interview-05.jpg",
            alt: "Group displaying a donation box filled with games in an office",
          },
          {
            src: "/images/interviews/interview-06.jpg",
            alt: "Group standing behind donated resources on a cart",
          },
          {
            src: "/images/interviews/interview-07.jpg",
            alt: "Group gathered around a colorful activity table outdoors",
          },
          {
            src: "/images/interviews/interview-08.jpg",
            alt: "Two people beside a box of resources in a colorful classroom",
          },
          {
            src: "/images/interviews/interview-09.jpg",
            alt: "Two people holding a donation box in a hallway",
          },
          {
            src: "/images/interviews/interview-10.jpg",
            alt: "Two people posing in an indoor seating area",
          },
          {
            src: "/images/interviews/interview-11.jpg",
            alt: "Three people posing with a box of donated resources",
          },
          {
            src: "/images/interviews/interview-12.jpg",
            alt: "Three people holding a donation box outdoors",
          },
          {
            src: "/images/interviews/interview-13.jpg",
            alt: "Three participants in an online video interview",
          },
        ],
        linkHref: "/blog?category=Interviews",
        linkLabel: "Read our interviews",
      },
      {
        slug: "social-policies",
        title: "Social Policies",
        description:
          "Every Kid Can's policy work pushes for systemic change alongside grassroots action, advocating for the accessibility and inclusion measures that individual volunteering alone can't fix. Because lasting inclusion requires both community effort and institutional accountability, we believe policy advocacy is essential to building a truly accessible system for every student. (Through petitions and original policy research, including our brief on expanding sensory tool access in New Jersey classrooms, we push state and local leaders to make sensory and social inclusion a standard part of public education, not a privilege determined by district funding.)",
        images: [],
        resources: [
          {
            label: "Policy Brief",
            title: "Every Kid Can's Policy Brief",
            href: "https://docs.google.com/document/d/1tuQiWudIzjUKT-AOE4E8wE8WB281LlaXyem_h-kvEU4/edit?usp=sharing",
          },
          {
            label: "Current Legislation",
            title: "Current Disability Legislation (NJ)",
            href: "https://docs.google.com/document/d/13WiOBIaNUr7t1Rcg4iwCRyW7IyPO7mfkmC5xUB04suA/edit?usp=sharing",
          },
          {
            label: "Petitions",
            title: "NJ Relevant Petitions for Disability Legislation",
            href: "https://docs.google.com/document/d/180jKoyKxq-TtsUct4QqAmpRNfEoL0MOE5O6NM1d7nNw/edit?usp=sharing",
          },
        ],
      },
    ],
  },
];

export function getPillarBySlug(slug: string): Pillar | undefined {
  return pillars.find((p) => p.slug === slug);
}
