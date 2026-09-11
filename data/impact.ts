export interface ImpactStat {
  label: string;
  value: string;
}

// TODO(content): "Facilities/Organizations Collaborated With" and
// "Volunteers Connected" totals are not finalized yet — confirm the real
// numbers with Yuri before launch, then replace the placeholder values.
export const impactStats: ImpactStat[] = [
  { label: "Raised", value: "$15,700" },
  { label: "Donations Collected", value: "825" },
  { label: "People with Disabilities Reached", value: "7,500" },
  { label: "Volunteers Connected", value: "x" },
];
