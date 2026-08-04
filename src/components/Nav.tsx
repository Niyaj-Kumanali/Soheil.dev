import * as React from "react"
import { BarChart3, Download, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/ThemeToggle"
import { cn } from "@/lib/utils"
import { navLinks, profile } from "@/lib/siteData"

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
        "fixed inset-x-0 top-0 z-40 h-16 border-b border-transparent bg-transparent transition-all duration-300",
        scrolled && "border-border bg-background/80 backdrop-blur-lg"
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6 md:px-8"
      >
        <a href="#hero" className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
            <BarChart3 className="size-4" aria-hidden="true" />
          </span>
          <span className="text-sm font-semibold tracking-tight text-ink hidden sm:inline">
            {profile.name}
          </span>
          <span className="text-sm font-semibold tracking-tight text-ink sm:hidden">
            {profile.shortName}
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-secondary transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={profile.resumeUrl}
            download={profile.resumeFileName}
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
              className="rounded-lg px-3 py-2.5 text-sm text-secondary transition-colors hover:bg-muted hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            download={profile.resumeFileName}
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
