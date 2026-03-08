"use client";

import ScrollReveal from "./ScrollReveal";

const acts = [
  {
    number: 1,
    title: "Tales from the Blue",
    description:
      "The opening sea shanty recounting high seas adventures\u2026 and low bowels.",
  },
  {
    number: 2,
    title: "Victoria\u2019s Secret Chest",
    description:
      "A Metamorphosis Trunk illusion where Stu and Shh-nel mysteriously swap places inside a pirate chest.",
  },
  {
    number: 3,
    title: "Human Toilet Paper Holder",
    description:
      "One brave audience volunteer. One unforgettable purpose. No further questions.",
  },
  {
    number: 4,
    title: "Impressions",
    description:
      "Stu and Shh-nel transform into unicorns, bidets, and things that cannot be un-seen.",
  },
  {
    number: 5,
    title: "The Plunger of Death",
    description:
      "The death-defying finale. A knife-throwing act. With plungers. You\u2019ve been warned.",
  },
];

export default function ShowHighlights() {
  return (
    <section
      className="py-20 px-6"
      style={{
        background: "linear-gradient(175deg, #3E2215 0%, #1A0E06 100%)",
      }}
    >
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl sm:text-4xl text-cream mb-4">
              What&apos;s In the Show
            </h2>
            <p className="text-cream/70 italic max-w-2xl mx-auto">
              Rotating bits keep every performance fresh — like a can of Febreze,
              you never know what&apos;s coming next.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {acts.map((act, i) => (
            <ScrollReveal key={act.title} delay={i * 0.1}>
              <div className="bg-cream rounded-lg border-t-4 border-blue p-6 hover:translate-y-[-4px] hover:shadow-xl hover:shadow-gold/10 transition-all duration-300 h-full">
                <span className="inline-block font-heading text-3xl text-blue-dark mb-3">
                  {act.number}
                </span>
                <h3 className="font-heading text-lg text-brown mb-2">
                  {act.title}
                </h3>
                <p className="text-brown/70 text-sm leading-relaxed">
                  {act.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
