import React from 'react';
import postal from 'postal';

class CartDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      quantity: localStorage.getItem('cart') || 0
    }
  }

  componentDidMount() {
    let subscription = postal.subscribe({
      channel: 'carts',
      topic: 'item.add',
      callback: this.handleStorageChange.bind(this)
    });
  }

  handleStorageChange(data, env) {
    this.setState({
      quantity: data.quantity,
      productId: data.productId
    });
  }

  handleClick() {
    // TODO: Implement dropdown cart
    window.location.href = '/cart';
  }

  render () {
    return (
      <div className='cart--nav' onClick={this.handleClick}>
        <i className='fa fa-shopping-bag cart--nav--icon'></i>
        <span className='cart--number'>{this.state.quantity}</span>
      </div>
    );
  }
}


export default CartDropdown;



