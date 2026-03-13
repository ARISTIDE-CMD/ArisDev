"use client";

import { ExternalLink, Github, Play } from "lucide-react";

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
      "Application web complète de gestion d'entreprise. Authentification sécurisée, tableau de bord et modules métiers. Déployée et accessible en ligne.",
    impact: "Hébergé en production sur Netlify",
    impactColor: "sky",
    tags: ["React/Next.js", "API REST", "Auth JWT"],
    live: true,
    liveUrl: "https://sirtech.netlify.app/",
    liveCredentials: { email: "admin@sirtech.com", password: "Admin@123" },
  },
  {
    title: "GesticomERP — Système ERP",
    description:
      "Système ERP complet pour la gestion commerciale et opérationnelle d'entreprise. Modules : stocks, commandes, facturation, reporting. Interface intuitive et responsive.",
    impact: "ERP multi-modules en production",
    impactColor: "violet",
    tags: ["React/Next.js", "API REST", "MySQL", "Auth"],
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
      "App web d'équipe : partage de fichiers, messagerie interne et collaboration en ligne. UX/UI Figma.",
    tags: ["React", "Backend Custom", "UI/UX", "Figma"],
    githubFront: "https://github.com/ARISTIDE-CMD/Club-infos-frontend",
    githubBack: "https://github.com/ARISTIDE-CMD/Club-infos-backend",
    demo: "https://drive.google.com/file/d/1oC6NsyEMfauJqJcGxRScjh1Cr6VMaw6J/view",
  },
];

const pillStyles: Record<
  string,
  { text: string; border: string; bg: string }
> = {
  "React/Next.js": { text: "#38bdf8", bg: "#061624", border: "#0c2d3e" },
  "React / Next.js": { text: "#38bdf8", bg: "#061624", border: "#0c2d3e" },
  "Next.js": { text: "#38bdf8", bg: "#061624", border: "#0c2d3e" },
  React: { text: "#38bdf8", bg: "#061624", border: "#0c2d3e" },
  "React Native": { text: "#a78bfa", bg: "#120a22", border: "#2d1b4e" },
  Laravel: { text: "#f87171", bg: "#180808", border: "#3d1515" },
  PHP: { text: "#f87171", bg: "#180808", border: "#3d1515" },
  TypeScript: { text: "#60a5fa", bg: "#06101e", border: "#1a2f4e" },
  Docker: { text: "#2dd4bf", bg: "#041814", border: "#0d3530" },
  DevOps: { text: "#2dd4bf", bg: "#041814", border: "#0d3530" },
  "Docker · CI/CD": { text: "#2dd4bf", bg: "#041814", border: "#0d3530" },
  "GitLab CI": { text: "#2dd4bf", bg: "#041814", border: "#0d3530" },
  Monitoring: { text: "#64748b", bg: "#0a1020", border: "#1e2a38" },
  Typesense: { text: "#f59e0b", bg: "rgba(245,158,11,.08)", border: "rgba(245,158,11,.25)" },
};

function Tag({ label }: { label: string }) {
  const style = pillStyles[label] ?? { text: "#64748b", bg: "#0a1020", border: "#1e2a38" };
  return (
    <span
      key={label}
      className="text-xs border px-3 py-1 rounded-[20px] f-mono"
      style={{ color: style.text, background: style.bg, borderColor: style.border }}
    >
      {label}
    </span>
  );
}

const impactBadge: Record<NonNullable<Project["impactColor"]>, string> = {
  emerald: "text-emerald-400 border-emerald-900 bg-emerald-950/40",
  sky: "text-sky-400 border-sky-900 bg-sky-950/40",
  violet: "text-violet-400 border-violet-900 bg-violet-950/40",
};

const liveBadge: Record<NonNullable<Project["impactColor"]>, string> = {
  emerald: "bg-teal-950/40 text-teal-400 border-teal-900",
  sky: "bg-teal-950/40 text-teal-400 border-teal-900",
  violet: "bg-violet-950/40 text-violet-300 border-violet-900",
};

function ProjectCard({ project }: { project: Project }) {
  const showLive = Boolean(project.liveUrl);
  const badgeCls = liveBadge[project.impactColor ?? "sky"];
  const impactCls = project.impactColor ? impactBadge[project.impactColor] : impactBadge.emerald;

  return (
    <div className="group bg-[#0c1018] border border-[#151c28] hover:border-[#1e2a38] rounded-[14px] p-7 flex flex-col gap-5 transition-colors duration-300 relative">
      {showLive && (
        <span className={`absolute top-5 right-5 f-mono text-[10px] px-2.5 py-0.5 rounded-[20px] border ${badgeCls}`}>
          Live ↗
        </span>
      )}

      <div className="pr-16">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h2 className="f-syne font-bold text-slate-50 text-lg leading-tight">{project.title}</h2>
          {project.featured && (
            <span className="flex-shrink-0 f-mono text-[10px] text-amber-400 border border-amber-400/30 bg-amber-400/10 px-2.5 py-0.5 rounded-[20px]">
              Featured
            </span>
          )}
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-3">{project.description}</p>

        {project.impact && (
          <p className={`text-xs border rounded-[10px] px-3 py-1.5 inline-block ${impactCls}`}>
            ✦ {project.impact}
          </p>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <Tag key={t} label={t} />
        ))}
      </div>

      <div className="flex flex-wrap gap-3 mt-auto pt-3 border-t border-[#151c28]">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-amber-400 hover:bg-amber-300 text-slate-900 px-4 py-2 text-xs font-semibold transition-colors"
          >
            <ExternalLink size={14} />
            Voir le projet ↗
          </a>
        )}

        {project.githubFront && (
          <a
            href={project.githubFront}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-[10px] border border-[#1e2a38] bg-[#0c1018] px-4 py-2 text-xs text-slate-300 hover:text-amber-400 hover:border-amber-400/30 transition-colors"
          >
            <Github size={14} /> {project.githubBack ? "Front" : "GitHub"}
          </a>
        )}

        {project.githubBack && (
          <a
            href={project.githubBack}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-[10px] border border-[#1e2a38] bg-[#0c1018] px-4 py-2 text-xs text-slate-300 hover:text-amber-400 hover:border-amber-400/30 transition-colors"
          >
            <Github size={14} /> Back
          </a>
        )}

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-[10px] border border-[#1e2a38] bg-[#0c1018] px-4 py-2 text-xs text-slate-300 hover:text-amber-400 hover:border-amber-400/30 transition-colors"
          >
            <Play size={14} /> Démo
          </a>
        )}
      </div>

      {project.liveCredentials && (
        <p className="text-xs text-slate-600">
          Identifiants de démo : <span className="f-mono">{project.liveCredentials.email}</span> ·{" "}
          <span className="f-mono">{project.liveCredentials.password}</span>
        </p>
      )}
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600&family=DM+Mono:wght@400;500&display=swap');
        .f-syne { font-family:'Syne',sans-serif; }
        .f-mono  { font-family:'DM Mono',monospace; }
        body { background:#06080f; font-family:'DM Sans',sans-serif; }
      `}</style>

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

          {/* ── FEATURED ────────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {projects.filter((p) => p.featured).map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>

          {/* ── OTHER PROJECTS ──────────────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.filter((p) => !p.featured).map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>

          {/* ── CTA ──────────────────────────────────────── */}
          <div className="mt-16 text-center">
            <p className="text-slate-600 mb-5 text-sm">Voir tous mes dépôts publics</p>
            <a href="https://github.com/ARISTIDE-CMD" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#1e2a38] hover:border-amber-400/30 text-slate-400 hover:text-amber-400 px-6 py-3 rounded-[14px] transition-all duration-300 f-syne font-medium text-sm">
              <Github size={16} /> Profil GitHub
            </a>
          </div>

        </div>
      </main>
    </>
  );
}
