import React from 'react';

import Promotion from '../../components/promotion';
import PatternTop from '../../components/svg/patternTop';
import ProductCard from '../../components/productCard';

export default function Home({ products }) {
  return (
    <>
      <section className="home-top">
        <div className="wave-top">
          <div className="pattern-container">
            <PatternTop />
          </div>
          <div className="heading">
            <h1>La Butique</h1>
            <h3>For your special needs</h3>
          </div>
        </div>
        <div className="wave-bottom"></div>
        <svg>
          <clipPath id="wave" clipPathUnits="objectBoundingBox">
            <path
              className="st0"
              d="M1,0c0,0-0.3,0.1-0.5,0.1S0.3,0,0,0.1V1h1L1,0z"
            />
          </clipPath>
        </svg>
      </section>
      <section className="home-promotion">
        <Promotion>
          <h1>Check this promotion!</h1>
        </Promotion>
      </section>
      <section className="home-body">
        <h2 className="home-body__heading">Our splendid products!</h2>
        {products &&
          products.map((product) => {
            return <ProductCard product={product} key={product.id} />;
          })}
      </section>
    </>
  );
}
