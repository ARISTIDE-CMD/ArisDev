"use client";

import Link from 'next/link';

export default function DeveloppementPage() {
  return (
    <main className="relative overflow-hidden ">
      {/* Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-top md:bg-center bg-fixed filter blur-sm md:blur-none saturate-110 scale-100 md:scale-105"
        style={{ backgroundImage: "url('/Delivery/backgroundev.png')", backgroundRepeat: 'no-repeat' }}
      />
      <div className="absolute inset-0 bg-slate-900/70" />

      <div className="relative z-10 container mx-auto px-6 py-16 enter-fade">
        {/* Hero */}
        <header className="max-w-3xl mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Développement de solutions
            <span className="text-yellow-400"> numériques solides</span>
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Nous conçevons et développons des applications web et mobiles
            structurées, performantes et maintenables, avec une approche
            orientée architecture et évolution à long terme.
          </p>
        </header>

        {/* Valeur ajoutée */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Architecture solide',
                text:
                  'Des fondations techniques claires pour garantir stabilité, performance et évolutivité.',
              },
              {
                title: 'Code maintenable',
                text:
                  'Un développement lisible et structuré pour faciliter la maintenance et les évolutions futures.',
              },
              {
                title: 'Vision long terme',
                text:
                  'Chaque projet est pensé comme un système capable de grandir avec vos besoins.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-"
              >
                <h3 className="text-lg font-semibold text-white mb-3 text-yellow-300">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">
            Domaines d’intervention
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                title: 'Développement Web',
                desc:
                  'Sites professionnels, plateformes web et applications métiers performantes et fiables.',
                href: '/services/developpement/web',
              },
              {
                title: 'Développement Mobile',
                desc:
                  'Applications Android et iOS modernes, pensées pour une utilisation réelle.',
                href: '/services/developpement/mobile',
              },
              {
                title: 'Design d’interface',
                desc:
                  'Interfaces claires et fonctionnelles, orientées expérience utilisateur.',
                href: '/services/developpement/design',
              },
            ].map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group relative flex flex-col justify-between p-8 rounded-xl bg-slate-800/80 backdrop-blur border border-slate-700 hover:border-yellow-400 transition"
              >
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-yellow-400 transition">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-yellow-400">
                  Découvrir →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center max-w-xl mx-auto">
          <p className="text-slate-300 mb-8 text-lg">
            Vous avez un projet ou une idée à structurer ?
          </p>
          <Link
            href="/contact"
            className="inline-flex cta-animate items-center justify-center px-7 py-3 rounded-lg bg-yellow-400 text-slate-900 font-semibold hover:bg-yellow-300 transition shadow-xl"
          >
            Discutons de votre projet
          </Link>
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
