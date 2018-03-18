import React from 'react';
import ReactDOM from 'react-dom';
import CheckoutFlow from '../components/CheckoutFlow';

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('checkout_flow_render')

  ReactDOM.render(<CheckoutFlow />, node);
})
