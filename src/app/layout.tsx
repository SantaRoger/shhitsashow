import type { Metadata } from "next";
import Script from "next/script";
import { Cinzel_Decorative, Lora, Caveat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const cinzel = Cinzel_Decorative({
  variable: "--font-cinzel-decorative",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shhitsa.show"),
  title: {
    default: "Shh It's A Show | Renaissance Faire Comedy Act",
    template: "%s | Shh It's A Show",
  },
  description:
    "Shh It's A Show is a 30-minute outdoor comedy act for Renaissance faires, built around a theatrical outhouse and starring Captain Shh-nel and Stu of the Loo.",
  keywords: [
    "renaissance faire comedy act",
    "renaissance festival entertainment",
    "faire performers for hire",
    "book renaissance faire entertainment",
    "outhouse comedy show",
    "family variety show renaissance faire",
    "Captain Shh-nel",
    "Stu of the Loo",
    "plunger comedy",
    "faire walkabout entertainment",
  ],
  authors: [{ name: "Erica Minton" }, { name: "Phoenix Minton" }],
  creator: "Shh It's A Show",
  publisher: "Shh It's A Show",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Shh It's A Show | Renaissance Faire Comedy Act",
    description:
      "A 30-minute outdoor comedy act built around a theatrical outhouse. The most unusual booking at your Renaissance faire.",
    type: "website",
    url: "https://shhitsa.show",
    siteName: "Shh It's A Show",
    locale: "en_US",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 1200,
        alt: "Captain Shh-nel and Stu of the Loo beside their blue outhouse",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shh It's A Show | Renaissance Faire Comedy Act",
    description:
      "A 30-minute outdoor comedy act built around a theatrical outhouse. The most unusual booking at your Renaissance faire.",
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="916b1f5c-a3cc-49f5-af78-15252a31b89c"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${cinzel.variable} ${lora.variable} ${caveat.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
