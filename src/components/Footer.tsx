export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer bg-foreground text-primary-foreground relative mt-8">
      <div aria-hidden className="collage-torn absolute inset-x-0 -top-4 h-8" />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-3 px-4 py-12 text-center">
        <span className="font-display text-2xl tracking-wide">CVBA</span>
        <p className="text-primary-foreground/70 text-sm tracking-[0.3em] uppercase">
          Bootblacks Stand Together
        </p>
        <div className="collage-tape mt-2 h-2 w-14 -rotate-1" />
        <p className="text-primary-foreground/70 text-sm">
          Based in the Coachella Valley — serving all of Southern California.
        </p>
        <p className="text-primary-foreground/50 text-xs">
          © {year} Coachella Valley Bootblack Association
        </p>
      </div>
    </footer>
  )
}
