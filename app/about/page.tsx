"use client";

import Image from "next/image";
import { Download } from "lucide-react";
import React from "react";

export default function About() {
  return (
    <section className="min-h-screen bg-slate-900 text-slate-200 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Titre */}
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white border-b-4 border-yellow-400 pb-3 inline-block animate-fadeDown">
            À propos d’ArisDev
          </h1>
        </header>

        {/* Contenu */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 lg:gap-24 items-center">
          
          {/* Texte */}
          <div className="space-y-8 animate-slideLeft">
            <p className="text-lg md:text-xl leading-relaxed">
              <span className="text-yellow-400 font-semibold">ArisDev</span> est
              une entité orientée vers la{" "}
              <span className="text-yellow-400 font-semibold">
                conception de solutions numériques solides
              </span>
              , modernes et évolutives.
            </p>

            <p className="text-lg md:text-xl leading-relaxed">
              L’approche repose sur une vision claire de l’architecture
              logicielle, allant du développement d’applications web et
              mobiles à la structuration de systèmes complexes, capables
              de supporter la croissance et l’évolution des produits
              numériques.
            </p>

            <p className="text-lg md:text-xl leading-relaxed">
              ArisDev accorde une importance particulière à la qualité du
              code, à la maintenabilité et à l’automatisation des
              déploiements, en intégrant progressivement des pratiques
              DevOps pour garantir fiabilité, performance et continuité
              des services.
            </p>

            <p className="text-lg md:text-xl italic text-slate-400">
              Construire aujourd’hui des systèmes pensés pour durer
              demain.
            </p>

            <a
              href="/file/Presentation_ArisDev.pdf"
              className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold py-3 px-8 rounded-xl transition shadow-xl shadow-yellow-500/30 hover:scale-[1.02]"
            >
              <Download size={20} />
              <span>Présentation ArisDev</span>
            </a>
          </div>

          {/* Image / Illustration */}
          <div className="flex justify-center md:justify-end animate-slideRight">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden border border-yellow-400/40 shadow-2xl">
              <Image
                src="/manboite.png"
                alt="Illustration ArisDev"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes slideLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideLeft {
          animation: slideLeft 1s ease-out both;
        }

        .animate-slideRight {
          animation: slideRight 1s ease-out both;
        }

        .animate-fadeDown {
          animation: fadeDown 0.8s ease-out both;
        }
      `}</style>
    </section>
  );
}
