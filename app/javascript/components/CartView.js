import React from 'react';

export default class ViewCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentWillMount() {
    setTimeout(() => {
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
                shippingInfo: sockInfo.shipping_info,
                quantity: localStorage.getItem('cart')
              }
            })
          });
        });
    }, 3000);
  }

  render() {
    const { sockInfo } = this.state;
    if (!sockInfo) return (
      <div className='spinner'></div>
    )
    const total = (sockInfo.price * sockInfo.quantity).toFixed(2);
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
            <input type='number' value={sockInfo.quantity} min="1" />
          </div>
          <div className="product-removal">
            <button className="remove-product">
              Remove
            </button>
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
        </div>
      </div>
    );
  }
}


