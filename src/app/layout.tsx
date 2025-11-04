import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mi Portafolio",
  description: "Portafolio profesional con Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" dir="ltr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
