"use client";

import { useState, useEffect } from "react";

interface ObfuscatedLinkProps {
  encodedHref: string;
  encodedText: string;
  prefix: "mailto:" | "tel:";
  className?: string;
  children?: React.ReactNode;
}

export default function ObfuscatedLink({
  encodedHref,
  encodedText,
  prefix,
  className,
  children,
}: ObfuscatedLinkProps) {
  const [decoded, setDecoded] = useState<{ href: string; text: string } | null>(
    null
  );

  useEffect(() => {
    setDecoded({
      href: prefix + atob(encodedHref),
      text: atob(encodedText),
    });
  }, [encodedHref, encodedText, prefix]);

  if (!decoded) {
    return <span className={className}>{children ?? "Loading…"}</span>;
  }

  return (
    <a href={decoded.href} className={className}>
      {children ?? decoded.text}
    </a>
  );
}
