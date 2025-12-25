import TermsPage from "@/components/submit-tool/Termspage"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms & Conditions – AI Review Insider",
  description:
    "Read the Terms & Conditions of AI Review Insider governing access to our website, reviews, content, and services.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.aireviewinsider.com/terms",
  },
  openGraph: {
    title: "Terms & Conditions – AI Review Insider",
    description:
      "Official Terms & Conditions for using AI Review Insider, including content disclaimers, user responsibilities, and legal information.",
    url: "https://www.aireviewinsider.com/terms",
    siteName: "AI Review Insider",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terms & Conditions – AI Review Insider",
    description:
      "Understand the terms governing your use of AI Review Insider and our services.",
  },
}

export default function TermsPageRoute() {
  return <TermsPage />
}
