"use client"
import Link from "next/link";
import { Github, Linkedin, Mail, MapPin, ArrowUpRight } from "lucide-react";

const quickLinks = [
  { href: "/",           label: "Accueil"      },
  { href: "/about",      label: "Parcours"     },
  { href: "/competences",label: "Compétences"  },
  { href: "/myProjets",  label: "Projets"      },
  { href: "/contact",    label: "Contact"      },
];

const socials = [
  {
    href:  "https://github.com/ARISTIDE-CMD",
    label: "GitHub",
    icon:  Github,
    color: "#e2e8f0",
  },
  {
    href:  "https://www.linkedin.com/in/aristide-gael-kouandja-kenfack-571693287/",
    label: "LinkedIn",
    icon:  Linkedin,
    color: "#0A66C2",
  },
  {
    href:  "mailto:aristidegaelkouandjakenfack@gmail.com",
    label: "Email",
    icon:  Mail,
    color: "#f59e0b",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#0d1520] bg-[#06080f] text-slate-500">

      {/* ── Corps ─────────────────────────────────────────── */}
      <div className="mx-auto max-w-5xl px-6 py-14 grid gap-12 md:grid-cols-[1.6fr_1fr_1fr]">

        {/* Colonne 1 — identité */}
        <section>
          <p className="f-mono text-[10px] tracking-[.18em] uppercase text-amber-400/60 mb-3">
            Aristide Kenfack
          </p>
          <p className="f-syne font-extrabold text-slate-200 text-xl leading-tight mb-4">
            Full Stack &<br />
            <span className="text-amber-400">DevOps</span>
          </p>
          <p className="text-sm leading-relaxed text-slate-600 max-w-xs mb-7">
            Applications robustes, du composant UI au pipeline de déploiement — basé à Douala.
          </p>

          {/* Icônes sociales */}
          <div className="flex items-center gap-2">
            {socials.map(({ href, label, icon: Icon, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-xl border border-[#0f1825] flex items-center justify-center transition-all duration-200 hover:border-amber-400/25 hover:bg-amber-400/5"
                style={{ color: "#475569" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = color)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </section>

        {/* Colonne 2 — navigation */}
        <nav aria-label="Navigation">
          <p className="f-mono text-[10px] tracking-[.18em] uppercase text-slate-600 mb-5 flex items-center gap-3">
            Navigation
            <span className="flex-1 h-px bg-[#0d1520]" />
          </p>
          <ul className="space-y-0">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group flex items-center justify-between py-2.5 border-b border-[#0c1520] last:border-0 text-sm text-slate-600 hover:text-slate-200 transition-colors duration-200"
                >
                  {link.label}
                  <ArrowUpRight
                    size={12}
                    className="opacity-0 group-hover:opacity-100 text-amber-400 transition-opacity duration-200"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Colonne 3 — contact */}
        <section>
          <p className="f-mono text-[10px] tracking-[.18em] uppercase text-slate-600 mb-5 flex items-center gap-3">
            Contact
            <span className="flex-1 h-px bg-[#0d1520]" />
          </p>
          <div className="space-y-0">
            <a
              href="mailto:aristidegaelkouandjakenfack@gmail.com"
              className="group flex items-center gap-3 py-2.5 border-b border-[#0c1520] hover:text-amber-400 transition-colors duration-200"
            >
              <Mail size={13} className="text-amber-400/50 group-hover:text-amber-400 flex-shrink-0 transition-colors" />
              <span className="text-xs text-slate-600 group-hover:text-amber-400 transition-colors break-all">
                aristidegaelkouandjakenfack@gmail.com
              </span>
            </a>
            <div className="flex items-center gap-3 py-2.5">
              <MapPin size={13} className="text-amber-400/50 flex-shrink-0" />
              <span className="text-xs text-slate-700">Douala, Cameroun</span>
            </div>

            {/* Disponibilité */}
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-[#0d1520]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
              </span>
              <span className="f-mono text-[10px] text-emerald-500 tracking-[.1em]">
                Disponible · Ouvert aux opportunités
              </span>
            </div>
          </div>
        </section>

      </div>

      {/* ── Bas de page ───────────────────────────────────── */}
      <div className="border-t border-[#0d1520]">
        <div className="mx-auto max-w-5xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="f-mono text-[10px] text-slate-700">
            © {new Date().getFullYear()} Aristide Kenfack
          </span>
          <span className="f-mono text-[10px] text-slate-700">
            Full Stack · DevOps · Douala, CM
          </span>
        </div>
      </div>

    </footer>
  );
}