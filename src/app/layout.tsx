
import type { Metadata } from "next";
import { Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const monoFont = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Rachit Kesarwani | Full Stack Developer",
  description:
    "Portfolio of Rachit Kesarwani — building APIs, real-time applications, and reliable digital products.",
  openGraph: {
    title: "Rachit Kesarwani | Developer Portfolio",
    description:
      "Explore my projects, backend engineering, and technical work.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${displayFont.variable} ${monoFont.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
