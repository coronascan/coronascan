import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../constants';
import './style.css';

const Navigation = ({ children, onClick }) => {
  return (
    <nav className="nav">
      {ROUTES.map(({ path, name }) => (
        <NavLink
          key={path}
          activeClassName="active"
          exact={path === '/'}
          to={path}
        >
          {name}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;
