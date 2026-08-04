import type { LucideIcon } from "lucide-react"
import { BarChart3, Workflow, Table2, Database, FileSpreadsheet } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { SectionHeader } from "@/components/SectionHeader"
import { skills } from "@/lib/siteData"

const skillIcons: Record<string, LucideIcon> = {
  barChart3: BarChart3,
  workflow: Workflow,
  table2: Table2,
  database: Database,
  fileSpreadsheet: FileSpreadsheet,
}

export function Skills() {
  return (
    <section
      id="skills"
      aria-label="Skills"
      className="bg-muted/40 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        <SectionHeader
          eyebrow={skills.eyebrow}
          title={skills.title}
          subtitle={skills.subtitle}
        />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {skills.groups.map((group) => {
            const Icon = skillIcons[group.icon]
            return (
              <div
                key={group.label}
                className="rounded-xl border bg-card p-6 shadow-sm transition-colors duration-300 hover:border-accent/20"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-base font-semibold text-ink">
                    {group.label}
                  </h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.chips.map((chip) => (
                    <Badge
                      key={chip}
                      className="border-transparent bg-muted text-muted-foreground transition-colors hover:bg-accent/10 hover:text-accent"
                    >
                      {chip}
                    </Badge>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
