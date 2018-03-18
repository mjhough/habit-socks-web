import React from 'react';
import ReactDOM from 'react-dom';
import CheckoutFlow from '../components/CheckoutFlow';

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('checkout_flow_render')
  const successImage = node.getAttribute('data-success-image');

  ReactDOM.render(<CheckoutFlow successImage={successImage} />, node);
})
