import * as React from "react"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CaseStudyDialog } from "@/components/CaseStudyDialog"
import { caseStudies, type CaseStudy } from "@/lib/caseStudies"

export function DashboardShowcase() {
  const [activeStudy, setActiveStudy] = React.useState<CaseStudy | null>(null)
  const [open, setOpen] = React.useState(false)

  const openStudy = (study: CaseStudy) => {
    setActiveStudy(study)
    setOpen(true)
  }

  return (
    <section
      id="dashboards"
      aria-label="Dashboard showcase"
      className="border-y border-border bg-bg-subtle py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-sm font-medium tracking-wide text-accent uppercase">
            Selected Work
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-primary md:text-5xl">
            Dashboards I've built
          </h2>
          <p className="mt-4 text-secondary">
            Client dashboards are described here as case studies — metrics and
            approaches are real, confidential client data has been omitted.
          </p>
        </div>

        <div className="space-y-8">
          {caseStudies.map((study) => (
            <article
              key={study.id}
              className="rounded-xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md md:p-8"
            >
              <div className="flex flex-col gap-4">
                <p className="text-sm font-medium text-accent">{study.client}</p>
                <h3 className="text-2xl font-semibold text-primary">
                  {study.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="space-y-3 text-secondary">
                  <p>
                    <span className="font-medium text-primary">Problem: </span>
                    {study.problem}
                  </p>
                  <p>
                    <span className="font-medium text-primary">Approach: </span>
                    {study.approach}
                  </p>
                  <p>
                    <span className="font-medium text-primary">Impact: </span>
                    <span className="font-semibold text-foreground">
                      {study.impact}
                    </span>
                  </p>
                </div>
                <div className="mt-2">
                  <Button variant="outline" onClick={() => openStudy(study)}>
                    View full case study
                    <ArrowRight data-icon="inline-end" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <CaseStudyDialog
        study={activeStudy}
        open={open}
        onOpenChange={setOpen}
      />
    </section>
  )
}
