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

const directContacts = [
  {
    label: "Email",
    value: "aristidegaelkouandjakenfack@gmail.com",
    href: "mailto:aristidegaelkouandjakenfack@gmail.com",
    icon: Mail,
  },
  { label: "Téléphone", value: "+237 680 585 671", href: "tel:+237680585671", icon: Phone },
];

const socials = [
  { label: "GitHub", href: "https://github.com/ARISTIDE-CMD", icon: Github },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aristide-gael-kouandja-kenfack-571693287/",
    icon: Linkedin,
  },
  { label: "WhatsApp", href: "https://wa.me/237680585671", icon: MessageCircle },
];

export default function ContactPage() {
  const [state, handleSubmit, reset] = useForm("xyzbrllo");

  return (
    <main className="min-h-screen bg-transparent text-slate-300 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <header className="mb-16">
            <p className="f-mono text-amber-400 text-xs tracking-[.18em] uppercase mb-4 flex items-center gap-3">
              <span className="w-7 h-px bg-amber-400 inline-block" />
              Contact
            </p>
            <h1 className="f-syne font-extrabold text-4xl md:text-5xl text-slate-50 mb-3">
              Restons{" "}
              <span className="text-amber-400">en contact</span>
            </h1>
            <p className="text-slate-500 max-w-xl">
              Pour une opportunité, une candidature, ou une collaboration : envoyez un message ou contactez-moi directement.
            </p>
          </header>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <Reveal y={18} delay={0.05}>
            <aside className="bg-[#0c1018] border border-[#151c28] rounded-2xl p-7">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <h2 className="f-syne font-bold text-slate-100 text-base mb-1">Coordonnées</h2>
                  <p className="text-slate-600 text-sm">
                    Réponse généralement sous 24–48h.
                  </p>
                </div>
                <span className="f-mono text-[10px] px-2.5 py-1 rounded-full border border-amber-400/25 bg-amber-400/10 text-amber-300">
                  Douala · CM
                </span>
              </div>

              <div className="space-y-3">
                {directContacts.map((c) => {
                  const Icon = c.icon;
                  return (
                    <a
                      key={c.label}
                      href={c.href}
                      className="group flex items-start gap-3 rounded-[14px] border border-[#1e2a38] bg-[#0a1020] px-4 py-3 hover:border-amber-400/30 transition-colors duration-300 card-hover"
                    >
                      <div className="w-10 h-10 rounded-xl border border-[#151c28] bg-[#0c1018] flex items-center justify-center text-amber-400 shrink-0">
                        <Icon size={18} />
                      </div>
                      <div className="min-w-0">
                        <p className="f-mono text-[10px] tracking-[.16em] uppercase text-slate-500 mb-1">
                          {c.label}
                        </p>
                        <p className="text-slate-200 text-sm break-all">{c.value}</p>
                      </div>
                      <ExternalLink size={16} className="text-slate-600 group-hover:text-amber-300 ml-auto mt-2 shrink-0 transition-colors" />
                    </a>
                  );
                })}

                <div className="flex items-start gap-3 rounded-[14px] border border-[#1e2a38] bg-[#0a1020] px-4 py-3">
                  <div className="w-10 h-10 rounded-xl border border-[#151c28] bg-[#0c1018] flex items-center justify-center text-amber-400 shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="f-mono text-[10px] tracking-[.16em] uppercase text-slate-500 mb-1">
                      Localisation
                    </p>
                    <p className="text-slate-200 text-sm">Douala, Cameroun</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#151c28]">
                <p className="f-mono text-[10px] tracking-[.18em] uppercase text-slate-500 mb-3">
                  Réseaux
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {socials.map((s) => {
                    const Icon = s.icon;
                    return (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 rounded-[14px] border border-[#1e2a38] bg-[#0a1020] px-4 py-3 hover:border-amber-400/30 transition-colors duration-300 card-hover"
                      >
                        <div className="w-10 h-10 rounded-xl border border-[#151c28] bg-[#0c1018] flex items-center justify-center text-slate-200 group-hover:text-amber-300 transition-colors">
                          <Icon size={18} />
                        </div>
                        <span className="text-sm text-slate-300 group-hover:text-slate-50 transition-colors">
                          {s.label}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </aside>
          </Reveal>

          <Reveal y={18} delay={0.08}>
            <form onSubmit={handleSubmit} className="bg-[#0c1018] border border-[#151c28] rounded-2xl p-7">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <h2 className="f-syne font-bold text-slate-100 text-base mb-1">Envoyer un message</h2>
                  <p className="text-slate-600 text-sm">
                    Décrivez brièvement votre besoin, je vous répondrai rapidement.
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                  <Send size={18} />
                </div>
              </div>

              {state.succeeded ? (
                <div className="text-center py-14">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={22} className="text-emerald-300" />
                  </div>
                  <p className="f-syne text-slate-100 font-bold text-lg mb-2">Message envoyé</p>
                  <p className="text-slate-500 text-sm mb-6">
                    Merci ! Je reviens vers vous dès que possible.
                  </p>
                  <button
                    type="button"
                    onClick={reset}
                    className="inline-flex items-center justify-center rounded-xl border border-[#1e2a38] bg-[#0a1020] px-5 py-2.5 text-sm text-slate-300 hover:text-amber-300 hover:border-amber-400/30 transition-colors duration-300"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <div className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="f-mono text-[10px] tracking-[.16em] uppercase text-slate-500 block mb-2">
                        Nom
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        placeholder="Votre nom complet"
                        className="w-full rounded-xl bg-[#0a1020] border border-[#1e2a38] px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 outline-none focus:border-amber-400/30 focus:ring-2 focus:ring-amber-400/15 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="f-mono text-[10px] tracking-[.16em] uppercase text-slate-500 block mb-2">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        placeholder="votre@email.com"
                        className="w-full rounded-xl bg-[#0a1020] border border-[#1e2a38] px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 outline-none focus:border-amber-400/30 focus:ring-2 focus:ring-amber-400/15 transition-colors"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-rose-300 mt-2" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="f-mono text-[10px] tracking-[.16em] uppercase text-slate-500 block mb-2">
                      Objet
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Stage · Alternance · Collaboration · Projet"
                      className="w-full rounded-xl bg-[#0a1020] border border-[#1e2a38] px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 outline-none focus:border-amber-400/30 focus:ring-2 focus:ring-amber-400/15 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="f-mono text-[10px] tracking-[.16em] uppercase text-slate-500 block mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      placeholder="Contexte, attentes, délais, et toute information utile…"
                      className="w-full rounded-xl bg-[#0a1020] border border-[#1e2a38] px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 outline-none focus:border-amber-400/30 focus:ring-2 focus:ring-amber-400/15 transition-colors resize-none"
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-rose-300 mt-2" />
                  </div>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-900 px-6 py-3.5 text-sm font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {state.submitting ? (
                      <>
                        <span className="w-4 h-4 rounded-full border-2 border-slate-900/40 border-t-slate-900 animate-spin" />
                        Envoi…
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Envoyer
                      </>
                    )}
                  </button>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </main>
  );
}

