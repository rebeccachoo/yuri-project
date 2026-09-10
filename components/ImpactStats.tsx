import type { ImpactStat } from "@/data/impact";
import Reveal from "@/components/Reveal";

export default function ImpactStats({ stats }: { stats: ImpactStat[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-x-10 gap-y-10">
      {stats.map((stat, index) => (
        <Reveal key={stat.label} delay={index * 100} className="w-40 sm:w-48">
          <p className="text-4xl font-extrabold tracking-tight text-navy-deep sm:text-5xl">
            {stat.value}
          </p>
          <p className="mt-2 text-sm font-bold uppercase tracking-wide text-navy-deep/70">
            {stat.label}
          </p>
        </Reveal>
      ))}
    </div>
  );
}
