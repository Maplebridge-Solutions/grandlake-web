import { Shield, FileText, Wallet } from "lucide-react";
import { PolicyLink } from "@/components/HomeComponents";

export const PoliciesSection = () => (
  <section className="py-32 bg-white">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold mb-12">Legal & Policies</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <PolicyLink href="/privacy" title="Privacy Policy" icon={<Shield size={20} />} />
        <PolicyLink href="/terms" title="Terms of Service" icon={<FileText size={20} />} />
        <PolicyLink href="/wallet-policy" title="Wallet Policy" icon={<Wallet size={20} />} />
      </div>
    </div>
  </section>
);
