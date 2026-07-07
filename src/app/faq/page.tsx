import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers for faire directors booking Shh It's A Show: space, power, sound, pricing, insurance, run time, travel, and how family-friendly the outhouse comedy really is.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ | Shh It's A Show",
    description:
      "Space, power, sound, pricing, insurance, and travel. Everything a faire director needs before booking.",
    url: "https://shhitsa.show/faq",
  },
};

const faqs: { question: string; answer: string }[] = [
  {
    question: "What kind of show is it?",
    answer:
      "A 30-minute outdoor variety comedy built around a theatrical outhouse. Expect sleight of hand, acrobatics, live music, puppetry, audience participation, and a finale where Captain Shh-nel throws plungers at Stu.",
  },
  {
    question: "Is it family-friendly?",
    answer:
      "It is family-adjacent rather than strictly family-friendly. The humor is bathroom-themed but done as clever wordplay, faire-authentic and never gross-out. Parents laugh, kids laugh, and nobody has to cover anybody's eyes.",
  },
  {
    question: "How much space do you need?",
    answer:
      "A minimum 10 by 10 foot performance space, with 10 by 20 preferred. We are self-contained and bring the outhouse, the chest, and every prop, so we just need a patch of ground and a crowd.",
  },
  {
    question: "How many shows can you do in a day?",
    answer:
      "Up to four 30-minute shows per day. Gate walkabout, pub sing, and special events can be added on request.",
  },
  {
    question: "What does it cost to book?",
    answer: `Our rate is $${site.pricePerDay} per day for up to four shows. Reach out with your dates and we will put together a schedule that fits your event.`,
  },
  {
    question: "Are you insured?",
    answer:
      "Yes. We are fully insured and can provide a certificate of insurance on request.",
  },
  {
    question: "Do you need power, water, or a sound system?",
    answer:
      "We need power for the microphones and nothing more, and no water at all. We prefer house sound and bring our own mics, though we can bring a full setup if your site needs one.",
  },
  {
    question: "Where are you based, and do you travel?",
    answer: `We are based in ${site.homeBase} and happy to travel anywhere. Share your location and dates and we will sort out the details.`,
  },
  {
    question: "How do we book you?",
    answer:
      "Send us your faire and dates through the booking page, or reach out by email or phone. We reply quickly and will build a schedule that fits your event.",
  },
];

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
          faqSchema(faqs),
        ]}
      />

      <PageBanner
        eyebrow="Before you book"
        title="Frequently Asked Questions"
        subtitle="The practical stuff, minus the sales pitch."
      />

      <section className="parchment px-6 py-16">
        <div className="mx-auto max-w-3xl space-y-5">
          {faqs.map((faq) => (
            <div key={faq.question} className="sketch-card p-6">
              <h2 className="font-heading text-lg text-brown sm:text-xl">
                {faq.question}
              </h2>
              <p className="mt-2 leading-relaxed text-brown/80">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
