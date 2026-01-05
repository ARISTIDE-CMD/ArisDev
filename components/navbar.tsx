"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Code } from 'lucide-react'; // icônes menu, fermer et code
import Racine from "./racine";

// Définition de l'interface pour les liens de navigation
interface NavLink {
    href: string;
    label: string;
}

const links: NavLink[] = [
    { href: "/", label: "Accueil" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "À propos" },
    // { href: "/myProjets", label: "Mes projets" },
    // { href: "/competences", label: "Compétences" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    // Hook Next.js pour connaître le chemin actuel
    const pathname = usePathname();

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        // Rendre la barre de navigation sticky et appliquer le style premium sombre
        <nav className="sticky top-0 z-50 bg-slate-900 border-b border-yellow-400/20 shadow-xl shadow-slate-950/50">
            <div className="container mx-auto px-2  flex items-center justify-between">
                
                {/* Logo/Branding (Gauche) */}
                <div className="text-left flex items-center gap-3">
                    {/* <Code className="text-yellow-400 h-8 w-8" /> */}
                    <Link href="/"  >
                    <img src="/logofinal.png" alt="Logo" width={60} height={60} sizes="cover"
                    /></Link>
                    <div className="leading-none">
                        <h1 className="text-xl font-bold text-white tracking-wider">ArisDev</h1>
                        <h3 className="text-sm font-medium text-slate-400">Solutions digitales claires, utiles et orientées résultat</h3>
                    </div>
                </div>

                {/* Bouton menu mobile */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-yellow-400 bg-slate-800 rounded-lg focus:outline-none hover:bg-slate-700 transition-colors"
                    aria-label="Toggle navigation"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Menu de navigation (Desktop) */}
                <ul className="hidden md:flex md:space-x-6 text-sm font-semibold">
                    {links.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`relative py-2 transition-all duration-300 group ${
                                        isActive 
                                            ? "text-yellow-400" 
                                            : "text-slate-300 hover:text-white"
                                    }`}
                                    onClick={handleLinkClick}
                                >
                                    {link.label}
                                    {/* Indicateur de lien actif (Underline stylisée) */}
                                    <span 
                                        className={`absolute bottom-0 left-0 h-[3px] bg-yellow-400 transform transition-all duration-300 ${
                                            isActive 
                                                ? "w-full" 
                                                : "w-0 group-hover:w-full"
                                        } rounded-full`}
                                    ></span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
            {/* <Racine/> */}

            {/* Menu Mobile (Full Overlay) */}
            <div 
                className={`fixed inset-0 bg-slate-950/95 backdrop-blur-sm z-40 transition-opacity duration-300 ${
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                } md:hidden`}
                onClick={()=>setIsOpen(false)}
            >
                {/* On garde la hauteur pour que l'icône X soit visible en haut (z-50) */}
                <ul className="flex flex-col items-center justify-center h-full space-y-8 text-xl font-bold">
                    {links.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    onClick={handleLinkClick}
                                    className={`transition-colors duration-200 text-3xl p-2 rounded-lg ${
                                        isActive 
                                            ? "text-yellow-400 bg-slate-800/50" 
                                            : "text-slate-200 hover:text-yellow-400 hover:bg-slate-800/30"
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}