export interface ImpactStat {
  label: string;
  value: string;
}

// TODO(content): "Facilities/Organizations Collaborated With" and
// "Volunteers Connected" totals are not finalized yet — confirm the real
// numbers with Yuri before launch, then replace the placeholder values.
export const impactStats: ImpactStat[] = [
  { label: "Raised", value: "$23,700" },
  { label: "Donations Collected", value: "2,530" },
  { label: "People with Disabilities Reached", value: "8,400+" },
  { label: "Volunteers Connected", value: "1300+" },
];
