import { SectionHeader } from "@/components/SectionHeader"
import { about } from "@/lib/siteData"

export function About() {
  return (
    <section
      id="about"
      aria-label="About me"
      className="mx-auto max-w-[1280px] px-6 py-24 sm:py-32 md:px-8"
    >
      <SectionHeader eyebrow={about.eyebrow} title={about.title} />
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-4">
          {about.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="text-lg leading-relaxed text-secondary"
            >
              {paragraph}
            </p>
          ))}
        </div>
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h3 className="text-xs font-semibold tracking-widest text-tertiary uppercase">
            Highlights
          </h3>
          <ul className="mt-4 flex flex-col gap-3">
            {about.highlights.map((highlight) => (
              <li key={highlight} className="flex items-center gap-3 text-sm text-secondary">
                <span
                  className="size-1.5 shrink-0 rounded-full bg-accent"
                  aria-hidden="true"
                />
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
