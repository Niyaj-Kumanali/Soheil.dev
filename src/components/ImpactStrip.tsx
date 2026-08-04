import { impactStats } from "@/lib/siteData"

export function ImpactStrip() {
  return (
    <section aria-label="Key metrics" className="mx-auto max-w-[1280px] px-6 pb-16 md:px-8">
      <dl className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {impactStats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border bg-card p-6 text-center shadow-sm transition-colors duration-300 hover:border-accent/20"
          >
            <dd className="text-3xl font-bold text-accent tabular-nums">
              {stat.value}
            </dd>
            <dt className="mt-1 text-sm text-secondary">{stat.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  )
}
