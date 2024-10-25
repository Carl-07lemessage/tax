// components/Footer.js
import { useEffect } from 'react';

const Footer = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      fadeElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-20 relative overflow-hidden font-poppins">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-green-400 animate-gradient-slide"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-pattern-cross"></div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-6 relative z-10">
        {/* Section 1 */}
        <div className="fade-in">
          <h3 className="text-teal-400 text-xl font-bold uppercase mb-4 relative pb-3 after:block after:w-12 after:h-0.5 after:bg-gradient-to-r after:from-teal-400 after:to-green-400">
            AutoPremium
          </h3>
          <p className="text-gray-300 mb-6">
            Découvrez l'excellence automobile avec AutoPremium. Notre flotte
            premium et notre service personnalisé vous garantissent une
            expérience de location exceptionnelle.
          </p>
          <div className="flex gap-4">
            {['facebook', 'twitter', 'instagram', 'linkedin'].map((social, index) => (
              <a
                key={index}
                href={`https://www.${social}.com/autopremium`}
                aria-label={social}
                className="w-10 h-10 rounded-full bg-teal-400/10 flex items-center justify-center border-2 border-transparent hover:bg-teal-400 hover:rotate-180 transition-all hover:border-teal-400 transform"
              >
                <i className={`fab fa-${social} text-teal-400 hover:text-white`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Section 2 */}
        <div className="fade-in">
          <h3 className="text-teal-400 text-xl font-bold uppercase mb-4 relative pb-3 after:block after:w-12 after:h-0.5 after:bg-gradient-to-r after:from-teal-400 after:to-green-400">
            Navigation
          </h3>
          <ul className="space-y-4">
            {['Nos Services', 'Notre Flotte', 'Réserver', 'Offres Spéciales', 'Blog Auto'].map((link, index) => (
              <li key={index} className="flex items-center">
                <i className="fas fa-chevron-right mr-3 text-teal-400"></i>
                <a
                  href={`https://example.com/${link.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-300 hover:text-teal-400 transition-transform transform hover:translate-x-2"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 3 */}
        <div className="fade-in">
          <h3 className="text-teal-400 text-xl font-bold uppercase mb-4 relative pb-3 after:block after:w-12 after:h-0.5 after:bg-gradient-to-r after:from-teal-400 after:to-green-400">
            Contact Direct
          </h3>
          {[
            { icon: 'map-marker-alt', text: '125 Avenue des Champs-Élysées, 75008 Paris' },
            { icon: 'phone-alt', text: '+33 1 23 45 67 89' },
            { icon: 'envelope', text: 'contact@autopremium.fr' },
            { icon: 'clock', text: '7j/7 - 8h00 à 20h00' },
          ].map((info, index) => (
            <div key={index} className="flex items-center mb-4 hover:bg-teal-400/10 p-2 rounded-lg transition-transform transform hover:translate-x-1">
              <i className={`fas fa-${info.icon} text-teal-400 mr-3`}></i>
              <span className="text-gray-300">{info.text}</span>
            </div>
          ))}
        </div>

        {/* Section 4 */}
        <div className="fade-in">
          <h3 className="text-teal-400 text-xl font-bold uppercase mb-4 relative pb-3 after:block after:w-12 after:h-0.5 after:bg-gradient-to-r after:from-teal-400 after:to-green-400">
            Newsletter VIP
          </h3>
          <p className="text-gray-300 mb-6">
            Rejoignez notre club VIP et bénéficiez d'offres exclusives, de
            réductions spéciales et d'avant-premières sur nos nouveaux modèles.
          </p>
          <form className="relative">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="w-full p-4 rounded-full bg-gray-900/50 border-2 border-teal-400/30 placeholder-gray-500 text-white outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400"
            />
            <button
              type="submit"
              className="absolute right-2 top-2 bg-gradient-to-r from-teal-400 to-green-400 py-2 px-6 rounded-full text-white font-bold hover:-translate-x-1 transition-transform"
            >
              Rejoindre
            </button>
          </form>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-12 border-t border-white/10 py-4">
        &copy; 2024 AutoPremium | Tous droits réservés |{' '}
        <a href="https://example.com/mentions-legales" className="text-teal-400 hover:underline">
          Mentions légales
        </a>{' '}
        |{' '}
        <a href="https://example.com/confidentialite" className="text-teal-400 hover:underline">
          Politique de confidentialité
        </a>
      </div>
    </footer>
  );
};

export default Footer;
