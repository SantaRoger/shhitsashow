import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Contact from "@/components/Contact";
import Divider from "@/components/Divider";
import PhotoFence from "@/components/PhotoFence";
import JsonLd from "@/components/JsonLd";
import { Clock, Wagon, Shield, Ruler } from "@/components/Icons";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book the Show",
  description:
    "Book Shh It's A Show for your Renaissance faire. $600/day for up to four shows. Self-contained, fully insured, Michigan based, and happy to travel anywhere.",
  alternates: { canonical: "/book" },
  openGraph: {
    title: "Book the Show | Shh It's A Show",
    description:
      "$600/day for up to four 30-minute shows. Self-contained, fully insured, and ready to travel.",
    url: "https://shhitsa.show/book",
  },
};

const logistics = [
  {
    Icon: Clock,
    title: "Up to four shows a day",
    text: "Four 30-minute sets to fill out your schedule. Gate walkabout, pub sing, and special events can be added on request.",
  },
  {
    Icon: Wagon,
    title: "Fully self-contained",
    text: "We bring the outhouse, the chest, and every prop. Based in Michigan and happy to travel anywhere.",
  },
  {
    Icon: Shield,
    title: "Fully insured",
    text: "Certificate of insurance available on request. We travel, and we come covered.",
  },
  {
    Icon: Ruler,
    title: "A modest footprint",
    text: "Minimum 10×10 performance space, 10×20 preferred. About a day to set up, and no water needed.",
  },
];

export default function BookPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Book the Show", path: "/book" },
          ]),
          serviceSchema(),
        ]}
      />

      <PageBanner
        eyebrow="For faire managers & entertainment directors"
        title="Book the Show"
        subtitle="One price, a full day of chaos, none of the logistics."
      />

      {/* Price + what's included */}
      <section className="wood px-6 py-16">
        <div className="mx-auto max-w-md text-center">
          {/* Blue-pop "special item" panel — reserved for the things that matter most */}
          <div className="paint-sign px-8 py-8">
            <p className="font-hand text-2xl text-gold-light">Booking rate</p>
            <p className="font-heading text-5xl text-cream-light sm:text-6xl">
              ${site.pricePerDay}
              <span className="text-2xl text-cream/80"> / day</span>
            </p>
          </div>
          <p className="mt-5 text-cream/80">
            Up to four 30-minute shows. Also available, just ask: gate walkabout,
            pub sing, and special events.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2">
          {logistics.map(({ Icon, title, text }) => (
            <div key={title} className="sketch-card flex gap-4 p-6">
              <Icon className="h-9 w-9 shrink-0 text-blue-dark" />
              <div>
                <h2 className="font-heading text-lg text-brown">{title}</h2>
                <p className="mt-1 leading-relaxed text-brown/80">{text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-2xl text-center">
          <Divider className="mb-4" />
          <p className="font-hand text-xl text-cream/85">
            All we need from you is a patch of ground, power for the microphones,
            and ideally house sound. We bring the mics.
          </p>
        </div>
      </section>

      {/* Photographic proof, right before the ask */}
      <section className="parchment pb-0 pt-14">
        <div className="px-6 text-center">
          <h2 className="font-heading text-3xl text-brown">
            Proof It Happened
          </h2>
          <p className="mt-2 font-hand text-2xl text-brown/70">
            snapshots from the field. the real ones drop straight in.
          </p>
        </div>
        <div className="mt-8">
          <PhotoFence
            photos={[
              { caption: "Battle for the Blue, mid swing", rotate: "-2deg" },
              { caption: "the crowd, losing it", rotate: "1.5deg" },
              { caption: "Tiny Tightrope, huge stakes", rotate: "-1deg" },
              { caption: "Goldilocks & the 3 Loos", rotate: "2deg" },
              { caption: "the outhouse, in her full glory", rotate: "-1.5deg" },
            ]}
          />
        </div>
      </section>

      {/* Booking form */}
      <Contact />
    </>
  );
}
