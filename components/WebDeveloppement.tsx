"use client";

import Link from 'next/link';
import { FaWhatsapp } from "react-icons/fa";


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
                      <FaWhatsapp className="w-5 h-5" />
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