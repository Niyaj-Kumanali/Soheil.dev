import { Download } from "lucide-react"
import { LinkedInIcon } from "@/components/LinkedInIcon"

export function Footer() {
  return (
    <footer className="border-t border-border py-6">
      <div className="mx-auto flex max-w-[1120px] flex-col items-center justify-between gap-3 px-6 text-xs text-tertiary sm:flex-row md:px-8">
        <p>© 2026 Abdul Hameed Sohail</p>
        <div className="flex items-center gap-4">
          <a
            href="/Abdul_Hameed_Sohail.pdf"
            download="Abdul_Hameed_Sohail.pdf"
            className="inline-flex items-center gap-1 hover:text-secondary"
          >
            <Download className="size-3.5" />
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/abdul-hameed-sohail"
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
