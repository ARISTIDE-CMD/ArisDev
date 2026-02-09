"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Initial theme from localStorage or prefers-color-scheme
        const stored = typeof window !== "undefined" ? localStorage.getItem("arisdev-theme") : null;
        const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
        const nextIsDark = stored ? stored === "dark" : prefersDark;

        setIsDark(nextIsDark);
        document.documentElement.classList.remove("theme-dark", "theme-light");
        document.documentElement.classList.add(nextIsDark ? "theme-dark" : "theme-light");
    }, []);

    const toggle = () => {
        const next = !isDark;
        setIsDark(next);
        document.documentElement.classList.toggle("theme-dark", next);
        document.documentElement.classList.toggle("theme-light", !next);
        localStorage.setItem("arisdev-theme", next ? "dark" : "light");
    };

    return (
        <button
            onClick={toggle}
            aria-pressed={isDark}
            title={isDark ? "Activer le thème clair" : "Activer le thème sombre"}
            className="p-2 rounded-md hover:bg-slate-800/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
        >
            {isDark ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-slate-200" />}
        </button>
    );
}
