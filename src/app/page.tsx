import HeroB from "@/components/HeroB";
import Hook from "@/components/Hook";
import WhatIsThisShow from "@/components/WhatIsThisShow";
import ShowHighlights from "@/components/ShowHighlights";
import MeetCharacters from "@/components/MeetCharacters";
import Logistics from "@/components/Logistics";
import VideoSection from "@/components/VideoSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "PerformingGroup",
      name: "Shh It's A Show",
      url: "https://shhitsa.show",
      logo: "https://shhitsa.show/images/logo.png",
      image: "https://shhitsa.show/images/logo.png",
      description:
        "A 30-minute outhouse comedy experience for Renaissance faires featuring Captain Shh-nel and Stu of the Loo.",
      genre: "Comedy",
      member: [
        {
          "@type": "Person",
          name: "Erica Minton",
          performerIn: { "@type": "PerformingGroup", name: "Shh It's A Show" },
        },
        {
          "@type": "Person",
          name: "Phoenix Minton",
          performerIn: { "@type": "PerformingGroup", name: "Shh It's A Show" },
        },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        email: "nel@shhitsa.show",
        telephone: "+1-248-303-1126",
        contactType: "booking",
      },
    },
    {
      "@type": "WebSite",
      name: "Shh It's A Show",
      url: "https://shhitsa.show",
    },
  ],
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroB />
      <Hook />
      <WhatIsThisShow />
      <ShowHighlights />
      <MeetCharacters />
      {/* <Logistics /> */}
      {/* <VideoSection /> */}
      <Contact />
      <Footer />
    </main>
  );
}
