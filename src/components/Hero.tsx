import { ScrollReveal } from '@/components/ScrollReveal'

export function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 md:py-24">
      <ScrollReveal className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase">
            Coachella Valley Bootblack Association
          </p>
          <h1 className="font-display text-accent mt-4 text-5xl leading-[0.95] md:text-7xl">
            Bootblacks Stand Together
          </h1>
        </div>

        <div className="collage-grain relative mx-auto aspect-square w-full max-w-sm md:rotate-2">
          <div className="collage-torn bg-secondary absolute inset-0" />
          <div className="collage-halftone text-foreground absolute inset-6 md:-rotate-3" />
          <div className="collage-tape absolute -top-3 left-8 h-6 w-20 -rotate-6" />
          <div className="collage-tape absolute right-8 -bottom-3 h-6 w-20 rotate-3" />
        </div>
      </ScrollReveal>
    </section>
  )
}
