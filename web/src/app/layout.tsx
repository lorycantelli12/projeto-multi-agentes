import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Launch Status | lancamentos-squad",
  description: "Acompanhe o status do lançamento em tempo real",
  openGraph: {
    title: "Launch Status | lancamentos-squad",
    description: "Acompanhe o status do lançamento em tempo real",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
