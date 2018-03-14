import React from 'react';
import postal from 'postal';

class AddToCart extends React.Component {

  handleClick(env) {
    const cart = parseInt(localStorage.getItem('cart'));
    const newCart = cart + 1;
    postal.publish({
      channel: 'carts',
      topic: 'item.add',
      data: {
        quantity: newCart || 1
      }
    });

    cart ? localStorage.setItem('cart', newCart) : localStorage.setItem('cart', 1);
  }

  render () {
    return (
      <a className='btn btn--primary type-uppercase' onClick={this.handleClick}>
        <span className='btn__text'>Add to Cart</span>
      </a>
    );
  }
}

export default AddToCart;
