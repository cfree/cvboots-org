import { Collage } from '@/components/Collage'
import { ScrollReveal } from '@/components/ScrollReveal'

export function Hero() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 text-center md:py-24">
      <ScrollReveal className="flex flex-col items-center gap-10">
        <div>
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase">
            Coachella Valley Bootblack Association
          </p>
          <h1 className="font-display text-accent mt-4 text-5xl leading-[0.95] md:text-7xl">
            Bootblacks Stand Together
          </h1>
        </div>

        <Collage side="right">
          <img
            src="/logo.png"
            alt="Coachella Valley Bootblack Association logo"
            className="absolute inset-0 m-auto h-2/3 w-2/3 object-contain drop-shadow-lg"
          />
        </Collage>
      </ScrollReveal>
    </section>
  )
}
