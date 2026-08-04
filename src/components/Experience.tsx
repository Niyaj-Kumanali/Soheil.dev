const roles = [
  {
    dates: "Jun 2025 – Mar 2026",
    title: "Business Intelligence Analyst — Intern",
    company: "Talentpace",
    location: "Bengaluru",
    bullets: [
      "Built 3 enterprise BI modules for Himalaya Wellness Company, covering finance, retail, and IT operations",
      "Resolved 10+ conflicting Galaxy-model table relationships and fixed filter directions in Fabric semantic models",
      "Validated 100% of KPI figures against SSMS queries, resolving UAT discrepancies to final sign-off",
      "Automated data refreshes with Microsoft Fabric Dataflow Gen2 and Direct Lake mode",
    ],
  },
  {
    dates: "Jun 2024 – Sep 2024",
    title: "Business Analyst — Intern",
    company: "AI Variant",
    location: "Bengaluru",
    bullets: [
      "Translated business requirements into documented analysis specs and data definitions",
      "Cleaned and structured datasets with Excel and Power Query for reporting and ad-hoc analysis",
    ],
  },
]

export function Experience() {
  return (
    <section
      id="experience"
      aria-label="Experience"
      className="mx-auto max-w-[1120px] px-6 py-20 md:px-8 md:py-28"
    >
      <div className="mb-12">
        <p className="text-sm font-medium tracking-wide text-accent uppercase">
          Career
        </p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight text-primary md:text-5xl">
          Experience
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-[140px_1fr]">
        {roles.map((role) => (
          <div key={role.title} className="contents md:contents">
            <div className="text-sm text-tertiary">{role.dates}</div>
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-primary">
                {role.title}
              </h3>
              <p className="text-sm text-secondary">
                {role.company} · {role.location}
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-secondary marker:text-border">
                {role.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
