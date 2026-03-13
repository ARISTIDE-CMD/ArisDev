"use client";

import { ExternalLink, Github, Play, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/refonte/Reveal";

/* ─── Types ─────────────────────────────────────────────── */
interface Project {
  title: string;
  description: string;
  impact?: string;
  impactColor?: "emerald" | "sky" | "violet";
  tags: string[];
  featured?: boolean;
  live?: boolean;
  liveUrl?: string;
  liveCredentials?: { email: string; password: string };
  githubFront?: string;
  githubBack?: string;
  demo?: string;
}

/* ─── Data ──────────────────────────────────────────────── */
const projects: Project[] = [
  {
    title: "Application de Livraison Full Stack",
    description:
      "Plateforme complète de livraison avec suivi en temps réel. Mobile React Native côté client & livreur, API Laravel sécurisée en backend, gestion centralisée des commandes et restaurants.",
    impact: "Déployée en production chez Resa and Pay",
    impactColor: "emerald",
    tags: ["React Native", "Laravel", "MySQL", "API REST", "JWT"],
    githubFront: "https://github.com/KM-Solutions-SARL/livraison-mobile",
    githubBack: "https://github.com/KM-Solutions-SARL/livraison",
    featured: true,
  },
  {
    title: "Optimisation Moteur de Recherche — Iziway",
    description:
      "Audit et refonte de l'intégration Typesense sur la plateforme Iziway Cameroun. CI/CD automatisé, monitoring temps réel.",
    impact: "−30 % de latence, incidents résolus en temps réel",
    impactColor: "emerald",
    tags: ["Typesense", "Next.js", "Docker", "GitLab CI", "Monitoring"],
    featured: true,
  },
  {
    title: "SirTech — Plateforme de gestion",
    description:
      "Application web complète de gestion d'entreprise. Authentification sécurisée, tableau de bord et modules métiers.",
    impact: "En production sur Netlify",
    impactColor: "sky",
    tags: ["React / Next.js", "API REST", "Auth JWT"],
    live: true,
    liveUrl: "https://sirtech.netlify.app/",
    liveCredentials: { email: "admin@sirtech.com", password: "Admin@123" },
  },
  {
    title: "GesticomERP — Système ERP",
    description:
      "ERP complet pour la gestion commerciale et opérationnelle. Modules : stocks, commandes, facturation, reporting.",
    impact: "ERP multi-modules en production",
    impactColor: "violet",
    tags: ["React / Next.js", "API REST", "MySQL", "Auth"],
    live: true,
    liveUrl: "https://gesticomerp.netlify.app/",
    liveCredentials: { email: "admin@moligeerp.com", password: "Admin@123" },
  },
  {
    title: "Plateforme de Vote en Ligne",
    description:
      "Application web sécurisée pour le vote électronique. Gestion complète du processus électoral.",
    tags: ["React / Next.js", "PHP", "JavaScript"],
    githubFront: "https://github.com/KM-Solutions-SARL/vote-en-ligne",
  },
  {
    title: "Outil de Travail Collaboratif",
    description:
      "App web d'équipe : partage de fichiers, messagerie interne et collaboration. UX/UI Figma.",
    tags: ["React", "Backend Custom", "UI/UX", "Figma"],
    githubFront: "https://github.com/ARISTIDE-CMD/Club-infos-frontend",
    githubBack: "https://github.com/ARISTIDE-CMD/Club-infos-backend",
    demo: "https://drive.google.com/file/d/1oC6NsyEMfauJqJcGxRScjh1Cr6VMaw6J/view",
  },
];

/* ─── Tag pill ──────────────────────────────────────────── */
const pillStyles: Record<string, { text: string; border: string; bg: string }> = {
  "React / Next.js": { text: "#38bdf8", bg: "#040f18", border: "#0c2d3e" },
  "React/Next.js": { text: "#38bdf8", bg: "#040f18", border: "#0c2d3e" },
  "Next.js": { text: "#38bdf8", bg: "#040f18", border: "#0c2d3e" },
  "React": { text: "#61DAFB", bg: "#040f18", border: "#0c2d3e" },
  "React Native": { text: "#a78bfa", bg: "#0d0618", border: "#2d1b4e" },
  "Laravel": { text: "#f87171", bg: "#130505", border: "#3d1515" },
  "PHP": { text: "#a78bfa", bg: "#0d0618", border: "#2d1b4e" },
  "TypeScript": { text: "#3178C6", bg: "#040d1a", border: "#1a2f4e" },
  "JavaScript": { text: "#F7DF1E", bg: "#0d0b00", border: "#2e2800" },
  "Docker": { text: "#2496ED", bg: "#021410", border: "#0d3530" },
  "GitLab CI": { text: "#FC6D26", bg: "#140800", border: "#3d2208" },
  "Monitoring": { text: "#64748b", bg: "#0a1020", border: "#1e2a38" },
  "Typesense": { text: "#f59e0b", bg: "rgba(245,158,11,.06)", border: "rgba(245,158,11,.2)" },
  "MySQL": { text: "#4479A1", bg: "#040d18", border: "#0d2236" },
  "API REST": { text: "#64748b", bg: "#0a1020", border: "#1e2a38" },
  "JWT": { text: "#f472b6", bg: "#130618", border: "#3d1535" },
  "Auth JWT": { text: "#f472b6", bg: "#130618", border: "#3d1535" },
  "Auth": { text: "#f472b6", bg: "#130618", border: "#3d1535" },
  "UI/UX": { text: "#818cf8", bg: "#08061a", border: "#1e1a4e" },
  "Figma": { text: "#F24E1E", bg: "#130400", border: "#3d1505" },
  "Backend Custom": { text: "#64748b", bg: "#0a1020", border: "#1e2a38" },
};

function Tag({ label }: { label: string }) {
  const s = pillStyles[label] ?? { text: "#475569", bg: "#060c14", border: "#0f1825" };
  return (
    <span
      className="f-mono text-[10px] border px-2.5 py-0.5 rounded-full"
      style={{ color: s.text, background: s.bg, borderColor: s.border }}
    >
      {label}
    </span>
  );
}

/* ─── Impact badge ──────────────────────────────────────── */
const impactCls: Record<NonNullable<Project["impactColor"]>, string> = {
  emerald: "text-emerald-400 border-emerald-900/60 bg-emerald-950/30",
  sky: "text-sky-400    border-sky-900/60    bg-sky-950/30",
  violet: "text-violet-400 border-violet-900/60 bg-violet-950/30",
};

/* ─── Boutons ───────────────────────────────────────────── */
const btnBase = "inline-flex items-center gap-1.5 f-mono text-[10px] tracking-[.04em] px-3 py-1.5 rounded-lg border transition-all duration-200";
const btnPrimary = `${btnBase} bg-amber-400 hover:bg-amber-300 active:scale-[.97] text-slate-900 border-transparent font-medium`;
const btnGhost = `${btnBase} border-[#0f1825] bg-[#06090f] text-slate-600 hover:text-amber-400 hover:border-amber-400/25`;

/* ─── Ligne projet ──────────────────────────────────────── */
function ProjectRow({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={index * 0.06} y={12}>
      <article className="group py-7 border-b border-[#0c1520] last:border-0">
        <div className="flex flex-col sm:flex-row sm:items-start gap-4">

          {/* Badges gauche */}
          <div className="sm:w-28 flex-shrink-0 flex sm:flex-col gap-2 pt-0.5">
            {project.featured && (
              <span className="f-mono text-[9px] px-2 py-0.5 rounded-full border text-amber-400 border-amber-400/30 bg-amber-400/10 w-fit">
                Featured
              </span>
            )}
            {project.live && (
              <span className="f-mono text-[9px] px-2 py-0.5 rounded-full border text-emerald-400 border-emerald-400/30 bg-emerald-400/10 w-fit flex items-center gap-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                </span>
                Live
              </span>
            )}
          </div>

          {/* Contenu */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-3 mb-2">
              <h2 className="f-syne font-bold text-slate-100 text-base leading-tight group-hover:text-slate-50 transition-colors">
                {project.title}
              </h2>
              <ArrowUpRight
                size={14}
                className="text-slate-800 group-hover:text-amber-400 transition-colors flex-shrink-0 mt-0.5"
              />
            </div>

            <p className="text-slate-500 text-sm leading-relaxed mb-3 group-hover:text-slate-400 transition-colors duration-300">
              {project.description}
            </p>

            {project.impact && (
              <p className={`f-mono text-[10px] border rounded-lg px-2.5 py-1 inline-block mb-4 ${impactCls[project.impactColor ?? "emerald"]}`}>
                ✦ {project.impact}
              </p>
            )}

            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tags.map((t) => <Tag key={t} label={t} />)}
            </div>

            <div className="flex flex-wrap gap-2">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
                  <ExternalLink size={11} /> Voir le projet
                </a>
              )}
              {project.githubFront && (
                <a href={project.githubFront} target="_blank" rel="noopener noreferrer" className={btnGhost}>
                  <Github size={11} /> {project.githubBack ? "Front" : "GitHub"}
                </a>
              )}
              {project.githubBack && (
                <a href={project.githubBack} target="_blank" rel="noopener noreferrer" className={btnGhost}>
                  <Github size={11} /> Back
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className={btnGhost}>
                  <Play size={11} /> Démo
                </a>
              )}
            </div>

            {project.liveCredentials && (
              <p className="mt-3 f-mono text-[9.5px] text-slate-700">
                Démo · {project.liveCredentials.email} · {project.liveCredentials.password}
              </p>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

/* ─── Page ───────────────────────────────────────────────── */
export default function ProjectsPage() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <main className="min-h-screen bg-transparent text-slate-300 py-20 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <Reveal>
          <header className="mb-16">
            <p className="f-mono text-amber-400 text-xs tracking-[.18em] uppercase mb-5 flex items-center gap-3">
              <span className="w-7 h-px bg-amber-400 inline-block" />
              Projets
            </p>
            <h1 className="f-syne font-extrabold text-4xl md:text-5xl text-slate-50 mb-3 leading-tight">
              Ce que j&apos;ai{" "}
              <span className="text-amber-400">construit</span>
            </h1>
            <p className="text-slate-600 max-w-lg text-sm leading-relaxed">
              Applications en production, projets académiques et open source — du mobile au backend, en passant par le DevOps.
            </p>
          </header>
        </Reveal>

        {/* Featured */}
        <Reveal>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-7 h-7 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center">
              <span className="text-amber-400 text-[11px] leading-none">★</span>
            </div>
            <h2 className="f-syne font-bold text-slate-400 text-xs tracking-[.14em] uppercase">Featured</h2>
            <div className="flex-1 h-px bg-[#0d1520]" />
          </div>
        </Reveal>
        <div className="mb-14">
          {featured.map((p, i) => <ProjectRow key={p.title} project={p} index={i} />)}
        </div>

        {/* Autres */}
        <Reveal>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-7 h-7 rounded-lg bg-[#060c14] border border-[#0f1825] flex items-center justify-center">
              <Github size={13} className="text-slate-600" />
            </div>
            <h2 className="f-syne font-bold text-slate-400 text-xs tracking-[.14em] uppercase">Autres projets</h2>
            <div className="flex-1 h-px bg-[#0d1520]" />
          </div>
        </Reveal>
        <div className="mb-16">
          {others.map((p, i) => <ProjectRow key={p.title} project={p} index={i} />)}
        </div>

        {/* CTA */}
        <Reveal y={10} delay={0.06}>
          <div className="pt-8 border-t border-[#0d1520] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="f-mono text-[10px] text-slate-700">
              {projects.length} projets · plus sur GitHub
            </p>
            <a
              href="https://github.com/ARISTIDE-CMD"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 f-mono text-[11px] border border-[#0f1825] hover:border-amber-400/25 text-slate-600 hover:text-amber-400 px-5 py-2.5 rounded-xl transition-all duration-200"
            >
              <Github size={13} />
              Profil GitHub
              <ArrowUpRight size={11} className="opacity-50" />
            </a>
          </div>
        </Reveal>

      </div>
    </main>
  );
}