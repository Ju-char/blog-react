import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

export default ({ categories }) => (
  <header className="menu">
    <nav>
      {categories.map(({ label, route }) => (
        <NavLink
          exact
          to={route}
          key={label}
          className="menu-link"
          activeClassName="menu-link--active"
        >
          {label}
        </NavLink>
      ))}
    </nav>
  </header>
);
