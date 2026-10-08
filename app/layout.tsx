import type { Metadata } from "next";
import { Fragment_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fragmentMono = Fragment_Mono({
  variable: "--font-fragment-mono",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "La Gasolinera · AI engineers inside your team",
  description:
    "Forward-deployed AI engineers who work inside your team: we build the workflows, ship with you, and stay to keep you shipping fast.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fragmentMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
