import { cn } from '@/lib/utils'

export function Collage({
  side,
  children,
  className,
}: {
  side: 'left' | 'right'
  children?: React.ReactNode
  className?: string
}) {
  const isLeft = side === 'left'

  return (
    <div
      className={cn(
        'collage-grain relative mx-auto aspect-square w-full max-w-sm',
        isLeft ? 'md:order-1 md:-rotate-2' : 'md:rotate-2',
        className,
      )}
    >
      <div className="collage-torn bg-secondary absolute inset-0" />
      <div
        className={cn(
          'collage-halftone text-foreground absolute inset-6',
          isLeft ? 'md:rotate-3' : 'md:-rotate-3',
        )}
      />
      <div
        className={cn(
          'collage-tape absolute h-6 w-20',
          isLeft ? '-top-3 right-8 rotate-6' : '-top-3 left-8 -rotate-6',
        )}
      />
      <div
        className={cn(
          'collage-tape absolute h-6 w-20',
          isLeft ? 'bottom-8 -left-3 rotate-2' : 'right-8 -bottom-3 rotate-3',
        )}
      />
      {children}
    </div>
  )
}
