"use client";
import Image from "next/image";
import Link from "next/link";
import ContactSection from "./Contact";

/* TEAM */
const team = [
  {
    name: "Akash Mane",
    role: "Founder and Chief Executive Officer (CEO)",
    bio: "Leads company vision, strategy, operations, and long term direction.",
    image: "/akash.jpg",
  },
  {
    name: "Shreyash Shinde",
    role: "Founder and Chief Marketing Officer (CMO)",
    bio: "Oversees brand growth, marketing strategy, social presence, and audience expansion.",
    image: "/shreyash.jpg",
  },
  {
    name: "Mayuri Sabne",
    role: "Founder and Chief Technology Officer (CTO)",
    bio: "Handles technical systems, platform development, and the ARI Fact-Check Protocol.",
    image: "/mayuri.jpg",
  },
];

/* SOCIAL */
const socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/aireviewinsider/", label: "LinkedIn" },
  { name: "Reddit", href: "https://www.reddit.com/r/AiReviewInsiderHQ/", label: "Reddit" },
  { name: "Twitter", href: "https://x.com/aireviewinsider", label: "Twitter" },
  { name: "Instagram", href: "https://www.instagram.com/aireviewinsider", label: "Instagram" },
];

/* ----------------------------- PAGE ----------------------------- */

export default function AboutUs() {
  return (
    <div
      className="
        min-h-screen 
        text-gray-900 dark:text-slate-100
      "
    >
      <main className="max-w-6xl mx-auto px-6 md:px-10 lg:px-20 py-16 space-y-16">

        {/* HERO / ABOUT */}
        <section className="space-y-8">
          <div
            className="
              inline-flex items-center rounded-full px-4 py-1 text-xs font-medium backdrop-blur-md
              border dark:border-white/10 border-blue-300/40
              bg-white/40 dark:bg-white/5
              text-blue-700 dark:text-sky-200
            "
          >
            <span
              className="
                mr-2 h-1.5 w-1.5 rounded-full 
                bg-blue-500 dark:bg-sky-400
              "
            />
            About AI Review Insider
          </div>

          <div className="grid gap-10 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1.1fr)] items-start">

            {/* LEFT */}
              <div className=" mb-10">
         <h1
  className=" 
  dark:text-white
    text-4xl md:text-5xl font-extrabold tracking-tight text-black 
    mb-6 leading-[1.2]
  "
>
  Helping you choose the{" "}
<span
  className="
    bg-gradient-to-r

    /* LIGHT MODE — AI blue theme */
    from-blue-700
    to-cyan-600

    /* DARK MODE — keep as-is (already correct) */
    dark:from-sky-400
    dark:to-blue-500
      dark:from-sky-400 dark:to-blue-500

    bg-clip-text text-transparent
  "
>
  right AI tools
</span>
{" "}
  with confidence.
</h1>


              <div className="space-y-3 text-sm md:text-base text-gray-700 dark:text-slate-300">
                <p>
                  Our goal at AI Review Insider is to help readers choose the right AI
                  tools with confidence. We focus on providing clear, useful, and
                  easy-to-understand information about AI products, features, pricing,
                  updates, and performance.
                </p>
                <p>
                  We explain the strengths and limitations of each tool, so you can find
                  the best fit for your work, projects, or business needs. With
                  thousands of tools launching every month, finding the right one can
                  feel overwhelming, and that is exactly where we try to make things
                  easier for you.
                </p>
              </div>
            </div>

            {/* RIGHT GLASS CARD */}
            <div className="relative">

              {/* Glow */}
              <div
                className="
                  absolute inset-0 rounded-3xl blur-3xl opacity-70
                  bg-gradient-to-tr
                  from-sky-300/30 via-blue-200/30 to-cyan-200/30
                  dark:from-sky-500/20 dark:via-blue-500/15 dark:to-cyan-400/20
                "
              />

              <div
                className="
                  relative rounded-3xl backdrop-blur-xl space-y-5 px-6 py-6 md:px-7 md:py-7
                  border dark:border-white/10 border-sky-300/50
                  bg-white/60 dark:bg-white/5
                  shadow-[0_24px_60px_rgba(0,0,0,0.08)]
                  dark:shadow-[0_24px_60px_rgba(15,23,42,0.8)]
                "
              >
                <h2
                  className="
                    text-xs font-semibold uppercase tracking-[0.25em]
                    text-gray-600 dark:text-slate-300
                  "
                >
                  Our Background and Mission
                </h2>

                <p className="text-sm text-gray-800 dark:text-slate-200">
                  AI Review Insider was created to help professionals, creators, and
                  small teams make better decisions in a fast changing AI world.
                </p>

                <p className="text-sm text-gray-700 dark:text-slate-300">
                  Our mission is to simplify this process by offering reliable reviews,
                  accurate comparisons, and updated information on the most important AI
                  tools.
                </p>

                <p className="text-sm text-gray-700 dark:text-slate-300">
                  We focus on what matters most for our readers: trust, clarity, and
                  transparency. Our aim is to break down complex AI features into simple
                  explanations that anyone can understand, so you can spend more time
                  using tools that actually help.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-2">
                  <MiniPill
                    title="Trust"
                    desc="Honest, balanced insights."
                  />
                  <MiniPill title="Clarity" desc="Simple language." />
                  <MiniPill title="Transparency" desc="Strengths & limits shown." />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE OFFER */}
        <section className="space-y-6">
          <HeaderBlock
            title="What AI Review Insider Offers"
            subtitle="AI Review Insider provides detailed reviews, comparisons, and insights across the most important areas of the AI industry. We focus on information that readers find valuable."
          />

          <div className="grid gap-6 md:grid-cols-3">
            <OfferCard
              title="AI Tool Reviews"
              body="Clear explanations of features, strengths, and limitations across writing, image, video, audio, automation, coding, and productivity tools."
            />
            <OfferCard
              title="Comparison Guides"
              body="Side by side comparisons that highlight important differences in pricing, performance, quality, use cases, and overall experience."
            />
            <OfferCard
              title="Pricing and Plan Breakdowns"
              body="Simple and updated explanations of free plans, paid plans, limits, credit usage, and extra features."
            />
            <OfferCard
              title="Performance and Quality Checks"
              body="Balanced insights into speed, accuracy, and output quality."
            />
            <OfferCard
              title="Ease of Use and User Experience"
              body="Information about setup, workflow, reliability, and learning curves."
            />
            <OfferCard
              title="AI News and Updates"
              body="Regular updates on major changes, new launches, tool improvements, and industry trends."
            />
          </div>
        </section>

        {/* FEATURES */}
        <section className="space-y-6">
          <HeaderBlock
            title="Helpful Tools and Features"
            subtitle="We have created simple comparison tools and resources to make decision making easier."
          />

          <div className="grid gap-6 md:grid-cols-3">
            <OfferCard
              title="AI Tool Comparison Tables"
              body="View important details side by side, including features, limits, speed, and usability."
            />
            <OfferCard
              title="Best AI Tools Lists"
              body="Carefully selected lists of the top tools for writing, video creation, audio editing, coding, design, and automation."
            />
            <OfferCard
              title="Regular Updates"
              body="We update our content often to make sure readers always see accurate information."
            />
          </div>
        </section>

        {/* PRINCIPLES */}
        <section className="grid gap-8 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1.1fr)] items-start">
          <div className="space-y-5">
            <h2
              className="
                text-2xl md:text-3xl font-semibold
                text-gray-900 dark:text-white
              "
            >
              Guiding Principles
            </h2>

            <PrincipleItem
              title="Transparency and Clarity"
              body="We aim to give readers clear, honest information. Every review highlights both advantages and limitations."
            />
            <PrincipleItem
              title="User Focus"
              body="Our content is created for professionals, creators, students, teams, and anyone looking to work smarter with AI."
            />
            <PrincipleItem
              title="Simple and Useful Insights"
              body="AI can feel complicated — we simplify everything into clear guides that help readers make informed decisions quickly."
            />
            <PrincipleItem
              title="Consistency and Accuracy"
              body="We follow our ARI Fact-Check Protocol. All information is reviewed regularly for accuracy."
            />
          </div>

          <div
            className="
              rounded-3xl px-6 py-6 md:px-7 md:py-7 backdrop-blur-xl space-y-4 border
              bg-white/60 border-sky-300/40 shadow-[0_24px_60px_rgba(0,0,0,0.08)]
              dark:bg-white/5 dark:border-white/10 dark:shadow-[0_24px_60px_rgba(15,23,42,0.7)]
            "
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Transparency of Information
            </h3>

            <p className="text-sm text-gray-800 dark:text-slate-200">
              At AI Review Insider, we believe readers deserve information they can trust.
              Our reviews and comparisons are created with a focus on honesty,
              accuracy, and fairness.
            </p>

            <p className="text-sm text-gray-700 dark:text-slate-300">
              We check tool updates often and adjust our pages when changes happen.
              Our goal is to offer information that stays current, easy to follow,
              and helpful for real world use.
            </p>
          </div>
        </section>

        {/* TEAM */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2
              className="
                text-2xl md:text-3xl font-semibold
                text-gray-900 dark:text-white
              "
            >
              Management Team
            </h2>

            <p className="text-sm md:text-base text-gray-700 dark:text-slate-300 max-w-2xl">
              Our management team leads AI Review Insider with a focus on honest
              information, strong systems, and long-term trust with readers.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="
                  group rounded-3xl p-4 backdrop-blur-xl transition border
                  bg-white/50 border-sky-300/40 shadow-[0_18px_45px_rgba(0,0,0,0.08)]
                  hover:-translate-y-1 dark:bg-white/5 dark:border-white/10
                  dark:shadow-[0_18px_45px_rgba(15,23,42,0.7)]
                "
              >
                <div className="space-y-3 text-center">
                  <div
                    className="
                      relative w-full aspect-[3/4] overflow-hidden rounded-2xl border 
                      border-sky-300/40 dark:border-white/10
                    "
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="
                        object-cover group-hover:scale-105 
                        transition-transform duration-200
                      "
                    />
                  </div>

                  <div className="space-y-1">
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">
                      {member.name}
                    </div>

                    <div
                      className="
                        text-[11px] font-medium uppercase tracking-wide
                        text-sky-600 dark:text-sky-300
                      "
                    >
                      {member.role}
                    </div>
                  </div>

                  <p className="text-xs text-gray-700 dark:text-slate-300">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SOCIAL MEDIA */}
        <section className="space-y-4 pb-4">
          <h2
            className="
              text-xl md:text-2xl font-semibold
              text-gray-900 dark:text-white
            "
          >
            AI Review Insider Social Media
          </h2>

          <p className="text-sm text-gray-700 dark:text-slate-300 max-w-xl">
            Follow AI Review Insider on social media to stay updated on new reviews,
            AI tool launches, comparisons, and insights from the team.
          </p>

          <div className="flex flex-wrap gap-3">
            {socials.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="
                  group inline-flex items-center rounded-full px-4 py-2 text-sm font-medium 
                  backdrop-blur-md border 
                  bg-white/50 border-sky-300/40 text-gray-900
                  hover:bg-white/70 transition
                  dark:bg-white/5 dark:border-white/10 dark:text-slate-100 
                  dark:hover:bg-white/10
                "
              >
                <span
                  className="
                    mr-2 h-1.5 w-1.5 rounded-full
                    bg-sky-500 dark:bg-sky-400
                    group-hover:bg-sky-600 dark:group-hover:bg-sky-300
                    transition-colors
                  "
                />
                {social.label}
              </Link>
            ))}
          </div>
        </section>

        <ContactSection />
      </main>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* ------------------- LIGHT/DARK COMPONENTS ------------------------ */
/* ------------------------------------------------------------------ */

function HeaderBlock({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="space-y-2 max-w-3xl">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h2>
      <p className="text-sm md:text-base text-gray-700 dark:text-slate-300">
        {subtitle}
      </p>
    </div>
  );
}

function OfferCard({ title, body }: { title: string; body: string }) {
  return (
    <div
      className="
        group rounded-3xl p-5 transition backdrop-blur-xl border

        /* LIGHT */
        bg-white/60 border-sky-300/40
        shadow-[0_16px_40px_rgba(0,0,0,0.06)]
        hover:shadow-[0_22px_64px_rgba(0,0,0,0.12)]

        /* DARK */
        dark:bg-white/5 dark:border-white/10
        dark:shadow-[0_16px_40px_rgba(15,23,42,0.7)]
        dark:hover:shadow-[0_22px_64px_rgba(15,23,42,0.85)]

        hover:-translate-y-1
      "
    >
      <h3 className="text-sm font-semibold mb-2 text-sky-700 dark:text-sky-200">
        {title}
      </h3>
      <p className="text-xs md:text-sm text-gray-700 dark:text-slate-300">{body}</p>
    </div>
  );
}

function PrincipleItem({ title, body }: { title: string; body: string }) {
  return (
    <div className="space-y-1">
      <div className="text-sm font-semibold text-gray-900 dark:text-white">{title}</div>
      <p className="text-xs md:text-sm text-gray-700 dark:text-slate-300">{body}</p>
    </div>
  );
}

function MiniPill({ title, desc }: { title: string; desc: string }) {
  return (
    <div
      className="
        rounded-2xl px-3 py-3 text-center backdrop-blur-xl border
        bg-white/60 border-sky-300/40
        dark:bg-white/5 dark:border-white/10
      "
    >
      <div
        className="
          text-sm font-semibold
          text-sky-700 dark:text-cyan-300
          break-words md:whitespace-nowrap
        "
      >
        {title}
      </div>

      <div className="text-[11px] mt-1 text-gray-700 dark:text-slate-300">{desc}</div>
    </div>
  );
}
