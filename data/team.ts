export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  photo?: string;
  bio?: string;
}

export const teamMembers: TeamMember[] = [
  {
    slug: "yuri",
    name: "Yuri Lee",
    role: "Founder and CEO",
    photo: "/images/team/Yuri Lee.jpeg",
    bio: "Yuri Lee is a Senior at Bergen County Academies in the Academy for Medical Science and Technology. As Founder & CEO of Every Kid Can, Yuri leads the planning, logistics, and creative direction behind the organization's programs and initiatives, guiding each effort from concept to execution. Every Kid Can was inspired by the loss of her family member who lived with Spinal Muscular Atrophy. Having witnessed the stigma surrounding disability firsthand, Yuri founded the organization in 2024. Since then, Every Kid Can has developed into a statewide initiative, involving all 21 counties of New Jersey with Sensory and Social Inclusion Efforts. She strongly believes in equality and opportunity, emphasizing Every Kid Can’s dual meaning, where both disabled and non-disabled peers collaborate together.",
  },
  {
    slug: "kayla",
    name: "Kayla Jacob",
    role: "Chief Operating Officer",
    photo: "/images/team/Kayla Jacob.JPG",
    bio: "Kayla Jacob is a Senior at Bergen County Technical High School studying Financial Technology. As Chief of Operations for Every Kid Can, Kayla leads the organization’s partnerships and community relationships, connecting what EKC can offer with various programs across New Jersey. After volunteering with individuals with disabilities and once feeling unsure of how to interact or help, Kayla joined Every Kid Can to build the kind of genuine, lasting relationships she wished she had seen more often and has worked closely across the organization ever since. She especially values spending time with the communities EKC serves and hopes to expand those connections beyond traditional disability-focused spaces.",
  },
  {
    slug: "aliyah",
    name: "Aliyah Shams",
    role: "Chief Education Officer",
    photo: "/images/team/Aliyah Shams.JPG",
    bio: "Aliyah Shams is a Senior at Bergen County Academies in the Academy for Medical Science and Technology. As the Chief Education Officer, Aliyah works on creating educational resources and content for Every Kid Can, while also developing the organization’s sensory inclusion. After witnessing firsthand maltreatment against those with disabilities, Aliyah was determined to create an inclusive environment for all. Much of her work has focused on creating sensory boards and educational materials, researching disability and social isolation, and finding ways to make information about disability inclusion more accessible.",
  },
  {
    slug: "parker",
    name: "Parker Lipton",
    role: "Policy Director",
    photo: "/images/team/Parker Lipton.JPG",
  },
  {
    slug: "michael-jacob-karou",
    name: "Michael Jacob-Karou",
    role: "Policy",
    photo: "/images/team/Michael Jacob-Karou.JPG",
  },
  {
    slug: "julie-ma",
    name: "Julie Ma",
    role: "Outreach",
    photo: "/images/team/Julie Ma.jpeg",
  },
  {
    slug: "anika-kumar",
    name: "Anika Kumar",
    role: "Interviews",
    photo: "/images/team/anika-kumar.webp",
  },
  {
    slug: "taksh-patel",
    name: "Taksh Patel",
    role: "Volunteerism",
    photo: "/images/team/Taksh Patel.jpeg",
  },
  {
    slug: "theiha-dakshina",
    name: "Theiha Dakshina",
    role: "Communications",
    photo: "/images/team/Theiha Dakshina.JPG",
  },
];
