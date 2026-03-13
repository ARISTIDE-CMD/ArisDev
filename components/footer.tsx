import Link from "next/link";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Accueil" },
  // { href: "/about", label: "Parcours" },
  // { href: "/services", label: "Services" },
  { href: "/competences", label: "Compétences" },
  { href: "/myProjets", label: "Projets" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#151c28] bg-[#06080f]/85 backdrop-blur-md text-slate-400">
      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-10 md:grid-cols-3">
        <section>
          <h2 className="text-slate-50 font-semibold text-lg">Aristide Kenfack</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-500">
            Développeur Full Stack orienté performance, DevOps et expérience produit — basé à Douala.
          </p>

          <div className="mt-5 flex items-center gap-3">
            <a
              href="https://github.com/ARISTIDE-CMD"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-xl border border-[#151c28] bg-[#0c1018] flex items-center justify-center hover:border-amber-400/30 hover:text-amber-400 transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/aristide-gael-kouandja-kenfack-571693287/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-xl border border-[#151c28] bg-[#0c1018] flex items-center justify-center hover:border-amber-400/30 hover:text-amber-400 transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:aristidegaelkouandjakenfack@gmail.com"
              aria-label="Email"
              className="w-10 h-10 rounded-xl border border-[#151c28] bg-[#0c1018] flex items-center justify-center hover:border-amber-400/30 hover:text-amber-400 transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </section>

        <nav aria-label="Navigation" className="md:justify-self-center">
          <h3 className="text-slate-50 font-semibold text-sm uppercase tracking-wider mb-4">Navigation</h3>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-amber-400 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <section className="md:justify-self-end">
          <h3 className="text-slate-50 font-semibold text-sm uppercase tracking-wider mb-4">Contact</h3>
          <div className="space-y-3 text-sm">
            <a
              href="mailto:aristidegaelkouandjakenfack@gmail.com"
              className="inline-flex items-center gap-2 hover:text-amber-400 transition-colors"
            >
              <Mail size={16} className="text-amber-400" />
              aristidegaelkouandjakenfack@gmail.com
            </a>
            <div className="inline-flex items-center gap-2 text-slate-500">
              <MapPin size={16} className="text-amber-400" />
              Douala, Cameroun
            </div>
            {/* <a
              href="/file/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-[#1e2a38] bg-[#0c1018] px-4 py-2 text-slate-300 hover:text-amber-400 hover:border-amber-400/30 transition-colors"
            >
              Télécharger mon CV
            </a> */}
          </div>
        </section>
      </div>

      <div className="border-t border-[#151c28]">
        <div className="mx-auto max-w-6xl px-6 py-5 text-xs text-slate-600 flex flex-col sm:flex-row gap-2 items-center justify-between">
          <span>© {new Date().getFullYear()} Aristide Kenfack</span>
          <span>Portfolio · Full Stack · DevOps</span>
        </div>
      </div>
    </footer>
  );
}
