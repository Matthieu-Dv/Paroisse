import React from 'react';
import Navigation from '../components/Navigation';
import { useNavigate } from 'react-router-dom';

const Sacrements = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <Navigation />
      dvd
      <button onClick={() => navigate('/login')}>Se connecter</button>
    </div>
  );
};

export default Sacrements;
