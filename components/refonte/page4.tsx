"use client";

import { Github, Play } from "lucide-react";

const projects = [
  {
    title: "Application de Livraison Full Stack",
    description:
      "Plateforme complète de livraison avec suivi en temps réel. Mobile React Native côté client & livreur, API Laravel sécurisée en backend, gestion centralisée des commandes et restaurants.",
    impact: "Déployée en production chez Resa and Pay",
    tags: ["React Native", "Laravel", "MySQL", "API REST", "JWT"],
    githubFront: "https://github.com/KM-Solutions-SARL/livraison-mobile",
    githubBack:  "https://github.com/KM-Solutions-SARL/livraison",
    featured: true,
  },
  {
    title: "Optimisation Moteur de Recherche — Iziway",
    description:
      "Audit et refonte de l'intégration Typesense sur la plateforme Iziway Cameroun. Réduction du temps de réponse de 30 %, mise en place du monitoring temps réel et automatisation des déploiements.",
    impact: "−30 % de latence, incidents résolus en temps réel",
    tags: ["Typesense", "Next.js", "Docker", "GitLab CI", "Monitoring"],
    featured: true,
  },
  {
    title: "Plateforme de Vote en Ligne",
    description:
      "Application web sécurisée pour le vote électronique. Interface fluide et moderne, gestion du processus électoral complet de A à Z.",
    tags: ["React / Next.js", "PHP", "JavaScript", "HTML/CSS"],
    githubFront: "https://github.com/KM-Solutions-SARL/vote-en-ligne",
    featured: false,
  },
  {
    title: "Outil de Travail Collaboratif",
    description:
      "Application web d'équipe : partage de fichiers, messagerie interne et collaboration en ligne. Conception UX/UI Figma + développement frontend.",
    tags: ["React", "Backend Custom", "UI/UX", "Figma"],
    githubFront: "https://github.com/ARISTIDE-CMD/Club-infos-frontend",
    githubBack:  "https://github.com/ARISTIDE-CMD/Club-infos-backend",
    demo:        "https://drive.google.com/file/d/1oC6NsyEMfauJqJcGxRScjh1Cr6VMaw6J/view",
    featured: false,
  },
];

const tagStyle: Record<string, string> = {
  "React / Next.js": "text-sky-400 border-sky-900 bg-sky-950/40",
  "React Native":    "text-violet-400 border-violet-900 bg-violet-950/40",
  "Laravel":         "text-red-400 border-red-900 bg-red-950/40",
  "TypeScript":      "text-blue-400 border-blue-900 bg-blue-950/40",
  "Docker":          "text-teal-400 border-teal-900 bg-teal-950/40",
  "GitLab CI":       "text-orange-400 border-orange-900 bg-orange-950/40",
  "Typesense":       "text-amber-400 border-amber-900 bg-amber-950/40",
};

function tag(label: string) {
  const style = tagStyle[label] ?? "text-slate-400 border-slate-700 bg-slate-800/60";
  return (
    <span key={label} className={`text-xs border px-2.5 py-0.5 rounded-full f-mono ${style}`}>
      {label}
    </span>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <main className="min-h-screen bg-[#06080f] text-slate-300 py-20 px-6">
        <div className="max-w-5xl mx-auto">

          {/* ── HEADER ──────────────────────────────────── */}
          <header className="mb-16">
            <p className="f-mono text-amber-400 text-xs tracking-[.18em] uppercase mb-4 flex items-center gap-3">
              <span className="w-7 h-px bg-amber-400 inline-block" />
              Projets
            </p>
            <h1 className="f-syne font-extrabold text-4xl md:text-5xl text-slate-50 mb-3">
              Ce que j&apos;ai{" "}
              <span className="text-amber-400">construit</span>
            </h1>
            <p className="text-slate-500 max-w-xl">
              Applications en production, projets académiques et travaux open source — du mobile au backend, en passant par le DevOps.
            </p>
          </header>

          {/* ── FEATURED PROJECTS ───────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {projects.filter((p) => p.featured).map((p) => (
              <div key={p.title}
                className="group bg-[#0c1018] border border-[#151c28] hover:border-amber-400/25 rounded-2xl p-7 flex flex-col gap-5 transition-colors duration-300">
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h2 className="f-syne font-bold text-slate-50 text-lg leading-tight">{p.title}</h2>
                    <span className="flex-shrink-0 f-mono text-[10px] text-amber-400 border border-amber-400/30 bg-amber-400/10 px-2.5 py-0.5 rounded-full">
                      Featured
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-3">{p.description}</p>
                  {p.impact && (
                    <p className="text-xs text-emerald-400 border border-emerald-900 bg-emerald-950/40 rounded-lg px-3 py-1.5 inline-block">
                      ✦ {p.impact}
                    </p>
                  )}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map(tag)}
                </div>

                <div className="flex flex-wrap gap-3 mt-auto pt-2 border-t border-[#151c28]">
                  {p.githubFront && (
                    <a href={p.githubFront} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-amber-400 transition-colors">
                      <Github size={14} /> {p.githubBack ? "Front" : "GitHub"}
                    </a>
                  )}
                  {p.githubBack && (
                    <a href={p.githubBack} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-amber-400 transition-colors">
                      <Github size={14} /> Back
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* ── OTHER PROJECTS ───────────────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.filter((p) => !p.featured).map((p) => (
              <div key={p.title}
                className="group bg-[#0c1018] border border-[#151c28] hover:border-slate-700 rounded-2xl p-6 flex flex-col gap-4 transition-colors duration-300">
                <div>
                  <h2 className="f-syne font-bold text-slate-100 text-base mb-2">{p.title}</h2>
                  <p className="text-slate-500 text-sm leading-relaxed">{p.description}</p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map(tag)}
                </div>

                <div className="flex flex-wrap gap-3 mt-auto pt-2 border-t border-[#151c28]">
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-amber-400 transition-colors">
                      <Play size={13} /> Démo
                    </a>
                  )}
                  {p.githubFront && (
                    <a href={p.githubFront} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-amber-400 transition-colors">
                      <Github size={13} /> {p.githubBack ? "Front" : "GitHub"}
                    </a>
                  )}
                  {p.githubBack && (
                    <a href={p.githubBack} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-amber-400 transition-colors">
                      <Github size={13} /> Back
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* ── CTA ──────────────────────────────────────── */}
          <div className="mt-16 text-center">
            <p className="text-slate-600 mb-5 text-sm">Voir tous mes dépôts publics</p>
            <a href="https://github.com/ARISTIDE-CMD" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#1e2a38] hover:border-amber-400/30 text-slate-400 hover:text-amber-400 px-6 py-3 rounded-xl transition-all duration-300 f-syne font-medium text-sm">
              <Github size={16} /> Profil GitHub
            </a>
          </div>

        </div>
      </main>
    </>
  );
}
