import { Collage } from '@/components/Collage'
import { ImagePlaceholder } from '@/components/ImagePlaceholder'
import { ScrollReveal } from '@/components/ScrollReveal'
import { CollageImage } from './CollageImage'

export function StandardsAdvocacy() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 md:py-24">
      <ScrollReveal className="grid items-center gap-10 md:grid-cols-2">
        <div className="md:order-2">
          <h2 className="font-display text-accent text-4xl leading-[0.95] md:text-6xl">
            We've Got Your Back.
          </h2>
          <p className="text-muted-foreground mt-6 text-lg">
            CVBA pushes for fair, collaborative relationships between bootblacks
            and bars, offers peer support when things get hard, and sets clear
            standards that keep the trade safe for everyone.
          </p>
        </div>

        <Collage side="left">
          <CollageImage src="/images/class.jpg" alt="Clean those boots" />
        </Collage>
      </ScrollReveal>
    </section>
  )
}
