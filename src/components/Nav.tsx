import * as React from "react"
import { Menu } from "lucide-react"

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/ThemeToggle"
import { cn } from "@/lib/utils"
import { navLinks } from "@/lib/siteData"

export function Nav() {
  const [scrolled, setScrolled] = React.useState(false)
  const [hidden, setHidden] = React.useState(false)
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    let lastScrollY = window.scrollY

    const onScroll = () => {
      const currentScrollY = window.scrollY
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(currentScrollY / max, 1) : 0)
      setScrolled(currentScrollY > 8)
      setHidden(currentScrollY > 8 && currentScrollY > lastScrollY)
      lastScrollY = currentScrollY
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 h-16 bg-transparent transition-all duration-300",
        scrolled && "bg-background/80 backdrop-blur-lg",
        hidden && "-translate-y-full"
      )}
    >
      <span
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-accent transition-transform duration-100"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6 md:px-8"
      >
        <a href="#hero" className="flex items-center">
          <span className="text-lg leading-none font-semibold tracking-tight text-ink">
            Sohail
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative rounded-md px-3 py-2 text-sm font-medium text-secondary transition-colors hover:text-ink"
            >
              {link.label}
              <span
                className="absolute inset-x-3 -bottom-0.5 h-0.5 scale-x-0 rounded-full bg-accent transition-transform duration-300 group-hover:scale-x-100"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
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
        </div>
      </SheetContent>
    </Sheet>
  )
}
