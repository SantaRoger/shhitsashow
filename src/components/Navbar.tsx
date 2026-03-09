"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "The Show", href: "/#show" },
  { label: "The Cast", href: "/#characters" },
  { label: "Tour Schedule", href: "/schedule" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brown-dark/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="font-heading text-gold text-lg sm:text-xl whitespace-nowrap hover:text-gold-light transition-colors"
        >
          Shh It&apos;s A Show
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-cream/80 hover:text-gold-light transition-colors text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="bg-gold text-brown font-heading font-bold px-5 py-2 text-sm rounded-md hover:bg-gold/90 hover:shadow-lg hover:shadow-gold/25 transition-all duration-300"
          >
            Book the Show
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-cream p-2"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="bg-brown-dark/95 backdrop-blur-md px-6 pb-6 pt-2 space-y-4">
          {navLinks.map((link) => (
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
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="inline-block bg-gold text-brown font-heading font-bold px-5 py-2 text-sm rounded-md hover:bg-gold/90 transition-all duration-300"
          >
            Book the Show
          </Link>
        </div>
      </div>
    </nav>
  );
}
