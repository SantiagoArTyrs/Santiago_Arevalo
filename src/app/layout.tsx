
"sue client";
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
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
