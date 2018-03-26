import React from 'react';

class CheckoutSuccess extends React.Component {
  render() {
    return (
      <section className="text-center">
          <div className="container">
              <div className="row">
                  <div className="col-sm-10 col-md-8">
                      <h2>Thanks for your donation {this.props.customerName}!</h2>
                      <p className="lead">You will receive an email shortly with your receipt.</p>
                  </div>
              </div>
          </div>
      </section>
    )
  }
}

export default CheckoutSuccess;
