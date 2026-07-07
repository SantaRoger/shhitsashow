// Hand-drawn rope/squiggle divider. Loose on purpose — a straight <hr /> reads
// as a template; a wobbly ink line reads as hand-made.

export default function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex justify-center ${className}`} aria-hidden>
      <svg
        width="220"
        height="16"
        viewBox="0 0 220 16"
        fill="none"
        className="text-gold"
      >
        <path
          d="M2 9c14-9 26 7 40 0s26-9 40 0 26 7 40 0 26-9 40 0 26 7 36 0"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
