import { createFileRoute } from '@tanstack/react-router'

import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Mission } from '@/components/Mission'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Mission />
        <div id="signup" />
      </main>
    </>
  )
}
