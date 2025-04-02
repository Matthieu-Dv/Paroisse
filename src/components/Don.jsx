import React from 'react';

const Don = () => {
  return (
    <section className="don">
      <div className="don-container">
        <h2>💖 Soutenir notre paroisse</h2>
        <p className="don-intro">
          "Il y a plus de bonheur à donner qu'à recevoir." <br />
          <strong>— Actes 20:35</strong>
        </p>

        <p>
          Votre don permet à notre paroisse de continuer à vivre : célébrer les
          offices, loger le Curé, entretenir notre église, etc.
          <strong> Chaque contribution compte !</strong>
        </p>

        <p className="don-info">
          📌 **Important :** Lors du paiement, pensez à bien sélectionner{' '}
          <strong>Église Bonneuil</strong> pour que votre don lui soit attribué.
        </p>

        <a
          href="https://denier.diocese94.fr/denier"
          target="_blank"
          rel="noopener noreferrer"
          className="don-button"
          aria-label="Faire un don"
          title="Lien vers le site du diocèse">
          Je fais un don 🙏
        </a>
      </div>
    </section>
  );
};

export default Don;
