"use client";

import Link from 'next/link';


export default function MobilePage() {
  return (
    <main className="relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 bg-cover bg-top md:bg-center bg-fixed filter blur-sm md:blur-none saturate-110" style={{ backgroundImage: "url('/Delivery/applicationmobile.jpg')", backgroundRepeat: 'no-repeat' }} />
      <div className="absolute inset-0 bg-slate-900/70" />

      <div className="relative z-10 container mx-auto px-6 py-16 enter-fade">
        <header className="max-w-3xl mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">Applications mobiles — <span className="text-yellow-400">iOS & Android</span></h1>
          <p className="text-lg text-slate-300 leading-relaxed">Conception d’applications natives et cross-platform, optimisées pour l’usage réel et la performance.</p>
        </header>

        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Native & Cross-platform', text: 'React Native, Flutter, ou natif selon le besoin.' },
              { title: 'Performance', text: 'UX réactive, chargements rapides et optimisation mémoire.' },
              { title: 'Distribution', text: 'Déploiement App Store / Play Store et suivi des versions.' },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="text-lg font-semibold text-white mb-3 text-yellow-300">{item.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center max-w-xl mx-auto">
          <p className="text-slate-300 mb-8 text-lg">Vous souhaitez lancer une application mobile ?</p>
          <Link href="/contact" className="inline-flex cta-animate items-center justify-center px-7 py-3 rounded-lg bg-yellow-400 text-slate-900 font-semibold hover:bg-yellow-300 transition shadow-xl">Discutons du projet</Link>
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
