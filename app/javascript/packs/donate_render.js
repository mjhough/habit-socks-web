import React from 'react';
import ReactDOM from 'react-dom';
import DonationFlow from '../components/DonationFlow';

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('donate_render');
  ReactDOM.render(<DonationFlow />, node);
});
