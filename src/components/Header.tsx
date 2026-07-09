import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Header() {
  return (
    <header className="bg-background/90 border-border sticky top-0 z-50 border-b backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <span className="font-display text-xl tracking-wide">CVBA</span>
        <a
          href="#signup"
          className={cn(buttonVariants({ variant: 'default' }))}
        >
          Join the list
        </a>
      </div>
    </header>
  )
}
