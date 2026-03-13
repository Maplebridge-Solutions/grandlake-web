import type { Metadata } from "next";
import { PrivacyPolicy as PrivacyContent } from "@/components/Policies";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the GLK Transit Privacy Policy to understand how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
