"use client";

import { useState, FormEvent } from "react";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      faire: (form.elements.namedItem("faire") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-brown-dark py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-gold mb-4">
              Ready to Take the Plunge?
            </h2>
            <p className="text-cream/70 max-w-2xl mx-auto">
              We&apos;d love to bring Shh It&apos;s A Show to your faire. <br />
              Reach out; we don&apos;t bite. (Stu might, but only if provoked.)
            </p>
          </div>
        </ScrollReveal>

        {/* Contact info */}
        <ScrollReveal delay={0.15}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mb-14">
            <a
              href="mailto:nel@shhitsa.show"
              className="text-gold hover:text-gold/80 text-lg transition-colors flex items-center gap-2"
            >
              <span className="text-2xl">&#x1F4E7;</span>
              nel@shhitsa.show
            </a>
            <a
              href="tel:+12483031126"
              className="text-gold hover:text-gold/80 text-lg transition-colors flex items-center gap-2"
            >
              <span className="text-2xl">&#x1F4DE;</span>
              248-303-1126
            </a>
            <a
              href="https://shhitsa.show"
              className="text-gold hover:text-gold/80 text-lg transition-colors flex items-center gap-2"
            >
              <span className="text-2xl">&#x1F310;</span>
              shhitsa.show
            </a>
          </div>
        </ScrollReveal>

        {/* Contact form */}
        <ScrollReveal delay={0.3}>
          <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto bg-brown/30 rounded-xl p-8 space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-cream/80 text-sm mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-cream/10 border border-cream/20 rounded-md px-4 py-3 text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold transition-colors"
                  placeholder="Sir Lancelot"
                />
              </div>
              <div>
                <label htmlFor="faire" className="block text-cream/80 text-sm mb-1">
                  Faire Name
                </label>
                <input
                  type="text"
                  id="faire"
                  name="faire"
                  // required
                  className="w-full bg-cream/10 border border-cream/20 rounded-md px-4 py-3 text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold transition-colors"
                  placeholder="The Enchanted Kingdom Faire"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-cream/80 text-sm mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-cream/10 border border-cream/20 rounded-md px-4 py-3 text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold transition-colors"
                placeholder="lancelot@roundtable.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-cream/80 text-sm mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full bg-cream/10 border border-cream/20 rounded-md px-4 py-3 text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold transition-colors resize-none"
                placeholder="Tell us about your event, dates, and anything else we should know..."
              />
            </div>
            <div className="text-center pt-2">
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-block bg-gold text-brown font-heading font-bold px-8 py-4 text-lg rounded-md hover:bg-gold/90 hover:shadow-lg hover:shadow-gold/25 transition-all duration-300 disabled:opacity-50"
              >
                {status === "sending" ? "Flushing..." : "Flush It Our Way!"}
              </button>
            </div>
            {status === "sent" && (
              <p className="text-gold-light text-center font-medium">
                Message sent! We&apos;ll be in touch faster than Stu can crawl out of a toilet.
              </p>
            )}
            {status === "error" && (
              <p className="text-cream text-center font-medium">
                Something went wrong. Try emailing us directly at nel@shhitsa.show.
              </p>
            )}
          </form>
        </ScrollReveal>

        {/* Pricing callout */}
        <ScrollReveal delay={0.4}>
          <div className="max-w-2xl mx-auto mt-10 bg-gold/10 border border-gold/30 rounded-lg p-6 text-center">
            <p className="text-gold font-heading text-lg">
              Tailored performance scheudle for your faire, opening gate character
              interaction, and pub sing participation.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
