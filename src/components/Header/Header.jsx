import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="nav-ul">
          <li className="nav-li">
            <Link className="nav-link"></Link>
          </li>
          <li className="nav-li"></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
