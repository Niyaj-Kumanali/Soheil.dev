import * as React from "react"
import { ArrowUpRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
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

        <TooltipProvider>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
              <div className="absolute top-4 right-4">
                <Tooltip>
                  <TooltipTrigger
                      render={
                        <span
                          aria-label="View case study"
                          className="inline-flex size-8 items-center justify-center rounded-lg bg-muted text-secondary transition-colors group-hover:bg-accent group-hover:text-primary-foreground"
                        />
                      }
                    >
                      <ArrowUpRight className="size-4" />
                    </TooltipTrigger>
                    <TooltipContent>View full case study</TooltipContent>
                  </Tooltip>
                </div>
              <div className="flex h-full flex-col p-8">
                <div className="flex flex-1 flex-col gap-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="text-sm font-medium text-accent">{study.client}</p>
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
                  <h3 className="text-2xl font-semibold tracking-tight text-ink">
                    {study.title}
                  </h3>
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
        </TooltipProvider>
      </div>

      <CaseStudyDialog
        study={activeStudy}
        open={open}
        onOpenChange={setOpen}
      />
    </section>
  )
}
