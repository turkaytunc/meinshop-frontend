import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="nav-container">
        <div className="nav-brand">MeinShop</div>
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
