"use client";

import { useState, FormEvent } from "react";
import ObfuscatedLink from "./ObfuscatedLink";
import { Envelope, Phone, Globe } from "./Icons";
import {
  EMAIL_B64,
  EMAIL_DISPLAY_B64,
  PHONE_B64,
  PHONE_DISPLAY_B64,
} from "@/utils/encode";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

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

  const inputClass =
    "w-full rounded-md border border-brown/25 bg-cream-light px-4 py-3 text-brown placeholder:text-brown/40 focus:border-gold focus:outline-none transition-colors";

  return (
    <section id="contact" className="parchment px-6 py-16 anchor-offset">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="font-heading text-3xl text-brown sm:text-4xl">
            Send Us Your Dates
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-brown/80">
            Tell us about your faire and your dates. We do not bite. (Stu might,
            but only if provoked.)
          </p>
        </div>

        {/* Contact info */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
          <span className="flex items-center gap-2 text-brown">
            <Envelope className="h-5 w-5 text-gold" />
            <ObfuscatedLink
              encodedHref={EMAIL_B64}
              encodedText={EMAIL_DISPLAY_B64}
              prefix="mailto:"
              className="hover:text-gold transition-colors"
            />
          </span>
          <span className="flex items-center gap-2 text-brown">
            <Phone className="h-5 w-5 text-gold" />
            <ObfuscatedLink
              encodedHref={PHONE_B64}
              encodedText={PHONE_DISPLAY_B64}
              prefix="tel:"
              className="hover:text-gold transition-colors"
            />
          </span>
          <span className="flex items-center gap-2 text-brown">
            <Globe className="h-5 w-5 text-gold" />
            shhitsa.show
          </span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="sketch-card mt-8 space-y-5 p-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm text-brown/80">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className={inputClass}
                placeholder="Sir Lancelot"
              />
            </div>
            <div>
              <label htmlFor="faire" className="mb-1 block text-sm text-brown/80">
                Faire Name
              </label>
              <input
                type="text"
                id="faire"
                name="faire"
                className={inputClass}
                placeholder="The Enchanted Kingdom Faire"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm text-brown/80">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className={inputClass}
              placeholder="lancelot@roundtable.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block text-sm text-brown/80">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className={`${inputClass} resize-none`}
              placeholder="Tell us about your event, dates, and anything else we should know..."
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-block bg-gold px-8 py-4 font-heading text-lg font-bold text-brown transition-colors hover:bg-gold-light disabled:opacity-50"
              style={{
                borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px",
              }}
            >
              {status === "sending" ? "Flushing..." : "Flush It Our Way!"}
            </button>
          </div>
          {status === "sent" && (
            <p className="text-center font-medium text-green">
              Message sent. We will be in touch faster than Stu can crawl out of
              a toilet.
            </p>
          )}
          {status === "error" && (
            <p className="text-center font-medium text-burgundy">
              Something went wrong. Please try emailing us directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
