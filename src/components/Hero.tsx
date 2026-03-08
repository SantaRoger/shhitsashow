"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BookButton from "./BookButton";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `radial-gradient(ellipse at 30% 80%, rgba(45,90,39,0.15) 0%, transparent 60%),
                     radial-gradient(ellipse at 70% 20%, rgba(55,116,195,0.08) 0%, transparent 50%),
                     linear-gradient(175deg, #3E2215 0%, #1A0E06 45%, #0F1A0B 100%)`,
      }}
    >
      <div className="container mx-auto px-6 py-20 flex flex-col items-center text-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/images/logo.png"
            alt="Shh It's A Show logo — an illustrated blue outhouse with Captain Shh-nel standing beside it and Stu the mouse peeking out from behind"
            width={500}
            height={500}
            priority
            className="w-64 sm:w-80 md:w-96 h-auto drop-shadow-2xl"
          />
        </motion.div>

        <motion.h1
          className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cream leading-tight max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          A Comedy Experience Like Nothing Else at Your Faire
        </motion.h1>

        <motion.p
          className="text-cream/80 text-lg sm:text-xl md:text-2xl max-w-2xl font-body italic"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          30 minutes. One outhouse. Zero dignity. Maximum laughs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
        >
          <BookButton />
        </motion.div>
      </div>
    </section>
  );
}
