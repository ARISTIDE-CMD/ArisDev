"use client";

import { Code, Laptop, Wrench, BookOpen, Users, Target, Zap, Shield, CheckCircle2, Sparkles, TrendingUp } from "lucide-react";

export default function AboutSection() {
  const services = [
    {
      icon: BookOpen,
      title: "Accélération de Compétences",
      description: "Ne perdez plus de temps avec des tutoriels théoriques. Nous formons vos équipes (ou vous-même) sur des stacks modernes pour devenir opérationnel et rentable immédiatement.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Code,
      title: "Ingénierie de Solutions Web",
      description: "Nous ne développons pas juste des sites, nous créons des actifs numériques. Chaque ligne de code est pensée pour la performance, le SEO et la conversion de vos prospects.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Wrench,
      title: "Sérénité & Maintenance Pro",
      description: "Un site en panne est une perte d'argent. Nous assurons la surveillance, la mise à jour et la sécurisation constante de vos outils pour que vous restiez concentré sur votre cœur de métier.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Laptop,
      title: "Kits de Lancement Rapide",
      description: "Gagnez des mois de travail. Nos templates et produits digitaux premium vous permettent de déployer des solutions professionnelles en quelques jours au lieu de plusieurs mois.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Pragmatisme Business",
      description: "Nous privilégions l'efficacité réelle aux gadgets techniques inutiles."
    },
    {
      icon: Shield,
      title: "Sécurité Native",
      description: "La protection de vos données et de celles de vos clients est notre priorité absolue."
    },
    {
      icon: TrendingUp,
      title: "Scalabilité",
      description: "Nous construisons des solutions capables de grandir avec votre chiffre d'affaires."
    }
  ];

  const audience = [
    {
      title: "Étudiants & Débutants",
      description: "Acquérez des bases solides sans prérequis technique"
    },
    {
      title: "Porteurs de projets",
      description: "Structurez votre vision et donnez vie à vos idées"
    },
    {
      title: "Petites structures",
      description: "Bénéficiez de solutions pro sans la complexité"
    }
  ];

  const commitments = [
    { text: "L'efficacité", detail: "Des solutions qui vont droit au but" },
    { text: "La simplicité", detail: "Un langage clair et une prise en main facile" },
    { text: "L'honnêteté", detail: "Des conseils adaptés à vos besoins réels" }
  ];

  return (
    <section className="relative bg-slate-900 text-white overflow-hidden font-ubuntu">
      {/* Effets de fond */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 enter-fade">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-yellow-400 font-semibold text-sm tracking-wider uppercase bg-yellow-400/10 px-4 py-2 rounded-full border border-yellow-400/20">
              Pourquoi nous faire confiance ?
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 bg-clip-text text-transparent">
            ArisDev
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 font-light mb-6">
            L&apos;excellence technique au service de votre rentabilité
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Plus qu&apos;une agence, nous sommes votre **bras droit technologique**. Nous aidons les entreprises et les créateurs à briser le plafond de verre du numérique grâce à des solutions <span className="text-yellow-400 font-semibold">robustes, rapides et génératrices de valeur</span>.
          </p>
        </div>

        {/* Vision : Orientée Client */}
        <div className="mb-24">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-400">
              Notre Approche
            </h2>
            <p className="text-xl text-gray-300 mb-4 font-semibold">
              La technologie doit être un moteur de croissance, pas un frein.
            </p>
            <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Nous avons supprimé le jargon complexe pour nous concentrer sur l&apos;essentiel : **vos résultats**. Notre méthode repose sur une architecture solide et une transparence totale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-800/40 backdrop-blur-md p-8 rounded-2xl border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-yellow-400/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-400 group-hover:text-slate-900 transition-all">
                  <value.icon className="text-yellow-400 group-hover:text-inherit" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Services : Section "Focus Impact" */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">
              Ce que nous apportons à votre business
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-800/20 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/30 hover:bg-gray-800/40 transition-all duration-300 border-l-4 border-l-yellow-400"
              >
                <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-3">
                  <service.icon size={24} className="text-yellow-400" />
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Croissance & Preuve Sociale (Graphiques) */}
        <div className="mb-24 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-yellow-400">Impact & Performance</h2>
            <p className="text-gray-400">Pourquoi nos clients choisissent de rester avec nous.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* SVG de croissance - On le garde car c'est un excellent signal visuel */}
            <div className="bg-gray-800/40 p-8 rounded-2xl border border-gray-700/50">
              <h4 className="text-white font-bold mb-4">Progression des projets livrés</h4>
              {/* ... (SVG de courbe inchangé) ... */}
              <svg viewBox="0 0 600 160" className="w-full h-40">
                <path d="M 20 140 C 120 100, 220 80, 300 60 C 380 40, 480 30, 580 20" fill="none" stroke="rgba(250,204,21,0.08)" strokeWidth="12" strokeLinecap="round" />
                <path d="M 20 140 C 120 100, 220 80, 300 60 C 380 40, 480 30, 580 20" fill="none" stroke="url(#gradGrowth)" strokeWidth="4" />
              </svg>
              <p className="text-sm text-gray-500 mt-4 italic">Représentation de notre montée en charge et de notre capacité de livraison.</p>
            </div>

            {/* Diagrammes circulaires - Changement des labels pour plus d'impact */}
            <div className="flex gap-4 justify-center">
              {[
                { label: 'Taux de Satisfaction', pct: 88, note: 'Clients récurrents' },
                { label: 'Disponibilité App', pct: 90, note: 'Uptime garanti' },
                { label: 'Gain d\'Efficacité', pct: 65, note: 'Process automatisés' },
              ].map((d, i) => (
                <div key={i} className="text-center bg-gray-800/40 p-4 rounded-xl border border-gray-700/50 flex-1">
                  <svg className="w-16 h-16 mx-auto -rotate-90" viewBox="0 0 42 42">
                    <defs>
                      {/* Définition du dégradé à l'intérieur de chaque SVG pour être sûr qu'il soit trouvé */}
                      <linearGradient id={`grad-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#FACC15" />
                        <stop offset="100%" stopColor="#FDE68A" />
                      </linearGradient>
                    </defs>

                    {/* Cercle de fond (piste) */}
                    <circle
                      cx="21" cy="21" r="15.9155"
                      fill="transparent"
                      stroke="rgba(255,255,255,0.05)"
                      strokeWidth="3"
                    />

                    {/* Cercle de progression */}
                    <circle
                      cx="21" cy="21" r="15.9155"
                      fill="transparent"
                      stroke={`url(#grad-${i})`}
                      strokeWidth="3"
                      strokeDasharray="100"
                      strokeDashoffset={100 - d.pct}
                      strokeLinecap="round"
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>
                  <h4 className="text-xs font-bold mt-4 text-white uppercase">{d.label} <br/>{d.pct}%</h4>
                  <p className="text-[10px] text-yellow-400 font-bold">{d.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Final : Le passage à l'action */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-yellow-400/20 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Prêt à passer à l&apos;étape <span className="text-yellow-400">supérieure ?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10">
              Ne laissez pas la complexité technique freiner vos ambitions. Discutons de vos objectifs et voyons comment nous pouvons les atteindre ensemble.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/contact"
                className="bg-yellow-400 text-gray-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all shadow-xl shadow-yellow-400/10"
              >
                Démarrer une collaboration
              </a>
              <a
                href="/portfolio"
                className="border border-gray-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all"
              >
                Voir nos succès
              </a>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .enter-fade {
          opacity: 0;
          transform: translateY(8px);
          animation: fadeUp 1000ms cubic-bezier(.22,.9,.19,1) forwards;
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
    </section>
  );
}
