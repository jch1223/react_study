// src/components/Button/Button.js
import React from 'react';
import './Button.scss';
const Button = ({ text }) => {
  return (
    <button className='button' type='submit'>
      {text}
    </button>
  );
};
export default Button;
