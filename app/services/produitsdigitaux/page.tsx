import Link from 'next/link';

export const metadata = {
  title: 'Produits digitaux',
  description: 'Produits prêts à l’emploi : templates, mini-SaaS, composants et démonstrateurs.',
};

const sampleProducts = [
  { id: 'template-marketing', title: 'Template marketing', desc: 'Landing page prête à l’emploi' },
  { id: 'starter-saas', title: 'Starter SaaS', desc: 'Boilerplate SaaS avec auth et facturation' },
];

export default function ProduitsDigitauxPage() {
  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">Produits digitaux</h1>
      <p className="text-slate-700 mb-6">Produits et kits pour accélérer vos projets.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {sampleProducts.map((p) => (
          <Link key={p.id} href={`/services/produitsdigitaux/${p.id}`} className="block p-4 bg-slate-100 rounded-md shadow">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-slate-600">{p.desc}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
