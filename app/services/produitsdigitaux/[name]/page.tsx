export const metadata = {
  title: 'Produit digital',
};

export default function ProduitPage({ params }: { params: { name: string } }) {
  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold mb-4">Produit: {params.name}</h1>
      <p className="text-slate-700">Page de démonstration pour le produit <strong>{params.name}</strong>. Détails, contenu, CTA pour acheter ou contacter.</p>
    </main>
  );
}
