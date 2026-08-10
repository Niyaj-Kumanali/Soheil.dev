import siteData from "@/data.json"

export type CaseStudy = {
  id: "finance-bi" | "retail-analytics" | "it-operations"
  type: "company" | "personal"
  client: string
  title: string
  description: string
  bullets: string[]
  tags: string[]
  problem: string
  approach: string
  impact: string
  timeline: string
  role: string
  visual: "finance" | "retail" | "it"
  howBuilt: {
    schemaLabel: string
    drillThrough: string
  }
}

export const data = siteData

export const profile = siteData.profile
export const navLinks = siteData.navLinks
export const about = siteData.about
export const impactStats = siteData.impactStats
export const projects = siteData.projects
export const caseStudies = siteData.caseStudies as CaseStudy[]
export const experience = siteData.experience
export const skills = siteData.skills
export const certifications = siteData.certifications
export const education = siteData.education
export const contact = siteData.contact
