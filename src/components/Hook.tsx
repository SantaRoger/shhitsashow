"use client";

import ScrollReveal from "./ScrollReveal";

const cards = [
  {
    icon: "\u{1FAA0}",
    headline: "Crowds Stop Walking",
    text: "Bathroom humor is universal. Puns are timeless. Chaos is irresistible.",
  },
  {
    icon: "\u{1F3AD}",
    headline: "30+ Years of Faire Experience",
    text: "Clown school. Stunt work. Joust shows. And yes \u2014 extensive time in portable restrooms.",
  },
  {
    icon: "\u{1F4B0}",
    headline: "Nothing Else Like It at Faire",
    text: "Part variety show, part outhouse dispute. Entirely impossible to explain until you see it.",
  },
];

export default function Hook() {
  return (
    <section className="parchment py-20 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {cards.map((card, i) => (
            <ScrollReveal key={card.headline} delay={i * 0.15}>
              <div className="text-center p-8 rounded-lg">
                <div className="text-5xl mb-4">{card.icon}</div>
                <h3 className="font-heading text-xl text-brown mb-3">
                  {card.headline}
                </h3>
                <p className="text-brown/80 leading-relaxed">{card.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
