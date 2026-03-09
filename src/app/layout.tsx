import type { Metadata } from "next";
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
  openGraph: {
    title: "Shh It's A Show | Renaissance Faire Comedy Act",
    description:
      "30 minutes. One outhouse. Zero dignity. Maximum laughs. Book the most unique comedy act at your Renaissance faire.",
    type: "website",
    url: "https://shhitsa.show",
    images: [{ url: "/images/logo.png", width: 1000, height: 1000 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable} ${lora.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
