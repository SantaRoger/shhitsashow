"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import BookButton from "./BookButton";

function Particles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    function createParticle() {
      if (!container) return;
      const particle = document.createElement("div");
      particle.className = "hero-particle";
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${Math.random() * 4 + 4}s`;
      particle.style.animationDelay = `${Math.random() * 3}s`;
      container.appendChild(particle);
      setTimeout(() => particle.remove(), 10000);
    }

    // Initial burst
    for (let i = 0; i < 8; i++) setTimeout(createParticle, i * 300);
    const interval = setInterval(createParticle, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    />
  );
}

export default function HeroA() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `radial-gradient(ellipse at 30% 80%, rgba(45,90,39,0.15) 0%, transparent 60%),
                     radial-gradient(ellipse at 70% 20%, rgba(55,116,195,0.08) 0%, transparent 50%),
                     linear-gradient(175deg, #3E2215 0%, #1A0E06 45%, #0F1A0B 100%)`,
      }}
    >
      <Particles />

      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center text-center gap-6">
        {/* Badge */}
        <motion.span
          className="inline-block font-heading text-xs tracking-[0.15em] uppercase text-gold-light border border-gold/40 px-5 py-1.5 rounded-full"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          Renaissance Faire Comedy
        </motion.span>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          <Image
            src="/images/logo.png"
            alt="Shh It's A Show logo — an illustrated blue outhouse with Captain Shh-nel standing beside it and Stu the mouse peeking out from behind"
            width={500}
            height={500}
            priority
            className="w-64 sm:w-80 md:w-96 h-auto"
            style={{
              filter:
                "drop-shadow(0 8px 30px rgba(55,116,195,0.4)) drop-shadow(0 2px 8px rgba(0,0,0,0.5))",
            }}
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <span className="text-cream">Shh... It&apos;s </span>
          <span className="text-gold hero-shimmer">A Show!</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-cream/85 text-lg sm:text-xl md:text-2xl max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
        >
          A pirate, a rat, and one very blue outhouse. 30 minutes of chaotic,
          pun-soaked comedy your faire has never seen.
        </motion.p>

        {/* Tagline */}
        <motion.p
          className="text-gold-light italic text-base sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
        >
          &ldquo;Why poop alone when you can poop with a friend?&rdquo;
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
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

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-24 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <svg
          className="w-7 h-7 text-gold-light/60 animate-bounce"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
        >
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </motion.div>
    </section>
  );
}
