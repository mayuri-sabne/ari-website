import PrivacyPolicyPage from "@/components/submit-tool/PrivacyPolicyPage"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy – AI Review Insider",
  description:
    "Read the Privacy Policy of AI Review Insider to understand how we collect, use, and protect your data with transparency and minimal data practices.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.aireviewinsider.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy – AI Review Insider",
    description:
      "Learn how AI Review Insider protects your privacy and handles data responsibly.",
    url: "https://www.aireviewinsider.com/privacy-policy",
    siteName: "AI Review Insider",
    type: "website",
  },
}

export default function PrivacyPolicy() {
  return <PrivacyPolicyPage />
}
