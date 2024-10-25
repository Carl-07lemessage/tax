import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header className="relative h-screen bg-gradient-to-r from-teal-400 to-emerald-500 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto p-5 text-white">
        <nav className="flex justify-between items-center py-5">
          <div className="text-2xl font-bold tracking-wide">AutoPremium</div>
          <div className="md:hidden cursor-pointer z-20" onClick={toggleNav}>
            <div className={`w-6 h-0.5 bg-white my-1 transition-transform ${navOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white my-1 transition-opacity ${navOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white my-1 transition-transform ${navOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
          </div>
          <div className={`fixed md:static top-0 right-0 h-screen md:h-auto w-full md:w-auto bg-teal-500 md:bg-transparent md:flex md:items-center justify-center transition-transform ${navOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}`}>
            <div className="flex flex-col md:flex-row md:gap-8 gap-10 items-center justify-center text-lg">
              <Link href="/accueil" className="text-white md:hover:bg-white md:hover:text-teal-500 px-4 py-2 rounded-md transition-all">
                Accueil
              </Link>
              <Link href="/vehicules" className="text-white md:hover:bg-white md:hover:text-teal-500 px-4 py-2 rounded-md transition-all">
                Nos Véhicules
              </Link>
              <Link href="/tarifs" className="text-white md:hover:bg-white md:hover:text-teal-500 px-4 py-2 rounded-md transition-all">
                Tarifs
              </Link>
              <Link href="/contact" className="text-white md:hover:bg-white md:hover:text-teal-500 px-4 py-2 rounded-md transition-all">
                Contact
              </Link>
            </div>
          </div>
        </nav>

        <div className="flex flex-col md:flex-row items-center justify-between py-10">
          <div className="text-center md:text-left space-y-5 max-w-lg">
            <h1 className="text-4xl md:text-6xl font-bold">Votre Voyage, Notre Excellence</h1>
            <p className="text-lg opacity-90">Découvrez notre collection exclusive de véhicules premium. Une expérience de location haut de gamme adaptée à vos besoins.</p>
            <div className="flex flex-col md:flex-row gap-5 justify-center md:justify-start">
              <Link href="/reserver" className="bg-white text-teal-500 py-3 px-6 rounded-full font-semibold shadow-lg hover:bg-teal-100 transition">
                Réserver maintenant
              </Link>
              <Link href="/decouvrir" className="bg-white bg-opacity-20 text-white py-3 px-6 rounded-full font-semibold hover:bg-opacity-40 transition">
                En savoir plus
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-around mt-10 bg-white bg-opacity-10 p-5 rounded-lg backdrop-blur-sm">
          <StatItem number="150+" label="Véhicules disponibles" />
          <StatItem number="50K+" label="Clients satisfaits" />
          <StatItem number="15+" label="Années d'expérience" />
          <StatItem number="24/7" label="Support client" />
        </div>
      </div>
    </header>
  );
}

function StatItem({ number, label }) {
  return (
    <div className="text-center p-3">
      <div className="text-3xl font-bold">{number}</div>
      <div className="text-sm">{label}</div>
    </div>
  );
}
