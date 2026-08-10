import { GraduationCap } from "lucide-react"

import { SectionHeader } from "@/components/SectionHeader"
import { education } from "@/lib/siteData"

export function Education() {
  return (
    <section
      id="education"
      aria-label="Education"
      className="mx-auto flex min-h-screen w-full items-center"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 py-24 sm:py-32 md:px-8">
        <SectionHeader
          eyebrow={education.eyebrow}
          title={education.title}
          subtitle={education.subtitle}
        />
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
        {education.items.map((edu) => (
          <div
            key={edu.degree}
            className="flex items-start gap-4 rounded-xl border bg-card p-6 shadow-sm transition-colors duration-300 hover:border-accent/20"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <GraduationCap className="size-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-sm leading-snug font-semibold text-ink">
                {edu.degree}
              </h3>
              <p className="mt-1 text-xs text-secondary">{edu.institution}</p>
              <p className="mt-0.5 text-xs text-tertiary">{edu.dates}</p>
              {edu.mode && (
                <p className="mt-1.5 text-xs text-secondary italic">{edu.mode}</p>
              )}
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  )
}
