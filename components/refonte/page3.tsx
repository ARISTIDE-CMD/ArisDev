"use client";

import { Code2, Wrench, Layers, GitBranch } from "lucide-react";

const categories = [
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
    ],
  },
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
        @keyframes bar-grow {
          from { width:0; }
        }
        .bar-animate { animation: bar-grow .9s cubic-bezier(.22,1,.36,1) both; }
      `}</style>

      <main className="min-h-screen bg-[#06080f] text-slate-300 py-20 px-6">
        <div className="max-w-5xl mx-auto">

          {/* ── HEADER ──────────────────────────────────── */}
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

          {/* ── SKILL CATEGORIES ────────────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
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
          </div>

          {/* ── SOFT SKILLS / METHODOLOGIES ─────────────── */}
          <div className="bg-[#0c1018] border border-[#151c28] rounded-2xl p-7">
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

          {/* ── LEGEND ───────────────────────────────────── */}
          <div className="mt-8 flex flex-wrap gap-6 text-xs text-slate-600">
            {Object.entries(tagColor).map(([tag, cls]) => (
              <span key={tag} className={`f-mono px-3 py-1 rounded-full border ${cls}`}>{tag}</span>
            ))}
          </div>

        </div>
      </main>
    </>
  );
}
