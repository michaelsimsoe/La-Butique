import React, { useState, useEffect } from 'react';
import { useLocation, Redirect } from 'react-router-dom';

import Promotion from '../../components/promotion';
import ProductCard from '../../components/productCard';
import Button from '../../components/button';

export default function Categories({ products, categories }) {
  const [value, setValue] = useState('all');
  const location = useLocation();

  let currentPath = location.pathname;

  useEffect(() => {
    currentPath = decodeURIComponent(location.pathname).match(
      /(?<=categories\/)[a-z ]+/
    );
    if (currentPath) {
      setValue(currentPath[0]);
    }
  }, [location]);

  if (categories.length < 1) {
    return <Redirect to="/categories" />;
  }

  return (
    <article className="categories">
      <section className="categories__top">
        <h2>Categories</h2>
        <p>
          Check out our vast selection of stuff carriers. Contain your items in
          any way you want. For every occasion!
        </p>

        <label
          className="category__selector-label"
          htmlFor="category__selector"
        >
          Choose Category
        </label>
        <select
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
          className="category__selector"
          name="category__selector"
          id=""
        >
          <option value="all">All</option>
          {categories &&
            categories.map((category) => {
              return (
                <option value={category.name} key={category.name}>
                  {category.name}
                </option>
              );
            })}
        </select>
        <p className="category__description">
          {categories && value === 'all'
            ? 'All our categories'
            : categories.filter((category) => category.name === value)[0]
                .description}
        </p>
      </section>
      <Promotion>
        <h1>Check this promotion!</h1>
      </Promotion>
      <section className="categories__products">
        <header className="categories__filter">
          <Button>Sort</Button>
          <Button color="#abaaba">Filter</Button>
        </header>
        <div className="categories__products-list">
          {products &&
            products
              .filter((product) => {
                if (value === 'all') {
                  return product;
                }
                return product.category === value;
              })
              .map((product) => {
                return <ProductCard product={product} key={product.id} />;
              })}
        </div>
      </section>
    </article>
  );
}
