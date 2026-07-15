import { Link } from '@tanstack/react-router'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function NotFound() {
  return (
    <section className="mx-auto max-w-md px-4 py-24 text-center">
      <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase">
        404
      </p>
      <h1 className="font-display text-accent mt-4 text-4xl leading-[0.95]">
        Nothing on this stand.
      </h1>
      <p className="text-muted-foreground mt-4">
        The page you&#39;re looking for doesn&#39;t exist.
      </p>
      <Link
        to="/"
        className={cn(buttonVariants({ variant: 'default' }), 'mt-8')}
      >
        Back to Home
      </Link>
    </section>
  )
}
