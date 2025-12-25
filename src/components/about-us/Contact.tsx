"use client";

import { useState } from "react";
import { sendContactForm } from "@/lib/api";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await sendContactForm({ name, email, message });
      setStatus("SUCCESS");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("ERROR");
    }

    setLoading(false);
  }

  return (
 <section className="py-16">
 <div
  className="
    mx-auto max-w-3xl rounded-3xl px-8 py-10 text-center space-y-6
    backdrop-blur-xl border shadow-lg

    /* LIGHT MODE — blue AI card */
    bg-white/80
    border-blue-200/60
    shadow-[0_22px_55px_rgba(59,130,246,0.18)]

    /* DARK MODE — unchanged */
    dark:bg-white/5
    dark:border-white/10
    dark:shadow-[0_22px_55px_rgba(15,23,42,0.7)]
  "
>

  <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
  Get in Touch
</h2>

<p className="text-slate-600 dark:text-slate-300 text-sm md:text-base max-w-md mx-auto">
  Have suggestions, questions, or collaboration ideas?
  We’d love to hear from you.
</p>


    <form onSubmit={handleSubmit} className="space-y-5">
      {/* INPUT */}
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
       className="
  w-full rounded-xl px-4 py-3 backdrop-blur-md focus:outline-none

  /* LIGHT MODE */
  bg-white
  border border-blue-200
  text-slate-900
  placeholder:text-slate-400
  focus:ring-2 focus:ring-blue-500

  /* DARK MODE — unchanged */
  dark:bg-white/10
  dark:border-white/20
  dark:text-white
  dark:placeholder:text-slate-300
  dark:focus:ring-sky-400
"

        required
      />

      {/* EMAIL */}
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
       className="
  w-full rounded-xl px-4 py-3 backdrop-blur-md focus:outline-none

  /* LIGHT MODE */
  bg-white
  border border-blue-200
  text-slate-900
  placeholder:text-slate-400
  focus:ring-2 focus:ring-blue-500

  /* DARK MODE — unchanged */
  dark:bg-white/10
  dark:border-white/20
  dark:text-white
  dark:placeholder:text-slate-300
  dark:focus:ring-sky-400
"

        required
      />

      {/* MESSAGE */}
      <textarea
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={5}
      className="
  w-full rounded-xl px-4 py-3 backdrop-blur-md focus:outline-none

  /* LIGHT MODE */
  bg-white
  border border-blue-200
  text-slate-900
  placeholder:text-slate-400
  focus:ring-2 focus:ring-blue-500

  /* DARK MODE — unchanged */
  dark:bg-white/10
  dark:border-white/20
  dark:text-white
  dark:placeholder:text-slate-300
  dark:focus:ring-sky-400
"

        required
      />

      {/* BUTTON */}
     <button
  type="submit"
  disabled={loading}
  className="
    w-full py-3 rounded-full font-semibold transition-all duration-300

    /* LIGHT MODE */
    text-white
    bg-gradient-to-r from-blue-600 to-cyan-600
    shadow-[0_12px_30px_rgba(59,130,246,0.4)]
    hover:shadow-[0_18px_40px_rgba(59,130,246,0.55)]

    /* DARK MODE — unchanged */
    dark:from-sky-500 dark:to-blue-600
    dark:hover:shadow-[0_0_30px_rgba(56,189,248,0.5)]

    disabled:opacity-50 disabled:cursor-not-allowed
  "
>
  {loading ? "Sending..." : "Send Message"}
</button>

    </form>
{status === "SUCCESS" && (
  <p className="text-emerald-600 dark:text-green-400 text-sm">
    Message sent successfully!
  </p>
)}
{status === "ERROR" && (
  <p className="text-red-600 dark:text-red-400 text-sm">
    Failed to send message.
  </p>
)}

  </div>
</section>

  );
}
