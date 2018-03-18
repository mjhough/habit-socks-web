import React from 'react';
import CartView from './CartView';
import CheckoutSuccess from './CheckoutSuccess';

class CheckoutFlow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false
    }
  }
  render() {
    return this.state.success
      ? <CheckoutSuccess />
      : <CartView />
  }
}

export default CheckoutFlow;
