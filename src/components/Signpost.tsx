// A wooden signpost with fingerboard links. Used sparingly — wayfinding
// moments only (the 404), so it stays special.

import Link from "next/link";

export default function Signpost({
  boards,
}: {
  boards: { href: string; label: string }[];
}) {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="absolute left-1/2 top-0 h-full w-3.5 -translate-x-1/2 rounded bg-brown" />
      <div className="relative space-y-4 py-2">
        {boards.map((b, i) => (
          <Link
            key={b.href}
            href={b.href}
            className={`relative block bg-brown px-10 py-3 text-center transition-transform hover:scale-[1.04] ${
              i % 2 ? "rotate-1" : "-rotate-1"
            }`}
            style={{
              clipPath:
                i % 2
                  ? "polygon(16px 0, 100% 0, 100% 100%, 16px 100%, 0 50%)"
                  : "polygon(0 0, calc(100% - 16px) 0, 100% 50%, calc(100% - 16px) 100%, 0 100%)",
            }}
          >
            <span className="font-heading text-lg text-cream">{b.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
