import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Arisdev",
  description: "Solutions digitales claires, utiles et orientées résultat",
  icons: {
    icon: "/logofinal.png",
    apple: "/logofinal.png",
  },
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      {/* Scripts déplacés hors de <head> pour éviter les whitespace text nodes */}
      {/* ✅ Flex column pour coller le footer en bas */}
      <body className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        {/* Navbar reste en haut */}
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
