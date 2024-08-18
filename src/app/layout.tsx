import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "InterREP Manager ",
    template: " %s | InterREP Manager"
  },
  description:
    "Mergulhe no mundo do fantasy game do InterREP! Escale seu time dos sonhos com os craques do torneio, " +
    "acompanhe as partidas em tempo real e dispute o topo do ranking com seus amigos. Viva a emoção do InterREP como nunca antes!",
  keywords:
    "InterREP, fantasy game, futebol society, São Carlos, USP, UFSCar, IFSP",
    twitter: {
        card: "summary_large_image",
      },
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
