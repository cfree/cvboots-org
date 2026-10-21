import { Link, createFileRoute } from '@tanstack/react-router'

import { LegalPage } from '@/components/LegalPage'

export const Route = createFileRoute('/terms')({
  head: () => ({
    meta: [
      { title: 'Terms & Conditions — Coachella Valley Bootblack Association' },
    ],
  }),
  component: Terms,
})

function Terms() {
  return (
    <LegalPage title="Terms & Conditions">
      <p>
        These Terms &amp; Conditions apply to cvboots.org and the bootblack
        waitlist run by Coachella Valley Bootblack Association
        (&quot;CVBA&quot;). By using them you agree to these terms.
      </p>

      <h2>Bootblack waitlist</h2>
      <p>
        The waitlist lets you join the line for bootblacking at our events. Your
        place in line is an estimate and may change. Bootblacking is a free
        service; tips are optional and go directly to the bootblack.
      </p>

      <h2>SMS Terms</h2>
      <ul>
        <li>
          <strong>Program:</strong> Coachella Valley Bootblack Association
          waitlist alerts.
        </li>
        <li>
          <strong>Opt-in:</strong> you only get texts if you tick &quot;Text me
          when it&#39;s my turn&quot; when you join a waitlist.
        </li>
        <li>
          <strong>What we send:</strong> a text when you&#39;re next in line and
          a text when it&#39;s your turn, with a link to your spot. No
          marketing.
        </li>
        <li>
          <strong>Frequency:</strong> usually 1–2 messages each time you join a
          line.
        </li>
        <li>Message and data rates may apply.</li>
        <li>
          Reply <strong>STOP</strong> to opt out at any time. Reply{' '}
          <strong>HELP</strong> for help.
        </li>
        <li>Carriers are not liable for delayed or undelivered messages.</li>
      </ul>
      <p>
        See our{' '}
        <Link to="/privacy" className="underline">
          Privacy Policy
        </Link>{' '}
        for how we handle your information.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms. The date at the top shows the latest version.
      </p>

      <h2>Contact</h2>
      <p>
        Questions? Reach Coachella Valley Bootblack Association through the{' '}
        <Link to="/" hash="contact" className="underline">
          contact form
        </Link>{' '}
        on our homepage.
      </p>
    </LegalPage>
  )
}
