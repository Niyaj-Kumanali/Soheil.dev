# AGENTS.md — Abdul Hameed Sohail | BI Analyst Portfolio

This file gives an AI coding agent (Claude Code, Cursor, etc.) everything needed to
build the portfolio site in one pass. Follow it section by section. Where content is
marked `TODO(Abdul)`, use realistic placeholder content and flag it clearly so it can
be swapped later.

**Reference site for restraint/tone:** niyazdev.vercel.app — mirror its calm,
low-motion, content-first feel. This is not a template to copy visually (Abdul is
BI, not full-stack dev, so the content shape differs), but the *level* of animation,
whitespace, and typographic confidence should match it closely.

---

## 1. Project Overview

**Who:** Abdul Hameed Sohail — Business Intelligence Analyst / Power BI Developer /
Microsoft Fabric Specialist. 12 months experience, PL-300 certified, based in
Bangalore, India.

**Goal:** A recruiter-facing portfolio that proves BI competence visually — not a
generic developer portfolio. The centerpiece is interactive/visual dashboard
showcases, not code repos.

**Primary audience:** Hiring managers / recruiters scanning for 30–90 seconds.
Every section must front-load the "so what" (impact/metric) before detail.

**Tone:** Clean, analytical, confident. Not flashy dev-portfolio dark mode — more
"data studio" aesthetic (light background, disciplined color use, generous
whitespace, chart-like accents). Calm and static, not busy.

---

## 2. Tech Stack

- **Framework:** React 18 + TypeScript, scaffolded with **Vite** (not Next.js —
  this is a static SPA, no server rendering needed, keeps the build simple)
- **Styling:** Tailwind CSS
- **Components:** **shadcn/ui** — install via CLI, use its primitives directly
  rather than hand-rolling. Components needed for this build:
  - `button` — CTAs (Download Resume, View Dashboards)
  - `card` — dashboard showcase cards, stat cards, cert cards
  - `badge` — skill chips, tag chips on dashboard cards
  - `separator` — section dividers where needed
  - `dialog` — **required**, used for the expanded case-study view (see Section
    4 and 5.5) — this is how "View full case study" opens without a route change
  - `tooltip` — optional, for cert badge verification links
  - `sonner` or `toast` — NOT needed, no forms with async feedback
  - `navigation-menu` or a simple custom nav (shadcn's nav components are overkill
    for 4 links — a plain `<nav>` with Tailwind is fine)
- **Routing: none.** This is a **single-page application** — one HTML page, one
  URL, no `react-router-dom`, no multi-page navigation. All nav links are anchor
  links to in-page sections (`#dashboards`, `#experience`, `#skills`, `#contact`),
  scrolled to via native `scroll-behavior: smooth` (CSS) or `element.scrollIntoView()`
  — do not add a router just to manage anchor state.
- **Icons:** `lucide-react` (shadcn's default icon set — stay consistent)
- **Charts:** `recharts`, used minimally:
  - One static (non-animated) hero illustration built from simple bar/line SVG
    shapes — no live chart library needed here, plain SVG is fine and lighter
  - Real mini KPI visuals in dashboard cards, if used, render once, no transition
- **Fonts:** `Inter` via `@fontsource/inter` or Google Fonts `<link>`, loaded once
  in `index.html`
- **Deployment target:** GitHub Pages or Vercel (static build output from
  `vite build` → `dist/`)
- **Dashboard embeds:** Power BI "Publish to Web" iframe embeds (see Section 6)

Do not add a CMS, backend, auth, or database. No animation library beyond what
Tailwind's built-in `transition-*` utilities provide — **do not install Framer
Motion**. See Section 3.5.

---

## 3. Visual Theme

### 3.1 Design direction
Reference points: Power BI Service UI's clarity, Linear.app's restraint, and
**your own portfolio (niyazdev.vercel.app)** for how little it moves. Light-first
theme, one confident accent color used sparingly (never more than 1–2 accent
touches visible per viewport). Nothing should compete with the dashboard
screenshots for attention — they are the product.

### 3.2 Color Palette

```css
:root {
  /* Base */
  --bg: #FAFAF9;              /* warm off-white, not pure white */
  --bg-elevated: #FFFFFF;     /* cards */
  --bg-subtle: #F1F1EF;       /* section alternation */
  --border: #E4E4E1;

  /* Text */
  --text-primary: #17171A;
  --text-secondary: #5C5C5F;
  --text-tertiary: #8A8A8D;

  /* Accent — warm orange, used as THE signature color */
  --accent: #F2921A;          /* warm orange — same warm/confident family as the
                                  yellow on niyazdev.vercel.app, distinct hue so
                                  Abdul's site reads as its own identity */
  --accent-dark: #C97614;
  --accent-tint: #FEEFD8;

  /* Secondary accent for data-viz variety (charts only, not UI chrome) */
  --chart-blue: #2F6FED;
  --chart-purple: #8B7FE8;
  --chart-coral: #E8664A;

  /* Semantic */
  --success: #1A8B4C;
  --focus-ring: #F2921A;
}

[data-theme="dark"] {
  --bg: #121214;
  --bg-elevated: #19191C;
  --bg-subtle: #1E1E21;
  --border: #2C2C30;
  --text-primary: #F5F5F4;
  --text-secondary: #A8A8AB;
  --text-tertiary: #737376;
  --accent: #F7A83D;          /* lightened for dark-mode contrast */
  --accent-tint: #2E2210;
}
```

**Rule:** `--accent` is used only for: primary CTA buttons, active nav state, key
metric highlights, and the logo mark. Never as a full section background. Charts
use the blue/purple/coral trio (kept distinct from `--accent` so decorative charts
don't blend into UI chrome — `chart-coral` sits close to the accent, so lead with
blue/purple in any chart and use coral sparingly).

Map these CSS variables into `tailwind.config.ts` under `theme.extend.colors` so
they're usable as `bg-accent`, `text-accent`, `border-accent`, etc., and so
shadcn's own theme tokens (`--primary`, `--primary-foreground`) point at the same
values — don't run two parallel color systems.

Include a light/dark toggle — persisted via `localStorage`, default to system
preference. Use shadcn's standard dark-mode pattern (`class` strategy on `<html>`).

### 3.3 Typography

- **Headings:** `Inter` (700/600) — tight letter-spacing (-0.02em) at large sizes.
- **Body:** `Inter` (400/500).
- **Numeric/KPI callouts:** tabular numerals (`font-variant-numeric: tabular-nums`
  via Tailwind's `tabular-nums` class) — BI people notice when numbers don't
  align.
- Scale: 12 / 14 / 16 / 18 / 24 / 32 / 48 / 64px, line-height 1.5 for body, 1.1–1.2
  for headings.

### 3.4 Layout & spacing

- Max content width: `1120px` (`max-w-[1120px] mx-auto`), side padding
  `px-6 md:px-8`.
- Section vertical rhythm: `py-20 md:py-28` (slightly tighter than a typical dev
  portfolio — recruiters shouldn't scroll excessively).
- Cards: `rounded-xl`, `border` (1px, `--border`), shadow only on hover
  (`shadow-sm` → `shadow-md`), never a resting drop shadow.
- Grid-driven layout throughout — should read as a well-modeled data grid,
  reinforcing the BI theme without being literal about it.

### 3.5 Motion — deliberately minimal

This is the most important constraint in this file: **the site should feel mostly
static, like your own portfolio.** Do not build a scroll-animation system.

- **No Framer Motion, no scroll-triggered stagger/fade libraries.**
- Allowed motion, using plain Tailwind `transition-colors` / `transition-shadow` /
  `transition-transform` utilities only:
  - Hover states: buttons darken slightly (`hover:bg-accent-dark`), cards lift by
    1px shadow change only (no scale/zoom on hover — a `scale-[1.02]` reads as
    "trying too hard" for a BI portfolio)
  - Theme toggle: instant or a 150ms color transition, nothing more
  - Page load: a single, one-time `animate-in fade-in duration-300` on the hero
    content is acceptable (shadcn ships `tailwindcss-animate` for exactly this) —
    do not repeat this pattern on every section as the user scrolls
- **Not allowed:** parallax, autoplay carousels, cursor-follow effects, staggered
  scroll-reveal on every section, spinning/pulsing decorative elements, animated
  gradient backgrounds.
- Respect `prefers-reduced-motion` regardless — disable even the hero fade-in if
  set.

---

## 4. Site Structure — Single Page, No Router

**This is a single-page application. One URL. No `react-router-dom`, no multiple
pages, no `/dashboards/:slug` routes.** Everything lives on `/` as stacked
`<section id="...">` blocks, and the navbar scrolls to them:

```
/  (single HTML page)
  ├── #hero
  ├── #dashboards      ← Dashboard Showcase
  ├── #experience
  ├── #skills
  ├── #certifications
  └── #contact
```

- Nav links (5.1) are plain `<a href="#dashboards">` anchors — smooth-scrolled via
  `html { scroll-behavior: smooth }` in global CSS, with `scroll-margin-top`
  applied to each `<section>` so the sticky nav doesn't cover the section heading
  on arrival.
- The 3 dashboard "case studies" that were previously separate routes are instead
  opened as an **in-page shadcn `<Dialog>`** triggered by "View full case study"
  on each card (see Section 5.5) — content appears in a modal over the current
  page, URL never changes, no navigation occurs.
- Resume is a direct file download (Section 6.1), not a route or section.
- No blog, no separate about/contact pages, no deep links beyond in-page anchors.

---

## 5. Field-by-Field Layout Spec (Home page, top to bottom)

Read this as a wireframe in prose — every field, its content source, and its
approximate placement/size. Build components in this exact order.

### 5.1 `<Nav>` — sticky, `h-16`, border-bottom on scroll (no shadow)

| Position | Field | Content | Notes |
|---|---|---|---|
| Left | Logo mark | "AHS" wordmark or small bar-chart glyph icon + "Abdul Hameed Sohail" (hide full name on mobile, show glyph only) | `text-accent` icon, `text-primary` text |
| Center/Right | Nav links | Dashboards · Experience · Skills · Contact | `text-secondary`, `hover:text-primary`, no underline animation — just color change |
| Right | Resume button | shadcn `<Button>` variant="default" (accent bg), "Resume" with a `Download` lucide icon | Links to `/Abdul_Hameed_Sohail.pdf`, `download` attr |
| Right | Theme toggle | Sun/Moon icon button, shadcn `<Button variant="ghost" size="icon">` | |

Mobile: collapse nav links into a shadcn `<Sheet>` triggered by a hamburger icon;
keep Resume button and theme toggle always visible.

### 5.2 `<Hero>` — two-column on desktop (`grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]`), stacks on mobile

**Left column (text):**

| Field | Content |
|---|---|
| Eyebrow | "Business Intelligence Analyst · PL-300 Certified" — `text-accent`, `text-sm font-medium uppercase tracking-wide` |
| H1 | "Turning raw data into decisions that ship." — `text-5xl md:text-6xl font-bold` |
| Subhead | "I build Power BI dashboards and Microsoft Fabric data pipelines that survive stakeholder scrutiny — 3 enterprise BI modules shipped for Himalaya Wellness Company in under a year." — `text-lg text-secondary max-w-xl` |
| CTA row | `<Button>View Dashboards →</Button>` (accent, links to `#dashboards`) + `<Button variant="outline">Download Resume</Button>` |
| Meta row | Bangalore, India · `mailto:abdulsohail884@gmail.com` · LinkedIn icon link — small icons + text, `text-sm text-tertiary`, `flex gap-4` |

**Right column (visual):**
A single static SVG illustration — simple bar chart bars + one line-chart path +
one donut ring, using `chart-blue`/`chart-purple`/`chart-coral`. **Render it fully
static, no entrance animation, no looping motion.** This is decoration that signals
"BI" at a glance, not an interactive element.

### 5.3 `<ImpactStrip>` — 4-column grid (`grid-cols-2 md:grid-cols-4`), directly below hero, no section heading needed

Each cell: shadcn `<Card>`, borderless variant (just padding + center-aligned
text), or plain divs with a vertical divider between them:

| Value | Label |
|---|---|
| `3` | Enterprise BI modules shipped |
| `100%` | KPI accuracy validated against SSMS |
| `10+` | Tables — Galaxy model conflicts resolved |
| `12 mo` | Production BI experience |

Value: `text-4xl font-bold tabular-nums text-primary`. Label: `text-sm text-secondary`.

### 5.4 `<DashboardShowcase id="dashboards">` — the core section

**Section header block** (centered, `max-w-2xl mx-auto text-center mb-12`):
- Eyebrow: "Selected Work"
- H2: "Dashboards I've built"
- Body: one sentence disclosing that shown dashboards are recreated with public
  datasets in place of confidential client data (builds trust, not hidden)

**3 stacked full-width cards** (not a 3-column grid — full width lets the
screenshot breathe; stack vertically with `space-y-8`), each an alternating
image-left/text-right, text-left/image-right layout (`lg:grid-cols-2`, alternate
`lg:flex-row-reverse` on even cards) — matches a common, calm case-study pattern
and avoids a busy grid of small thumbnails:

| Field | Content | Notes |
|---|---|---|
| Screenshot/embed | `<DashboardEmbed>` component, 16:9, `rounded-xl border` | See Section 6 for embed logic |
| Eyebrow | Client name — "Himalaya Wellness Company" | `text-accent text-sm` |
| Title | Module name — e.g. "FB Dubai — Finance BI Dashboard" | `text-2xl font-semibold` |
| Tag row | shadcn `<Badge variant="secondary">` chips: `Power BI` `Microsoft Fabric` `Direct Lake` `DAX` (module-specific subset) | |
| Problem | 1–2 sentences | `text-secondary` |
| Approach | 1–2 sentences | `text-secondary` |
| Impact | 1 sentence, bolded lead metric | e.g. "**100% KPI accuracy** signed off in UAT" |
| Link | "View full case study →" — button, `DialogTrigger` | Opens the shadcn `<Dialog>` in 5.5, no navigation, no URL change |

Map to his 3 real projects (used as internal keys for the dialog content, not
routes):
1. `finance-bi` — **FB Dubai — Finance BI Dashboard** (dynamic slicers,
   parameter-driven visuals, UAT discrepancy resolution)
2. `retail-analytics` — **Retail Analytics Dashboard** (star-schema refinement,
   sales/inventory data quality)
3. `it-operations` — **FB IT — IT Operations Dashboard** (Galaxy model fix,
   drill-through in Direct Lake mode)

### 5.5 Case study detail — shadcn `<Dialog>` (opens in place, same page)

Each dashboard card's "View full case study" button triggers a large `<Dialog>`
(`max-w-3xl`, scrollable content, `DialogContent className="max-h-[85vh] overflow-y-auto"`).
No routing, no new page — this is content the SPA already has loaded, just hidden
until opened:

| Order | Field | Content |
|---|---|---|
| 1 | `DialogHeader` / title | Module name — e.g. "FB Dubai — Finance BI Dashboard" |
| 2 | Hero image/embed | Full width `<DashboardEmbed>` inside the dialog, larger than the card version |
| 3 | Context row | Client · Timeline (Jun 2025 – Mar 2026) · Role · Stack tags — `flex flex-wrap gap-x-6 gap-y-2 text-sm text-secondary` |
| 4 | Problem | H3 + full paragraph (expanded from resume bullet) |
| 5 | Approach | H3 + full paragraph |
| 6 | Impact | H3 + full paragraph, key metric bolded/highlighted |
| 7 | "How it was built" | H3 + subsections: star-schema diagram (simple SVG box/line diagram of fact + dimension tables), DAX snippet (styled `<pre><code>` block, monospace, 1–2 illustrative measures — `TODO(Abdul): supply real/sanitized DAX`), drill-through flow note |
| 8 | Close | Default shadcn `Dialog` close (X icon, top-right) — no extra "back" link needed since it's a modal, not a page |

Store the 3 case studies' full content as a local data array/object (e.g.
`caseStudies.ts`) keyed by the same `finance-bi` / `retail-analytics` /
`it-operations` keys, and render whichever one matches the clicked card's key
inside the dialog — one `<CaseStudyDialog>` component reused for all three.

### 5.6 `<Experience id="experience">`

Section header: eyebrow "Career" / H2 "Experience". Vertical list (not a graphic
timeline with connecting lines/dots — that's more motion/visual complexity than
needed; a simple stacked list with a left-side date column reads cleanly and
calmly):

`grid grid-cols-[140px_1fr] gap-x-6 gap-y-10` (stacks to single column on mobile):

| Left column (date) | Right column (role block) |
|---|---|
| "Jun 2025 – Mar 2026" `text-sm text-tertiary` | **Business Intelligence Analyst — Intern** · Talentpace · Bengaluru, then 3 bullet points (verb-led, numbers bolded) |
| "Jun 2024 – Sep 2024" | **Business Analyst — Intern** · AI Variant · Bengaluru, then 2 bullet points |

### 5.7 `<Skills id="skills">`

Section header: eyebrow "Toolkit" / H2 "Skills". 5-column responsive grid
(`grid-cols-2 md:grid-cols-3 lg:grid-cols-5`), one card per group:

| Group | Icon (lucide-react) | Chips (shadcn `<Badge variant="outline">`) |
|---|---|---|
| Power BI | `BarChart3` | Dashboard Design, KPI Development, DAX & Measures, Drill-through, Bookmarks |
| Microsoft Fabric | `Workflow` | Dataflow Gen2, Direct Lake, Semantic Models, Data Pipeline |
| Data Modeling | `Table2` | Star Schema, Galaxy Model, Relationships, Filter Direction |
| SQL & Database | `Database` | Joins, Subqueries, Views, Stored Procedures, SSMS |
| Excel & ETL | `FileSpreadsheet` | Power Query (M), Pivot Tables, VLOOKUP, Data Cleaning |

Card: icon + group label at top (`font-semibold`), chips wrap below
(`flex flex-wrap gap-2`).

### 5.8 `<Certifications id="certifications">`

Section header: eyebrow "Verified" / H2 "Certifications". 2-column grid
(`grid-cols-1 md:grid-cols-2`), shadcn `<Card>` each:

| Field | Cert 1 | Cert 2 |
|---|---|---|
| Title | Microsoft Certified: Power BI Data Analyst Associate (PL-300) | Business Analytics |
| Issuer | Microsoft | ExcelR Solution Institute, Bangalore |
| Date | Oct 2025 | Aug 2024 |
| Link | "Verify credential →" — `TODO(Abdul): paste real Microsoft Learn/Credly badge URL` | — |

### 5.9 `<Education>` — folded into the same section as Certifications, or a
compact 2-row list directly below it, no separate heading needed if space is
tight:

| Degree | Institution | Dates |
|---|---|---|
| Master of Computer Applications (MCA) | Jain University, Bangalore | Jul 2025 – Present |
| Bachelor of Computer Applications (BCA) | Ramaiah Institute of Business Studies, Bangalore | Sep 2020 – May 2024 |

### 5.10 `<Contact id="contact">` / `<Footer>`

Centered block, `bg-subtle`, `py-20`:

| Field | Content |
|---|---|
| H2 | "Let's talk data." |
| Body | One line inviting outreach |
| CTA row | `<Button>Email Me</Button>` (mailto), `<Button variant="outline">Download Resume</Button>` |
| Meta row | Phone (+91 9606166837) · LinkedIn icon link |

Footer (below, `text-xs text-tertiary`, `py-6 border-t`): "© 2026 Abdul Hameed
Sohail" + repeated small Resume/LinkedIn links.

---

## 6. Dashboard Embed Strategy

Real client dashboards can't be shown. Two acceptable approaches, in order of
preference:

1. **Best:** Abdul rebuilds 1–2 of the 3 dashboards using a public dataset
   (Kaggle "Superstore" for Retail, a public finance/P&L sample for Finance) that
   mirrors the real dashboard's complexity — same visual layout, same drill-through
   pattern, same KPI card style. Publish via Power BI "Publish to Web" and embed
   the iframe in both the card and its case-study dialog. This is the single
   highest-leverage follow-up task for Abdul, separate from the code build.
2. **Fallback (use now to unblock the build):** high-quality static screenshots
   (light theme, real Power BI screenshots of a rebuilt sample dashboard) with a
   small "Live demo coming soon" badge, letting the written case study carry the
   weight in the meantime.

Build one component supporting both, so swapping later is a one-line change:

```tsx
type DashboardEmbedProps =
  | { type: "live"; src: string; title: string }
  | { type: "static"; src: string; alt: string };

function DashboardEmbed(props: DashboardEmbedProps) {
  if (props.type === "live") {
    return (
      <iframe
        src={props.src}
        title={props.title}
        className="w-full aspect-video rounded-xl border"
        loading="lazy"
      />
    );
  }
  return (
    <img
      src={props.src}
      alt={props.alt}
      className="w-full aspect-video object-cover rounded-xl border"
      loading="lazy"
    />
  );
}
```

---

## 6.1 Resume Download (public folder, code-free updates)

**The resume file is already placed at `/public/Abdul_Hameed_Sohail.pdf`** — use
it directly as the reference file for content (Section 10) and wire it up as the
actual download target. Do not rename it or move it elsewhere.

Goal: Abdul should be able to replace his resume anytime by just overwriting that
file in the repo and pushing — no touching any component code.

- **Location:** `/public/Abdul_Hameed_Sohail.pdf` — Vite serves everything in
  `public/` verbatim from the site root, so this resolves at
  `https://<domain>/Abdul_Hameed_Sohail.pdf` on any static host (GitHub Pages,
  Vercel, Netlify).
- **Component usage:** reference it as a plain static path, never import it:
  ```tsx
  <a href="/Abdul_Hameed_Sohail.pdf" download="Abdul_Hameed_Sohail.pdf">
    Download Resume
  </a>
  ```
  The `download` attribute is set to the same filename here so the file visitors
  receive matches what's already in the repo — keep both the stored file and the
  `download` attribute in sync as `Abdul_Hameed_Sohail.pdf` going forward.
- **Update workflow going forward (for Abdul, no dev help needed):**
  1. Replace `/public/Abdul_Hameed_Sohail.pdf` with the new version (same
     filename)
  2. `git add public/Abdul_Hameed_Sohail.pdf && git commit -m "update resume" && git push`
  3. Done — no code, no PR review of components needed
- **Do not** import the PDF through any bundler-aware import path, and don't put
  it under `/src` — only `public/` is served untouched by the build pipeline.
- Add the identical `/Abdul_Hameed_Sohail.pdf` link in both the nav (5.1) and
  footer (5.10).

---

## 7. Accessibility & Performance

- All images: descriptive `alt` text (describe the actual KPI/chart shown, not
  "dashboard screenshot").
- Color contrast: verify text on `--accent-tint` and `--accent` meets WCAG AA.
- Lazy-load all below-the-fold images (`loading="lazy"`).
- Respect `prefers-reduced-motion` — disable even the single hero fade-in if set.
- Lighthouse targets: Performance 90+, Accessibility 95+.
- Semantic HTML: `<nav>`, `<main>`, `<section>` with `aria-label`s, single `<h1>`
  in the hero, proper heading hierarchy down the page.

---

## 8. SEO / Metadata

Set directly in `index.html` `<head>` (Vite SPA, no server-side metadata needed):

```html
<title>Abdul Hameed Sohail | Business Intelligence Analyst & Power BI Developer</title>
<meta name="description" content="BI Analyst specializing in Power BI, Microsoft Fabric, and DAX. PL-300 certified. Enterprise dashboard case studies from Himalaya Wellness Company." />
<meta property="og:image" content="/og-image.png" />
```

`og-image.png` (1200x630): headline + one dashboard screenshot thumbnail —
`TODO(Abdul): generate once a real/rebuilt dashboard screenshot exists`. Add a
basic `sitemap.xml` and `robots.txt` in `public/`.

---

## 9. Build Order (suggested agent execution sequence)

1. Scaffold with `npm create vite@latest -- --template react-ts`, add Tailwind,
   run `npx shadcn@latest init`, set up theme tokens (Section 3.2). **No
   `react-router-dom` — do not install it.**
2. Build shared components: `Nav` (anchor links), `Footer`, `StatCard`,
   `DashboardEmbed`, `CaseStudyDialog`, `ThemeToggle` — using shadcn primitives,
   no custom animation utilities
3. Single page, sections top to bottom (5.1 → 5.10), each as `<section id="...">`
4. `caseStudies.ts` data file with the 3 entries, rendered through the shared
   `CaseStudyDialog` (Section 5.5) — no separate routes/pages
5. Wire up resume download using the existing `/public/Abdul_Hameed_Sohail.pdf`
   (Section 6.1)
6. SEO metadata + `sitemap.xml`/`robots.txt`
7. Accessibility pass + Lighthouse check
8. Deploy (`vite build` → GitHub Pages or Vercel)

---

## 10. Content Inputs Already Available (from resume — use directly, don't invent)

Use verbatim/paraphrased resume bullets for all case-study and experience copy —
do not fabricate metrics beyond what's in the source resume. Where a section needs
more narrative detail than the resume bullet provides (e.g. case study "Approach"
paragraphs), elaborate naturally but flag anything invented as
`TODO(Abdul): verify phrasing` so he can confirm accuracy before publishing.