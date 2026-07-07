// The noticeboard kit: pins, tape, and pinned artifacts (polaroids, handbills,
// wall headers) shared by the homepage wall and interior pages. Every empty
// photo slot's caption doubles as the shot list for the real photo that
// belongs in it.

import Link from "next/link";
import { Outhouse } from "./Icons";

export function Pin({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`absolute z-10 h-3.5 w-3.5 rounded-full ${className}`}
      style={{
        background:
          "radial-gradient(circle at 35% 35%, #e8c66a, #8a6b1f 60%, #5c470f)",
        boxShadow: "0 2px 3px rgba(0,0,0,0.5)",
      }}
    />
  );
}

export function Tape({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`absolute z-10 h-6 w-16 ${className}`}
      style={{
        background: "rgba(242, 228, 200, 0.55)",
        boxShadow: "0 1px 2px rgba(0,0,0,0.25)",
      }}
    />
  );
}

// Dashed slot where a real photo drops in.
export function PhotoArea({ aspect = "aspect-[4/5]" }: { aspect?: string }) {
  return (
    <div
      className={`${aspect} flex items-center justify-center`}
      style={{
        backgroundColor: "#e9dcbd",
        backgroundImage:
          "repeating-linear-gradient(45deg, rgba(13,98,209,0.08) 0 12px, transparent 12px 24px)",
        border: "2px dashed rgba(13,98,209,0.45)",
      }}
    >
      <Outhouse className="h-10 w-10 text-blue-dark/60" />
    </div>
  );
}

export function Polaroid({
  caption,
  rotate,
  children,
  className,
}: {
  caption: string;
  rotate: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <figure
      className={`relative bg-cream-light p-3 pb-2 shadow-[0_8px_16px_rgba(0,0,0,0.45)] ${className ?? ""}`}
      style={{ transform: `rotate(${rotate})` }}
    >
      <Pin className="-top-1.5 left-1/2 -translate-x-1/2" />
      {children ?? <PhotoArea />}
      <figcaption className="px-1 pt-2 text-center font-hand text-lg leading-tight text-brown/80">
        {caption}
      </figcaption>
    </figure>
  );
}

// Section header painted straight onto a wood wall.
export function WallHeader({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="text-center">
      <h2 className="font-heading text-3xl tracking-wide text-gold-light">
        {title}
      </h2>
      {sub && <p className="mt-2 font-hand text-2xl text-cream/80">{sub}</p>}
    </div>
  );
}

export function Handbill({
  href,
  title,
  line,
  rotate,
}: {
  href: string;
  title: string;
  line: string;
  rotate: string;
}) {
  return (
    <Link
      href={href}
      className="parchment relative block border-2 border-brown-dark/60 p-6 text-center shadow-[0_8px_16px_rgba(0,0,0,0.4)] transition-transform hover:-translate-y-1"
      style={{ transform: `rotate(${rotate})` }}
    >
      <Pin className="-top-1.5 left-1/2 -translate-x-1/2" />
      <h3 className="font-heading text-xl text-brown">{title}</h3>
      <p className="mt-2 font-hand text-xl text-brown/75">{line}</p>
      <span className="mt-3 inline-block font-heading text-sm text-blue-dark">
        have a look &rarr;
      </span>
    </Link>
  );
}
