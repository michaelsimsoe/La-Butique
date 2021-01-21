import React, { useEffect, useState } from 'react';

import CartSvg from '../svg/cartSvg';

export default function Cart({ location, cart, editCart }) {
  const cartStyle = location === 'categories' ? 'cart cart--dark' : 'cart';
  let [cartTotal, setCartTotal] = useState(0);
  let [openCart, setOpenCart] = useState(false);
  let cartContentStyle =
    cart.length > 0
      ? 'cart__content-display cart__content-display--content'
      : 'cart__content-display';

  let cartOpenStyle = openCart
    ? 'cart__content cart__content--open'
    : 'cart__content';

  let cartContent = cart.reduce(
    (items, item) => {
      if (items[item.id]) {
        items[item.id].quantity += 1;
      } else {
        items[item.id] = item;
        items[item.id].quantity = 1;
      }

      return items;
    },
    [cart]
  );
  cartContent.slice(0, 1);

  useEffect(() => {
    cartContentStyle =
      cart.length > 0
        ? 'cart__content-display cart__content-display--content'
        : 'cart__content-display';

    let sum = 0;
    for (let item in cartContent) {
      if (Array.isArray(cartContent[item])) continue;
      sum += cartContent[item].quantity * cartContent[item].price;
      setCartTotal(sum);
    }
  }, [cartContent]);

  return (
    <div className={'cart__container'}>
      <div className={cartStyle} onClick={() => setOpenCart(!openCart)}>
        <CartSvg />
        <div className={cartContentStyle}></div>
      </div>
      <div className={cartOpenStyle}>
        <ul>
          {cart.length > 0 &&
            Object.keys(cartContent).map((item) => {
              if (Array.isArray(cartContent[item])) return;

              return (
                <li key={cartContent[item].name}>
                  <span>{cartContent[item].quantity}</span>{' '}
                  {cartContent[item].name}
                </li>
              );
            })}
        </ul>
        <div className="cart__total">
          <span className="cart__total-sign">Total $</span>
          <span className="cart__total-sign">{cartTotal ? cartTotal : 0}</span>
        </div>
      </div>
    </div>
  );
}
