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
              <CaseVisual variant={study.visual} />
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

function CaseVisual({ variant }: { variant: CaseStudy["visual"] }) {
  return (
    <div
      className="border-b border-border bg-gradient-to-br from-muted/70 via-muted/30 to-transparent p-5"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 400 120"
        className="h-24 w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <g stroke="var(--border)" strokeWidth="1">
          <line x1="0" y1="24" x2="400" y2="24" />
          <line x1="0" y1="60" x2="400" y2="60" />
          <line x1="0" y1="96" x2="400" y2="96" />
        </g>
        {variant === "finance" && (
          <g>
            <rect x="42" y="66" width="40" height="34" rx="4" fill="var(--chart-blue)" />
            <rect x="96" y="52" width="40" height="48" rx="4" fill="var(--chart-purple)" />
            <rect x="150" y="38" width="40" height="62" rx="4" fill="var(--chart-coral)" />
            <rect x="204" y="58" width="40" height="42" rx="4" fill="var(--chart-blue)" opacity="0.7" />
            <rect x="258" y="28" width="40" height="72" rx="4" fill="var(--chart-purple)" opacity="0.9" />
            <rect x="312" y="44" width="40" height="56" rx="4" fill="var(--chart-coral)" opacity="0.75" />
          </g>
        )}
        {variant === "retail" && (
          <g>
            <polyline
              fill="none"
              stroke="var(--chart-blue)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              points="42,88 96,72 150,78 204,50 258,56 312,30"
            />
            {[
              [42, 88],
              [96, 72],
              [150, 78],
              [204, 50],
              [258, 56],
              [312, 30],
            ].map(([cx, cy]) => (
              <circle key={cx} cx={cx} cy={cy} r="5" fill="var(--bg-card)" stroke="var(--chart-purple)" strokeWidth="3" />
            ))}
          </g>
        )}
        {variant === "it" && (
          <g>
            <circle
              cx="120"
              cy="60"
              r="34"
              fill="none"
              stroke="var(--chart-blue)"
              strokeWidth="16"
              strokeDasharray="142 72"
              strokeLinecap="round"
            />
            <circle
              cx="120"
              cy="60"
              r="34"
              fill="none"
              stroke="var(--chart-purple)"
              strokeWidth="16"
              strokeDasharray="42 172"
              strokeLinecap="round"
              strokeDashoffset="-14"
            />
            <rect x="210" y="52" width="42" height="32" rx="4" fill="var(--chart-coral)" />
            <rect x="268" y="38" width="42" height="46" rx="4" fill="var(--chart-purple)" />
            <rect x="326" y="60" width="42" height="24" rx="4" fill="var(--chart-blue)" opacity="0.7" />
          </g>
        )}
      </svg>
    </div>
  )
}
