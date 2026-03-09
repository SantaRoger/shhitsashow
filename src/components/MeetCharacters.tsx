"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function MeetCharacters() {
  return (
    <section id="characters" className="parchment py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="font-heading text-3xl sm:text-4xl text-brown text-center mb-14">
            Meet the Characters
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Captain Shh-nel */}
          <ScrollReveal delay={0.1}>
            <div className="bg-white/50 rounded-xl overflow-hidden shadow-lg">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/ShhNel.png"
                  alt="Captain Shh-nel in full Renaissance pirate costume with ornate tricorn hat, holding a plunger with theatrical flair"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-2xl text-brown mb-1">
                  Captain Shh-nel
                </h3>
                <p className="text-sm text-brown/70 mb-3 italic">
                  Performed by Erica Minton
                </p>
                <p className="text-brown/80 leading-relaxed mb-4">
                  The self-proclaimed captain of the finest outhouse on the seven seas.
                  Shh-nel is equal parts charm, chaos, and questionable nautical authority —
                  armed with a plunger and an unshakable belief that this is, in fact, a
                  legitimate theatre.
                </p>
                <blockquote className="border-l-4 border-brown/30 pl-4 text-brown/70 italic font-heading text-sm">
                  &ldquo;Welcome, welcome, one and all, to the FINEST outhouse on the seven
                  seas!&rdquo;
                </blockquote>
              </div>
            </div>
          </ScrollReveal>

          {/* Stu of the Loo */}
          <ScrollReveal delay={0.25}>
            <div className="bg-white/50 rounded-xl overflow-hidden shadow-lg">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/stu.png"
                  alt="Stu of the Loo in character — a sewer rat with a blue bowler hat, crouching on a wooden stage with plunger in hand"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-2xl text-brown mb-1">
                  Stu of the Loo
                </h3>
                <p className="text-sm text-brown/70 mb-3 italic">
                  Performed by Phoenix Minton
                </p>
                <p className="text-brown/80 leading-relaxed mb-4">
                  The uninvited resident of the outhouse&apos;s plumbing system. Stu is a
                  sewer rat with a bowler hat, a chip on his shoulder, and an alarming amount
                  of opinions about property rights. He didn&apos;t ask to be here — but he&apos;s
                  certainly not leaving.
                </p>
                <blockquote className="border-l-4 border-brown/30 pl-4 text-brown/70 italic font-heading text-sm">
                  &ldquo;...Why does she have a plunger?&rdquo;
                </blockquote>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3}>
          <p className="text-center text-brown/70 max-w-3xl mx-auto mt-12 leading-relaxed italic">
            Between them, Erica and Phoenix bring 30+ years of Renaissance faire
            performance including stunt work, stage combat, clown school, joust shows,
            and yes — more time in portable restrooms than either of them would care to
            admit.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
