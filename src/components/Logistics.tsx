"use client";

import ScrollReveal from "./ScrollReveal";

const facts = [
  { icon: "\u{1F550}", label: "Up to 4 shows/day", detail: "30 minutes each" },
  { icon: "\u{1F4E6}", label: "Fully self-contained", detail: "We bring everything (outhouse, chest, props)" },
  { icon: "\u{1F6E1}\uFE0F", label: "Fully insured", detail: "COI available on request" },
  { icon: "\u{1F4D0}", label: "Minimum 10\u00D710 space", detail: "Preferred 10\u00D720" },
];

export default function Logistics() {
  return (
    <section className="bg-blue py-16 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {facts.map((fact, i) => (
            <ScrollReveal key={fact.label} delay={i * 0.1}>
              <div className="text-center">
                <div className="text-4xl mb-3">{fact.icon}</div>
                <h3 className="font-heading text-lg text-gold mb-1">
                  {fact.label}
                </h3>
                <p className="text-cream/70 text-sm">{fact.detail}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <p className="text-cream/60 text-sm text-center mt-10 max-w-2xl mx-auto italic">
            We also do opening gate walkarounds and pub sings — so your fairgrounds
            stay lively all day, not just during showtimes.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
