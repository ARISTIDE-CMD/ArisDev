export const metadata = {
  title: 'Maintenance',
  description: 'Support, mises à jour, monitoring et sécurité pour vos produits numériques.',
};

export default function MaintenancePage() {
  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">Maintenance</h1>
      <p className="text-slate-700 mb-6">Assurez la continuité et la sécurité de vos services : monitoring, patches, sauvegardes et interventions réactives.</p>
      <ul className="list-disc ml-6 text-slate-700">
        <li>Contrat de support & SLA</li>
        <li>Mises à jour régulières</li>
        <li>Supervision et alerting</li>
      </ul>
    </main>
  );
}
