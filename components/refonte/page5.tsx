"use client";

import { useForm, ValidationError } from "@formspree/react";
import {
  CheckCircle2,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  MessageCircle,
} from "lucide-react";
import { Reveal } from "@/components/refonte/Reveal";

/* ─── Data ─────────────────────────────────────────────── */
const directContacts = [
  {
    label: "Email",
    value: "aristidegaelkouandjakenfack@gmail.com",
    href: "mailto:aristidegaelkouandjakenfack@gmail.com",
    icon: Mail,
    color: "#f59e0b",
  },
  {
    label: "Téléphone",
    value: "+237 680 585 671",
    href: "tel:+237680585671",
    icon: Phone,
    color: "#38bdf8",
  },
  {
    label: "Localisation",
    value: "Douala, Cameroun",
    href: null,
    icon: MapPin,
    color: "#94a3b8",
  },
];

const socials = [
  { label: "GitHub", href: "https://github.com/ARISTIDE-CMD", icon: Github, color: "#e2e8f0" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aristide-gael-kouandja-kenfack-571693287/", icon: Linkedin, color: "#0A66C2" },
  { label: "WhatsApp", href: "https://wa.me/237680585671", icon: MessageCircle, color: "#25D366" },
];

/* ─── Champ réutilisable ────────────────────────────────── */
function Field({
  id, label, children,
}: { id: string; label: string; children: React.ReactNode }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="f-mono text-[10px] tracking-[.16em] uppercase text-slate-600 block mb-2"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

const inputCls =
  "w-full rounded-xl bg-[#06090f] border border-[#0f1825] px-4 py-3 text-sm text-slate-200 " +
  "placeholder:text-slate-700 outline-none transition-colors duration-200 " +
  "focus:border-amber-400/40 focus:ring-2 focus:ring-amber-400/10";

/* ─── Page ─────────────────────────────────────────────── */
export default function ContactPage() {
  const [state, handleSubmit, reset] = useForm("xyzbrllo");

  return (
    <main className="min-h-screen bg-transparent text-slate-300 py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* ── Header ──────────────────────────────────── */}
        <Reveal>
          <header className="mb-16">
            <p className="f-mono text-amber-400 text-xs tracking-[.18em] uppercase mb-5 flex items-center gap-3">
              <span className="w-7 h-px bg-amber-400 inline-block" />
              Contact
            </p>
            <h1 className="f-syne font-extrabold text-4xl md:text-5xl text-slate-50 mb-3 leading-tight">
              Restons{" "}
              <span className="text-amber-400">en contact</span>
            </h1>
            <p className="text-slate-600 max-w-lg text-sm leading-relaxed">
              Pour une opportunité, une candidature ou une collaboration — envoyez un message ou contactez-moi directement.
            </p>
          </header>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 items-start">

          {/* ── Colonne gauche : coordonnées ───────────── */}
          <Reveal y={18} delay={0.04}>
            <aside>

              {/* Badge disponibilité */}
              <div className="flex items-center gap-2 mb-10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="f-mono text-[10px] tracking-[.14em] uppercase text-emerald-400">
                  Disponible · Réponse sous 24–48h
                </span>
              </div>

              {/* Contacts directs */}
              <div className="mb-10">
                <p className="f-mono text-[10px] tracking-[.18em] uppercase text-slate-600 mb-4 flex items-center gap-3">
                  Coordonnées
                  <span className="flex-1 h-px bg-[#0d1520]" />
                </p>
                <div>
                  {directContacts.map((c, i) => {
                    const Icon = c.icon;
                    const inner = (
                      <div
                        className="group flex items-center gap-4 py-4 border-b border-[#0c1520] last:border-0 transition-colors duration-200 hover:bg-amber-400/[.02] rounded-sm px-1 -mx-1"
                      >
                        {/* Icône */}
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{
                            background: `${c.color}12`,
                            border: `1px solid ${c.color}22`,
                          }}
                        >
                          <Icon size={15} style={{ color: c.color }} />
                        </div>

                        {/* Texte */}
                        <div className="flex-1 min-w-0">
                          <p className="f-mono text-[9.5px] tracking-[.14em] uppercase text-slate-600 mb-0.5">
                            {c.label}
                          </p>
                          <p className="text-slate-300 text-sm truncate group-hover:text-slate-100 transition-colors">
                            {c.value}
                          </p>
                        </div>

                        {/* Flèche si cliquable */}
                        {c.href && (
                          <ExternalLink
                            size={13}
                            className="text-slate-700 group-hover:text-amber-400 transition-colors flex-shrink-0"
                          />
                        )}
                      </div>
                    );

                    return c.href ? (
                      <a key={i} href={c.href}>{inner}</a>
                    ) : (
                      <div key={i}>{inner}</div>
                    );
                  })}
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div>
                <p className="f-mono text-[10px] tracking-[.18em] uppercase text-slate-600 mb-4 flex items-center gap-3">
                  Réseaux
                  <span className="flex-1 h-px bg-[#0d1520]" />
                </p>
                <div className="flex flex-col gap-1">
                  {socials.map((s) => {
                    const Icon = s.icon;
                    return (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 py-3.5 border-b border-[#0c1520] last:border-0 hover:bg-amber-400/[.02] transition-colors duration-200 rounded-sm px-1 -mx-1"
                      >
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-200"
                          style={{
                            background: `${s.color}10`,
                            border: `1px solid ${s.color}20`,
                          }}
                        >
                          <Icon size={15} style={{ color: s.color }} />
                        </div>
                        <span className="text-slate-400 text-sm group-hover:text-slate-100 transition-colors">
                          {s.label}
                        </span>
                        <ExternalLink
                          size={12}
                          className="ml-auto text-slate-700 group-hover:text-amber-400 transition-colors"
                        />
                      </a>
                    );
                  })}
                </div>
              </div>

            </aside>
          </Reveal>

          {/* ── Colonne droite : formulaire ─────────────── */}
          <Reveal y={18} delay={0.08}>
            <div>

              {/* Titre section formulaire */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-7 h-7 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center">
                  <Send size={13} className="text-amber-400" />
                </div>
                <h2 className="f-syne font-bold text-slate-300 text-xs tracking-[.14em] uppercase">
                  Envoyer un message
                </h2>
                <div className="flex-1 h-px bg-[#0d1520]" />
              </div>

              {state.succeeded ? (
                /* ── Succès ── */
                <div className="text-center py-16">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                    style={{ background: "#10b98118", border: "1px solid #10b98130" }}
                  >
                    <CheckCircle2 size={22} className="text-emerald-400" />
                  </div>
                  <p className="f-syne text-slate-100 font-bold text-xl mb-2">Message envoyé !</p>
                  <p className="text-slate-600 text-sm mb-8">
                    Merci — je reviens vers vous dès que possible.
                  </p>
                  <button
                    type="button"
                    onClick={reset}
                    className="f-mono inline-flex items-center gap-2 rounded-xl border border-[#1e2a38] bg-[#06090f] px-5 py-2.5 text-xs text-slate-400 hover:text-amber-300 hover:border-amber-400/30 transition-colors duration-200"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                /* ── Formulaire ── */
                <form onSubmit={handleSubmit} className="space-y-5">

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field id="name" label="Nom">
                      <input
                        id="name" name="name" type="text"
                        autoComplete="name" required
                        placeholder="Votre nom complet"
                        className={inputCls}
                      />
                    </Field>

                    <Field id="email" label="Email">
                      <input
                        id="email" name="email" type="email"
                        autoComplete="email" required
                        placeholder="votre@email.com"
                        className={inputCls}
                      />
                      <ValidationError
                        prefix="Email" field="email" errors={state.errors}
                        className="f-mono text-[10px] text-rose-400 mt-1.5 block"
                      />
                    </Field>
                  </div>

                  <Field id="subject" label="Objet">
                    <input
                      id="subject" name="subject" type="text"
                      placeholder="Stage · Alternance · Collaboration · Projet"
                      className={inputCls}
                    />
                  </Field>

                  <Field id="message" label="Message">
                    <textarea
                      id="message" name="message" rows={6} required
                      placeholder="Contexte, attentes, délais, et toute information utile…"
                      className={`${inputCls} resize-none`}
                    />
                    <ValidationError
                      prefix="Message" field="message" errors={state.errors}
                      className="f-mono text-[10px] text-rose-400 mt-1.5 block"
                    />
                  </Field>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="f-syne w-full inline-flex items-center justify-center gap-2 rounded-xl bg-amber-400 hover:bg-amber-300 active:scale-[.98] text-slate-900 px-6 py-3.5 text-sm font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {state.submitting ? (
                      <>
                        <span className="w-4 h-4 rounded-full border-2 border-slate-900/30 border-t-slate-900 animate-spin" />
                        Envoi en cours…
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Envoyer le message
                      </>
                    )}
                  </button>

                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </main>
  );
}