import { ImageIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

export function ImagePlaceholder({
  label,
  className,
}: {
  label: string
  className?: string
}) {
  return (
    <div
      aria-hidden
      className={cn(
        'border-foreground/25 text-muted-foreground/70 absolute inset-6 flex flex-col items-center justify-center gap-2 border border-dashed text-center',
        className,
      )}
    >
      <ImageIcon className="size-6" />
      <span className="text-[10px] font-medium tracking-[0.25em] uppercase">
        {label}
      </span>
    </div>
  )
}
