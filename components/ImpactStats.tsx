import type { ImpactStat } from "@/data/impact";
import Reveal from "@/components/Reveal";

export default function ImpactStats({ stats }: { stats: ImpactStat[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-x-10 gap-y-10">
      {stats.map((stat, index) => (
        <Reveal key={stat.label} delay={index * 100} className="w-40 sm:w-48">
          <p className="bg-linear-to-r from-flame-start via-flame-mid to-flame-end bg-clip-text font-serif text-4xl font-semibold tracking-tight text-transparent sm:text-5xl">
            {stat.value}
          </p>
          <p className="mt-2 text-sm font-medium uppercase tracking-wide text-mist/60">
            {stat.label}
          </p>
        </Reveal>
      ))}
    </div>
  );
}
