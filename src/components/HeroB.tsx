"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BookButton from "./BookButton";

export default function HeroB() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Full-bleed background photo */}
      <Image
        src="/images/plunger-duel.png"
        alt="Captain Shh-nel and Stu of the Loo facing off in an epic plunger duel on a Renaissance faire stage"
        fill
        priority
        className="object-cover object-top"
      />

      {/* Dark gradient overlay — heavier at bottom for text */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            to top,
            rgba(26,14,6,0.95) 0%,
            rgba(26,14,6,0.75) 30%,
            rgba(26,14,6,0.25) 60%,
            rgba(26,14,6,0.35) 100%
          )`,
        }}
      />

      {/* Content — pinned to bottom portion */}
      <div className="relative z-10 w-full pb-20 pt-40 px-6 sm:px-10 md:px-16">
        <div className="max-w-3xl mx-auto md:mx-0 md:ml-[8%] text-center md:text-left">
          {/* Headline */}
          <motion.h1
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream leading-[1.1] mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            style={{
              textShadow: "0 2px 4px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.4)",
            }}
          >
            A Comedy Experience Like Nothing Else at Your Faire
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-cream/80 text-lg sm:text-xl md:text-2xl max-w-xl mb-3 mx-auto md:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            30 minutes. One outhouse. Zero dignity. Maximum laughs.
          </motion.p>

          {/* Tagline */}
          <motion.p
            className="text-gold-light italic text-base sm:text-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: "easeOut" }}
          >
            &ldquo;Why poop alone when you can poop with a friend?&rdquo;
          </motion.p>

          {/* CTA */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 items-center md:items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            <BookButton>Book This Show</BookButton>
            <a
              href="#show"
              className="inline-block font-heading text-cream/80 border-2 border-cream/30 px-8 py-4 text-lg rounded-md hover:border-gold hover:text-gold-light transition-all duration-300"
            >
              See What&apos;s Inside
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
