"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, MapPin } from "lucide-react";
import Abonner from "./Abonner";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const [showWhatsapp, setShowWhatsapp] = useState(true);

  return (
    <footer className="relative bg-slate-950 text-gray-300 overflow-hidden">
      
      {/* Dégradé subtil en haut */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-32 
                   bg-gradient-to-b from-transparent via-slate-950/70 to-slate-950 z-0"
      />

      {/* Décor visuel */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute inset-y-0 left-0 w-2/5 blur-xl pointer-events-none opacity-100 spin-slow"
        style={{
          backgroundImage: "url('/logofinal.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        aria-hidden="true"
        className="hidden md:block absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-slate-950/95 to-transparent"
      />

      {/* Contenu */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-10 grid gap-10 md:grid-cols-3">
        
        {/* Identité */}
        <section>
          <h2 className="text-2xl font-bold text-white">
            Aris<span className="text-yellow-400">Dev</span>
          </h2>
          <p className="mt-1 text-yellow-400 text-sm font-medium">
            Développeur & architecte du numérique
          </p>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Du code à l’architecture, nous transformons des idées en solutions web
            claires, fiables et performantes.
          </p>
        </section>

        {/* Navigation */}
        <nav aria-label="Navigation du site">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
            Navigation
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              ["Accueil", "/"],
              ["À propos", "/about"],
              ["Services", "/services"],
              ["Présentation", "/presentation"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="hover:text-yellow-400 transition">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact & réseaux */}
        <section>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
            Contact & réseaux
          </h3>

          {/* Email */}
          <a
            href="mailto:aristidegaelkouandjakenfack@gmail.com"
            className="flex items-center gap-2 text-sm hover:text-yellow-400 transition"
          >
            <Mail size={16} className="text-yellow-400" />
            aristidegael…@gmail.com
          </a>

          {/* Réseaux sociaux */}
          <div className="mt-5 flex gap-3">
            {[
              { href: "https://www.facebook.com/share/1AitQnWX1n/", icon: FaFacebookF, color: "#1877F2" },
              { href: "https://instagram.com", icon: FaInstagram, color: "#E4405F" },
              { href: "https://www.linkedin.com/in/aristide-gael-kouandja-kenfack-571693287/", icon: FaLinkedinIn, color: "#0A66C2" },
              { href: "https://www.youtube.com/@ArisDev-n2m", icon: FaYoutube, color: "#FF0000" },
              { href: "https://wa.me/237680585671", icon: FaWhatsapp, color: "#25D366" },
            ].map(({ href, icon: Icon, color }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={href}
                className={`p-2 rounded transition-transform duration-200 hover:scale-125 hover:shadow-lg`}
                style={{ color }}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Abonnement */}
          <div className="mt-6">
            <Abonner />
          </div>
        </section>
      </div>

      {/* Bas du footer */}
      <div className="border-t border-slate-800 py-4 text-center text-xs text-gray-500 relative">
        © {new Date().getFullYear()} ArisDev — Tous droits réservés
        <div
          className="mt-4 inline-flex items-center gap-2 rounded-full
                     px-3 py-1.5 text-xs text-gray-300 backdrop-blur-sm mx-auto"
        >
          <MapPin size={13} className="text-yellow-400" />
          <span>Douala, Cameroun</span>
        </div>
      </div>
    </footer>
  );
}
