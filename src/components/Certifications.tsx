import { ExternalLink, BadgeCheck, GraduationCap } from "lucide-react"

import { SectionHeader } from "@/components/SectionHeader"
import { certifications, education } from "@/lib/siteData"

export function Certifications() {
  return (
    <section
      id="certifications"
      aria-label="Certifications and education"
      className="mx-auto max-w-[1280px] px-6 py-24 sm:py-32 md:px-8"
    >
      <SectionHeader
        eyebrow={certifications.eyebrow}
        title={certifications.title}
        subtitle={certifications.subtitle}
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {certifications.items.map((cert) => (
          <div
            key={cert.title}
            className="flex flex-col rounded-xl border bg-card p-6 shadow-sm transition-colors duration-300 hover:border-accent/20"
          >
            <span className="flex size-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <BadgeCheck className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mt-4 text-sm leading-snug font-semibold text-ink">
              {cert.title}
            </h3>
            <p className="mt-1 text-xs text-secondary">
              {cert.issuer} · {cert.date}
            </p>
            {cert.verifyUrl && (
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:underline"
              >
                Verify credential
                <ExternalLink className="size-3.5" />
              </a>
            )}
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="mb-6 text-lg font-semibold text-ink">{education.title}</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {education.items.map((edu) => (
            <div
              key={edu.degree}
              className="flex items-start gap-4 rounded-xl border bg-card p-6 shadow-sm transition-colors duration-300 hover:border-accent/20"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <GraduationCap className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h4 className="text-sm leading-snug font-semibold text-ink">
                  {edu.degree}
                </h4>
                <p className="mt-1 text-xs text-secondary">{edu.institution}</p>
                <p className="mt-0.5 text-xs text-tertiary">{edu.dates}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
