// components/LocationPremium.js

import React from "react";
import Header from "./components/Header";

const home = () => {
  return (
    <div className="max-w-md mx-auto p-5">
      <div className="flex items-center justify-between h-11 py-3 px-5 text-black">
        
      </div>
      <Header/>

      <div className="text-center my-5 relative">
        <div className="relative rounded-3xl overflow-hidden shadow-lg bg-gradient-to-br from-[#4CE5B1] to-[#3CCEA0] transition-transform duration-300 transform hover:translate-y-[-5px]">
          <div className="absolute bottom-0 w-full h-[150px] bg-cover bg-no-repeat" style={{ backgroundImage: "url('/path/to/your/city-skyline-image.svg')" }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-float">
            <div className="bg-white p-6 rounded-2xl shadow-xl">
              {/* SVG for Car */}
              <svg width="80" height="80" viewBox="0 0 24 24" fill="#4CE5B1">
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-5h14v5z" />
              </svg>
            </div>
          </div>
          <div className="absolute top-5 right-5 flex items-center gap-1 bg-white bg-opacity-90 px-4 py-1 rounded-full font-semibold text-sm text-gray-900">
            <svg width="16" height="16" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="#f1c40f" />
            </svg>
            4.9
          </div>
        </div>
      </div>

      <div className="text-center my-8">
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-gray-800 to-[#4CE5B1]">Location Premium</h1>
        <p className="text-gray-500 text-base mt-4 leading-relaxed">Découvrez notre sélection de véhicules haut de gamme pour une expérience de conduite exceptionnelle.</p>
      </div>

      <div className="grid grid-cols-2 gap-4 my-8">
        {[
        ].map((feature, index) => (
          <div key={index} className="flex items-center gap-3 p-5 bg-white rounded-2xl shadow-lg hover:translate-y-[-3px] transition-transform duration-300">
            <div className="bg-[#f0fff9] p-3 rounded-xl">
              {/* Feature Icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#4CE5B1">
                {/* Example Path: Adjust based on your feature */}
                <path d="M12 2L7.46 7.46 12 13l4.54-5.54L12 2z" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* <button href="" className="flex items-center justify-center gap-3 bg-gradient-to-br from-[#4CE5B1] to-[#3CCEA0] py-4 px-8 rounded-2xl shadow-xl text-white font-semibold text-lg w-full transition-transform duration-300 hover:translate-y-[-3px]">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3A8.994 8.994 0 0013 2.06V1h-2v1.06A8.994 8.994 0 003.06 11H2v2h1.06A8.994 8.994 0 0011 21.94V23h2v-1.06A8.994 8.994 0 0020.94 13H22v-2h-1.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" />
        </svg>
        Commencer
      </button> */}

      <div className="text-center mt-8">
        <a href="" className="inline-block text-[#4CE5B1] font-semibold text-base transition-colors duration-300 hover:bg-[#4CE5B1] hover:text-white bg-[#f0fff9] px-5 py-2 rounded-xl">
          Commencer
        </a>
      </div>
    </div>
  );
};

export default home;
