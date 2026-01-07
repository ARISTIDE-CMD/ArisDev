"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Services from "../components/Services";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="relative w-full min-h-screen bg-slate-900 flex items-center overflow-hidden">
        {/* Background lights */}
        <div className="pointer-events-none absolute -top-32 -right-32 w-[28rem] h-[28rem] bg-indigo-500/30 rounded-full blur-3xl animate-blob" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 w-[28rem] h-[28rem] bg-yellow-400/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-900" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 py-28 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div
            className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Architecte de solutions
              <br />
              <span className="text-yellow-400">
                numériques modernes
              </span>
            </h1>

            <p className="text-slate-300 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
              Nous sommes{" "}
              <strong className="text-white font-semibold">
                ArisDev
              </strong>
              , développeur orienté architecture. Nous conçevons des
              applications web et mobiles solides, performantes et
              pensées pour évoluer dans le temps.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/myProjets"
                className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-yellow-400 text-slate-900 font-semibold text-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg shadow-yellow-500/30 hover:scale-[1.03]"
              >
                Voir nos services
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-4 rounded-full border border-slate-600 text-slate-200 font-medium hover:border-yellow-400 hover:text-yellow-400 transition"
              >
                Nous contacter
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Onde jaune frappante */}
            <div className="absolute inset-0 rounded-full bg-yellow-400/40 blur-2xl animate-yellow-strike" />

            {/* Halo lent existant */}
            <div className="absolute inset-0 rounded-full bg-yellow-400/20 blur-xl animate-pulse-slow" />

            <video
              src="/video.mp4"
              // poster="/logofinal.png"
              className="relative z-10 w-full h-full object-cover rounded-full border-4 border-slate-700 shadow-2xl shadow-yellow-500/20"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
            />
          </div>

        </div>

        {/* Animations */}
        <style jsx>{`
  .animate-blob {
    animation: blob 8s infinite ease-in-out;
  }

  .animation-delay-2000 {
    animation-delay: 2s;
  }

  @keyframes blob {
    0% {
      transform: translate(0px, 0px) scale(1);
    }
    33% {
      transform: translate(40px, -30px) scale(1.1);
    }
    66% {
      transform: translate(-30px, 20px) scale(0.95);
    }
    100% {
      transform: translate(0px, 0px) scale(1);
    }
  }

  /* Pulse lent existant */
  .animate-pulse-slow {
    animation: pulse 6s infinite ease-in-out;
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 0.25;
      transform: scale(1.05);
    }
    50% {
      opacity: 0.4;
      transform: scale(1.02);
    }
  }

  /* 🔥 NOUVELLE ANIMATION : impact jaune continu */
  .animate-yellow-strike {
    animation: yellow-strike 3.5s infinite ease-in-out;
  }

  @keyframes yellow-strike {
    0% {
      transform: scale(1);
      opacity: 0.15;
    }
    40% {
      transform: scale(1.08);
      opacity: 0.45;
    }
    70% {
      transform: scale(1.02);
      opacity: 0.25;
    }
    100% {
      transform: scale(1);
      opacity: 0.15;
    }
  }
`}</style>
      </section>

      <Services />
    </>
  );
}
