// Stand-in for a real performance photo we haven't dropped in yet. Reads as an
// intentional "hand-labeled" placeholder, not a broken image. Swap for a real
// <Image> once the new photos are chosen. Use framed={false} when it already
// sits inside a bordered card.

import { Outhouse } from "./Icons";

export default function PhotoPlaceholder({
  label = "New photo coming soon",
  aspect = "aspect-[3/4]",
  framed = true,
  className = "",
}: {
  label?: string;
  aspect?: string;
  framed?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`${aspect} ${className} relative flex flex-col items-center justify-center gap-3 overflow-hidden text-blue-dark`}
      style={{
        backgroundColor: "var(--color-cream-light)",
        backgroundImage:
          "repeating-linear-gradient(45deg, rgba(13,98,209,0.07) 0 12px, transparent 12px 24px)",
        ...(framed
          ? {
              border: "2px dashed rgba(13,98,209,0.5)",
              borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px",
            }
          : {}),
      }}
    >
      <Outhouse className="w-12 h-12 opacity-70" />
      <span className="font-hand text-xl text-blue-dark/80 px-6 text-center leading-tight">
        {label}
      </span>
    </div>
  );
}
