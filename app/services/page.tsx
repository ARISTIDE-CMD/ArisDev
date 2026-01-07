import AllServices from '../../components/allservices';

export const metadata = {
  title: 'services',
  description: 'Mes services digitaux : création d’applications, sites, mobile, automatisation, performance et sécurité.',
};

export default function ServicesPage() {
  return (
    <main>
      {/* <div className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-extrabold mb-6">Services</h1>
        <p className="text-slate-600 mb-8">Découvrez nos offres principales et cliquez pour en savoir plus.</p>
      </div> */}
      <AllServices />
    </main>
  );
}
