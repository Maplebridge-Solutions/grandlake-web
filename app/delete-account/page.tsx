import type { Metadata } from "next";
import { DeleteAccount } from "@/components/policies/DeleteAccount";

export const metadata: Metadata = {
  title: "Delete Your Account",
  description: "Learn how to permanently delete your GLKTransit account from the mobile app.",
};

export default function DeleteAccountPage() {
  return <DeleteAccount />;
}
