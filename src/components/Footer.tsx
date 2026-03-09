"use client";

import Image from "next/image";
import ObfuscatedLink from "./ObfuscatedLink";
import { EMAIL_B64, EMAIL_DISPLAY_B64, PHONE_B64, PHONE_DISPLAY_B64 } from "@/utils/encode";

export default function Footer() {
  return (
    <footer className="parchment py-10 px-6 border-t border-brown/10">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Image
            src="/images/logo.png"
            alt="Shh It's A Show logo"
            width={80}
            height={80}
            className="w-16 h-auto"
          />

          <p className="text-brown/60 italic text-center text-sm">
            &ldquo;Why poop alone when you can poop with a friend?&rdquo;
          </p>

          <div className="text-right text-sm text-brown/60 space-y-1">
            <ObfuscatedLink
              encodedHref={EMAIL_B64}
              encodedText={EMAIL_DISPLAY_B64}
              prefix="mailto:"
              className="block hover:text-gold transition-colors"
            />
            <ObfuscatedLink
              encodedHref={PHONE_B64}
              encodedText={PHONE_DISPLAY_B64}
              prefix="tel:"
              className="block hover:text-gold transition-colors"
            />
          </div>
        </div>

        <p className="text-center text-brown/40 text-xs mt-8">
          &copy; 2025 Shh It&apos;s A Show | Erica &amp; Phoenix Minton
        </p>
      </div>
    </footer>
  );
}
