"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import Globe from "@/components/Globe";

const roles = [
  "Développeur Full Stack",
  "Ingénieur DevOps",
  "Architecte React / Next.js",
  "Développeur React Native",
];

const techStack = [
  { label: "React / Next.js", color: "text-[#38bdf8] border-[#0c2d3e] bg-[#061624]" },
  { label: "React Native", color: "text-[#a78bfa] border-[#2d1b4e] bg-[#120a22]" },
  { label: "Laravel / PHP", color: "text-[#f87171] border-[#3d1515] bg-[#180808]" },
  { label: "TypeScript", color: "text-[#60a5fa] border-[#1a2f4e] bg-[#06101e]" },
  { label: "Docker · CI/CD", color: "text-[#2dd4bf] border-[#0d3530] bg-[#041814]" },
  { label: "Spring Boot", color: "text-[#86efac] border-[#0d3018] bg-[#04180a]" },
  { label: "Node.js", color: "text-[#64748b] border-[#1e2a38] bg-[#0a1020]" },
];

const stats = [
  { value: "2+", label: "ans d'expérience" },
  { value: "5+", label: "projets livrés" },
  { value: "−30%", label: "latence Typesense" },
  { value: "DevOps", label: "CI/CD · Docker" },
];

export default function HeroPage() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let t: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 55);
    } else if (!isDeleting && displayed.length === current.length) {
      t = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayed.length > 0) {
      t = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 28);
    } else {
      t = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      }, 0);
    }

    return () => clearTimeout(t);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=DM+Mono:wght@400;500&display=swap');

        .f-syne  { font-family: 'Syne', sans-serif; }
        .f-mono  { font-family: 'DM Mono', monospace; }
        body { background: #06080f; font-family: 'DM Sans', sans-serif; }

        .grid-bg {
          background-image:
            linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px);
          background-size: 64px 64px;
        }

        .glow-hero {
          background: radial-gradient(ellipse 70% 40% at 60% 0%, rgba(245,158,11,.10), transparent 70%);
        }

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(22px); }
          to   { opacity:1; transform:translateY(0);    }
        }

        .fade-up {
          opacity: 0;
          animation: fadeUp .75s cubic-bezier(.22,1,.36,1) forwards;
        }

        @keyframes cursor-blink {
          0%,100% { opacity:1; }
          50%      { opacity:0; }
        }

        .typed-cursor::after {
          content: '|';
          color: var(--amber);
          animation: cursor-blink 1s step-end infinite;
          margin-left: 2px;
        }
      `}</style>

      <main className="min-h-screen bg-transparent grid-bg glow-hero overflow-hidden relative">
        {/* Ambient glow orb */}
        <div className="pointer-events-none absolute -top-32 right-1/4 w-[700px] h-[700px] rounded-full bg-amber-500/5 blur-[140px]" />

        {/* Globe */}
        <div className="pointer-events-none absolute -top-40 -right-40 opacity-60 z-0">
          <div className="w-[420px] h-[420px] sm:w-[560px] sm:h-[560px] lg:w-[840px] lg:h-[840px] xl:w-[1050px] xl:h-[1050px]">
            <Globe />
          </div>
        </div>

        {/* ── HERO CONTENT ─────────────────────────────────────── */}
        <div className="relative z-10 container mx-auto px-6 lg:px-16 flex flex-col justify-center min-h-screen pt-10 pb-28">

          {/* Tag */}
          <div className="fade-up f-mono text-amber-400 text-xs tracking-[.18em] uppercase mb-8 flex items-center gap-3" style={{ animationDelay: "0ms" }}>
            <span className="w-7 h-px bg-amber-400 inline-block" />
            Ouvert aux opportunités · Douala, Cameroun
          </div>

          {/* Name */}
          <h1 className="fade-up f-syne font-extrabold text-[clamp(2.8rem,8vw,6.5rem)] leading-[.92] text-slate-50 mb-4" style={{ animationDelay: "80ms" }}>
            Aristide
            <br />
            <span className="text-amber-400">Kenfack</span>
          </h1>

          {/* Typewriter role */}
          <p className="fade-up f-syne text-xl md:text-2xl text-slate-400 font-medium h-9 mb-6 typed-cursor" style={{ animationDelay: "160ms" }}>
            {displayed}
          </p>

          {/* Description */}
          <p className="fade-up text-slate-400 text-base md:text-lg leading-relaxed max-w-xl mb-10" style={{ animationDelay: "240ms" }}>
            19 ans. Je conçois des applications web et mobiles performantes, avec une 
            rigueur DevOps — pipelines CI/CD, Docker, monitoring. Actuellement{" "}
            <span className="text-slate-200 font-medium">Frontend Dev & DevOps chez Iziway Cameroun</span>{" "}
            et étudiant en Licence Technologique à l&apos;IUT Douala.
          </p>

          {/* CTAs */}
          <div className="fade-up flex flex-wrap gap-4 mb-14" style={{ animationDelay: "320ms" }}>
            <Link href="/myProjets" className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 group hover:gap-3 f-syne">
              Voir mes projets
              <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href="/file/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#1e2a3a] hover:border-amber-400/30 text-slate-400 hover:text-slate-50 px-7 py-3.5 rounded-xl transition-all duration-300 f-syne"
            >
              <ExternalLink size={16} /> Mon CV
            </a>
          </div>

          {/* Social */}
          <div className="fade-up flex items-center gap-6" style={{ animationDelay: "400ms" }}>
            <span className="text-[#334155] text-xs tracking-widest uppercase f-mono">Profils</span>
            <div className="flex gap-3">
              {[
                { icon: Github,   href: "https://github.com/ARISTIDE-CMD",                                           label: "GitHub"   },
                { icon: Linkedin, href: "https://www.linkedin.com/in/aristide-gael-kouandja-kenfack-571693287/",     label: "LinkedIn" },
                { icon: Mail,     href: "mailto:aristidegaelkouandjakenfack@gmail.com",                               label: "Email"    },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-10 h-10 rounded-xl border border-[#151c28] hover:border-amber-400/30 flex items-center justify-center text-slate-600 hover:text-amber-400 transition-all duration-300 hover:bg-amber-400/5">
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── FLOATING TECH PILLS ───────────────────────────────── */}
        <div className="hidden xl:flex absolute right-14 top-1/2 -translate-y-1/2 flex-col gap-2.5">
          {techStack.map((t, i) => (
            <div key={t.label}
              className={`fade-up f-mono text-xs px-4 py-2 rounded-[20px] border ${t.color} select-none whitespace-nowrap`}
              style={{ animationDelay: `${480 + i * 70}ms` }}>
              {t.label}
            </div>
          ))}
        </div>

        {/* ── STATS BAR ─────────────────────────────────────────── */}
        <div className="absolute bottom-0 inset-x-0 border-t border-[#111827] bg-[#08090f]/80 backdrop-blur-md">
          <div className="container mx-auto px-6 lg:px-16 py-4 flex flex-wrap gap-8 md:gap-12">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-2.5">
                <span className="f-syne text-lg font-bold text-amber-400">{s.value}</span>
                <span className="text-slate-600 text-sm">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
