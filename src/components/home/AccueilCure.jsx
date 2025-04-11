import React from 'react';

const AccueilCure = () => {
  return (
    <section className="welcome-section">
      <div className="container">
        <div className="section-title">
          <h1>Bienvenue sur le site de la paroisse</h1>
          <p>Une communauté vivante, un chemin vers le Christ</p>
        </div>

        <div className="welcome-block">
          <div className="welcome-message">
            <img src="./camille_père.jpg" alt="Père Camille" />
            <h2>Parole d'accueil du curé</h2>
            <blockquote>
              « Chers frères et sœurs, soyez les bienvenus sur le site de notre
              paroisse de Bonneuil-sur-Marne. Que cet espace vous guide vers les
              informations utiles, mais aussi qu’il soit une porte ouverte vers
              la prière, la rencontre, et l’espérance.{' '}
              <strong>Que le Seigneur vous bénisse.</strong> »
            </blockquote>
            <p className="author">— Père Camille</p>
          </div>
          <div className="welcome-video">
            <video src="./simple-video.mp4" controls></video>
            <p className="video-caption">
              « La foi naît de ce qu’on entend » (Rm 10,17)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccueilCure;
