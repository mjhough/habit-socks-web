import React from 'react';

class MiniCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: localStorage.getItem('cart') || 0
    }
  }

  handleClick() {
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


export default MiniCart;
