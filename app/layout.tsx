import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Just Code It Academy — AI-Native Dev Studio + Talent Accelerator",
    template: "%s — Just Code It Academy",
  },
  description:
    "Real projects. Real skills. Real AI. An AI-native dev studio combined with a talent accelerator — students learn by shipping actual products for real clients. Redmond, WA.",
  metadataBase: new URL("https://justcodeit.academy"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Just Code It Academy",
    title: "Just Code It Academy — AI-Native Dev Studio + Talent Accelerator",
    description:
      "Real projects. Real skills. Real AI. Students learn by shipping actual products for real clients.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Just Code It Academy",
    description:
      "AI-native dev studio + talent accelerator. Real projects, real clients, real AI. Redmond, WA.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
