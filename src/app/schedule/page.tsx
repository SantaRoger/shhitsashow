import { tourDates } from "@/data/tour-dates";
import Link from "next/link";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tour Schedule | Shh It's A Show",
  description:
    "Catch Shh It's A Show at a Renaissance faire near you. See our upcoming tour dates and locations.",
};

export default function SchedulePage() {
  return (
    <>
      <main>
        {/* Hero banner */}
        <section
          className="pt-28 pb-16 px-6"
          style={{
            background:
              "linear-gradient(175deg, #3E2215 0%, #1A0E06 60%, #2A1A0E 100%)",
          }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-gold mb-4">
              Tour Schedule
            </h1>
            <p className="text-cream/70 text-lg sm:text-xl italic">
              Where to catch us this season
            </p>
          </div>
        </section>

        {/* Tour dates */}
        <section className="parchment py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-10">
            {tourDates.map((date) => (
              <div
                key={date.event}
                className="group hover:translate-y-[-2px] transition-transform duration-300"
              >
                {/* Date rendered large, like a playbill date */}
                <p className="text-gold font-heading text-base sm:text-lg tracking-wide mb-2">
                  {date.dates}
                  {date.recurring && (
                    <span className="ml-3 text-sm text-burgundy italic tracking-normal">
                      — {date.recurring}
                    </span>
                  )}
                </p>

                {/* Event name — big and dominant */}
                <h2 className="font-heading text-2xl sm:text-3xl text-brown leading-tight mb-1">
                  {date.event}
                </h2>

                {/* Location */}
                <p className="text-brown/60 text-sm sm:text-base">
                  {date.location}
                </p>

                {/* Decorative separator */}
                <div
                  className="mt-6 h-px w-24 opacity-30"
                  style={{
                    background:
                      "linear-gradient(to right, var(--color-gold), transparent)",
                  }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-brown-dark py-16 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-2xl sm:text-3xl text-gold mb-4">
              Want us at your faire?
            </h2>
            <p className="text-cream/70 mb-8">
              We&apos;d love to bring the outhouse to your event. Get in touch!
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-gold text-brown font-heading font-bold px-8 py-4 text-lg rounded-md hover:bg-gold/90 hover:shadow-lg hover:shadow-gold/25 transition-all duration-300"
            >
              Book the Show
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
