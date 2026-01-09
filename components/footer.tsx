"use client";

import Link from "next/link";
import { useState, FormEvent, } from "react";
import { useForm } from "@formspree/react";
import { Facebook, Instagram, Linkedin, Mail, Github, Youtube, MessageCircle } from "lucide-react";
import Abonner from "./Abonner";


export default function Footer() {
  const [email, setEmail] = useState("");
  const [state, handleSubmit] = useForm("xyzbrllo");

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-gray-300">
      {/* Background image rotative (décoratif) */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute inset-y-0 left-0 w-2/5 transform-gpu opacity-100 filter blur-xl z-0 pointer-events-none spin-slow"
        style={{
          backgroundImage: "url('/logofinal.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {/* Gradient pour améliorer lisibilité du texte */}
      <div aria-hidden="true" className="hidden md:block absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-slate-950/90 to-transparent z-10 pointer-events-none" />

      <div className="relative z-20 max-w-6xl mx-auto py-7 px-3 md:pl-1 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Bloc identité */}
        <div>
          <h2 className="text-2xl font-bold text-white">Aris<span className="text-yellow-400">Dev</span></h2>
          <p className="mt-1 text-yellow-400 font-medium">Développeur & architecte du numérique</p>
          <p className="mt-3 text-sm text-gray-400">
            Du code à l’architecture, nous transformons des idées en solutions web
            claires, fiables et performantes.
          </p>
        </div>


        {/* Bloc navigation */}
        <nav aria-label="Navigation du site" className="flex flex-col">
          <h3 className="font-semibold text-white mb-3">Liens rapides</h3>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/about" className="text-gray-300 hover:text-yellow-400 transition">À propos</Link>
            </li>
            <li>
              <Link href="/services" className="text-gray-300 hover:text-yellow-400 transition">Services</Link>
            </li>
            <li>
              <Link href="/myProjets" className="text-gray-300 hover:text-yellow-400 transition">Projets</Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-300 hover:text-yellow-400 transition">Contact</Link>
            </li>
            <li>
              <Link href="/competences" className="text-gray-300 hover:text-yellow-400 transition">Compétences</Link>
            </li>
          </ul>
        </nav>

        {/* Bloc contact & réseaux */}
        <div>
          <h3 className="font-semibold text-white mb-3">Contact & réseaux</h3>

          <div className="flex items-center gap-3">
            <a href="mailto:aristidegaelkouandjakenfack@gmail.com" aria-label="Envoyer un e-mail" className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition">
              <Mail size={18} className="text-yellow-500" /> <span className="text-sm">aristidegael...@gmail.com</span>
            </a>
          </div>

          <div className="mt-4 flex gap-3">
            <a href="https://www.facebook.com/share/1AitQnWX1n/" title="Facebook" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="p-2 rounded hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-blue-500">
              <Facebook size={17} />
            </a>
            <a href="https://instagram.com" title="Instagram" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="p-2 rounded hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-purple-500">
              <Instagram size={17} />
            </a>
            <a href="https://www.linkedin.com/in/aristide-gael-kouandja-kenfack-571693287/" title="Linkedin" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="p-2 rounded hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-blue-700">
              <Linkedin size={17} />
            </a>
            {/* <a href="https://github.com" aria-label="Github" target="_blank" rel="noopener noreferrer" className="p-2 rounded hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-yellow-400">
              <Github size={17} />
            </a> */}
            <a
              href="https://www.youtube.com/@ArisDev"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
              title="YouTube"
              className="p-2 rounded hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-red-500"
            >
              <Youtube size={17} />
            </a>
            <a
              href="https://wa.me/237680585671" // remplace par ton numéro
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
              title="whatsapp"
              className="p-2 rounded hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-green-500"
            >
              <MessageCircle size={17} />
            </a>
          </div>

          <Abonner />
        </div>
      </div>
    </footer>
  );
}