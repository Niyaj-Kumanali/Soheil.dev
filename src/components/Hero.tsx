import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, MapPin } from "lucide-react"
import { LinkedInIcon } from "@/components/LinkedInIcon"

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Intro"
      className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-12 px-6 pt-32 pb-16 md:px-8 lg:grid-cols-[1.1fr_0.9fr]"
    >
      <div className="animate-in fade-in duration-300">
        <p className="text-sm font-medium tracking-wide text-accent uppercase">
          Business Intelligence Analyst · PL-300 Certified
        </p>
        <h1 className="mt-4 text-5xl font-bold tracking-tight text-primary md:text-6xl">
          Turning raw data into decisions that ship.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-secondary">
          I build Power BI dashboards and Microsoft Fabric data pipelines that
          survive stakeholder scrutiny — 3 enterprise BI modules shipped for
          Himalaya Wellness Company in under a year.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#dashboards">
            <Button size="lg">
              View Dashboards
              <ArrowRight data-icon="inline-end" />
            </Button>
          </a>
          <a href="/Abdul_Hameed_Sohail.pdf" download="Abdul_Hameed_Sohail.pdf">
            <Button size="lg" variant="outline">
              Download Resume
            </Button>
          </a>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-tertiary">
          <span className="flex items-center gap-1.5">
            <MapPin className="size-4" />
            Bangalore, India
          </span>
          <a
            href="mailto:abdulsohail884@gmail.com"
            className="flex items-center gap-1.5 hover:text-secondary"
          >
            <Mail className="size-4" />
            abdulsohail884@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/abdul-hameed-sohail"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-secondary"
            aria-label="LinkedIn profile"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
        </div>
      </div>

      <div className="hidden lg:block" aria-hidden="true">
        <HeroIllustration />
      </div>
    </section>
  )
}

function HeroIllustration() {
  const bars = [38, 55, 42, 68, 60, 82, 74, 92]
  return (
    <svg
      viewBox="0 0 400 320"
      className="mx-auto w-full max-w-[420px]"
      role="presentation"
    >
      {/* bars */}
      {bars.map((h, i) => (
        <rect
          key={`bar-${i}`}
          x={28 + i * 32}
          y={200 - h}
          width={18}
          height={h}
          rx={3}
          fill={i % 3 === 0 ? "#2F6FED" : i % 3 === 1 ? "#8B7FE8" : "#E8664A"}
        />
      ))}

      {/* baseline */}
      <line x1="20" y1="204" x2="290" y2="204" stroke="#E4E4E1" strokeWidth="2" />

      {/* line chart */}
      <path
        d="M300 180 C 320 160, 330 150, 345 138 S 370 120, 385 108"
        fill="none"
        stroke="#2F6FED"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="385" cy="108" r="5" fill="#2F6FED" />

      {/* donut */}
      <g transform="translate(70, 245)">
        <circle r="34" fill="none" stroke="#E4E4E1" strokeWidth="14" />
        <circle
          r="34"
          fill="none"
          stroke="#8B7FE8"
          strokeWidth="14"
          strokeDasharray="120 214"
          transform="rotate(-90)"
        />
      </g>
      <text
        x="70"
        y="253"
        textAnchor="middle"
        fontSize="14"
        fontWeight="600"
        fill="#8B7FE8"
        fontFamily="Inter, sans-serif"
      >
        56%
      </text>

      {/* mini KPI card */}
      <g>
        <rect
          x="190"
          y="238"
          width="120"
          height="52"
          rx="10"
          fill="#FFFFFF"
          stroke="#E4E4E1"
        />
        <text
          x="202"
          y="258"
          fontSize="11"
          fill="#5C5C5F"
          fontFamily="Inter, sans-serif"
        >
          Total Revenue
        </text>
        <text
          x="202"
          y="278"
          fontSize="18"
          fontWeight="700"
          fill="#17171A"
          fontFamily="Inter, sans-serif"
          style={{ fontVariantNumeric: "tabular-nums" }}
        >
          $1.24M
        </text>
      </g>
    </svg>
  )
}
