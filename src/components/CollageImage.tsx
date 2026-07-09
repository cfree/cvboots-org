import { cn } from '@/lib/utils'

export function CollageImage({
  src,
  alt,
  className,
}: {
  src: string
  alt: string
  className?: string
}) {
  return (
    <div className={cn('absolute inset-6 overflow-hidden', className)}>
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </div>
  )
}
