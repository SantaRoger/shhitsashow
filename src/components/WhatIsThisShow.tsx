"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function WhatIsThisShow() {
  return (
    <section className="bg-cream-light py-20 px-6" id="show">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/plunger-duel.png"
                alt="Captain Shh-nel and Stu of the Loo facing off in an epic plunger duel on stage at a Renaissance faire"
                width={800}
                height={533}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown/20 to-transparent" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div>
              <p className="font-heading text-sm text-brown/60 uppercase tracking-[0.2em] mb-3">
                The Show
              </p>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-brown mb-6 leading-tight">
                One Outhouse. Two Egos. Thirty Minutes of Chaos.
              </h2>
              <div className="space-y-4 text-brown/80 leading-relaxed">
                <p>
                  It starts simply enough: Captain Shh-nel opens the doors to her beloved
                  outhouse for what she promises will be the finest show on the seven seas.
                  The audience gathers. The charm flows. And then the toilet seat opens.
                </p>
                <p>
                  Out crawls Stu of the Loo — a sewer rat with opinions, a bowler hat, and
                  absolutely no intention of leaving. What follows is 30-minutes of comedic chaos, filled with magic tricks, audience participation,
                  terrible puns, and at least one plunger-related near-death experience.
                </p>
                <p>
                  Every show is different. The bits rotate. The crowd decides. Nobody leaves
                  without laughing — or questioning their life choices.
                </p>
              </div>
              <blockquote className="mt-8 text-xl sm:text-2xl font-heading text-brown italic border-l-4 border-gold pl-6">
                &ldquo;Why poop alone when you can poop with a friend?&rdquo;
              </blockquote>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
