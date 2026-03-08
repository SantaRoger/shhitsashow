import Image from "next/image";

export default function Footer() {
  return (
    <footer className="parchment py-10 px-6 border-t border-brown/10">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Image
            src="/images/logo.png"
            alt="Shh It's A Show logo"
            width={80}
            height={80}
            className="w-16 h-auto"
          />

          <p className="text-brown/60 italic text-center text-sm">
            &ldquo;Why poop alone when you can poop with a friend?&rdquo;
          </p>

          <div className="text-right text-sm text-brown/60 space-y-1">
            <a
              href="mailto:nel@shhitsa.show"
              className="block hover:text-gold transition-colors"
            >
              nel@shhitsa.show
            </a>
            <a
              href="tel:+12483031126"
              className="block hover:text-gold transition-colors"
            >
              248-303-1126
            </a>
          </div>
        </div>

        <p className="text-center text-brown/40 text-xs mt-8">
          &copy; 2025 Shh It&apos;s A Show | Erica &amp; Phoenix Minton
        </p>
      </div>
    </footer>
  );
}
