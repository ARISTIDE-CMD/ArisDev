import type { Metadata, Viewport } from "next";
import "../globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Arisdev",
  description: "Solutions digitales claires, utiles et orientées résultat",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* <Navbar /> */}
      <main className="flex-grow">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
