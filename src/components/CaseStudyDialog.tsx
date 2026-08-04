import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import type { CaseStudy } from "@/lib/caseStudies"

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
      <DialogContent className="max-h-[85vh] max-w-3xl overflow-y-auto">
        {study && (
          <>
            <DialogHeader className="gap-3 pr-8">
              <DialogTitle className="text-2xl font-semibold">
                {study.title}
              </DialogTitle>
              <DialogDescription className="text-sm text-secondary">
                Case study — recreated with a public dataset in place of
                confidential client data.
              </DialogDescription>
            </DialogHeader>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-secondary">
              <span>
                <span className="font-medium text-foreground">Client:</span>{" "}
                {study.client}
              </span>
              <span>
                <span className="font-medium text-foreground">Timeline:</span>{" "}
                {study.timeline}
              </span>
              <span>
                <span className="font-medium text-foreground">Role:</span>{" "}
                {study.role}
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <Section title="Problem">{study.problem}</Section>
            <Section title="Approach">{study.approach}</Section>
            <Section title="Impact">
              <span className="font-semibold text-foreground">
                {study.impact}
              </span>
            </Section>

            <Section title="How it was built">
              <div className="space-y-4">
                <div>
                  <h4 className="mb-1 text-sm font-semibold">Data model</h4>
                  <p className="text-sm text-secondary">
                    {study.howBuilt.schemaLabel}
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 text-sm font-semibold">DAX measures</h4>
                  <pre className="overflow-x-auto rounded-lg border bg-muted/50 p-4 font-mono text-[13px] leading-relaxed text-foreground">
                    <code>{study.howBuilt.dax}</code>
                  </pre>
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-semibold">Drill-through</h4>
                  <p className="text-sm text-secondary">
                    {study.howBuilt.drillThrough}
                  </p>
                </div>
              </div>
            </Section>
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
  children: React.ReactNode
}) {
  return (
    <div>
      <h3 className="mb-1.5 text-base font-semibold">{title}</h3>
      <p className="text-sm leading-relaxed text-secondary">{children}</p>
    </div>
  )
}
