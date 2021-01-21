import React from 'react';

export default function ProductAmount({ amount, setAmount }) {
  const decrement = () => {
    if (amount <= 1) return;
    setAmount(amount - 1);
  };
  const increment = () => {
    setAmount(amount + 1);
  };

  return (
    <div className="product__amount">
      <h4>Quantity</h4>
      <div className="counter">
        <span className="decrement" onClick={() => decrement()}>
          -
        </span>
        <span className="increment" onClick={() => increment()}>
          +
        </span>
        <output>{amount}</output>
      </div>
    </div>
  );
}
