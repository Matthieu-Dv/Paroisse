import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Importer useNavigate
import { login } from '../components/Auth';
import { NavLink } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // ✅ Initialisation de la navigation

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await login(email, password);
      navigate('/admin'); // ✅ Redirige vers /admin SANS recharger la page
    } catch (err) {
      console.error('Erreur lors de la connexion :', err);
      setError('Email ou mot de passe incorrect.');
    }
  };

  return (
    <div>
      <h2>Connexion</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Se connecter</button>
      </form>
      <NavLink to="/">Retourner à la page d'accueil</NavLink>
    </div>
  );
};

export default Login;
