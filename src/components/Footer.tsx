"use client";

import Image from "next/image";
import Link from "next/link";
import ObfuscatedLink from "./ObfuscatedLink";
import { nav, site } from "@/lib/site";
import {
  EMAIL_B64,
  EMAIL_DISPLAY_B64,
  PHONE_B64,
  PHONE_DISPLAY_B64,
} from "@/utils/encode";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="parchment border-t border-brown/10 px-6 py-12">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-3 md:items-start">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
            <Image
              src="/images/logo.png"
              alt="Shh It's A Show — a blue outhouse with Captain Shh-nel and Stu"
              width={72}
              height={72}
              className="h-16 w-16 object-contain"
            />
            <p className="font-hand text-lg text-brown/70">
              &ldquo;{site.tagline}&rdquo;
            </p>
          </div>

          {/* Quick links */}
          <nav className="flex flex-col items-center gap-2 text-sm" aria-label="Footer">
            {[{ label: "Home", href: "/" }, ...nav, { label: "Book This Show", href: "/book" }].map(
              (link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-brown/70 hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-end gap-1 text-sm text-brown/70">
            <ObfuscatedLink
              encodedHref={EMAIL_B64}
              encodedText={EMAIL_DISPLAY_B64}
              prefix="mailto:"
              className="hover:text-gold transition-colors"
            />
            <ObfuscatedLink
              encodedHref={PHONE_B64}
              encodedText={PHONE_DISPLAY_B64}
              prefix="tel:"
              className="hover:text-gold transition-colors"
            />
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-brown/40">
          &copy; {year} Shh It&apos;s A Show | Erica &amp; Phoenix Minton
        </p>
      </div>
    </footer>
  );
}
