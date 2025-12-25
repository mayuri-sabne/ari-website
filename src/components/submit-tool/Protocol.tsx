"use client";

import Link from "next/link";

/* ============================================================================
   UI COMPONENTS (HeaderBlock, OfferCard, PrincipleItem, MiniPill)
============================================================================ */

function HeaderBlock({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="space-y-2 max-w-3xl mb-10">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h2>
      <p className="text-md md:text-lg text-gray-900 dark:text-slate-200">
        {subtitle}
      </p>
    </div>
  );
}

function OfferCard({
  title,
  body,
  children,
}: {
  title: string;
  body: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className="
        group rounded-3xl p-6 transition backdrop-blur-xl border
        bg-white/60 border-blue-300/40 
        shadow-[0_16px_40px_rgba(0,0,0,0.06)]
        hover:shadow-[0_22px_64px_rgba(0,0,0,0.12)]
        dark:bg-white/5 dark:border-white/10
        dark:shadow-[0_16px_40px_rgba(15,23,42,0.7)]
        dark:hover:shadow-[0_22px_64px_rgba(15,23,42,0.85)]
        hover:-translate-y-1 space-y-4
      "
    >
      <h3 className="text-lg font-semibold text-blue-700 dark:text-sky-200">
        {title}
      </h3>

      <p className="text-md text-gray-800 dark:text-slate-200">{body}</p>

      {children}
    </div>
  );
}

function PrincipleItem({ title }: { title: string }) {
  return (
    <div className="p-3 rounded-xl bg-white/50 dark:bg-white/5 border border-blue-300/40 dark:border-white/10 backdrop-blur">
      <p className="text-sm font-medium text-gray-900 dark:text-white">
        {title}
      </p>
    </div>
  );
}

function MiniPill({ title, desc }: { title: string; desc: string }) {
  return (
    <div
      className="
        rounded-2xl px-4 py-4 text-center backdrop-blur-xl border
        bg-white/60 border-blue-300/40
        dark:bg-white/5 dark:border-white/10
        shadow-sm
      "
    >
      <div
        className="
          text-md font-semibold
          text-blue-700 dark:text-cyan-300
        "
      >
        {title}
      </div>
      <div className="text-[14px] mt-1 text-gray-700 dark:text-slate-300">
        {desc}
      </div>
    </div>
  );
}

/* ============================================================================
   MAIN PAGE — ARI FACT CHECK PROTOCOL
============================================================================ */

export default function ARIFactCheckProtocol() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-10 space-y-10">

      {/* ============================================================
          MAIN TITLE + FACT CHECKER NAME
      ============================================================ */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          ARI Fact-Check Protocol
        </h1>

        <p className="text-gray-700 dark:text-gray-300 mt-3 text-lg max-w-2xl mx-auto">
          Fact Checked by:{" "}
          <Link
            href="/about-us/mayuri-sabne"
            className="
              text-blue-600 dark:text-blue-300 font-medium underline decoration-2
              underline-offset-4 hover:text-blue-700 
              hover:decoration-blue-700 dark:hover:text-blue-200
              transition-all
            "
          >
            Mayuri Sabne
          </Link>
        </p>
      </div>

      {/* ============================================================
          INTRO SECTION
      ============================================================ */}
      <HeaderBlock
        title="ARI Fact-Check Protocol"
        subtitle="At AI Review Insider, accuracy is one of our main goals. Readers depend on us for clear and correct information about AI tools, so we follow a detailed fact-checking system for every article. Our ARI Fact-Check Protocol helps us keep information reliable, updated, and easy to understand. This protocol is used for all reviews, comparisons, pricing pages, and guides published on our website."
      />

      {/* ============================================================
          OUR COMMITMENT TO ACCURACY
      ============================================================ */}
      <OfferCard
        title="Our Commitment to Accuracy"
        body="We want every article to be clear, verified, and helpful. To support this, we build our content on facts that are checked, confirmed, and reviewed regularly. We aim to remove confusion and give readers information they can trust."
      />

      {/* ============================================================
          HOW THE PROTOCOL WORKS
      ============================================================ */}
      <HeaderBlock
        title="How the ARI Fact-Check Protocol Works"
        subtitle="Each step ensures information stays updated, accurate, and trustworthy."
      />

      {/* ------------------------------------------------------------
          1. Article Review Before Publishing
      ------------------------------------------------------------ */}
      <OfferCard
        title="1. Article Review Before Publishing"
        body="Every article goes through a full fact check before it appears on our website. This includes checking:"
      >
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          <PrincipleItem title="Tool features" />
          <PrincipleItem title="Pricing information" />
          <PrincipleItem title="Plan limits" />
          <PrincipleItem title="Speed claims" />
          <PrincipleItem title="Accuracy claims" />
          <PrincipleItem title="Tool updates" />
          <PrincipleItem title="Company details" />
          <PrincipleItem title="Comparisons between tools" />
        </div>

        <p className="text-sm text-gray-800 dark:text-slate-300 pt-4">
          If anything needs more clarity or proof, it is improved before the article becomes live.
        </p>
      </OfferCard>

      {/* ------------------------------------------------------------
          2. Monthly Review Cycle
      ------------------------------------------------------------ */}
      <OfferCard
        title="2. Monthly Review Cycle"
        body="AI tools change quickly, so we update our content often. We follow a monthly review cycle that covers all published pages. During each update, we check:"
      >
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          <PrincipleItem title="Changes in pricing" />
          <PrincipleItem title="New tools or new versions" />
          <PrincipleItem title="Changes in free plans" />
          <PrincipleItem title="Updates in feature lists" />
          <PrincipleItem title="New limitations" />
          <PrincipleItem title="Changes in accuracy or benchmarks" />
          <PrincipleItem title="Improvements released by tools" />
          <PrincipleItem title="Sections that may be outdated" />
        </div>

        <p className="text-sm text-gray-800 dark:text-slate-300 pt-4">
          If something has changed, the page is updated during that month.
        </p>
      </OfferCard>

      {/* ------------------------------------------------------------
          3. Extra Checks for Major Updates
      ------------------------------------------------------------ */}
      <OfferCard
        title="3. Extra Checks for Major Updates"
        body="Some tools release updates faster than expected. When this happens, we perform an extra fact check. Extra checks are made when:"
      >
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          <PrincipleItem title="A tool releases a major update" />
          <PrincipleItem title="A tool introduces a new feature" />
          <PrincipleItem title="A price changes suddenly" />
          <PrincipleItem title="A plan or credit limit changes" />
          <PrincipleItem title="A tool becomes unavailable" />
          <PrincipleItem title="A new policy is announced" />
        </div>

        <p className="text-sm text-gray-800 dark:text-slate-300 pt-4">
          This allows our pages to stay fresh and relevant.
        </p>
      </OfferCard>

      {/* ------------------------------------------------------------
          4. Multi-Source Verification
      ------------------------------------------------------------ */}
      <OfferCard
        title="4. Multi-Source Verification"
        body="To maintain accurate information, we confirm facts through more than one reliable source. We review:"
      >
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          <PrincipleItem title="Official tool documentation" />
          <PrincipleItem title="Pricing pages" />
          <PrincipleItem title="Product update notes" />
          <PrincipleItem title="Public announcements" />
          <PrincipleItem title="Verified reports" />
          <PrincipleItem title="Feature summaries" />
        </div>

        <p className="text-sm text-gray-800 dark:text-slate-300 pt-4">
          We compare details across sources before marking them as correct.
        </p>
      </OfferCard>

      {/* ============================================================
          WHAT WE FACT CHECK IN EVERY ARTICLE
      ============================================================ */}
      <HeaderBlock
        title="What We Fact Check in Every Article"
        subtitle="Every article undergoes detailed verification to ensure clarity and accuracy."
      />

      {/* ---------- Tool Features ---------- */}
      <OfferCard
        title="Tool Features"
        body="We check that all listed features exist in the tool’s current version. This includes:"
      >
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          <PrincipleItem title="Editing features" />
          <PrincipleItem title="Writing features" />
          <PrincipleItem title="Media generation features" />
          <PrincipleItem title="Team functions" />
          <PrincipleItem title="API access" />
          <PrincipleItem title="Integrations" />
          <PrincipleItem title="Automation options" />
          <PrincipleItem title="Which features belong to free or paid plans" />
        </div>
      </OfferCard>

      {/* ---------- Pricing and Plans ---------- */}
      <OfferCard
        title="Pricing and Plans"
        body="We check the most important pricing details, including:"
      >
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          <PrincipleItem title="Cost per month" />
          <PrincipleItem title="Cost per year" />
          <PrincipleItem title="Free plan limits" />
          <PrincipleItem title="Trial information" />
          <PrincipleItem title="Credit usage" />
          <PrincipleItem title="Add-on fees" />
        </div>
      </OfferCard>

      {/* ---------- Comparisons & Rankings ---------- */}
      <OfferCard
        title="Comparisons and Rankings"
        body="When tools are compared or ranked, we check:"
      >
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          <PrincipleItem title="Feature differences" />
          <PrincipleItem title="Pricing differences" />
          <PrincipleItem title="Strengths" />
          <PrincipleItem title="Weaknesses" />
          <PrincipleItem title="Supported formats" />
          <PrincipleItem title="Platform compatibility" />
          <PrincipleItem title="Latest updates" />
        </div>
      </OfferCard>

      {/* ---------- Performance & Quality ---------- */}
      <OfferCard
        title="Performance and Quality Claims"
        body="When our content mentions speed, accuracy, or output quality, we check that statements match verified information."
      />

      {/* ---------- Clarity ---------- */}
      <OfferCard
        title="Clarity of Statements"
        body="We check the full article to remove unclear or confusing statements. Every claim must be easy to understand and backed by accurate information."
      />

      {/* ============================================================
          HOW WE DISPLAY FACT CHECKED CONTENT
      ============================================================ */}
      <HeaderBlock
        title="How We Display Fact-Checked Content"
        subtitle=""
      />

      <OfferCard
        title="Fact-Check Label"
        body="Every article that completes the ARI Fact-Check Protocol shows this label:"
      >
        <MiniPill
          title="Fact Checked by: Mayuri Sabne"
          desc="This label confirms the article has passed the ARI Fact-Check Protocol."
        />
      </OfferCard>

      {/* ============================================================
          CORRECTION PROCESS
      ============================================================ */}
      <OfferCard
        title="Correction Process"
        body="If an error is found by readers or during our own checks, the page is corrected. Updates are made as soon as possible, and the review date is adjusted when needed."
      />

      {/* ============================================================
          WHY THIS PROTOCOL MATTERS
      ============================================================ */}
      <HeaderBlock
        title="Why This Protocol Matters"
        subtitle="AI tools change fast. Many websites do not update or verify their pages. The ARI Fact-Check Protocol provides consistent accuracy and dependable information."
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <MiniPill title="Verified information" desc="Information checked and confirmed." />
        <MiniPill title="Clear explanations" desc="Easy-to-understand guidance." />
        <MiniPill title="Updated monthly" desc="Changes are reviewed regularly." />
        <MiniPill title="Fair comparisons" desc="Honest and balanced." />
        <MiniPill title="Trustworthy content" desc="Every detail is validated." />
        <MiniPill title="Helpful guides" desc="Everything is simple and useful." />
      </div>

      {/* ============================================================
          FACT CHECKER
      ============================================================ */}
      <OfferCard
        title="Fact Checker"
        body="All articles that show the Fact Checked By: Mayuri Sabne label have completed the ARI Fact-Check Protocol."
      >
        <p className="text-sm text-gray-800 dark:text-slate-300">
          Fact Checked By:{" "}
          <Link
            href="/about-us/mayuri-sabne"
            className="
              text-blue-600 dark:text-blue-300 font-medium underline decoration-2
              underline-offset-4 hover:text-blue-700 
              hover:decoration-blue-700 dark:hover:text-blue-200
              transition-all
            "
          >
            Mayuri Sabne
          </Link>
        </p>
      </OfferCard>

    </section>
  );
}
