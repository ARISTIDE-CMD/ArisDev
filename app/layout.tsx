import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Aristide Kenfack | Portfolio",
  description: "Développeur Full Stack & DevOps — Douala, Cameroun",
  icons: {
    icon: "/logofinal.png",
    apple: "/logofinal.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#06080f",
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
      <body className="bg-[var(--background)] text-[var(--foreground)] overflow-x-hidden">
        <div className="galaxy-bg" aria-hidden="true" />
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Navbar reste en haut */}
          <Navbar />
          <main className="flex-grow">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
