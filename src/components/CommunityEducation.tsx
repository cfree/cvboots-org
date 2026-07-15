import { Collage } from '@/components/Collage'
import { CollageImage } from '@/components/CollageImage'
import { ScrollReveal } from '@/components/ScrollReveal'

export function CommunityEducation() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 md:py-24">
      <ScrollReveal className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className="font-display text-accent text-4xl leading-[0.95] md:text-6xl">
            Teach the Craft. Build the Family.
          </h2>
          <p className="text-muted-foreground mt-6 text-lg">
            Through education, community, and solidarity, CVBA keeps the
            bootblack tradition growing — mentoring new hands and building a
            space where the craft, and the people who carry it, are honored.
          </p>
        </div>

        <Collage side="right">
          <CollageImage src="/images/clean.jpg" alt="Cleaning boots" />
        </Collage>
      </ScrollReveal>
    </section>
  )
}
