"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

type NavLink = {
    href: string;
    label: string;
};

const links: NavLink[] = [
    { href: "/", label: "Accueil" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "À propos" },
    { href: "/presentation", label: "FAQ" },
    { href: "/contact", label: "Contact" },
];

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const handleLinkClick = () => setIsOpen(false);

    return (
        <nav className="sticky top-0 z-50 bg-slate-900 shadow-xl shadow-slate-950/50">
            <div className="container mx-auto px-2 flex items-center justify-between">

                {/* Logo/Branding */}
                <div className="flex items-center gap-3">
                    <Link href="/">
                        <img src="/logofinal.png" alt="Logo" width={50} height={50} />
                    </Link>
                    <div className="leading-none">
                        <h1 className="text-xl font-bold text-white tracking-wider">
                            Aris<span className="text-yellow-400">Dev</span>
                        </h1>
                        <h3 className="text-sm font-medium text-slate-400">
                            Solutions digitales claires, utiles et orientées résultat
                        </h3>
                    </div>
                </div>

                {/* Actions mobile */}
                <div className="md:hidden flex items-center gap-2 z-50">
                    <ThemeToggle />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 text-yellow-400 bg-slate-800 rounded-lg focus:outline-none hover:bg-slate-700 transition-colors"
                        aria-label="Toggle navigation"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Menu Desktop */}
                <div className="hidden md:flex md:items-center md:space-x-6">
                    <ul className="flex space-x-6 text-xs font-semibold">
                        {links.map(link => {
                            const isActive = pathname === link.href;
                            return (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={`relative py-2 transition-all duration-300 group ${isActive ? "text-yellow-400" : "text-slate-300 hover:text-white"
                                            }`}
                                        onClick={handleLinkClick}
                                    >
                                        {link.label}
                                        <span className={`absolute bottom-0 left-0 h-[3px] bg-yellow-400 transform transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                                            } rounded-full`} />
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    <div className="ml-6 flex items-center gap-3">
                        <ThemeToggle />
                        <button
                            disabled
                            title="Fonctionnalité en cours de développement"
                            className="px-4 py-1 rounded-md bg-yellow-400 cursor-not-allowed text-white opacity-80 font-semibold hover:bg-yellow-300 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>

            {/* Menu mobile overlay */}
            <div
                className={`fixed inset-0 bg-slate-950/95 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    } md:hidden`}
                onClick={() => setIsOpen(false)}
            >
                <ul className="flex flex-col items-center justify-center h-full space-y-8 text-3xl font-bold">
                    {links.map(link => {
                        const isActive = pathname === link.href;
                        return (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    onClick={handleLinkClick}
                                    className={`transition-colors duration-200 p-2 rounded-lg ${isActive ? "text-yellow-400 bg-slate-800/50" : "text-slate-200 hover:text-yellow-400 hover:bg-slate-800/30"
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

export default Navbar;
