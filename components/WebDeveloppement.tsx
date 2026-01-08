"use client";

import Link from 'next/link';

export default function WebPage() {
  return (
    <main className="relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 bg-cover bg-top md:bg-center bg-fixed filter blur-sm md:blur-none saturate-110" style={{ backgroundImage: "url('/Delivery/application.jpg')", backgroundRepeat: 'no-repeat' }} />
      <div className="absolute inset-0 bg-slate-900/70" />

      <div className="relative z-10 container mx-auto px-6 py-16 enter-fade">
        <header className="max-w-3xl mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">Développement Web & Applications — <span className="text-yellow-400">performants et maintenables</span></h1>
          <p className="text-lg text-slate-300 leading-relaxed">Sites, plateformes et applications métiers conçues pour la performance, l’évolutivité et l’expérience utilisateur.</p>
        </header>

        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Architecture modulaire', text: 'Organisation claire pour scalabilité et tests.' },
              { title: 'Performance', text: 'Optimisations front & back pour une expérience fluide.' },
              { title: 'SEO & accessibilité', text: 'Bonne indexation et accès facilité pour tous.' },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="text-lg font-semibold text-white mb-3 text-yellow-300">{item.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">Prestations</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                title: 'Site vitrine & présence en ligne',
                desc: 'Sites professionnels pour présenter une activité, un projet ou une marque.',
                href: '/contact'
              },
              {
                title: 'Landing pages & pages marketing',
                desc: 'Pages optimisées pour présenter une offre, un service ou un produit.',
                href: '/contact'
              },
              {
                title: 'Applications web sur mesure',
                desc: 'Applications adaptées aux besoins spécifiques d’un projet ou d’une organisation.',
                href: '/contact'
              },
              {
                title: 'Plateformes web & outils internes',
                desc: 'Espaces de gestion, tableaux de bord et outils métiers accessibles via le web.',
                href: '/contact'
              },
              {
                title: 'Web app & SaaS',
                desc: 'Solutions web évolutives accessibles depuis un navigateur, pensées pour grandir.',
                href: '/contact'
              },
              {
                title: 'PWA & applications web offline',
                desc: 'Applications web rapides, installables et utilisables même sans connexion.',
                href: '/contact'
              },
              {
                title: 'Refonte et amélioration de sites web',
                desc: 'Modernisation de sites existants pour améliorer l’ergonomie et les performances.',
                href: '/contact'
              },
              {
                title: 'Maintenance et suivi web',
                desc: 'Corrections, mises à jour et accompagnement pour garder un site fonctionnel.',
                href: '/contact'
              }
            ]
              .map((service) => (
                <div key={service.title} className="group relative flex flex-col justify-between p-8 rounded-xl bg-slate-800/80 backdrop-blur border border-slate-700 hover:border-yellow-400 transition">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-yellow-400 transition">{service.title}</h3>
                    <p className="text-sm text-slate-300 leading-relaxed">{service.desc}</p>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <a
                      href={`https://wa.me/237680585671/?text=${encodeURIComponent(`Bonjour, je suis intéressé·e par : ${service.title}. Pouvez-vous m'en donner plus d'informations ?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-green-500 text-white font-semibold hover:bg-green-600 transition"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <path d="M21 11.5C21 16.194 16.97 20 12 20c-1.45 0-2.82-.33-4.03-.93L4 20l1.95-3.02C5 15.65 4 13.9 4 12.01 4 7.31 8.03 4 12 4s9 3.31 9 7.5z" stroke="currentColor" strokeWidth="0" fill="white" />
                        <path d="M15.5 14.2c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15s-.78.97-.96 1.17c-.18.2-.36.22-.67.07-.3-.15-1.13-.42-2.15-1.33-.8-.72-1.34-1.61-1.49-1.91-.15-.3-.02-.46.13-.61.14-.14.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2 0-.37-.02-.52-.02-.15-.68-1.63-.93-2.24-.25-.61-.5-.53-.68-.54-.18-.02-.39-.02-.6-.02-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.46 0 1.45 1.05 2.86 1.2 3.05.15.2 2.08 3.23 5.04 4.52 2.96 1.29 2.96.86 3.5.81.54-.05 1.77-.72 2.02-1.41.25-.7.25-1.3.18-1.42-.07-.12-.27-.2-.57-.35z" fill="#25D366" />
                      </svg>
                      WhatsApp
                    </a>

                    <Link href={service.href} className="text-sm inline-flex items-center gap-2 text-yellow-400 font-semibold hover:underline">
                      Contactez-nous →
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </section>

        <section className="text-center max-w-xl mx-auto">
          <p className="text-slate-300 mb-8 text-lg">Prêt à lancer votre projet web ?</p>
          <Link href="/contact" className="inline-flex cta-animate items-center justify-center px-7 py-3 rounded-lg bg-yellow-400 text-slate-900 font-semibold hover:bg-yellow-300 transition shadow-xl">Discutons-en</Link>
        </section>
      </div>
      <style jsx>{`
        .enter-fade {
          opacity: 0;
          transform: translateY(8px);
          animation: fadeUp 3.5s cubic-bezier(.22,.9,.19,1) forwards;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .enter-fade {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </main>
  );
} 