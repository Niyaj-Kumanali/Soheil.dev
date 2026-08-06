import * as React from "react"

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
      className="flex min-h-screen items-center bg-muted/40 py-24 sm:py-32"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-8">
        <SectionHeader
          eyebrow={projects.eyebrow}
          title={projects.title}
          subtitle={projects.subtitle}
        />

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          {caseStudies.map((study) => (
            <article
              key={study.id}
              onClick={() => openStudy(study)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  openStudy(study)
                }
              }}
              role="button"
              tabIndex={0}
              className="group relative cursor-pointer overflow-hidden rounded-xl border bg-card shadow-sm transition-shadow duration-300 outline-none hover:shadow-lg focus-visible:ring-2 focus-visible:ring-accent"
            >
              <div
                className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-accent/60 to-accent"
                aria-hidden="true"
              />
              <div className="flex h-full flex-col p-8">
                <div className="flex flex-1 flex-col gap-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-2xl font-semibold tracking-tight text-ink">
                        {study.title}
                      </h3>
                      <p className="text-sm font-medium text-accent">
                        {study.client}
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className={
                        study.type === "company"
                          ? "border-accent/30 bg-accent/10 text-accent"
                          : "border-chart-purple/30 bg-chart-purple/10 text-chart-purple"
                      }
                    >
                      {study.type === "company" ? "Company" : "Personal"}
                    </Badge>
                  </div>
                  <p className="text-base leading-relaxed text-secondary">
                    {study.description}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {study.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2.5 text-sm text-secondary">
                        <span
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                          aria-hidden="true"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
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
