import React from 'react';

class CheckoutSuccess extends React.Component {
  render() {
    return (
      <section className="imagebg feature-large-7 switchable">
        <div className="background-image-holder"> <img alt="background" src={this.props.successImage} /> </div>
        <div className="container">
            <div className="row">
                <div className="col-sm-7 col-md-5">
                    <div className="boxed boxed--lg border--round bg--white">
                        <div className="col-md-10 col-md-offset-1 col-sm-12">
                            <h3>Thanks for your order {this.props.customerName}!</h3>
                            <p className="lead"><strong>Order Details:</strong><br />
                              <span className='heavy-text'>Amount:</span> ${this.props.paidAmount}
                              <br />
                              <span className='heavy-text'>Shipping to:</span> {this.props.shipTo}
                              <br /><br />
                              You will receive an email shortly with your order details.
                            </p>
                            <hr className="short" />
                            <p>Check out the contact us page to find out how to get in contact if you need any help.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    )
  }
}

export default CheckoutSuccess;
