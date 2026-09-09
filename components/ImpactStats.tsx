import type { ImpactStat } from "@/data/impact";

export default function ImpactStats({ stats }: { stats: ImpactStat[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
        >
          <p className="text-3xl font-bold tracking-tight text-sky-600 dark:text-sky-400">
            {stat.value}
          </p>
          <p className="mt-1 text-sm font-medium text-zinc-950 dark:text-zinc-50">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
