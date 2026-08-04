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

export const caseStudies: CaseStudy[] = [
  {
    id: "finance-bi",
    client: "Himalaya Wellness Company",
    title: "FB Dubai — Finance BI Dashboard",
    tags: ["Power BI", "Microsoft Fabric", "Direct Lake", "DAX"],
    problem:
      "The finance team at the Dubai unit reconciled figures across systems manually, and a single number could differ depending on who pulled it. Leadership needed one trusted view of P&L, receivables, and working capital.",
    approach:
      "Built a parameter-driven semantic model in Microsoft Fabric, then layered dynamic slicers and parameter-driven visuals over it. Every KPI was validated back to source SQL in SSMS before sign-off.",
    impact:
      "100% KPI accuracy signed off in UAT — figures now match SSMS exports exactly, eliminating cross-team reconciliation disputes.",
    timeline: "Jun 2025 – Mar 2026",
    role: "Power BI Developer",
    howBuilt: {
      schemaLabel:
        "Star schema with a single fact table (GL transactions) joined to Date, Account, Cost Centre, and Entity dimension tables — one row per ledger entry.",
      dax: `Total Revenue =
    CALCULATE(
        SUM('GL Transactions'[Amount]),
        'Account'[Type] = "Revenue"
    )

Days Sales Outstanding =
    DIVIDE(
        SUM('GL Transactions'[AR Balance]),
        [Total Revenue] / 360
    )`,
      drillThrough:
        "Direct Lake mode enables drill-through from the monthly P&L visual to transaction-level GL lines. TODO(Abdul): supply real/sanitized DAX measures.",
    },
  },
  {
    id: "retail-analytics",
    client: "Himalaya Wellness Company",
    title: "Retail Analytics Dashboard",
    tags: ["Power BI", "Star Schema", "Data Quality", "Power Query"],
    problem:
      "Sales and inventory data lived in separate exports with duplicated records and inconsistent product codes, so gross-margin numbers were unreliable week to week.",
    approach:
      "Refined the model into a clean star schema, deduplicating transactions in Power Query and standardizing product keys before they ever reached the semantic layer.",
    impact:
      "Cut data-prep time per refresh and made sales/inventory trends trustworthy enough to drive weekly stock decisions.",
    timeline: "Aug 2025 – Dec 2025",
    role: "BI Analyst",
    howBuilt: {
      schemaLabel:
        "Fact table of line-item sales joined to Product, Store, Date, and Promotion dimensions; inventory snapshot fact joined to the same dimensions.",
      dax: `Gross Margin % =
    DIVIDE(
        [Sales] - [COGS],
        [Sales]
    )

Inventory Turnover =
    DIVIDE(
        [COGS],
        AVERAGE('Inventory Snapshot'[Stock Value])
    )`,
      drillThrough:
        "Sales visuals drill through to store-level transaction lines to investigate anomalies before they're reported upward. TODO(Abdul): supply real/sanitized DAX measures.",
    },
  },
  {
    id: "it-operations",
    client: "Himalaya Wellness Company",
    title: "FB IT — IT Operations Dashboard",
    tags: ["Power BI", "Microsoft Fabric", "Galaxy Model", "Direct Lake"],
    problem:
      "An existing Galaxy semantic model had crossed filter directions that produced double-counted incident metrics, so service-desk KPIs couldn't be trusted in leadership reviews.",
    approach:
      "Mapped the conflicting table relationships, fixed the Galaxy model's filter flow, and re-tested every measure against source system exports.",
    impact:
      "Resolved 10+ conflicting table relationships, restoring trustworthy incident and service-level metrics across the IT ops dashboard.",
    timeline: "Oct 2025 – Feb 2026",
    role: "BI Developer",
    howBuilt: {
      schemaLabel:
        "Galaxy model — two fact tables (Incidents, Change Requests) sharing common Date and Employee dimensions via a conformed set of shared tables.",
      dax: `Open Incidents =
    CALCULATE(
        COUNTROWS('Incidents'),
        'Incidents'[Status] IN { "New", "In Progress", "On Hold" }
    )

MTTR (Hours) =
    AVERAGE('Incidents'[Resolution Hours])`,
      drillThrough:
        "Incident trend visuals drill through to individual ticket records in Direct Lake mode, bypassing import refresh lag. TODO(Abdul): supply real/sanitized DAX measures.",
    },
  },
]
