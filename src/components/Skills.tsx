import type { LucideIcon } from "lucide-react"
import { BarChart3, Workflow, Table2, Database, FileSpreadsheet } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { SectionHeader } from "@/components/SectionHeader"
import { cn } from "@/lib/utils"
import { skills } from "@/lib/siteData"

const skillIcons: Record<string, LucideIcon> = {
  barChart3: BarChart3,
  workflow: Workflow,
  table2: Table2,
  database: Database,
  fileSpreadsheet: FileSpreadsheet,
}

const sizeClasses: Record<string, string> = {
  featured: "sm:col-span-2 lg:col-span-3 border-accent/25",
  wide: "lg:col-span-3",
  standard: "lg:col-span-2",
}

export function Skills() {
  return (
    <section
      id="skills"
      aria-label="Skills"
      className="flex min-h-screen items-center bg-muted/40 py-24 sm:py-32"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-8">
        <SectionHeader
          eyebrow={skills.eyebrow}
          title={skills.title}
          subtitle={skills.subtitle}
        />

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {skills.groups.map((group) => {
            const Icon = skillIcons[group.icon]
            return (
              <div
                key={group.label}
                className={cn(
                  "rounded-xl border bg-card p-6 shadow-sm transition-colors duration-300 hover:border-accent/20",
                  sizeClasses[group.size ?? "standard"]
                )}
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
