import { Link, createFileRoute } from '@tanstack/react-router'

import { LegalPage } from '@/components/LegalPage'

export const Route = createFileRoute('/privacy')({
  head: () => ({
    meta: [
      { title: 'Privacy Policy — Coachella Valley Bootblack Association' },
    ],
  }),
  component: Privacy,
})

function Privacy() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        This Privacy Policy explains how Coachella Valley Bootblack Association
        (&quot;CVBA&quot;, &quot;we&quot;, &quot;us&quot;) collects and uses
        information through cvboots.org and our bootblack waitlist.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>
          Your name and the items you&#39;d like serviced when you join a
          bootblack waitlist.
        </li>
        <li>Your mobile phone number, if you give it.</li>
        <li>Whether you opted in to text messages about your spot in line.</li>
        <li>Your name, email and message when you use our contact form.</li>
      </ul>

      <h2>How we use it</h2>
      <ul>
        <li>To run the waitlist and show your place in line.</li>
        <li>
          If you opted in, to text you when you&#39;re next and when it&#39;s
          your turn.
        </li>
        <li>To reply to messages you send us.</li>
      </ul>
      <p>
        Bootblacks never see or use your phone number to contact you personally.
        Texts come from our business number through our messaging provider.
      </p>

      <h2>SMS messaging</h2>
      <p>
        We do not sell or share your SMS opt-in data or personal information
        with third parties for marketing purposes. Your phone number is shared
        only with our SMS provider (Twilio) to deliver the messages you asked
        for. Reply STOP to any message to opt out, or HELP for help.
      </p>

      <h2>How long we keep it</h2>
      <p>
        Waitlist entries are kept only as long as needed to run the event, then
        deleted.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about your information? Reach Coachella Valley Bootblack
        Association through the{' '}
        <Link to="/" hash="contact" className="underline">
          contact form
        </Link>{' '}
        on our homepage. See also our{' '}
        <Link to="/terms" className="underline">
          Terms &amp; Conditions
        </Link>
        .
      </p>
    </LegalPage>
  )
}
