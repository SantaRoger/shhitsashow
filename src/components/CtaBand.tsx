// Reusable "book us" band. Every page ends by pointing the faire director at
// the booking page — that is the whole job of the site.

import Link from "next/link";
import { Plunger } from "./Icons";

export default function CtaBand({
  heading = "Want the outhouse at your faire?",
  body = "Tell us your dates and we will bring the whole disaster to you.",
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <section className="wood px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <Plunger className="mx-auto mb-4 h-10 w-10 text-gold-light" />
        <h2 className="font-heading text-2xl sm:text-3xl text-gold-light mb-3">
          {heading}
        </h2>
        <p className="text-cream/80 mb-8">{body}</p>
        <Link
          href="/book"
          className="inline-block bg-gold text-brown font-heading font-bold px-8 py-4 text-lg hover:bg-gold-light transition-colors"
          style={{ borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px" }}
        >
          Book This Show
        </Link>
      </div>
    </section>
  );
}
