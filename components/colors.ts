export interface AccentClasses {
  badge: string;
  chip: string;
  ring: string;
  bar: string;
}

const accentMap: Record<string, AccentClasses> = {
  amber: {
    badge: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
    chip: "bg-amber-500",
    ring: "ring-amber-500/20",
    bar: "bg-amber-500",
  },
  emerald: {
    badge: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
    chip: "bg-emerald-500",
    ring: "ring-emerald-500/20",
    bar: "bg-emerald-500",
  },
  rose: {
    badge: "bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300",
    chip: "bg-rose-500",
    ring: "ring-rose-500/20",
    bar: "bg-rose-500",
  },
  sky: {
    badge: "bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300",
    chip: "bg-sky-500",
    ring: "ring-sky-500/20",
    bar: "bg-sky-500",
  },
  violet: {
    badge: "bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300",
    chip: "bg-violet-500",
    ring: "ring-violet-500/20",
    bar: "bg-violet-500",
  },
  fuchsia: {
    badge: "bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900/40 dark:text-fuchsia-300",
    chip: "bg-fuchsia-500",
    ring: "ring-fuchsia-500/20",
    bar: "bg-fuchsia-500",
  },
};

const fallback: AccentClasses = accentMap.emerald;

export function getAccentClasses(color: string): AccentClasses {
  return accentMap[color] ?? fallback;
}
