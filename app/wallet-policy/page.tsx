import type { Metadata } from "next";
import { WalletPolicy as WalletContent } from "@/components/Policies";

export const metadata: Metadata = {
  title: "Wallet & Refund Policy",
  description: "Learn about the GLK Transit Wallet, how to top up, and our refund policy for unused tickets.",
};

export default function WalletPage() {
  return <WalletContent />;
}
