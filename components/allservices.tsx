"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
    { 
        title: 'Développement', 
        desc: 'Web, mobile, design', 
        href: '/services/developpement', 
        image: '/Delivery/web_design.jpeg' 
    },
    { 
        title: 'Produits digitaux', 
        desc: 'Templates & kits', 
        href: '/services/produitsdigitaux', 
        image: '/Delivery/app_stock.jpeg' 
    },
    { 
        title: 'Maintenance', 
        desc: 'Monitoring & sécurité', 
        href: '/services/maintenance', 
        image: '/Delivery/Custom DevOps for Your Business.jpeg' 
    },
    { 
        title: 'Formations', 
        desc: 'Ateliers & coaching', 
        href: '/services/formations', 
        image: '/Delivery/Gérer des projets complexes avec Microsoft Planner.jpeg' 
    },
];

// Composant Header
// const Header = () => {
//     return (
//         <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md shadow-lg">
//             <nav className="container mx-auto px-6 py-4">
//                 <div className="flex items-center justify-between">
//                     <Link href="/" className="text-2xl font-extrabold text-yellow-400">
//                         Digital Solutions
//                     </Link>
//                     <ul className="flex gap-8">
//                         <li><Link href="/" className="text-slate-200 hover:text-yellow-400 transition-colors font-medium">Accueil</Link></li>
//                         <li><Link href="/services" className="text-slate-200 hover:text-yellow-400 transition-colors font-medium">Services</Link></li>
//                         <li><Link href="/portfolio" className="text-slate-200 hover:text-yellow-400 transition-colors font-medium">Portfolio</Link></li>
//                         <li><Link href="/contact" className="text-slate-200 hover:text-yellow-400 transition-colors font-medium">Contact</Link></li>
//                     </ul>
//                 </div>
//             </nav>
//         </header>
//     );
// };

// Composant principal de la page
export default function ServicesPage() {
    const cardsRef = React.useRef<(HTMLElement | null)[]>([]);
    const [visibleCards, setVisibleCards] = React.useState<Set<number>>(new Set());

    React.useEffect(() => {
        const observers = cardsRef.current.map((card, index) => {
            if (!card) return null;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setVisibleCards(prev => new Set(prev).add(index));
                            observer.disconnect();
                        }
                    });
                },
                { threshold: 0.15 }
            );

            observer.observe(card);
            return observer;
        });

        return () => {
            observers.forEach(observer => observer?.disconnect());
        };
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            {/* <Header /> */}
            
            <main className="container mx-auto px-6 py-6">
                {/* Hero Section */}
                <section className="text-center mb-16 animate-fade-in-down">
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                        Ce que nous construisons
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Des solutions numériques solides, conçues avec méthode et passion pour transformer vos idées en réalité.
                    </p>
                </section>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {categories.map((cat, index) => (
                        <article
                            key={cat.title}
                            ref={(el) => { cardsRef.current[index] = el; }}
                            className={`group relative rounded-2xl overflow-hidden h-80 bg-slate-800 shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                                visibleCards.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                            style={{ 
                                transitionDelay: visibleCards.has(index) ? `${index * 120}ms` : '0ms' 
                            }}
                        >
                            {/* Image de fond */}
                            <div className="absolute inset-0">
                                <Image 
                                    src={cat.image} 
                                    alt={cat.title} 
                                    fill 
                                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                            </div>

                            {/* Contenu */}
                            <div className="relative z-10 flex flex-col justify-between h-full p-6">
                                <div>
                                    <h3 className="text-white text-2xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">
                                        {cat.title}
                                    </h3>
                                    <p className="text-slate-200 text-base text-yellow-500">
                                        {cat.desc}
                                    </p>
                                </div>

                                <div className="flex justify-end">
                                    <Link 
                                        href={cat.href} 
                                        className="inline-flex items-center gap-2 bg-yellow-400 text-slate-900 font-bold px-5 py-2.5 rounded-xl shadow-lg hover:bg-yellow-300 hover:shadow-yellow-400/50 transition-all hover:gap-3"
                                    >
                                        Voir
                                        <span className="text-lg">+</span>
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* CTA Section */}
                <section className="text-center mt-16 animate-fade-in">
                    <Link 
                        href="/contact" 
                        className="inline-block bg-yellow-400 text-slate-900 font-extrabold text-lg px-10 py-4 rounded-lg shadow-2xl hover:bg-yellow-300 hover:shadow-yellow-400/50 transition-all hover:-translate-y-1"
                    >
                        Discutons de votre projet
                    </Link>
                </section>
            </main>

            <style jsx>{`
                @keyframes fade-in-down {
                    from {
                        opacity: 0;
                        transform: translateY(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fade-in {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                .animate-fade-in-down {
                    animation: fade-in-down 0.8s ease-out;
                }

                .animate-fade-in {
                    animation: fade-in 1s ease-out 0.3s backwards;
                }

                @media (prefers-reduced-motion: reduce) {
                    .animate-fade-in-down,
                    .animate-fade-in {
                        animation: none;
                    }
                    
                    article {
                        opacity: 1 !important;
                        transform: none !important;
                    }
                }
            `}</style>
        </div>
    );
}