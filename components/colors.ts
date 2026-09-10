export interface AccentClasses {
  badge: string;
  chip: string;
  ring: string;
  bar: string;
}

const accentMap: Record<string, AccentClasses> = {
  amber: {
    badge: "bg-amber-100 text-amber-800",
    chip: "bg-amber-500",
    ring: "ring-amber-500/20",
    bar: "bg-amber-500",
  },
  emerald: {
    badge: "bg-emerald-100 text-emerald-800",
    chip: "bg-emerald-500",
    ring: "ring-emerald-500/20",
    bar: "bg-emerald-500",
  },
  rose: {
    badge: "bg-rose-100 text-rose-800",
    chip: "bg-rose-500",
    ring: "ring-rose-500/20",
    bar: "bg-rose-500",
  },
  sky: {
    badge: "bg-sky-100 text-sky-800",
    chip: "bg-sky-500",
    ring: "ring-sky-500/20",
    bar: "bg-sky-500",
  },
  violet: {
    badge: "bg-violet-100 text-violet-800",
    chip: "bg-violet-500",
    ring: "ring-violet-500/20",
    bar: "bg-violet-500",
  },
  fuchsia: {
    badge: "bg-fuchsia-100 text-fuchsia-800",
    chip: "bg-fuchsia-500",
    ring: "ring-fuchsia-500/20",
    bar: "bg-fuchsia-500",
  },
  accent: {
    badge: "bg-orange-100 text-orange-800",
    chip: "bg-orange-500",
    ring: "ring-orange-500/20",
    bar: "bg-orange-500",
  },
  navy: {
    badge: "bg-indigo-100 text-indigo-800",
    chip: "bg-indigo-500",
    ring: "ring-indigo-500/20",
    bar: "bg-indigo-500",
  },
};

const fallback: AccentClasses = accentMap.navy;

export function getAccentClasses(color: string): AccentClasses {
  return accentMap[color] ?? fallback;
}

export const accentColorNames = Object.keys(accentMap);
