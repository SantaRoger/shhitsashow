// Simple hand-drawn line icons, single-color via currentColor. These replace
// the emoji that used to stand in for iconography. Intentionally loose and
// woodcut-ish rather than crisp/geometric — this is a faire act, not an app.

type IconProps = { className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function Plunger({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <line x1="12" y1="2.5" x2="12" y2="12" />
      <ellipse cx="12" cy="12" rx="5.5" ry="1.8" />
      <path d="M6.7 12.2 7.9 17 A5.5 2 0 0 0 16.1 17 L17.3 12.2" />
    </svg>
  );
}

export function Anchor({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="4.5" r="2" />
      <line x1="12" y1="6.5" x2="12" y2="21" />
      <line x1="8" y1="11" x2="16" y2="11" />
      <path d="M4.5 14 A7.5 7.5 0 0 0 19.5 14" />
    </svg>
  );
}

export function Coins({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <ellipse cx="12" cy="7.5" rx="7" ry="3" />
      <path d="M5 7.5v4c0 1.7 3.1 3 7 3s7-1.3 7-3v-4" />
      <path d="M5 11.5v4c0 1.7 3.1 3 7 3s7-1.3 7-3v-4" />
    </svg>
  );
}

export function Envelope({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 6.5 12 13l8.5-6.5" />
    </svg>
  );
}

export function Phone({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6.5 3.5c.6 0 1.1.4 1.3 1l1 3c.15.5 0 1-.4 1.3L8 10.3a11 11 0 0 0 5.7 5.7l1.2-1.4c.3-.4.8-.5 1.3-.4l3 1c.6.2 1 .7 1 1.3V20a2 2 0 0 1-2 2A16 16 0 0 1 4 6a2 2 0 0 1 2-2z" />
    </svg>
  );
}

export function Globe({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18" />
    </svg>
  );
}

export function Scroll({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M7 4h10a2 2 0 0 1 2 2v11a2 2 0 0 0 2 2H9a2 2 0 0 1-2-2z" />
      <path d="M7 4a2 2 0 0 0-2 2v1.5h3" />
      <path d="M11 9h5M11 12.5h5" />
    </svg>
  );
}

export function Chest({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 9.5C4 7.6 6.5 6 12 6s8 1.6 8 3.5V19H4z" />
      <path d="M4 12.5h16" />
      <rect x="10.5" y="11" width="3" height="3.5" rx="1" />
    </svg>
  );
}

export function Outhouse({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5.5 21V8.5L12 5l6.5 3.5V21" />
      <path d="M4 9 12 4.5 20 9" />
      <rect x="9" y="12" width="6" height="9" />
      <circle cx="12" cy="14.5" r="0.9" />
    </svg>
  );
}

export function Sparkle({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 2.5 14 9.5 21 12l-7 2.5L12 21.5 10 14.5 3 12l7-2.5z" />
    </svg>
  );
}

export function Crowd({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <path d="M16 5.5a3 3 0 0 1 0 6" />
      <path d="M21 20a6 6 0 0 0-4-5.7" />
    </svg>
  );
}

export function Clock({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function Shield({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3 19 6v5c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function Wagon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3 6h11v9H3z" />
      <path d="M14 9h3.5L21 12.5V15h-7z" />
      <circle cx="7" cy="17.5" r="1.8" />
      <circle cx="17" cy="17.5" r="1.8" />
    </svg>
  );
}

export function Ruler({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3 15 15 3l6 6L9 21z" />
      <path d="M7 11l1.8 1.8M10 8l1.8 1.8M13 5l1.8 1.8" />
    </svg>
  );
}
