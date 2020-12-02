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
              <i
                class="fas fa-globe-europe"
                style={{
                  fontSize: '2em',
                  marginRight: '0.1em',
                }}
              ></i>
              MeinShop
            </Link>
          </li>
        </ul>
        <ul className="nav-ul">
          <li className="nav-li">
            <Link className="nav-link" to="/">
              <i class="fas fa-store"></i> Home
            </Link>
          </li>
          <li className="nav-li">
            <Link className="nav-link" to="/cart">
              <i class="fas fa-shopping-cart"></i> Cart
            </Link>
          </li>
          <li className="nav-li">
            <Link className="nav-link" to="/login">
              <i class="fas fa-user"></i> Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
