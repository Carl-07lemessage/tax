// components/AutoLoc.js
import { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const Accueil = () => {
  const [map, setMap] = useState(null);
  const [currentMarker, setCurrentMarker] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredQuartiers, setFilteredQuartiers] = useState([]);
  const [routeLine, setRouteLine] = useState(null);
  const [quartiersData] = useState({
    Lalala: [0.4162, 9.4673],
    'Nzeng-Ayong': [0.4235, 9.4721],
    Akébé: [0.4052, 9.4589],
    Louis: [0.4183, 9.4532],
    Glass: [0.4012, 9.4498],
    Oloumi: [0.4123, 9.4678],
    PK5: [0.4267, 9.4812],
    PK8: [0.4352, 9.4923],
    PK11: [0.4423, 9.5034]
  });
  const [taxisData] = useState([
    { id: 1, driver: 'Ndong Marc', position: [0.4182, 9.4693] },
    { id: 2, driver: 'Pierre Ndong', position: [0.4142, 9.4653] },
    { id: 3, driver: 'Marie Obiang', position: [0.4172, 9.4583] },
    { id: 4, driver: 'Paul Mba', position: [0.4202, 9.4723] },
    { id: 5, driver: 'Sophie Ondo', position: [0.4132, 9.4613] }
  ]);

  useEffect(() => {
    const mapInstance = L.map('map').setView([0.4162, 9.4673], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(mapInstance);

    L.marker([0.4162, 9.4673], {
      icon: L.divIcon({
        className: 'current-location-marker',
        html: `<div class="bg-green-500 w-4 h-4 rounded-full border-4 border-white shadow-md"></div>`
      })
    }).addTo(mapInstance);

    setMap(mapInstance);
    updateNearbyTaxis([0.4162, 9.4673], mapInstance);
  }, []);

  const updateNearbyTaxis = (currentLocation, mapInstance) => {
    taxisData.forEach(taxi => {
      L.marker(taxi.position, {
        icon: L.divIcon({
          className: 'taxi-marker',
          html: `<div class="bg-yellow-400 w-3 h-3 rounded-full border-2 border-white shadow-md"></div>`
        })
      }).addTo(mapInstance);
    });
  };

  const updateMap = async (quartier, coords) => {
    if (currentMarker) {
      map.removeLayer(currentMarker);
    }
    const newMarker = L.marker(coords).addTo(map);
    setCurrentMarker(newMarker);
    map.setView(coords, 15);

    // Simulated route calculation logic can be inserted here if necessary
  };

  const handleSearchInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const matches = Object.keys(quartiersData).filter(q => q.toLowerCase().includes(value));
    setFilteredQuartiers(matches);
  };

  return (
    <div className="relative min-h-screen bg-gray-100">
      <header className="p-5 bg-gradient-to-r from-green-500 to-green-400 shadow-md flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:scale-110 transition-transform">
          <i className="fas fa-user text-white text-2xl"></i>
        </div>
      </header>

      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-11/12 max-w-lg z-50">
        <div className="relative">
          <input
            type="text"
            className="w-full p-3 rounded-full shadow-md focus:shadow-lg transition-all"
            placeholder="Rechercher un quartier..."
            value={searchTerm}
            onChange={handleSearchInputChange}
          />
          {filteredQuartiers.length > 0 && (
            <div className="absolute top-full left-0 w-full bg-white rounded-lg shadow-md mt-2 overflow-y-auto max-h-60">
              {filteredQuartiers.map((quartier) => (
                <div
                  key={quartier}
                  className="p-3 hover:bg-gray-100 cursor-pointer"
                  onClick={() => updateMap(quartier, quartiersData[quartier])}
                >
                  {quartier}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="w-full h-60vh mt-4">
        <div id="map" className="w-full h-full rounded-lg"></div>
      </div>

      <div className="p-6 bg-white rounded-t-3xl shadow-lg mt-4">
        <div className="flex items-center gap-4 mb-4 p-4 bg-gray-100 rounded-lg">
          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-400 rounded-lg flex items-center justify-center">
            <i className="fas fa-map-marker-alt text-white text-xl"></i>
          </div>
          <div className="flex-1">
            <div className="text-gray-500 text-sm font-medium">POINT DE DÉPART</div>
            <div className="font-semibold text-lg">Ma position actuelle</div>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-4 p-4 bg-gray-100 rounded-lg">
          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-400 rounded-lg flex items-center justify-center">
            <i className="fas fa-map-pin text-white text-xl"></i>
          </div>
          <div className="flex-1">
            <div className="text-gray-500 text-sm font-medium">DESTINATION</div>
            <div className="font-semibold text-lg">Sélectionnez un quartier</div>
          </div>
        </div>

        <div className="flex gap-3 overflow-x-auto py-3 scrollbar-hide">
          {Object.keys(quartiersData).map((quartier) => (
            <button
              key={quartier}
              className="bg-gradient-to-r from-green-500 to-green-400 text-white font-medium px-5 py-2 rounded-full hover:scale-105 transition-transform"
              onClick={() => updateMap(quartier, quartiersData[quartier])}
            >
              {quartier}
            </button>
          ))}
        </div>

        <button className="w-full mt-6 p-4 bg-gradient-to-r from-green-500 to-green-400 text-white font-semibold rounded-lg flex items-center justify-center gap-3 shadow-md hover:shadow-lg transition-shadow">
          <i className="fas fa-credit-card text-lg"></i> Payer la course
        </button>
      </div>
    </div>
  );
};

export default Accueil;
