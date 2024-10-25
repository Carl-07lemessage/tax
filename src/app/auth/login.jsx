// pages/login.js
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useAuth();
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/login', { username, password });
      const { token, user } = response.data;

      // Stockez le token et les informations utilisateur
      localStorage.setItem('token', token);
      setUser(user);

      // Redirigez vers le bon profil selon le rôle
      switch (user.role) {
        case 'admin':
          router.push('/admin/dashboard');
          break;
        case 'driver':
          router.push('/driver/dashboard');
          break;
        case 'user':
          router.push('/user/dashboard');
          break;
        default:
          router.push('/');
      }
    } catch (error) {
      console.error('Erreur de connexion', error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-green-400 to-teal-500 animate-gradient">
      <div className="w-full max-w-md p-6 transition-all duration-500 ease-out transform translate-y-0 bg-white/95 backdrop-blur-md rounded-3xl shadow-xl">
        <div className="mx-auto my-5 flex h-24 w-24 items-center justify-center bg-gradient-to-r from-green-400 to-teal-500 rounded-3xl shadow-xl transition-transform transform-gpu hover:scale-105 hover:rotate-0 rotate-[-5deg]">
          {/* Logo or SVG */}
          <svg width="50" height="50" viewBox="0 0 24 24" fill="#ffffff">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
        </div>

        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-blue-500">
            AutoLoc Premium
          </h1>
          <p className="text-sm text-gray-500">Votre prochaine aventure commence ici</p>
        </div>

        <div className="flex mb-8 border-b-2 border-gray-100">
          <button
            className={`flex-1 py-3 text-center text-sm font-medium ${
              activeTab === "signup" ? "text-green-400 font-semibold border-b-2 border-green-400" : "text-gray-500"
            }`}
            onClick={() => switchTab("signup")}
          >
            S'inscrire
          </button>
          <button
            className={`flex-1 py-3 text-center text-sm font-medium ${
              activeTab === "signin" ? "text-green-400 font-semibold border-b-2 border-green-400" : "text-gray-500"
            }`}
            onClick={() => switchTab("signin")}
          >
            Se connecter
          </button>
        </div>

        {/* Formulaire d'inscription */}
        {activeTab === "signup" && (
          <form onSubmit={handleSignup} className="transition-all">
            <div className="mb-4 relative">
              <i className="fas fa-envelope absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              <input
                type="email"
                placeholder="Votre email"
                className="w-full pl-10 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-200"
                required
              />
            </div>

            <div className="mb-4 flex gap-2">
              <div className="flex items-center pl-4 pr-6 py-3 bg-white border border-gray-200 rounded-lg cursor-pointer hover:border-green-400">
                <span className="mr-2">🇫🇷</span>+33
              </div>
              <input
                type="tel"
                placeholder="Votre mobile"
                className="w-full pl-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-200"
                required
              />
            </div>

            <button type="submit" className="w-full py-3 rounded-lg bg-green-400 text-white font-semibold hover:bg-green-500 transition-all">
              Commencer l'aventure
            </button>
          </form>
        )}

        {/* Formulaire de connexion */}
        {activeTab === "signin" && (
          <form onSubmit={handleSignin} className="transition-all">
            <div className="mb-4 relative">
              <i className="fas fa-envelope absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              <input
                type="email"
                placeholder="Votre email"
                className="w-full pl-10 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-200"
                required
              />
            </div>

            <button type="submit" className="w-full py-3 rounded-lg bg-green-400 text-white font-semibold hover:bg-green-500 transition-all">
              Se connecter
            </button>
          </form>
        )}

        <p className="text-center text-xs text-gray-500 mt-4">
          En continuant, vous acceptez nos{" "}
          <a href="#" className="text-green-400 hover:underline">
            Conditions d'utilisation
          </a>{" "}
          et notre{" "}
          <a href="#" className="text-green-400 hover:underline">
            Politique de confidentialité
          </a>.
        </p>
      </div>
    </div>
  );
}

export default Login;
