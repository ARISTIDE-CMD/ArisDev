'use client';

import React from 'react';
import { Zap, Code, Wrench, BookOpen, UserCheck } from 'lucide-react';
import Image from 'next/image';

// ✅ Structure des compétences
interface Skill {
  name: string;
  level?: 'Expert' | 'Avancé' | 'Intermédiaire';
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

// ✅ Données
const skillsData: SkillCategory[] = [
  {
    title: "Langages & Frameworks",
    icon: <Code className="w-5 h-5" />,
    skills: [
      { name: "JavaScript / TypeScript", level: 'Expert' },
      { name: "React / Next.js", level: 'Expert' },
      { name: "React Native", level: 'Avancé' },
      { name: "Laravel / PHP", level: 'Avancé' },
      { name: "Spring / Java", level: 'Avancé' },
      { name: "HTML / CSS / Tailwind", level: 'Expert' },
      { name: "MySQL (Base de données)", level: 'Avancé' },
    ],
  },
  {
    title: "Outils & Environnement",
    icon: <Wrench className="w-5 h-5" />,
    skills: [
      { name: "GitHub / GitLab", level: 'Avancé' },
      { name: "Postman (API Testing)", level: 'Avancé' },
      { name: "Odoo/Jira/PowerBI", level: 'Intermédiaire' },
      { name: "VS Code", level: 'Expert' },
      { name: "Ubuntu / Linux", level: 'Intermédiaire' },
    ],
  },
  {
    title: "Méthodologies & Soft Skills",
    icon: <UserCheck className="w-5 h-5" />,
    skills: [
      { name: "Méthodes Agile / Scrum" },
      { name: "Gestion des risques & Budgétisation" },
      { name: "Documentation Technique" },
      { name: "Rigueur & Adaptabilité" },
      { name: "Esprit d'équipe & Communication" },
    ],
  },
  {
    title: "Compétences Autodidactes",
    icon: <BookOpen className="w-5 h-5" />,
    skills: [
      { name: "Marketing Digital" },
      { name: "UI/UX Design (Figma)" },
      { name: "Leadership" },
      { name: "Veille Technologique" },
    ],
  },
];

// ✅ Couleur badges
const getLevelClasses = (level?: Skill['level']) => {
  switch (level) {
    case 'Expert':
      return 'bg-yellow-400/20 text-yellow-400 border border-yellow-400/40';
    case 'Avancé':
      return 'bg-yellow-400/10 text-yellow-300 border border-yellow-300/30';
    case 'Intermédiaire':
      return 'bg-slate-700 text-gray-300 border border-slate-600';
    default:
      return '';
  }
};

// ✅ Composant principal
export default function Skills() {
  return (
    <div className="min-h-screen bg-slate-900 text-gray-200 py-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Titre */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-16 border-b-4 border-yellow-400 pb-2 inline-block animate-fadeInUp">
          Mes <span className="text-yellow-400">Compétences</span> Clés
        </h1>

        {/* Section Intro */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16 bg-slate-800 rounded-3xl shadow-2xl p-8 lg:p-12 border border-slate-700/50 animate-fadeInUp">
          {/* Image */}
          <div className="w-full lg:w-2/5 flex justify-center mb-10 lg:mb-0 animate-slideInLeft">
            <div className="relative w-full max-w-xs aspect-[4/5] overflow-hidden rounded-2xl border-4 border-yellow-400/40 shadow-xl">
              <Image
                src="/assets/images/4be308799a60e30b975caefe8fe61ded.jpg"
                alt="Illustration Compétences"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </div>
          </div>

          {/* Texte */}
          <div className="w-full lg:w-3/5 space-y-6 animate-slideInRight">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <Zap className="w-6 h-6 mr-2 text-yellow-400" />
              Mon Arsenal Technique
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              Passionné par le <span className="text-yellow-400 font-semibold">développement Full Stack</span>, 
              j’ai construit une expertise alliant front-end et back-end, avec un accent particulier sur 
              la performance, la qualité du code et les bonnes pratiques modernes.
            </p>

            <div className="inline-block bg-yellow-500 text-slate-900 px-5 py-2 rounded-full font-bold text-sm shadow-md shadow-yellow-500/30">
              Toujours prêt à construire des solutions performantes 🚀
            </div>
          </div>
        </div>

        {/* Grille des compétences */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {skillsData.map((category, idx) => (
            <div
              key={idx}
              className="bg-slate-800 border border-slate-700/50 rounded-2xl p-8 shadow-xl hover:shadow-yellow-500/30 transition-all duration-500 hover:scale-[1.02] animate-fadeInUp"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              {/* Titre catégorie */}
              <div className="flex items-center mb-5">
                <div className="bg-yellow-500/20 text-yellow-400 p-2 rounded-full mr-3">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{category.title}</h3>
              </div>

              {/* Liste des skills */}
              <ul className="space-y-3">
                {category.skills.map((skill, i) => (
                  <li
                    key={i}
                    className="flex justify-between items-center text-gray-300 text-sm"
                  >
                    <span className="font-medium">{skill.name}</span>
                    {skill.level && (
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${getLevelClasses(
                          skill.level
                        )}`}
                      >
                        {skill.level}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Animations CSS */}
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
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-slideInLeft {
          animation: slideInLeft 1s ease-out forwards;
        }
        .animate-slideInRight {
          animation: slideInRight 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
