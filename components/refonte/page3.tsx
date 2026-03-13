"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import {
  Code2, Wrench, Layers, GitBranch,
  Workflow, RefreshCcw, ChartGantt,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/refonte/Reveal";
import {
  SiAlgolia, SiCss3, SiDocker, SiFirebase,
  SiGithub, SiGitlab, SiHostinger, SiHtml5,
  SiJavascript, SiJenkins, SiJira, SiLaravel,
  SiMongodb, SiMysql, SiNextdotjs, SiNetlify,
  SiNodedotjs, SiPhp, SiPostgresql, SiPostman,
  SiReact, SiRender, SiScrumalliance, SiSonarqube,
  SiSpringboot, SiSupabase, SiTailwindcss,
  SiTypescript, SiUml, SiVercel,
} from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";

/* ─── Types ─────────────────────────────────────────── */
type SkillTag = "Expert" | "Avancé" | "Intermédiaire";
type Skill = { name: string; level: number; tag: SkillTag };
type Category = { title: string; icon: LucideIcon; skills: Skill[] };
type SkillLogo = { id: string; node: ReactNode };

/* ─── Icônes avec vraies brand colors ───────────────── */
const skillLogos: Record<string, SkillLogo[]> = {
  TypeScript: [{ id: "ts", node: <SiTypescript size={17} style={{ color: "#3178C6" }} /> }],
  JavaScript: [{ id: "js", node: <SiJavascript size={17} style={{ color: "#F7DF1E" }} /> }],
  PHP: [{ id: "php", node: <SiPhp size={17} style={{ color: "#777BB4" }} /> }],
  Java: [{ id: "java", node: <Image src="/tech/java.svg" alt="Java" width={17} height={17} /> }],
  "HTML / CSS": [
    { id: "html", node: <SiHtml5 size={17} style={{ color: "#E34F26" }} /> },
    { id: "css", node: <SiCss3 size={17} style={{ color: "#1572B6" }} /> },
  ],
  "React / Next.js": [
    { id: "react", node: <SiReact size={17} style={{ color: "#61DAFB" }} /> },
    { id: "next", node: <SiNextdotjs size={17} style={{ color: "#ffffff" }} /> },
  ],
  "React Native": [{ id: "rn", node: <SiReact size={17} style={{ color: "#61DAFB" }} /> }],
  Laravel: [{ id: "laravel", node: <SiLaravel size={17} style={{ color: "#FF2D20" }} /> }],
  "Spring Boot": [{ id: "spring", node: <SiSpringboot size={17} style={{ color: "#6DB33F" }} /> }],
  "Tailwind CSS": [{ id: "tw", node: <SiTailwindcss size={17} style={{ color: "#06B6D4" }} /> }],
  "Node.js": [{ id: "node", node: <SiNodedotjs size={17} style={{ color: "#5FA04E" }} /> }],
  Docker: [{ id: "docker", node: <SiDocker size={17} style={{ color: "#2496ED" }} /> }],
  "CI/CD (GitLab · Jenkins)": [
    { id: "gitlab", node: <SiGitlab size={17} style={{ color: "#FC6D26" }} /> },
    { id: "jenkins", node: <SiJenkins size={17} style={{ color: "#D24939" }} /> },
  ],
  "GitHub / GitLab / Azure DevOps": [
    { id: "github", node: <SiGithub size={17} style={{ color: "#ffffff" }} /> },
    { id: "gitlab2", node: <SiGitlab size={17} style={{ color: "#FC6D26" }} /> },
    { id: "azure", node: <VscAzureDevops size={17} style={{ color: "#0078D7" }} /> },
  ],
  SonarQube: [{ id: "sonar", node: <SiSonarqube size={17} style={{ color: "#4E9BCD" }} /> }],
  Postman: [{ id: "postman", node: <SiPostman size={17} style={{ color: "#FF6C37" }} /> }],
  Vercel: [{ id: "vercel", node: <SiVercel size={17} style={{ color: "#ffffff" }} /> }],
  Netlify: [{ id: "netlify", node: <SiNetlify size={17} style={{ color: "#00C7B7" }} /> }],
  Render: [{ id: "render", node: <SiRender size={17} style={{ color: "#46E3B7" }} /> }],
  Hostinger: [{ id: "host", node: <SiHostinger size={17} style={{ color: "#673DE6" }} /> }],
  "MySQL / PostgreSQL": [
    { id: "mysql", node: <SiMysql size={17} style={{ color: "#4479A1" }} /> },
    { id: "pg", node: <SiPostgresql size={17} style={{ color: "#4169E1" }} /> },
  ],
  MongoDB: [{ id: "mongo", node: <SiMongodb size={17} style={{ color: "#47A248" }} /> }],
  "Supabase / Firebase": [
    { id: "supa", node: <SiSupabase size={17} style={{ color: "#3ECF8E" }} /> },
    { id: "fire", node: <SiFirebase size={17} style={{ color: "#FFCA28" }} /> },
  ],
  "Typesense / Algolia": [
    { id: "typesense", node: <Image src="/tech/typesense.svg" alt="Typesense" width={17} height={17} /> },
    { id: "algolia", node: <SiAlgolia size={17} style={{ color: "#003DFF" }} /> },
  ],
  "Neon (Postgres)": [
    { id: "neon", node: <Image src="/tech/neon.svg" alt="Neon" width={17} height={17} /> },
    { id: "pg2", node: <SiPostgresql size={17} style={{ color: "#4169E1" }} /> },
  ],
  UML: [{ id: "uml", node: <SiUml size={17} style={{ color: "#60a5fa" }} /> }],
  Merise: [{ id: "mer", node: <Workflow size={17} style={{ color: "#f59e0b" }} /> }],
  "Agile / Scrum": [
    { id: "ag", node: <RefreshCcw size={17} style={{ color: "#38bdf8" }} /> },
    { id: "sc", node: <SiScrumalliance size={17} style={{ color: "#a78bfa" }} /> },
  ],
  "Gantt (Projet)": [{ id: "gantt", node: <ChartGantt size={17} style={{ color: "#86efac" }} /> }],
  Jira: [{ id: "jira", node: <SiJira size={17} style={{ color: "#0052CC" }} /> }],
};

/* ─── Descriptions courtes ──────────────────────────── */
const desc: Record<string, string> = {
  TypeScript: "Typage strict, architecture modulaire.",
  JavaScript: "ESNext, logique client et intégrations UI.",
  PHP: "Backends Laravel, APIs REST sécurisées.",
  Java: "POO, patterns et back-end Spring.",
  "HTML / CSS": "Intégration responsive et accessibilité.",
  "React / Next.js": "SSR/SSG, App Router, performance et SEO.",
  "React Native": "Apps mobiles, navigation et UI fluide.",
  Laravel: "API REST, auth, Eloquent et queues.",
  "Spring Boot": "Services REST, Spring Security et JPA.",
  "Tailwind CSS": "Design system, composants et responsive.",
  "Node.js": "APIs, scripts et automatisation.",
  Docker: "Dockerfile, Compose et images multi-stage.",
  "CI/CD (GitLab · Jenkins)": "Pipelines via .gitlab-ci.yml / Jenkinsfile.",
  "GitHub / GitLab / Azure DevOps": "Git flow, PR et gestion d'issues.",
  SonarQube: "Qualité code, bugs et dette technique.",
  Postman: "Tests API, collections et environnements.",
  Vercel: "Déploiement en production + previews.",
  Netlify: "Déploiement front, builds et redirects.",
  Render: "Déploiements de services web.",
  Hostinger: "DNS, SSL et mise en ligne.",
  "MySQL / PostgreSQL": "Modélisation, index et migrations.",
  MongoDB: "Documents, agrégations et indexes.",
  "Supabase / Firebase": "Auth, stockage et temps réel.",
  "Typesense / Algolia": "Recherche full-text et filtres intelligents.",
  "Neon (Postgres)": "Postgres serverless et branches.",
  UML: "Diagrammes classes et séquence.",
  Merise: "MCD/MLD/MPD pour bases de données.",
  "Agile / Scrum": "Sprints, rituels et amélioration continue.",
  "Gantt (Projet)": "Planning, jalons et dépendances.",
  Jira: "Backlog, tickets et workflows.",
};

/* ─── Couleurs tag / barre ──────────────────────────── */
const tagCls: Record<SkillTag, string> = {
  Expert: "text-amber-400 border-amber-400/30 bg-amber-400/10",
  Avancé: "text-sky-400   border-sky-400/30   bg-sky-400/10",
  Intermédiaire: "text-slate-500 border-slate-700    bg-slate-800/60",
};
const barCls: Record<SkillTag, string> = {
  Expert: "bg-amber-400",
  Avancé: "bg-sky-400",
  Intermédiaire: "bg-slate-500",
};

/* ─── Composant icônes ───────────────────────────────── */
function SkillIcons({ name }: { name: string }) {
  const logos = skillLogos[name] ?? [{ id: "fb", node: <Code2 size={16} className="text-slate-500" /> }];
  return (
    <div className="flex items-center gap-1.5">
      {logos.map((l) => (
        <div
          key={l.id}
          className="w-8 h-8 rounded-lg bg-[#060c14] border border-[#101a28] flex items-center justify-center flex-shrink-0"
          style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,.03)" }}
        >
          {l.node}
        </div>
      ))}
    </div>
  );
}

/* ─── Ligne skill ────────────────────────────────────── */
function SkillRow({ skill, index }: { skill: Skill; index: number }) {
  return (
    <Reveal key={skill.name} delay={index * 0.04} y={10}>
      <div className="group flex items-center gap-4 py-4 border-b border-[#0c1520] last:border-0 hover:bg-amber-400/[.02] transition-colors duration-200 rounded-sm px-1 -mx-1">

        {/* Icônes */}
        <SkillIcons name={skill.name} />

        {/* Nom + description + barre */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-3 mb-1.5">
            <p className="text-slate-200 text-sm font-medium leading-none">{skill.name}</p>
            <span
              className={`f-mono text-[9.5px] px-2 py-0.5 rounded-full border flex-shrink-0 ${tagCls[skill.tag]}`}
            >
              {skill.tag}
            </span>
          </div>
          {desc[skill.name] && (
            <p className="text-slate-600 text-xs leading-none mb-2">{desc[skill.name]}</p>
          )}
          {/* Barre */}
          <div className="h-[3px] bg-[#0d1520] rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full ${barCls[skill.tag]}`}
              style={{
                width: `${skill.level}%`,
                animation: "bar-grow .85s cubic-bezier(.22,1,.36,1) both",
              }}
            />
          </div>
        </div>

        {/* % en hover */}
        <span className="f-mono text-[10px] text-slate-700 group-hover:text-slate-500 transition-colors duration-200 w-8 text-right flex-shrink-0">
          {skill.level}%
        </span>
      </div>
    </Reveal>
  );
}

/* ─── Section ────────────────────────────────────────── */
function Section({ category }: { category: Category }) {
  const Icon = category.icon;
  return (
    <Reveal y={18}>
      <div className="mb-12">
        {/* Label section */}
        <div className="flex items-center gap-3 mb-1">
          <div className="w-7 h-7 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center">
            <Icon size={14} className="text-amber-400" />
          </div>
          <h2 className="f-syne font-bold text-slate-400 text-xs tracking-[.14em] uppercase">
            {category.title}
          </h2>
          {/* Ligne */}
          <div className="flex-1 h-px bg-[#0d1520]" />
        </div>

        {/* Lignes */}
        <div className="mt-1">
          {category.skills.map((sk, i) => (
            <SkillRow key={sk.name} skill={sk} index={i} />
          ))}
        </div>
      </div>
    </Reveal>
  );
}

/* ─── Data ───────────────────────────────────────────── */
const categories: Category[] = [
  {
    title: "Langages",
    icon: Code2,
    skills: [
      { name: "TypeScript", level: 90, tag: "Expert" },
      { name: "JavaScript", level: 90, tag: "Expert" },
      { name: "HTML / CSS", level: 95, tag: "Expert" },
      { name: "PHP", level: 80, tag: "Avancé" },
      { name: "Java", level: 72, tag: "Avancé" },
    ],
  },
  {
    title: "Frameworks & Librairies",
    icon: Layers,
    skills: [
      { name: "React / Next.js", level: 92, tag: "Expert" },
      { name: "Tailwind CSS", level: 90, tag: "Expert" },
      { name: "React Native", level: 82, tag: "Avancé" },
      { name: "Laravel", level: 80, tag: "Avancé" },
      { name: "Node.js", level: 72, tag: "Avancé" },
      { name: "Spring Boot", level: 70, tag: "Avancé" },
    ],
  },
  {
    title: "DevOps & Déploiement",
    icon: GitBranch,
    skills: [
      { name: "GitHub / GitLab / Azure DevOps", level: 85, tag: "Avancé" },
      { name: "Docker", level: 78, tag: "Avancé" },
      { name: "CI/CD (GitLab · Jenkins)", level: 75, tag: "Avancé" },
      { name: "Vercel", level: 78, tag: "Avancé" },
      { name: "Netlify", level: 75, tag: "Avancé" },
      { name: "Postman", level: 85, tag: "Avancé" },
      { name: "SonarQube", level: 65, tag: "Intermédiaire" },
      { name: "Render", level: 70, tag: "Avancé" },
      { name: "Hostinger", level: 62, tag: "Intermédiaire" },
    ],
  },
  {
    title: "Bases de données & Moteurs de recherche",
    icon: Wrench,
    skills: [
      { name: "MySQL / PostgreSQL", level: 80, tag: "Avancé" },
      { name: "Typesense / Algolia", level: 75, tag: "Avancé" },
      { name: "Supabase / Firebase", level: 72, tag: "Avancé" },
      { name: "MongoDB", level: 68, tag: "Avancé" },
      { name: "Neon (Postgres)", level: 65, tag: "Intermédiaire" },
    ],
  },
];

const analysisCategory: Category = {
  title: "Analyse & gestion de projet",
  icon: ChartGantt,
  skills: [
    { name: "Agile / Scrum", level: 80, tag: "Avancé" },
    { name: "Jira", level: 78, tag: "Avancé" },
    { name: "UML", level: 78, tag: "Avancé" },
    { name: "Merise", level: 75, tag: "Avancé" },
    { name: "Gantt (Projet)", level: 72, tag: "Avancé" },
  ],
};

/* ─── Page ───────────────────────────────────────────── */
export default function CompetencesPage() {
  return (
    <>
      <style jsx global>{`
        .f-syne { font-family: 'Syne', sans-serif; }
        .f-mono { font-family: 'DM Mono', monospace; }

        @keyframes bar-grow {
          from { width: 0; }
        }
      `}</style>

      <main className="min-h-screen bg-transparent text-slate-300 py-20 px-6">
        <div className="max-w-3xl mx-auto">

          {/* ── Header ──────────────────────────────── */}
          <Reveal>
            <header className="mb-16">
              <p className="f-mono text-amber-400 text-xs tracking-[.18em] uppercase mb-5 flex items-center gap-3">
                <span className="w-7 h-px bg-amber-400 inline-block" />
                Compétences
              </p>
              <h1 className="f-syne font-extrabold text-4xl md:text-5xl text-slate-50 mb-3 leading-tight">
                Stack technique &{" "}
                <span className="text-amber-400">savoir-faire</span>
              </h1>
              <p className="text-slate-600 max-w-lg text-sm leading-relaxed">
                Full Stack · DevOps · Architecture logicielle — du composant UI au pipeline de déploiement.
              </p>
            </header>
          </Reveal>

          {/* ── Catégories ──────────────────────────── */}
          {[...categories, analysisCategory].map((cat) => (
            <Section key={cat.title} category={cat} />
          ))}

          {/* ── Légende ─────────────────────────────── */}
          <Reveal y={8} delay={0.1}>
            <div className="pt-8 border-t border-[#0c1520] flex flex-wrap gap-3">
              {(["Expert", "Avancé", "Intermédiaire"] as SkillTag[]).map((t) => (
                <span key={t} className={`f-mono text-[10px] px-3 py-1 rounded-full border ${tagCls[t]}`}>
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

        </div>
      </main>
    </>
  );
}