// JSON-LD structured-data builders. Kept in one place so every page emits
// consistent schema.org markup. Render the output with <JsonLd data={...} />.

import { site } from "./site";

const GROUP_DESCRIPTION =
  "A 30-minute outdoor comedy show for Renaissance faires, built around a theatrical outhouse and starring Captain Shh-nel and Stu of the Loo.";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["PerformingGroup", "Organization"],
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    logo: `${site.url}/images/logo.png`,
    image: `${site.url}/images/logo.png`,
    description: GROUP_DESCRIPTION,
    genre: ["Comedy", "Variety show", "Renaissance faire entertainment"],
    slogan: site.tagline,
    member: site.cast.map((c) => ({ "@type": "Person", name: c.performer })),
    contactPoint: {
      "@type": "ContactPoint",
      email: site.email,
      telephone: site.phone,
      contactType: "booking",
      areaServed: "US",
      availableLanguage: "English",
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: site.url,
    publisher: { "@id": `${site.url}/#organization` },
  };
}

export function personSchema(character: (typeof site.cast)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: character.performer,
    description: `${character.performer} performs ${character.character} in ${site.name}.`,
    worksFor: { "@id": `${site.url}/#organization` },
    memberOf: { "@type": "PerformingGroup", name: site.name },
  };
}

export function serviceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${site.name} — Renaissance faire comedy booking`,
    serviceType: "Live comedy entertainment for Renaissance faires and festivals",
    provider: { "@id": `${site.url}/#organization` },
    areaServed: { "@type": "Country", name: "United States" },
    description: GROUP_DESCRIPTION,
    offers: {
      "@type": "Offer",
      price: String(site.pricePerDay),
      priceCurrency: "USD",
      description:
        "Per-day booking covering up to four 30-minute shows. Gate walkabout, pub sing, and special events available as add-ons. Self-contained and fully insured.",
      availability: "https://schema.org/InStock",
    },
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.question,
      acceptedAnswer: { "@type": "Answer", text: i.answer },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}
