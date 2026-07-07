import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import ArchPhoto from "@/components/ArchPhoto";
import BillOfActs from "@/components/BillOfActs";
import { Pin, WallHeader } from "@/components/Pinned";
import { Clock, Crowd, Sparkle, Anchor } from "@/components/Icons";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "The Show",
  description:
    "What to expect from Shh It's A Show: a 30-minute outdoor Renaissance faire comedy of magic, acrobatics, puppetry, live music, and a plunger knife-throwing finale.",
  alternates: { canonical: "/the-show" },
  openGraph: {
    title: "The Show | Shh It's A Show",
    description:
      "A 30-minute outdoor Renaissance faire comedy of magic, acrobatics, music, and one very disputed outhouse.",
    url: "https://shhitsa.show/the-show",
  },
};

const expect = [
  {
    Icon: Clock,
    title: "30 minutes, start to finish",
    text: "A tight half hour of variety comedy that drops into any slot on your entertainment schedule.",
  },
  {
    Icon: Crowd,
    title: "The crowd is in it",
    text: "Volunteers are celebrated, never forced. Everyone leaves having been part of the nonsense somehow.",
  },
  {
    Icon: Sparkle,
    title: "Real magic, real music, real danger",
    text: "Sleight of hand, acrobatics, a stage illusion, live music, and a finale involving thrown plungers.",
  },
  {
    Icon: Anchor,
    title: "Family-adjacent, not family-flavorless",
    text: "Bathroom humor done as clever wordplay. Faire-authentic, never gross-out.",
  },
];

// The six most visual bits get billing; the rest ride the "plus" line.
const acts = [
  {
    name: "Battle for the Blue",
    line: "a sword fight, except the swords are plungers",
  },
  {
    name: "Tiny Tightrope Walk",
    line: "death-defying, if the drop were higher",
  },
  {
    name: "Victoria's Secret Chest",
    line: "a stage illusion. a rat goes in. the rest is a mystery.",
  },
  {
    name: "Nel's Acrobatics",
    line: "three feats of agility, each less advisable than the last",
  },
  {
    name: "Goldilocks & the 3 Loos",
    line: "a puppet show of surprising literary merit",
  },
  {
    name: "Plungers of Death",
    line: "the knife-throwing finale, with no knives and every plunger",
  },
];

const alsoRotating = [
  "Stu's Magical Skills",
  "The Human Toilet Paper Holder",
  "Stu's Famous Stool Samples",
  "The Chest of Hair: Ginger",
  "Nel Whips Stu Into Shape",
  "Being a Blockhead",
  "Stu & Nel's Juggling",
];

export default function TheShowPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "The Show", path: "/the-show" },
        ])}
      />

      <PageBanner
        eyebrow="What you're actually booking"
        title="The Show"
        subtitle="A pirate, a rat, and one blue outhouse walk into thirty minutes."
      />

      {/* What to expect — notes pinned at their own angles */}
      <section className="parchment px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 sm:grid-cols-2">
            {expect.map(({ Icon, title, text }, i) => (
              <div
                key={title}
                className={`sketch-card relative flex gap-4 p-6 ${
                  i % 2 === 0 ? "tilt-left" : "tilt-right"
                }`}
              >
                <Pin className="-top-1.5 left-1/2 -translate-x-1/2" />
                <Icon className="h-9 w-9 shrink-0 text-blue-dark" />
                <div>
                  <h2 className="font-heading text-lg text-brown">{title}</h2>
                  <p className="mt-1 text-brown/80 leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The lineup, as a printed playbill pinned to the wall */}
      <section className="wood px-6 py-16">
        <WallHeader
          title="The Lineup"
          sub="the bits rotate, so no two shows are ever quite the same"
        />
        <div className="mx-auto mt-10 max-w-2xl rotate-[-0.8deg]">
          <BillOfActs acts={acts} alsoRotating={alsoRotating} />
        </div>
      </section>

      {/* Photos in outhouse-door frames, plus the reserved reel stage */}
      <section className="parchment px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-3xl text-brown">
            Scenes From the Show
          </h2>
          <p className="mt-2 font-hand text-2xl text-brown/70">
            three favorites, straight from the faire
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <ArchPhoto
              src="/images/old-blue.jpg"
              alt="Old Blue, the show's tall blue theatrical outhouse, its door painted with a Shh It's A Show crest, standing outdoors among the trees"
              caption="the outhouse, in her full glory"
            />
            <ArchPhoto
              src="/images/crowd-shot.jpg"
              alt="A seated Renaissance-faire crowd at picnic tables under the trees, watching the show near a striped tent"
              caption="the crowd, leaning in"
            />
            <ArchPhoto
              src="/images/victorias-chest.jpg"
              alt="Captain Shh-nel and Stu of the Loo beside the big open red-and-yellow prop chest during the Victoria's Secret Chest illusion"
              caption="Victoria's Secret Chest, mid mystery"
            />
          </div>
          {/* Sizzle reel hidden until real footage exists — restore <ReelBoard /> here. */}
        </div>
      </section>

      <CtaBand
        heading="Ready to put this on your schedule?"
        body="We bring the outhouse, the chest, and every prop. You bring the crowd."
      />
    </>
  );
}
