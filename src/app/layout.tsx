import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InterREP Manager",
  description: "Fantasy game do Torneio InterREP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={inter.className} lang="en">
      <body className="bg-neutral-50 text-neutral-950">
        {children}
        <Footer />
      </body>
    </html>
  );
}
