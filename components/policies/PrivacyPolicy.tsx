import { PolicyContent, Section, SubSection } from "./shared";

export const PrivacyPolicy = () => (
  <PolicyContent title="Privacy Policy — GrandLake Bus Transit">
    <p className="text-content-secondary mb-8 italic">Municipality of Grand Lake – GrandLake Bus Transit Privacy Policy</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 p-6 bg-surface-page rounded-2xl border border-surface-subtle">
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-content-muted mb-1">Effective Date</p>
        <p className="font-medium">March 2026</p>
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-content-muted mb-1">Last Updated</p>
        <p className="font-medium">March 2026</p>
      </div>
      <div className="sm:col-span-2">
        <p className="text-xs font-bold uppercase tracking-wider text-content-muted mb-1">Operator</p>
        <p className="font-medium">Municipality of Grand Lake ("Municipality", "we", "us")</p>
      </div>
    </div>

    <Section title="1. Overview">
      <p>This Privacy Policy explains how the Municipality of Grand Lake collects, uses, discloses, and protects personal information when you use the GrandLake Bus Transit mobile application and related services (the "Service").</p>
    </Section>

    <Section title="2. Information we collect">
      <p className="mb-4">We collect only what is needed to deliver transit services and maintain reliability:</p>

      <SubSection title="A) Account information">
        <ul className="list-disc pl-5 space-y-2">
          <li>Email address (required)</li>
          <li>Name and phone number (optional)</li>
          <li>Account identifiers and authentication logs</li>
        </ul>
      </SubSection>

      <SubSection title="B) Location information">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Precise location (optional):</strong> If you enable it, used for features like finding nearby stops, route guidance, and service availability.</li>
          <li><strong>Approximate location (optional):</strong> May be used if enabled.</li>
        </ul>
        <p className="mt-2 text-sm text-content-secondary">You can disable location permissions in your device settings; some features may be limited.</p>
      </SubSection>

      <SubSection title="C) Payments and transaction information">
        <ul className="list-disc pl-5 space-y-2">
          <li>Purchase details for tickets and wallet top-ups (amount, date/time, status, receipt references).</li>
          <li>Payments are processed by <strong>Stripe</strong>. The Municipality and Maplebridge do <strong>not</strong> store full card numbers or full payment credentials.</li>
        </ul>
      </SubSection>

      <SubSection title="D) Usage and device information">
        <ul className="list-disc pl-5 space-y-2">
          <li>Device type/OS/app version</li>
          <li>Diagnostics (crashes, performance)</li>
          <li>App interactions (for reliability and support)</li>
        </ul>
      </SubSection>

      <SubSection title="E) Support communications">
        <ul className="list-disc pl-5 space-y-2">
          <li>Messages you send to support and any information you choose to provide.</li>
        </ul>
      </SubSection>
    </Section>

    <Section title="3. How we use information">
      <p className="mb-4">We use personal information to:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Create and manage your account and authenticate access</li>
        <li>Provide transit features (ticketing, wallet, stop discovery, service info)</li>
        <li>Process payments, prevent fraud, and support dispute resolution</li>
        <li>Send service notices (purchase confirmations, critical service updates)</li>
        <li>Improve performance and reliability (debugging and diagnostics)</li>
        <li>Meet legal and operational requirements</li>
      </ul>
    </Section>

    <Section title="4. How we share information">
      <p className="mb-4">We do not sell your personal information. We may share information with:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Stripe</strong> for payment processing and fraud prevention</li>
        <li><strong>Service providers</strong> supporting hosting, analytics, and customer support tools (under confidentiality safeguards)</li>
        <li><strong>Maplebridge Solutions</strong> as technology provider/processor to operate and maintain the Service on the Municipality's behalf</li>
        <li><strong>Law enforcement/regulators</strong> where required by law or to protect users/public safety</li>
      </ul>
    </Section>

    <Section title="5. Data retention">
      <p>We retain personal information only as long as necessary for service delivery, financial reconciliation, dispute handling, and legal obligations, then delete or anonymize it when appropriate.</p>
    </Section>

    <Section title="6. Your choices and rights">
      <p className="mb-4">You can:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Disable location permissions in device settings</li>
        <li>Request access to or correction of your personal information by contacting <a href="https://mail.google.com/mail/?view=cm&to=Info@maplebridgesolutions.ca" target="_blank" rel="noopener noreferrer" className="text-brand font-medium">Info@maplebridgesolutions.ca</a></li>
        <li><strong>Delete your account</strong> at any time through the App's account settings or by emailing <a href="https://mail.google.com/mail/?view=cm&to=Info@maplebridgesolutions.ca" target="_blank" rel="noopener noreferrer" className="text-brand font-medium">Info@maplebridgesolutions.ca</a>. Account deletion is subject to the following:
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Any remaining wallet balance will be forfeited and is non-refundable unless otherwise required by law</li>
            <li>Unactivated tickets will also be forfeited upon deletion</li>
            <li>Deletion may be delayed where required for legal, financial, or fraud-prevention purposes</li>
            <li>Transaction records may be retained as required by law</li>
          </ul>
        </li>
      </ul>
    </Section>

    <Section title="7. Security">
      <p>We implement reasonable safeguards to protect personal information. No system is perfectly secure.</p>
    </Section>

    <Section title="8. Children's privacy">
      <p>The Service is not intended for children under 13 (or the minimum age required by law). We do not knowingly collect information from children.</p>
    </Section>

    <Section title="9. Changes to this policy">
      <p>We may update this Privacy Policy. The "Last updated" date will change, and material changes may be communicated via the Service.</p>
    </Section>

    <Section title="10. Contact">
      <p className="mb-2">Privacy questions or requests: <a href="https://mail.google.com/mail/?view=cm&to=Info@maplebridgesolutions.ca" target="_blank" rel="noopener noreferrer" className="text-brand font-medium">Info@maplebridgesolutions.ca</a></p>
      <p>Mailing address: <strong>Municipality of Grand Lake</strong></p>
    </Section>
  </PolicyContent>
);
