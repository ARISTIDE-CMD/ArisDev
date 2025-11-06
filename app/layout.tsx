import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "porfolio",
  description: "Mon porfolio perso",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
      <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-156TH27QP4"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-156TH27QP4');
          `}
        </Script>
      </head>
      {/* ✅ Flex column pour coller le footer en bas */}
      <body className="flex flex-col min-h-screen bg-gray-50">
        {/* Navbar reste en haut */}
        <Navbar />

        {/* Le contenu prend tout l’espace disponible */}
        <main className="flex-grow">{children}</main>

        {/* Footer reste collé en bas */}
        <Footer />
      </body>
    </html>
  );
}
