import React from 'react';
import Navigation from '../components/Navigation';
import { useNavigate } from 'react-router-dom';

const Actualites = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navigation />
      <button onClick={() => navigate('/login')}>Se connecter</button>
    </div>
  );
};

export default Actualites;
