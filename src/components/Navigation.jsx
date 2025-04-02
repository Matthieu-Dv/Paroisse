import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <nav className="navigation">
      <div className="nav-container">
        <ul className="nav-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : '')}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/actualites"
              className={({ isActive }) => (isActive ? 'active' : '')}>
              Actualités
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sacrements"
              className={({ isActive }) => (isActive ? 'active' : '')}>
              Sacrements et services
            </NavLink>
          </li>
        </ul>
        <button className="login-btn" onClick={() => navigate('/login')}>
          <FontAwesomeIcon icon={faFacebookF} className="icon" />
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
