import React from 'react';
import Navigation from '../components/Navigation';
import Horaires from '../components/home/Horaires';
import Don from '../components/home/Don';
import Carte from '../components/home/Carte';
import HomeActu from '../components/home/HomeActu';
import AccueilCure from '../components/home/AccueilCure';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="home">
      <Navigation />

      {/* Section de bienvenue */}
      <section className="hero">
        <h1>Bonneuil et son Eglise vous accueille !</h1>
      </section>

      <AccueilCure />
      <Horaires />
      <HomeActu />
      <Don />
      <Carte />
      <Footer />
    </div>
  );
};

export default Home;
