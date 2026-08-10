import { Button } from "@/components/ui/button"
import { Download, Mail, Phone } from "lucide-react"
import { LinkedInIcon } from "@/components/LinkedInIcon"
import { SectionHeader } from "@/components/SectionHeader"
import { contact, profile } from "@/lib/siteData"

const contactIcons = {
  email: Mail,
  phone: Phone,
  linkedin: LinkedInIcon,
} as const

export function Contact() {
  return (
    <section
      id="contact"
      aria-label="Contact"
      className="flex min-h-screen items-center bg-muted/40 py-24 sm:py-32"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-8">
        <SectionHeader
          eyebrow={contact.eyebrow}
          title={contact.title}
          subtitle={contact.subtitle}
          center
        />

        <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a href={`mailto:${profile.email}`} className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto">
              <Mail data-icon="inline-start" />
              {contact.emailCta}
            </Button>
          </a>
          <a
            href={profile.resumeUrl}
            download={profile.resumeFileName}
            className="w-full sm:w-auto"
          >
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              <Download data-icon="inline-start" />
              {contact.resumeCta}
            </Button>
          </a>
        </div>

        <div className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
          {contact.rows.map((row) => {
            const Icon = contactIcons[row.type as keyof typeof contactIcons]
            const external = row.type === "linkedin"
            return (
              <a
                key={row.label}
                href={row.href}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="group flex items-center gap-4 rounded-xl border bg-card p-4 shadow-sm transition-colors duration-300 hover:border-accent/20"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-primary-foreground">
                  <Icon className="size-5" />
                </span>
                <span className="min-w-0 text-sm font-medium break-all text-ink">
                  {row.label}
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
