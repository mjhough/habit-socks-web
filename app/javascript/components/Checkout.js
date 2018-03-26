import React from 'react';
import postal from 'postal';
import $ from 'jquery';
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
    data: {
      checkout: 'success',
      data: JSON.stringify(data)
    }
  });
};

const errorPayment = data => {
  console.log('Payment Error:', data);
};

const onToken = (description, quantity, productSku) => token => {
  const shipping = {
    name: token.card.name,
    address: {
      line1: token.card.address_line1,
      city: token.card.address_city,
      state: token.card.address_state,
      country: token.card.address_country,
      postal_code: token.card.address_zip
    }
  }
  const items = [{
      type: 'sku',
      parent: productSku,
      quantity: quantity
    }];
  $.post(PAYMENT_SERVER_URL, {
    pay: { source: token.id },
    order: {
      email: token.email,
      shipping: shipping,
      items: items,
      currency: CURRENCY
    }
  }, successPayment).fail(errorPayment);
}

class Checkout extends React.Component {
  static defaultProps = {
    buttonClassName: 'btn btn--primary type-uppercase checkout--button',
    buttonTextClassName: 'btn__text',
    label: 'Checkout'
  }
  render() {
    const { name, description, amount, quantity, productSku, buttonClassName, buttonTextClassName, label } = this.props;
    return (
      <StripeCheckout 
        className={buttonClassName}
        buttonTextClassName={buttonTextClassName}
        name={name}
        description={description}
        amount={fromAUDToCent(amount)}
        token={onToken(description, quantity, productSku)}
        currency={CURRENCY}
        stripeKey={STRIPE_PUBLISHABLE}
        allowRememberMe={false}
        label={label}
        shippingAddress={false}
        billingAddress={true}
      />
    )
  }
}




export default Checkout;
