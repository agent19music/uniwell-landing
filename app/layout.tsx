import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://uniwell.seanmotanya.dev";
const ogTitle = "Uniwell | Mental Wellness for Students";
const ogDescription =
  "Uniwell helps students manage stress, stay focused, and access support with tools built for campus life.";
const ogImage = "/uniwell-logo.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: ogTitle,
  description: ogDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: ogTitle,
    description: ogDescription,
    siteName: "Uniwell",
    images: [
      {
        url: ogImage,
        alt: "Uniwell logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description: ogDescription,
    images: [ogImage],
  },
  icons: {
    icon: ogImage,
    apple: ogImage,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${plusJakarta.variable} ${manrope.variable} antialiased`}
      >
        {children}
        <GoogleAnalytics gaId="G-YJW0SB7X6B" />
      </body>
    </html>
  );
}
