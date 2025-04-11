import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Actualites = () => {
  const newsData = [
    {
      title: 'Fête diocésaine de l’Espérance',
      description:
        'Un grand rassemblement à vivre en famille, en paroisse, mouvement ou service... Une journée pour se rencontrer, partager, fêter et célébrer autour de grands temps : accueil festif, villages thématiques, etc.',
      link: '/',
      image: '/jubileo.jpg',
      date: '9 avril 2025',
    },
    {
      title: 'Parcours Alpha – Session 2025',
      description:
        'Une expérience unique pour échanger sur la foi chrétienne le jeudi soir pendant 10 semaines. Vos amis, voisins ou conjoints se posent des questions : invitez-les !',
      link: '/',
      image: '/alpha.jpg',
      date: '7 avril 2025',
    },
    {
      title: 'Fête diocésaine de l’Espérance',
      description:
        'Un grand rassemblement à vivre en famille, en paroisse, mouvement ou service... Une journée pour se rencontrer, partager, fêter et célébrer autour de grands temps : accueil festif, villages thématiques, etc.',
      link: '/',
      image: '/jubileo.jpg',
      date: '11 avril 2025',
    },
    {
      title: 'Parcours Alpha – Session 2025',
      description:
        'Une expérience unique pour échanger sur la foi chrétienne le jeudi soir pendant 10 semaines. Vos amis, voisins ou conjoints se posent des questions : invitez-les !',
      link: '/',
      image: '/alpha.jpg',
      date: '7 avril 2025',
    },
  ];

  return (
    <div className="home">
      <Navigation />
      <main className="news">
        <h1 className="news__title">Actualités paroissiales</h1>
        <p className="news__intro">
          Retrouvez ici les temps forts et les évènements à venir dans notre
          paroisse et sur notre diocèse.
        </p>

        {newsData.map((news, index) => (
          <div className="news__card" key={index}>
            <img src={news.image} alt={`visuel de ${news.title}`} />
            <div className="news__content">
              <h3>{news.title}</h3>
              <p>
                {news.description} <a href={news.link}>voir plus</a>
              </p>
              <span className="news__date">📅 {news.date}</span>
            </div>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Actualites;
