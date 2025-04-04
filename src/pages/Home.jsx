import React from 'react';
import Navigation from '../components/Navigation';
import Horaires from '../components/Horaires';
import Don from '../components/Don';
import Carte from '../components/Carte';
import HomeActu from '../components/HomeActu';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <Navigation />

      {/* Section de bienvenue */}
      <section className="hero">
        <h1>Bienvenue sur le site de la paroisse</h1>
      </section>

      {/* Section image inspirante */}
      <section className="video-section">
        <div>
          <h2>Paroisse Saint Paul / Saint Martin - Bonneuil sur Marne</h2>
          <div className="video">
            <video src="./simple-video.mp4" controls width="500"></video>
            <div>
              <h3>
                "Dieu est amour, et celui qui demeure dans l’amour demeure en
                Dieu, et Dieu demeure en lui." (1 Jean 4, 16){' '}
              </h3>
              <p>
                Notre paroisse est une famille ouverte à tous. Que vous soyez un
                habitué, un nouveau venu ou en quête de sens, nous vous
                accueillons avec joie. Vous trouverez ici les informations sur
                nos célébrations, nos services et les moyens de vivre et
                partager votre foi au quotidien. Que ce site soit un espace de
                rencontre et d’espérance !
              </p>
            </div>
          </div>
        </div>
      </section>

      <Horaires />
      <Don />
      <HomeActu />
      <Carte />
      <footer>
        <div className="footer-section">
          <ul>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <a href="/"> Mentions légales</a>
            </li>
            <li>
              <a href="/">Politique de confidentialité</a>
            </li>
            <li>
              <NavLink to="/temoigner">Témoigner</NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <a href="/">Donner au denier</a>
            </li>
            <li>
              <a href="/">Facebook</a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Église de Bonneuil-sur-Marne - Tous droits réservés</p>
          <NavLink to="/admin" className={'admin'}>
            <img src="/logo-admin.webp" alt="logo église" />
          </NavLink>
        </div>
      </footer>
    </div>
  );
};

export default Home;
