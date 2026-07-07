// Photos hung from a fence rail by strings. Scrolls sideways on small screens;
// centers when everything fits. Captions are the shot list for the real photos.

import { Outhouse } from "./Icons";

function HungPhoto({ caption, rotate }: { caption: string; rotate: string }) {
  return (
    <figure className="w-52 shrink-0">
      <div className="mx-auto h-8 w-[2px] bg-brown/60" />
      <div
        className="border-2 border-brown/60 bg-cream-light p-2 shadow-[0_6px_14px_rgba(62,34,21,0.3)]"
        style={{ transform: `rotate(${rotate})` }}
      >
        <div
          className="flex aspect-[4/5] items-center justify-center"
          style={{
            backgroundColor: "#e9dcbd",
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(13,98,209,0.08) 0 12px, transparent 12px 24px)",
            border: "2px dashed rgba(13,98,209,0.45)",
          }}
        >
          <Outhouse className="h-9 w-9 text-blue-dark/60" />
        </div>
        <figcaption className="pt-2 text-center font-hand text-lg leading-tight text-brown/80">
          {caption}
        </figcaption>
      </div>
    </figure>
  );
}

export default function PhotoFence({
  photos,
}: {
  photos: { caption: string; rotate: string }[];
}) {
  return (
    <div>
      <div className="mx-6 h-3 rounded bg-brown shadow-md" />
      <div className="flex justify-start gap-8 overflow-x-auto px-8 pb-6 md:justify-center">
        {photos.map((p) => (
          <HungPhoto key={p.caption} caption={p.caption} rotate={p.rotate} />
        ))}
      </div>
    </div>
  );
}
