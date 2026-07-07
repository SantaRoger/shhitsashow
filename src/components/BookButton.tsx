import Link from "next/link";

export default function BookButton({
  children = "Book This Show",
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href="/book"
      className={`inline-block bg-gold text-brown font-heading font-bold px-8 py-4 text-lg
        hover:bg-gold-light transition-colors ${className}`}
      style={{ borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px" }}
    >
      {children}
    </Link>
  );
}
