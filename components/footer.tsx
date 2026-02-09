"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, MapPin } from "lucide-react";
import Abonner from "./Abonner";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const [showWhatsapp, setShowWhatsapp] = useState(true);

  return (
    <footer className="theme-surface relative theme-text-secondary overflow-hidden transition-colors duration-200">

      {/* Dégradé subtil en haut */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-32 
                   bg-gradient-to-b from-transparent via-slate-900/40 to-transparent z-0"
      />

      {/* Décor visuel */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute inset-y-0 left-0 w-2/5 pointer-events-none opacity-20 spin-slow"
        style={{
          backgroundImage: "url('/logofinal.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "multiply",
        }}
      />
      <div
        aria-hidden="true"
        className="hidden md:block absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-slate-900/50 to-transparent"
      />

      {/* Contenu */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-10 grid gap-10 md:grid-cols-3">

        {/* Identité */}
        <section>
          <h2 className="theme-text-primary text-2xl font-bold transition-colors duration-200">
            Aris<span className="text-yellow-400">Dev</span>
          </h2>
          <p className="mt-1 text-yellow-400 text-sm font-medium">
            Développeur & architecte du numérique
          </p>
          <p className="theme-text-secondary mt-4 text-sm leading-relaxed transition-colors duration-200">
            Du code à l’architecture, nous transformons des idées en solutions web
            claires, fiables et performantes.
          </p>
        </section>

        {/* Navigation */}
        <nav aria-label="Navigation du site">
          <h3 className="theme-text-primary mb-4 text-sm font-semibold uppercase tracking-wide transition-colors duration-200">
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
                <Link href={href} className="hover:text-yellow-400 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact & réseaux */}
        <section>
          <h3 className="theme-text-primary mb-4 text-sm font-semibold uppercase tracking-wide transition-colors duration-200">
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
              { href: "https://www.facebook.com/share/1AitQnWX1n/", icon: FaFacebookF, label: "Facebook", color: "#1877F2" },
              { href: "https://instagram.com", icon: FaInstagram, label: "Instagram", color: "#E4405F" },
              { href: "https://www.linkedin.com/in/aristide-gael-kouandja-kenfack-571693287/", icon: FaLinkedinIn, label: "LinkedIn", color: "#0A66C2" },
              { href: "https://www.youtube.com/@ArisDev-n2m", icon: FaYoutube, label: "YouTube", color: "#FF0000" },
              { href: "https://wa.me/237680585671", icon: FaWhatsapp, label: "WhatsApp", color: "#25D366" },
            ].map(({ href, icon: Icon, label, color }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className={`p-2 rounded-full transition-transform duration-200 hover:scale-110 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`}
                style={{ color, background: 'transparent' }}
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
      <div className="theme-border border-t py-4 text-xs relative">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-center sm:text-left">
            © {new Date().getFullYear()} ArisDev — Tous droits réservés
          </div>
          <div className="mt-0">
            <div
              className="theme-text-primary theme-surface-alt inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs backdrop-blur-sm transition-colors duration-200"
              role="note"
            >
              <MapPin size={13} className="text-yellow-400" />
              <span>Douala, Cameroun</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
