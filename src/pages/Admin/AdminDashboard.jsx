import { useEffect, useState } from 'react';
import { db } from '../../firebase';
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from 'firebase/firestore';
import { logout } from '../../components/Auth';

function AdminDashboard() {
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
  const [newHoraire, setNewHoraire] = useState({
    jour: '',
    heure: '',
    description: '',
    catégorie: 'Saint-Paul',
    eglise: 'Saint-Paul',
  });
  const [editId, setEditId] = useState(null);

  // Récupération et tri des horaires
  const fetchHoraires = async () => {
    const querySnapshot = await getDocs(collection(db, 'horaires'));
    const horairesData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // Tri des horaires par jour
    horairesData.sort((a, b) => {
      return joursDeSemaine.indexOf(a.jour) - joursDeSemaine.indexOf(b.jour);
    });

    setHoraires(horairesData);
  };

  useEffect(() => {
    fetchHoraires();
  }, []);

  // Ajout ou modification d'un horaire
  const handleSaveHoraire = async () => {
    if (
      !newHoraire.jour ||
      !newHoraire.heure ||
      !newHoraire.description ||
      !newHoraire.catégorie ||
      !newHoraire.eglise
    ) {
      alert('Veuillez remplir tous les champs');
      return;
    }

    if (editId) {
      // Modifier un horaire existant
      const horaireRef = doc(db, 'horaires', editId);
      await updateDoc(horaireRef, newHoraire);
      setEditId(null);
    } else {
      // Ajouter un nouvel horaire
      await addDoc(collection(db, 'horaires'), newHoraire);
    }

    setNewHoraire({
      jour: '',
      heure: '',
      description: '',
      catégorie: 'Saint-Paul',
      eglise: 'Saint-Paul',
    });
    fetchHoraires();
  };

  // Suppression d'un horaire
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'horaires', id));
    fetchHoraires();
  };

  // Modification d'un horaire
  const handleEdit = (horaire) => {
    setNewHoraire({ ...horaire });
    setEditId(horaire.id);
  };

  return (
    <div className="admin-container">
      <h2 className="admin-title">Tableau de Bord Admin</h2>

      {/* Formulaire d'ajout/modification */}
      <h3 className="admin-subtitle">
        {editId ? 'Modifier un horaire' : 'Ajouter un nouvel horaire'}
      </h3>
      <div className="admin-form">
        <input
          type="text"
          placeholder="Jour"
          value={newHoraire.jour}
          onChange={(e) =>
            setNewHoraire({ ...newHoraire, jour: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Heure"
          value={newHoraire.heure}
          onChange={(e) =>
            setNewHoraire({ ...newHoraire, heure: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Description"
          value={newHoraire.description}
          onChange={(e) =>
            setNewHoraire({ ...newHoraire, description: e.target.value })
          }
        />
        <select
          value={newHoraire.catégorie}
          onChange={(e) =>
            setNewHoraire({ ...newHoraire, catégorie: e.target.value })
          }>
          <option value="Saint-Paul">Saint-Paul</option>
          <option value="Saint-Martin">Saint-Martin</option>
          <option value="Événements">Événements</option>
          <option value="Accueil-Paroissial">Accueil Paroissial</option>
        </select>
        <select
          value={newHoraire.eglise}
          onChange={(e) =>
            setNewHoraire({ ...newHoraire, eglise: e.target.value })
          }>
          <option value="Saint-Paul">Saint-Paul</option>
          <option value="Saint-Martin">Saint-Martin</option>
        </select>

        <button className="admin-button" onClick={handleSaveHoraire}>
          {editId ? 'Modifier' : 'Ajouter'}
        </button>
      </div>

      {/* Liste des horaires sous forme de tableau */}
      <h3 className="admin-subtitle">Liste des horaires</h3>
      <div className="horaires-container-admin">
        {['Saint-Paul', 'Événements', 'Saint-Martin'].map((categorie) => (
          <table key={categorie} className="horaires-table-admin">
            <caption>⛪ Horaires - {categorie}</caption>
            <thead>
              <tr>
                <th>Jour</th>
                <th>Horaire</th>
                <th>Activité / Office</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {horaires
                .filter((h) => h.catégorie === categorie) // 🔥 Utilise `catégorie`
                .map((horaire) => (
                  <tr key={horaire.id}>
                    <td>{horaire.jour}</td>
                    <td>{horaire.heure}</td>
                    <td>{horaire.description}</td>
                    <td>
                      <button
                        className="edit-button"
                        onClick={() => handleEdit(horaire)}>
                        ✏️
                      </button>
                      <button
                        className="delete-button"
                        onClick={() => handleDelete(horaire.id)}>
                        ❌
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        ))}
      </div>
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
                  <td>
                    <button
                      className="edit-button"
                      onClick={() => handleEdit(horaire)}>
                      ✏️
                    </button>
                    <button
                      className="delete-button"
                      onClick={() => handleDelete(horaire.id)}>
                      ❌
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Bouton de déconnexion */}
      <button className="logout-button" onClick={logout}>
        Déconnexion
      </button>
    </div>
  );
}

export default AdminDashboard;
