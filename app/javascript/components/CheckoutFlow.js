import React from 'react';
import postal from 'postal';
import CartView from './CartView';
import CheckoutSuccess from './CheckoutSuccess';

class CheckoutFlow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false
    }
  }

  componentDidMount() {
    postal.subscribe({
      channel: 'checkout',
      topic: 'checkout.success',
      callback: this.checkoutSuccess.bind(this)
    });
  }

  checkoutSuccess(data, env) {
    if (data.checkout === 'success') this.setState({ success: true });
  }

  render() {
    return this.state.success
      ? <CheckoutSuccess />
      : <CartView />
  }
}

export default CheckoutFlow;
