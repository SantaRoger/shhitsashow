// Central site constants — single source of truth for URLs, contact, pricing,
// and cast. Used by metadata, JSON-LD schema builders, and page copy.

export const site = {
  name: "Shh It's A Show",
  url: "https://shhitsa.show",
  tagline: "Why poop alone when you can poop with a friend?",
  // Contact appears in JSON-LD (plaintext, for rich results). Visible links on
  // the page stay base64-obfuscated via encode.ts + ObfuscatedLink.
  email: "nel@shhitsa.show",
  phone: "+12483031126",
  phoneDisplay: "248-303-1126",
  pricePerDay: 600,
  homeBase: "Michigan",
  // Base booking is up to four shows/day. These are extras to add or discuss.
  addOns: ["gate walkabout", "pub sing", "special events"],
  cast: [
    {
      performer: "Erica Minton",
      character: "Captain Shh-nel",
      blurb:
        "The self-proclaimed captain of the finest outhouse on the seven seas.",
    },
    {
      performer: "Phoenix Minton",
      character: "Stu of the Loo",
      blurb:
        "A sewer rat, a self-declared Big Dukey, and the outhouse's uninvited royalty.",
    },
  ],
} as const;

export const nav = [
  { label: "The Show", href: "/the-show" },
  { label: "The Cast", href: "/the-cast" },
  { label: "Schedule", href: "/schedule" },
  { label: "FAQ", href: "/faq" },
] as const;
