"use client";

export default function BookButton({
  children = "Book the Show",
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href="#contact"
      className={`inline-block bg-gold text-brown font-heading font-bold px-8 py-4 text-lg rounded-md
        hover:bg-gold-light hover:shadow-lg hover:shadow-gold/25 transition-all duration-300
        cursor-pointer ${className}`}
    >
      {children}
    </a>
  );
}
