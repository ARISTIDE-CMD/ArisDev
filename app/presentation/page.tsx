"use client";

import { Code, Laptop, Wrench, BookOpen, Users, Target, Zap, Shield, CheckCircle2, Sparkles } from "lucide-react";

export default function AboutSection() {
  const services = [
    {
      icon: BookOpen,
      title: "Formation",
      description: "Maîtrisez le développement Web et Mobile par la pratique. Du débutant à l'autonomie, nous transmettons un savoir-faire opérationnel avec des projets concrets pour votre portfolio.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Code,
      title: "Développement",
      description: "Transformez vos idées en réalité avec des solutions sur mesure. Sites vitrines, plateformes web et applications mobiles conçus pour être intuitifs et performants.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Wrench,
      title: "Maintenance",
      description: "Optimisez et protégez vos outils informatiques. Diagnostic, mise à jour et prévention des pannes pour garantir la pérennité de votre parc technologique.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Laptop,
      title: "Produits Digitaux",
      description: "Accélérez votre apprentissage avec nos ressources pédagogiques : formations en ligne, templates prêts à l'emploi et guides simplifiés pour concepts complexes.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "L'apprentissage rigoureux",
      description: "Maîtriser les bases pour mieux innover"
    },
    {
      icon: Shield,
      title: "La fiabilité",
      description: "Utiliser des outils éprouvés et performants"
    },
    {
      icon: Sparkles,
      title: "La durabilité",
      description: "Construire des solutions qui durent et évoluent"
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
    <section className="relative bg-slate-900 from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Effets de fond */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 enter-fade">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-yellow-400 font-semibold text-sm tracking-wider uppercase bg-yellow-400/10 px-4 py-2 rounded-full border border-yellow-400/20">
              Qui sommes-nous ?
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 bg-clip-text text-transparent">
            ArisDev
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 font-light mb-6">
            Votre partenaire de croissance numérique
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Une structure agile entièrement dédiée à l'univers de la Tech. Notre ambition est claire : 
            démocratiser l'accès au numérique en proposant des services <span className="text-yellow-400 font-semibold">transparents, utiles et accessibles à tous</span>.
          </p>
        </div>

        {/* Vision */}
        <div className="mb-24">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-400">
              Notre Vision
            </h2>
            <p className="text-xl text-gray-300 mb-4">
              Le numérique au service de l'humain, sans complexité
            </p>
            <p className="text-gray-400 leading-relaxed">
              Nous sommes convaincus que la technologie ne doit pas être un obstacle, mais un levier. 
              Notre vision repose sur trois piliers fondamentaux pour bâtir l'avenir.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-800/40 backdrop-blur-md p-8 rounded-2xl border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-yellow-400/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-400/20 transition-colors">
                  <value.icon className="text-yellow-400" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {value.title}
                </h3>
                <p className="text-gray-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">
              Nos Domaines d'Expertise
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Une offre transversale pour couvrir tous vos besoins numériques
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-800/40 backdrop-blur-md p-8 rounded-2xl hover:border-gray-600 transition-all duration-300 group"
              >
                {/* <div className={`w-16 h-16 bg-gradient-to-br ${service.color} bg-opacity-10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="text-white" size={32} />
                </div> */}
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Audience */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">
              À Qui S'adresse ArisDev ?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Le numérique accessible, sans barrière technique
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
            {audience.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-md p-6 rounded-xl border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300"
              >
                <div className="flex items-center mb-3">
                  <Users className="text-yellow-400 mr-3" size={24} />
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto bg-yellow-400/10 border border-yellow-400/30 rounded-xl p-6 text-center">
            <p className="text-yellow-400 font-medium">
              <Zap className="inline mr-2" size={20} />
              Aucun prérequis technique n'est exigé. Votre motivation est notre seul critère.
            </p>
          </div>
        </div>

        {/* Engagement */}
        <div className="mb-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">
                Notre Engagement
              </h2>
              <p className="text-xl text-gray-300 mb-2">
                La clarté avant tout
              </p>
              <p className="text-gray-400">
                Chez ArisDev, nous bannissons le jargon inutile et les fausses promesses. 
                Nous misons sur une approche pragmatique et transparente.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {commitments.map((commitment, index) => (
                <div
                  key={index}
                  className="bg-gray-800/40 backdrop-blur-md p-6 rounded-xl border border-gray-700/50 text-center"
                >
                  <CheckCircle2 className="text-green-400 mx-auto mb-4" size={32} />
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {commitment.text}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {commitment.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Croissance & Diagrammes */}
        <div className="mb-24 max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-yellow-400">Croissance & Indicateurs</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Visualisation synthétique de notre progression et de nos forces : courbe de croissance et diagrammes circulaires explicatifs.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Courbe de croissance */}
            <div className="bg-gray-800/40 p-6 rounded-2xl border border-gray-700/50">
              <svg viewBox="0 0 600 160" className="w-full h-40" role="img" aria-label="Courbe de croissance">
                <defs>
                  <linearGradient id="gradGrowth" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FACC15" />
                    <stop offset="100%" stopColor="#FDE68A" />
                  </linearGradient>
                </defs>

                {/* subtle background stroke */}
                <path d="M 20 140 C 120 100, 220 80, 300 60 C 380 40, 480 30, 580 20" fill="none" stroke="rgba(250,204,21,0.08)" strokeWidth="12" strokeLinecap="round" />

                {/* colored curve */}
                <path d="M 20 140 C 120 100, 220 80, 300 60 C 380 40, 480 30, 580 20" fill="none" stroke="url(#gradGrowth)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

                {/* milestones */}
                <circle cx="60" cy="123" r="4" fill="#FDE68A" />
                <circle cx="220" cy="95" r="4" fill="#FDE68A" />
                <circle cx="420" cy="65" r="4" fill="#FDE68A" />
                <circle cx="560" cy="38" r="4" fill="#FDE68A" />
              </svg>

              <div className="mt-4 text-gray-300">
                <p>Notre trajectoire : augmentation des projets signés, nouvelles formations lancées et produits publiés.</p>
              </div>
            </div>

            {/* Diagrammes circulaires */}
            <div className="flex gap-2 md:gap-6 justify-center lg:justify-end">
              {[
                { label: 'Croissance', pct: 78, note: '+78% projets' },
                { label: 'Formations', pct: 72, note: '72 sessions' },
                { label: 'Produits', pct: 64, note: 'Kits & Templates' },
              ].map((d, i) => (
                <div key={i} className="text-center bg-gray-800/40 p-6 rounded-2xl border border-gray-700/50 w-30 md:w-30">
                  <svg className="w-20 h-20 mx-auto" viewBox="0 0 42 42" role="img" aria-label={`${d.label} ${d.pct} percent`}>
                    <defs>
                      <linearGradient id={`g${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#FACC15" />
                        <stop offset="100%" stopColor="#FDE68A" />
                      </linearGradient>
                    </defs>
                    <circle cx="21" cy="21" r="15.9155" fill="transparent" strokeWidth="4" stroke="rgba(255,255,255,0.06)" />
                    <circle cx="21" cy="21" r="15.9155" fill="transparent" strokeWidth="4" strokeDasharray="100" strokeDashoffset={`${100 - d.pct}`} strokeLinecap="round" stroke={`url(#g${i})`} />
                  </svg>
                  <h4 className="text-white font-semibold mt-4">{d.label}</h4>
                  <p className="text-gray-400 text-sm">{d.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Futur */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-yellow-400/10 via-yellow-400/5 to-yellow-400/10 border border-yellow-400/30 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-400">
              Un Futur en Construction
            </h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              ArisDev, une structure qui grandit avec vous
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Chaque collaboration est une pierre ajoutée à notre édifice. Nous sommes dans une démarche 
              d'amélioration constante pour devenir votre <span className="text-yellow-400 font-semibold">référence de confiance</span> dans 
              le paysage numérique. Rejoindre ArisDev, c'est participer à une aventure technologique en pleine ascension.
            </p>
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-8 py-4 rounded-xl font-semibold hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 shadow-lg shadow-yellow-400/20 hover:shadow-yellow-400/40"
            >
              Travaillons Ensemble
            </a>
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