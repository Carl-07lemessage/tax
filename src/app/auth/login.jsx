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
    <form onSubmit={handleLogin}>
      <input 
        type="text" 
        placeholder="Nom d'utilisateur" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Mot de passe" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button type="submit">Se connecter</button>
    </form>
  );
};

export default Login;
