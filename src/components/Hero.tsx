import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, MapPin } from "lucide-react"
import { LinkedInIcon } from "@/components/LinkedInIcon"
import { profile } from "@/lib/siteData"

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Intro"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      {/* background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-1/4 right-1/4 size-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 size-64 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-12 px-6 py-16 md:px-8 lg:grid-cols-2 lg:gap-20">
        <div className="animate-in fade-in duration-300">
          <p className="text-sm font-medium tracking-widest text-accent uppercase">
            {profile.eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {profile.headline}
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-secondary sm:text-xl">
            {profile.subhead}
          </p>
          <div className="mt-8 flex flex-wrap gap-3 pt-2">
            <a href="#projects">
              <Button size="lg">
                View Projects
                <ArrowRight data-icon="inline-end" />
              </Button>
            </a>
            <a href={profile.resumeUrl} download={profile.resumeFileName}>
              <Button size="lg" variant="outline">
                Download Resume
              </Button>
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 pt-2 text-sm text-tertiary">
            <span className="flex items-center gap-1.5">
              <MapPin className="size-4" />
              {profile.location}
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-1.5 transition-colors hover:text-secondary"
            >
              <Mail className="size-4" />
              {profile.email}
            </a>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-secondary"
              aria-label="LinkedIn profile"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="relative mx-auto hidden w-full max-w-[420px] lg:block">
          <div
            className="absolute -right-4 -bottom-4 h-full w-full rounded-2xl border-2 border-accent/20"
            aria-hidden="true"
          />
          <div
            className="absolute -top-4 -left-4 size-24 rounded-full bg-accent/10 blur-2xl"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-2xl border-2 border-border bg-card shadow-xl">
            <img
              src={profile.profileImage}
              alt={profile.profileImageAlt}
              className="aspect-square w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
