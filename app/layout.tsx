import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Just Code It Academy — AI-Native Dev Studio + Talent Accelerator",
  description:
    "Real projects. Real skills. Real AI. We're not building a school — we're building a new category of technical education in Redmond, WA.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
