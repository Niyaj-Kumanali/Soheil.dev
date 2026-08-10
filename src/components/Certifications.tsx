import { Award, BadgeCheck, ExternalLink } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { SectionHeader } from "@/components/SectionHeader"
import { certifications } from "@/lib/siteData"

const certIcons = {
  badgeCheck: BadgeCheck,
  award: Award,
} as const

export function Certifications() {
  return (
    <section
      id="certifications"
      aria-label="Certifications"
      className="flex min-h-screen items-center bg-muted/40 py-24 sm:py-32"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-8">
        <SectionHeader
          eyebrow={certifications.eyebrow}
          title={certifications.title}
          subtitle={certifications.subtitle}
        />

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          {certifications.items.map((cert) => {
            const Icon = certIcons[cert.icon as keyof typeof certIcons] ?? BadgeCheck
            return (
              <div
                key={cert.title}
                className="flex flex-col rounded-xl border bg-card p-6 shadow-sm transition-colors duration-300 hover:border-accent/20"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  {cert.code && (
                    <Badge variant="outline" className="border-accent/30 bg-accent/10 font-mono text-accent">
                      {cert.code}
                    </Badge>
                  )}
                </div>
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
            )
          })}
        </div>
      </div>
    </section>
  )
}
