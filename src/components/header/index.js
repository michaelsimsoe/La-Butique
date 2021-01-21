import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Cart from '../cart';
import Hamburger from '../svg/hamburger';

export default function Header({ toggle, cart, editCart }) {
  const location = useLocation();
  let currentPath = location.pathname.match(/(categories)/);

  if (currentPath) {
    currentPath = currentPath[0];
  }

  useEffect(() => {
    currentPath = location.pathname.match(/(categories)/);
    if (currentPath) {
      currentPath = currentPath[0];
    }
  }, [location]);

  return (
    <header className="app-header">
      <button className="hamburger-btn" onClick={() => toggle(true)}>
        <Hamburger location={currentPath} />
      </button>
      <Cart location={currentPath} cart={cart} editCart={editCart} />
    </header>
  );
}
