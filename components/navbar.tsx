"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, Menu, X } from "lucide-react";

type NavLink = {
  href: string;
  label: string;
};

const links: NavLink[] = [
  { href: "/", label: "Accueil" },
  // { href: "/services", label: "Services" },
  { href: "/competences", label: "Compétences" },
  { href: "/myProjets", label: "Projets" },
  { href: "/contact", label: "Contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-[#151c28] bg-[#06080f]/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">

        {/* Branding */}
        <Link href="/" className="flex items-center gap-3" aria-label="Accueil">
          <div className="w-10 h-10 rounded-xl border border-[#151c28] bg-[#0c1018] flex items-center justify-center text-amber-400 font-semibold">
            AK
          </div>
          <div className="leading-tight">
            <div className="text-slate-50 font-semibold f-syne">Aristide Kenfack</div>
            <div className="text-xs text-slate-500">Full Stack · DevOps</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-7 text-sm font-medium">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`transition-colors ${
                      isActive ? "text-amber-400" : "text-slate-400 hover:text-slate-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <a
            href="/file/CV_Aristide gael_kouandja kenfack.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-900 px-4 py-2 text-sm font-semibold transition-colors"
          >
            <Download size={16} />
            CV
          </a>
        </div>

        {/* Mobile trigger */}
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="md:hidden p-2 rounded-lg border border-[#151c28] bg-[#0c1018] text-slate-200 hover:text-amber-400 transition-colors"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden border-t border-[#151c28] bg-[#06080f] ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-3">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className={`py-2 text-sm font-medium ${
                  isActive ? "text-amber-400" : "text-slate-300"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <a
            href="/file/CV_Aristide gael_kouandja kenfack.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-900 px-4 py-2 text-sm font-semibold transition-colors"
          >
            <Download size={16} />
            Télécharger mon CV
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
