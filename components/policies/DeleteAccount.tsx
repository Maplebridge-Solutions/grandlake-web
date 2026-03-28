import { PolicyContent, Section } from "./shared";

export const DeleteAccount = () => (
  <PolicyContent title="How to Delete Your Account — GrandLake Bus Transit">
    <p className="text-content-secondary mb-8 italic">Follow the steps below to permanently delete your GLKTransit account from the mobile app.</p>

    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-10">
      <p className="font-semibold text-amber-800 mb-2">Before you delete</p>
      <ul className="list-disc pl-5 space-y-1 text-sm text-amber-700">
        <li>Any remaining wallet balance will be permanently forfeited</li>
        <li>Unactivated tickets will be permanently forfeited</li>
        <li>This action cannot be undone</li>
      </ul>
    </div>

    <Section title="Steps to delete your account">
      <ol className="space-y-6">
        <li className="flex items-start gap-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-white font-bold text-sm">1</span>
          <div>
            <p className="font-semibold text-content-primary">Open the GLKTransit app</p>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-white font-bold text-sm">2</span>
          <div>
            <p className="font-semibold text-content-primary">Tap the Profile icon</p>
            <p className="text-sm text-content-secondary mt-1">Located at the bottom of the screen.</p>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-white font-bold text-sm">3</span>
          <div>
            <p className="font-semibold text-content-primary">Scroll down and tap <strong>Delete Account</strong></p>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-white font-bold text-sm">4</span>
          <div>
            <p className="font-semibold text-content-primary">Confirm the deletion</p>
            <p className="text-sm text-content-secondary mt-1">A confirmation prompt will appear — tap <strong>Yes, delete account</strong> to proceed.</p>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-white font-bold text-sm">5</span>
          <div>
            <p className="font-semibold text-content-primary">Account deleted</p>
            <p className="text-sm text-content-secondary mt-1">Your account and all associated data (tickets, personal information) will be permanently deleted.</p>
          </div>
        </li>
      </ol>
    </Section>

    <Section title="Need help?">
      <p>If you run into any issues or need assistance, contact us at <a href="https://mail.google.com/mail/?view=cm&to=Info@maplebridgesolutions.ca" target="_blank" rel="noopener noreferrer" className="text-brand font-medium">Info@maplebridgesolutions.ca</a>.</p>
    </Section>
  </PolicyContent>
);
