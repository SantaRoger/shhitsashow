// Arched photo slot shaped like the outhouse door. With a `src`, the photo is
// clipped to the arch; without one, it shows the placeholder box + caption.

import Image from "next/image";
import { Outhouse } from "./Icons";

export default function ArchPhoto({
  caption,
  src,
  alt,
  objectPosition,
}: {
  caption: string;
  src?: string;
  alt?: string;
  objectPosition?: string;
}) {
  return (
    <figure>
      <div
        className="relative flex aspect-[3/4] items-center justify-center overflow-hidden"
        style={{
          backgroundColor: "#e9dcbd",
          backgroundImage: src
            ? undefined
            : "repeating-linear-gradient(45deg, rgba(13,98,209,0.08) 0 12px, transparent 12px 24px)",
          border: "3px solid rgba(62,34,21,0.7)",
          borderRadius: "50% 50% 6px 6px / 28% 28% 6px 6px",
        }}
      >
        {src ? (
          <Image
            src={src}
            alt={alt ?? caption}
            fill
            sizes="(max-width: 640px) 100vw, 33vw"
            className="object-cover"
            style={{ objectPosition: objectPosition ?? "center" }}
          />
        ) : (
          <Outhouse className="h-10 w-10 text-blue-dark/60" />
        )}
      </div>
      <figcaption className="mt-2 text-center italic text-brown/70">
        {caption}
      </figcaption>
    </figure>
  );
}
