import React from 'react';

const CheckoutSuccess = ({ customerName, paidAmount, shipTo }) => {
  return (
    <section className="text-center">
        <div className="container">
            <div className="row">
                <div className="col-sm-10 col-md-8">
                    <h2>Thanks for your order {customerName}!</h2>
                    <p className="lead"><strong>Order Details:</strong><br />
                      <span className='heavy-text'>Amount:</span> ${paidAmount}
                      <br />
                      <span className='heavy-text'>Shipping to:</span> {shipTo}
                      <br /><br />
                      You will receive an email shortly with your order details.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CheckoutSuccess;
