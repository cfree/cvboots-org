import { Collage } from '@/components/Collage'
import { ImagePlaceholder } from '@/components/ImagePlaceholder'
import { ScrollReveal } from '@/components/ScrollReveal'

export function WhatWeDo() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 md:py-24">
      <ScrollReveal className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className="font-display text-accent text-4xl leading-[0.95] md:text-6xl">
            We Show Up Ready to Shine.
          </h2>
          <p className="text-muted-foreground mt-6 text-lg">
            CVBA brings its craft to bars, parties, and events throughout the
            Coachella Valley and beyond. Book a shine, book a crew, keep the
            tradition working.
          </p>
        </div>

        <Collage side="right">
          <ImagePlaceholder label="Photo placeholder" />
        </Collage>
      </ScrollReveal>
    </section>
  )
}
