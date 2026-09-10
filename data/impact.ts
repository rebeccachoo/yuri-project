export interface ImpactStat {
  label: string;
  value: string;
}

// TODO(content): "Facilities/Organizations Collaborated With" and
// "Volunteers Connected" totals are not finalized yet — confirm the real
// numbers with Yuri before launch, then replace the placeholder values.
export const impactStats: ImpactStat[] = [
  { label: "Items donated", value: "100+" },
  { label: "Centers Partnered With", value: "15+" },
  { label: "Money raised in donations", value: "$900" },
];
