"use client";

export default function TermsPage() {
  return (
  <section className="relative min-h-screen px-4 sm:px-6 py-20 sm:py-28">
  <div className="relative z-10 max-w-5xl mx-auto">

    {/* GLASS CARD */}
    <div
      className="
        rounded-3xl p-6 sm:p-8 md:p-12
        backdrop-blur-2xl
        space-y-10
        transition-colors

        /* DARK MODE (UNCHANGED) */
        dark:bg-none
        dark:bg-white/5
        dark:border dark:border-white/10
        dark:shadow-[0_25px_60px_rgba(0,0,0,0.55)]

        /* LIGHT MODE */
        bg-gradient-to-br from-slate-50/80 via-blue-50/60 to-slate-100/80
        border border-slate-200
        shadow-[0_25px_55px_rgba(15,23,42,0.12)]
      "
    >

      {/* HEADER */}
      <header className="space-y-3 text-center">
        <h1
          className="
            text-3xl sm:text-4xl md:text-5xl font-extrabold

            /* DARK */
            dark:bg-gradient-to-r dark:from-white dark:via-gray-200 dark:to-white
            dark:bg-clip-text dark:text-transparent
            dark:drop-shadow-[0_4px_20px_rgba(255,255,255,0.2)]

            /* LIGHT */
            text-slate-900
          "
        >
          Terms & Conditions
        </h1>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400">
          Last Updated: <span className="font-medium">16 December 2025</span>
          <br />
          Effective Date: <span className="font-medium">16 December 2025</span>
        </p>
      </header>

      {/* INTRO BLOCK */}
      <div
        className="
          rounded-2xl p-5 sm:p-6 space-y-4

          /* DARK */
          dark:bg-white/5
          dark:border dark:border-white/10
          dark:text-gray-300
          dark:shadow-inner

          /* LIGHT */
          bg-white/70
          border border-slate-200
          text-slate-700
          shadow-inner
        "
      >
        <p>
          Welcome to AI Review Insider (“we”, “our”, or “us”). These Terms &
          Conditions (“Terms”) govern your access to and use of our website,
          newsletter, content, and related services (“Services”).
        </p>

        <p>
          By using the Services, you agree to these Terms. If you do not agree,
          please discontinue using the Services.
        </p>
      </div>

          {/* SECTIONS */}
          <Section
            title="1. About AI Review Insider"
            points={[
              "Name: AI Review Insider",
              "Country of Operation: India",
              "Contact Email: support@aireviewinsider.com",
            ]}
            text="We are an independent informational platform offering reviews, analysis, and educational content related to AI tools and technologies. Our Services are accessible worldwide."
          />

          <Section
            title="2. Eligibility to Use the Services"
            points={[
              "You must be at least 13 years old (or 16 where required by law)",
              "You must be legally allowed to use the Services in your region",
            ]}
            text="By using the Services, you confirm you meet these eligibility requirements. The Services are not intended for children below the minimum legal age."
          />

          <Section
            title="3. Nature of Content & Educational Disclaimer"
            text="All content is for informational and educational purposes only. Content does not substitute professional, legal, medical, financial, or investment advice."
            points={[
              "Reviews represent independent analysis at publication time",
              "Information may become outdated as AI tools evolve",
              "Reliance on any content is at your own risk",
            ]}
          />

          <Section
            title="4. No Guarantees or Warranties"
            text="To the fullest extent permitted by law, the Services are provided “as is” and “as available,” without warranties."
            points={[
              "Accuracy or completeness of information",
              "Reliability or availability",
              "Suitability or usefulness",
            ]}
          />

          <Section
            title="5. User Responsibilities & Acceptable Use"
            text="You agree NOT to misuse the Services."
            points={[
              "No disrupting or harming the platform or users",
              "No copying, scraping, or redistributing content",
              "No unlawful, harmful, deceptive, or abusive activities",
            ]}
          />

          <Section
            title="6. Newsletter & Communications"
            text="By subscribing, you agree to receive emails from AI Review Insider."
            points={[
              "You can unsubscribe anytime",
              "No guaranteed frequency or continuity of emails",
              "Communications may stop or change at any time",
            ]}
          />

          <Section
            title="7. Intellectual Property Rights"
            text="All content—including reviews, graphics, branding, analysis, and scoring frameworks—belongs to AI Review Insider."
            points={[
              "You may share content for personal, non-commercial use with attribution",
              "You may not reproduce, sell, license, or commercially use content without permission",
            ]}
          />

          <Section
            title="8. Third-Party Tools & Links"
            points={[
              "We do not control or endorse third-party sites",
              "We are not responsible for third-party practices or availability",
              "Use third-party tools at your own risk",
            ]}
          />

          <Section
            title="9. No Affiliation or Endorsement"
            text="Unless stated, AI Review Insider is not affiliated with any companies whose tools we review."
            points={[
              "Trademarks and logos belong to their respective owners",
              "Reviews do not imply endorsement or partnership",
            ]}
          />

          <Section
            title="10. Future Monetization & Affiliate Transparency"
            text="Currently, we do not earn affiliate commissions or sponsorship revenue."
            points={[
              "Future monetization may include affiliate links or partnerships",
              "Any such changes will be clearly disclosed",
              "Editorial independence remains a priority",
            ]}
          />

          <Section
            title="11. Limitation of Liability"
            text="To the maximum extent allowed by law, we are not liable for damages arising from:"
            points={[
              "Direct or indirect losses",
              "Loss of data, business, or profits",
              "Decisions based on our content",
              "Errors, omissions, or outdated information",
            ]}
          />

          <Section
            title="12. Indemnification"
            text="You agree to indemnify AI Review Insider against claims arising from your misuse of the Services."
          />

          <Section
            title="13. Suspension or Termination"
            text="We may suspend or terminate access for misuse or for platform updates, with or without notice."
          />

          <Section
            title="14. Changes to the Services or Terms"
            text="We may update content, features, or Terms at any time. Continued use after updates indicates acceptance."
          />

          <Section
            title="15. Governing Law & Jurisdiction"
            text="These Terms are governed by the laws of India. Courts in India have jurisdiction where permitted."
          />

          <Section
            title="16. Severability"
            text="If any provision is invalid, remaining provisions continue in full effect."
          />

          <Section
            title="17. Entire Agreement"
            text="These Terms and our Privacy Policy constitute the full agreement between you and AI Review Insider."
          />

          <Section
            title="18. Contact Us"
            text={
              <>
                For questions, email us at:{" "}
                <a
                  href="mailto:support@aireviewinsider.com"
                  className="text-sky-400 hover:underline"
                >
                  support@aireviewinsider.com
                </a>
              </>
            }
          />
        </div>
      </div>
    </section>
  );
}

/* -----------------------------------------------
   Shared Components
----------------------------------------------- */

function Section({
  title,
  text,
  points,
}: {
  title: string;
  text?: any;
  points?: string[];
}) {
  return (
    <div className="space-y-4">

      {/* SECTION TITLE */}
      <h2
        className="
          text-lg sm:text-xl font-bold

          /* DARK MODE */
          dark:text-white

          /* LIGHT MODE */
          text-slate-900
        "
      >
        {title}
      </h2>

      {/* PARAGRAPH TEXT */}
      {text && (
        <p
          className="
            text-sm sm:text-base leading-relaxed

            /* DARK MODE */
            dark:text-gray-300

            /* LIGHT MODE */
            text-slate-700
          "
        >
          {text}
        </p>
      )}

      {/* BULLET POINTS */}
      {points && <List items={points} />}
    </div>
  );
}


function List({ items }: { items?: string[] }) {
  if (!items) return null;

  return (
    <ul
      className="
        list-disc pl-5 sm:pl-6 space-y-2
        text-sm sm:text-base

        /* DARK MODE */
        dark:text-gray-300

        /* LIGHT MODE */
        text-slate-700
      "
    >
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  );
}

