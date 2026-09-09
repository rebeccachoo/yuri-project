export interface ImpactStat {
  label: string;
  value: string;
}

// TODO(content): "Volunteers Connected" total is not finalized yet — confirm
// the real number with Yuri before launch, then replace the placeholder value.
export const impactStats: ImpactStat[] = [
  { label: "Raised", value: "$15,700" },
  { label: "Donations Collected", value: "825" },
  { label: "People with Disabilities Reached", value: "7,500" },
  { label: "Volunteers Connected", value: "Coming soon" },
];
