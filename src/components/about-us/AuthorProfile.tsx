"use client";

import Image from "next/image";
import { Linkedin } from "lucide-react";

interface AuthorProps {
  name: string;
  description?: string;
  profileImage?: string;
  areaOfExpertise?: string;
  roleAtARI?: string;
  linkedin?: string;
}

export default function AuthorProfile({
  name,
  description,
  profileImage,
  areaOfExpertise,
  roleAtARI,
  linkedin,
}: AuthorProps) {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 relative">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[70%] h-[70%]
                        bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-transparent
                        blur-3xl opacity-40" />
      </div>

      {/* Glass Container */}
      <div className="backdrop-blur-xl bg-white/50 dark:bg-gray-900/30 
                      border border-white/20 dark:border-gray-700/30
                      shadow-2xl rounded-3xl p-10">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center md:items-center gap-10">

          {/* Image */}
          <div className="flex-shrink-0">
            <Image
              src={profileImage || "/default-author.png"}
              alt={name}
              width={180}
              height={180}
              className="rounded-full border-4 border-white dark:border-gray-700 shadow-xl object-cover"
            />
          </div>

          {/* Name + Social */}
          <div className="flex-1 text-center md:text-left space-y-3">

            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              {name}
            </h1>

            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                className="inline-flex items-center gap-2 px-5 py-2 
                           border border-blue-500 text-blue-600 
                           hover:bg-blue-600 hover:text-white 
                           rounded-full transition-all text-sm font-medium"
              >
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </a>
            )}
          </div>
        </div>

        {/* Description */}
<div className="mt-16 md:mt-20 max-w-3xl mx-auto text-center md:text-left">
  <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
    {description || "This author has not added a bio yet."}
  </p>
</div>


        {/* Divider */}
        <div className="mt-14 border-t border-gray-300/40 dark:border-gray-700/40"></div>

        {/* Bottom Grid */}
        <div className="mt-12 grid md:grid-cols-2 gap-10">

          {/* Expertise */}
          <div className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-xl 
                          rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-xl">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Areas of Expertise
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {areaOfExpertise ||
                `${name} specializes in analyzing AI systems, researching tools, and delivering accurate insights in the AI ecosystem.`}
            </p>
          </div>

          {/* Role */}
          <div className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-xl 
                          rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-xl">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Role at ARI
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {roleAtARI || (
                <>
                  {name} contributes to our{" "}
                  <span className="font-semibold">Editorial Review Standards</span>,
                  ensuring tool evaluation accuracy, fact-checking, and research quality.
                </>
              )}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
