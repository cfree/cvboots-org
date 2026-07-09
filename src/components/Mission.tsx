import { ScrollReveal } from '@/components/ScrollReveal'

export function Mission() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 md:py-24">
      <ScrollReveal className="grid items-center gap-10 md:grid-cols-2">
        <div className="collage-grain relative mx-auto aspect-square w-full max-w-sm md:order-2 md:-rotate-2">
          <div className="collage-torn bg-secondary absolute inset-0" />
          <div className="collage-halftone text-foreground absolute inset-6 md:rotate-3" />
          <div className="collage-tape absolute -top-3 right-8 h-6 w-20 rotate-6" />
          <div className="collage-tape absolute bottom-8 -left-3 h-6 w-20 rotate-2" />
        </div>

        <div className="md:order-1">
          <h2 className="font-display text-accent text-4xl leading-[0.95] md:text-6xl">
            Service Is Sacred. So Is the Shine.
          </h2>
          <p className="text-muted-foreground mt-6 text-lg">
            CVBA keeps the bootblack tradition alive — training new hands,
            honoring the leatherfolk who built it, and showing up with care for
            every boot on the stand.
          </p>
        </div>
      </ScrollReveal>
    </section>
  )
}
