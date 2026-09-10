import type { ImpactStat } from "@/data/impact";
import Reveal from "@/components/Reveal";

export default function ImpactStats({ stats }: { stats: ImpactStat[] }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Reveal key={stat.label} delay={index * 100}>
          <p className="text-5xl font-extrabold tracking-tight text-navy-deep">{stat.value}</p>
          <p className="mt-2 text-sm font-bold uppercase tracking-wide text-navy-deep/70">
            {stat.label}
          </p>
        </Reveal>
      ))}
    </div>
  );
}
