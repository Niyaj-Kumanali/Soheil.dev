const stats = [
  { value: "3", label: "Enterprise BI modules shipped" },
  { value: "100%", label: "KPI accuracy validated against SSMS" },
  { value: "10+", label: "Tables — Galaxy model conflicts resolved" },
  { value: "12 mo", label: "Production BI experience" },
]

export function ImpactStrip() {
  return (
    <section
      aria-label="Key metrics"
      className="mx-auto max-w-[1120px] px-6 pb-16 md:px-8"
    >
      <dl className="grid grid-cols-2 gap-y-8 md:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={
              "px-4 text-center md:px-8 " +
              (i > 0 ? "md:border-l md:border-border " : "") +
              (i > 1 ? "border-l border-border md:border-l " : "") +
              (i === 2 ? "" : "")
            }
          >
            <dt className="order-2 mt-2 text-sm text-secondary">
              {stat.label}
            </dt>
            <dd className="order-1 text-4xl font-bold text-primary tabular-nums">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
