import React from 'react';
import postal from 'postal';
import Checkout from './Checkout';

export default class ViewCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {quantity: localStorage.getItem('cart')};
  }

  componentWillMount() {
    fetch('/api/products')
      .then(response => {
        response.json().then(data => {
          const sockInfo = data['data'][0]['attributes'];
          this.setState({
            sockInfo: {
              name: sockInfo.name,
              imageURL: sockInfo.image_url,
              price: sockInfo.price.toFixed(2),
              description: sockInfo.description,
              shippingInfo: sockInfo.shipping_info
            }
          })
        });
      });
  }

  removeItem() {
    localStorage.removeItem('cart');
    this.setState({quantity: 0});
    postal.publish({
      channel: 'carts',
      topic: 'item.add',
      data: {
        quantity: 0
      }
    });
  }

  changeQuantity(ev) {
    const newQuantity = parseInt(ev.target.value);
    if (newQuantity < 1 || newQuantity > 99 || !newQuantity) return;
    localStorage.setItem('cart', newQuantity);
    this.setState({quantity: newQuantity});
    postal.publish({
      channel: 'carts',
      topic: 'item.add',
      data: {
        quantity: newQuantity
      }
    });
  }

  render() {
    const { quantity, sockInfo } = this.state;

    if (!sockInfo) return <div className='spinner'></div>;
    
    if (quantity < 1) return (
      <div className='row no--items'>
        <h2 className='text-center'>There are no items in your cart</h2>
      </div>
    )

    const total = (sockInfo.price * quantity).toFixed(2);
    return (
      <div className="view--cart">
        <div className="column-labels">
          <label className="product-image">Image</label>
          <label className="product-details">Product</label>
          <label className="product-price">Price</label>
          <label className="product-quantity">Quantity</label>
          <label className="product-removal">Remove</label>
          <label className="product-line-price">Total</label>
        </div>

        <div className="product">
          <div className="product-image">
            <img src={sockInfo.imageURL} />
          </div>
          <div className="product-details">
            <div className="product-title">{sockInfo.name}</div>
            <p className="product-description">{sockInfo.description}</p>
          </div>
          <div className="product-price">{sockInfo.price}</div>
          <div className="product-quantity">
            <input type='number' value={quantity} onChange={this.changeQuantity.bind(this)} min="1" />
          </div>
          <div className="product-removal">
            <a className='btn btn--primary type-uppercase' onClick={this.removeItem.bind(this)}>
              <span className='btn__text'>Remove</span>
            </a>
          </div>
          <div className="product-line-price">{total}</div>
        </div>

        <div className="totals">
          <div className="totals-item">
            <label>Subtotal</label>
            <div className="totals-value" id="cart-subtotal">{total}</div>
          </div>
          <div className="totals-item">
            <label>Shipping</label>
            <div className="totals-value" id="cart-shipping">0.00</div>
          </div>
          <div className="totals-item totals-item-total">
            <label>Grand Total</label>
            <div className="totals-value" id="cart-total">{total}</div>
          </div>
          <div className="totals-item totals-item-total checkout--container">
            <Checkout name='Habit Socks' description='A sock charity' amount={parseFloat(total)} />
          </div>
        </div>
      </div>
    );
  }
}


