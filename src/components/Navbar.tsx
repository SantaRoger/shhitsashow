"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { nav } from "@/lib/site";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="wood sticky top-0 left-0 right-0 z-50 border-b-4 border-gold/70 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Wordmark + mark */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
          aria-label="Shh It's A Show — home"
        >
          <Image
            src="/images/logo.png"
            alt=""
            width={40}
            height={40}
            className="w-9 h-9 object-contain"
          />
          <span className="font-heading text-cream-light text-lg sm:text-xl whitespace-nowrap group-hover:text-gold-light transition-colors">
            Shh It&apos;s A Show
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {nav.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-cream/80 hover:text-gold-light transition-colors text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book"
            className="bg-gold text-brown font-heading font-bold px-5 py-2 text-sm hover:bg-gold-light transition-colors"
            style={{
              borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px",
            }}
          >
            Book This Show
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-cream p-2"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="wood px-6 pb-6 pt-2 space-y-4 border-t border-gold/20">
          {nav.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-cream/80 hover:text-gold-light transition-colors text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book"
            onClick={() => setMenuOpen(false)}
            className="inline-block bg-gold text-brown font-heading font-bold px-5 py-2 text-sm"
            style={{
              borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px",
            }}
          >
            Book This Show
          </Link>
        </div>
      </div>
    </nav>
  );
}
