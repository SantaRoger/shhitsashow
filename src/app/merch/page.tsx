import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { Pin, PhotoArea, WallHeader } from "@/components/Pinned";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Merch",
  description:
    "Merch from Shh It's A Show is on its way: Adoptable Chests of Hair, Emotional Support Plungers, and enamel pins. Coming soon to a privy near you.",
  alternates: { canonical: "/merch" },
  openGraph: {
    title: "Merch | Shh It's A Show",
    description:
      "The merch table is under construction. Adoptable Chests of Hair, Emotional Support Plungers, and pins are on the way.",
    url: "https://shhitsa.show/merch",
  },
};

// Placeholder teasers until the real store lands. Each PhotoArea is a [FILL]
// slot the product photo drops into; nothing here is for sale yet, so there is
// deliberately no Product/Offer schema claiming availability.
const products = [
  {
    name: "Adoptable Chests of Hair",
    line: "Every fuzzy foundling comes with its very own name, just like Ginger. Adopt one and give it a life of luxury well above the plumbing.",
    tilt: "tilt-left",
  },
  {
    name: "Emotional Support Plungers",
    line: "For life's most stubborn clogs, the emotional ones included. Battle-tested in the Plunger of Death and sized to fit your feelings. The plunger never lies.",
    tilt: "tilt-right",
  },
  {
    name: "Pins!",
    line: "Little enamel treasures for your hat, cloak, or doublet, the famous Stool Samples among them. No, Stu will not be explaining those again.",
    tilt: "tilt-left",
  },
];

export default function MerchPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Merch", path: "/merch" },
        ])}
      />

      <PageBanner
        eyebrow="still nailing the shelves together"
        title="Merch"
        subtitle="A gift shop is coming. Stu insists we call it the loo-tique."
      />

      {/* The setup, pinned up like a "pardon our dust" faire sign */}
      <section className="parchment px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <div className="sketch-card tilt-left relative p-8 text-center">
            <Pin className="-top-1.5 left-1/2 -translate-x-1/2" />
            <h2 className="font-heading text-2xl text-brown">Mind the Sawdust</h2>
            <p className="mt-4 text-lg leading-relaxed text-brown/80">
              Captain Shh-nel has decided the finest outhouse on the seven seas
              deserves a proper gift shop. Stu has agreed to allow it, provided
              he gets a cut and does none of the lifting.
            </p>
            <p className="mt-3 text-lg leading-relaxed text-brown/80">
              The shelves are still going up. Here is an early peek at what is
              bound for the merch table.
            </p>
          </div>
        </div>
      </section>

      {/* The teasers: placeholder crates with a "coming soon" stamp slapped on */}
      <section className="wood px-6 py-16">
        <WallHeader
          title="Coming to the Merch Table"
          sub="three treasures, still in the crate"
        />
        <div className="mx-auto mt-10 grid max-w-5xl gap-8 md:grid-cols-3">
          {products.map((p) => (
            <div key={p.name} className={`sketch-card relative p-5 ${p.tilt}`}>
              <Pin className="-top-1.5 left-1/2 -translate-x-1/2" />
              <span
                aria-hidden
                className="absolute -right-3 -top-3 z-10 rotate-6 border-2 border-burgundy/70 bg-cream-light/90 px-2 py-0.5 font-heading text-[0.6rem] uppercase tracking-[0.2em] text-burgundy"
                style={{ borderRadius: "6px 3px 5px 4px" }}
              >
                Coming Soon
              </span>
              <PhotoArea aspect="aspect-square" />
              <h3 className="mt-4 font-heading text-xl text-brown">{p.name}</h3>
              <p className="mt-2 leading-relaxed text-brown/80">{p.line}</p>
            </div>
          ))}
        </div>
      </section>

      {/* No cart yet: point the eager at the in-person table, not a checkout */}
      <section className="parchment px-6 py-16">
        <div className="mx-auto max-w-xl text-center">
          <div className="sketch-card tilt-right relative inline-block p-6">
            <Pin className="-top-1.5 left-1/2 -translate-x-1/2" />
            <p className="font-hand text-2xl text-brown">
              Nothing&rsquo;s for sale just yet.
            </p>
            <p className="mt-2 text-brown/80">
              Check back soon, or catch the merch table in person when the
              outhouse rolls into your faire.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Want it sooner?"
        body="Book the show and shop the table in person. The plungers travel remarkably well."
      />
    </>
  );
}
