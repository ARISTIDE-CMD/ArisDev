"use client";

import App from "@/components/Abonner";

export default function Abonner() {
  return (
    <section className="bg-slate-900 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Abonnez-vous à notre newsletter
        </h2>
        <p className="text-slate-300 mb-8">
          Restez informé des dernières nouvelles et offres exclusives.
        </p>
        <div className="max-w-md mx-auto">
          <App />
        </div>
      </div>
    </section>
  );
}