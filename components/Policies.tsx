import { Mail, Clock, MessageSquare } from "lucide-react";

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
        <p className="font-medium">Municipality of Grand Lake (“Municipality”, “we”, “us”)</p>
      </div>
    </div>

    <Section title="1. Overview">
      <p>This Privacy Policy explains how the Municipality of Grand Lake collects, uses, discloses, and protects personal information when you use the GrandLake Bus Transit mobile application and related services (the “Service”).</p>
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
        <li><strong>Maplebridge Solutions</strong> as technology provider/processor to operate and maintain the Service on the Municipality’s behalf</li>
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
        <li>Request access, correction, or deletion (subject to legal/operational limits) by contacting <a href="https://mail.google.com/mail/?view=cm&to=Info@maplebridgesolutions.ca" target="_blank" rel="noopener noreferrer" className="text-brand font-medium">Info@maplebridgesolutions.ca</a></li>
      </ul>
    </Section>

    <Section title="7. Security">
      <p>We implement reasonable safeguards to protect personal information. No system is perfectly secure.</p>
    </Section>

    <Section title="8. Children’s privacy">
      <p>The Service is not intended for children under 13 (or the minimum age required by law). We do not knowingly collect information from children.</p>
    </Section>

    <Section title="9. Changes to this policy">
      <p>We may update this Privacy Policy. The “Last updated” date will change, and material changes may be communicated via the Service.</p>
    </Section>

    <Section title="10. Contact">
      <p className="mb-2">Privacy questions or requests: <a href="https://mail.google.com/mail/?view=cm&to=Info@maplebridgesolutions.ca" target="_blank" rel="noopener noreferrer" className="text-brand font-medium">Info@maplebridgesolutions.ca</a></p>
      <p>Mailing address: <strong>Municipality of Grand Lake</strong></p>
    </Section>
  </PolicyContent>
);

export const TermsAndConditions = () => (
  <PolicyContent title="Terms & Conditions — GrandLake Bus Transit">
    <p className="text-content-secondary mb-8 italic">Municipality of Grand Lake – GrandLake Bus Transit Terms & Conditions</p>
    
    <Section title="1. Acceptance">
      <p>By downloading, accessing, or using GrandLake Bus Transit (the “App”), you agree to these Terms. If you do not agree, do not use the App.</p>
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
        <li>Reverse engineer or abuse the App’s systems</li>
      </ul>
    </Section>

    <Section title="10. Service availability and disclaimers">
      <p>The App is provided “as is” and “as available.” The Municipality does not guarantee uninterrupted access. Transit operations may be affected by weather, emergencies, maintenance, staffing, or other factors outside our control.</p>
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

export const WalletPolicy = () => (
  <PolicyContent title="Wallet & Refund Policy — GrandLake Bus Transit">
    <p className="text-content-secondary mb-8 italic">GrandLake Bus Transit – Wallet & Refund Policy</p>

    <Section title="1. Transit Wallet (what it is)">
      <p>The Transit Wallet is a prepaid balance you can use <strong>only</strong> to purchase GrandLake Bus Transit tickets in the App. <strong>Not a bank account. No interest. No cash withdrawals. No transfers.</strong></p>
    </Section>

    <Section title="2. Wallet limits">
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Top-up increment:</strong> $10 CAD</li>
        <li><strong>Maximum wallet balance:</strong> $100 CAD</li>
        <li><strong>Maximum top-ups per day:</strong> $100 CAD total</li>
      </ul>
      <p className="mt-2 text-sm text-content-secondary italic">Limits may be adjusted to protect riders and prevent fraud.</p>
    </Section>

    <Section title="3. Manual and auto top-ups">
      <p>You may add funds manually. You may also enable auto top-up (if available), which may add $10 when your wallet balance is low, subject to daily limits. You can turn auto top-up off at any time.</p>
    </Section>

    <Section title="4. Wallet use">
      <p>Wallet balance can only be used for eligible in-app ticket purchases.</p>
    </Section>

    <Section title="5. Ticket refunds">
      <p className="mb-4">Unactivated tickets may be eligible for a refund <strong>within 2 hours of purchase</strong>. Tickets are <strong>non-refundable after activation</strong>.</p>
      <p className="mb-2 font-bold">Refund eligibility conditions:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Ticket must be <strong>unactivated</strong></li>
        <li>Request must be made within <strong>2 hours</strong> of purchase</li>
        <li>Requests may be declined in cases of suspected fraud or policy abuse</li>
      </ul>
    </Section>

    <Section title="6. Wallet top-up refunds">
      <ul className="list-disc pl-5 space-y-2">
        <li>Top-up refunds are issued <strong>only to the original payment method</strong> used for the top-up via Stripe’s refund process.</li>
        <li><strong>Limit:</strong> 1 top-up refund per 30 days, unless operator-approved.</li>
        <li>Refunds may be declined in cases of suspected fraud, excessive disputes, or repeated abuse.</li>
      </ul>
    </Section>

    <Section title="7. Chargebacks and disputes">
      <p>If you file a chargeback/payment dispute, wallet features may be temporarily restricted while the issue is reviewed.</p>
    </Section>

    <Section title="8. Contact">
      <p>Refund requests and questions: <a href="https://mail.google.com/mail/?view=cm&to=Info@maplebridgesolutions.ca" target="_blank" rel="noopener noreferrer" className="text-brand font-medium">Info@maplebridgesolutions.ca</a></p>
    </Section>
  </PolicyContent>
);

export const Support = () => (
  <PolicyContent title="Support Page: GrandLake Bus Transit">
    <div className="bg-brand-light rounded-3xl p-8 mb-12 border border-brand-subtle">
      <h2 className="text-2xl font-bold text-brand mb-4 flex items-center gap-2">
        <Clock size={28} />
        How can we help?
      </h2>
      <p className="text-content-secondary leading-relaxed">
        For help with tickets, wallet top-ups, refunds, or account access, our team is here to assist you.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <ContactCard 
        icon={<Mail className="text-brand" />}
        title="Email Support"
        value="Info@maplebridgesolutions.ca"
        link="https://mail.google.com/mail/?view=cm&to=Info@maplebridgesolutions.ca"
      />
      <ContactCard 
        icon={<Clock className="text-brand" />}
        title="Support Hours"
        value="Mon–Fri, 9:00 AM–5:00 PM AST"
      />
    </div>

    <div className="mt-12 bg-white rounded-3xl p-8 shadow-sm ring-1 ring-black/5">
      <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
        <MessageSquare size={20} className="text-brand" />
        Helpful info to include
      </h3>
      <p className="text-content-secondary mb-4">To help us resolve your issue faster, please include the following in your email:</p>
      <ul className="space-y-3">
        <li className="flex items-start gap-3 text-sm">
          <div className="mt-1 h-1.5 w-1.5 rounded-full bg-brand shrink-0" />
          <span>The email address used in the app</span>
        </li>
        <li className="flex items-start gap-3 text-sm">
          <div className="mt-1 h-1.5 w-1.5 rounded-full bg-brand shrink-0" />
          <span>Date and time of purchase (if applicable)</span>
        </li>
        <li className="flex items-start gap-3 text-sm">
          <div className="mt-1 h-1.5 w-1.5 rounded-full bg-brand shrink-0" />
          <span>Receipt reference or transaction ID</span>
        </li>
        <li className="flex items-start gap-3 text-sm">
          <div className="mt-1 h-1.5 w-1.5 rounded-full bg-brand shrink-0" />
          <span>A clear description of the problem</span>
        </li>
      </ul>
    </div>
  </PolicyContent>
);

const PolicyContent = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
    <h1 className="text-3xl font-bold text-content-primary mb-12 sm:text-4xl lg:text-5xl tracking-tight leading-tight">
      {title}
    </h1>
    <div className="prose prose-slate max-w-none text-content-secondary leading-relaxed space-y-6">
      {children}
    </div>
  </div>
);

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="text-xl font-bold text-content-primary mb-4">{title}</h2>
    <div className="space-y-4">{children}</div>
  </div>
);

const SubSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="mb-6 pl-4 border-l-2 border-brand-subtle">
    <h3 className="text-lg font-bold text-content-primary mb-3">{title}</h3>
    <div className="space-y-2">{children}</div>
  </div>
);

const ContactCard = ({ icon, title, value, link }: { icon: React.ReactNode, title: string, value: string, link?: string }) => (
  <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm ring-1 ring-black/5">
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light">
      {icon}
    </div>
    <div>
      <p className="text-xs font-bold uppercase tracking-wider text-content-muted mb-1">{title}</p>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-brand hover:underline">{value}</a>
      ) : (
        <p className="text-lg font-semibold text-content-primary">{value}</p>
      )}
    </div>
  </div>
);
