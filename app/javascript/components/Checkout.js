import React from 'react';
import postal from 'postal';
import axios from 'axios';
import StripeCheckout from './StripeCheckout';

import STRIPE_PUBLISHABLE from '../constants/stripe';
import PAYMENT_SERVER_URL from '../constants/server';

const CURRENCY = 'AUD';

const fromAUDToCent = amount => amount * 100;

const successPayment = data => {
  localStorage.removeItem('cart');
  postal.publish({
    channel: 'checkout',
    topic: 'checkout.success',
    data: { checkout: 'success' }
  });
};

const errorPayment = data => {
  alert('Payment Error');
};

const onToken = (amount, description) => token =>
  axios.post(PAYMENT_SERVER_URL,
    {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromAUDToCent(amount)
    })
    .then(successPayment)
    .catch(errorPayment);

const Checkout = ({ name, description, amount }) =>
  <StripeCheckout 
    className='btn btn--primary type-uppercase checkout--button'
    buttonTextClassName='btn__text'
    name={name}
    description={description}
    amount={fromAUDToCent(amount)}
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
    allowRememberMe={false}
    label='Checkout'
    shippingAddress={true}
    billingAddress={true}
  />

export default Checkout;
