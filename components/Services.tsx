
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: "Création d'applications pour entreprises et startups",
    subtitle: "Nous concevons des applications qui permettent aux entreprises de gérer leurs activités, leurs clients et leurs services en ligne, de manière simple et efficace.",
    imageSrc: "/Gérer des projets complexes avec Microsoft Planner.jpeg",
    imageAlt: "Équipe travaillant sur une application",
    objectPosition: 'center'
  },
  {
    title: "Développement d'applications mobiles",
    subtitle: "Nous créons des applications mobiles modernes pour Android et iPhone afin de rapprocher votre entreprise de vos clients.",
    imageSrc: "/Delivery/applicationmobile.jpg",
    imageAlt: "Maquette application mobile sur smartphone",
    objectPosition: 'center 20%'
  },
  {
    title: "Création de plateformes web professionnelles",
    subtitle: "Nous développons des sites et plateformes web rapides, sécurisés et pensés pour convertir vos visiteurs en clients.",
    imageSrc: "/app_stock.jpeg",
    imageAlt: "Interface d'une plateforme web",
    objectPosition: 'center'
  },
  {
    title: "Automatisation et digitalisation des processus",
    subtitle: "Nous aidons les entreprises à automatiser des tâches répétitives pour réduire les erreurs et gagner du temps.",
    imageSrc: "/automatisation.png",
    imageAlt: "Tableau de gestion de projet et automatisation",
    objectPosition: 'center'
  },
//   {
//     title: "Amélioration de la performance et de la rapidité",
//     subtitle: "J'optimise les plateformes existantes pour qu'elles soient plus rapides, plus fluides et plus agréables à utiliser.",
//     imageSrc: "/assets/images/5202163f02af6be34e9be9255a03010d.jpg",
//     imageAlt: "Optimisation de performance web"
//   },
  {
    title: "Sécurisation des applications et des données",
    subtitle: "Nous mettons en place des solutions pour protéger les données et sécuriser l'accès aux plateformes numériques.",
    imageSrc: "/RGPD _ Mettez en place vos dispositifs de protection et de sécurisation des données !.jpeg",
    imageAlt: "Icône de sécurité et fichier sécurisé",
    objectPosition: 'center 40%'
  },
  {
    title: "Accompagnement digital & conseil",
    subtitle: "Nous accompagnons les porteurs de projets et les entreprises dans leurs choix digitaux pour construire des solutions efficaces et durables.",
    imageSrc: "/accompagnement.png",
    imageAlt: "Réunion de conseil et stratégie digitale",
    objectPosition: 'center'
  },
//   {
//     title: "Portfolios & sites professionnels",
//     subtitle: "Je conçois des sites modernes pour valoriser votre image et attirer des opportunités professionnelles.",
//     imageSrc: "/assets/images/1762381804185.jpg",
//     imageAlt: "Portfolio professionnel en ligne"
//   },
];

// const categories = [
//   { title: 'Développement', desc: 'Web, mobile, design', href: '/services/developpement', emoji: '💻' },
//   { title: 'Produits digitaux', desc: 'Produits prêts à l’emploi et templates', href: '/services/produitsdigitaux', emoji: '📦' },
//   { title: 'Maintenance', desc: 'Support, mises à jour et monitoring', href: '/services/maintenance', emoji: '🛠️' },
//   { title: 'Formations', desc: 'Ateliers et formations sur-mesure', href: '/services/formations', emoji: '🎓' },
// ];

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
    <section ref={ref} className="w-full bg-slate-900 py-6">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
  <h2 className="text-3xl md:text-4xl font-extrabold text-white">
    Des services digitaux qui soutiennent votre croissance
  </h2>
  <p className="text-slate-300 mt-3 max-w-2xl mx-auto">
    Des solutions claires et structurées pour transformer vos idées
    en produits numériques solides.
  </p>

  {/* <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {categories.map((cat) => (
      <Link key={cat.title} href={cat.href} className="rounded-lg bg-slate-800 p-4 border border-slate-700/40 hover:bg-slate-700 transition">
        <div className="flex items-start gap-3">
          <div className="text-2xl">{cat.emoji}</div>
          <div>
            <h3 className="text-white font-semibold">{cat.title}</h3>
            <p className="text-slate-300 text-sm mt-1">{cat.desc}</p>
          </div>
        </div>
      </Link>
    ))}
  </div> */}
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
                className={`service-card group bg-slate-900 p-4 rounded-xl border border-slate-700/40 shadow-lg hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-yellow-400/30 ${inView ? 'is-visible' : ''}`}
              >
                <div className="relative h-40 md:h-48 lg:h-56 mb-4 overflow-hidden rounded-md bg-slate-800">
                  {/* Utilisation de next/image avec centrage et zoom limité pour éviter le débordement */}
                  <Image
                    src={s.imageSrc}
                    alt={s.imageAlt}
                    fill                    style={{ objectPosition: s.objectPosition || 'center' }}                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03] group-focus:scale-[1.03] transform-gpu will-change-transform"
                  />
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl">💡</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{s.title}</h3>
                    <p className="text-slate-300 mt-2">{s.subtitle}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <a href="/contact" className="inline-block cta-animate bg-yellow-400 text-slate-900 font-bold px-6 py-3 rounded-full shadow hover:bg-yellow-300 transition">Discutons de votre projet</a>
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
