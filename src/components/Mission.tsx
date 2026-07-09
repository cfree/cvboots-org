import { Collage } from '@/components/Collage'
import { CollageImage } from '@/components/CollageImage'
import { ScrollReveal } from '@/components/ScrollReveal'

export const MISSION_STATEMENT =
  'CVBA keeps the bootblack tradition alive — honoring the folks who built it, and showing up with care for every boot on the stand.'

export function Mission() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 md:py-24">
      <ScrollReveal className="grid items-center gap-10 md:grid-cols-2">
        <div className="md:order-2">
          <h2 className="font-display text-accent text-4xl leading-[0.95] md:text-6xl">
            Service Is Sacred. So Is the Shine.
          </h2>
          <p className="text-muted-foreground mt-6 text-lg">
            {MISSION_STATEMENT}
          </p>
        </div>

        <Collage side="left">
          <CollageImage src="/stand.jpg" alt="Bootblack stand" />
        </Collage>
      </ScrollReveal>
    </section>
  )
}
