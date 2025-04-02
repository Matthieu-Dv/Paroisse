import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

const Horaires = () => {
  const [horaires, setHoraires] = useState([]);

  const joursDeSemaine = [
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
    'Dimanche',
  ];

  useEffect(() => {
    const fetchHoraires = async () => {
      const querySnapshot = await getDocs(collection(db, 'horaires'));
      const horairesData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Séparer les événements des horaires classiques
      const evenements = horairesData.filter(
        (h) => h.catégorie === 'Événements'
      );
      const autresHoraires = horairesData.filter(
        (h) => h.catégorie !== 'Événements'
      );

      // Fonction pour convertir une date texte en objet Date
      const parseDate = (jour, heure) => {
        const moisMapping = {
          janvier: 0,
          février: 1,
          mars: 2,
          avril: 3,
          mai: 4,
          juin: 5,
          juillet: 6,
          août: 7,
          septembre: 8,
          octobre: 9,
          novembre: 10,
          décembre: 11,
        };

        const regex = /(\w+) (\d{1,2}) (\w+)/; // Ex: "Vendredi 7 mars"
        const match = jour.match(regex);
        if (!match) return new Date(); // Sécurité

        const [, , jourNum, moisTxt] = match; // ✅ Correction ici
        const mois = moisMapping[moisTxt.toLowerCase()];
        const annee = new Date().getFullYear(); // Année actuelle

        return new Date(annee, mois, jourNum, ...heure.split(':').map(Number));
      };

      // Trier les événements par date et heure
      evenements.sort(
        (a, b) => parseDate(a.jour, a.heure) - parseDate(b.jour, b.heure)
      );

      // Trier les autres horaires par l’ordre des jours de la semaine
      autresHoraires.sort((a, b) => {
        return joursDeSemaine.indexOf(a.jour) - joursDeSemaine.indexOf(b.jour);
      });

      // Fusionner les deux listes
      setHoraires([...autresHoraires, ...evenements]);
    };

    fetchHoraires();
  }, []);

  return (
    <section className="horaires">
      <h2>Messes et Dévotions</h2>
      <p>
        Retrouvez ici les horaires des messes et des adorations, ainsi que les
        événements à venir.
      </p>

      <div className="horaires-container">
        <div>
          {['Saint-Paul', 'Saint-Martin'].map((categorie) => (
            <table key={categorie} className={`horaires-table ${categorie}`}>
              <caption>⛪ Horaires - {categorie}</caption>
              <thead>
                <tr>
                  <th>Jour</th>
                  <th>Horaire</th>
                  <th>Activité / Office</th>
                </tr>
              </thead>
              <tbody>
                {horaires
                  .filter((h) => h.catégorie === categorie)
                  .map((horaire) => (
                    <tr key={horaire.id}>
                      <td>{horaire.jour}</td>
                      <td>{horaire.heure}</td>
                      <td>{horaire.description}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          ))}
        </div>
        <div>
          {['Événements'].map((categorie) => (
            <table key={categorie} className={`horaires-table ${categorie}`}>
              <caption>⛪ Horaires - {categorie}</caption>
              <thead>
                <tr>
                  <th>Jour</th>
                  <th>Horaire</th>
                  <th>Activité / Office</th>
                </tr>
              </thead>
              <tbody>
                {horaires
                  .filter((h) => h.catégorie === categorie)
                  .map((horaire) => (
                    <tr key={horaire.id}>
                      <td>{horaire.jour}</td>
                      <td>{horaire.heure}</td>
                      <td>{horaire.description}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          ))}
        </div>
      </div>
      <hr />
      <div className="horaires-container">
        <table className="horaires-table">
          <caption>Accueil Paroissial</caption>
          <thead>
            <tr>
              <th>Jour</th>
              <th>Saint Paul</th>
              <th>Saint Martin</th>
            </tr>
          </thead>
          <tbody>
            {joursDeSemaine.map((jour) => {
              const saintPaulHoraire = horaires.find(
                (h) => h.jour === jour && h.eglise === 'Saint-Paul'
              );
              const saintMartinHoraire = horaires.find(
                (h) => h.jour === jour && h.eglise === 'Saint-Martin'
              );

              return (
                <tr key={jour}>
                  <td>{jour}</td>
                  <td>{saintPaulHoraire ? saintPaulHoraire.heure : '-'}</td>
                  <td>{saintMartinHoraire ? saintMartinHoraire.heure : '-'}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Horaires;
