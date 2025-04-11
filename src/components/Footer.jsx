import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer-section">
        <div>
          <h2>Eglise Saint Paul : </h2>
          <p>17 Rue des Beaux Regards, 94380 Bonneuil-sur-Marne</p>
          <h2>Eglise Saint Martin : </h2>
          <p>3 Rue de l'Église, 94380 Bonneuil-sur-Marne</p>
        </div>
        <ul>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <a href="/">Facebook</a>
          </li>
          <li>
            <NavLink to="/temoigner">Témoigner</NavLink>
          </li>
          <li>
            <a href="/"> Mentions légales</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/">Donner au denier</a>
          </li>
          <li>
            <a href="/">Politique de confidentialité</a>
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
  );
};

export default Footer;
