import siteData from "@/data.json"

export type CaseStudy = {
  id: "finance-bi" | "retail-analytics" | "it-operations"
  client: string
  title: string
  tags: string[]
  problem: string
  approach: string
  impact: string
  timeline: string
  role: string
  howBuilt: {
    schemaLabel: string
    dax: string
    drillThrough: string
  }
}

export const data = siteData

export const profile = siteData.profile
export const navLinks = siteData.navLinks
export const impactStats = siteData.impactStats
export const projects = siteData.projects
export const caseStudies = siteData.caseStudies as CaseStudy[]
export const experience = siteData.experience
export const skills = siteData.skills
export const certifications = siteData.certifications
export const education = siteData.education
export const contact = siteData.contact
