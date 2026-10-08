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
  title: "La Gasolinera · Ingenieros de IA dentro de tu equipo",
  description:
    "Ingenieros de IA que trabajan dentro de tu equipo: construimos los flujos de trabajo, lanzamos contigo y nos quedamos para mantener tus lanzamientos rápidos.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${fragmentMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
