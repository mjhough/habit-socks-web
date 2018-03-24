import React from 'react';
import postal from 'postal';
import CartView from './CartView';
import CheckoutSuccess from './CheckoutSuccess';

class CheckoutFlow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      checkoutData: []
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
    const checkoutData = JSON.parse(data.data).success;
    if (checkoutData.status === 'paid') this.setState({
      success: true,
      checkoutData: checkoutData
    });
  }

  render() {
    if (this.state.success) {
      const customerName = this.state.checkoutData.shipping.name.split(' ')[0];
      const paidAmount = (this.state.checkoutData.amount / 100).toFixed(2);
      const shipTo = this.state.checkoutData.shipping.address.line1 + ', ' + this.state.checkoutData.shipping.address.city;
      return <CheckoutSuccess customerName={customerName} paidAmount={paidAmount} shipTo={shipTo} />
    } 
    return <CartView productSku='sku_CWxpCQ9W50WpNR' />;
  }
}

export default CheckoutFlow;
