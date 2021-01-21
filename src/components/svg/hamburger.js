import React from 'react';

export default function Hamburger({ location }) {
  const hamburgerStyle =
    location === 'categories'
      ? 'hamburger-icon hamburger-icon--dark'
      : 'hamburger-icon';
  return (
    <svg className={hamburgerStyle} viewBox="0 0 409.6 375.47">
      <title>menu</title>
      <path
        d="M392.53,17.07H17.07a17.07,17.07,0,1,0,0,34.13H392.53a17.07,17.07,0,1,0,0-34.13Z"
        transform="translate(0 -17.07)"
      />
      <path
        d="M287.5,187.73H12.5C5.6,187.73,0,195.37,0,204.8s5.6,17.07,12.5,17.07h275c6.9,0,12.5-7.64,12.5-17.07S294.4,187.73,287.5,187.73Z"
        transform="translate(0 -17.07)"
      />
      <path
        d="M287.5,358.4H12.5C5.6,358.4,0,366,0,375.47s5.6,17.06,12.5,17.06h275c6.9,0,12.5-7.64,12.5-17.06S294.4,358.4,287.5,358.4Z"
        transform="translate(0 -17.07)"
      />
    </svg>
  );
}
