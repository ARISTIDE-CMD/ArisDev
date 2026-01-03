"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
// En environnement de rendu non-Next.js, 'next/image' doit être remplacé par 'img'
// const Image = (props) => <img {...props} />; 

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Déclenche l'animation après un court délai pour s'assurer que le composant est monté
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  
  // NOTE: Dans un environnement qui ne supporte pas 'next/image', on utilise une balise <img> standard
  // const ImageComponent = (props) => <img {...props} className={props.className || ''} src={props.src} alt={props.alt} />;


  return (
    <section className="relative w-full min-h-screen bg-slate-900 flex items-center justify-center overflow-hidden py-2">
      
      {/* 1. Arrière-plan Dynamique (effet de lumière/galaxie) */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      {/* 2. Contenu Principal */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Texte et Bouton */}
        <div
          className={`w-full md:w-1/2 text-center md:text-left transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
          }`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
             Développeur en devenir <br/>
             <span className="text-yellow-400">Passionné par le digital</span>.
          </h1>
          
          <p className="text-slate-300 text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0">
            Je suis <strong className="text-yellow-400 font-bold">Aristide</strong>, explorateur du web et du design, prêt à transformer les idées en réalités numériques fonctionnelles et esthétiques.
          </p>

          <button
            className={`bg-yellow-400 text-slate-900 font-bold text-lg px-10 py-4 rounded-full shadow-2xl shadow-yellow-500/50 hover:bg-yellow-300 transition-all duration-300 inline-block transform hover:scale-[1.03] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-yellow-400/80 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } transition-all duration-1000 delay-300`}
            aria-label="Voir mes projets"
    
          >
            <Link href='/myProjets'>Explorer mes Projets</Link>
          </button>
        </div>

        {/* Image du Profil */}
        <div
          className={`w-full md:w-1/2 flex justify-center md:justify-end transition-all mb-5 duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
          } transition-all duration-1000 delay-200`}
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-yellow-400 rounded-full transform scale-[1.05] opacity-20 animate-pulse-slow"></div>
            <Image
              src="/assets/images/c9af431cdb9322e4ff4a43af70db96ae.jpg" // Utilisation d'un placeholder pour la runnabilité
              alt="Image de profil d'Aristide"
              width={400} 
              height={400}
              className="rounded-full object-cover w-full h-full border-4 border-slate-700 shadow-2xl shadow-yellow-500/30 transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>

      {/* Styles d'animation pour l'arrière-plan */}
      <style jsx>{`
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 5s infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1.05); }
          50% { opacity: 0.4; transform: scale(1.02); }
        }
      `}</style>
    </section>
  );
}