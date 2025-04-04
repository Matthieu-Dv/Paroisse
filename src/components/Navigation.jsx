import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navigation">
      <div className="nav-container">
        {/* Logo */}
        <div className="logo">Église de Bonneuil</div>

        {/* Bouton menu burger */}
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>

        {/* Menu déroulant */}
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setMenuOpen(false)}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/actualites"
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setMenuOpen(false)}>
              Actualités
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sacrements"
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setMenuOpen(false)}>
              Sacrements et services
            </NavLink>
          </li>
          <hr />
          {/* Icône Facebook */}
          <li className="nav-icons">
            <a
              href="https://www.facebook.com/saintpauldebonneuil?locale=fr_FR"
              target="_blank"
              className="icon-link">
              <FontAwesomeIcon icon={faFacebook} className="icon" />
            </a>
          </li>
          {/* Lien Denier */}
          <li className="denier-link">
            <a
              href="https://denier.diocese94.fr/denier"
              target="_blank"
              className="denier">
              Denier de l'Église
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
