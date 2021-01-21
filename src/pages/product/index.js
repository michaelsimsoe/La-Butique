import React, { useState, useEffect } from 'react';
import { useLocation, Redirect } from 'react-router-dom';

import ProductAmount from './productAmount';

import PatternTop from '../../components/svg/patternTop';
import Loader from '../../components/loader';

import bag from './rodkorsveske.png';
import Hearth from '../../components/svg/hearth';
import RatingStar from '../../components/svg/ratingStar';
import CartSvg from '../../components/svg/cartSvg';

export default function Product({ editCart, cart }) {
  const [product, setProduct] = useState([]);
  const [amount, setAmount] = useState(1);
  const location = useLocation();
  const productId = location.pathname.match(/\d+/g);

  useEffect(() => {
    let productUrl = `/api/products/${productId}`;
    fetch(productUrl)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const addToCart = () => {
    console.log(amount);
    let quantity = [];
    for (let i = 0; i < amount; i++) {
      quantity.push(product);
    }
    editCart([...cart, ...quantity]);
    setAmount(1);
  };

  if (!productId) {
    return <Redirect to="/" />;
  }
  if (!product) {
    return <Loader />;
  }
  return (
    <>
      <article className="product">
        <section className="product__top">
          <div className="pattern-container">
            <PatternTop />
          </div>
          <header className="product__header">
            <div className="product__naming">
              <h3 className="product__brand">{product.brand}</h3>
              <h2 className="product__name">{product.name}</h2>
            </div>
            <div className="product__rating">
              <RatingStar />
              {product.rating}
            </div>
          </header>
          <div className="product__data">
            <div className="product__color">
              {product.color} <span className="color-circle"></span>
            </div>
            <div className="product__size">Size {product.size}</div>
          </div>
        </section>
        <section className="product__bottom">
          <div className="product__visuals">
            <div className="product__like">
              <Hearth />
            </div>
            <figure className="product__image">
              <img src={product.img} alt="" />
            </figure>
          </div>
          <section className="product__description-container">
            <h3 className="product__description-heading">Description</h3>
            <p className="product__description">{product.description}</p>
          </section>
          <ProductAmount setAmount={setAmount} amount={amount} />
        </section>
        <div className="product__purchase-container">
          <div className="product__price">
            <span>$</span>
            <span>{product.price}</span>
          </div>
          <button className="product__buy-btn" onClick={() => addToCart()}>
            <span>Buy Now</span>
            <CartSvg />
          </button>
        </div>
      </article>
    </>
  );
}
