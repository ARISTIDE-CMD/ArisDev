
"use client";

import React from 'react';
import Image from 'next/image';

const services = [
  {
    title: "Création d'applications pour entreprises et startups",
    subtitle: "Je conçois des applications qui permettent aux entreprises de gérer leurs activités, leurs clients et leurs services en ligne, de manière simple et efficace.",
    imageSrc: "/Gérer des projets complexes avec Microsoft Planner.jpeg",
    imageAlt: "Équipe travaillant sur une application"
  },
  {
    title: "Développement d'applications mobiles",
    subtitle: "Je crée des applications mobiles modernes pour Android et iPhone afin de rapprocher votre entreprise de vos clients.",
    imageSrc: "/Cheerful black man standing by huge cellphone, mockup Stock Photo.jpeg",
    imageAlt: "Maquette application mobile sur smartphone"
  },
  {
    title: "Création de plateformes web professionnelles",
    subtitle: "Je développe des sites et plateformes web rapides, sécurisés et pensés pour convertir vos visiteurs en clients.",
    imageSrc: "/app_stock.jpeg",
    imageAlt: "Interface d'une plateforme web"
  },
  {
    title: "Automatisation et digitalisation des processus",
    subtitle: "J'aide les entreprises à automatiser des tâches répétitives pour réduire les erreurs et gagner du temps.",
    imageSrc: "/automatisation.png",
    imageAlt: "Tableau de gestion de projet et automatisation"
  },
//   {
//     title: "Amélioration de la performance et de la rapidité",
//     subtitle: "J'optimise les plateformes existantes pour qu'elles soient plus rapides, plus fluides et plus agréables à utiliser.",
//     imageSrc: "/assets/images/5202163f02af6be34e9be9255a03010d.jpg",
//     imageAlt: "Optimisation de performance web"
//   },
  {
    title: "Sécurisation des applications et des données",
    subtitle: "Je mets en place des solutions pour protéger les données et sécuriser l'accès aux plateformes numériques.",
    imageSrc: "/RGPD _ Mettez en place vos dispositifs de protection et de sécurisation des données !.jpeg",
    imageAlt: "Icône de sécurité et fichier sécurisé"
  },
  {
    title: "Accompagnement digital & conseil",
    subtitle: "J'accompagne les porteurs de projets et les entreprises dans leurs choix digitaux pour construire des solutions efficaces et durables.",
    imageSrc: "/accompagnement.png",
    imageAlt: "Réunion de conseil et stratégie digitale"
  },
//   {
//     title: "Portfolios & sites professionnels",
//     subtitle: "Je conçois des sites modernes pour valoriser votre image et attirer des opportunités professionnelles.",
//     imageSrc: "/assets/images/1762381804185.jpg",
//     imageAlt: "Portfolio professionnel en ligne"
//   },
];

export default function Services() {
  const ref = React.useRef<HTMLElement | null>(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="w-full bg-slate-800 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Mes services digitaux</h2>
          <p className="text-slate-300 mt-3 max-w-2xl mx-auto">Des solutions claires, efficaces et adaptées à vos besoins</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, index) => {
            const id = s.title.replace(/\s+/g, '-').toLowerCase();
            return (
              <article
                key={s.title}
                id={id}
                tabIndex={0}
                aria-labelledby={id}
                style={{ animationDelay: inView ? `${index * 120}ms` : '0ms' }}
                className={`service-card group bg-slate-900 p-6 rounded-xl border border-slate-700/40 shadow-lg hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-yellow-400/30 ${inView ? 'is-visible' : ''}`}
              >
                <div className="relative h-40 mb-4 overflow-hidden rounded-md bg-slate-800">
                  {/* Utilisation de next/image pour mieux gérer les images statiques */}
                  <Image src={s.imageSrc} alt={s.imageAlt} fill className="object-cover transition-transform duration-500 group-hover:scale-105 group-focus:scale-105 transform" />
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl">💡</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{s.title}</h3>
                    <p className="text-slate-300 mt-2">{s.subtitle}</p>
                  </div>
                </div>

                <div className="mt-4 text-sm text-slate-400">
                  <strong className="text-yellow-400">Bénéfices :</strong>
                  <ul className="mt-2 list-disc list-inside">
                    <li>Solution adaptée à votre activité</li>
                    <li>Gain de temps et productivité</li>
                    <li>Expérience client améliorée</li>
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <a href="/contact" className="inline-block bg-yellow-400 text-slate-900 font-bold px-6 py-3 rounded-full shadow hover:bg-yellow-300 transition">Discutons de votre projet</a>
        </div>
      </div>

      <style jsx>{`
        .service-card {
          opacity: 0;
          transform: translateY(20px);
        }

        .service-card.is-visible {
          animation: slideUpFade 1000ms cubic-bezier(.22,.9,.19,1) forwards;
        }

        @keyframes slideUpFade {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Respecter la préférence de réduction de mouvement */
        @media (prefers-reduced-motion: reduce) {
          .service-card.is-visible {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
