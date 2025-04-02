import React from 'react';

import Navigation from '../components/Navigation';
import Horaires from '../components/Horaires';
import Don from '../components/Don';
import Carte from '../components/Carte';

const Home = () => {
  return (
    <div className="home">
      <Navigation />

      {/* Section de bienvenue */}
      <section className="hero">
        <h1>Bienvenue sur le site de la paroisse</h1>
        <p>Convertissez-vous et croyez à l'Evangile</p>
      </section>

      {/* Section image inspirante */}
      <section className="image-section">
        <div>
          <h2>
            Bienvenue sur le site de la paroisse Saint Paul / Saint Martin !
          </h2>
          <div className="video">
            <video
              src="https://assets.codepen.io/6093409/hubspot-video-example.mp4"
              controls
              width="500"></video>
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
      <section className="accueil-actu">
        <div className="carre">
          <img src="/jubileo.jpg" alt="fiche jubileo" />
          <div>
            <h2>Fête diocésaine de l’Espérance</h2>
            <p>
              Un grand rassemblement à vivre en famille, en paroisse, mouvement
              ou service, en invitant largement autour de soi. Une journée pour
              se rencontrer, partager, fêter et célébrer autour de grands temps
              : accueil festif, villages thématiques (témoins, rendez-vous,
              idées, expression artistique, pépinière, stands, ressources,
              démarche de réconciliation…)
            </p>
          </div>
        </div>
        <div className="carre">
          <img src="/jubileo.jpg" alt="fiche jubileo" />
          <div>
            <h2>Fête diocésaine de l’Espérance</h2>
            <p>
              Un grand rassemblement à vivre en famille, en paroisse, mouvement
              ou service, en invitant largement autour de soi. Une journée pour
              se rencontrer, partager, fêter et célébrer autour de grands temps
              : accueil festif, villages thématiques (témoins, rendez-vous,
              idées, expression artistique, pépinière, stands, ressources,
              démarche de réconciliation…)
            </p>
          </div>
        </div>
        <button>Voir plus d'actu</button>
      </section>
      <Carte />
      <footer>Contactez la paroisse : numéro de téléphone, adresse mail</footer>
    </div>
  );
};

export default Home;
