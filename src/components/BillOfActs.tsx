// The Bill of Acts: the show lineup as a printed playbill pinned to the wall,
// hierarchy carried by type size instead of cards. The one place the wood-type
// poster face (Rye) appears — it belongs to this printed artifact, not the UI.

import { Rye } from "next/font/google";
import { Pin } from "./Pinned";

const rye = Rye({ weight: "400", subsets: ["latin"] });

export default function BillOfActs({
  acts,
  alsoRotating,
}: {
  acts: { name: string; line: string }[];
  alsoRotating: string[];
}) {
  return (
    <article
      className="relative border-[6px] border-double border-brown/80 bg-cream-light px-5 py-10 text-center sm:px-10"
      style={{
        boxShadow:
          "0 10px 24px rgba(0,0,0,0.35), inset 0 0 0 8px var(--color-cream-light), inset 0 0 0 10px rgba(62,34,21,0.4)",
      }}
    >
      <Pin className="left-4 top-4" />
      <Pin className="right-4 top-4" />
      <p className="text-xs uppercase tracking-[0.3em] text-brown/70">
        performed daily, in rotation
      </p>
      <h3 className={`${rye.className} mt-3 text-3xl text-blue-dark sm:text-4xl`}>
        The Bill of Acts
      </h3>
      <div className="mt-8 space-y-6">
        {acts.map((a, i) => (
          <div key={a.name}>
            <p
              className={`${rye.className} ${
                i % 2 === 0
                  ? "text-2xl text-brown sm:text-3xl"
                  : "text-lg text-brown/85 sm:text-xl"
              }`}
            >
              {a.name}
            </p>
            <p className="mt-0.5 italic text-brown/70">{a.line}</p>
          </div>
        ))}
      </div>
      <p className="mt-8 text-xs uppercase leading-relaxed tracking-[0.2em] text-brown/60">
        plus: {alsoRotating.join(" · ")}
      </p>
    </article>
  );
}
