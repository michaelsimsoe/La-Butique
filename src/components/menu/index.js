import React from 'react';
import { NavLink } from 'react-router-dom';
import PatternBottom from '../../components/svg/patternBottom';

// ICONS
import Close from './icons/close';
import Home from './icons/home';
import Saved from './icons/saved';
import Settings from './icons/settings';
import Product from './icons/product';
import Profile from './icons/profile';
import Wallet from './icons/wallet';
import Help from './icons/help';
import Signout from './icons/signout';

export default function Menu({ open, toggle, categories }) {
  const openMenuStyles = open ? 'app-menu app-menu--open' : 'app-menu';
  return (
    <section className={openMenuStyles}>
      <header className="app-menu__header">
        <div className="profile">
          <img src="" alt="" />
          <div className="profile__info">
            <h4>Hayley Barles</h4>
            <h5>hayley.barles@gmail.com</h5>
          </div>
        </div>
        <div onClick={() => toggle(!open)} className="app-menu__close">
          <Close />
        </div>
      </header>
      <nav className="app-menu__nav">
        <ul>
          <li>
            <Home />
            <NavLink
              exact={true}
              to="/"
              onClick={() => toggle(false)}
              activeClassName="navigation__item--active"
            >
              Home
            </NavLink>
          </li>
          <li>
            <Saved />
            <NavLink to="/" onClick={() => toggle(false)}>
              Saved Items
            </NavLink>
          </li>
          {/* <li>
            <Settings />
            <NavLink to="/" onClick={() => toggle(false)}>
              App Settings
            </NavLink>
          </li> */}
          <li>
            <Product />
            <NavLink
              to="/categories"
              onClick={() => toggle(false)}
              activeClassName="navigation__item--active"
            >
              Products
            </NavLink>
            <ul>
              {categories &&
                categories.map((category) => {
                  return (
                    <li key={category.name}>
                      <NavLink
                        onClick={() => toggle(false)}
                        to={`/categories/${category.name}`}
                      >
                        {category.name}
                      </NavLink>
                    </li>
                  );
                })}
            </ul>
          </li>
          <li>
            <Profile />
            <NavLink to="/" onClick={() => toggle(false)}>
              Profile
            </NavLink>
          </li>
          <li>
            <Wallet />
            <NavLink to="/" onClick={() => toggle(false)}>
              Wallet
            </NavLink>
          </li>
          <li>
            <Help />
            <NavLink to="/" onClick={() => toggle(false)}>
              Help &amp; FAQs
            </NavLink>
          </li>
        </ul>
      </nav>
      <footer className="app-menu__footer">
        <Signout /> Log Out
      </footer>
      <div className="pattern-bottom-container">
        <PatternBottom />
      </div>
    </section>
  );
}
