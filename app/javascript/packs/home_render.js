import React from 'react';
import ReactDOM from 'react-dom';
import MiniCart from '../components/MiniCart';
import AddToCart from '../components/AddToCart';

document.addEventListener('DOMContentLoaded', () => {
  const miniCartNode = document.getElementById('mini_cart_render')
  const addToCartNode = document.getElementById('add_to_cart_render')

  ReactDOM.render(<MiniCart />, miniCartNode);
  ReactDOM.render(<AddToCart />, addToCartNode);
})
