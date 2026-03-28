import { Mail, Clock, MessageSquare } from "lucide-react";
import { PolicyContent, ContactCard } from "./shared";

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
