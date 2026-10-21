import { Link } from '@tanstack/react-router'
import type { ReactNode } from 'react'

import { Footer } from '@/components/Footer'

export const LEGAL_UPDATED = 'October 20, 2026'

/** Shared layout for the Privacy Policy and Terms & Conditions pages. */
export function LegalPage({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <>
      <main className="mx-auto max-w-2xl px-4 py-16">
        <Link
          to="/"
          className="text-muted-foreground text-sm tracking-[0.3em] uppercase"
        >
          CVBA
        </Link>
        <h1 className="font-display text-accent mt-4 text-4xl leading-[0.95]">
          {title}
        </h1>
        <p className="text-muted-foreground mt-2 text-sm">
          Last updated {LEGAL_UPDATED}
        </p>
        <div className="legal mt-8 space-y-4 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-bold [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6">
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}
