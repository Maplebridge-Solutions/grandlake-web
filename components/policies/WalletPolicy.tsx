import { PolicyContent, Section } from "./shared";

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
        <li>Top-up refunds are issued <strong>only to the original payment method</strong> used for the top-up via Stripe's refund process.</li>
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
