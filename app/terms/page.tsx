import type { Metadata } from "next";
import { TermsAndConditions as TermsContent } from "@/components/policies/TermsAndConditions";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Read the GLK Transit Terms and Conditions governing the use of our app and transit services.",
};

export default function TermsPage() {
  return <TermsContent />;
}
