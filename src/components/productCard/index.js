import React from 'react';
import { Link } from 'react-router-dom';

import RatingStar from '../svg/ratingStar';

export default function ProductCard({ product }) {
  return (
    <section className="product-card">
      <Link to={`/product/${product.id}`}>
        <div className="product-card__card">
          <div className="product-card__rating">
            <RatingStar />
            {product.rating}
          </div>
          <figure className="product-card__image">
            <img
              src={`${product.img}`}
              alt={`Product image of a ${product.color} ${product.brand} ${product.name}`}
            />
          </figure>
        </div>
      </Link>
      <h3 className="product-card__name">{product.name}</h3>
    </section>
  );
}
