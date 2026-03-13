"use client";

import { CalendarDays, MapPin, Briefcase, GraduationCap, ExternalLink } from "lucide-react";

const experiences = [
  {
    period: "Nov 2025 — Présent",
    role: "Développeur Frontend & DevOps",
    company: "Iziway Cameroun",
    location: "Akwa, Douala",
    type: "CDI",
    bullets: [
      "Optimisation du moteur de recherche Typesense — latence réduite de 30 %",
      "Mise en place d'un système de monitoring pour la détection d'incidents en temps réel",
      "Automatisation des pipelines de déploiement (CI/CD) via GitLab",
      "Collaboration transverse avec l'équipe produit pour intégrer de nouvelles fonctionnalités",
    ],
    stack: ["Next.js", "Tailwind", "Typesense", "Docker", "GitLab CI"],
    color: "border-amber-400 bg-amber-400/5",
    dot: "bg-amber-400",
  },
  {
    period: "Juin 2025 — Sept 2025",
    role: "Développeur Full Stack",
    company: "Resa and Pay",
    location: "Ndokoti, Douala",
    type: "Stage",
    bullets: [
      "Conception et développement d'une app de livraison complète (commandes, suivi temps réel, livreurs)",
      "API REST sécurisée avec Laravel pour la gestion centralisée des données",
      "Interfaces React Native avec gestion d'états, filtres dynamiques et upload de fichiers",
    ],
    stack: ["React Native", "Laravel", "MySQL", "REST API"],
    color: "border-sky-400/40 bg-sky-400/5",
    dot: "bg-sky-400",
  },
];

const education = [
  {
    period: "Oct 2025 — En cours",
    degree: "Licence Technologique — Informatique",
    school: "IUT Douala",
    location: "Douala, Cameroun",
  },
  {
    period: "Oct 2023 — Juin 2025",
    degree: "DTS Génie Logiciel",
    school: "IAI Cameroun",
    location: "Yaoundé, Cameroun",
  },
  {
    period: "2022 — 2023",
    degree: "Baccalauréat C (Scientifique)",
    school: "Lycée de Maképé",
    location: "Douala, Cameroun",
  },
];

export default function AboutPage() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600&family=DM+Mono:wght@400;500&display=swap');
        .f-syne { font-family:'Syne',sans-serif; }
        .f-mono  { font-family:'DM Mono',monospace; }
        body { background:#06080f; font-family:'DM Sans',sans-serif; }
      `}</style>

      <main className="min-h-screen bg-[#06080f] text-slate-300 py-20 px-6">
        <div className="max-w-4xl mx-auto">

          {/* ── HEADER ───────────────────────────────────── */}
          <header className="mb-20">
            <p className="f-mono text-amber-400 text-xs tracking-[.18em] uppercase mb-4 flex items-center gap-3">
              <span className="w-7 h-px bg-amber-400 inline-block" />
              À propos
            </p>
            <h1 className="f-syne text-4xl md:text-5xl font-extrabold text-slate-50 mb-6 leading-tight">
              Aristide Gaël
              <br />
              <span className="text-amber-400">Kouandja Kenfack</span>
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-8">
              <span className="flex items-center gap-1.5"><MapPin size={14} className="text-amber-400" /> Douala, Cameroun</span>
              <span className="flex items-center gap-1.5"><CalendarDays size={14} className="text-amber-400" /> Né le 02 août 2006</span>
              <a href="https://porfolio-pdkp.vercel.app" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
                <ExternalLink size={14} className="text-amber-400" /> porfolio-pdkp.vercel.app
              </a>
            </div>
            <p className="text-base md:text-lg leading-relaxed text-slate-400 max-w-2xl border-l-2 border-amber-400/40 pl-5">
              Développeur Full Stack passionné par l&apos;architecture logicielle et les pratiques DevOps.{" "}
              Je construis des applications robustes, du frontend interactif jusqu&apos;aux pipelines de déploiement automatisé.{" "}
              Curieux, rigoureux, et toujours en veille sur les bonnes pratiques de l&apos;ingénierie moderne.
            </p>
          </header>

          {/* ── EXPERIENCE ───────────────────────────────── */}
          <section className="mb-20">
            <h2 className="f-syne font-bold text-slate-50 text-2xl mb-8 flex items-center gap-3">
              <Briefcase size={20} className="text-amber-400" />
              Expériences professionnelles
            </h2>

            <div className="space-y-6">
              {experiences.map((xp) => (
                <div key={xp.role} className={`rounded-2xl border ${xp.color} p-6 md:p-8`}>
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="f-syne font-bold text-slate-50 text-lg">{xp.role}</h3>
                      <p className="text-amber-400 font-medium">{xp.company}</p>
                      <p className="text-slate-500 text-sm flex items-center gap-1 mt-0.5">
                        <MapPin size={12} /> {xp.location}
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="f-mono text-xs text-slate-500 block">{xp.period}</span>
                      <span className="text-xs bg-amber-400/10 text-amber-400 border border-amber-400/20 px-2 py-0.5 rounded-full mt-1 inline-block">
                        {xp.type}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {xp.bullets.map((b) => (
                      <li key={b} className="text-sm text-slate-400 flex gap-2">
                        <span className="text-amber-400 mt-0.5 flex-shrink-0">›</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {xp.stack.map((s) => (
                      <span key={s} className="f-mono text-xs text-slate-500 border border-[#1e2d40] bg-[#0c1825] px-3 py-1 rounded-full">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── EDUCATION ────────────────────────────────── */}
          <section>
            <h2 className="f-syne font-bold text-slate-50 text-2xl mb-8 flex items-center gap-3">
              <GraduationCap size={20} className="text-amber-400" />
              Formation
            </h2>

            <div className="relative pl-6 border-l border-[#1e2a38]">
              {education.map((ed, i) => (
                <div key={ed.degree} className={`relative mb-8 last:mb-0 ${i < education.length - 1 ? "" : ""}`}>
                  {/* Dot */}
                  <div className="absolute -left-[25px] w-3 h-3 rounded-full bg-amber-400 ring-4 ring-[#06080f]" />

                  <div className="bg-[#0c1018] border border-[#151c28] rounded-xl p-5">
                    <p className="f-mono text-xs text-slate-600 mb-1">{ed.period}</p>
                    <h3 className="f-syne font-bold text-slate-100 text-base">{ed.degree}</h3>
                    <p className="text-amber-400/80 text-sm">{ed.school}</p>
                    <p className="text-slate-600 text-xs mt-0.5 flex items-center gap-1">
                      <MapPin size={11} /> {ed.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
