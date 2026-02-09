"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Services from "../../components/Services";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Temoignage from "@/components/Temoignage";
import ScrollToTop from "@/components/ScrollToTop";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="theme-bg-main relative w-full min-h-screen flex items-center overflow-hidden font-ubuntu transition-colors duration-200">
        {/* Background lights - Gardés car ils donnent un aspect premium */}
        {/* <div className="pointer-events-none absolute -top-22 -right-32 w-[28rem] h-[28rem] bg-indigo-500/30 rounded-full blur-3xl animate-blob" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 w-[28rem] h-[28rem] bg-yellow-400/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-900" /> */}

<div
          className="absolute inset-0 bg-cover bg-center z-0 bg-fixed"
          style={{ backgroundImage: "url('/back.jpeg')" }}
        />

        {/* Overlay sombre pour contraste texte */}
        <div className="theme-overlay absolute inset-0 z-0" />
        <div className="relative z-10 container mx-auto px-6 py-20 md:pt-5 md:b-5 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

          {/* Text - Optimisé Marketing */}
          <div
            className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            {/* Hook : On parle du bénéfice (croissance, solutions) avant la technique */}
            <h1 className="theme-text-primary text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-2 transition-colors duration-200">
              Propulsez votre activité grâce à des 
              <br />
              <span className="text-yellow-400">
                outils digitaux sur mesure
              </span>
            </h1>

            {/* Sub-headline : On remplace "Développeur" par "Partenaire de croissance" */}
            <p className="theme-text-secondary text-lg md:text-xl max-w-xl mb-10 leading-relaxed transition-colors duration-200">
              Chez <strong className="theme-text-primary font-semibold italic">ArisDev</strong>, nous ne créons pas seulement du code. Nous bâtissons les 
              <strong className="theme-text-primary"> fondations numériques </strong> 
              de votre succès : des applications rapides, évolutives et conçues pour maximiser votre retour sur investissement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* CTA Primaire : Orienté Action/Projet */}
              <Link
                href="/services/developpement/web"
                className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-yellow-400 text-slate-900 font-semibold text-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg shadow-yellow-500/30 hover:scale-[1.03]"
                >
                Lancer mon projet
              </Link>

              {/* CTA Secondaire : Découverte de l'expertise */}
              <Link
                href="/services/formations"
                className="theme-border theme-text-secondary inline-flex items-center justify-center px-10 py-4 rounded-full border font-medium hover:border-yellow-400 hover:text-yellow-400 transition"
              >
                Découvrir notre expertise
              </Link>
            </div>
            
            {/* Petit plus Marketing : Réassurance immédiate */}
            <p className="theme-text-secondary mt-6 text-sm italic">
              ✦ Audit gratuit et devis personnalisé sous 48h.
            </p>
          </div>

          {/* Image/Video - On garde ton superbe effet visuel */}
          <div className="relative w-72 h-72 md:w-96 md:h-96 md:ml-8">
            <div className="absolute inset-0 rounded-full bg-yellow-400/40 blur-2xl animate-yellow-strike" />
            <div className="absolute inset-0 rounded-full bg-yellow-400/20 blur-xl animate-pulse-slow" />

            <video
              src="/video.mp4"
              className="theme-border relative z-10 w-full h-full object-cover rounded-full border-4 shadow-2xl shadow-yellow-500/20"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
            />
          </div>
          {/* <ScrollToTop /> */}
          <FloatingWhatsApp/>
        </div>

        {/* CSS Animations (inchangé car déjà très bon) */}
        <style jsx>{`
          .animate-blob { animation: blob 8s infinite ease-in-out; }
          .animation-delay-2000 { animation-delay: 2s; }
          @keyframes blob {
            0%, 100% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(40px, -30px) scale(1.1); }
            66% { transform: translate(-30px, 20px) scale(0.95); }
          }
          .animate-pulse-slow { animation: pulse 6s infinite ease-in-out; }
          @keyframes pulse {
            0%, 100% { opacity: 0.25; transform: scale(1.05); }
            50% { opacity: 0.4; transform: scale(1.02); }
          }
          .animate-yellow-strike { animation: yellow-strike 3.5s infinite ease-in-out; }
          @keyframes yellow-strike {
            0%, 100% { transform: scale(1); opacity: 0.15; }
            40% { transform: scale(1.08); opacity: 0.45; }
            70% { transform: scale(1.02); opacity: 0.25; }
          }
        `}</style>
      </section>

      <Services />
      <Temoignage />
    </>
  );
}
