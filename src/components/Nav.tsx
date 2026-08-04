import * as React from "react"
import { BarChart3, Download, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/ThemeToggle"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#dashboards", label: "Dashboards" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
]

export function Nav() {
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 h-16 border-b border-transparent bg-background transition-colors",
        scrolled && "border-border bg-background/95 backdrop-blur-sm"
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-[1120px] items-center justify-between px-6 md:px-8"
      >
        <a href="#hero" className="flex items-center gap-2">
          <BarChart3 className="size-5 text-accent" aria-hidden="true" />
          <span className="text-sm font-semibold text-primary hidden sm:inline">
            Abdul Hameed Sohail
          </span>
          <span className="text-sm font-semibold text-primary sm:hidden">AHS</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-secondary transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="/Abdul_Hameed_Sohail.pdf"
            download="Abdul_Hameed_Sohail.pdf"
            className="hidden sm:inline-block"
          >
            <Button size="sm">
              <Download data-icon="inline-start" />
              Resume
            </Button>
          </a>
          <ThemeToggle />
          <MobileNav />
        </div>
      </nav>
    </header>
  )
}

function MobileNav() {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Open navigation menu"
        className="inline-flex size-8 items-center justify-center rounded-lg text-secondary hover:bg-muted hover:text-foreground md:hidden"
      >
        <Menu className="size-5" />
      </SheetTrigger>
      <SheetContent side="right" className="w-72">
        <SheetTitle className="sr-only">Navigation menu</SheetTitle>
        <div className="flex flex-col gap-1 px-4 pt-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm text-secondary transition-colors hover:bg-muted hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/Abdul_Hameed_Sohail.pdf"
            download="Abdul_Hameed_Sohail.pdf"
            onClick={() => setOpen(false)}
            className="mt-4 px-3"
          >
            <Button className="w-full">
              <Download data-icon="inline-start" />
              Resume
            </Button>
          </a>
        </div>
      </SheetContent>
    </Sheet>
  )
}
