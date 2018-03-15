import React from 'react';
import ReactDOM from 'react-dom';
import CartView from '../components/CartView';

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('cart_view_render')

  ReactDOM.render(<CartView />, node);
})
