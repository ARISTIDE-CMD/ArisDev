'use client';

import React from 'react';
import { Github, Layout, Briefcase, Code } from 'lucide-react';

// ✅ Définition du type pour un projet
interface Project {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
  githubFrontend?: string;
  githubBackend?: string;
  link?: string;
}

// ✅ Données de projet
const projectData: Project[] = [
  {
    icon: <Briefcase className="h-8 w-8 text-yellow-400" />,
    title: "Application de Livraison Full Stack",
    description:
      "Conception et développement d'une application de livraison complète (mobile React Native + API Laravel). Suivi en temps réel et gestion sécurisée des commandes.",
    tags: ["React Native", "Laravel", "API REST", "MySQL", "Full Stack"],
    githubFrontend: "https://github.com/KM-Solutions-SARL/livraison-mobile",
    githubBackend: "https://github.com/KM-Solutions-SARL/livraison",
  },
  {
    icon: <Layout className="h-8 w-8 text-yellow-400" />,
    title: "Plateforme de Vote en Ligne",
    description:
      "Application web pour le vote en ligne avec interface fluide et sécurisée. Gestion complète du processus électoral.",
    tags: ["React/Next", "PHP", "HTML/CSS", "JavaScript"],
    githubFrontend: "https://github.com/KM-Solutions-SARL/vote-en-ligne",
  },
  {
    icon: <Code className="h-8 w-8 text-yellow-400" />,
    title: "Application de Travail Collaboratif",
    description:
      "Application web pour le travail d'équipe (partage de fichiers, messagerie et collaboration en ligne).",
      tags: ["React", "Backend Custom", "Collaboration", "UI/UX"],
      githubFrontend: "https://github.com/ARISTIDE-CMD/Club infos frontend.git",
      githubBackend: "https://github.com/ARISTIDE-CMD/Club infos backend.git",
      link: "https://drive.google.com/file/d/1oC6NsyEMfauJqJcGxRScjh1Cr6VMaw6J/view?usp=sharing"
  },
];

// ✅ Composant principal
export default function Projects() {
  const handleButtonClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-slate-900 text-gray-200 py-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* Titre animé */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-16 border-b-4 border-yellow-400 pb-2 inline-block animate-fadeInUp">
          Mes <span className="text-yellow-400">Projets</span>
        </h1>

        {/* Grille des projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectData.map((project, index) => (
            <div
              key={index}
              className={`bg-slate-800 rounded-2xl shadow-xl border border-slate-700/50 p-8 flex flex-col transform transition-all duration-500 hover:scale-[1.02] hover:shadow-yellow-500/30 animate-fadeInUp`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Icône */}
              <div className="mb-5 flex items-center justify-center">{project.icon}</div>

              {/* Titre */}
              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed flex-grow mb-6">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6 justify-center">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-700 text-yellow-400 border border-yellow-500/30"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Boutons */}
              <div className="flex flex-wrap justify-center gap-3 mt-auto">
                {project.link && (
                  <button
                    onClick={() => handleButtonClick(project.link!)}
                    className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold px-4 py-2 rounded-lg transition-transform hover:scale-105"
                  >
                    <Layout className="w-5 h-5" />
                    Démo
                  </button>
                )}

                {project.githubFrontend && (
                  <button
                    onClick={() => handleButtonClick(project.githubFrontend!)}
                    className="flex items-center gap-2 border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-slate-900 px-4 py-2 rounded-lg font-semibold transition-transform hover:scale-105"
                  >
                    <Github className="w-5 h-5" />
                    GitHub {project.githubBackend ? "(Front)" : ""}
                  </button>
                )}

                {project.githubBackend && (
                  <button
                    onClick={() => handleButtonClick(project.githubBackend!)}
                    className="flex items-center gap-2 border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-slate-900 px-4 py-2 rounded-lg font-semibold transition-transform hover:scale-105"
                  >
                    <Github className="w-5 h-5" />
                    GitHub (Back)
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Section Figma */}
        <div className="mt-16 text-center text-gray-400 border-t border-slate-700/50 pt-6 animate-fadeInUp">
          <p>
            Les maquettes UI/UX (Figma) servent de démonstration visuelle pour
            l’application de travail collaboratif.
          </p>
        </div>
      </div>

      {/* ✅ Keyframes Tailwind */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
