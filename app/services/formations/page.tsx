export const metadata = {
  title: 'Formations',
  description: 'Ateliers et formations sur-mesure en développement et product design.',
};

export default function FormationsPage() {
  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">Formations</h1>
      <p className="text-slate-700 mb-6">Ateliers et parcours sur-mesure : React, Next.js, bonnes pratiques, tests et déploiement.</p>
      <ul className="list-disc ml-6 text-slate-700">
        <li>Atelier React / Next.js — 1 journée</li>
        <li>Bonnes pratiques & tests — 1/2 journée</li>
        <li>Formation approfondie sur mesure — sur devis</li>
      </ul>
    </main>
  );
}
