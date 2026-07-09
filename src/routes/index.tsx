import { createFileRoute } from '@tanstack/react-router'

import { CommunityEducation } from '@/components/CommunityEducation'
import { EmailSignup } from '@/components/EmailSignup'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Mission } from '@/components/Mission'
import { StandardsAdvocacy } from '@/components/StandardsAdvocacy'
import { WhatWeDo } from '@/components/WhatWeDo'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <>
      {/* <Header /> */}
      <main>
        <Hero />
        <Mission />
        <WhatWeDo />
        <StandardsAdvocacy />
        <CommunityEducation />
        {/* <EmailSignup /> */}
      </main>
      <Footer />
    </>
  )
}
