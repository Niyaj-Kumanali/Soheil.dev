import { ExternalLink, BadgeCheck } from "lucide-react"

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

const certifications = [
  {
    title: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)",
    issuer: "Microsoft",
    date: "Oct 2025",
    verifyUrl: "#", // TODO(Abdul): paste real Microsoft Learn/Credly badge URL
  },
  {
    title: "Business Analytics",
    issuer: "ExcelR Solution Institute, Bangalore",
    date: "Aug 2024",
    verifyUrl: null,
  },
]

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Jain University, Bangalore",
    dates: "Jul 2025 – Present",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Ramaiah Institute of Business Studies, Bangalore",
    dates: "Sep 2020 – May 2024",
  },
]

export function Certifications() {
  return (
    <section
      id="certifications"
      aria-label="Certifications and education"
      className="mx-auto max-w-[1120px] px-6 py-20 md:px-8 md:py-28"
    >
      <div className="mb-12">
        <p className="text-sm font-medium tracking-wide text-accent uppercase">
          Verified
        </p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight text-primary md:text-5xl">
          Certifications
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {certifications.map((cert) => (
          <Card key={cert.title}>
            <CardHeader className="flex-row items-start gap-3">
              <BadgeCheck className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <CardTitle>{cert.title}</CardTitle>
                <CardDescription>
                  {cert.issuer} · {cert.date}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              {cert.verifyUrl ? (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-dark"
                >
                  Verify credential
                  <ExternalLink className="size-4" />
                </a>
              ) : (
                <span className="text-sm text-tertiary">
                  TODO(Abdul): add verification link
                </span>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 border-t border-border pt-8">
        <h3 className="mb-4 text-lg font-semibold text-primary">Education</h3>
        <dl className="grid grid-cols-1 gap-y-4 md:grid-cols-2">
          {education.map((edu) => (
            <div key={edu.degree} className="flex flex-col gap-0.5">
              <dt className="text-sm font-medium text-primary">{edu.degree}</dt>
              <dd className="text-sm text-secondary">{edu.institution}</dd>
              <dd className="text-xs text-tertiary">{edu.dates}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
