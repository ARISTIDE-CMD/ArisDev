"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const THEME_STORAGE_KEY = "arisdev-theme";

const getInitialTheme = () => {
    if (typeof window === "undefined") {
        return false;
    }

    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    return stored ? stored === "dark" : prefersDark;
};

const applyTheme = (isDark: boolean) => {
    document.documentElement.classList.toggle("theme-dark", isDark);
    document.documentElement.classList.toggle("theme-light", !isDark);
    localStorage.setItem(THEME_STORAGE_KEY, isDark ? "dark" : "light");
    window.dispatchEvent(new CustomEvent("arisdev-theme-change", { detail: isDark }));
};

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(getInitialTheme);

    useEffect(() => {
        applyTheme(isDark);
    }, [isDark]);

    useEffect(() => {
        const onThemeChange = (event: Event) => {
            const customEvent = event as CustomEvent<boolean>;
            if (typeof customEvent.detail === "boolean") {
                setIsDark(customEvent.detail);
            }
        };

        window.addEventListener("arisdev-theme-change", onThemeChange);
        return () => window.removeEventListener("arisdev-theme-change", onThemeChange);
    }, []);

    const toggle = () => {
        setIsDark((previousValue) => !previousValue);
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
