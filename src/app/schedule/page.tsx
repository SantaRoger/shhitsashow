import type { Metadata } from "next";
import { tourDates, type TourDate } from "@/data/tour-dates";
import PageBanner from "@/components/PageBanner";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tour Schedule",
  description:
    "Where to catch Shh It's A Show this season. Upcoming Renaissance faire and festival dates for the outhouse comedy act.",
  alternates: { canonical: "/schedule" },
  openGraph: {
    title: "Tour Schedule | Shh It's A Show",
    description:
      "Catch the outhouse comedy at a Renaissance faire near you. See our upcoming tour dates.",
    url: "https://shhitsa.show/schedule",
  },
};

// Split dated stops into upcoming vs already-played using the build date.
// (The page is statically generated, so the split refreshes on each deploy.)
// Undated gag entries have no end date, so they ride along as perennial fixtures.
const todayISO = new Date().toISOString().slice(0, 10);
const endOf = (d: TourDate) => d.endDate || d.startDate;
const isPast = (d: TourDate) => endOf(d) !== "" && endOf(d) < todayISO;

const upcoming = tourDates
  .filter((d) => !isPast(d))
  .sort((a, b) => (a.startDate || "9999").localeCompare(b.startDate || "9999"));
const past = tourDates
  .filter(isPast)
  .sort((a, b) => endOf(b).localeCompare(endOf(a)));

// Only real, upcoming, dated stops become Event structured data. The gag entry
// and already-played dates are deliberately excluded.
const eventsJsonLd = upcoming
  .filter((d) => !d.isJoke && d.startDate)
  .map((date) => ({
    "@context": "https://schema.org",
    "@type": "Event",
    name: `Shh It's A Show at ${date.event}`,
    description: `Catch Shh It's A Show, a Renaissance faire comedy act, performing at ${date.event} in ${date.location}.`,
    startDate: date.startDate,
    ...(date.endDate ? { endDate: date.endDate } : {}),
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    url: `${site.url}/schedule`,
    location: {
      "@type": "Place",
      name: date.event,
      address: {
        "@type": "PostalAddress",
        addressLocality: date.city ?? date.location,
        ...(date.region ? { addressRegion: date.region } : {}),
        addressCountry: "US",
      },
    },
    performer: { "@type": "PerformingGroup", name: site.name },
    organizer: { "@type": "PerformingGroup", name: site.name },
  }));

export default function SchedulePage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Schedule", path: "/schedule" },
          ]),
          ...eventsJsonLd,
        ]}
      />

      <PageBanner
        eyebrow="Tour Schedule"
        title="Where to Catch Us"
        subtitle="Come heckle Stu in person this season."
      />

      {/* Upcoming — the main event, pinned up as full cards */}
      <section className="parchment px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl text-brown">Coming Up</h2>
          <p className="mt-2 font-hand text-2xl text-brown/70">
            where the outhouse lands next
          </p>
          <div className="mt-8 space-y-5">
            {upcoming.length === 0 ? (
              <p className="font-hand text-xl text-brown/60">
                Nothing on the books just yet — check back soon, or book us
                yourself.
              </p>
            ) : (
              upcoming.map((date) => (
                <div
                  key={date.event}
                  className={`sketch-card p-6 ${date.isJoke ? "opacity-80" : ""}`}
                >
                  <p className="font-hand text-xl text-burgundy">
                    {date.dates}
                    {date.recurring && (
                      <span className="ml-2 text-base text-brown/60">
                        ({date.recurring})
                      </span>
                    )}
                  </p>
                  <h3 className="font-heading text-2xl text-brown leading-tight">
                    {date.event}
                  </h3>
                  {date.location ? (
                    <p className="text-brown/60">{date.location}</p>
                  ) : (
                    date.isJoke && (
                      <p className="font-hand text-lg text-brown/50">
                        for the regulars
                      </p>
                    )
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Where we've been — a darker archive band, compact rows */}
      {past.length > 0 && (
        <section className="wood px-6 py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-3xl text-gold-light">
              Where We&apos;ve Been
            </h2>
            <p className="mt-2 font-hand text-xl text-cream/70">
              stops already in the books
            </p>
            <ul className="mt-8 border-y border-cream/15 divide-y divide-cream/15">
              {past.map((date) => (
                <li
                  key={date.event}
                  className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-4"
                >
                  <div>
                    <p className="font-heading text-xl text-cream-light leading-tight">
                      {date.event}
                    </p>
                    {date.location && (
                      <p className="text-sm text-cream/60">{date.location}</p>
                    )}
                  </div>
                  <p className="font-hand text-lg text-gold-light/90">
                    {date.dates}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
