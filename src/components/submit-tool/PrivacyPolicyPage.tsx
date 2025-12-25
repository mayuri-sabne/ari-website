"use client";

export default function PrivacyPolicyPage() {
  return (
  <section className="relative min-h-screen px-4 sm:px-6 py-20 sm:py-28">
  {/* CONTAINER */}
  <div className="relative z-10 max-w-5xl mx-auto">

    {/* GLASSY CARD */}
    <div
      className="
        rounded-3xl p-6 sm:p-8 md:p-12
        backdrop-blur-2xl
        space-y-10
        transition-colors

        /* DARK MODE (UNCHANGED) */
        dark:bg-white/5
        dark:bg-none
        dark:border dark:border-white/10
        dark:shadow-[0_25px_60px_rgba(0,0,0,0.55)]

        /* LIGHT MODE */
        bg-gradient-to-br from-slate-50/80 via-blue-50/60 to-slate-100/80
        border border-slate-200
        shadow-[0_25px_55px_rgba(15,23,42,0.12)]
      "
    >

      {/* TITLE HEADER */}
      <header className="text-center space-y-2">
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
          Privacy Policy
        </h1>

        <p className="text-xs sm:text-sm tracking-wide text-slate-600 dark:text-gray-300">
          Last Updated: <span className="font-medium">16 December 2025</span>
        </p>
      </header>

      {/* CONTENT */}
      <div
        className="
          space-y-10
          text-sm sm:text-[15px]
          leading-relaxed

          text-slate-700 dark:text-gray-200
        "
      >

        {/* INTRO */}
        <div
          className="
            rounded-2xl p-5 sm:p-6 space-y-3

            /* DARK */
            dark:bg-white/5
            dark:border dark:border-white/10
            dark:shadow-inner

            /* LIGHT */
            bg-white/70
            border border-slate-200
            shadow-inner
          "
        >
          <p>
            AI Review Insider (“we”, “our”, or “us”) respects your privacy and is
            committed to safeguarding your data through transparent and minimal
            data practices.
          </p>

          <p>
            This Privacy Policy describes how we collect, use, store, and protect
            your information when accessing our website or services.
          </p>

          <p>This Privacy Policy applies to users worldwide.</p>
        </div>

            {/* SECTIONS */}
            <Section
              title="1. Who We Are"
              points={[
                "Name: AI Review Insider",
                "Country of Operation: India",
                "Contact Email: support@aireviewinsider.com",
              ]}
              text="For data protection purposes, we act as the data controller for personal data processed through our services."
            />

            <Section
              title="2. Information We Collect"
              text="We collect only essential information necessary to operate and improve our services."
            />

            {/* SUBSECTION */}
            <SubSection title="A. Information You Provide Voluntarily" />
            <List
              items={[
                "Email address for newsletters",
                "Information shared when contacting us",
              ]}
            />

            <SubSection title="We do NOT require:" />
            <List
              items={[
                "User accounts",
                "Payments",
                "Identity verification",
                "Personal profiles",
              ]}
            />

            <SubSection title="B. Information Collected Automatically" />
            <List
              items={[
                "IP address (temporary, security + analytics)",
                "Browser, OS, and device information",
                "Pages visited and duration",
                "Referral traffic",
              ]}
            />

            <p className="text-gray-700 dark:text-gray-400">
              This information is aggregated and anonymized.
            </p>

            <SubSection title="C. Information We Do NOT Collect" />
            <List
              items={[
                "Financial or payment data",
                "Government IDs",
                "Biometric or health data",
                "Precise geolocation",
                "Sensitive personal information",
              ]}
            />

            <Section
              title="3. How We Use Information"
              points={[
                "Sending newsletters",
                "Responding to inquiries",
                "Improving site functionality",
                "Security and abuse prevention",
              ]}
            />

            <p className="text-gray-700 dark:text-gray-400">
              We do NOT use data for advertising, profiling, or automated
              decision-making.
            </p>

            <Section
              title="4. Legal Basis for Processing"
              points={["Consent", "Legitimate interests", "Legal obligations"]}
            />

            <Section
              title="5. AI-Related Data Practices"
              points={[
                "No personal data used to train AI models",
                "No data selling",
                "No uploading user data to AI tools",
              ]}
            />

            <Section title="6. Analytics" text="We use privacy-focused analytics tools that avoid personal tracking." />

            <Section title="7. Cookies" text="We use only essential and analytics cookies, no advertising cookies." />

            <Section
              title="8. Affiliates & Promotions"
              text="We currently do not use affiliate links or paid promotions. If this changes, we will update this policy."
            />

            <Section
              title="9. Data Sharing"
              text="We share data only with trusted service providers essential for operations. We do not sell personal data."
            />

            <Section
              title="10. International Data Processing"
              text="Data may be processed outside India with adequate safeguards."
            />

            <Section
              title="11. Data Retention"
              points={[
                "Newsletter emails until unsubscribe",
                "Support inquiries until resolved",
                "Logs deleted periodically",
              ]}
            />

            <Section
              title="12. Your Rights"
              text="You may request access, correction, deletion, or withdraw consent anytime."
            />

            <Section
              title="13. Children’s Privacy"
              text="Our services are not intended for children under legally permitted age ranges."
            />

            <Section
              title="14. Security"
              text="We apply industry-standard security practices to protect your information."
            />

            <Section
              title="15. Compliance with Indian Law"
              text="We comply with the Digital Personal Data Protection Act, 2023."
            />

            <Section
              title="16. Changes to This Policy"
              text="We may update this policy periodically. Changes will be reflected with a new 'Last Updated' date."
            />

            <Section title="17. Contact Us"    
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
            } />
          </div>
        </div>
      </div>
    </section>
  );
}

/* -----------------------------------------------
   Reusable Sub Components
----------------------------------------------- */

function Section({
  title,
  text,
  points,
}: {
  title: string;
  text?: string | React.ReactNode;
  points?: string[];
}) {
  return (
    <div className="space-y-4">
      <h2
        className="
          text-xl font-bold
          text-slate-900 dark:text-white
        "
      >
        {title}
      </h2>

      {text && (
        <p
          className="
            text-sm sm:text-xl leading-relaxed
            text-slate-700 dark:text-gray-100
          "
        >
          {text}
        </p>
      )}

      {points && <List items={points} />}
    </div>
  );
}


function SubSection({ title }: { title: string }) {
  return (
    <h3
      className="
        text-base sm:text-lg font-semibold mt-3
        text-slate-700 dark:text-gray-300
      "
    >
      {title}
    </h3>
  );
}


function List({ items }: { items: string[] }) {
  return (
    <ul
      className="
        list-disc pl-5 sm:pl-6 space-y-2
        text-sm sm:text-[15px]
        text-slate-700 dark:text-gray-300
      "
    >
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

