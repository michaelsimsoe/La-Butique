import React from 'react';

import CartSvg from '../svg/cartSvg';

export default function Button({children, clickFn, color}) {
  const btnColor = color ? {background: color} : {};
  return (
    <button className="btn" style={btnColor}>
      {children}
    </button>
  );
}
