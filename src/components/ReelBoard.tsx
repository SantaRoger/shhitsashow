// Reserved stage for the sizzle reel, framed as a painted wood board. Swap the
// dashed area for the video embed the moment the reel exists.

export default function ReelBoard() {
  return (
    <div
      className="wood relative border-4 border-brown-dark/70 px-6 py-8 text-center shadow-[0_8px_20px_rgba(0,0,0,0.35)]"
      style={{ borderRadius: "6px 14px 8px 12px" }}
    >
      <p className="font-heading text-2xl text-gold-light">The Sizzle Reel</p>
      <div className="mx-auto mt-4 flex aspect-video max-w-sm flex-col items-center justify-center gap-2 border-2 border-dashed border-gold/50 bg-black/20">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold shadow-md">
          <span
            aria-hidden
            className="ml-1 inline-block border-y-[10px] border-l-[17px] border-y-transparent border-l-brown-dark"
          />
        </span>
        <p className="font-hand text-xl text-cream/85">still developing</p>
      </div>
      <p className="mt-3 font-hand text-lg text-cream/70">
        this frame becomes the video the moment the reel exists
      </p>
    </div>
  );
}
