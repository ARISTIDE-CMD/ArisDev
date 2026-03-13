"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { Code2, Wrench, Layers, GitBranch, Sparkles, ChartGantt, RefreshCcw, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/refonte/Reveal";
import {
  SiAlgolia,
  SiCss3,
  SiDocker,
  SiFirebase,
  SiGithub,
  SiGitlab,
  SiHostinger,
  SiHtml5,
  // SiJava,
  SiJavascript,
  SiJenkins,
  SiJira,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNetlify,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiRender,
  SiScrumalliance,
  SiSonarqube,
  SiSpringboot,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiUml,
  SiVercel,
} from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";

type SkillTag = "Expert" | "Avancé" | "Intermédiaire";

type Skill = { name: string; level: number; tag: SkillTag };

type Category = { title: string; icon: LucideIcon; skills: Skill[] };

type SkillLogo = { id: string; node: ReactNode };

const skillLogos: Record<string, SkillLogo[]> = {
  TypeScript: [{ id: "typescript", node: <SiTypescript size={18} className="text-[#3178C6]" /> }],
  JavaScript: [{ id: "javascript", node: <SiJavascript size={18} className="text-[#F7DF1E]" /> }],
  PHP: [{ id: "php", node: <SiPhp size={18} className="text-[#777BB4]" /> }],
  Java: [{ id: "java", node: <Image src="/tech/java.svg" alt="Java" width={18} height={18} /> }],
  "HTML / CSS": [
    { id: "html5", node: <SiHtml5 size={18} className="text-[#E34F26]" /> },
    { id: "css3", node: <SiCss3 size={18} className="text-[#1572B6]" /> },
  ],
  "React / Next.js": [
    { id: "react", node: <SiReact size={18} className="text-[#61DAFB]" /> },
    { id: "nextdotjs", node: <SiNextdotjs size={18} className="text-slate-50" /> },
  ],
  "React Native": [{ id: "react-native", node: <SiReact size={18} className="text-[#61DAFB]" /> }],
  Laravel: [{ id: "laravel", node: <SiLaravel size={18} className="text-[#FF2D20]" /> }],
  "Spring Boot": [{ id: "springboot", node: <SiSpringboot size={18} className="text-[#6DB33F]" /> }],
  "Tailwind CSS": [{ id: "tailwindcss", node: <SiTailwindcss size={18} className="text-[#06B6D4]" /> }],
  "Node.js": [{ id: "nodejs", node: <SiNodedotjs size={18} className="text-[#5FA04E]" /> }],
  Docker: [{ id: "docker", node: <SiDocker size={18} className="text-[#2496ED]" /> }],
  "CI/CD (GitLab · Jenkins)": [
    { id: "gitlab", node: <SiGitlab size={18} className="text-[#FC6D26]" /> },
    { id: "jenkins", node: <SiJenkins size={18} className="text-[#D24939]" /> },
  ],
  "GitHub / GitLab / Azure DevOps": [
    { id: "github", node: <SiGithub size={18} className="text-slate-50" /> },
    { id: "gitlab", node: <SiGitlab size={18} className="text-[#FC6D26]" /> },
    { id: "azuredevops", node: <VscAzureDevops size={18} className="text-[#0078D7]" /> },
  ],
  SonarQube: [{ id: "sonarqube", node: <SiSonarqube size={18} className="text-[#4E9BCD]" /> }],
  Postman: [{ id: "postman", node: <SiPostman size={18} className="text-[#FF6C37]" /> }],
  Vercel: [{ id: "vercel", node: <SiVercel size={18} className="text-slate-50" /> }],
  Netlify: [{ id: "netlify", node: <SiNetlify size={18} className="text-[#00C7B7]" /> }],
  Render: [{ id: "render", node: <SiRender size={18} className="text-[#46E3B7]" /> }],
  Hostinger: [{ id: "hostinger", node: <SiHostinger size={18} className="text-[#673DE6]" /> }],
  "MySQL / PostgreSQL": [
    { id: "mysql", node: <SiMysql size={18} className="text-[#4479A1]" /> },
    { id: "postgresql", node: <SiPostgresql size={18} className="text-[#4169E1]" /> },
  ],
  MongoDB: [{ id: "mongodb", node: <SiMongodb size={18} className="text-[#47A248]" /> }],
  "Supabase / Firebase": [
    { id: "supabase", node: <SiSupabase size={18} className="text-[#3ECF8E]" /> },
    { id: "firebase", node: <SiFirebase size={18} className="text-[#FFCA28]" /> },
  ],
  "Typesense / Algolia": [
    { id: "typesense", node: <Image src="/tech/typesense.svg" alt="Typesense" width={18} height={18} /> },
    { id: "algolia", node: <SiAlgolia size={18} className="text-[#003DFF]" /> },
  ],
  "Neon (Postgres)": [
    { id: "neon", node: <Image src="/tech/neon.svg" alt="Neon" width={18} height={18} /> },
    { id: "postgresql", node: <SiPostgresql size={18} className="text-[#4169E1]" /> },
  ],
  UML: [{ id: "uml", node: <SiUml size={18} className="text-[#60a5fa]" /> }],
  Merise: [{ id: "merise", node: <Workflow size={18} className="text-[#f59e0b]" /> }],
  "Agile / Scrum": [
    { id: "agile", node: <RefreshCcw size={18} className="text-[#38bdf8]" /> },
    { id: "scrum", node: <SiScrumalliance size={18} className="text-[#a78bfa]" /> },
  ],
  "Gantt (Projet)": [{ id: "gantt", node: <ChartGantt size={18} className="text-[#86efac]" /> }],
  Jira: [{ id: "jira", node: <SiJira size={18} className="text-[#0052CC]" /> }],
};

const skillDescriptions: Record<string, string> = {
  TypeScript: "Typage strict, architecture modulaire et code robuste.",
  JavaScript: "ESNext, logique client, DOM et intégrations UI.",
  PHP: "Backends Laravel, APIs REST, sécurité et bonnes pratiques.",
  Java: "POO, patterns et back-end (Spring).",
  "HTML / CSS": "Intégration responsive, accessibilité et UI propre.",

  "React / Next.js": "SSR/SSG, App Router, performance et SEO.",
  "React Native": "Apps mobiles, navigation et UI fluide.",
  Laravel: "API REST, auth, Eloquent et jobs.",
  "Spring Boot": "Services REST, Spring Security et JPA.",
  "Tailwind CSS": "Design system, composants et responsive.",
  "Node.js": "APIs, scripts et automatisation.",

  Docker: "Dockerfile, Compose et images multi-stage.",
  "CI/CD (GitLab · Jenkins)": "Pipelines CI/CD via `.gitlab-ci.yml` / Jenkinsfile.",
  "GitHub / GitLab / Azure DevOps": "Git flow, PR, revues et gestion d’issues.",
  SonarQube: "Qualité code: bugs, vulnérabilités et dette technique.",
  Postman: "Tests API, collections et environnements.",
  Vercel: "Déploiement en production + previews.",
  Netlify: "Déploiement front, builds et redirects.",
  Render: "Déploiements de services web et jobs.",
  Hostinger: "DNS, SSL et mise en ligne.",

  "MySQL / PostgreSQL": "Modélisation, index, requêtes et migrations.",
  MongoDB: "Documents, agrégations et indexes.",
  "Supabase / Firebase": "Auth, stockage et temps réel.",
  "Typesense / Algolia": "Filtres intelligents sur les index et recherche full-text.",
  "Neon (Postgres)": "Postgres serverless (environnements & branches).",

  UML: "Diagrammes (classes, séquence) pour la conception.",
  Merise: "MCD/MLD/MPD pour bases de données.",
  "Agile / Scrum": "Sprints, rituels et amélioration continue.",
  "Gantt (Projet)": "Planning, jalons et dépendances.",
  Jira: "Backlog, tickets et workflows.",
};

function SkillIcons({ name }: { name: string }) {
  const icons = skillLogos[name] ?? [{ id: "fallback", node: <Code2 size={18} className="text-slate-400" /> }];

  return (
    <div className="flex items-center gap-2">
      {icons.map((icon) => (
        <div key={icon.id} className="w-9 h-9 rounded-xl bg-[#0c1018] border border-[#151c28] flex items-center justify-center">
          {icon.node}
        </div>
      ))}
    </div>
  );
}

const categories: Category[] = [
  {
    title: "Langages",
    icon: Code2,
    skills: [
      { name: "TypeScript",  level: 90, tag: "Expert"        },
      { name: "JavaScript",  level: 90, tag: "Expert"        },
      { name: "PHP",         level: 80, tag: "Avancé"        },
      { name: "Java",        level: 72, tag: "Avancé"        },
      { name: "HTML / CSS",  level: 95, tag: "Expert"        },
    ],
  },
  {
    title: "Frameworks & Librairies",
    icon: Layers,
    skills: [
      { name: "React / Next.js",  level: 92, tag: "Expert"  },
      { name: "React Native",     level: 82, tag: "Avancé"  },
      { name: "Laravel",          level: 80, tag: "Avancé"  },
      { name: "Spring Boot",      level: 70, tag: "Avancé"  },
      { name: "Tailwind CSS",     level: 90, tag: "Expert"  },
      { name: "Node.js",          level: 72, tag: "Avancé"  },
    ],
  },
  {
    title: "DevOps & Outils",
    icon: GitBranch,
    skills: [
      { name: "Docker",                       level: 78, tag: "Avancé"       },
      { name: "CI/CD (GitLab · Jenkins)",     level: 75, tag: "Avancé"       },
      { name: "GitHub / GitLab / Azure DevOps", level: 85, tag: "Avancé"    },
      { name: "SonarQube",                    level: 65, tag: "Intermédiaire" },
      { name: "Postman",                      level: 85, tag: "Avancé"       },
      { name: "Vercel",                       level: 78, tag: "Avancé"       },
      { name: "Netlify",                      level: 75, tag: "Avancé"       },
      { name: "Render",                       level: 70, tag: "Avancé"       },
      { name: "Hostinger",                    level: 62, tag: "Intermédiaire" },
    ],
  },
  {
    title: "Bases de données & Cloud",
    icon: Wrench,
    skills: [
      { name: "MySQL / PostgreSQL",   level: 80, tag: "Avancé"  },
      { name: "MongoDB",              level: 68, tag: "Avancé"  },
      { name: "Supabase / Firebase",  level: 72, tag: "Avancé"  },
      { name: "Typesense / Algolia",  level: 75, tag: "Avancé"  },
      { name: "Neon (Postgres)",      level: 65, tag: "Intermédiaire" },
    ],
  },
];

const analysisSkills: Skill[] = [
  { name: "UML", level: 78, tag: "Avancé" },
  { name: "Merise", level: 75, tag: "Avancé" },
  { name: "Agile / Scrum", level: 80, tag: "Avancé" },
  { name: "Gantt (Projet)", level: 72, tag: "Avancé" },
  { name: "Jira", level: 78, tag: "Avancé" },
];

type OverviewGroup = { title: string; skills: Skill[] };

const stackOverviewGroups: OverviewGroup[] = [
  ...categories.map(({ title, skills }) => ({ title, skills })),
  { title: "Analyse & gestion de projet", skills: analysisSkills },
];

const softSkills = [
  "Architecture logicielle (Merise · UML)",
  "API REST & GraphQL",
  "Sécurité & Auth (JWT · Spring Security)",
  "Modélisation & conception",
  "Leadership & travail en équipe",
  "Veille technologique",
];

const tagColor: Record<string, string> = {
  Expert:        "text-amber-400 border-amber-400/30 bg-amber-400/10",
  Avancé:        "text-sky-400  border-sky-400/30  bg-sky-400/10",
  Intermédiaire: "text-slate-400 border-slate-600   bg-slate-800/60",
};

const barColor: Record<string, string> = {
  Expert:        "bg-amber-400",
  Avancé:        "bg-sky-400",
  Intermédiaire: "bg-slate-500",
};

export default function CompetencesPage() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600&family=DM+Mono:wght@400;500&display=swap');
        .f-syne { font-family:'Syne',sans-serif; }
        .f-mono  { font-family:'DM Mono',monospace; }
        body { background:#06080f; font-family:'DM Sans',sans-serif; }

        @keyframes bar-grow {
          from { width:0; }
        }
        .bar-animate { animation: bar-grow .9s cubic-bezier(.22,1,.36,1) both; }
      `}</style>

      <main className="min-h-screen bg-transparent text-slate-300 py-20 px-6">
        <div className="max-w-5xl mx-auto">

          {/* ── HEADER ──────────────────────────────────── */}
          <Reveal>
            <header className="mb-16">
              <p className="f-mono text-amber-400 text-xs tracking-[.18em] uppercase mb-4 flex items-center gap-3">
                <span className="w-7 h-px bg-amber-400 inline-block" />
                Compétences
              </p>
              <h1 className="f-syne font-extrabold text-4xl md:text-5xl text-slate-50 mb-3">
                Stack technique &{" "}
                <span className="text-amber-400">savoir-faire</span>
              </h1>
              <p className="text-slate-500 max-w-xl">
                Un profil Full Stack orienté architecture, performance et automatisation — du composant UI au pipeline de déploiement.
              </p>
            </header>
          </Reveal>

          {/* ── STACK OVERVIEW ────────────────────────── */}
          <Reveal y={22}>
            <section className="bg-[#0c1018] border border-[#151c28] rounded-2xl p-7 mb-10">
            <div className="flex items-start gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0">
                <Sparkles size={17} className="text-amber-400" />
              </div>
              <div>
                <h2 className="f-syne font-bold text-slate-100 text-base leading-tight mb-1">Stack (aperçu)</h2>
                <p className="text-slate-600 text-sm">
                  Langages, frameworks, outils & environnements — icônes en SVG.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              {stackOverviewGroups.map((group) => (
                <div key={group.title}>
                  <p className="f-mono text-[10px] tracking-[.18em] uppercase text-slate-500 mb-3">
                    {group.title}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {group.skills.map((sk, idx) => (
                      <Reveal
                        key={sk.name}
                        delay={idx * 0.03}
                        y={14}
                        className="bg-[#0a1020] border border-[#1e2a38] rounded-[14px] p-4 hover:border-amber-400/30 transition-colors duration-300 card-hover"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <SkillIcons name={sk.name} />
                            <div className="mt-3">
                              <p className="text-slate-200 text-sm font-semibold leading-snug">{sk.name}</p>
                              {skillDescriptions[sk.name] ? (
                                <p className="text-slate-500 text-xs leading-relaxed mt-1">
                                  {skillDescriptions[sk.name]}
                                </p>
                              ) : null}
                              <p className="f-mono text-[10px] text-slate-600 mt-2">{sk.level}%</p>
                            </div>
                          </div>
                          <span className={`f-mono text-[10px] px-2 py-0.5 rounded-full border ${tagColor[sk.tag]}`}>
                            {sk.tag}
                          </span>
                        </div>

                        <div className="mt-3 h-1.5 bg-[#151c28] rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full bar-animate ${barColor[sk.tag]}`}
                            style={{ width: `${sk.level}%` }}
                          />
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            </section>
          </Reveal>

          {/* ── SKILL CATEGORIES ────────────────────────── */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div key={cat.title} className="bg-[#0c1018] border border-[#151c28] rounded-2xl p-7 hover:border-amber-400/20 transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-9 h-9 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center">
                      <Icon size={17} className="text-amber-400" />
                    </div>
                    <h2 className="f-syne font-bold text-slate-100 text-base">{cat.title}</h2>
                  </div>

                  <ul className="space-y-4">
                    {cat.skills.map((sk) => (
                      <li key={sk.name}>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-slate-300 text-sm font-medium">{sk.name}</span>
                          <span className={`f-mono text-[10px] px-2 py-0.5 rounded-full border ${tagColor[sk.tag]}`}>
                            {sk.tag}
                          </span>
                        </div>
                        <div className="h-1.5 bg-[#151c28] rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full bar-animate ${barColor[sk.tag]}`}
                            style={{ width: `${sk.level}%` }}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div> */}

          {/* ── SOFT SKILLS / METHODOLOGIES ─────────────── */}
          <Reveal y={18} delay={0.05}>
            <div className="bg-[#0c1018] border border-[#151c28] rounded-2xl p-7 card-hover">
              <h2 className="f-syne font-bold text-slate-100 text-base mb-5">
                Méthodologies & compétences transverses
              </h2>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((s) => (
                  <span key={s} className="f-mono text-xs text-slate-400 border border-[#1e2a38] bg-[#0a1020] px-4 py-2 rounded-full hover:border-amber-400/30 hover:text-amber-300 transition-colors duration-300 cursor-default">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* ── LEGEND ───────────────────────────────────── */}
          <Reveal y={10} delay={0.08}>
            <div className="mt-8 flex flex-wrap gap-6 text-xs text-slate-600">
              {Object.entries(tagColor).map(([tag, cls]) => (
                <span key={tag} className={`f-mono px-3 py-1 rounded-full border ${cls}`}>{tag}</span>
              ))}
            </div>
          </Reveal>

        </div>
      </main>
    </>
  );
}
