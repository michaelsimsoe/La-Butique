import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Menu from './components/menu';
import Header from './components/header';
import Categories from './pages/categories';
import Product from './pages/product';
import Home from './pages/home';

function App() {
  const [menuOpen, toggleMenu] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cart, editCart] = useState([]);

  useEffect(() => {
    fetch('api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));

    fetch('api/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const openMenuStyles = menuOpen
    ? 'app-content app-content--menu-open'
    : 'app-content';
  return (
    <Router>
      <div className="overflow-container">
        <Menu
          categories={categories}
          open={menuOpen}
          toggle={toggleMenu}
        ></Menu>
        <Header toggle={toggleMenu} cart={cart} editCart={editCart} />
        <main
          className={openMenuStyles}
          onClick={() => {
            if (!menuOpen) return;

            toggleMenu(false);
          }}
        >
          <Switch>
            <Route path="/categories">
              <Categories products={products} categories={categories} />
            </Route>
            <Route path="/product">
              <Product editCart={editCart} cart={cart} />
            </Route>
            <Route path="/">
              <Home products={products} categories={categories} />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
