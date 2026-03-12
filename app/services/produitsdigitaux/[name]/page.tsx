export const metadata = {
  title: 'Produit digital',
};

type PageProps = {
  params: Promise<{ name: string }>;
};

export default async function ProduitPage({ params }: PageProps) {
  const { name } = await params;

  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold mb-4">Produit: {name}</h1>
      <p className="text-slate-700">
        Page de démonstration pour le produit <strong>{name}</strong>. Détails, contenu, CTA pour acheter ou contacter.
      </p>
    </main>
  );
}
