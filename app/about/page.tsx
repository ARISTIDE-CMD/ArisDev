"use client";

import Image from "next/image";
import { Download } from "lucide-react";
import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-900 text-gray-200 py-2 md:py-4 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Titre */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-12 border-b-4 border-yellow-400 pb-2 inline-block animate-fadeDown">
          À Propos
        </h1>

        {/* Conteneur principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Texte */}
          <div className="space-y-6 lg:space-y-8 animate-slideLeft">
            <p className="text-lg md:text-xl leading-relaxed">
              Je m&apos;appelle{" "}
              <span className="text-yellow-400 font-bold">Kouandja</span>,
              passionné par la{" "}
              <span className="text-yellow-400 font-semibold">
                création de sites web modernes et interactifs
              </span>
              .
            </p>

            <p className="text-lg md:text-xl leading-relaxed">
              Je suis actuellement étudiant en{" "}
              <span className="text-yellow-400 font-semibold">
                développement web et mobile
              </span>
              , et je cherche à améliorer mes compétences en dans le développement d'architectures web complètes. 
              Migrer des gros projets vers une architecture microservices est un de mes objectifs principaux.
              Compléter celà par des compétences en DevOps pour automatiser les déploiements et la gestion des infrastructures.
            </p>

            <p className="text-lg md:text-xl leading-relaxed italic text-gray-400">
              J&apos;adore transformer mes idées en projets concrets <br className="hidden sm:inline" />{" "}
              et expérimenter avec les nouvelles technologies.
            </p>

            <button className="inline-flex items-center space-x-2 bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold py-3 px-8 rounded-xl transition duration-300 shadow-xl shadow-yellow-500/30 mt-6 transform hover:scale-[1.02]">
              <Download size={20} />
              <span><a href="/file/CV_Aristide gael_kouandja kenfack.pdf">Télécharger mon CV</a></span>
            </button>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end mb-25 order-first md:order-last animate-slideRight">
            <div className="relative w-full max-w-sm aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl border-4 border-yellow-400/50">
              <Image
                src="/human_id.png"
                alt="Kouandja Kenfack - Profil"
                layout="fill"
                // objectFit="cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔥 Définition des animations en inline Tailwind */}
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
    </div>
  );
}
