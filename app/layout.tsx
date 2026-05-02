import { Metadata } from "next";
import "./globals.css";
import type { ReactNode } from "react";
export const metadata: Metadata = { title: 'PredictPriceAI' }
import { Navbar } from "@/components/common/Navbar";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="pt-20 md:pt-24 pb-24 md:pb-0">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
