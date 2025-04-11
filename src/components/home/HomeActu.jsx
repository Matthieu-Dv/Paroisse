import React from 'react';
import { NavLink } from 'react-router-dom';

const HomeActu = () => {
  return (
    <section className="accueil-actu">
      <h2 className="section-title">Actualités</h2>
      <div className="carre">
        <img src="/jubileo.jpg" alt="fiche jubileo" />
        <div>
          <h3>Fête diocésaine de l’Espérance</h3>
          <p>
            Un grand rassemblement à vivre en famille, en paroisse, mouvement ou
            service, en invitant largement autour de soi. Une journée pour se
            rencontrer, partager, fêter et célébrer autour de grands temps :
            accueil festif, villages thématiques (témoins, rendez-vous, idées,
            expression artistique, pépinière, stands, ressources, démarche de
            réconciliation…) <a href="/">voir plus</a>
          </p>
        </div>
      </div>
      <div className="carre_2">
        <img src="/alpha.jpg" alt="fiche programme alpha" />
        <div>
          <h3>Parcours Alpha – Session 2025</h3>
          <p>
            Une expérience unique pour échanger sur la foi chrétienne le jeudi
            soir pendant 10 semaines. Les thèmes abordés : – Quel est le sens de
            la vie ? 16 janvier – Qui est Jésus ? 23 janvier – Pourquoi est-il
            mort et ressuscité ? 30 janvier – Prier, lire la Bible pourquoi et
            comment ? – Qui est l’Esprit Saint ? – Dieu guérit-il encore
            aujourd’hui ? – L’Église ? Vous vous posez des questions. Vos amis
            ou voisins se posent des questions. Votre conjoint se pose des
            questions. <a href="/">voir plus</a>
          </p>
        </div>
      </div>
      <NavLink to="/actualites" className="button-actu">
        Voir plus d'actualités
      </NavLink>
    </section>
  );
};

export default HomeActu;
