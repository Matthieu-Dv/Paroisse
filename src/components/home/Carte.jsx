import React from 'react';

const Carte = () => {
  return (
    <section className="carte">
      <h2>Ou trouver nos deux églises ?</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2629.500339177332!2d2.4758548967895457!3d48.77233750000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e60b626310d8fd%3A0xcb599a9bdde3add4!2s%C3%89glise%20Saint-Paul!5e0!3m2!1sfr!2sfr!4v1742896306044!5m2!1sfr!2sfr"
        width="350"
        height="250"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
    </section>
  );
};

export default Carte;
