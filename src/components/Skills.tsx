import { BarChart3, Workflow, Table2, Database, FileSpreadsheet } from "lucide-react"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillGroups = [
  {
    icon: BarChart3,
    label: "Power BI",
    chips: [
      "Dashboard Design",
      "KPI Development",
      "DAX & Measures",
      "Drill-through",
      "Bookmarks",
    ],
  },
  {
    icon: Workflow,
    label: "Microsoft Fabric",
    chips: [
      "Dataflow Gen2",
      "Direct Lake",
      "Semantic Models",
      "Data Pipeline",
    ],
  },
  {
    icon: Table2,
    label: "Data Modeling",
    chips: ["Star Schema", "Galaxy Model", "Relationships", "Filter Direction"],
  },
  {
    icon: Database,
    label: "SQL & Database",
    chips: ["Joins", "Subqueries", "Views", "Stored Procedures", "SSMS"],
  },
  {
    icon: FileSpreadsheet,
    label: "Excel & ETL",
    chips: ["Power Query (M)", "Pivot Tables", "VLOOKUP", "Data Cleaning"],
  },
]

export function Skills() {
  return (
    <section
      id="skills"
      aria-label="Skills"
      className="border-y border-border bg-bg-subtle py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        <div className="mb-12">
          <p className="text-sm font-medium tracking-wide text-accent uppercase">
            Toolkit
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-primary md:text-5xl">
            Skills
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {skillGroups.map((group) => (
            <Card key={group.label} className="gap-3">
              <CardHeader>
                <group.icon className="size-5 text-accent" aria-hidden="true" />
                <CardTitle>{group.label}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {group.chips.map((chip) => (
                  <Badge key={chip} variant="outline">
                    {chip}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
