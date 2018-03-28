import React from 'react';

const AddToCart = () => {
  const handleClick = () => {
    const cart = parseInt(localStorage.getItem('cart'));
    const newCart = cart + 1;
    cart ? localStorage.setItem('cart', newCart) : localStorage.setItem('cart', 1);
    window.location.href = '/cart';
  }
  return (
    <a className='btn btn--primary type-uppercase' onClick={handleClick}>
      <span className='btn__text'>Add to Cart</span>
    </a>
  );
}

export default AddToCart;
