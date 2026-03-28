import { PolicyContent, Section } from "./shared";

export const TermsAndConditions = () => (
  <PolicyContent title="Terms & Conditions — GrandLake Bus Transit">
    <p className="text-content-secondary mb-8 italic">Municipality of Grand Lake – GrandLake Bus Transit Terms & Conditions</p>

    <Section title="1. Acceptance">
      <p>By downloading, accessing, or using GrandLake Bus Transit (the "App"), you agree to these Terms. If you do not agree, do not use the App.</p>
    </Section>

    <Section title="2. Service description">
      <p>The App provides transit tools including account access, stop discovery, ticket purchase, wallet top-ups, and service information. Routes, schedules, stops, and availability may change due to operational conditions.</p>
    </Section>

    <Section title="3. Accounts">
      <p>You are responsible for maintaining the confidentiality of your login credentials and for all activity under your account. Notify us immediately if you suspect unauthorized access.</p>
    </Section>

    <Section title="4. Location features">
      <p>Some App features require location access. You can disable location permissions in device settings; some features may be limited or less accurate.</p>
    </Section>

    <Section title="5. Tickets, fares, and activation">
      <ul className="list-disc pl-5 space-y-2">
        <li>Tickets are valid as described in-app at the time of purchase.</li>
        <li>Ticket activation/validation rules will be shown in the App.</li>
        <li>Tickets are non-refundable after activation.</li>
      </ul>
    </Section>

    <Section title="6. Payments">
      <p>Payments are processed by <strong>Stripe</strong>. The Municipality and Maplebridge do not store full card details. You agree that Stripe may process payment information to complete transactions and prevent fraud.</p>
    </Section>

    <Section title="7. Transit Wallet (prepaid balance) – summary">
      <p className="mb-4">The App may offer a Transit Wallet to store a prepaid balance for future ticket purchases. The Wallet:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Can be used <strong>only</strong> for GrandLake Bus Transit ticket purchases</li>
        <li>Has <strong>no cash-out</strong> and <strong>no transfers</strong></li>
        <li>Is subject to balance/top-up limits and refund rules published on the Wallet & Refund Policy page</li>
      </ul>
    </Section>

    <Section title="8. Refunds (summary)">
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Unactivated tickets</strong> may be refundable within 2 hours of purchase (see Wallet & Refund Policy for details).</li>
        <li><strong>Activated tickets</strong> are not refundable.</li>
        <li>Wallet top-up refunds are to the original payment method and may be limited.</li>
      </ul>
    </Section>

    <Section title="9. Acceptable use">
      <p className="mb-4">You agree not to:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Use the App unlawfully</li>
        <li>Attempt to interfere with or compromise security</li>
        <li>Submit fraudulent payments, chargebacks, or false claims</li>
        <li>Reverse engineer or abuse the App's systems</li>
      </ul>
    </Section>

    <Section title="10. Service availability and disclaimers">
      <p>The App is provided "as is" and "as available." The Municipality does not guarantee uninterrupted access. Transit operations may be affected by weather, emergencies, maintenance, staffing, or other factors outside our control.</p>
    </Section>

    <Section title="11. Limitation of liability">
      <p>To the maximum extent permitted by law, the Municipality and Maplebridge are not liable for indirect or consequential damages arising from use of the App or transit service disruptions. Where liability is found, it will be limited as required by applicable law.</p>
    </Section>

    <Section title="12. Suspension and termination">
      <p>We may suspend or terminate access if you violate these Terms, misuse the App, or for security/legal reasons.</p>
    </Section>

    <Section title="13. Changes">
      <p>We may update these Terms. Continued use after updates means you accept the revised Terms.</p>
    </Section>

    <Section title="14. Governing law">
      <p>These Terms are governed by the laws of <strong>New Brunswick and Canada</strong>, as applicable.</p>
    </Section>

    <Section title="15. Contact">
      <p>Support: <a href="https://mail.google.com/mail/?view=cm&to=Info@maplebridgesolutions.ca" target="_blank" rel="noopener noreferrer" className="text-brand font-medium">Info@maplebridgesolutions.ca</a></p>
    </Section>
  </PolicyContent>
);
