import HeroB from "@/components/HeroB";
import Hook from "@/components/Hook";
import WhatIsThisShow from "@/components/WhatIsThisShow";
import ShowHighlights from "@/components/ShowHighlights";
import MeetCharacters from "@/components/MeetCharacters";
import Logistics from "@/components/Logistics";
import VideoSection from "@/components/VideoSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
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
