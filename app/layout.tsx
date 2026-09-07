import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Moitrayee Das | Psychology",
  description:
    "Academic portfolio of Dr. Moitrayee Das, Assistant Professor of Psychology at FLAME University.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}