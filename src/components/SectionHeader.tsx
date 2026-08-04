import { cn } from "@/lib/utils"

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = false,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
  center?: boolean
}) {
  return (
    <div
      className={cn(
        "mb-14 md:mb-16",
        center && "mx-auto max-w-2xl text-center"
      )}
    >
      {eyebrow && (
        <p className="text-sm font-medium tracking-widest text-accent uppercase">
          {eyebrow}
        </p>
      )}
      <div
        className={cn(
          "mt-3 mb-6 h-1 w-12 rounded-full bg-accent",
          center && "mx-auto"
        )}
        aria-hidden="true"
      />
      <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-3 text-lg leading-relaxed text-secondary",
            center && "mx-auto max-w-2xl"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
