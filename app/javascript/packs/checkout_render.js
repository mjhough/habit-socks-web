import React from 'react';
import ReactDOM from 'react-dom';
import Checkout from '../components/Checkout';

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('checkout_render')

  ReactDOM.render(<Checkout name='Habit Socks' description='A sock charity' amount={16.50} />, node);
})
