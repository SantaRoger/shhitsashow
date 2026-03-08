"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function VideoSection() {
  const videoId = process.env.NEXT_PUBLIC_YOUTUBE_VIDEO_ID;

  return (
    <section className="parchment py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <ScrollReveal>
          <h2 className="font-heading text-3xl sm:text-4xl text-brown text-center mb-10">
            See It to Believe It
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          {videoId ? (
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title="Shh It's A Show — Performance Reel"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          ) : (
            <div className="relative bg-blue rounded-xl border-2 border-gold/30 overflow-hidden shadow-xl">
              <div className="flex flex-col items-center justify-center py-20 px-8 text-center">
                <Image
                  src="/images/logo.png"
                  alt="Shh It's A Show logo"
                  width={200}
                  height={200}
                  className="w-32 h-auto mb-6 opacity-60"
                />
                <p className="text-cream/80 italic text-lg max-w-md">
                  Show reel coming soon — in the meantime, your imagination will
                  have to do.
                </p>
              </div>
            </div>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
