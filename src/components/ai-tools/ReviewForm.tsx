"use client";

import { useUser, useAuth } from "@clerk/nextjs";
import { useState } from "react";
import { Star } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";   // ⬅️ add this

interface ReviewFormProps {
  toolId: string;
  onSuccess?: () => void;
}

export default function ReviewForm({ toolId, onSuccess }: ReviewFormProps) {
  const { user } = useUser();
  const { getToken } = useAuth();
const router = useRouter(); 

  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [loading, setLoading] = useState(false);

if (!user) {
  return (
   <div
  className="
    relative rounded-xl p-5 overflow-hidden

    /* ---------- LIGHT MODE ---------- */
    bg-white
    border border-blue-200
    shadow-[0_12px_30px_rgba(59,130,246,0.12)]

    /* ---------- DARK MODE (UNCHANGED) ---------- */
    dark:bg-black/30
    dark:border-white/10
  "
>

  {/* Blurred fake form underneath */}
  <div className="opacity-40 blur-sm pointer-events-none">
    <div className="flex gap-2 mb-3">
      {Array(5).fill(0).map((_, i) => (
        <Star
          key={i}
          className="w-7 h-7 text-gray-400 dark:text-gray-500"
        />
      ))}
    </div>

    <textarea
      className="
        w-full rounded-xl p-3 text-sm

        /* Light */
        bg-gray-100
        border border-blue-200
        text-slate-600

        /* Dark */
        dark:bg-black/40
        dark:border-white/10
        dark:text-gray-400
      "
      rows={4}
      placeholder="Write your thoughts..."
    />
  </div>

  {/* Center overlay with Clerk Modal Button */}
  <div
    className="
      absolute inset-0 flex items-center justify-center
      backdrop-blur-sm

      /* Light */
      bg-white/60

      /* Dark */
      dark:bg-black/20
    "
  >
    <SignInButton mode="modal">
      <button
        className="
          px-6 py-2 rounded-xl font-medium transition-all
          shadow-lg active:scale-95

          /* ---------- LIGHT MODE ---------- */
          bg-gradient-to-r from-blue-600 to-cyan-500
          text-white hover:shadow-xl

          /* ---------- DARK MODE ---------- */
          dark:bg-blue-600
          dark:hover:bg-blue-700
        "
      >
        Sign in to write a review
      </button>
    </SignInButton>
  </div>

</div>

  );
}


 async function submitReview() {
  if (!user) return;

  try {
    setLoading(true);

    // 🔐 Get token from the "backend" template
    const token = await getToken({ template: "backend" });

    if (!token) {
      alert("Could not get auth token. Are you signed in?");
      setLoading(false);
      return;
    }

    const body = {
      toolId,
      rating,
      reviewText,
      userName: user.fullName,
      userEmail: user.primaryEmailAddress?.emailAddress,
      userImage: user.imageUrl,
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000"}/reviews`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    if (!res.ok) {
      const text = await res.text();
      console.error("Review API error:", res.status, text);
      alert(`Error: ${res.status} - ${text}`);
      setLoading(false);
      return;
    }

    const data = await res.json();

    setReviewText("");
    setLoading(false);
     router.refresh();
    onSuccess && onSuccess();
  } catch (err) {
    console.error("Review submit error:", err);
    setLoading(false);
    alert("Something went wrong while submitting your review.");
  }
}

  return (
<div className="space-y-4">

  {/* RATING INPUT */}
  <div className="flex gap-2">
    {Array(5).fill(0).map((_, i) => {
      const value = i + 1;
      return (
        <Star
          key={i}
          className={`
            w-7 h-7 cursor-pointer transition-all

            ${(hoverRating || rating) >= value
              ? "fill-yellow-400 text-yellow-400"
              : "text-gray-500 dark:text-gray-500"}
          `}
          onMouseEnter={() => setHoverRating(value)}
          onMouseLeave={() => setHoverRating(0)}
          onClick={() => setRating(value)}
        />
      );
    })}
  </div>

  {/* REVIEW TEXT */}
  <textarea
    className="
      w-full rounded-xl p-3 text-sm focus:outline-none transition

      /* ---------- LIGHT MODE ---------- */
      bg-white
      border border-blue-200
      text-slate-900
      placeholder:text-slate-500
      focus:ring-2 focus:ring-blue-500

      /* ---------- DARK MODE (UNCHANGED) ---------- */
      dark:bg-black/40
      dark:border-white/10
      dark:text-gray-200
      dark:placeholder-gray-500
    "
    placeholder="Write your thoughts..."
    rows={4}
    value={reviewText}
    onChange={(e) => setReviewText(e.target.value)}
  />

  {/* SUBMIT BUTTON */}
  <button
    disabled={loading}
    onClick={submitReview}
    className="
      px-5 py-2 rounded-xl font-medium transition-all
      active:scale-95 disabled:opacity-50

      /* ---------- LIGHT MODE ---------- */
      bg-gradient-to-r from-blue-600 to-cyan-500
      text-white shadow-md
      hover:shadow-lg hover:from-cyan-500 hover:to-blue-600

      /* ---------- DARK MODE ---------- */
      dark:bg-blue-600
      dark:hover:bg-blue-700
    "
  >
    {loading ? "Submitting..." : "Submit Review"}
  </button>

</div>

  );
}
