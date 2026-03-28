import type { Metadata } from "next";
import { Support as SupportContent } from "@/components/policies/Support";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with GLK Transit. Contact our support team or visit the Help Center for answers to common questions.",
};

export default function SupportPage() {
  return <SupportContent />;
}
