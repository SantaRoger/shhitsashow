// The homepage is a faire noticeboard: one continuous wood wall with the act's
// materials physically pinned to it — a printed handbill, real snapshots,
// hand-written notes, quote scraps. Nothing sits in a band or a grid cell;
// everything hangs at its own angle, sized by importance.

import Image from "next/image";
import Link from "next/link";
import BookButton from "@/components/BookButton";
import JsonLd from "@/components/JsonLd";
import { Pin, Tape, Polaroid, WallHeader, Handbill } from "@/components/Pinned";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { site } from "@/lib/site";

// Real quotes from patrons and overheard at the faire — provided by the show, not fabricated.
const quotes = [
  {
    text: "It was so much fun watching you two!",
    who: "Megan B. · patron, Kentucky Highland Renaissance Fair",
    tilt: "tilt-left",
  },
  {
    text: "That's the funniest Sh*t I've ever seen!",
    who: "overheard",
    tilt: "tilt-right",
  },
  {
    text: "The chest grew legs!",
    who: "overheard",
    tilt: "tilt-left",
  },
];

export default function Home() {
  return (
    <div className="wood">
      <JsonLd data={[organizationSchema(), websiteSchema()]} />

      {/* Hero cluster: the big handbill plus pinned snapshots beside it */}
      <section className="px-6 pt-14 pb-10">
        <div className="mx-auto grid max-w-6xl items-start gap-10 md:grid-cols-[7fr_5fr] md:gap-8">
          <div className="parchment relative -rotate-1 border-[3px] border-brown-dark/70 px-6 py-10 text-center shadow-[0_14px_28px_rgba(0,0,0,0.45)] sm:px-10">
            <Pin className="left-3 top-3" />
            <Pin className="right-3 top-3" />
            <Pin className="bottom-3 left-3" />
            <Pin className="bottom-3 right-3" />
            <p className="font-hand text-2xl text-burgundy">
              A Renaissance faire comedy act
            </p>
            <h1 className="mt-2 font-heading font-black text-4xl leading-tight text-blue-dark sm:text-5xl">
              A Pirate, a Rat, and One Very Blue Outhouse
            </h1>
            <Image
              src="/images/nel-stu-tp-holder.jpg"
              alt="Captain Shh-nel and Stu of the Loo performing the Human Toilet Paper Holder bit, Stu holding out a roll of toilet paper, at an outdoor Renaissance faire"
              width={1600}
              height={900}
              priority
              className="mx-auto mt-6 h-auto w-full max-w-md border-2 border-brown-dark/40 shadow-[0_8px_18px_rgba(0,0,0,0.4)]"
            />
            <p className="mt-6 font-heading text-lg text-brown/80 sm:text-xl">
              30 minutes. One outhouse. Zero dignity. Maximum laughs.
            </p>
            <p className="mt-3 font-hand text-2xl text-blue-dark">
              &ldquo;{site.tagline}&rdquo;
            </p>
          </div>

          <div className="flex flex-col gap-10 md:pt-6">
            <Polaroid caption="&ldquo;I will not fight these craft supplies.&rdquo; &mdash;Stu" rotate="2.5deg">
              <Image
                src="/images/nel-challenges-stu.jpg"
                alt="Captain Shh-nel in a feathered pirate hat and striped stockings levels a glitter-handled plunger at Stu of the Loo, who recoils, at an outdoor Renaissance faire"
                width={1600}
                height={1009}
                className="h-auto w-full"
              />
            </Polaroid>
            <div
              className="relative rotate-[-1.5deg] bg-cream-light p-6 text-center shadow-[0_10px_20px_rgba(0,0,0,0.4)]"
              style={{ borderRadius: "4px 14px 6px 12px" }}
            >
              <Pin className="-top-1.5 left-1/2 -translate-x-1/2" />
              <p className="font-hand text-2xl text-brown">
                Now booking faires &amp; festivals
              </p>
              <p className="mt-1 font-hand text-xl text-brown/75">
                ${site.pricePerDay} a day &middot; up to four shows &middot; we
                bring the outhouse
              </p>
              <div className="mt-4">
                <BookButton>Book This Show</BookButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The premise, pinned up as its own notice */}
      <section className="px-6 py-10">
        <div className="parchment relative mx-auto max-w-3xl rotate-[-0.5deg] border-[3px] border-brown-dark/70 px-8 py-8 shadow-[0_12px_24px_rgba(0,0,0,0.45)]">
          <Pin className="left-3 top-3" />
          <Pin className="right-3 top-3" />
          <h2 className="text-center font-heading text-2xl text-brown">
            The Premise
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-brown/80">
            Captain Shh-nel flings open the doors of her beloved outhouse and
            promises the finest show on the seven seas. A crowd gathers, she
            lays on the charm, and everything is flowing beautifully right up
            until the seat lifts and out pops Stu of the Loo.
          </p>
          <p className="mt-3 text-lg leading-relaxed text-brown/80">
            He is a self-declared Big Dukey, he has lived in this plumbing for
            years, and he has strong opinions about whose throne this really
            is.
          </p>
          <p className="mt-5 text-center">
            <Link
              href="/the-show"
              className="font-heading text-lg text-blue-dark underline decoration-gold decoration-2 underline-offset-4 hover:text-gold"
            >
              See the show &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* Snapshot cluster: photos as evidence, captions as the shot list */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <WallHeader
            title="Proof From the Field"
            sub="actual snapshots, straight off the camera roll"
          />
          {/* A two-column pin wall: each column stacks one wide snapshot over one
              tall one, so mixed orientations balance and nothing shrinks to a stamp.
              Photos keep native aspect (no cropping); collapses to one stack on mobile. */}
          <div className="mx-auto mt-10 flex max-w-5xl flex-col gap-10 sm:flex-row sm:items-start sm:gap-12">
            <div className="flex flex-1 flex-col gap-12">
              <Polaroid caption="Stu's impressive magic trick" rotate="-2deg">
                <Image
                  src="/images/stu-magic.jpg"
                  alt="Stu of the Loo works a sleight-of-hand trick on a seated volunteer's hand, a red and yellow prop chest beside them against a weathered fence"
                  width={1600}
                  height={1200}
                  className="h-auto w-full"
                />
              </Polaroid>
              <Polaroid
                caption="Ginger serenades a patron"
                rotate="1.5deg"
                className="mx-auto w-[65%] sm:w-full"
              >
                <Image
                  src="/images/ginger-serenade.jpg"
                  alt="A costumed Shh It's A Show performer serenades a seated patron at an outdoor faire stall, a wooden box in hand"
                  width={900}
                  height={1600}
                  className="h-auto w-full"
                />
              </Polaroid>
            </div>
            <div className="flex flex-1 flex-col gap-12 sm:mt-10">
              <Polaroid
                caption="Stu shows off his well-balanced stool sample"
                rotate="2deg"
                className="mx-auto w-[65%] sm:w-full"
              >
                <Image
                  src="/images/stu-stool-sample.jpg"
                  alt="Stu of the Loo balances a wooden stool on his chin, arms outstretched, as a seated faire audience watches"
                  width={900}
                  height={1600}
                  className="h-auto w-full"
                />
              </Polaroid>
              <Polaroid caption="Nel's bribe, with a flower" rotate="-1.5deg">
                <Image
                  src="/images/nel-flower-bribe.jpg"
                  alt="Captain Shh-nel and Stu of the Loo mid-bit as Stu offers a yellow flower, with patrons watching from a picnic table at an outdoor faire"
                  width={1600}
                  height={900}
                  className="h-auto w-full"
                />
              </Polaroid>
            </div>
          </div>

          {/* Reserved stage for the sizzle reel. Swap this slot for the video
              embed the moment the reel exists. */}
          <div className="mx-auto mt-14 max-w-3xl">
            <div className="relative rotate-[0.5deg] bg-cream-light p-3 pb-4 shadow-[0_10px_24px_rgba(0,0,0,0.45)]">
              <Tape className="-top-3 left-8 -rotate-6" />
              <Tape className="-top-3 right-8 rotate-3" />
              <div
                className="flex aspect-video flex-col items-center justify-center gap-3"
                style={{
                  backgroundColor: "#e9dcbd",
                  backgroundImage:
                    "repeating-linear-gradient(45deg, rgba(13,98,209,0.08) 0 12px, transparent 12px 24px)",
                  border: "2px dashed rgba(13,98,209,0.45)",
                }}
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-blue shadow-md">
                  <span
                    aria-hidden
                    className="ml-1 inline-block border-y-[12px] border-l-[20px] border-y-transparent border-l-cream-light"
                  />
                </span>
                <p className="font-heading text-xl text-brown">
                  The Sizzle Reel
                </p>
                <p className="px-6 text-center font-hand text-xl text-brown/70">
                  New footage of the plunge coming soon!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials as torn scraps — real quotes provided by the show, nothing
          here is fabricated. */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <WallHeader
            title="Kind Words From the Faire Folk"
            sub="pulled from comments, emails, and shouted reviews (with permission)"
          />
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {quotes.map((q, i) => (
              <figure key={i} className={`sketch-card relative p-6 ${q.tilt}`}>
                <Pin className="-top-1.5 left-1/2 -translate-x-1/2" />
                <blockquote className="font-hand text-xl leading-snug text-brown">
                  &ldquo;{q.text}&rdquo;
                </blockquote>
                <figcaption className="mt-3 text-xs uppercase tracking-[0.15em] text-brown/60">
                  {q.who}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Small handbills pointing at the rest of the site */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <WallHeader title="Also Tacked to the Board" />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Handbill
              href="/the-show"
              title="The Show"
              line="Thirty minutes of bits, all of them rotating."
              rotate="-1.2deg"
            />
            <Handbill
              href="/the-cast"
              title="The Cast"
              line="Two performers, one toilet, zero sidekicks."
              rotate="1deg"
            />
            <Handbill
              href="/schedule"
              title="The Schedule"
              line="Where the outhouse lands next."
              rotate="-0.6deg"
            />
          </div>
        </div>
      </section>

      {/* Closing poster: the funnel to /book */}
      <section className="px-6 pb-20 pt-8">
        <div className="parchment relative mx-auto max-w-3xl rotate-[0.6deg] border-[3px] border-brown-dark/70 px-8 py-10 text-center shadow-[0_14px_28px_rgba(0,0,0,0.45)]">
          <Pin className="left-3 top-3" />
          <Pin className="right-3 top-3" />
          <Pin className="bottom-3 left-3" />
          <Pin className="bottom-3 right-3" />
          <h2 className="font-heading font-black text-3xl text-brown">
            Want the Outhouse at Your Faire?
          </h2>
          <p className="mt-3 font-hand text-2xl text-brown/75">
            tell us your dates and we will nail ourselves to your schedule
          </p>
          <div className="mt-6">
            <BookButton />
          </div>
        </div>
      </section>
    </div>
  );
}
