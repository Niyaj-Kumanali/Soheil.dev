import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import type { ReactNode } from "react"
import { Badge } from "@/components/ui/badge"
import { type CaseStudy } from "@/lib/siteData"

export function CaseStudyDialog({
  study,
  open,
  onOpenChange,
}: {
  study: CaseStudy | null
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[85vh] max-w-5xl gap-0 overflow-hidden p-0">
        {study && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-[240px_1fr]">
              <aside className="border-b bg-muted/40 p-6 md:border-r md:border-b-0">
                <DialogHeader className="gap-3 pr-10 md:pr-0">
                  <DialogTitle className="text-xl font-semibold">
                    {study.title}
                  </DialogTitle>
                  <DialogDescription className="text-sm text-secondary">
                    {study.type === "company"
                      ? "Company project. Case study based on client work, described with confidential data omitted."
                      : "Personal project built to explore a tool or technique."}
                  </DialogDescription>
                </DialogHeader>

                <dl className="mt-6 space-y-4 text-sm">
                  <div>
                    <dt className="text-xs font-semibold tracking-widest text-tertiary uppercase">
                      Type
                    </dt>
                    <dd className="mt-1">
                      <Badge
                        variant="outline"
                        className={
                          study.type === "company"
                            ? "border-accent/30 bg-accent/10 text-accent"
                            : "border-chart-purple/30 bg-chart-purple/10 text-chart-purple"
                        }
                      >
                        {study.type === "company" ? "Company" : "Personal"}
                      </Badge>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold tracking-widest text-tertiary uppercase">
                      Client
                    </dt>
                    <dd className="mt-1 font-medium text-foreground">
                      {study.client}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold tracking-widest text-tertiary uppercase">
                      Timeline
                    </dt>
                    <dd className="mt-1 text-secondary">{study.timeline}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold tracking-widest text-tertiary uppercase">
                      Role
                    </dt>
                    <dd className="mt-1 text-secondary">{study.role}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold tracking-widest text-tertiary uppercase">
                      Stack
                    </dt>
                    <dd className="mt-2 flex flex-wrap gap-1.5">
                      {study.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </dd>
                  </div>
                </dl>
              </aside>

              <div className="overflow-y-auto p-6 [scrollbar-width:none] md:p-8 [&::-webkit-scrollbar]:hidden">
                <div className="space-y-6">
                  <Section title="Description">{study.description}</Section>
                  <Section title="Problem">{study.problem}</Section>
                  <Section title="Approach">{study.approach}</Section>
                  <Section title="Impact">
                    <span className="font-semibold text-foreground">
                      {study.impact}
                    </span>
                  </Section>

                  <div className="border-t border-border pt-6">
                    <h3 className="mb-4 text-lg font-semibold">How it was built</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="mb-1 text-sm font-semibold">Data model</h4>
                        <p className="text-sm leading-relaxed text-secondary">
                          {study.howBuilt.schemaLabel}
                        </p>
                      </div>
                      <div>
                        <h4 className="mb-1 text-sm font-semibold">Drill-through</h4>
                        <p className="text-sm leading-relaxed text-secondary">
                          {study.howBuilt.drillThrough}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}

function Section({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <div>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-base leading-relaxed text-secondary">{children}</p>
    </div>
  )
}
