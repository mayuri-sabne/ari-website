"use client";

import { useState } from "react";
import { submitTool } from "@/lib/api";

export default function SubmitToolSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [toolName, setToolName] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await submitTool({ name, email, toolName, website, message });
      setStatus("SUCCESS");

      // Reset fields
      setName("");
      setEmail("");
      setToolName("");
      setWebsite("");
      setMessage("");
    } catch (error) {
      setStatus("ERROR");
    }

    setLoading(false);
  }

  return (
<section className="py-16">
  <div
    className="
      mx-auto max-w-3xl rounded-3xl px-8 py-10 text-center space-y-6
      backdrop-blur-xl border transition-all

      /* ---------- LIGHT MODE (UPDATED) ---------- */
      bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100
      border-blue-300/60
      shadow-[0_22px_55px_rgba(120,53,15,0.25)]
      text-slate-900

      /* ---------- DARK MODE (UNCHANGED) ---------- */
      dark:bg-white/5
      dark:bg-none
      dark:border-white/10
      dark:shadow-[0_22px_55px_rgba(15,23,42,0.7)]
      dark:text-white
    "
  >
    <h2 className="text-3xl font-semibold">
      Submit an AI Tool
    </h2>

    <p
      className="
        text-sm md:text-base max-w-md mx-auto

        /* LIGHT */
        text-slate-700

        /* DARK */
        dark:text-slate-300
      "
    >
      Know an awesome AI tool that should be featured on AI Review Insider?
      Submit it here — we’ll review it and possibly publish it!
    </p>

    <form onSubmit={handleSubmit} className="space-y-5">

      {/* NAME */}
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="
          w-full rounded-xl px-4 py-3 backdrop-blur-md focus:outline-none

          /* LIGHT */
          bg-white/70
          border border-blue-300
          text-slate-900
          placeholder:text-slate-500
          focus:ring-2 focus:ring-blue-500

          /* DARK */
          dark:bg-white/10
          dark:border-white/20
          dark:text-white
          dark:placeholder:text-slate-300
          dark:focus:ring-sky-400
        "
      />

      {/* EMAIL */}
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="
          w-full rounded-xl px-4 py-3 backdrop-blur-md focus:outline-none

          /* LIGHT */
          bg-white/70
          border border-blue-300
          text-slate-900
          placeholder:text-slate-500
          focus:ring-2 focus:ring-blue-500

          /* DARK */
          dark:bg-white/10
          dark:border-white/20
          dark:text-white
          dark:placeholder:text-slate-300
          dark:focus:ring-sky-400
        "
      />

      {/* TOOL NAME */}
      <input
        type="text"
        placeholder="AI Tool Name"
        value={toolName}
        onChange={(e) => setToolName(e.target.value)}
        required
        className="
          w-full rounded-xl px-4 py-3 backdrop-blur-md focus:outline-none

          /* LIGHT */
          bg-white/70
          border border-blue-300
          text-slate-900
          placeholder:text-slate-500
          focus:ring-2 focus:ring-blue-500

          /* DARK */
          dark:bg-white/10
          dark:border-white/20
          dark:text-white
          dark:placeholder:text-slate-300
          dark:focus:ring-sky-400
        "
      />

      {/* WEBSITE */}
      <input
        type="url"
        placeholder="Tool Website (https://...)"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        required
        className="
          w-full rounded-xl px-4 py-3 backdrop-blur-md focus:outline-none

          /* LIGHT */
          bg-white/70
          border border-blue-300
          text-slate-900
          placeholder:text-slate-500
          focus:ring-2 focus:ring-blue-500

          /* DARK */
          dark:bg-white/10
          dark:border-white/20
          dark:text-white
          dark:placeholder:text-slate-300
          dark:focus:ring-sky-400
        "
      />

      {/* MESSAGE */}
      <textarea
        placeholder="Tell us why this tool should be added..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={5}
        required
        className="
          w-full rounded-xl px-4 py-3 backdrop-blur-md focus:outline-none

          /* LIGHT */
          bg-white/70
          border border-blue-300
          text-slate-900
          placeholder:text-slate-500
          focus:ring-2 focus:ring-blue-500

          /* DARK */
          dark:bg-white/10
          dark:border-white/20
          dark:text-white
          dark:placeholder:text-slate-300
          dark:focus:ring-sky-400
        "
      />

      {/* BUTTON */}
      <button
        type="submit"
        disabled={loading}
        className="
          w-full py-3 rounded-full font-semibold transition-all duration-300

          /* LIGHT */
          bg-gradient-to-r from-blue-700 to-cyan-500
          text-white
          hover:shadow-[0_0_30px_rgba(56,189,248,0.5)]

          /* DARK */
          dark:from-sky-500 dark:to-blue-600
          dark:hover:shadow-[0_0_30px_rgba(56,189,248,0.5)]

          disabled:opacity-50 disabled:cursor-not-allowed
        "
      >
        {loading ? "Submitting..." : "Submit Tool"}
      </button>
    </form>

    {status === "SUCCESS" && (
      <p className="text-green-500 dark:text-green-400 text-sm">
        Tool submitted successfully!
      </p>
    )}

    {status === "ERROR" && (
      <p className="text-red-500 dark:text-red-400 text-sm">
        Failed to submit tool.
      </p>
    )}
  </div>
</section>


  );
}
