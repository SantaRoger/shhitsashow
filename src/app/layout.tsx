import type { Metadata } from "next";
import Script from "next/script";
import { Cinzel_Decorative, Lora } from "next/font/google";
import Navbar from "@/components/Navbar";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://shhitsa.show"),
  title: "Shh It's A Show | Renaissance Faire Comedy Act",
  description:
    "A 30-minute outhouse comedy experience for Renaissance faires. Featuring Captain Shh-nel and Stu of the Loo. Book us for your faire today!",
  keywords: [
    "renaissance faire",
    "comedy act",
    "renaissance festival entertainment",
    "outhouse show",
    "faire comedy",
    "Captain Shh-nel",
    "Stu of the Loo",
    "renaissance faire booking",
    "variety show",
    "plunger comedy",
    "faire performers",
  ],
  authors: [{ name: "Erica Minton" }, { name: "Phoenix Minton" }],
  creator: "Shh It's A Show",
  publisher: "Shh It's A Show",
  openGraph: {
    title: "Shh It's A Show | Renaissance Faire Comedy Act",
    description:
      "30 minutes. One outhouse. Zero dignity. Maximum laughs. Book the most unique comedy act at your Renaissance faire.",
    type: "website",
    url: "https://shhitsa.show",
    siteName: "Shh It's A Show",
    locale: "en_US",
    images: [{ url: "/images/logo.png", width: 1000, height: 1000 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shh It's A Show | Renaissance Faire Comedy Act",
    description:
      "30 minutes. One outhouse. Zero dignity. Maximum laughs. Book the most unique comedy act at your Renaissance faire.",
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
      <body className={`${cinzel.variable} ${lora.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
