import type { Metadata } from "next";
import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import CtaBand from "@/components/CtaBand";
import Divider from "@/components/Divider";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, personSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Cast",
  description:
    "Meet Erica and Phoenix Minton, the performers behind Captain Shh-nel and Stu of the Loo, with 30+ years of Renaissance faire experience between them.",
  alternates: { canonical: "/the-cast" },
  openGraph: {
    title: "The Cast | Shh It's A Show",
    description:
      "Erica and Phoenix Minton play Captain Shh-nel and Stu of the Loo. Decades of faire experience, one shared outhouse.",
    url: "https://shhitsa.show/the-cast",
  },
};

export default function TheCastPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "The Cast", path: "/the-cast" },
          ]),
          ...site.cast.map((c) => personSchema(c)),
        ]}
      />

      <PageBanner
        eyebrow="Two performers, one toilet"
        title="The Cast"
        subtitle="Neither one is the sidekick. That's sort of the whole problem."
      />

      <section className="parchment px-6 py-16">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
          {/* Captain Shh-nel — real photo */}
          <article className="sketch-card tilt-left relative overflow-hidden">
            <div className="relative aspect-square w-full overflow-hidden">
              <Image
                src="/images/nel-headshot.jpg"
                alt="Erica Minton as Captain Shh-nel: a pirate captain in a wide feather-trimmed tricorn hat and blue-and-gold laced bodice, wearing a headset mic, in front of a lattice fence"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="font-heading text-2xl text-brown">
                Captain Shh-nel
              </h2>
              <p className="font-hand text-lg text-burgundy">
                performed by Erica Minton
              </p>
              <p className="mt-3 leading-relaxed text-brown/80">
                The self-proclaimed captain of the finest outhouse on the seven
                seas. Equal parts charm, chaos, and questionable nautical
                authority, armed with a plunger and an unshakable belief that
                this is a legitimate theatre.
              </p>
              <blockquote className="mt-4 border-l-4 border-gold pl-4 font-hand text-xl text-brown/80">
                &ldquo;If you&apos;re looking for a great show, you&apos;re at the
                wrong show...&rdquo;
              </blockquote>
            </div>
          </article>

          {/* Stu of the Loo — placeholder pending new photo */}
          <article className="sketch-card sketch-card-alt tilt-right relative overflow-hidden">
            <div className="relative aspect-square w-full overflow-hidden">
              <Image
                src="/images/stu-headshot.jpg"
                alt="Phoenix Minton as Stu of the Loo: a sewer-rat character in a blue felt hat with tan rat ears and a purple vest, raising a fist toward the camera, in front of weathered wood planks"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="font-heading text-2xl text-brown">
                Stu of the Loo
              </h2>
              <p className="font-hand text-lg text-burgundy">
                performed by Phoenix Minton
              </p>
              <p className="mt-3 leading-relaxed text-brown/80">
                The uninvited resident of the outhouse plumbing. A sewer rat in a
                bowler hat who has decided he is a Big Dukey, which is to say
                royalty, which is to say he is going nowhere. Deadpan, grumbly,
                and weirdly persuasive about who owns the place.
              </p>
              <blockquote className="mt-4 border-l-4 border-gold pl-4 font-hand text-xl text-brown/80">
                &ldquo;I&apos;m a feature, like a heated seat...&rdquo;
              </blockquote>
            </div>
          </article>
        </div>

        <div className="mx-auto mt-14 max-w-3xl text-center">
          <Divider className="mb-6" />
          <p className="text-lg leading-relaxed text-brown/80">
            Between them, Erica and Phoenix bring 30+ years of Renaissance faire
            performance, including stunt work, stage combat, clown school, and
            joust shows. Also, by their own admission, more time in portable
            restrooms than either would care to explain.
          </p>
        </div>
      </section>

      <CtaBand
        heading="Put these two on your stage"
        body="Self-contained, fully insured, and happy to argue about a toilet at your faire."
      />
    </>
  );
}
