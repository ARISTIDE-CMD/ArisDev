"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "Parcours" },
  { href: "/competences", label: "Compétences" },
  { href: "/myProjets", label: "Projets" },
  { href: "/contact", label: "Contact" },
];

const CV_URL = "/file/CV_Aristide gael_kouandja kenfack.pdf";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b border-[#0d1520] bg-[#06080f]/85 backdrop-blur-md">
      <div className="mx-auto max-w-5xl px-6 h-16 flex items-center justify-between">

        {/* ── Branding ──────────────────────────────── */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="Accueil">
          {/* Monogramme */}
          <div className="w-8 h-8 rounded-lg border border-[#111c2c] bg-[#06090f] flex items-center justify-center flex-shrink-0 group-hover:border-amber-400/30 transition-colors duration-200">
            <span className="f-syne font-extrabold text-xs text-amber-400 leading-none">AK</span>
          </div>
          {/* Nom */}
          <div className="leading-tight">
            <p className="f-syne font-bold text-sm text-slate-200 leading-none group-hover:text-slate-50 transition-colors">
              Aristide Kenfack
            </p>
            <p className="f-mono text-[9px] text-slate-600 tracking-[.12em] uppercase mt-0.5">
              Full Stack · DevOps
            </p>
          </div>
        </Link>

        {/* ── Desktop links ─────────────────────────── */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative f-mono text-[11px] tracking-[.06em] px-3 py-1.5 rounded-lg transition-colors duration-200 ${active
                      ? "text-amber-400"
                      : "text-slate-600 hover:text-slate-300"
                    }`}
                >
                  {/* Dot actif */}
                  {active && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-amber-400" />
                  )}
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* ── CTA + Mobile trigger ──────────────────── */}
        <div className="flex items-center gap-3">
          <a
            href={CV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 f-mono text-[11px] tracking-[.06em] px-4 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 active:scale-[.97] text-slate-900 font-medium transition-all duration-200"
          >
            <Download size={13} strokeWidth={2.5} />
            CV
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((o) => !o)}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
            className="md:hidden w-9 h-9 rounded-lg border border-[#0f1825] flex items-center justify-center text-slate-600 hover:text-amber-400 hover:border-amber-400/25 transition-colors duration-200"
          >
            {isOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ───────────────────────────────── */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-t border-[#0d1520]"
          >
            <div className="px-6 py-4">
              {/* Liens */}
              {links.map((link, i) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between py-3.5 border-b border-[#0c1520] last:border-0 f-mono text-xs tracking-[.06em] transition-colors duration-200 ${active ? "text-amber-400" : "text-slate-600 hover:text-slate-200"
                      }`}
                  >
                    <span>{link.label}</span>
                    {active && (
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    )}
                  </Link>
                );
              })}

              {/* CV mobile */}
              <a
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 w-full inline-flex items-center justify-center gap-2 f-mono text-xs tracking-[.06em] rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-900 px-4 py-3 font-medium transition-colors duration-200"
              >
                <Download size={14} strokeWidth={2.5} />
                Télécharger mon CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}