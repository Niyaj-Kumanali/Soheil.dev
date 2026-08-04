import * as React from "react"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SectionHeader } from "@/components/SectionHeader"
import { CaseStudyDialog } from "@/components/CaseStudyDialog"
import { projects, caseStudies, type CaseStudy } from "@/lib/siteData"

export function Projects() {
  const [activeStudy, setActiveStudy] = React.useState<CaseStudy | null>(null)
  const [open, setOpen] = React.useState(false)

  const openStudy = (study: CaseStudy) => {
    setActiveStudy(study)
    setOpen(true)
  }

  return (
    <section
      id="projects"
      aria-label="Projects"
      className="bg-muted/40 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeader
          eyebrow={projects.eyebrow}
          title={projects.title}
          subtitle={projects.subtitle}
          center
        />

        <div className="space-y-8">
          {caseStudies.map((study) => (
            <article
              key={study.id}
              className="relative overflow-hidden rounded-xl border bg-card shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              <div
                className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-accent/60 to-accent"
                aria-hidden="true"
              />
              <div className="p-8 md:p-10">
                <div className="flex flex-col gap-6">
                  <p className="text-sm font-medium text-accent">{study.client}</p>
                  <h3 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                    {study.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    <div>
                      <h4 className="mb-1.5 text-xs font-semibold tracking-widest text-secondary uppercase">
                        Problem
                      </h4>
                      <p className="text-base leading-relaxed text-secondary">
                        {study.problem}
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-1.5 text-xs font-semibold tracking-widest text-secondary uppercase">
                        Approach
                      </h4>
                      <p className="text-base leading-relaxed text-secondary">
                        {study.approach}
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-1.5 text-xs font-semibold tracking-widest text-secondary uppercase">
                        Impact
                      </h4>
                      <p className="text-base leading-relaxed text-secondary">
                        <span className="font-semibold text-foreground">
                          {study.impact}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <Button variant="outline" onClick={() => openStudy(study)}>
                      {projects.caseStudyCta}
                      <ArrowRight data-icon="inline-end" />
                    </Button>
                  </div>
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
