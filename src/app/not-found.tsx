import Signpost from "@/components/Signpost";

export default function NotFound() {
  return (
    <section className="parchment flex min-h-[70vh] flex-col items-center justify-center px-6 py-20 text-center">
      {/* Empty toilet paper roll */}
      <svg
        viewBox="0 0 240 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto mb-6 h-44 w-auto"
        aria-hidden
      >
        {/* torn hanging sheet */}
        <path
          d="M150 118 h34 v58 l-6 -7 -6 7 -6 -7 -6 7 -6 -7 v-51 z"
          fill="#FDF6E8"
          stroke="#5C3D1E"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        {/* roll body */}
        <path
          d="M42 78 v58 a68 24 0 0 0 136 0 v-58"
          fill="#EBD9A8"
          stroke="#5C3D1E"
          strokeWidth="4"
        />
        {/* top paper edge */}
        <ellipse cx="110" cy="78" rx="68" ry="24" fill="#F4E7BE" stroke="#5C3D1E" strokeWidth="4" />
        {/* cardboard tube */}
        <ellipse cx="110" cy="78" rx="34" ry="12" fill="#C08A4E" stroke="#5C3D1E" strokeWidth="4" />
        {/* inner hole */}
        <ellipse cx="110" cy="78" rx="20" ry="7" fill="#7A5024" />
      </svg>

      <h1 className="font-heading text-3xl text-brown sm:text-4xl">
        Oh no, this roll is empty!
      </h1>
      <p className="mt-3 max-w-md font-hand text-2xl text-burgundy">
        This page has been used up. Stu swears it wasn&apos;t him.
      </p>
      {/* The signpost lives here and only here — a lost visitor is the one
          honest wayfinding moment on the site. */}
      <p className="mt-8 font-hand text-xl text-brown/70">find your way:</p>
      <div className="mt-4 w-full">
        <Signpost
          boards={[
            { href: "/", label: "Back to the Outhouse" },
            { href: "/the-show", label: "The Show, that way" },
            { href: "/schedule", label: "The Schedule" },
            { href: "/book", label: "Book This Show" },
          ]}
        />
      </div>
    </section>
  );
}
