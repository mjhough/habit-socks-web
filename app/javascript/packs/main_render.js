import React from 'react';
import ReactDOM from 'react-dom';
import MiniCart from '../components/MiniCart';
import AddToCart from '../components/AddToCart';

document.addEventListener('DOMContentLoaded', () => {
  const miniCartNode = document.getElementById('mini_cart_render')
  const addToCartNode = document.getElementById('add_to_cart_render')

  if (miniCartNode && window.location.href.indexOf('cart') < 0) ReactDOM.render(<MiniCart />, miniCartNode);
  if (addToCartNode) ReactDOM.render(<AddToCart />, addToCartNode);
});
