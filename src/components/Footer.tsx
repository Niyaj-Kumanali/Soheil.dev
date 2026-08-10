import { Download, Mail } from "lucide-react"
import { LinkedInIcon } from "@/components/LinkedInIcon"
import { profile } from "@/lib/siteData"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40 py-6">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-3 px-6 text-xs text-tertiary sm:flex-row md:px-8">
        <p>© 2026 {profile.name}</p>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-1 hover:text-secondary"
          >
            <Mail className="size-3.5" />
            Email
          </a>
          <a
            href={profile.resumeUrl}
            download={profile.resumeFileName}
            className="inline-flex items-center gap-1 hover:text-secondary"
          >
            <Download className="size-3.5" />
            Resume
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 hover:text-secondary"
            aria-label="LinkedIn profile"
          >
            <LinkedInIcon className="size-3.5" />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
