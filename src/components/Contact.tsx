import { Button } from "@/components/ui/button"
import { Download, Mail, Phone } from "lucide-react"
import { LinkedInIcon } from "@/components/LinkedInIcon"

export function Contact() {
  return (
    <section
      id="contact"
      aria-label="Contact"
      className="border-t border-border bg-bg-subtle py-20"
    >
      <div className="mx-auto max-w-2xl px-6 text-center md:px-8">
        <h2 className="text-4xl font-semibold tracking-tight text-primary md:text-5xl">
          Let's talk data.
        </h2>
        <p className="mt-4 text-secondary">
          Whether you're hiring for a BI team or need a second opinion on a
          dashboard, my inbox is open.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="mailto:abdulsohail884@gmail.com">
            <Button size="lg">
              <Mail data-icon="inline-start" />
              Email Me
            </Button>
          </a>
          <a
            href="/Abdul_Hameed_Sohail.pdf"
            download="Abdul_Hameed_Sohail.pdf"
          >
            <Button size="lg" variant="outline">
              <Download data-icon="inline-start" />
              Download Resume
            </Button>
          </a>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-tertiary">
          <a
            href="tel:+919606166837"
            className="flex items-center gap-1.5 hover:text-secondary"
          >
            <Phone className="size-4" />
            +91 9606166837
          </a>
          <a
            href="https://www.linkedin.com/in/abdul-hameed-sohail"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-secondary"
            aria-label="LinkedIn profile"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
