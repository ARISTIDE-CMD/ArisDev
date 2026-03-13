"use client";

import {
  CalendarDays, MapPin, Briefcase,
  GraduationCap, ExternalLink, ArrowUpRight,
} from "lucide-react";
import { Reveal } from "@/components/refonte/Reveal";

/* ─── Data ─────────────────────────────────────────────── */
const experiences = [
  {
    period: "Nov 2025 — Présent",
    role: "Développeur Frontend & DevOps",
    company: "Iziway Cameroun",
    location: "Akwa, Douala",
    type: "CDI",
    active: true,
    bullets: [
      "Optimisation du moteur de recherche Typesense — latence réduite de 30 %",
      "Mise en place d'un système de monitoring pour la détection d'incidents en temps réel",
      "Automatisation des pipelines de déploiement CI/CD via GitLab",
      "Collaboration transverse avec l'équipe produit pour intégrer de nouvelles fonctionnalités",
    ],
    stack: ["Next.js", "Tailwind", "Typesense", "Docker", "GitLab CI"],
  },
  {
    period: "Juin 2025 — Sept 2025",
    role: "Développeur Full Stack",
    company: "Resa and Pay",
    location: "Ndokoti, Douala",
    type: "Stage",
    active: false,
    bullets: [
      "Conception et développement d'une app de livraison complète — commandes, suivi temps réel, livreurs",
      "API REST sécurisée avec Laravel pour la gestion centralisée des données",
      "Interfaces React Native avec gestion d'états, filtres dynamiques et upload de fichiers",
    ],
    stack: ["React Native", "Laravel", "MySQL", "REST API"],
  },
];

const education = [
  {
    period: "Oct 2025 — En cours",
    degree: "Licence Technologique — Informatique",
    school: "IUT Douala",
    location: "Douala, Cameroun",
    active: true,
  },
  {
    period: "Oct 2023 — Juin 2025",
    degree: "DTS Génie Logiciel",
    school: "IAI Cameroun",
    location: "Yaoundé, Cameroun",
    active: false,
  },
  {
    period: "2022 — 2023",
    degree: "Baccalauréat C (Scientifique)",
    school: "Lycée de Maképé",
    location: "Douala, Cameroun",
    active: false,
  },
];

/* ─── Page ─────────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-transparent text-slate-300 py-20 px-6">
      <div className="max-w-3xl mx-auto">

        {/* ── HEADER ──────────────────────────────────────── */}
        <Reveal>
          <header className="mb-20">
            <p className="f-mono text-amber-400 text-xs tracking-[.18em] uppercase mb-5 flex items-center gap-3">
              <span className="w-7 h-px bg-amber-400 inline-block" />
              À propos
            </p>

            <h1 className="f-syne text-4xl md:text-5xl font-extrabold text-slate-50 mb-6 leading-[1.05]">
              Aristide Gaël
              <br />
              <span className="text-amber-400">Kouandja Kenfack</span>
            </h1>

            {/* Meta infos */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-600 f-mono mb-10">
              <span className="flex items-center gap-1.5">
                <MapPin size={12} className="text-amber-400/60" />
                Douala, Cameroun
              </span>
              <span className="flex items-center gap-1.5">
                <CalendarDays size={12} className="text-amber-400/60" />
                02 août 2006
              </span>
              <a
                href="https://porfolio-pdkp.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
              >
                <ExternalLink size={12} className="text-amber-400/60" />
                porfolio-pdkp.vercel.app
              </a>
            </div>

            {/* Bio */}
            <div className="relative pl-5">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] rounded-full"
                style={{ background: "linear-gradient(to bottom, #f59e0b99, #f59e0b22, transparent)" }}
              />
              <p className="text-base md:text-lg leading-[1.8] text-slate-400 max-w-2xl">
                Développeur Full Stack passionné par l&apos;architecture logicielle et les pratiques DevOps.
                Je construis des applications robustes, du frontend interactif jusqu&apos;aux pipelines de déploiement
                automatisé.{" "}
                <span className="text-slate-300">Curieux, rigoureux</span>, toujours en veille sur les bonnes pratiques
                de l&apos;ingénierie moderne.
              </p>
            </div>
          </header>
        </Reveal>

        {/* ── EXPÉRIENCES ─────────────────────────────────── */}
        <section className="mb-20">
          <Reveal>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-7 h-7 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center">
                <Briefcase size={13} className="text-amber-400" />
              </div>
              <h2 className="f-syne font-bold text-slate-400 text-xs tracking-[.14em] uppercase">
                Expériences professionnelles
              </h2>
              <div className="flex-1 h-px bg-[#0d1520]" />
            </div>
          </Reveal>

          <div>
            {experiences.map((xp, idx) => (
              <Reveal key={xp.role} delay={idx * 0.07}>
                <article className="group relative py-8 border-b border-[#0c1520] last:border-0">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">

                    {/* Période + badge */}
                    <div className="sm:w-44 flex-shrink-0 pt-0.5">
                      <p className="f-mono text-[10px] text-slate-600 leading-none mb-2">{xp.period}</p>
                      <div className="flex items-center gap-2">
                        {xp.active && (
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                          </span>
                        )}
                        <span className={`f-mono text-[9px] px-2 py-0.5 rounded-full border ${xp.active
                            ? "text-emerald-400 border-emerald-400/30 bg-emerald-400/10"
                            : "text-slate-600   border-slate-700/50   bg-transparent"
                          }`}>
                          {xp.type}
                        </span>
                      </div>
                    </div>

                    {/* Contenu */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3 mb-1">
                        <h3 className="f-syne font-bold text-slate-100 text-[1.1rem] leading-tight">
                          {xp.role}
                        </h3>
                        <ArrowUpRight
                          size={15}
                          className="text-slate-800 group-hover:text-amber-400 transition-colors duration-200 flex-shrink-0 mt-1"
                        />
                      </div>

                      <p className="text-amber-400/75 text-sm font-medium mb-0.5">{xp.company}</p>
                      <p className="f-mono text-[10px] text-slate-700 flex items-center gap-1 mb-5">
                        <MapPin size={10} /> {xp.location}
                      </p>

                      {/* Bullets */}
                      <ul className="space-y-2.5 mb-5">
                        {xp.bullets.map((b) => (
                          <li key={b} className="flex gap-3 text-sm text-slate-500 leading-relaxed">
                            <span className="text-amber-400/40 flex-shrink-0 mt-0.5 select-none">›</span>
                            <span className="group-hover:text-slate-400 transition-colors duration-300">{b}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Stack */}
                      <div className="flex flex-wrap gap-1.5">
                        {xp.stack.map((s) => (
                          <span key={s} className="f-mono text-[10px] text-slate-600 border border-[#111c2c] bg-[#050b14] px-2.5 py-0.5 rounded-full">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── FORMATION ───────────────────────────────────── */}
        <section>
          <Reveal>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-7 h-7 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center">
                <GraduationCap size={13} className="text-amber-400" />
              </div>
              <h2 className="f-syne font-bold text-slate-400 text-xs tracking-[.14em] uppercase">
                Formation
              </h2>
              <div className="flex-1 h-px bg-[#0d1520]" />
            </div>
          </Reveal>

          <div>
            {education.map((ed, idx) => (
              <Reveal key={ed.degree} delay={idx * 0.06}>
                <article className="group flex flex-col sm:flex-row sm:items-start gap-4 py-6 border-b border-[#0c1520] last:border-0">

                  {/* Période + badge */}
                  <div className="sm:w-44 flex-shrink-0 pt-0.5">
                    <p className="f-mono text-[10px] text-slate-600 leading-none mb-2">{ed.period}</p>
                    {ed.active && (
                      <span className="f-mono text-[9px] px-2 py-0.5 rounded-full border text-emerald-400 border-emerald-400/30 bg-emerald-400/10 inline-flex items-center gap-1.5">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                        </span>
                        En cours
                      </span>
                    )}
                  </div>

                  {/* Contenu */}
                  <div className="flex-1">
                    <h3 className="f-syne font-bold text-slate-100 text-base leading-tight mb-1 group-hover:text-slate-50 transition-colors">
                      {ed.degree}
                    </h3>
                    <p className="text-amber-400/60 text-sm mb-0.5">{ed.school}</p>
                    <p className="f-mono text-[10px] text-slate-700 flex items-center gap-1">
                      <MapPin size={10} /> {ed.location}
                    </p>
                  </div>

                </article>
              </Reveal>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}