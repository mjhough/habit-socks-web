import React from 'react';

class CheckoutSuccess extends React.Component {
  render() {
    return (
      <section className="text-center">
          <div className="container">
              <div className="row">
                  <div className="col-sm-10 col-md-8">
                      <h2>Thanks for your order {this.props.customerName}!</h2>
                      <p className="lead"><strong>Order Details:</strong><br />
                        <span className='heavy-text'>Amount:</span> ${this.props.paidAmount}
                        <br />
                        <span className='heavy-text'>Shipping to:</span> {this.props.shipTo}
                        <br /><br />
                        You will receive an email shortly with your order details.
                      </p>
                  </div>
              </div>
          </div>
      </section>
    )
  }
}

export default CheckoutSuccess;
