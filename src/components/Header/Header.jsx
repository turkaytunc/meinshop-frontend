import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {
  return (
    <header>
      <nav className="nav-container">
        <ul className="nav-brand">
          <li>
            <Link className="nav-brand-link" to="/">
              MeinShop
            </Link>
          </li>
        </ul>
        <ul className="nav-ul">
          <li className="nav-li">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-li">
            <Link className="nav-link" to="/cart">
              Cart
            </Link>
          </li>
          <li className="nav-li">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
