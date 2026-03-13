"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const SIZE = 44;   // px — taille du bouton
const STROKE = 2.5;  // épaisseur du cercle
const R = (SIZE - STROKE) / 2;
const CIRC = 2 * Math.PI * R;

export default function ScrollToTop() {
    const [progress, setProgress] = useState(0); // 0 → 1
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const el = document.documentElement;
            const scrolled = el.scrollTop;
            const total = el.scrollHeight - el.clientHeight;
            const pct = total > 0 ? scrolled / total : 0;

            setProgress(pct);
            setVisible(scrolled > 300);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // dash offset : CIRC = vide total, 0 = cercle complet
    const dashOffset = CIRC * (1 - progress);

    return (
        <button
            type="button"
            aria-label="Revenir en haut"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`
        fixed bottom-6 right-5 z-50 md:hidden
        transition-all duration-300 ease-out
        ${visible
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-5 pointer-events-none"
                }
      `}
        >
            {/* SVG progress ring */}
            <svg
                width={SIZE}
                height={SIZE}
                viewBox={`0 0 ${SIZE} ${SIZE}`}
                className="absolute inset-0 -rotate-90"
            >
                {/* Track — cercle gris fixe */}
                <circle
                    cx={SIZE / 2}
                    cy={SIZE / 2}
                    r={R}
                    fill="none"
                    stroke="#0f1825"
                    strokeWidth={STROKE}
                />
                {/* Progress — amber qui se remplit */}
                <circle
                    cx={SIZE / 2}
                    cy={SIZE / 2}
                    r={R}
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth={STROKE}
                    strokeLinecap="round"
                    strokeDasharray={CIRC}
                    strokeDashoffset={dashOffset}
                    style={{ transition: "stroke-dashoffset .1s linear" }}
                />
            </svg>

            {/* Fond + flèche centrée */}
            <div
                className="relative w-[44px] h-[44px] rounded-full bg-[#06090f] flex items-center justify-center"
            >
                <ArrowUp
                    size={16}
                    strokeWidth={2.2}
                    className="text-amber-400"
                />
            </div>
        </button>
    );
}