import { SectionHeader } from "@/components/SectionHeader"
import { experience } from "@/lib/siteData"

export function Experience() {
  return (
    <section
      id="experience"
      aria-label="Experience"
      className="mx-auto flex min-h-screen w-full items-center"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 py-24 sm:py-32 md:px-8">
        <SectionHeader
          eyebrow="Career"
          title="Experience"
          subtitle="My professional journey and the impact I've made."
        />

        <div className="grid w-full grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-[140px_1fr]">
        {experience.map((role) => (
          <div key={role.title} className="contents">
            <div className="pt-1 text-sm text-tertiary">{role.dates}</div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-ink">
                {role.title}
              </h3>
              <p className="text-sm text-secondary">
                {role.company} · {role.location}
              </p>
              <ul className="mt-4 space-y-3">
                {role.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2.5 text-secondary">
                    <span
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  )
}
