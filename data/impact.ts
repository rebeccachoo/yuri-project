export interface ImpactStat {
  label: string;
  value: string;
}

// TODO(content): "Facilities/Organizations Collaborated With" and
// "Volunteers Connected" totals are not finalized yet — confirm the real
// numbers with Yuri before launch, then replace the placeholder values.
export const impactStats: ImpactStat[] = [
  { label: "Donations Collected", value: "825" },
  { label: "Facilities/Organizations Collaborated With", value: "Coming soon" },
  { label: "Raised", value: "$15,700" },
  { label: "People Reached", value: "7,500" },
  { label: "Volunteers Connected", value: "Coming soon" },
];
